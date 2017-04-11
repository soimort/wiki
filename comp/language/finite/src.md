% Finite Languages
% Mort Yao
% 2017-04-11

**Finite language.** A language $L$ is called a *finite language* if there exists a number $k \in \mathbb{N}$, such that for every string $w \in L$, $|w| \leq k$.

For any given $k$, we have that every $L \in \mathcal{P}(\Sigma^k)$ is a finite language.

**Theorem 1. (Closure properties)** The class of finite languages is closed under (finite) union, intersection and concatenation.

Obviously, the complement and the Kleene star of any finite language contain an infinite number of strings, thus the class of finite languages is not closed under such operations.
