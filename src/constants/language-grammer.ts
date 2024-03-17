import { ScopeNameInfo } from "../providers"
import * as monaco from "monaco-editor/esm/vs/editor/editor.api"

export interface DemoScopeNameInfo extends ScopeNameInfo {
  path: string
}

export const BUILT_IN_GRAMMARS: { [scopeName: string]: DemoScopeNameInfo } = {
  "scope.terraform": {
    language: "terraform",
    path: "terraform.tmGrammar.json"
  },
  "source.vue": {
    language: "vue",
    path: "vue-generated.json"
  },
  "source.matlab": {
    language: "matlab",
    path: "matlab.tmLanguage.json"
  },
  "source.dart": {
    language: "dart",
    path: "dart.tmLanguage.json"
  },
  "source.fortran": {
    language: "fortran",
    path: "fortran.tmLanguage.json"
  },
  "source.fortran.modern": {
    language: "fortran-modern",
    path: "fortran-modern.tmLanguage.json"
  },
  "source.yaml": {
    language: "yaml",
    path: "yaml.tmLanguage.json"
  },
  "text.xml": {
    language: "xml",
    path: "xml.tmLanguage.json"
  },
  "text.xml.xsl": {
    language: "xsl",
    path: "xsl.tmLanguage.json"
  },
  "source.asp.vb.net": {
    language: "vb",
    path: "asp-vb-net.tmLanguage.json"
  },
  "source.swift": {
    language: "swift",
    path: "swift.tmLanguage.json"
  },
  "source.shell": {
    language: "shellscript",
    path: "shell-unix-bash.tmLanguage.json"
  },
  "source.shaderlab": {
    language: "shaderlab",
    path: "shaderlab.tmLanguage.json"
  },
  "source.sql": {
    language: "sql",
    path: "sql.tmLanguage.json"
  },
  "source.css.scss": {
    language: "scss",
    path: "scss.tmLanguage.json"
  },
  "source.rust": {
    language: "rust",
    path: "rust.tmLanguage.json"
  },
  "source.ruby": {
    language: "ruby",
    path: "ruby.tmLanguage.json"
  },
  "text.html.cshtml": {
    language: "razor",
    path: "cshtml.tmLanguage.json"
  },
  "source.r": {
    language: "r",
    path: "r.tmLanguage.json"
  },
  "text.pug": {
    language: "jade",
    path: "pug.tmLanguage.json"
  },
  "source.powershell": {
    language: "powershell",
    path: "powershell.tmLanguage.json"
  },
  "source.perl": {
    language: "perl",
    path: "perl.tmLanguage.json"
  },
  "source.perl.6": {
    language: "perl6",
    path: "perl6.tmLanguage.json"
  },
  "text.html.php": {
    language: "php",
    path: "htmlphp.tmLanguage.json"
  },
  "source.php": {
    language: "php",
    path: "php.tmLanguage.json"
  },
  "source.objc": {
    language: "objective-c",
    path: "objective-c.tmLanguage.json"
  },
  "source.objcpp": {
    language: "objective-cpp",
    path: "objective-c++.tmLanguage.json"
  },
  "text.html.markdown": {
    language: "markdown",
    path: "markdown.tmLanguage.json"
  },
  "source.makefile": {
    language: "makefile",
    path: "make.tmLanguage.json"
  },
  "source.lua": {
    language: "lua",
    path: "lua.tmLanguage.json"
  },
  "text.log": {
    language: "log",
    path: "log.tmLanguage.json"
  },
  "source.css.less": {
    language: "less",
    path: "less.tmLanguage.json"
  },
  "source.java": {
    language: "java",
    path: "java.tmLanguage.json"
  },
  "source.json": {
    language: "json",
    path: "JSON.tmLanguage.json"
  },
  "source.json.comments": {
    language: "jsonc",
    path: "JSONC.tmLanguage.json"
  },
  "source.ini": {
    language: "properties",
    path: "ini.tmLanguage.json"
  },
  "text.html.handlebars": {
    language: "handlebars",
    path: "handlebars.tmLanguage.json"
  },
  "source.hlsl": {
    language: "hlsl",
    path: "hlsl.tmLanguage.json"
  },
  "source.groovy": {
    language: "groovy",
    path: "groovy.tmLanguage.json"
  },
  "source.go": {
    language: "go",
    path: "go.tmLanguage.json"
  },
  "source.fsharp": {
    language: "fsharp",
    path: "fsharp.tmLanguage.json"
  },
  "source.dockerfile": {
    language: "dockerfile",
    path: "docker.tmLanguage.json"
  },
  "source.coffee": {
    language: "coffeescript",
    path: "coffeescript.tmLanguage.json"
  },
  "source.python": {
    language: "python",
    path: "MagicPython.tmLanguage.json"
  },
  "source.c": {
    language: "c",
    path: "c.tmLanguage.json"
  },
  "source.cpp": {
    language: "cpp",
    path: "cpp.tmLanguage.json"
  },
  "source.cs": {
    language: "csharp",
    path: "csharp.tmLanguage.json"
  },
  "source.clojure": {
    language: "clojure",
    path: "clojure.tmLanguage.json"
  },
  "text.html.basic": {
    language: "html",
    path: "html.tmLanguage.json"
  },
  "source.js.jsx": {
    language: "javascriptreact",
    path: "JavaScriptReact.tmLanguage.json"
  },
  "source.js": {
    language: "javascript",
    path: "JavaScript.tmLanguage.json"
  },
  "source.css": {
    language: "css",
    path: "css.tmLanguage.json"
  },
  "source.ts": {
    language: "typescript",
    path: "TypeScript.tmLanguage.json"
  },
  "source.tsx": {
    language: "typescriptreact",
    path: "TypeScriptReact.tmLanguage.json"
  },
  "documentation.injection.js.jsx": {
    language: "jsonc",
    path: "jsonc.js.injection.tmLanguage.json"
  },
  "documentation.injection.ts.tsx": {
    language: "jsonc",
    path: "jsonc.ts.injection.tmLanguage.json"
  },
  "source.batchfile": {
    language: "bat",
    path: "batchfile.tmLanguage.json"
  },
  "source.julia": {
    language: "julia",
    path: "julia.tmLanguage.json"
  },
  "source.svelte": {
    language: "svelte",
    path: "svelte.tmLanguage.json"
  }
}

