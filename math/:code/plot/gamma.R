png('gamma.png')

x <- sort(c(seq(-4, 4, length.out = 201), outer(0:-4, (-1:1)*1e-6, "+")))
plot(x, gamma(x), ylim = c(-5, 5),
     col = "red", type = "l", lwd = 2,
     main = expression(Gamma(x)))
abline(h = 0, v = -3:0, lty = 3, col = "midnightblue")

dev.off()
