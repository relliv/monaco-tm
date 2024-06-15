# monaco-tm

- [monaco-tm](#monaco-tm)
  - [🚀 Usage](#-usage)
  - [📌 When to use](#-when-to-use)
  - [🧩 Built-in grammars](#-built-in-grammars)
  - [🌈 Theming](#-theming)

This is a simple loader for [Monaco Editor](https://github.com/microsoft/monaco-editor) that allows you to use [TextMate](https://github.com/textmate/textmate) grammars with Monaco Editor. It is based on the [vscode-textmate](https://github.com/microsoft/vscode-textmate) and [vscode-oniguruma](https://github.com/microsoft/vscode-oniguruma) packages. For more context, see: https://github.com/microsoft/monaco-editor/issues/1915.

[vscode](https://github.com/microsoft/vscode) has **TextMate** support but the Monaco Editor does not support TextMate grammars out of the box. If you want to highlight some language or customize you need to write [monarch](https://microsoft.github.io/monaco-editor/monarch.html) config and provide to Monaco Editor. This package converts TextMate grammars to Monaco Editor grammars. You can use any existing TextMate grammar with Monaco Editor easily.

> [!WARNING]
> This repository contains a fork of the original [thebaselab/monaco-tm](https://github.com/thebaselab/monaco-tm) and [bolinfest/monaco-tm](https://github.com/bolinfest/monaco-tm) repos. These changes are experimental and may not be suitable for production use.

## 🚀 Usage

```typescript
import { MonacoTextmateLoader } from '@ngeenx/monaco-textmate-loader';

// create normal editor
const editorInstance = MonacoTextmateLoader.create(document.getElementById('editor'), {
  language: 'javascript', // required
  theme: 'vs-dark', // optional and default is 'vs-dark'
  value: 'console.log("Hello, World!");', // optional and default is ''
  baseUrl: '/assets' // optional and default is '/assets'
});

// create diff editor
const editorInstance = MonacoTextmateLoader.create(document.getElementById('editor'), {
  language: 'javascript', // required
  theme: 'vs-dark', // optional and default is 'vs-dark'
  value: 'console.log("Hello, World!");', // optional and default is ''
  baseUrl: '/assets' // optional and default is '/assets'
  diffEditor: true // required for diff editor
});
```

## 📌 When to use

We can use Monaco Editor directly in web applications. But when we need to highlight some language, we need to write a monarch config for that language. This is a time-consuming process.

When you need a syntax highliter for a language, you can find and install a vscode extension for that language. This extension contains a TextMate grammar for that language. You can use this package to convert that TextMate grammar to Monaco Editor grammar.

## 🧩 Built-in grammars

This package includes some built-in grammars. You can use these grammars directly without any additional installation. You can find the list of built-in grammars in the [grammars](./grammars) directory (*also we need a config file for each file, see [configurations](./configurations) directory*).

## 🌈 Theming

Textmate provides only [tokenizer/lexical analysis](https://en.wikipedia.org/wiki/Lexical_analysis) and Textmate grammars does not contain any theme information. So, now we need to provide a theme for Monaco Editor.

This package includes some built-in themes. You can use these themes directly without any additional installation. You can find the list of built-in themes in the [themes](./themes) directory.