export const BUILT_IN_LANGUAGE_DEFINITIONS: monaco.languages.ILanguageExtensionPoint[] = [
  {
    id: "python",
    extensions: [
      ".py",
      ".rpy",
      ".pyw",
      ".cpy",
      ".gyp",
      ".gypi",
      ".pyi",
      ".ipy",
      ".bzl",
      ".cconf",
      ".cinc",
      ".mcconf",
      ".sky",
      ".td",
      ".tw"
    ],
    aliases: ["Python", "py"],
    filenames: ["Snakefile", "BUILD", "BUCK", "TARGETS"],
    firstLine: "^#!\\s*/?.*\\bpython[0-9.-]*\\b"
  },
  {
    id: "c",
    extensions: [".c", ".i"],
    aliases: ["C", "c"]
  },
  {
    id: "cpp",
    extensions: [
      ".cpp",
      ".cc",
      ".cxx",
      ".c++",
      ".hpp",
      ".hh",
      ".hxx",
      ".h++",
      ".h",
      ".ii",
      ".ino",
      ".inl",
      ".ipp",
      ".hpp.in",
      ".h.in"
    ],
    aliases: ["C++", "Cpp", "cpp"]
  },
  {
    id: "html",
    extensions: [
      ".html",
      ".htm",
      ".shtml",
      ".xhtml",
      ".xht",
      ".mdoc",
      ".jsp",
      ".asp",
      ".aspx",
      ".jshtm",
      ".volt",
      ".ejs",
      ".rhtml"
    ],
    aliases: ["HTML", "htm", "html", "xhtml"],
    mimetypes: [
      "text/html",
      "text/x-jshtm",
      "text/template",
      "text/ng-template",
      "application/xhtml+xml"
    ]
  },
  {
    id: "javascriptreact",
    aliases: ["JavaScript React", "jsx"],
    extensions: [".jsx"]
  },
  {
    id: "javascript",
    aliases: ["JavaScript", "javascript", "js"],
    extensions: [".js", ".es6", ".mjs", ".cjs", ".pac"],
    filenames: ["jakefile"],
    firstLine: "^#!.*\\bnode",
    mimetypes: ["text/javascript"]
  },
  {
    id: "jsx-tags",
    aliases: []
  },
  {
    id: "javascriptreact",
    aliases: ["JavaScript React", "jsx"],
    extensions: [".jsx"]
  },
  {
    id: "css",
    aliases: ["CSS", "css"],
    extensions: [".css"],
    mimetypes: ["text/css"]
  },
  {
    id: "typescript",
    aliases: ["TypeScript", "ts", "typescript"],
    extensions: [".ts"]
  },
  {
    id: "typescriptreact",
    aliases: ["TypeScript React", "tsx"],
    extensions: [".tsx"]
  },
  {
    id: "jsonc",
    filenames: ["tsconfig.json", "jsconfig.json"],
    filenamePatterns: ["tsconfig.*.json", "jsconfig.*.json", "tsconfig-*.json", "jsconfig-*.json"]
  },
  {
    id: "bat",
    extensions: [".bat", ".cmd"],
    aliases: ["Batch", "bat"]
  },
  {
    id: "csharp",
    extensions: [".cs", ".csx", ".cake"],
    aliases: ["C#", "csharp"]
  },
  {
    id: "clojure",
    aliases: ["Clojure", "clojure"],
    extensions: [".clj", ".cljs", ".cljc", ".cljx", ".clojure", ".edn"]
  },
  {
    id: "coffeescript",
    extensions: [".coffee", ".cson", ".iced"],
    aliases: ["CoffeeScript", "coffeescript", "coffee"]
  },
  {
    id: "dockerfile",
    extensions: [".dockerfile", ".containerfile"],
    filenames: ["Dockerfile", "Containerfile"],
    filenamePatterns: ["Dockerfile.*", "Containerfile.*"],
    aliases: ["Docker", "Dockerfile", "Containerfile"]
  },
  {
    id: "fsharp",
    extensions: [".fs", ".fsi", ".fsx", ".fsscript"],
    aliases: ["F#", "FSharp", "fsharp"]
  },
  {
    id: "go",
    extensions: [".go", ".fsi", ".fsx", ".fsscript"],
    aliases: ["Go"]
  },
  {
    id: "groovy",
    aliases: ["Groovy", "groovy"],
    extensions: [".groovy", ".gvy", ".gradle", ".jenkinsfile", ".nf"],
    filenames: ["Jenkinsfile"],
    filenamePatterns: ["Jenkinsfile.*"],
    firstLine: "^#!.*\\bgroovy\\b"
  },
  {
    id: "hlsl",
    extensions: [".hlsl", ".hlsli", ".fx", ".fxh", ".vsh", ".psh", ".cginc", ".compute"],
    aliases: ["HLSL", "hlsl"]
  },
  {
    id: "handlebars",
    extensions: [".handlebars", ".hbs", ".hjs"],
    aliases: ["Handlebars", "handlebars"],
    mimetypes: ["text/x-handlebars-template"]
  },
  // {
  //     id: "ini",
  //     extensions: [ ".ini"],
  //     aliases: [ "Ini", "ini"],
  // },
  {
    id: "properties",
    extensions: [
      ".ini, .properties",
      ".cfg",
      ".conf",
      ".directory",
      ".gitattributes",
      ".gitconfig",
      ".gitmodules",
      ".editorconfig"
    ],
    filenames: ["gitconfig"],
    filenamePatterns: ["**/.config/git/config", "**/.git/config"],
    aliases: ["Properties", "properties", "ini", "Ini"]
  },
  {
    id: "json",
    extensions: [
      ".json",
      ".bowerrc",
      ".jscsrc",
      ".js.map",
      ".css.map",
      ".ts.map",
      ".har",
      ".jslintrc",
      ".jsonld"
    ],
    filenames: ["composer.lock", ".watchmanconfig", ".ember-cli"],
    mimetypes: ["application/json", "application/json"],
    aliases: ["JSON", "json"]
  },
  {
    id: "jsonc",
    aliases: ["JSON with Comments"],
    extensions: [
      ".jsonc",
      ".eslintrc",
      ".eslintrc.json",
      ".jsfmtrc",
      ".jshintrc",
      ".swcrc",
      ".hintrc",
      ".babelrc"
    ]
  },
  {
    id: "java",
    extensions: [".java", ".jav"],
    aliases: ["Java", "java"]
  },
  {
    id: "less",
    aliases: ["Less", "less"],
    extensions: [".less"],
    mimetypes: ["text/x-less", "text/less"]
  },
  {
    id: "log",
    extensions: [".log", "*.log.?"],
    aliases: ["Log"]
  },
  {
    id: "lua",
    extensions: [".lua"],
    aliases: ["Lua", "lua"]
  },
  {
    id: "makefile",
    aliases: ["Makefile", "makefile"],
    extensions: [".mk"],
    filenames: ["Makefile", "makefile", "GNUmakefile", "OCamlMakefile"],
    firstLine: "^#!\\s*/usr/bin/make"
  },
  {
    id: "markdown",
    aliases: ["Markdown", "markdown"],
    extensions: [
      ".md",
      ".mkd",
      ".mdwn",
      ".mdown",
      ".markdown",
      ".markdn",
      ".mdtxt",
      ".mdtext",
      ".workbook"
    ]
  },
  {
    id: "objective-c",
    extensions: [".m"],
    aliases: ["Objective-C"]
  },
  {
    id: "objective-cpp",
    extensions: [".mm"],
    aliases: ["Objective-C++"]
  },
  {
    id: "php",
    extensions: [".php", ".php4", ".php5", ".phtml", ".ctp"],
    aliases: ["PHP", "php"],
    firstLine: "^#!\\s*/.*\\bphp\\b",
    mimetypes: ["application/x-php"]
  },
  {
    id: "perl",
    aliases: ["Perl", "perl"],
    extensions: [".pl", ".pm", ".pod", ".t", ".PL", ".psgi"],
    firstLine: "^#!.*\\bperl\\b"
  },
  {
    id: "perl6",
    aliases: ["Perl 6", "perl6"],
    extensions: [".p6", ".pl6", ".pm6", ".nqp"],
    firstLine: "(^#!.*\\bperl6\\b)|use\\s+v6"
  },
  {
    id: "powershell",
    extensions: [".ps1", ".psm1", ".psd1", ".pssc", ".psrc"],
    aliases: ["PowerShell", "powershell", "ps", "ps1"],
    firstLine: "^#!\\s*/.*\\bpwsh\\b"
  },
  {
    id: "jade",
    extensions: [".pug", ".jade"],
    aliases: ["Pug", "Jade", "jade"]
  },
  {
    id: "r",
    extensions: [".r", ".rhistory", ".rprofile", ".rt"],
    aliases: ["R", "r"]
  },
  {
    id: "razor",
    extensions: [".cshtml"],
    aliases: ["Razor", "razor"],
    mimetypes: ["text/x-cshtml"]
  },
  {
    id: "ruby",
    extensions: [".rb", ".rbx", ".rjs", ".gemspec", ".rake", ".ru", ".erb", ".podspec", ".rbi"],
    filenames: ["rakefile", "gemfile", "guardfile", "podfile", "capfile"],
    aliases: ["Ruby", "rb"]
  },
  {
    id: "rust",
    extensions: [".rs"],
    aliases: ["Rust", "rust"]
  },
  {
    id: "scss",
    aliases: ["SCSS", "scss"],
    extensions: [".scss"],
    mimetypes: ["text/x-scss", "text/scss"]
  },
  {
    id: "sql",
    extensions: [".sql", ".dsql"],
    aliases: ["SQL"]
  },
  {
    id: "shaderlab",
    extensions: [".shader"],
    aliases: ["ShaderLab", "shaderlab"]
  },
  {
    id: "shellscript",
    aliases: ["Shell Script", "shellscript", "bash", "sh", "zsh", "ksh", "csh"],
    extensions: [
      ".sh",
      ".bash",
      ".bashrc",
      ".bash_aliases",
      ".bash_profile",
      ".bash_login",
      ".ebuild",
      ".install",
      ".profile",
      ".bash_logout",
      ".zsh",
      ".zshrc",
      ".zprofile",
      ".zlogin",
      ".zlogout",
      ".zshenv",
      ".zsh-theme",
      ".ksh",
      ".csh",
      ".cshrc",
      ".tcshrc",
      ".yashrc",
      ".yash_profile"
    ],
    filenames: [
      "APKBUILD",
      "PKGBUILD",
      ".envrc",
      ".hushlogin",
      "zshrc",
      "zshenv",
      "zlogin",
      "zprofile",
      "zlogout",
      "bashrc_Apple_Terminal",
      "zshrc_Apple_Terminal"
    ],
    firstLine:
      "^#!.*\\b(bash|zsh|sh|ksh|dtksh|pdksh|mksh|ash|dash|yash|sh|csh|jcsh|tcsh|itcsh).*|^#\\s*-\\*-[^*]*mode:\\s*shell-script[^*]*-\\*-",
    mimetypes: ["text/x-shellscript"]
  },
  {
    id: "swift",
    aliases: ["Swift", "swift"],
    extensions: [".swift"]
  },
  {
    id: "vb",
    extensions: [".vb", ".brs", ".vbs", ".bas"],
    aliases: ["Visual Basic", "vb"]
  },
  {
    id: "xml",
    extensions: [
      ".xml",
      ".xsd",
      ".ascx",
      ".atom",
      ".axml",
      ".bpmn",
      ".cpt",
      ".csl",
      ".csproj",
      ".csproj.user",
      ".dita",
      ".ditamap",
      ".dtd",
      ".ent",
      ".mod",
      ".dtml",
      ".fsproj",
      ".fxml",
      ".iml",
      ".isml",
      ".jmx",
      ".launch",
      ".menu",
      ".mxml",
      ".nuspec",
      ".opml",
      ".owl",
      ".proj",
      ".props",
      ".pt",
      ".publishsettings",
      ".pubxml",
      ".pubxml.user",
      ".rbxlx",
      ".rbxmx",
      ".rdf",
      ".rng",
      ".rss",
      ".shproj",
      ".storyboard",
      ".svg",
      ".targets",
      ".tld",
      ".tmx",
      ".vbproj",
      ".vbproj.user",
      ".vcxproj",
      ".vcxproj.filters",
      ".wsdl",
      ".wxi",
      ".wxl",
      ".wxs",
      ".xaml",
      ".xbl",
      ".xib",
      ".xlf",
      ".xliff",
      ".xpdl",
      ".xul",
      ".xoml"
    ],
    firstLine: "(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",
    aliases: ["XML", "xml"]
  },
  {
    id: "xsl",
    extensions: [".xsl", ".xslt"],
    aliases: ["XSL", "xsl"]
  },
  {
    id: "yaml",
    aliases: ["YAML", "yaml"],
    extensions: [".yml", ".eyaml", ".eyml", ".yaml"],
    firstLine: "^#cloud-config"
  },
  {
    id: "fortran",
    aliases: ["Fortran - Punchcard", "fortran"],
    extensions: [".f", ".F", ".f77", ".F77", ".for", ".FOR", ".fpp", ".FPP"]
  },
  {
    id: "fortran-modern",
    aliases: ["Fortran - Modern"],
    extensions: [".f90", ".F90", ".f95", ".F95", ".f03", ".F03", ".f08", ".F08"]
  },
  {
    id: "dart",
    extensions: [".dart"],
    aliases: ["Dart"]
  },
  {
    id: "matlab",
    aliases: ["MATLAB", "matlab"],
    extensions: [".m"]
  },
  {
    id: "vue",
    aliases: ["Vue", "vue"],
    extensions: [".vue"]
  },
  {
    id: "terraform",
    aliases: ["Terraform", "terraform"],
    extensions: [".tf"]
  },
  {
    id: "terraform-vars",
    extensions: [".tfvars"]
  },
  {
    id: "json",
    extensions: [".tfstate"]
  },
  {
    id: "julia",
    aliases: ["Julia", "julia"],
    extensions: [".jl"],
    firstLine: "^#!\\s*/.*\\bjulia[0-9.-]*\\b"
  },
  {
    id: "svelte",
    aliases: ["Svelte", "svelte"],
    extensions: [".svelte"]
  }
]