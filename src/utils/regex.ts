import type * as monaco from "monaco-editor"

export default class RegexUtils {
  /**
   * Fields that, if present in a LanguageConfiguration, must be a RegExp object
   * rather than a string literal.
   */
  public static REGEXP_PROPERTIES = [
    // indentation
    "indentationRules.decreaseIndentPattern",
    "indentationRules.increaseIndentPattern",
    "indentationRules.indentNextLinePattern",
    "indentationRules.unIndentedLinePattern",

    // code folding
    "folding.markers.start",
    "folding.markers.end",

    // language's "word definition"
    "wordPattern",

    // on enter actions
    "onEnterRules.0.beforeText"
  ]

  /**
   * Configuration data is read from JSON and JSONC files, which cannot contain
   * regular expression literals. Although Monarch grammars will often accept
   * either the source of a RegExp as a string OR a RegExp object, certain Monaco
   * APIs accept only a RegExp object, so we must "rehydrate" those, as appropriate.
   *
   * It would probably save everyone a lot of trouble if we updated the APIs to
   * accept a RegExp or a string literal. Possibly a small struct if flags need
   * to be specified to the RegExp constructor.
   */
  public static rehydrateRegexps(rawConfiguration: string): monaco.languages.LanguageConfiguration {
    const out = JSON.parse(rawConfiguration)

    for (const property of this.REGEXP_PROPERTIES) {
      const value = this.getProp(out, property)

      if (typeof value === "string") {
        this.setProp(out, property, new RegExp(value))
      }
    }

    return out
  }

  public static getProp(obj: { string: any }, selector: string): any {
    const components = selector.split(".")

    // @ts-ignore
    return components.reduce((acc, cur) => (acc != null ? acc[cur] : null), obj)
  }

  public static setProp(obj: { string: any }, selector: string, value: RegExp): void {
    const components = selector.split(".")
    const indexToSet = components.length - 1

    components.reduce((acc, cur, index) => {
      if (acc == null) {
        return acc
      }

      if (index === indexToSet) {
        // @ts-ignore
        acc[cur] = value

        return null
      } else {
        // @ts-ignore
        return acc[cur]
      }
    }, obj)
  }
}
