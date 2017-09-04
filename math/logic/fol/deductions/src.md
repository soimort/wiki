% Formal Deductions
% Mort Yao
% 2017-09-04

To give a proof of the logical implication $\Sigma \models \tau$:

1. There is a finite set $\Sigma_0 = \{\sigma_0, \dots, \sigma_n\} \subseteq \Sigma$ that logically implies $\tau$. (guaranteed by the *compactness theorem*)
2. $\sigma_0 \to \cdots \to \sigma_n \to \tau$ can be generated from a finite number of steps in the enumeration of the validities (where each $\sigma_i \in \Sigma$). (guaranteed by the *enumerability theorem*)

A formal proof is also called a *deduction*.
In our Hilbert-style deductive system, we choose:

* Logical axioms $\Lambda$: an infinite set of formulas.
* Rule of inference: *modus ponens*
$$\frac{\alpha, \alpha \to \beta}{\beta}$$

Thus, the theorems of a set $\Gamma$ of formulas are the formulas obtainable from $\Gamma \cup \Lambda$ by use of modus ponens a finite number of times.

**Deduction.** A *deduction of $\varphi$ from $\Gamma$* is a finite sequence $\langle \alpha_0, \dots, \alpha_n \rangle$ of formulas such that $\alpha_n$ is $\varphi$ and for each $k \leq n$, either

(a) $\alpha_k$ is in $\Gamma \cup \Lambda$, or
(b) $\alpha_k$ is obtained by modus ponens from two earlier formulas in the sequence; that is, for some $i$ and $j$ less than $k$, $\alpha_j$ is $\alpha_j \to \alpha_k$.

We say that $\varphi$ is *deducible* from $\Gamma$, or that $\varphi$ is a *theorem* of $\Gamma$, written as $\Gamma \vdash \varphi$.

For a set $S$ of formulas, we say that it is *closed* under modus ponens iff whenever $\alpha \in S$ and $(\alpha \to \beta) \in S$, then $\beta \in S$.

**Induction principle for deductions.** Suppose that $S$ is a set of wffs that includes $\Gamma \cup \Lambda$ and is closed under modus ponens. Then $S$ contains every theorem of $\Gamma$.

**Generalization.** A wff $\varphi$ is a *generalization* of $\psi$ iff for some $n \geq 0$ and some variables $x_1, \dots, x_n$,
$$\varphi = \forall x_1 \cdots \forall x_n \psi$$
in the case that $n = 0$, any wff is just a generalization of itself.

**Logical axioms.** The set $\Lambda$ of logical axioms is generalizations of wffs of the following forms:

1. Tautologies;
2. (Substitution) $\forall x \alpha \to \alpha^x_t$, where $t$ is substitutable for $x$ in $\alpha$;
3. $\forall x (\alpha \to \beta) \to (\forall x \alpha \to \forall x \beta)$;
4. $\alpha \to \forall x \alpha$, where $x$ does not occur free in $\alpha$;
5. $x = x$;
6. $x = y \to (\alpha \to \alpha')$, where $\alpha$ is atomic and $\alpha'$ is obtained from $\alpha$ by replacing $x$ in zero or more (but not necessarily all) places by $y$.

**Substitution.** Consider Axiom Group 2: $\forall x \alpha \to \alpha^x_t$, where $t$ is substitutable for $x$ in $\alpha$. $\alpha^x_t$ is defined as

1. For atomic $\alpha$, $\alpha^x_t$ is the expression obtained from $\alpha$ by replacing the variable $x$ by $t$.
2. $(\lnot \alpha)^x_t = (\alpha^x_t \to \beta^x_t)$.
3. $(\alpha \to \beta)^x_t = (\alpha^x_t \to \beta^x_t)$.
4. $(\forall y \alpha)^x_t = \begin{cases}
   \forall y \alpha & \quad \text{if } x = y\\
   \forall y (\alpha^x_t) & \quad \text{if } x \neq y\\
\end{cases}$

Let $x$ be a variable, $t$ be a term. We say that $t$ is *substitutable* for $x$ in $\alpha$ iff:

1. For atomic $\alpha$, $t$ is always substitutable for $x$ in $\alpha$.
2. $t$ is substitutable for $x$ in $(\lnot \alpha)$ iff it is substitutable for $x$ in $\alpha$.
3. $t$ is substitutable for $x$ in $(\alpha \to \beta)$ iff it is substitutable for $x$ in both $\alpha$ and $\beta$.
4. $t$ is substitutable for $x$ in $\forall y \alpha$ iff either
    (a) $x$ does not occur free in $\forall y \alpha$, or
    (b) $y$ does not occur in $t$ and $t$ is substitutable for $x$ in $\alpha$.

**Tautologies.** The *prime formulas* are the atomic formulas and those of the form $\forall x \alpha$. Any formula is built up from prime formulas by the operations $\mathcal{E}_\lnot$ and $\mathcal{E}_\to$. Take the sentence symbols in sentential logic to be the prime formulas of our first-order language. Then any tautology of sentential logic is in Axiom Group 1.

**Theorem 1.** If $\Gamma \models_t \varphi$, then $\Gamma \models \varphi$.
(NB. The converse does not hold.)

**Theorem 2.** $\Gamma \vdash \varphi \iff \Gamma \cup \Lambda \models_t \varphi$.
