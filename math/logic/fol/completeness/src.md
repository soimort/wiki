% Completeness
% Mort Yao
% 2017-09-04

**Theorem 1. (Completeness Theorem, 1st form)**
Let $\Gamma$ be a set of formulas, $\varphi$ be a formula. Then
$$\Gamma \models \varphi \implies \Gamma \vdash \varphi$$

**Consistency.** A set $\Gamma$ of $\mathcal{L}$-formulas is said to be *consistent* iff for no formula $\phi$ it is the case that $\Gamma \vdash \phi$ and $\Gamma \vdash \lnot \phi$.

**Satisfiability.** A set $\Gamma$ of $\mathcal{L}$-formulas is said to be *satisfiable* iff there is $\mathcal{L}$-structure $\mathfrak{A}$ and an assignment of variables $s : V \to |\mathfrak{A}|$ such that
$$\models_\mathfrak{A} \Gamma[s]$$

**Theorem 2. (Completeness Theorem, 2nd form)**
Any consistent set of formulas is satisfiable.

**Proposition 3.** Theorem 2 holds iff Theorem 1 holds.

*Proof.* $(\Rightarrow)$ Assume that Theorem 2 holds and $\Gamma \models \varphi$.
By definition we have that $\Gamma; \lnot \varphi$ is not satisfiable. By Theorem 2, $\Gamma; \lnot \varphi$ must be inconsistent. By Reductio ad Absurdum, $\Gamma \vdash \varphi$.

$(\Leftarrow)$ Assume that Theorem 1 holds and $\Gamma$ is not satisfiable.
By definition we have that $\Gamma \models \varphi$ for all $\varphi$ of $\mathcal{L}$ vacuously. By Theorem 1, $\Gamma \vdash \varphi$ for all $\varphi$ of $\mathcal{L}$, thus $\Gamma$ must be inconsistent.

\Qed

**Countability.** A set $S$ is said to be *countable* iff there is a bijective map $f : \mathbb{N} \to S$.

We now prove a weaker form of Theorem 2, i.e., the Completeness Theorem for countable languages. Later we will see that it generalizes to uncountable languages easily.

**Theorem 4. (Completeness Theorem for countable languages)** Any consistent set of formulas in a countable language is satisfiable.

*Proof sketch. (Henkin construction)*
Let $\mathcal{L}$ be a countable language and $\Gamma$ be a consistent set of formulas.

I) *(Language extension)* Let $\mathcal{L}_{\bar C}$ be the language $\mathcal{L}$ extended with countably many new constant symbols $\bar C = \{ \bar c_i : i \in \mathbb{N} \}$.
II) *(Maximal consistent, Henkinized theory)* Given the set $\Gamma$ of $\mathcal{L}$-formulas, we show that there is a set $\bar\Gamma$ of $\mathcal{L}_{\bar C}$-formulas such that
    (1) $\bar\Gamma$ is consistent, i.e., for no $\theta$ of $\mathcal{L}_{\bar C}$, both $\bar\Gamma \vdash \theta$ and $\bar\Gamma \vdash \lnot\theta$.
    (2) $\bar\Gamma$ is complete, i.e., for every $\theta$ of $\mathcal{L}_{\bar C}$, either $\theta \in \bar\Gamma$ or $\lnot\theta \in \bar\Gamma$.
    (3) $\bar\Gamma$ is deductively closed, i.e., if $\bar\Gamma \vdash \theta$ then $\theta \in \bar\Gamma$.
    (4) $\bar\Gamma$ has the Henkin property, i.e., if $\exists x \varphi \in \Gamma$, then there is a constant $\bar c \in \bar C$ such that
    $$\varphi^x_{\bar c} \in \bar\Gamma$$
