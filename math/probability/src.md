% Basic Probability Theory
% Mort Yao
% 2016-12-10

# Events and Probability

**Definition 1.1. (Experiment)**
An *experiment* or *trial* is any procedure that can be infinitely repeated and has a well-defined [set](/math/set) of possible *outcomes*, known as the *sample space*.

An experiment is said to be *random* if it has more than one possible outcome, and *deterministic* if it has only one.

A random experiment that has exactly two possible outcomes is known as a *Bernoulli trial* (or *binomial trial*).

**Definition 1.2. (Outcome)**
An *outcome* of an experiment is a possible result of that experiment. Each possible outcome of a particular experiment is unique, and different outcomes are mutually exclusive.

**Definition 1.3. (Sample space)**
The *sample space* of an experiment is the set of all possible outcomes of that experiment. A sample space is usually denoted using set notation, e.g., $\Omega$, $S$ or $U$.

In some sample spaces, it is reasonable to assume that all outcomes in the space are equally likely (that they occur with equal *probability*).

**Definition 1.4. (Event)**
Any [measurable](/math/analysis/measure) subset of the sample space, constituting a σ-algebra over the sample space itself, is known as an *event*.

Any subset of the sample space that is not an element of the σ-algebra is not an event, and does not have a probability. With a reasonable specification of the probability space, however, all events of interest are elements of the σ-algebra.

We say that the event $A$ occurs when the outcome of the experiment lies in $A$.

Events are written as propositional formulas involving random variables, e.g., if $X$ is a real-valued random variable defined on the sample space $\Omega$, the event
$$\{a \in \Omega | u < X(a) \leq v \}$$

can also be written as
$$u < X \leq v$$

**Definition 1.5. (Elementary event)**
An *elementary event* (also called an *atomic event* or *simple event*) is an event which contains only a single outcome in the sample space. Using set theory terminology, an elementary event is a singleton.

**Definition 1.6. (Null event)**
An *null event* is an event consisting of no outcome and hence could not occur, denoted by $\varnothing$.

**Definition 1.7. (Union and intersection of events)**
For any events $A_1, A_2, \dots$ of a sample space $\Omega$, the *union (or disjunction) of these events*, denoted by $\bigcup_{n=1}^\infty A_n$, is defined to be the event that consists of all outcomes that are in $A_n$ for at least one value of $n = 1, 2, \dots$.

Similarly, the *intersection (or conjunction) of the events* $A_1, A_2, \dots$, denoted by $\bigcap_{n=1}^\infty A_n$, is defined to be the event consisting of those outcomes that are in all of the events.

If $\bigcap_{n=1}^\infty A_n = \varnothing$, then events $A_n$ are said to be *mutually exclusive* or *mutually disjoint*.

