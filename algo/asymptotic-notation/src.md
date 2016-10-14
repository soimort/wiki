% Asymptotic Notation
% Mort Yao
% 2016-09-28

**Motivation.**
In the analysis of the performance of algorithms when applied to very big input datasets, it is often desirable to suppress two aspects of things:

* *Constant factors*, as they are system-dependent and do not reflect the essence of the algorithms;
* *Lower-order terms*, as they are irrelevant for large inputs.

Asymptotic analysis has emerged for this purpose.

**Definition 1. (Bachmann–Landau notations)**
Let $f, g : \mathbb{N} \to \mathbb{R}$, then

* **(Big O notation)** $f(n) = \mathcal{O}(g(n))$ means that there exist $c, n' \in \mathbb{Z}^+$ such that for all $n > n'$ it holds that $f(n) \leq c \cdot g(n)$.
* **(Big Omega notation)** $f(n) = \Omega(g(n))$ means that there exist $c, n' \in \mathbb{Z}^+$ such that for all $n > n'$ it holds that $f(n) \geq c \cdot g(n)$.
* **(Big Theta notation)** $f(n) = \Theta(g(n))$ means that there exist $c_1, c_2, n' \in \mathbb{Z}^+$ such that for all $n > n'$ it holds that $c_1 \cdot g(n) \leq f(n) \leq c_2 \cdot g(n)$, i.e., $f(n) = \Theta(g(n))$ iff $f(n) = \mathcal{O}(g(n))$ and $f(n) = \Omega(g(n))$.
* **(Little o notation)** $f(n) = o(g(n))$ means that $\lim_{n \to \infty} \frac{f(n)}{g(n)} = 0$.
* **(Little omega notation)** $f(n) = \omega(g(n))$ means that $\lim_{n \to \infty} \frac{f(n)}{g(n)} = \infty$.
* $f(n) \sim g(n)$ means that $\lim_{n \to \infty} \frac{f(n)}{g(n)} = 1$.

Intuitively,

* $f(n) = \mathcal{O}(g(n))$ means that $f$ is bounded above by (a constant multiple of) $g$ asymptotically.
* $f(n) = \Omega(g(n))$ means that $f$ is bounded below by (a constant multiple of) $g$ asymptotically.
* $f(n) = \Theta(g(n))$ means that $f$ is bounded both above and below by (a constant multiple of) $g$ asymptotically.
* $f(n) = o(g(n))$ means that $f$ is dominated by $g$ asymptotically.
* $f(n) = \omega(g(n))$ means that $f$ dominates $g$ asymptotically.
* $f(n) \sim g(n)$ means that $f$ is equal to $g$ asymptotically.

**N.B.** The use of equals sign in these notations is just customary; it does *not* suggest a symmetric relation in the mathematical sense.

**Example 2.**
Let $f(n) = n^4 + 2n^2$, then

* $f(n) = \mathcal{O}(n^4)$.
* $f(n) = \mathcal{O}(n^5)$; in fact, $f(n) = o(n^5)$.
* $f(n) = \Omega(n^3 \log n)$; in fact, $f(n) = \omega(n^3 \log n)$.
* $f(n) = \Theta(n^4)$.

Intuitively,

* $f(n)$ grows asymptotically no faster than $n^4$.
* $f(n)$ grows asymptotically no faster than $n^5$; in fact, $f(n)$ grows asymptotically much slower than $n^5$.
* $f(n)$ grows asymptotically no slower than $n^3 \log n$; in fact, $f(n)$ grows asymptotically much faster than $n^3 \log n$.
* $f(n)$ grows asymptotically as fast as $n^4$.

**N.B.** The Big Theta notation provides the tightest asymptotic bounds; however, the Big O notation is much more commonly used in many texts (where it could be replaced by the Big Theta notation to represent an "exact bound").

**Theorem 3. (Master theorem)**
Let $a \geq 1, b > 1$ be constants, and for $n \in \mathbb{N}$,
$$T(n) = aT\left(\frac{n}{b}\right) + f(n)$$
where we interpret $\frac{n}{b}$ to mean either $\lfloor\frac{n}{b}\rfloor$ or $\lceil\frac{n}{b}\rceil$, then

