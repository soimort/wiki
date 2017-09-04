% Definability and Homomorphisms
% Mort Yao
% 2017-09-04

**Definability in a structure.**
Consider a structure $\mathfrak{A}$ and a formula $\varphi$ whose free variables are among $v_1, \dots, v_k$. Then we can construct the $k$-ary relation on $|\mathfrak{A}|$
$$\{ \langle a_1, \dots, a_k \rangle | \models \varphi[\![ a_1, \dots, a_k]\!] \}$$
The $k$-ary relation $\varphi$ on $|\mathfrak{A}|$ is said to be *definable* in $\mathfrak{A}$ iff there is a formula (whose free variables are $v_1, \dots, v_k$) that defines it.

***Example 1.*** Consider the real field as a structure
$$\mathfrak{R} = (\mathbb{R}; 0, 1, +, \cdot)$$

(1) Since
$$\models_\mathfrak{R} \exists v_2 v_1 = v_2 \cdot v_2 \,[\![ a ]\!] \iff
a \geq 0$$
we say that the formula $\exists v_2 x = v_2 \cdot v_2$ defines the relation $x \geq 0$.
(2) The ordering relation $\{ \langle a, b \rangle \in \mathbb{R} \times \mathbb{R} \,|\, a \leq b \}$ is defined in the structure $\mathfrak{R}$ by the formula expressing $v_1 \leq v_2$:
$$\exists v_3 v_2 = v_1 + v_3 \cdot v_3$$

***Example 2.*** Consider the intended structure for the language of number theory:
$$\mathfrak{N} = (\mathbb{N}; 0, S, +, \cdot)$$

(1) The ordering relation $\{ \langle m, n \rangle \,|\, m < n \}$ is defined in $\mathfrak{N}$ by
$$\exists v_3 v_1 + \mathbf{S} v_3 = v_2$$
(2) For any natural number $n$, $\{ n \}$ is definable by
$$v_1 = \mathbf{S} \cdots \mathbf{S} \mathbf{0}$$
(3) The set of primes is definable in $\mathfrak{N}$ via
$$\mathbf{1} < v_1 \land \forall v_2 \forall v_3 (v_1 = v_2 \cdot v_3 \to v_2 = \mathbf{1} \lor v_3 = \mathbf{1})$$
(4) Exponentiation $\{ \langle m,n,p \rangle \,|\, p = m^n \}$ is definable in $\mathfrak{N}$.

**Definability of a class of structures.** For a set $\Sigma$ of sentences, let $\operatorname{Mod} \Sigma$ be the class of all models of $\Sigma$, i.e., the class of all structures for the language in which every member of $\Sigma$ is true. For a single sentence $\tau$, we write simply $\operatorname{Mod} \tau$ instead of $\operatorname{Mod} \{\tau\}$.

A class $\mathcal{K}$ of structures for our first-order language is an *elementary class* ($\text{EC}$) iff $\mathcal{K} = \operatorname{Mod} \tau$ for some sentence $\tau$.
$\mathcal{K}$ is an *elementary class in the wider sense* ($\text{EC}_\Delta$) iff $\mathcal{K} = \operatorname{Mod} \Sigma$ for some set $\Sigma$ of sentences.

***Example 3.*** The class of nonempty ordered set is an $\text{EC}$ defined by $\operatorname{Mod} \tau$, where $\tau$ is the conjunction of the three sentences
$$\forall x \forall y \forall z (x P y \to y P z \to x P z)$$
$$\forall x \forall y (x P y \lor x = y \lor y P x)$$
$$\forall x \forall y (x P y \to \lnot y P x)$$

**Homomorphism.** Let $\mathfrak{A}$, $\mathfrak{B}$ be structures for the language $\mathcal{L}$. A *homomorphism* $h$ of $\mathfrak{A}$ into $\mathfrak{B}$ is a function $h : |\mathfrak{A}| \to |\mathfrak{B}|$ with the properties:

(a) For each $n$-place predicate parameter $P$ and each $n$-tuple $\langle a_1, \dots, a_n \rangle$ of elements of $|\mathfrak{A}|$,
$$\langle a_1, \dots, a_n \rangle \in P^\mathfrak{A} \iff
\langle h(a_1), \dotsm h(a_n) \rangle \in P^\mathfrak{B}$$
(b) For each $n$-place function symbol $f$ and each such $n$-tuple,
$$h(f^\mathfrak{A}(a_1, \dots, a_n)) = f^\mathfrak{B}(h(a_1), \dots, h(a_n))$$
In the case of a constant symbol $c$,
$$h(c^\mathfrak{A}) = c^\mathfrak{B}$$

that is, the homomorphism $h$ preserves the relations and functions.

If $h$ is one-to-one, it is called an *isomorphism* (or an *isomorphic embedding*) of $\mathfrak{A}$ into $\mathfrak{B}$. If $\operatorname{ran} h = |\mathfrak{B}|$, $\mathfrak{A}$ and $\mathfrak{B}$ are said to be *isomorphic*, written as $\mathfrak{A} \cong \mathfrak{B}$.

