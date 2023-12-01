---
title: "How configure Neovim with Latex"
description: "Brief introduction to write Latex file in neovim"
author: "Camilo Davila"
pubDate: "Nov 30, 2023"
status: "draft"
subtitle: "Latex > any other docs"
subcontent:
  [
    "Well is very good know by everyone that Latex is the best way to write documents, so here is a very quick and simple tutorial to configure Neovim with Latex.",
    "Latex make you a God, so you can write your documents in a very easy way, and you can export it to PDF, HTML, DOCX, etc.",
  ]
---

![neovim latex example](/images/blog/neovim_latex/latex.png)

## Requirements

- Neovim 0.8.0 or higher
- Latex, I recommend to use [TexLive](https://www.tug.org/texlive/)

Remember install the package _textlive_, in the **mighty Arch Linux** you can install it with:

```bash
sudo pacman -S texlive-most
```

## Installation

### Vimtex plugin

First we gonna need to install [Vimtex](https://github.com/lervag/vimtex), A modern Nvim filetype plugin for LaTeX files, the reason why choose this plugin is because is very easy to use and have a lot of features.

```lua
-- packer config
use {
    'lervag/vimtex',
}
```

### Treesitter

Next you need to install the Treesitter parser for Latex so inside your Neovim run `:TSInstall latex`.

### LSP

Using your LSP package manager install the Latex LSP, in my case I use [ltex-ls](https://github.com/valentjn/ltex-ls) but you can use [texlab](https://github.com/latex-lsp/texlab), both are very good options.

## Configuration

Vimtex provide a configuration options, the most important is configure the view method, I recommend to use _zathura_ (Why you want use something else?).

```lua
-- vimtex config
vim.g.vimtex_view_method = 'zathura'
```

Vimtext have support for other PDF viewers like:

- MuPDF
- Okular
- qpdfview
- Skim
- SumatraPDF
- TeXShop

## Usage

Let's start with a simple example, create a file called _example.tex_ and write the following:

```tex
\documentclass{article}
\usepackage[utf8]{inputenc}
\usepackage{amsmath}
\usepackage{amsfonts}

\begin{document}
Hello World!

\begin{align}
    1 + 1 &= 2 \\
    1 + 2 &= 3 \\
    1 + 3 &= 4
\end{align}
\end{document}
```

Automatically Vimtex will recognize the file as a Latex file and will highlight the syntax, if you want to see the full list of commands you can use `:help vimtex`, but here I will show you the most important commands.

### Compilation

To compile the file you can use the command `:VimtexCompile`, this command compile the file and open the PDF viewer, if you want to compile the file without open the PDF viewer you can use `:VimtexCompile`, and if you want to compile the file and open the PDF viewer in a new tab you can use `:VimtexCompile`, you can see the full list of commands in the [documentation](https://github.com/lervag/vimtex/blob/master/DOCUMENTATION.md)

### Live Reload

If you want to see the changes in the PDF viewer automatically you can use `:VimtexView`, this command open the PDF viewer and start a server to watch the changes in the file, if you want to stop the server you can use `:VimtexStop`, and if you want to restart the server you can use `:VimtexReload`.

### Export to PDF

When you use Vimtex with Neovim and execute a command, automatically create a PDF file, but i recommend use **Pandoc** if you really want to convert your document to another format like PDF, Presentation, HTMl, etc......
