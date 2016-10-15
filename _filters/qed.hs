#!/usr/bin/env runhaskell
{-
  Pandoc filter to convert end-of-paragraph string "[QED]"
  into tombstone symbol. (HTML only)
-}
import Text.Pandoc.JSON
import System.IO

d :: Show a => a -> IO ()
d = hPutStrLn stderr . show

fmt :: Format
fmt = Format "html"

qed :: Block -> IO Block
qed b@(Para ins) =
  case last ins of
    Str "[QED]" ->
      return $ Para $ init ins ++ [ RawInline fmt $
                                    "<p style='text-align:right !important;" ++
                                    "text-indent:0 !important;" ++
                                    "position:relative;top:-1em'>&#9632;</p>" ]
    _ -> return b
qed x = return x

main :: IO ()
main = toJSONFilter qed
