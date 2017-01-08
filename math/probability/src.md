% Basic Probability Theory
% Mort Yao
% 2017-01-08

Basic probability theory and statistics:

* Michael Mitzenmacher and Eli Upfal. ***Probability and Computing: Randomized Algorithms and Probabilistic Analysis***.
* Michael Baron. ***Probability and Statistics for Computer Scientists, 2nd edition***.

Advanced probability:

* Alexander Sokol and Anders Rønn-Nielsen. [***Advanced Probability***](http://www.math.ku.dk/noter/filer/vidsand12.pdf).
* Grégory Miermont. [***Advanced Probability***](http://perso.ens-lyon.fr/gregory.miermont/AdPr2006.pdf).
* Perla Sousi. [***Advanced Probability***](http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf).

---

# Events and Probability

**Definition 1.1. (Experiment)**
An *experiment* or *trial* is any procedure that can be infinitely repeated and has a well-defined [set](/math/set/) of possible *outcomes*, known as the *sample space*.

An experiment is said to be *random* if it has more than one possible outcome, and *deterministic* if it has only one.

A random experiment that has exactly two possible outcomes is known as a *Bernoulli trial* (or *binomial trial*).

**Definition 1.2. (Outcome)**
An *outcome* of an experiment is a possible result of that experiment. Each possible outcome of a particular experiment is unique, and different outcomes are mutually exclusive.

**Definition 1.3. (Sample space)**
The *sample space* of an experiment is the set of all possible outcomes of that experiment. A sample space is usually denoted using set notation, e.g., $\Omega$, $S$ or $U$.

In some sample spaces, it is reasonable to assume that all outcomes in the space are equally likely (that they occur with equal *probability*).

**Definition 1.4. (Event)**
Any [measurable](/math/analysis/measure/) subset of the sample space, constituting a σ-algebra over the sample space itself, is known as an *event*.

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
For any events $A_1, A_2, \dots$ of a sample space $\Omega$, the *union (or disjunction) of these events*, denoted by $\bigcup_n A_n$, is defined to be the event that consists of all outcomes that are in $A_n$ for at least one value of $n = 1, 2, \dots$.

Similarly, the *intersection (or conjunction) of the events* $A_1, A_2, \dots$, denoted by $\bigcap_n A_n$, is defined to be the event consisting of those outcomes that are in all of the events.

If $\bigcap_n A_n = \varnothing$, then events $A_n$ are said to be *mutually exclusive* or *mutually disjoint*.

**Definition 1.8. (Complementary event)**
For any event $A$ we define the new event $\bar{A}$ (also denoted by $A'$, $A^\complement$ or $\complement_U A$), referred to as the *complement of $A$*, to consist of all outcomes in the sample space $\Omega$ that are not in $A$, i.e., $\bar{A}$ will occur if and only if $A$ does not occur. $\bar{A} = \Omega \setminus A$.

The event $A$ and its complement $\bar{A}$ are mutually exclusive and exhaustive. Given an event, the event and its complementary event define a Bernoulli trial.

**Definition 1.9. (Probability defined on events)**
Consider an experiment whose sample space is $\Omega$. For each event $A$, we assume that a number $\Pr[A]$ is defined and satisfies the following conditions (*Kolmogorov's axioms*):

1. $\Pr[A] \in \mathbb{R}$, $\Pr[A] \geq 0$.
2. *(Assumption of unit measure)* $\Pr[\Omega] = 1$.
3. *(Assumption of σ-additivity)* For any finite or countably infinite sequence of events $A_1, A_2, \dots$ that are mutually exclusive, i.e., events for which $A_nA_m = \varnothing$ when $n \neq m$, then
$$\Pr\left[\bigcup_n A_n\right] = \sum_n \Pr[A_n]$$

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

**Lemma 1.15. (Addition law of probability)**
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



# Random Variables and Probability Distribution

**Definition 2.1. (Random variable)**
A *random variable* $X$ is a real-valued function $X : \mathcal{X} \to A$ ($A \subseteq \mathbb{R}$). A *discrete random variable* is a random variable that takes on a finite or countably infinite number of values.

**Definition 2.2. (Probability mass function)**
Suppose that the random variable $X$ is a function $X : \mathcal{X} \to A$ ($A \subseteq \mathbb{R}$). The *probability mass function* (*pmf*) $f_X : A \to [0,1]$ for $X$ is defined as
$$f_X(x) = \Pr[X=x] = \Pr[\{s \in \mathcal{X} : X(s) = x\}]$$

Intuitively, a probability mass function is a function that gives the probability that a discrete random variable is exactly equal to some value.

**Definition 2.3. (Probability distribution)**
The *probability distribution* of a random variable $X$ is a function $f_X(x)$ that describes the probabilities $\Pr[X=x]$ of all events in the sample space of an experiment. Typically, a probability distribution determines a unique probability function $\Pr$ for a given experiment.
A *discrete probability distribution* is a probability distribution characterized by a probability mass function.

Thus, by the assumption of unit measure, the distribution of a random variable $X$ is discrete, and $X$ is called a discrete random variable, if and only if
$$\sum_{x \in \mathcal{X}} \Pr[X=x]=1$$

In the following text, "random variables" refer to discrete random variables, and "probability distributions" refer to discrete probability distributions, unless otherwise stated.

**Definition 2.4. (Pairwise independence of random variables)**
Random variables $X_1,\dots,X_n$ are said to be *pairwise independent*, if and only if for any pair $i,j$ $(i \neq j)$ and any $x_i,x_j$, $\Pr[(X_i=x_i)\cap(X_j=x_j)] = \Pr[X_i=x_i] \cdot \Pr[X_j=x_j]$.

**Definition 2.5. (Mutual independence of random variables)**
Random variables $X_1,\dots,X_n$ are said to be *mutually independent*, if and only if for any subset of indices $I \subseteq \{1,\dots,n\}$ and any $x_i (i \in I)$,
$$\Pr\left[\bigcap_{i \in I} (X_i=x_i)\right] = \prod_{i \in I} \Pr[X_i=x_i]$$

As mentioned before, mutual independence is a stronger notion of statistical independence, and it implies pairwise independence; by contrast, pairwise independence does not imply mutual independence.

**Definition 2.6. (Expectation)**
Let $X$ be a random variable and let $\mathcal{X}$ be the set of all possible values it can take. The *expectation* (alternatively *expected value*, *mean*, *average* or *first raw moment*) of $X$, denoted by $\operatorname{E}[X]$, is given by
$$\operatorname{E}[X] = \sum_{x \in \mathcal{X}} x\Pr[X=x]$$
The expectation is a finite number if and only if $\sum_{x \in \mathcal{X}} x\Pr[X=x]$ converges.

**Lemma 2.7.** For any constant $c$ and random variable $X$, $\operatorname{E}[cX] = c\operatorname{E}[X]$.

**Proof.**
\begin{align*}
\operatorname{E}[cX] &= \sum_{x \in \mathcal{X}} cx \Pr[cX=cx] \\
&= c \sum_{x \in \mathcal{X}} x \Pr[X=x] \\
&= c \operatorname{E}[X]
\end{align*}
[QED]

**Lemma 2.8. (Linearity of expectation)**
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

**Corollary 2.9.**
For any finite or countably infinite number of random variables $X_1, X_2, \dots$, $\operatorname{E}[\sum_i X_i] = \sum_i \operatorname{E}[X_i]$.

**Definition 2.10. (Conditional expectation)**
$$\operatorname{E}[X|Y=y] = \sum_{x \in \mathcal{X}} x\Pr[X=x|Y=y]$$

$\operatorname{E}[X|Y]$ is a random variable that takes on the value $\operatorname{E}[X|Y=y]$ when $Y=y$.

**Lemma 2.11. (Iterated expectation)**
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

**Lemma 2.12.**
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

**Definition 2.13. (Covariance)**
$\operatorname{Cov}(X,Y) = \operatorname{E}[(X - \operatorname{E}[X])(Y - \operatorname{E}[Y])]$.

**Lemma 2.14.**
$\operatorname{Cov}(X,Y) = \operatorname{E}[XY] - \operatorname{E}[X] \operatorname{E}[Y]$.

Intuitively, covariance is a measure of how much two random variables change together. In [statistics](/math/statistics/), correlation coefficients are often defined in terms of covariance.

When $\operatorname{Cov}(X,Y) = 0$, $X$ and $Y$ are said to be *uncorrelated*. Independent random variables are a notable case of uncorrelated variables (implied by Lemma 2.12). Note that the uncorrelatedness of two variables does not necessarily imply that they are independent.

**Definition 2.15. (Variance)**
$\operatorname{Var}(X) = \sigma^2 = \operatorname{E}[(X-\mu)^2]$, where $\mu = \operatorname{E}[X]$.

$\sigma = \sqrt{\operatorname{Var}(X)}$ is also called the *standard deviation* of $X$.

**Lemma 2.16.**
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

**Jensen's inequality.** If $X$ is a random variable and $\varphi$ is a convex function, then $\varphi(\operatorname{E}[X]) \leq \operatorname{E}[\varphi(X)]$.

By Jensen's inequality, we have that $\operatorname{Var}(X) = \operatorname{E}[X^2] - (\operatorname{E}[X])^2 \geq 0$. Thus, the standard deviation $\sigma = \sqrt{\operatorname{Var}(X)}$ is a unique non-negative real number.

Intuitively, variance is a measure of how far a set of numbers are spread out from their mean. Variance is a special case of the covariance when the two variables are identical, that is, the covariance of the random variable with itself. $\operatorname{Var}(X) = \operatorname{Cov}(X,X)$.

**Lemma 2.17.** $\operatorname{Var}(aX+b) = a^2 \operatorname{Var}(X)$.

**Lemma 2.18.** $\operatorname{Var}(X+Y) = \operatorname{Var}(X) + \operatorname{Var}(Y) + 2 \operatorname{Cov}(X,Y)$.

**Lemma 2.19.** If $X_1,\dots,X_n$ are pairwise independent, then $\operatorname{Var}(\sum_{i=1}^n X_i) = \sum_{i=1}^n \operatorname{Var}(X_i)$.

Compared to Corollary 2.9 (linearity of expectation), the linearity of variance holds if and only if random variables are uncorrelated.

The variance is the second central moment of a random variable.

**Definition 2.20. (Raw moment)** The *(first) raw moment* of a random variable $X$, denoted $\mu$, is defined as
$$\mu = \operatorname{E}[X]$$
That is, the first raw moment of a random variable is its expectation (mean).

**Definition 2.21. (Central moment)** The *$n$th central moment* of a random variable $X$, denoted $\mu_n$, is defined as
$$\mu_n = \operatorname{E}[(X - \mu)^n]$$
where $\mu = \operatorname{E}[X]$ is the expectation (first raw moment) of $X$.

**Definition 2.22. (Standardized moment)** The *$n$th standardized moment* (or *normalized central moment*) of a random variable $X$, denoted $\hat\mu_n$, is defined as
$$\hat\mu_n = \frac{\mu_n}{\sigma^n} = \frac{\operatorname{E}[(X - \mu)^n]}{\sigma^n} = \operatorname{E}\left[\left(\frac{X - \mu}{\sigma}\right)^n\right]$$
where $\mu_n$ is the $n$th central moment of $X$, and $\sigma = \sqrt{\operatorname{Var}(X)} = \sqrt{\mu_2}$ is the standard deviation of $X$.

| $n$th | Central moment                          | Standardized moment       |
| :---: | :-------------------------------------: | :-----------------------: |
| 0 | $\mu_0 = \operatorname{E}[1] = 1$ | $\hat\mu_0 = 1$
| 1 | $\mu_1 = \operatorname{E}[X - \operatorname{E}[X]] = 0$ | $\hat\mu_1 = 0$
| 2 | $\mu_2 = \operatorname{E}[(X - \operatorname{E}[X])^2] = \operatorname{E}[X^2] - (\operatorname{E}[X])^2$ <br> $= \operatorname{Var}(X) = \sigma^2$ (**Variance**) | $\hat\mu_2 = 1$
| 3 | $\mu_3 = \operatorname{E}[(X - \operatorname{E}[X])^3]$ | $\hat\mu_3 = \frac{\operatorname{E}[(X-\mu)^3]}{(\operatorname{E}[(X-\mu)^2])^{3/2}}$ <br> $= \operatorname{Skew}(X)$ (**Skewness**)
| 4 | $\mu_4 = \operatorname{E}[(X - \operatorname{E}[X])^4]$ | $\hat\mu_4 = \frac{\operatorname{E}[(X-\mu)^4]}{(\operatorname{E}[(X-\mu)^2])^2}$ <br> $= \operatorname{Kurt}(X)$ (**Kurtosis**)

**Remark 2.23.** In the case of continuous probability distribution with a probability density function $f$, where the expectation is calculated as $\operatorname{E}[X] = \int_{-\infty}^\infty x f(x) dx$, $\operatorname{E}[X]$ and all other moments can be undefined (Example: Cauchy distribution). For discrete probability distributions, however, all moments are well-defined.

**Remark 2.24.** In [statistics](/math/statistics/), when the exact expectations $\operatorname{E}[X]$ and $\operatorname{E}[Y]$ are unknown, the *sample covariance* (similarly for *sample variance* and *sample standard deviation*) is given by
$$s^2 = \frac{1}{n-1} \sum_{i=1}^n (X_i-\bar{X})(Y_i-\bar{Y})$$
Notice that $\bar{X}$ and $\bar{Y}$ are *empirical means* (i.e., sample means) rather than expectations. The use of $\frac{1}{n-1}$ instead of $\frac{1}{n}$ is called *Bessel's correction*, which gives an unbiased estimator of the population covariance (and variance).



# Concentration Inequalities

Concentration inequalities provide bounds on how a random variable deviates from some value (typically one of its moments, e.g., the expectation).

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

Markov's inequality extends to a strictly increasing and non-negative function $\varphi$:
$$\Pr[X \geq \varepsilon] = \Pr[\varphi(X) \geq \varphi(\varepsilon)] \leq \frac{\operatorname{E}[\varphi(X)]}{\varphi(\varepsilon)}$$

Markov's inequality is the simplest and weakest upper bound based on the expectation of a random variable. Nevertheless, it forms the basis for many other stronger and more powerful bounds.

**Theorem 3.2. (Chebyshev's inequality)**
Let $X$ be a random variable and $\delta > 0$. If $\operatorname{E}[X]$ and $\operatorname{Var}(X)$ are bounded, then
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

Chebyshev's inequality provides an upper bound on the probability that a random variable deviates from its expected value. It may be used to show the law of large numbers (LNN), assumed that the variance $\operatorname{Var}(X)$ is finite.

**Corollary 3.3.**
Let $X_1,\dots,X_n$ be pairwise-independent random variables with the same expectation $\mu$ and variance $\sigma^2$. Then for every $\delta > 0$,
$$\Pr\left[\left|\frac{\sum_{i=1}^n X_i}{n} - \mu\right| \geq \delta\right] \leq \frac{\sigma^2}{\delta^2 n}$$

**Proof.**
By linearity of expectation, we have $\operatorname{E}\left[\frac{\sum_{i=1}^n X_i}{n}\right] = \mu$. Applying Chebyshev's inequality to the random variable $\frac{\sum_{i=1}^n X_i}{n}$, we have
$$\Pr\left[\left|\frac{\sum_{i=1}^n X_i}{n} - \mu\right| \geq \delta\right] \leq \frac{\operatorname{Var}\left(\frac{\sum_{i=1}^n X_i}{n}\right)}{\delta^2}$$

Using pairwise independence (Lemma 2.19), it follows that
$$\operatorname{Var}\left(\frac{\sum_{i=1}^n X_i}{n}\right)
= \frac{1}{n^2} \sum_{i=1}^n \operatorname{Var}(X_i) = \frac{1}{n^2} \sum_{i=1}^n \sigma^2 = \frac{\sigma^2}{n}$$
[QED]

**Theorem 3.4. (Chernoff bound)**
Let $X$ be a non-negative random variable. Then for every $\varepsilon > 0$ and $t > 0$,
$$\Pr[X \geq \varepsilon] \leq \frac{\operatorname{E}[e^{tX}]}{e^{t\varepsilon}}$$
For every $\varepsilon > 0$ and $t < 0$,
$$\Pr[X \leq \varepsilon] \leq \frac{\operatorname{E}[e^{tX}]}{e^{t\varepsilon}}$$

**Lemma 3.5. (Hoeffding's lemma)**
Let $X$ be a random variable, such that $\Pr[a \leq X \leq b] = 1$. Then for any $\lambda \in \mathbb{R}$,
$$\operatorname{E}[e^{\lambda X}] \leq e^{\lambda \operatorname{E}[X] + \frac{\lambda^2 (b-a)^2}{8}}$$

The function $f(\lambda) = \operatorname{E}[e^{\lambda X}]$ is known as the *moment generating function (mgf)* of $X$, since $f^{(k)}(0) = \operatorname{E}[X^k]$ is the $k$th raw moment of $X$.

**Theorem 3.6. (Hoeffding's inequality)**
Let $X_1, \dots, X_n$ be independent real-valued random variables, such that for $i \in \{1,\dots,n\}$ there exist $a_i \leq b_i$ such that $\Pr[a_i \leq X_i \leq b_i] = 1$. Then for every $\varepsilon > 0$,
$$\Pr\left[\sum_{i=1}^n X_i - \operatorname{E}\left[\sum_{i=1}^n X_i\right] \geq \varepsilon \right] \leq e^{-2\varepsilon^2 / \sum_{i=1}^n (b_i-a_i)^2}$$
and
$$\Pr\left[\sum_{i=1}^n X_i - \operatorname{E}\left[\sum_{i=1}^n X_i\right] \leq -\varepsilon \right] \leq e^{-2\varepsilon^2 / \sum_{i=1}^n (b_i-a_i)^2}$$

**Corollary 3.7. (Two-sided Hoeffding's inequality)**
$$\Pr\left[\left|\sum_{i=1}^n X_i - \operatorname{E}\left[\sum_{i=1}^n X_i\right]\right| \geq \varepsilon \right] \leq 2e^{-2\varepsilon^2 / \sum_{i=1}^n (b_i-a_i)^2}$$

Hoeffding's inequality provides an upper bound on the probability that the sum of random variables deviates from its expected value. It is also useful to analyze the number of required samples needed to obtain a confidence interval.

**Corollary 3.8.**
Let $X_1, \dots, X_n$ be independent real-valued random variables, such that for $i \in \{1,\dots,n\}$, $X_i \in [0,1]$ and $\operatorname{E}[X_i] = \mu$. Then for every $\varepsilon > 0$,
$$\Pr\left[ \frac{1}{n} \sum_{i=1}^n X_i - \mu \geq \varepsilon \right] \leq e^{-2n\varepsilon^2}$$
and
$$\Pr\left[ \mu - \frac{1}{n} \sum_{i=1}^n X_i \geq \varepsilon \right] \leq e^{-2n\varepsilon^2}$$



# Discrete Probability Distributions

A discrete probability distribution is characterized by a probability mass function (pmf).

## Bernoulli Distribution

The *Bernoulli distribution* is the discrete probability distribution of a random variable which takes the value $1$ with success probability of $p$ and the value $0$ with failure probability of $q=1-p$.

A discrete random variable $X$ taking values from $\{0,1\}$ is called a *Bernoulli random variable*. The parameter $p = \Pr[X=1]$ is called the *bias* of $X$.

**pmf.**
$$f(k;p) = \begin{cases} p & \text{if }k=1, \\
1-p & \text {if }k=0.\end{cases}$$
Alternatively,
$$f(k;p) = p^k (1-p)^{1-k}\!\quad \text{for }k\in\{0,1\}$$

**Mean.**
$$\operatorname{E}[X] = 0 \cdot (1-p) + 1 \cdot p = p = \Pr[X=1]$$

**Variance.**
$$\operatorname{Var}(X) = p(1-p)$$

Since $p \in [0,1]$, we have $\operatorname{Var}(X) \leq \frac{1}{4}$.

**Entropy. (Binary entropy function)**
$$\operatorname{H}(p) = -p \log p - (1-p) \log (1-p)$$

## Binomial Distribution

The *binomial distribution* is the discrete probability distribution of the number of successes in a sequence of $n$ independent and identically distributed Bernoulli trials.

A discrete random variable $X$ taking value $k \in \{0,1,\dots,n\}$ is called a *binomial random variable* with parameters $n$ and $p$ if it satisfies the following probability distribution:
$$\Pr[X=k] = \binom{n}{k} p^k (1-p)^{n-k}$$

**pmf.**
$$f(k;n,p) = \Pr[X=k] = \binom{n}{k} p^k(1-p)^{n-k}$$
$$X \sim \text{B}(n,p)$$

**Mean.**
$$\operatorname{E}[X] = np$$

**Variance.**
$$\operatorname{Var}(X) = np(1-p)$$

**Entropy.**
$$\operatorname{H}(n,p) = \frac{1}{2} \log (2 \pi e np(1-p)) + \mathcal{O}\left(\frac{1}{n}\right)$$

Note that a binomial random variable can be represented as a sum of independent, identically distributed Bernoulli random variables:
$$X = \sum_{k=1}^n X_k \sim \text{B}(n,p)$$

Thus, the Bernoulli distribution is a special case of binomial distribution $\text{B}(1,p)$.

## Negative Binomial Distribution

The *negative binomial distribution* is the discrete probability distribution of the number of successes in a sequence of independent and identically distributed Bernoulli trials before a specified number of failures (denoted $r$) occurs.

**pmf.**
$$f(k;r,p) = \Pr[X=k] = \binom{k+r-1}{k} (1-p)^r p^k$$
$$X \sim \text{NB}(r,p)$$

**Mean.**
$$\operatorname{E}[X] = \frac{pr}{1-p}$$

**Variance.**
$$\operatorname{Var}(X) = \frac{pr}{(1-p)^2}$$

When $r$ is an integer, the negative binomial distribution is also known as the *Pascal distribution*.

## Geometric Distribution

The *geometric distribution* is the discrete probability distribution of the number of failures in a sequence of independent and identically distributed Bernoulli trials before the first success.

**pmf.**
$$f(k;p) = (1-p)^k p$$
$$X \sim \text{Geom}(p)$$

**Mean.**
$$\operatorname{E}[X] = \frac{1-p}{p}$$

**Variance.**
$$\operatorname{Var}(X) = \frac{1-p}{p^2}$$

**Entropy.**
$$\operatorname{H}(p) = \frac{-p \log p - (1-p) \log (1-p)}{p}$$

The geometric distribution $\text{Geom}(p)$ is a special case of negative binomial distribution $\text{NB}(1,1-p)$.

## Discrete Uniform Distribution

The *discrete uniform distribution* is the probability distribution whereby a finite number of values are equally likely to be observed.

**pmf.**
$$f(a,b) = \frac{1}{b-a+1}$$
$$X \sim \mathcal{U}\{a,b\}$$

**Mean.**
$$\operatorname{E}[X] = \frac{a+b}{2}$$

**Variance.**
$$\operatorname{Var}(X) = \frac{(b-a+1)^2-1}{12}$$

**Entropy.**
$$\operatorname{H}(p) = \log (b-a+1)$$

## Summary

|                          | With replacements | No replacements |
| ------------------------ | :---------------: | :-------------: |
| Given number of draws    | *Binomial distribution* (Special case when $n=1$: *Bernoulli distribution*) | *Hypergeometric distribution* |
| Given number of failures | *Negative binomial distribution* (Special case when $r=1$: *Geometric distribution*) | *Negative hypergeometric distribution* |



# Continuous Probability Distributions

A continuous probability distribution is characterized by a probability density function (pdf).

## [Normal Distribution](distributions/normal/) (Gaussian Distribution)

## [Gamma Distribution](distributions/gamma/)

(Special cases: chi-squared distribution, exponential distribution)



---

Related topics:

* [Statistics](/math/statistics/)
* [Information theory](/info/)

Mathematical theory:

* [Measure theory](/math/analysis/measure/)
* Advanced probability theory

Fields of application:

* Algorithms
* Computational biology and biostatistics
* Cryptography and cryptanalysis
* Game theory and operations research
* Machine learning
* Computer vision and image processing
