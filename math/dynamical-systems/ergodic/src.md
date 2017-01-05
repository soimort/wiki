% Basic Ergodic Theory
% Mort Yao
% 2017-01-05

**Definition 1. (Measure-preserving dynamical system)** A *measure-preserving dynamical system* $(X, \mathcal{X}, \mu, T)$ is defined by specifying a [probability](/math/probability/) space $(X, \mathcal{X}, \mu)$ and a [measure](/math/analysis/measure/)-preserving transformation (isomorphism) $T$ on it:

* $X$ is a set.
* $\mathcal{X}$ is a σ-algebra over $X$.
* $\mu : \mathcal{X} \to [0,1]$ is a probability measure.
* $T : X \to X$ is a measurable transformation which preserves the measure $\mu$, i.e., $\forall E \in \mathcal{X}, \mu(T(E)) = \mu(E)$.

**Definition 2. (Measure-theoretic entropy; Kolmogorov-Sinai entropy)** The *entropy of a partition* $Q=\{Q_1,\dots,Q_k\}$ is defined as
$$\operatorname{H}(Q) = -\sum_{m=1}^k \mu(Q_m) \log \mu(Q_m)$$
The *measure-theoretic entropy of a dynamical system $(X,\mathcal{X},T,\mu)$ with respect to a partition* $Q=\{Q_1,\dots,Q_k\}$ is defined as
$$h_\mu(T,Q) = \lim_{N \to \infty} \frac{1}{N} \operatorname{H}\left(\bigvee_{n=0}^N T^{-n}Q\right)$$
The *measure-theoretic entropy of a dynamical system* $(X,\mathcal{X},T,\mu)$ is defined as
$$h_\mu(T) = \sup_Q h_\mu(T,Q)$$
where the supremum is taken over all finite measurable partitions $Q$.
