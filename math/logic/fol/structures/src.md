% Structures
% Mort Yao
% 2017-09-04

**Structure.** A *structure* (or *interpretation*) $\mathfrak{A}$ for a first-order language $\mathcal{L}$ is a function whose domain is the set of parameters and such that

1. $\mathfrak{A}$ assigns to the quantifier symbol $\forall$ a nonempty set $|\mathfrak{A}|$ called the *universe* (or *domain*) of $\mathfrak{A}$.
2. $\mathfrak{A}$ assigns to each $n$-place predicate symbol $P$ an $n$-ary relation $P^\mathfrak{A} \subseteq |\mathfrak{A}|^n$, i.e., $P^\mathfrak{A}$ is a set of $n$-tuples of members of the universe.
3. $\mathfrak{A}$ assigns to each constant symbol $c$ a member $c^\mathfrak{A}$ of the universe $|\mathfrak{A}|$.
4. $\mathfrak{A}$ assigns to each $n$-place function symbol $f$ an $n$-ary operation $f^\mathfrak{A}$ on $|\mathfrak{A}|$, i.e., $f^\mathfrak{A} : |\mathfrak{A}|^n \to |\mathfrak{A}|$.

Let $\varphi$ be a wff of the language $\mathcal{L}$, $\mathfrak{A}$ be a structure for the language $\mathcal{L}$, $s : V \to |\mathfrak{A}|$ be a function from the set $V$ of all variables into the universe $|\mathfrak{A}|$. We say that $\mathfrak{A}$ *satisfies $\varphi$ with $s$*, if and only if the translation of $\varphi$ determined by $\mathfrak{A}$, where the variable $x$ is translated as $s(x)$ wherever it occurs free, is true, written as
$$\models_\mathfrak{A} \varphi[s]$$
Formally, we define the extension function from the set $T$ of all terms into the universe of $\mathfrak{A}$:
$$\bar{s} : T \to |\mathfrak{A}|$$
such that

1. For each variable $x$, $\bar{s}(x) = s(x)$.
2. For each constant symbol $c$, $\bar{s}(c) = c^\mathfrak{A}$.
3. If $t_1, \dots, t_n$ are terms and $f$ is a $n$-place function symbol, then
$$\bar{s}(f t_1 \cdots t_n) = f^\mathfrak{A}(\bar{s}(t_1), \dots, \bar{s}(t_n))$$

For atomic formulas,

1. $\models_\mathfrak{A} = t_1 t_2 [s]$ iff $\bar{s}(t_1) = \bar{s}(t_2)$.
2. $\models_\mathfrak{A} P t_1 \cdots t_n [s]$ iff $\langle \bar{s}(t_1), \dots, \bar{s}(t_n) \rangle \in P^\mathfrak{A}$.

For other wffs,

1. $\models_\mathfrak{A} (\lnot \varphi) [s]$ iff $\not\models_\mathfrak{A} \varphi[s]$.
2. $\models_\mathfrak{A} (\varphi \to \psi) [s]$ iff either $\not\models_\mathfrak{A} \varphi[s]$ or $\models_\mathfrak{A} \psi[s]$ or both.
3. $\models_\mathfrak{A} \forall x \varphi[s]$ iff for every $d \in |\mathfrak{A}|$, we have $\models_\mathfrak{A} \varphi[s(x|d)]$, where $s(x|d)$ is defined as
$$s(x|d)(y) =
\begin{cases}
s(y) & \text{if } y \neq x \\
d    & \text{if } y = x
\end{cases}$$

***Example 1.*** $\mathfrak{A} = (\mathbb{N}; \leq, S, 0)$ is a structure for a first-order language:

* $|\mathfrak{A}| = \mathbb{N}$, the set of all natural numbers,
* $P^\mathfrak{A} =$ the set of pairs $\langle m, n \rangle$ such that $m \leq n$,
* $f^\mathfrak{A} =$ the successor function $S$: $f^\mathfrak{A}(n) = n + 1$,
* $c^\mathfrak{A} = 0$.

**Theorem 2.** Assume that $s_1$ and $s_2$ are functions from $V$ into $|\mathfrak{A}|$ which agree at all variables that occur free in the wff $\varphi$. Then
$$\models_\mathfrak{A} \varphi[s_1] \iff \models_\mathfrak{A} \varphi[s_2]$$

*Proof.* (By induction on $\varphi$.)

**Theorem 3.** If two structures $\mathfrak{A}$ and $\mathfrak{B}$ agree at all parameters that occur in $\varphi$, then
$$\models_\mathfrak{A} \varphi[s] \iff \models_\mathfrak{B} \varphi[s]$$

**Corollary 4.** For a sentence $\sigma$, either

(1) $\mathfrak{A}$ satisfies $\sigma$ with every function $s : V \to |\mathfrak{A}|$, or
(2) $\mathfrak{A}$ does not satisfy $\sigma$ with any such function.

**Model and truth.** If a structure $\mathfrak{A}$ satisfies the sentence $\sigma$ with every function $s : V \to |\mathfrak{A}|$, we say that $\sigma$ is *true* in $\mathfrak{A}$ or that $\mathfrak{A}$ is a *model* of $\sigma$, written as $\models_\mathfrak{A} \sigma$. Otherwise $\sigma$ is *false* in $\mathfrak{A}$.
For a set $\Sigma$ of sentences, $\mathfrak{A}$ is a model of $\Sigma$ iff it is a model of every $\sigma \in \Sigma$.

**Logical implication and validity.** Let $\Gamma$ be a set of wffs, $\varphi$ be a wff. $\Gamma$ *logically implies* $\varphi$, written as $\Gamma \models \varphi$, iff for every structure $\mathfrak{A}$ for the language and every function $s : V \to |\mathfrak{A}|$ such that $\mathfrak{A}$ satisfies every member of $\Gamma$ with $s$, $\mathfrak{A}$ also satisfies $\varphi$ with $s$.

We say that $\varphi$ and $\psi$ are *logically equivalent*  iff $\varphi \models \psi$ and $\psi \models \varphi$.

A wff $\varphi$ is *valid* iff $\emptyset \models \varphi$, written simply as $\models \varphi$. That is, $\varphi$ is valid iff for every $\mathfrak{A}$ and every $s : V \to |\mathfrak{A}|$, $\mathfrak{A}$ satisfies $\varphi$ with $s$.

The concept of validity is the first-order analogue of the concept of tautology in sentential logic.

**Corollary 5.** For a set $\Sigma; \tau$ of sentences, $\Sigma \models \tau$ iff every model of $\Sigma$ is also a model of $\tau$. A sentence $\tau$ is valid iff it is true in every structure.
