import { createOnigScanner, createOnigString, loadWASM } from "vscode-oniguruma"

// constants
import {
  BUILT_IN_GRAMMARS,
  BUILT_IN_LANGUAGE_DEFINITIONS,
  DemoScopeNameInfo
} from "./constants/language-grammer"

// providers
import { SimpleLanguageInfoProvider } from "./providers/common-providers"
import type { ScopeName, TextMateGrammar } from "./providers/common-providers"

// utils
import RegexUtils from "./utils/regex"
import CommonUtils from "./utils/common"
import RegisterUtils from "./utils/register"
import type { LanguageId } from "./utils/register"

// vscode themes
import VsCodeDarkTheme from "./theme/vs-dark-plus-theme"
import VsCodeLightTheme from "./theme/vs-light-plus-theme"

declare var monaco: any

class MonacoTextmateLoader {
  private static provider: SimpleLanguageInfoProvider | undefined

  /**
   * Set a theme for the editor.
   *
   * @param {string} name - the name of the theme
   * @param {any} theme - the theme object
   * @return {void}
   */
  public static setTheme(name: string, theme: any): void {
    if (!this.provider) return

    monaco.editor.defineTheme(name, {
      base: theme.type == "dark" ? "vs-dark" : "vs",
      inherit: true,
      rules: [
        {
          foreground: theme.colors["editor.foreground"],
          background: theme.colors["editor.background"],
          token: ""
        }
      ],
      colors: theme.colors
    })

    const themeData = {
      name: theme.name,
      settings: theme.tokenColors.concat([
        {
          settings: {
            foreground: theme.colors["editor.foreground"],
            background: theme.colors["editor.background"]
          }
        }
      ])
    }

    this.provider.registry.setTheme(themeData)
    this.provider.injectCSS()

    monaco.editor.setTheme(name)
  }

  /**
   * Change the theme of the editor and registry based on the provided theme.
   *
   * @param {string} theme - the theme to be applied
   * @return {void}
   */
  public static changeTheme(theme: string): void {
    if (theme == "vs-dark") {
      monaco.editor.setTheme("vs-dark")

      this.provider!.registry.setTheme(VsCodeDarkTheme)
      this.provider!.injectCSS()
    } else if (theme == "vs") {
      monaco.editor.setTheme("vs")

      this.provider!.registry.setTheme(VsCodeLightTheme)
      this.provider!.injectCSS()
    }
  }

  /**
   * Loads language support and theme for the editor.
   *
   * @param {any} options - the options for the editor
   * @param {string} theme - the theme for the editor
   * @param {monaco.languages.ILanguageExtensionPoint[]} extraLanguages - additional language extension points
   * @param {{ [scopeName: string]: DemoScopeNameInfo }} extraGrammars - additional grammars
   * @param {(scopeName: ScopeName) => Promise<TextMateGrammar>} fetchExtraGrammar - asynchronous function to fetch extra grammar
   * @param {(scopeName: ScopeName) => Promise<any>} fetchExtraConfiguration - asynchronous function to fetch extra configuration
   */
  public static async create(
    element: any,
    options: any,
    theme: string = "vs-dark",
    extraLanguages: any = [],
    extraGrammars: { [scopeName: string]: DemoScopeNameInfo } = {},
    fetchExtraGrammar?: (scopeName: ScopeName) => Promise<TextMateGrammar>,
    fetchExtraConfiguration?: (scopeName: ScopeName) => Promise<any>
  ): Promise<any> {
    const data: ArrayBuffer | Response = await CommonUtils.loadVSCodeOnigurumWASM(options)

    await loadWASM(data)

    const languages: any = [...BUILT_IN_LANGUAGE_DEFINITIONS, ...extraLanguages]
    const grammars: { [scopeName: string]: DemoScopeNameInfo } = {
      ...BUILT_IN_GRAMMARS,
      ...extraGrammars
    }

    const fetchGrammar = async (scopeName: ScopeName): Promise<TextMateGrammar> => {
      if (scopeName in extraGrammars && fetchExtraGrammar) {
        return fetchExtraGrammar(scopeName)
      }

      const { path } = grammars[scopeName]

      const uri = `${options.baseUrl || "/assets"}/monaco-textmate-loader/grammars/${path}`,
        response = await CommonUtils.fetchWrapper(uri),
        grammar = await response.text(),
        type = path.endsWith(".json") ? "json" : "plist"

      return { type, grammar }
    }

    const fetchConfiguration = async (language: LanguageId): Promise<any> => {
      if (language in extraLanguages && fetchExtraConfiguration) {
        return fetchExtraConfiguration(language)
      }

      const uri = `${options.baseUrl || "/assets"}/monaco-textmate-loader/configurations/${language}.json`,
        response = await CommonUtils.fetchWrapper(uri),
        rawConfiguration = await response.text()

      return RegexUtils.rehydrateRegexps(rawConfiguration)
    }

    const onigLib = Promise.resolve({
      createOnigScanner,
      createOnigString
    })

    this.provider = new SimpleLanguageInfoProvider({
      grammars,
      fetchGrammar,
      configurations: languages.map((language: any) => language.id),
      fetchConfiguration,
      theme: theme == "vs-dark" ? VsCodeDarkTheme : VsCodeLightTheme,
      onigLib,
      monaco
    })

    RegisterUtils.registerLanguages(
      languages,
      (language: LanguageId) => this.provider!.fetchLanguageInfo(language),
      monaco
    )

    const editorInstance = monaco.editor.create(element, options)

    this.provider.injectCSS()

    return editorInstance
  }
}

export { MonacoTextmateLoader }
