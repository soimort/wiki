% Basic Information Theory
% Mort Yao
% 2017-01-07

Basic information theory:

* Thomas M. Cover and Joy A. Thomas. ***Elements of Information Theory, 2nd edition***.

---

**Definition 1. (Information entropy; Shannon entropy)** Let $p(x)$ be the probability distribution of a discrete random variable $X$ taking values from $\mathcal{X}$. The *entropy* of random variable $X$ is defined as
$$\operatorname{H}(X) = -\sum_{x \in \mathcal{X}} p(x) \log p(x)$$
where $0 \log 0$ is taken to be $0$.

When the logarithms in the formula are taken to the base 2, the unit of information is called the *shannon* (or more commonly *bit*, symbolically $\mathrm{Sh}$). If a message is made of a sequence of bits, with all possible bit strings equally likely, the message's information content expressed in shannons is equal to the length of the bit string.

When base-10 logarithms are used, the unit of information is called the *hartley* (or *ban*).  When natural logarithms are used, the unit of information is called the *nat*.

$$1\,\mathrm{Sh} \approx 0.693\,\mathrm{nat} \approx 0.301\,\mathrm{Hart}$$

**Definition 2. (Binary entropy function)** Let $p$ be the bias of a Bernoulli random variable $X$. The entropy of the distribution of $X$ is given by
$$\operatorname{H}_b(p) = -p \log p - (1-p) \log (1-p)$$
where $0 \log 0$ is taken to be $0$.

Notice that the binary entropy function $\operatorname{H}_b(p)$ takes a real number $p \in [0,1]$ instead of a random variable $X$ or probability distribution $p(x)$ as the parameter.

**Lemma 3.**
$$\frac{1}{n+1} e^{n \operatorname{H}(\frac{k}{n})} \leq \binom{n}{k} \leq e^{n \operatorname{H}(\frac{k}{n})}$$

**Definition 4. (Joint entropy)** Let $p(x,y)$ be the joint probability of $X=x$ and $Y=y$ occurring together. The *joint entropy* of random variables $X$ and $Y$ is defined as
$$\operatorname{H}(X,Y) = -\sum_{x \in \mathcal{X}}\sum_{y \in \mathcal{Y}} p(x,y) \log p(x,y)$$
where $0 \log 0$ is taken to be $0$.

**Lemma 5.**
$$\max[\operatorname{H}(X), \operatorname{H}(Y)] \leq \operatorname{H}(X,Y) \leq \operatorname{H}(X) + \operatorname{H}(Y)$$

If $X$ and $Y$ are independent, we have $\operatorname{H}(X,Y) = \operatorname{H}(X) + \operatorname{H}(Y)$, since $p(x,y) = p(x)p(y)$.

**Definition 6. (Conditional entropy)** Let $p(x,y)$ be the joint probability of $X=x$ and $Y=y$ occurring together. The *conditional entropy* of random variable $X$ conditioned on $Y$ is defined as
$$\operatorname{H}(X|Y) = \sum_{x \in \mathcal{X}}\sum_{y \in \mathcal{Y}} p(x,y) \log \frac{p(y)}{p(x,y)}$$
where $0 \log \frac{0}{0} = 0$ and $0 \log \frac{q}{0} = 0$.

**Lemma 7. (Chain rule for conditional entropy)**
$$\operatorname{H}(X|Y) = \operatorname{H}(X,Y) - \operatorname{H}(Y)$$

**Theorem 8. (Bayes' rule for conditional entropy)**
$$\operatorname{H}(X|Y) + \operatorname{H}(Y) = \operatorname{H}(Y|X) + \operatorname{H}(X)$$

**Definition 9. (Mutual information)** Let $p(x,y)$ be the joint probability of $X=x$ and $Y=y$ occurring together.  The *mutual information* of random variables $X$ and $Y$ is defined as
$$\operatorname{I}(X;Y) = \sum_{x \in \mathcal{X}}\sum_{y \in \mathcal{Y}} p(x,y) \log \frac{p(x,y)}{p(x)p(y)}$$

Mutual information is a measure of the inherent dependence expressed in the joint distribution of $X$ and $Y$ relative to the joint distribution of $X$ and $Y$ under the assumption of independence. Therefore, $\operatorname{I}(X;Y) = 0$ if and only if $X$ and $Y$ are independent.

**Lemma 10.**
\begin{align*}
\operatorname{I}(X;Y)
&= \operatorname{H}(X) + \operatorname{H}(Y) - \operatorname{H}(X,Y) \\
&= \operatorname{H}(X) - \operatorname{H}(X|Y) = \operatorname{H}(Y) - \operatorname{H}(Y|X) \\
&= \operatorname{H}(X,Y) - \operatorname{H}(X|Y) - \operatorname{H}(Y|X)
\end{align*}

**Definition 11. (Relative entropy; discrimination information; information gain; Kullback-Leibler divergence)** Let $p(x)$ and $q(x)$ be two probability distributions of a random variable $X$, the *Kullback-Leibler divergence* (or *relative entropy*) of $p$ with respect to $q$ is defined as
$$\operatorname{D}_\mathrm{KL}(p\|q)
= \operatorname{E}_p\left[ \log\frac{p(X)}{q(X)} \right]
= \sum_{x \in \mathcal{X}} p(x) \log \frac{p(x)}{q(x)}
$$
where $0 \log \frac{0}{0} = 0$, $0 \log \frac{0}{q} = 0$ and $p \log \frac{p}{0} = \infty$.

In words, the Kullback-Leibler divergence is the expectation of the logarithmic difference between the probabilities $p(x)$ and $q(x)$, where the expectation is taken using the probabilities $p(x)$. Although it does not satisfy the triangle inequality, it is the way of measuring distances between two probability distributions.

Mutual information can also be expressed as a Kullback–Leibler divergence:
$$\operatorname{I}(X;Y) = \operatorname{D}_\mathrm{KL}(p(x,y)\|p(x)p(y))$$

**Definition 12. (Binary kl-divergence)** Let $p$ and $q$ be biases of two Bernoulli random variables. The binary kl-divergence is given by
$$\operatorname{D}_\mathrm{kl}(p\|q) = \operatorname{D}_\mathrm{KL}([1-p,p]\|[1-q,q])
= p \log \frac{p}{q} + (1-p) \log \frac{1-p}{1-q}$$

**Definition 13. (Cross entropy)** Let $p(x)$ and $q(x)$ be two probability distributions of a random variable $X$, the *cross entropy* of $p$ and $q$ is defined as
$$\operatorname{H}(p,q) = \operatorname{E}_p[-\log q] = \operatorname{H}(p) + \operatorname{D}_\mathrm{KL}(p\|q)$$
For discrete $p$ and $q$,
$$\operatorname{H}(p,q) = -\sum_{x \in \mathcal{X}} p(x) \log q(x)$$
