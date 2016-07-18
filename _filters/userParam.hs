#!/usr/bin/env runhaskell
{-
  Pandoc filter to render user-specific parameters in command-line examples.

  Example: (code block)
    $ tar xvf [FILENAME]

  Anything in brackets will be rendered in a different style/color.

  Dependencies: regex-compat
-}
import Text.Pandoc.JSON
import Text.Regex
import System.IO

d :: Show a => a -> IO ()
d = hPutStrLn stderr . show

fmt :: Format
fmt = Format "html"

spanClass :: String
spanClass = "do"

userParamRegex :: Regex
userParamRegex = mkRegex "\\[([^]]*)\\]"

userParamHighlighter :: String
userParamHighlighter = "<span class=\"" ++ spanClass ++ "\">\\1</span>"

highlightUserParam :: Block -> IO Block
highlightUserParam cb@(CodeBlock (id, classes, namevals) contents) =
  if null classes && contents !! 0 == '$' then do
    let html =
          "<pre><code>" ++
          subRegex userParamRegex contents userParamHighlighter ++
          "</code></pre>"
    return $ RawBlock fmt html
  else
    return cb
highlightUserParam x = return x

main :: IO ()
main = toJSONFilter highlightUserParam