III) *(First structure)* Build an intermediate structure $\mathfrak{A}_0$ from $\bar\Gamma$, where $|\mathfrak{A}_0|$ is the set of terms of $\mathcal{L}_{\bar C}$. The assignment $s$ maps every variable to itself. Note that $\mathfrak{A}_0$ is not yet a model of $\bar\Gamma$, since for distinct terms $t$ and $t'$ we have $\models_{\mathfrak{A}_0} t \neq t'$ but it may be the case that $t = t' \in \bar\Gamma$.
IV) *(Satisfiability)* Define an equivalence relation $E$ on $|\mathfrak{A}_0|$
$$t E t' \iff t = t' \in \bar\Gamma$$
We show by induction, that for any $\mathcal{L}_{\bar C}$-formula $\varphi$,
$$\models_{\mathfrak{A}_0} \varphi^* [s] \iff \varphi \in \bar\Gamma$$
where $\varphi^*$ is $\varphi$ with $=$ replaced by $E$ everywhere.
V) *(Final structure)* We take the quotient $\mathfrak{A} = \mathfrak{A}_0 / E$, and show by the Homomorphism Theorem, that for any $\mathcal{L}_{\bar C}$-formula $\varphi$,
$$\models_\mathfrak{A} \varphi[s] \iff \varphi \in \bar\Gamma$$
VI) *(Model restriction)* Restrict the model $\mathfrak{A}$ of language $\mathcal{L}_{\bar C}$ to the original language $\mathcal{L}$, i.e., ignore the interpretation of new constants $\bar C$. As $\Gamma \subseteq \bar\Gamma$, we know that $\Gamma$ is satisfiable with the $\mathcal{L}_{\bar C}$-structure $\mathfrak{A}$ and the assignment $s$, thus also satisfiable with the structure $\mathfrak{A}$ and the assignment $s$ restricted to the language $\mathcal{L}$.

**Lemma 5.** Given that the set $\Gamma$ formulas is consistent in the original language $\mathcal{L}$, it is also consistent as a set of formulas in the new language $\mathcal{L}_{\bar C}$.

*Proof.* (Use Generalization on Constants.)

As $\mathcal{L}_{\bar C}$ is countable, we enumerate all $\mathcal{L}_{\bar C}$ formulas as $\{ \theta_i : i \in \mathbb{N} \}$. Let $T$ be the set of finite sequences $s$ of pairs of $\mathcal{L}_{\bar C}$-formulas
$$s = \langle (\alpha_0, \beta_0), (\alpha_1, \beta_1), \dots, (\alpha_n, \beta_n) \rangle$$
such that

(1) $\{ \alpha_i : 0 \leq i \leq n\} \cup \{ \beta_i : 0 \leq i \leq n\} \cup \Gamma$ is consistent.
(2) For each $0 \leq i \leq n$, $\alpha_i$ is either $\theta_i$ or $\lnot\theta_i$.
(3) If $\alpha_i$ is $\exists x \varphi$, then $\beta_i$ is the formula
$$\varphi^x_{\bar c_k}$$
where $k$ is minimal such that $\bar c_k$ does not appear in $\varphi$ or any of $\alpha_j, \beta_j$ for $0 \leq j < i$. \
Otherwise, $\beta_i$ is $v_0 = v_0$.

Given two sequences $t = \langle (\alpha_i, \beta_i) : i < n \rangle$ and $t' = \langle (\alpha_i, \beta_i) : i < m \rangle$, we say that $t'$ *extends* $t$ iff $n \leq m$ and for each $i < n$, $\alpha_i = \alpha_i'$. Moreover, if $t' \neq t$, we say that $t'$ *properly extends* $t$.

**Claim 6.** For every sequence $t \in T$, there is a $t' \in T$ such that $t'$ properly extends $t$.

**Claim 7.** There is an infinite sequence $\langle (\alpha_i, \beta_i) : i \in \mathbb{N} \rangle$ such that for every $n \in \mathbb{N}$ we have $\langle (\alpha_i, \beta_i) : i \leq n \rangle \in T$.

Let $\bar\Gamma = \{ \alpha_i : i \in \mathbb{N} \} \cup \{ \beta_i : i \in \mathbb{N} \}$.

**Claim 8.** All the properties in II) hold for $\bar\Gamma$.

