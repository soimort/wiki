png('square.png')

square = function(x) { x * x }
curve(square, from = 1, to = 50,
      xlab = "x", ylab = "y")

png('square-ggplot.png')

library("ggplot2")
ggplot(data.frame(x = c(1, 50)), aes(x = x)) +
    stat_function(fun = square, geom = "line") +
    xlab("x") + ylab("y")

dev.off()
