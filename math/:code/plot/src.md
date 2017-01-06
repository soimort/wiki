% Plot a Function
% Mort Yao
% 2017-01-06

# Plot $y = x^2$

![](https://i0.wp.com/dl.dropboxusercontent.com/s/i5w5lagy1w2jz6v/square.png){ width=60% }

**R:**
```R
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
```

# Plot $\Gamma(x)$ (Gamma Function)

![](https://i0.wp.com/dl.dropboxusercontent.com/s/l0s11ya4s0gr2bp/gamma.png)

**R:**
```R
png('gamma.png')

x <- sort(c(seq(-4, 4, length.out = 201), outer(0:-4, (-1:1)*1e-6, "+")))
plot(x, gamma(x), ylim = c(-5, 5),
     col = "red", type = "l", lwd = 2,
     main = expression(Gamma(x)))
abline(h = 0, v = -3:0, lty = 3, col = "midnightblue")

dev.off()
```
