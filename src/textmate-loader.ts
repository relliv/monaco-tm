import * as monaco from "monaco-editor/esm/vs/editor/editor.api"
import { createOnigScanner, createOnigString, loadWASM } from "vscode-oniguruma"
import "monaco-editor/esm/vs/language/typescript/monaco.contribution.js"
import "monaco-editor/esm/vs/language/html/monaco.contribution.js"
import "monaco-editor/esm/vs/language/css/monaco.contribution.js"
// import { emmetHTML, emmetCSS, emmetJSX } from "emmet-monaco-es"
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

MonacoEnvironment = {
  getWorkerUrl: (_moduleId: any, label: String) => {
    if (label === "json") {
      return "./json.worker.bundle.js"
    }

    if (label === "css" || label === "scss" || label === "less") {
      return "./css.worker.bundle.js"
    }

    if (label === "html" || label === "handlebars" || label === "razor") {
      return "./html.worker.bundle.js"
    }

    if (label === "typescript" || label === "javascript") {
      return "./ts.worker.bundle.js"
    }

    return "./editor.worker.bundle.js"
  }
}

// emmetHTML()
// emmetCSS()
// emmetJSX()

export default class TextmateLoader {
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
   * @param {LanguageId} language - the language identifier
   * @param {string} theme - the theme for the editor
   * @param {monaco.languages.ILanguageExtensionPoint[]} extraLanguages - additional language extension points
   * @param {{ [scopeName: string]: DemoScopeNameInfo }} extraGrammars - additional grammars
   * @param {(scopeName: ScopeName) => Promise<TextMateGrammar>} fetchExtraGrammar - asynchronous function to fetch extra grammar
   * @param {(scopeName: ScopeName) => Promise<monaco.languages.LanguageConfiguration>} fetchExtraConfiguration - asynchronous function to fetch extra configuration
   */
  public static async load(
    _language: LanguageId,
    theme: string,
    initMoacoCallback: () => void,
    extraLanguages: monaco.languages.ILanguageExtensionPoint[] = [],
    extraGrammars: { [scopeName: string]: DemoScopeNameInfo } = {},
    fetchExtraGrammar?: (scopeName: ScopeName) => Promise<TextMateGrammar>,
    fetchExtraConfiguration?: (
      scopeName: ScopeName
    ) => Promise<monaco.languages.LanguageConfiguration>
  ): Promise<void> {
    const data: ArrayBuffer | Response = await CommonUtils.loadVSCodeOnigurumWASM()

    await loadWASM(data)

    const languages: monaco.languages.ILanguageExtensionPoint[] = [
      ...BUILT_IN_LANGUAGE_DEFINITIONS,
      ...extraLanguages
    ]
    const grammars: { [scopeName: string]: DemoScopeNameInfo } = {
      ...BUILT_IN_GRAMMARS,
      ...extraGrammars
    }

    const fetchGrammar = async (scopeName: ScopeName): Promise<TextMateGrammar> => {
      if (scopeName in extraGrammars && fetchExtraGrammar) {
        return fetchExtraGrammar(scopeName)
      }

      const { path } = grammars[scopeName]
      const uri = `/grammars/${path}`
      const response = await CommonUtils.fetchWrapper(uri)
      const grammar = await response.text()
      const type = path.endsWith(".json") ? "json" : "plist"
      return { type, grammar }
    }

    const fetchConfiguration = async (
      language: LanguageId
    ): Promise<monaco.languages.LanguageConfiguration> => {
      if (language in extraLanguages && fetchExtraConfiguration) {
        return fetchExtraConfiguration(language)
      }

      const uri = `/configurations/${language}.json`
      const response = await CommonUtils.fetchWrapper(uri)
      const rawConfiguration = await response.text()
      return RegexUtils.rehydrateRegexps(rawConfiguration)
    }

    const onigLib = Promise.resolve({
      createOnigScanner,
      createOnigString
    })

    this.provider = new SimpleLanguageInfoProvider({
      grammars,
      fetchGrammar,
      configurations: languages.map((language) => language.id),
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

    initMoacoCallback()

    this.provider.injectCSS()
  }
}

const value = ""
const id = "container"
const element = document.getElementById(id)

if (element == null) {
  throw Error(`could not find element #${id}`)
}

monaco.editor.create(element, {
  value: value,
  language: "json",
  theme: "vs-dark",
  minimap: {
    enabled: true
  },
  automaticLayout: true,
  glyphMargin: false,
  lineNumbersMinChars: 3,
  contextmenu: true,
  unicodeHighlight: {
    ambiguousCharacters: false
  }
})

TextmateLoader.load("json", "vs-dark", () => {})