***Example 4.*** Let $\mathbb{P}$ be the set of positive integers, let $<_P$ be the usual ordering relation on $\mathbb{P}$, and let $<_N$ be the usual ordering relation on $\mathbb{N}$. Then $h(n) = n - 1$ is an isomorphism from the structure $(\mathbb{P}; <_P)$ onto $(\mathbb{N}; <_N)$.

**Substructure.**
Consider two structures $\mathfrak{A}$ and $\mathfrak{B}$ for the language such that $|\mathfrak{A}| \subseteq |\mathfrak{B}|$. The identity map from $|\mathfrak{A}|$ into $|\mathfrak{B}|$ is an isomorphism of $\mathfrak{A}$ into $\mathfrak{B}$ iff

(a) $P^\mathfrak{A}$ is the restriction of $P^\mathfrak{B}$ to $|\mathfrak{A}|$, for each predicate parameter $P$.
(b) $f^\mathfrak{A}$ is the restriction of $f^\mathfrak{B}$ to $|\mathfrak{A}|$, for each function symbol $f$, and $c^\mathfrak{A} = c^\mathfrak{B}$ for each constant symbol $c$.

$\mathfrak{A}$ is said to be a *substructure* of $\mathfrak{B}$, and $\mathfrak{B}$ is said to be an *extension* of $\mathfrak{A}$.

In the above Example 4, the identity map $Id : \mathbb{P} \to \mathbb{N}$ is an isomorphism of $(\mathbb{P}; <_P)$ into $(\mathbb{N}; <_N)$; thus $(\mathbb{P}; <_P)$ is a substructure of $(\mathbb{N}; <_N)$.

**Homomorphism Theorem.** Let $h$ be a homomorphism of $\mathfrak{A}$ into $\mathfrak{B}$, and let $s : V \to |\mathfrak{A}|$.

(a) For any term $t$, we have $h(\bar s(t)) = \overline{h \circ s}(t)$, where $\bar s(t)$ is computed in $\mathfrak{A}$ and $\overline{h \circ s}(t)$ is computed in $\mathfrak{B}$.
(b) For any quantifier-free formula $\alpha$ not containing the equality symbol,
$$\models_\mathfrak{A} \alpha[s] \iff
\models_\mathfrak{B} \alpha[h \circ s]$$
(c) If $h$ is injective, then for any quantifier-free formula $\alpha$,
$$\models_\mathfrak{A} \alpha[s] \iff
\models_\mathfrak{B} \alpha[h \circ s]$$
(d) If $h$ is homomorphism of $\mathfrak{A}$ onto $\mathfrak{B}$, then for any formula $\alpha$,
$$\models_\mathfrak{A} \alpha[s] \iff
\models_\mathfrak{B} \alpha[h \circ s]$$

**Elementary equivalence.**
Two structures $\mathfrak{A}$ and $\mathfrak{B}$ are said to be *elementarily equivalent*, written as $\mathfrak{A} \equiv \mathfrak{B}$, iff for any sentence $\sigma$,
$$\models_\mathfrak{A} \sigma \iff \models_\mathfrak{B} \sigma$$

**Corollary 5.** Isomorphic structures are elementarily equivalent:
$$\mathfrak{A} \cong \mathfrak{B} \iff
\mathfrak{A} \equiv \mathfrak{B}$$

There are, however, elementarily equivalent structures that are not isomorphic. For example, the structure $(\mathbb{R}; <_R)$ is elementarily equivalent to the structure $(\mathbb{Q}; <_Q)$; but $\mathbb{Q}$ is a countable set whereas $\mathbb{R}$ is not, so they cannot be isomorphic. (Isomorphism is a bijective homomorphism therefore two isomorphic structures must have the same cardinality.)

**Automorphism.** An *automorphism* of the structure $\mathfrak{A}$ is an isomorphism of $\mathfrak{A}$ onto itself. The identity function $Id$ on $|\mathfrak{A}|$ is a trivial automorphism of $\mathfrak{A}$. $\mathfrak{A}$ is said to be *rigid* if $Id$ is its only automorphism.

**Corollary 6.** Let $h$ be an automorphism of the structure $\mathfrak{A}$, and let $R$ be an $n$-ary relation on $|\mathfrak{A}|$ definable in $\mathfrak{A}$. Then for any $a_1, \dots, a_n$ in $|\mathfrak{A}|$,
$$\langle a_1, \dots, a_n \rangle \in R \iff
\langle h(a_1), \dots, h(a_n) \rangle \in R$$
that is, an automorphism preserves the definable relations.

*Proof.* Let $\varphi$ be a formula that defines $R$ in $\mathfrak{A}$. Then it follows from the homomorphism theorem that
$$\models_\mathfrak{A} \varphi [\![ a_1, \dots, a_n ]\!] \iff
\models_\mathfrak{A} \varphi [\![ h(a_1, \dots, a_n ]\!]$$
\Qed

***Example 7.*** The set $\mathbb{N}$ is not definable in the structure $(\mathbb{R}; <)$.
