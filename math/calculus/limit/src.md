% Limit
% Mort Yao
% 2016-09-24

# $(ε, δ)$-definition

**Definition 1.1.**
Let $f : D \to \mathbb{R}$ be a function defined on a subset $D \subseteq \mathbb{R}$, let $a$ be a limit point of $D$ and $L \in \mathbb{R}$. We say *the limit of $f(x)$ as $x$ approaches $a$ is $L$*, denoted
$$\lim_{x \to a} f(x) = L$$
if for all $\varepsilon > 0$ there exists a $\delta > 0$ such that
$$|f(x) - L| < \varepsilon$$
whenever
$$0 < |x - a| < \delta$$

**Definition 1.2. (One-sided limits)**
Let $f : D \to \mathbb{R}$ be a function defined on a subset $D \subseteq \mathbb{R}$, let $a$ be a limit point of $D$ and $L \in \mathbb{R}$. We say *the left-hand limit of $f(x)$ as $x$ approaches $a$ is $L$*, denoted
$$\lim_{x \to a^-} f(x) = L$$
if for all $\varepsilon > 0$ there exists a $\delta > 0$ such that
$$|f(x) - L| < \varepsilon$$
whenever
$$a - \delta < x < a$$

We say *the right-hand limit of $f(x)$ as $x$ approaches $a$ is $L$*, denoted
$$\lim_{x \to a^+} f(x) = L$$
if for all $\varepsilon > 0$ there exists a $\delta > 0$ such that
$$|f(x) - L| < \varepsilon$$
whenever
$$a < x < a + \delta$$

**Definition 1.3. (Infinite limits)**
Let $f : D \to \mathbb{R}$ be a function defined on a subset $D \subseteq \mathbb{R}$, let $a$ be a limit point of $D$. We say *the limit of $f(x)$ as $x$ approaches $a$ is infinity*, denoted
$$\lim_{x \to a} f(x) = \infty$$
if for all $\varepsilon > 0$ there exists a $\delta > 0$ such that
$$f(x) > \varepsilon$$
whenever
$$0 < |x - a| < \delta$$

We say *the limit of $f(x)$ as $x$ approaches $a$ is negative infinity*, denoted
$$\lim_{x \to a} f(x) = -\infty$$
if for all $\varepsilon > 0$ there exists a $\delta > 0$ such that
$$f(x) < -\varepsilon$$
whenever
$$0 < |x - a| < \delta$$

**Definition 1.4. (Limits at infinity)**
Let $f : D \to \mathbb{R}$ be a function defined on a subset $D \subseteq \mathbb{R}$, let $L \in \mathbb{R}$. We say *the limit of $f(x)$ as $x$ approaches infinity is $L$*, denoted
$$\lim_{x \to \infty} f(x) = L$$
if for all $\varepsilon > 0$ there exists a $c$ such that
$$|f(x) - L| < \varepsilon$$
whenever
$$x > c$$

We say *the limit of $f(x)$ as $x$ approaches negative infinity is $L$*, denoted
$$\lim_{x \to -\infty} f(x) = L$$
if for all $\varepsilon > 0$ there exists a $c$ such that
$$|f(x) - L| < \varepsilon$$
whenever
$$x < c$$

**Limits and asymptotic analysis.**
Limits involving infinity are often connected with the concept of [asymptotes](/algo/asymptotic-notation).

The above definitions can be combined in a natural way to produce definitions for different combinations, such as:

**Example 1.5.**
$\lim_{x \to \infty} x = \infty$.

**Example 1.6.**
$\lim_{x \to 0^+} \ln x = -\infty$.



# Limit Rules

**Theorem 2.1. (Constant rule)**
If $a$, $c$ are constants then $\lim_{x \to a} c = c$.

**Theorem 2.2. (Identity rule)**
If $a$ is a constant then $\lim_{x \to a} x = a$.

**Theorem 2.3. (Scalar product rule)**
Suppose that $\lim_{x \to a} f(x) = L$ for finite $L$ and that $k$ is a constant, then $\lim_{x \to a} k \cdot f(x) = k \cdot \lim_{x \to a} f(x) = k \cdot L$.

**Theorem 2.4. (Algebraic limit theorem)**
$$\lim_{x \to a} [f(x) + g(x)] = \lim_{x \to a} f(x) + \lim_{x \to a} g(x)$$
$$\lim_{x \to a} [f(x) - g(x)] = \lim_{x \to a} f(x) - \lim_{x \to a} g(x)$$
$$\lim_{x \to a} [f(x) \cdot g(x)] = \lim_{x \to a} f(x) \cdot \lim_{x \to a} g(x)$$
$$\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{\lim_{x \to a} f(x)}{\lim_{x \to a} g(x)}$$

**Theorem 2.5. (Squeeze theorem)**
If $g(x) \leq f(x) \leq h(x)$ holds for all $x$ in an open interval containing $a$, except possibly at $x=a$ itself, and $\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L$, then
$$\lim_{x \to a} f(x) = L$$

**Theorem 2.6. (Composition rule)**
If $f(x)$ is continuous at $x=b$ and $\lim_{x \to a} g(x) = b$, then
$$\lim_{x \to a} f(g(x)) = f(b) = f\big(\lim_{x \to a} g(x)\big)$$

**\*Theorem 2.7. (L'Hôpital's rule)**
Let $f(x)$ and $g(x)$ be differentiable functions defined on an open interval except possibly at $x=a$ itself, if:

1. $\lim_{x \to a} f(x) = \lim_{x \to a} g(x) = 0 \textrm{ or } \pm\infty$
2. $g'(x) \neq 0$ for all $x \neq a$
3. $\lim_{x \to a} \frac{f'(x)}{g'(x)} = L$

Then
$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)} = L$$

**\*Example 2.8.**
$\lim_{x \to 1} \frac{\ln x}{x - 1} = \lim_{x \to 1} \frac{(\ln x)'}{(x - 1)'} = \lim_{x \to 1} \frac{1/x}{1} = 1$.

**\*Example 2.9.**
$\lim_{x \to \infty} \frac{e^x}{x} = \lim_{x \to \infty} \frac{(e^x)'}{x'} = \lim_{x \to \infty} \frac{e^x}{1} = \infty$.



# Computation of Limits (Using Maxima)

**Example 3.1.**
Compute $\lim_{x \to 1} \frac{\ln x}{x - 1}$:
```maxima
 limit(log(x) / (x - 1), x, 1);
```

**Example 3.2.**
Compute $\lim_{x \to \infty} \frac{e^x}{x}$:
```maxima
 limit(exp(x) / x, x, inf);
```

**Example 3.3.**
Compute one-sided limits $\lim_{x \to \frac{\pi}{2}^+} \tan x$ and $\lim_{x \to \frac{\pi}{2}^-} \tan x$:
```maxima
 limit(tan(x), x, %pi / 2, plus);
 limit(tan(x), x, %pi / 2, minus);
```



# Limits of Special Interest

**Theorem 4.1. (Asymptotes for rational functions)**
Suppose that all $a_i$ and $b_i$ are constants, $n \in \mathbb{N}$, then
$$\lim_{x \to \infty} \frac{a_1x^n + a_2x^{n-1} + \dots + a_n}{b_1x^n + b_2x^{n-1} + \dots + b_n} = \frac{a_1}{b_1}$$

**Theorem 4.2. (Euler's number)**
$$\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$$

where $e = \sum_{n=0}^\infty \frac{1}{n!} \approx 2.718 \dots$ is a mathematical constant. See also [some inequalities related to Euler's number](/math/analysis/inequalities).