1. If $f(n) = \mathcal{O}(n^{\log_b a-\varepsilon})$ for some constant $\varepsilon > 0$, then $T(n) = \Theta(n^{\log_b a})$.
2. If $f(n) = \Theta(n^{\log_b a} \log^k n)$ for some constant $k \geq 0$, then $T(n) = \Theta(n^{\log_b a}\log^{k+1} n)$.
    * Specifically when $k=0$, if $f(n) = \Theta(n^{\log_b a})$, then $T(n) = \Theta(n^{\log_b a}\log n)$.
3. If $f(n) = \Omega(n^{\log_b a + \varepsilon})$ for some constant $\varepsilon > 0$, and if $af\left(\frac{n}{b}\right) \leq cf(n)$ for some constant $c<1$ and all sufficiently large $n$ ("regularity condition"), then $T(n) = \Theta(f(n))$.

Intuitively, in each of the three cases, we compare the function $f(n)$ with $n^{\log_b a}$ and see if it is:

1. Polynomially smaller than $n^{\log_b a}$.
2. Equal to $n^{\log_b a}$.
3. Polynomially larger than $n^{\log_b a}$ and in addition satisfies the regularity condition.

**Example 4.**
Given the recurrence $T(n)=T\left(\frac{n}{2}\right)+\mathcal{O}(1)$ (binary search), determine the asymptotic bound of $T(n)$.

Here $a=1$, $b=2$ and $f(n)=\mathcal{O}(1)$. $n^{\log_b a} = n^{\log_2 1} = n^0 = 1$, therefore, $f(n)=n^{\log_b a}$. Thus, we have $T(n) = \Theta(\log n)$.

**Example 5.**
Given the recurrence $T(n)=2T\left(\frac{n}{2}\right)+\mathcal{O}(n)$ (merge sort), determine the asymptotic bound of $T(n)$.

Here $a=2$, $b=2$ and $f(n)=\mathcal{O}(n)$. $n^{\log_b a} = n^{\log_2 2} = n^1 = n$, therefore, $f(n)=n^{\log_b a}$. Thus, we have $T(n) = \Theta(n \log n)$.

**Example 6.**
Given the recurrence $T(n)=2T\left(\frac{n}{2}\right)+\mathcal{O}(1)$ (binary tree traversal), determine the asymptotic bound of $T(n)$.

Here $a=2$, $b=2$ and $f(n)=\mathcal{O}(1)$. $n^{\log_b a} = n^{\log_2 2} = n^1 = n$, therefore, $f(n)=n^{\log_b a - \varepsilon}<n^{\log_b a}$ where $\varepsilon=1$. Thus, we have $T(n) = \Theta(n)$.



**Common orders and [time complexities](/comp/complexity/time).**
The following table summarizes some classes of commonly encountered time complexities.

| Order of running time (Big O notation) | Name | Complexity class |
| -------------------------------- | ------------------ | -- |
| $\mathcal{O}(1)$                 | Constant           |    |
| $\mathcal{O}(\log \log n)$       | Double logarithmic |    |
| $\mathcal{O}(\log n)$            | Logarithmic        | DLOGTIME |
| $\mathcal{O}(\log^c n), c > 1$   | Polylogarithmic    |    |
| $\mathcal{O}(n^c), 0 < c < 1$    | Fractional power   |    |
| $\mathcal{O}(n)$                 | Linear             |    |
| $\mathcal{O}(n \log^* n)$        | n log star n       |    |
| $\mathcal{O}(n \log n)$          | Linearithmic       |    |
| $\mathcal{O}(n^2)$               | Quadratic          |    |
| $\mathcal{O}(n^3)$               | Cubic              |    |
| $\mathcal{O}(n^c)$               | Polynomial         | P  |
| $\mathcal{O}(n^{\log n})$        | Quasi-polynomial   | QP |
| $L_n[\alpha, c] = e^{(c+o(1))(\ln n)^\alpha(\ln \ln n)^{1-\alpha}}, 0 < \alpha < 1$ | Sub-exponential    | SUBEXP  |
| $\mathcal{O}(c^n), c > 1$        | Exponential        | EXPTIME |
| $\mathcal{O}(n!)$                | Factorial          |    |
| $\mathcal{O}(2^{2^n})$           | Double exponential | 2-EXPTIME |
