% Soundness
% Mort Yao
% 2017-09-04

**Theorem 1. (Soundness Theorem)** Let $\Gamma$ be a set of formulas, $\varphi$ be a formula. Then
$$\Gamma \vdash \varphi \implies
\Gamma \models \varphi$$
(Alternative form: If $\Gamma$ is satisfiable, then $\Gamma$ is consistent.)

*Proof.* We show by induction that any formula $\varphi$ deducible from $\Gamma$ is logically implied by $\Gamma$.

(1) $\varphi \in \Lambda$. By the Main Lemma, $\models \varphi$, so $\Gamma \models \varphi$.
(2) $\varphi \in \Gamma$. Then trivially $\Gamma \models \varphi$.
(3) $\varphi$ is obtained by modus ponens from $\psi$ and $\psi \to \varphi$. By IH, $\Gamma \models \psi$, and $\Gamma \models (\psi \to \varphi)$. Thus, $\Gamma \models \varphi$.

\Qed

**Lemma 2.** Any generalization of a valid formula is valid: $\models \theta \iff \models \forall x \theta$.

**Lemma 3.** $\Gamma; \alpha \models \beta \iff \Gamma \models \alpha \to \beta$.

**Lemma 4. (Main Lemma)** Every logical axiom is valid. (Logical axioms are implied by anything.)

*Proof.* By Lemma 2 and Lemma 3, we only need to prove the following cases:

(#3) $\{\forall x (\alpha \to \beta), \forall x \alpha\} \models \forall x \beta$.

(#4) $\alpha \models \forall x \alpha$, if $x$ does not occur free in $\alpha$.

(#5) $\mathfrak{A}$ satisfies $x=x$ with $s$ iff $s(x) = s(x)$.
(Trivial.)

(#1) Any tautology is valid.
(If $\emptyset \models_t \alpha$, then $\emptyset \models \alpha$.)

(#6) $\{x = y, \alpha\} \models \alpha'$, where $\alpha$ is atomic and $\alpha'$ is obtained from $\alpha$ by replacing $x$ in zero or more (but not necessarily all) places by $y$.

(#2) $\forall x \varphi \to \varphi^x_t$ is valid, where $t$ is substitutable for $x$ in $\varphi$.

Assume that $t$ is substitutable for $x$ in $\varphi$. Assume that $\models_\mathfrak{A} \forall x \varphi[s]$. For any $d$ in $|\mathfrak{A}|$,
$$\models_\mathfrak{A} \varphi[s(x|d)]$$
Let $d = \bar{s}(t)$,
$$\models_\mathfrak{A} \varphi[s(x|\bar{s}(t))]$$
By the substitution lemma,
$$\models_\mathfrak{A} \varphi^x_t[s]$$

\Qed

**Lemma 5.** $\bar{s}(u^x_t) = \overline{s(x | \bar{s}(t))}(u)$.

*Proof.* (By induction on the term $t$.)

**Lemma 6. (Substitution Lemma)** If the term $t$ is substitutable for the variable $x$ in the wff $\varphi$, then
$$\models_\mathfrak{A} \varphi^x_t[s] \iff
\models_\mathfrak{A} \varphi[s(x|\bar{s}(t))]$$

*Proof.* (By induction on the wff $\varphi$.)

**Corollary 7.** If $\vdash (\varphi \leftrightarrow \psi)$, then $\varphi$ and $\psi$ are logically equivalent.

**Corollary 8.** If $\varphi'$ is an alphabetic variant of $\varphi$, then $\varphi$ and $\varphi'$ are logically equivalent.
