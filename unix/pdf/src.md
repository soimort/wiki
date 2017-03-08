% PDF Hacks
% Mort Yao
% 2016-05-24

# How to edit a PDF document (losslessly)

There are many ways to edit a PDF document. This one is the best operable solution I know, as it requires only open-source software and preserves text and fonts data in the original document.

Tools needed:

* [Poppler](https://poppler.freedesktop.org/), PDF rendering library distributed with many useful command-line utilities for handling PDF contents
* [Inkscape](https://inkscape.org/), _the_ SVG editor

## Step 1. Split the PDF document into single-page PDFs

    $ pdfseparate [foo.pdf] '[foo%d.pdf]'

## Step 2. Convert single-page PDF to SVG (to edit)

Suppose the page to edit is `foo1.pdf`:

    $ inkscape --without-gui --file=[foo1.pdf] --export-plain-svg=[foo1.svg]

Or:

    $ pdftocairo -svg [foo1.pdf] [foo1.svg]

## Step 3. Edit the SVG

With Inkscape. Whatever you like.

## Step 4. Convert SVG back to PDF

    $ inkscape --without-gui --file=[foo1.svg] --export-pdf=[foo1.pdf]

## Step 5. Join single-page PDFs into one PDF document

    $ pdfunite [foo1.pdf] [foo2.pdf] [...] [bar.pdf]
