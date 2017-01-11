% Normal Distribution
% Mort Yao
% 2017-01-11

# Maximization of Entropy

Let $f(x)$ be a probability density function with mean $\mu$ and variance $\sigma^2$, and let $X$ be a continuous random variable with density $f(x)$. The differential entropy of $X$ is given by
$$\operatorname{H}(X) = - \int_{-\infty}^\infty f(x) \log f(x) dx$$

To maximize the entropy, notice that the following constraints hold for any pdf:
\begin{equation}
    \left.
        \begin{aligned}
            \int_{-\infty}^\infty f(x) dx &= 1 \\
            \int_{-\infty}^\infty (x-\mu)^2 f(x) dx &= \sigma^2
        \end{aligned}
    \right\}
\end{equation}

Define a function with two Lagrange multipliers:
$$\mathcal{L}(x, \lambda_1, \lambda_2) =
- \int_{-\infty}^\infty f(x) \log f(x) dx
- \lambda_1 \left( \int_{-\infty}^\infty f(x) dx - 1 \right)
- \lambda_2 \left( \int_{-\infty}^\infty (x-\mu)^2 f(x) dx - \sigma^2 \right)
$$

Set the gradient of the Lagrangian to 0:
$$\nabla_{x,\lambda_1,\lambda_2} \mathcal{L}(x, \lambda_1, \lambda_2) = 0$$

We get
$$\frac{\partial \mathcal{L}}{\partial x} =
- f(x) \left(\log f(x) + 1 + \lambda_1 + \lambda_2(x-\mu)^2 \right) = 0
$$
Since it must hold for any $f(x)$ such that $\frac{\partial \mathcal{L}}{\partial x} = 0$, it holds that
\begin{align*}
0 &= \log f(x) + 1 + \lambda_1 + \lambda_2(x-\mu)^2 \\
\log f(x) &= -1 - \lambda_1 - \lambda_2(x-\mu)^2 \\
f(x) &= e^{-1 - \lambda_1 - \lambda_2(x-\mu)^2}
\end{align*}

Consider the constraints:
\begin{equation}
    \left.
        \begin{aligned}
            \int_{-\infty}^\infty e^{-1 - \lambda_1 - \lambda_2(x-\mu)^2} dx &= 1 \\
            \int_{-\infty}^\infty (x-\mu)^2 e^{-1 - \lambda_1 - \lambda_2(x-\mu)^2} dx &= \sigma^2
        \end{aligned}
    \right\}
\end{equation}
with solution (using Gaussian integral)
\begin{align*}
\lambda_1 &= \frac{1}{2}\log(2\pi\sigma^2) - 1 \\
\lambda_2 &= \frac{1}{2\sigma^2}
\end{align*}

We get
\begin{align*}
f(x) &= e^{-1 - \lambda_1 - \lambda_2(x-\mu)^2} \\
&= \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}
\end{align*}
which gives the probability distribution that maximizes the entropy for $X$.

The entropy of $X$ is given by
$$\frac{1}{2} \left( \log(2\pi\sigma^2) + 1 \right)$$



# Univariate Normal Distribution

The *normal distribution* (or *Gaussian distribution*) is the continuous probability distribution with the maximum entropy for a specified mean $\mu$ and variance $\sigma^2$.

**pdf.**
$$f_X(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$
$$X \sim \mathcal{N}(\mu, \sigma^2)$$

**Mean.**
$$\operatorname{E}[X] = \mu$$

**Variance.**
$$\operatorname{Var}(X) = \sigma^2$$

**Skewness.**
$$\operatorname{Skew}(X) = 0$$

**Excess kurtosis.**
$$\operatorname{Kurt}(X) = 0$$

**Entropy.**
$$\operatorname{H}(X;\sigma) = \frac{1}{2} \left( \log(2\pi\sigma^2) + 1 \right)$$



# Multivariate Normal Distribution

The multivariate normal distribution is a generalization of the univariate normal distribution to higher dimensions, with parameters:

* $k$-dimensional mean vector:
$\boldsymbol \mu = \operatorname{E}[\boldsymbol x]$.
* $k \times k$ covariance matrix:
$\mathbf\Sigma = \operatorname{E}[(\boldsymbol x - \boldsymbol \mu)(\boldsymbol x - \boldsymbol \mu)^\mathrm{T}]$.

**pdf.**
$$f(\boldsymbol x) =
(2\pi)^{-k/2} |\mathbf\Sigma|^{-1/2} e^{-\frac{1}{2} (\boldsymbol x - \boldsymbol\mu)^\mathrm{T} \Sigma^{-1}(\boldsymbol x - \boldsymbol\mu)}$$
$$\boldsymbol x \sim \mathcal{N}_k(\boldsymbol\mu, \mathbf\Sigma)$$

**Mean.**
$$\operatorname{E}[\boldsymbol x] = \boldsymbol\mu$$

**Variance.**
$$\operatorname{Var}(\boldsymbol x) = \mathbf\Sigma$$

**Entropy.**
$$\operatorname{H}(\boldsymbol x;\mathbf\Sigma) = \frac{1}{2} \left( \log(2 \pi e)^k |\mathbf\Sigma| \right)$$
