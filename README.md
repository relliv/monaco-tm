# monaco-textmate-loader

This is a simple loader for [Monaco Editor](https://github.com/microsoft/monaco-editor) that allows you to use [TextMate](https://github.com/textmate/textmate) grammars with Monaco Editor. It is based on the [vscode-textmate](https://github.com/microsoft/vscode-textmate) and [vscode-oniguruma](https://github.com/microsoft/vscode-oniguruma) packages. For more context, see: https://github.com/microsoft/monaco-editor/issues/1915.

[vscode](https://github.com/microsoft/vscode) has **TextMate** support but the Monaco Editor does not support TextMate grammars out of the box. If you want to highlight some language or customize you need to write [monarch](https://microsoft.github.io/monaco-editor/monarch.html) config and provide to Monaco Editor. This package converts TextMate grammars to Monaco Editor grammars. You can use any existing TextMate grammar with Monaco Editor easily.

## 📌 When to use

We can use Monaco Editor directly in web applications. But when we need to highlight some language, we need to write a monarch config for that language. This is a time-consuming process.

When you need a syntax highliter for a language, you can find and install a vscode extension for that language. This extension contains a TextMate grammar for that language. You can use this package to convert that TextMate grammar to Monaco Editor grammar.

## 🧩 Built-in grammars

This package includes some built-in grammars. You can use these grammars directly without any additional installation. You can find the list of built-in grammars in the [grammars](./grammars) directory (*also we need a config file for each file, see [configurations](./configurations) directory*).

## 📦 Installation

### PNPM

```bash
pnpm i @ngeenx/monaco-textmate-loader
```

### NPM

```bash
npm i @ngeenx/monaco-textmate-loader
```

> [!WARNING]
> This repository maintains a fork of the original [thebaselab/monaco-tm](https://github.com/thebaselab/monaco-tm) and [bolinfest/monaco-tm](https://github.com/bolinfest/monaco-tm) repos. This package has been modified to work in Angular projects. If you want to use this package in a different environment, please consider differencies between the original and this fork (some dependencies and loaders removed).