We define the first structure $\mathfrak{A}_0$:

(1) Let its domain $|\mathfrak{A}_0|$ be the set of all terms of $\mathcal{L}_{\bar C}$.
(2) For any constant $c$ in $\mathcal{L}_{\bar C}$,
$$c^{\mathfrak{A}_0} = c$$
(3) For each $n$-ary relation symbol $R$, define $R^{\mathfrak{A}_0} \subseteq |\mathfrak{A}_0|^n$ as
$$(t_1, \dots, t_n) \in R^{\mathfrak{A}_0} \iff R t_1 \cdots t_n \in \bar\Gamma$$
(4) For each $n$-ary function symbol $f$, define $f^{\mathfrak{A}_0} : |\mathfrak{A}_0|^n \to |\mathfrak{A}_0|$ as
$$f^{\mathfrak{A}_0}(t_1, \dots, t_n) = f t_1 \cdots t_n$$

And we define the assignment of variables $s : V \to |\mathfrak{A}_0|$ as
$$s(x) = x$$
for any variable $x$, that is, a term of $\mathcal{L}_{\bar C}$.

Furthermore, we define a binary relation $E$ on $|\mathfrak{A}_0|$ by
$$t E t' \iff t = t' \in \bar\Gamma$$

For any formula $\varphi$ of $\mathcal{L}_{\bar C}$, let $\varphi^*$ denote the result of replacing every occurrence of $=$ by $E$.

**Claim 9.** For any formula $\varphi$ of $\mathcal{L}_{\bar C}$,
$$\models_{\mathfrak{A}_0} \varphi^*[s] \iff \varphi \in \bar\Gamma$$

**Claim 10.** The relation $E$ is an equivalence relation (i.e., $E$ is reflexive, symmetric and transitive).

Since $E$ is an equivalence relation, we can denote the equivalence class of any term $t$ by $[t]_E$:
$$[t]_E = \{ t' : t' \in \text{Term}_{\mathcal{L}_{\bar C}} \land t E t'\}$$

We define the quotient structure $\mathfrak{A} = \mathfrak{A}_0 / E$ as follows:

(1) Let its domain $|\mathfrak{A}|$ be $\{ [t]_E : t \in \text{Term}_{\bar C} \}$.
(2) For any constant $c$ in $\mathcal{L}_{\bar C}$,
$$c^\mathfrak{A} = [c]_E$$
(3) For each $n$-ary relation symbol $R$, define $R^{\mathfrak{A}_0} \subseteq |\mathfrak{A}_0|^n$ as
$$([t_1]_E, \dots, [t_n]_E) \in R^\mathfrak{A}
\iff (t_1, \dots, t_n) \in R^{\mathfrak{A}_0}$$
(4) For each $n$-ary function symbol $f$, define $f^{\mathfrak{A}_0} : |\mathfrak{A}_0|^n \to |\mathfrak{A}_0|$ as
$$f^\mathfrak{A}([t_1]_E, \dots, [t_n]_E) = [f^{\mathfrak{A}_0}(t_1, \dots\, t_n)]_E$$

And we define the assignment of variables $s : V \to |\mathfrak{A}|$ as
$$s(x) = [x]_E$$

**Claim 11.** The above relations $R^{\mathfrak{A}_0}$ and functions $f^{\mathfrak{A}_0}$ are well-defined.

Define the homomorphism $h$ of $\mathfrak{A}_0$ onto $\mathfrak{A}=\mathfrak{A}_0/E$:
$$h(t) = [t]_E$$

**Claim 12.** The $\mathcal{L}_{\bar C}$-structure $\mathfrak{A}$ satisfies every member of $\bar\Gamma$ with $h \circ s$.

*Proof.* (Use the Homomorphism Theorem.)

Finally, we restrict the structure $\mathfrak{A}$ to the original language $\mathcal{L}$.

**Claim 13.** The $\mathcal{L}$-structure $\mathfrak{A}$ satisfies every member of $\Gamma$ with $h \circ s$.