**Definition 1.8. (Complementary event)**
For any event $A$ we define the new event $\bar{A}$ (also denoted by $A'$ or $A^c$), referred to as the *complement of $A$*, to consist of all outcomes in the sample space $\Omega$ that are not in $A$, i.e., $\bar{A}$ will occur if and only if $A$ does not occur. $\bar{A} = \Omega \backslash A$.

The event $A$ and its complement $\bar{A}$ are mutually exclusive and exhaustive. Given an event, the event and its complementary event define a Bernoulli trial.

**Definition 1.9. (Probability defined on events)**
Consider an experiment whose sample space is $\Omega$. For each event $A$, we assume that a number $\Pr[A]$ is defined and satisfies the following conditions (*Kolmogorov's axioms*):

1. $\Pr[A] \in \mathbb{R}$, $\Pr[A] \geq 0$.
2. *(Assumption of unit measure)* $\Pr[\Omega] = 1$.
3. *(Assumption of σ-additivity)* For any finite or countably infinite sequence of events $A_1, A_2, \dots$ that are mutually exclusive, i.e., events for which $A_nA_m = \varnothing$ when $n \neq m$, then
$$\Pr\left[\bigcup_{n=1}^\infty A_n\right] = \sum_{n=1}^\infty \Pr[A_n]$$

We refer to $\Pr[A]$ as the *probability of the event $A$*.

A function $\Pr : \mathcal{F} \to \mathbb{R}$ is also called a *probability function*, if for any given event $A \in \mathcal{F} \subseteq \mathcal{P}(\Omega)$, the above conditions hold.

**Definition 1.10. (Probability space)**
A *probability space* is a tuple $(\Omega, \mathcal{F}, \Pr)$, where

* $\Omega$ is a sample space, which is the set of all probable outcomes.
* $\mathcal{F}$ is a family of sets representing all possible events. $\mathcal{F} \subseteq \mathcal{P}(\Omega)$.
* $\Pr$ is a probability function $\Pr : \mathcal{F} \to \mathbb{R}$ satisfying Kolmogorov's axioms.

**Lemma 1.11.** $\Pr[\bar{A}] = 1 - \Pr[A]$.

**Proof.**
By definition, $\Omega = A \cup \bar{A}$, therefore $\Pr[A \cup \bar{A}]=1$. Since $A$ and $\bar{A}$ are mutually exclusive events, $\Pr[A \cup \bar{A}]=\Pr[A]+\Pr[\bar{A}]$. Thus, we have $\Pr[\bar{A}] = 1 - \Pr[A]$.
[QED]

**Lemma 1.12.** $\Pr[\varnothing] = 0$.

**Proof.**
From Lemma 1.11 and $\Pr[\Omega] = 1$, we have $\Pr[\bar{\Omega}] = 0$. Since $\bar{\Omega} = \Omega \backslash \Omega = \varnothing$, $\Pr[\varnothing] = 0$.
[QED]

**Lemma 1.13. (Monotonicity of probability)**
If $A_1 \subseteq A_2$ then $\Pr[A_1] \leq \Pr[A_2]$.

**Proof.**
Since $A_2 = A_1 \cup (A_2 \backslash A_1)$, $A_1$ and $A_2 \backslash A_1$ are mutually exclusive events, and $\Pr[A_2 \backslash A_1] \geq 0$, we have
$$\Pr[A_2] = \Pr[A_1] + \Pr[A_2 \backslash A_1] \geq \Pr[A_1]$$
[QED]

The monotonicity of probability follows from the fact that a measure is monotone.

**Lemma 1.14.**
$0 \leq \Pr[A] \leq 1$.

**Proof.**
Since $\varnothing \subseteq A \subseteq \Omega$, $\Pr[\varnothing] = 0$ and $\Pr[\Omega] = 1$, by Lemma 1.13 it holds that $0 \leq \Pr[A] \leq 1$.
[QED]

**Theorem 1.15. (Addition law of probability)**
$$\Pr[A_1 \cup A_2] = \Pr[A_1] + \Pr[A_2] - \Pr[A_1 \cap A_2]$$

**Theorem 1.16. (Inclusion-exclusion principle)**
$$\Pr\left[\bigcup_{i=1}^n A_i\right] = \sum_{i=1}^n\left((-1)^{i-1} \sum_{I \subset \{1,\dots,n\}, |I|=i} \Pr\left[\bigcap_{i \in I} A_i\right]\right)
$$

**Theorem 1.17. (Union bound; Boole's inequality)**
$$\Pr\left[\bigcup_{i=1}^n A_i\right] \leq \sum_{i=1}^n \Pr[A_i]$$

Boole's inequality follows from the fact that a probability measure is σ-sub-additive.

**Theorem 1.18. (Bonferroni inequalities)** For all odd $k$,
$$\Pr\left[\bigcup_{i=1}^n A_i\right] \leq \sum_{j=1}^k \left((-1)^{j-1} \sum_{I \subseteq \{1,\dots,n\}, |I|=j} \Pr\left[\bigcap_{i \in I} A_i\right]\right)$$
For all even $k$,
$$\Pr\left[\bigcup_{i=1}^n A_i\right] \geq \sum_{j=1}^k \left((-1)^{j-1} \sum_{I \subseteq \{1,\dots,n\}, |I|=j} \Pr\left[\bigcap_{i \in I} A_i\right]\right)$$
When $k=n$, the equality holds and the resulting identity is the inclusion–exclusion principle.
When $k=1$, we get Boole's inequality.

**Definition 1.19. (Pairwise independence of events)**
Events $A_i, \dots, A_n$ are said to be *pairwise independent*, if and only if for any pair $i,j$ $(i \neq j)$, $\Pr[A_i \cap A_j] = \Pr[A_i] \cdot \Pr[A_j]$.

**Definition 1.20. (Mutual independence of events)**
Events $A_i, \dots, A_n$ are said to be *mutually independent*, if and only if for any subset of indices $I \subseteq \{1,\dots,n\}$,
$$\Pr\left[\bigcap_{i \in I} A_i\right] = \prod_{i \in I} \Pr[A_i]$$

Mutual independence is a stronger notion of statistical independence, and it implies pairwise independence. However, pairwise independence does not necessarily imply mutual independence.

**Definition 1.21. (Conditional probability)** The *conditional probability of $A_1$ given $A_2$*, denoted $\Pr[A_1 | A_2]$, is defined as
$$\Pr[A_1 | A_2] = \frac{\Pr[A_1 \cap A_2]}{\Pr[A_2]}$$
when $\Pr[A_2] \neq 0$.

It follows immediately from the definition that
$$\Pr[A_1 \cap A_2] = \Pr[A_1 | A_2] \cdot \Pr[A_2]$$

**Lemma 1.22.** If $A_1$ and $A_2$ are independent events, then $\Pr[A_1|A_2] = \Pr[A_1]$.

**Proof.**
By definition $\Pr[A_1 \cap A_2] = \Pr[A_1] \cdot \Pr[A_2]$, $\Pr[A_1 \cap A_2] = \Pr[A_1 | A_2] \cdot \Pr[A_2]$ (note that $\Pr[A_2] \neq 0$). Thus, $\Pr[A_1] = \Pr[A_1 | A_2]$.
[QED]

**Theorem 1.23. (Bayes' theorem)**
If $\Pr[A_2] \neq 0$ then
$$\Pr[A_1 | A_2] = \frac{\Pr[A_2 | A_1] \cdot \Pr[A_1]}{\Pr[A_2]}$$

**Theorem 1.24. (Law of total probability)** Let $A_1,A_2,\dots,A_n$ be mutually exclusive events such that $\bigcup_{i=1}^n A_i = A$. Then
$$\Pr[A] = \sum_{i=1}^n \Pr[A \cap A_i] = \sum_{i=1}^n \Pr[A|A_i] \Pr[A_i]$$.

**Lemma 1.25.**
$$\Pr\left[\bigcup_{i=1}^n A_i\right] \leq \Pr[A_1] + \sum_{i=2}^n \Pr[A_i | \bar{A}_1 \cap \dots \cap \bar{A}_{i-1}]$$



# Random Variables and Expectation

**Definition 2.1. (Random variable)**
A *random variable* $X$ on sample space $\Omega$ is a real-valued function $X : \Omega \to \mathbb{R}$. A *discrete random variable* is a random variable that takes on a finite or countably infinite number of values.

**Definition 2.2. (Pairwise independence of random variables)**
Random variables $X_1,\dots,X_n$ are said to be *pairwise independent*, if and only if for any pair $i,j$ $(i \neq j)$ and any $x_i,x_j$, $\Pr[(X_i=x_i)\cap(X_j=x_j)] = \Pr[X_i=x_i] \cdot \Pr[X_j=x_j]$.

**Definition 2.3. (Mutual independence of random variables)**
Random variables $X_1,\dots,X_n$ are said to be *mutually independent*, if and only if for any subset of indices $I \subseteq \{1,\dots,n\}$ and any $x_i (i \in I)$,
$$\Pr\left[\bigcap_{i \in I} (X_i=x_i)\right] = \prod_{i \in I} \Pr[X_i=x_i]$$

**Definition 2.4. (Expectation)**
Let $X$ be a discrete random variable and let $\mathcal{X}$ be the set of all possible values it can take. The *expectation* of $X$, denoted by $\operatorname{E}[X]$, is given by
$$\operatorname{E}[X] = \sum_{x \in \mathcal{X}} x\Pr[X=x]$$
The expectation is a finite number if and only if $\sum_{x \in \mathcal{X}} x\Pr[X=x]$ converges.

**Lemma 2.5.** For any constant $c$, $\operatorname{E}[cX] = c\operatorname{E}[X]$.

**Proof.**
\begin{align*}
\operatorname{E}[cX] &= \sum_{x \in \mathcal{X}} cx \Pr[cX=cx] \\
&= c \sum_{x \in \mathcal{X}} x \Pr[X=x] \\
&= c \operatorname{E}[X]
\end{align*}
[QED]

**Lemma 2.6. (Linearity of expectation)**
For any pair of random variables $X$ and $Y$, $\operatorname{E}[X+Y] = \operatorname{E}[X] + \operatorname{E}[Y]$.

**Proof.**
\begin{align*}
\operatorname{E}[X+Y]
&= \sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{Y}} (x+y) \Pr[X=x \cap Y=y] \\
&= \sum_{x \in \mathcal{X}} x \sum_{y \in \mathcal{Y}} \Pr[X=x \cap Y=y] +
\sum_{y \in \mathcal{Y}} y \sum_{x \in \mathcal{X}} \Pr[X=x \cap Y=y] \\
&= \sum_{x \in \mathcal{X}} x \Pr[X=x] + \sum_{y \in \mathcal{Y}} y \Pr[Y=y] \\
&= \operatorname{E}[X] + \operatorname{E}[Y]
\end{align*}
[QED]

**Lemma 2.7. (Iterated expectation)**
$\operatorname{E}[X] = \operatorname{E}[\operatorname{E}[X|Y]]$.

**Proof.**
\begin{align*}
\operatorname{E}[\operatorname{E}[X|Y]]
&= \sum_{y \in \mathcal{Y}} \operatorname{E}[X|Y=y] \cdot \Pr[Y=y] \\
&= \sum_{y \in \mathcal{Y}} \left(\sum_{x \in \mathcal{X}} x \cdot \Pr[X=x|Y=y]\right) \cdot \Pr[Y=y] \\
&= \sum_{y \in \mathcal{Y}} \sum_{x \in \mathcal{X}} x \cdot \Pr[X=x|Y=y] \cdot \Pr[Y=y] \\
&= \sum_{y \in \mathcal{Y}} \sum_{x \in \mathcal{X}} x \cdot \Pr[Y=y|X=x] \cdot \Pr[X=x] \\
&= \sum_{x \in \mathcal{X}} x \cdot \Pr[X=x] \cdot \left(\sum_{y \in \mathcal{Y}}[Y=y|X=x]\right) \\
&= \sum_{x \in \mathcal{X}} x \cdot \Pr[X=x] \\
&= \operatorname{E}[X]
\end{align*}
[QED]

**Lemma 2.8.**
For *independent random variables* $X$ and $Y$, $\operatorname{E}[XY] = \operatorname{E}[X] \operatorname{E}[Y]$.

**Proof.**
\begin{align*}
\operatorname{E}[XY]
&= \sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{Y}} xy\Pr[X=x \cap Y=y] \\
&= \sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{Y}} xy\Pr[X=x]\Pr[Y=y] \\
&= \sum_{x \in \mathcal{X}} x \Pr[X=x] \sum_{y \in \mathcal{Y}} y \Pr[Y=y] \\
&= \operatorname{E}[X] \operatorname{E}[Y]
\end{align*}
[QED]

**Definition 2.9. (Covariance)**
$\operatorname{Cov}(X,Y) = \operatorname{E}[(X - \operatorname{E}[X])(Y - \operatorname{E}[Y])]$.

**Lemma 2.10.**
$\operatorname{Cov}(X,Y) = \operatorname{E}[XY] - \operatorname{E}[X] \operatorname{E}[Y]$.

Intuitively, covariance is a measure of how much two random variables change together.

When $\operatorname{Cov}(X,Y) = 0$, $X$ and $Y$ are said to be *uncorrelated*. Independent random variables are a notable case of uncorrelated variables (follows from Lemma 2.8). Note that the uncorrelatedness of two variables does not necessarily imply that they are independent.

**Definition 2.11. (Variance)**
$\operatorname{Var}(X) = \sigma^2 = \operatorname{E}[(X-\mu)^2]$, where $\mu = \operatorname{E}[X]$.

$\sigma = \sqrt{\operatorname{Var}(X)}$ is also called the *standard deviation* of $X$.

**Lemma 2.12.**
$\operatorname{Var}(X) = \operatorname{E}[X^2] - (\operatorname{E}[X])^2$.

**Proof.**
\begin{align*}
\operatorname{Var}(X) = \operatorname{E}[(X-\operatorname{E}[X])^2]
&= \sum_{x \in \mathcal{X}}(x - \operatorname{E}[X])^2 \Pr[X=x] \\
&= \sum_{x \in \mathcal{X}} x^2 \Pr[X=x] - 2\operatorname{E}[X] \sum_{x \in \mathcal{X}} x \Pr[X=x] + (\operatorname{E}[X])^2 \sum_{x \in \mathcal{X}} \Pr[X=x] \\
&= \sum_{x \in \mathcal{X}} x^2 \Pr[X=x]- 2\operatorname{E}[X] \cdot \operatorname{E}[X] + (\operatorname{E}[X])^2 \cdot 1 \\
&= \sum_{x \in \mathcal{X}} x^2 \Pr[X=x] - (\operatorname{E}[X])^2 = \operatorname{E}[X^2] - (\operatorname{E}[X])^2
\end{align*}
[QED]

Intuitively, variance is a measure of how far a set of numbers are spread out from their mean. Variance is a special case of the covariance when the two variables are identical, that is, the covariance of the random variable with itself. $\operatorname{Var}(X) = \operatorname{Cov}(X,X)$.

**Lemma 2.13.** $\operatorname{Var}(aX+b) = a^2 \operatorname{Var}(X)$.

**Lemma 2.14.** $\operatorname{Var}(X+Y) = \operatorname{Var}(X) + \operatorname{Var}(Y) + 2 \operatorname{Cov}(X,Y)$.

**Lemma 2.15.** If $X_1,\dots,X_n$ are pairwise independent, then $\operatorname{Var}(\sum_{i=1}^n X_i) = \sum_{i=1}^n \operatorname{Var}(X_i)$.

**Bernoulli random variable.** A discrete random variable $X$ taking values from $\{0,1\}$ is called a *Bernoulli random variable*. The parameter $p = \Pr[X=1]$ is called the *bias* of $X$.

For Bernoulli random variable $X$, we have $\operatorname{E}[X] = 0 \cdot (1-p) + 1 \cdot p = p = \Pr[X=1]$. Furthermore, we have $\operatorname{Var}(X) \leq \frac{1}{4}$, since $\operatorname{E}[X] = \operatorname{E}[X^2]$, thus $\operatorname{Var}(X) = \operatorname{E}[X] \cdot (1-\operatorname{E}[X]) \leq \frac{1}{4}$.

**Binomial random variable.** A discrete random variable $X$ taking value $k \in \{0,1,\dots,n\}$ is called a *binomial random variable* with parameters $n$ and $p$ if it satisfies the following probability distribution:
$$\Pr[X=k] = \binom{n}{k} p^k (1-p)^{n-k}$$

A binomial random variable can be represented as a sum of independent, identically distributed Bernoulli random variables.



# Moments and Deviations

**Theorem 3.1. (Markov's inequality)**
Let $X$ be a non-negative random variable and $\varepsilon > 0$. Then
$$\Pr[X \geq \varepsilon] \leq \frac{\operatorname{E}[X]}{\varepsilon}$$

**Proof.**
Let $X$ takes values from the set $\mathcal{X}$. We have
\begin{align*}
\operatorname{E}[X]
&= \sum_{x \in \mathcal{X}} x \Pr[X=x] \\
&\geq \sum_{x \in \mathcal{X}, x<\varepsilon} 0 \cdot \Pr[X=x] + \sum_{x \in \mathcal{X} ,x \geq \varepsilon} \varepsilon \cdot \Pr[X=x] \\
&= \varepsilon \cdot \Pr[X \geq \varepsilon]
\end{align*}
[QED]

**Theorem 3.2. (Chebyshev's inequality)**
Let $X$ be a random variable and $\delta > 0$. Then
$$\Pr[|X - \operatorname{E}[X]| \geq \delta] \leq \frac{\operatorname{Var}(X)}{\delta^2}$$

**Proof.**
Let $Y=(X-\operatorname{E}[X])^2$ be a non-negative random variable. Using Markov's inequality, we have
\begin{align*}
\Pr[|X - \operatorname{E}[X]| \geq \delta]
&= \Pr[(X - \operatorname{E}[X])^2 \geq \delta^2] \\
&\leq \frac{\operatorname{E}[(X - \operatorname{E}[X])^2]}{\delta^2}
= \frac{\operatorname{Var}(X)}{\delta^2}
\end{align*}
[QED]

**Corollary 3.3.**
Let $X_1,\dots,X_n$ be pairwise-independent random variables with the same expectation $\mu$ and variance $\sigma^2$. Then for every $\delta > 0$,
$$\Pr\left[\left|\frac{\sum_{i=1}^n X_i}{n} - \mu\right| \geq \delta\right] \leq \frac{\sigma^2}{\delta^2 n}$$

**Proof.**
By linearity of expectation, we have $\operatorname{E}\left[\frac{\sum_{i=1}^n X_i}{n}\right] = \mu$. Applying Chebyshev's inequality to the random variable $\frac{\sum_{i=1}^n X_i}{n}$, we have
$$\Pr\left[\left|\frac{\sum_{i=1}^n X_i}{n} - \mu\right| \geq \delta\right] \leq \frac{\operatorname{Var}\left(\frac{\sum_{i=1}^n X_i}{n}\right)}{\delta^2}$$

Using pairwise independence (Lemma 2.15), it follows that
$$\operatorname{Var}\left(\frac{\sum_{i=1}^n X_i}{n}\right)
= \frac{1}{n^2} \sum_{i=1}^n \operatorname{Var}(X_i) = \frac{1}{n^2} \sum_{i=1}^n \sigma^2 = \frac{\sigma^2}{n}$$
[QED]



# Chernoff Bounds
