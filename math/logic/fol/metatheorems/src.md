% Some Metatheorems of Deduction
% Mort Yao
% 2017-09-04

**Generalization Theorem.** If $\Gamma \vdash \varphi$ and $x$ does not occur free in any formula in $\Gamma$, then $\Gamma \vdash \forall x \varphi$.

*Proof.* (By induction on $\varphi$.)

**Rule T.** If $\Gamma \vdash \alpha_1, \dots, \Gamma \vdash \alpha_n$ and $\{\alpha_1, \dots, \alpha_n\} \models_t \beta$, then $\Gamma \vdash \beta$.

**Deduction Theorem.** $\Gamma; \gamma \vdash \varphi \iff \Gamma \vdash (\gamma \to \varphi)$.

*Proof.* (By induction on $\varphi$.)

**Contraposition.** $\Gamma; \varphi \vdash \lnot \psi \iff \Gamma; \psi \vdash \lnot \varphi$.

If for some $\beta$, both $\beta$ and $\lnot \beta$ are theorems of the set $\Gamma$, we say that $\Gamma$ is *inconsistent*. In this case, any arbitrary formula $\alpha$ is a theorem since $\beta \to \lnot \beta \to \alpha$ is a tautology.

**Reductio ad Absurdum.** If $\Gamma; \varphi$ is inconsistent, then $\Gamma \vdash \lnot \varphi$.

**Generalization on Constants.** Assume that $\Gamma \vdash \varphi$ and that $c$ is a constant symbol that does not occur in $\Gamma$. Then there is a variable $y$ (which does not occur on $\varphi$) such that $\Gamma \vdash \forall y \varphi^c_y$. Furthermore, there is a deduction of $\forall y \varphi^c_y$ from $\Gamma$ in which $c$ does not occur.

**Corollary 1.** Assume that $\Gamma \vdash \varphi^x_c$, where the constant symbol $c$ does not occur in $\Gamma$ or in $\varphi$. Then $\Gamma \vdash \forall x \varphi$, and there is deduction of $\forall x \varphi$ from $\Gamma$ in which $c$ does not occur.

**Existence of Alphabetic Variants.** Let $\varphi$ be a formula, $t$ be a term, and $x$ be a variable. Then we can find a formula $\varphi'$ (called an *alphabetic variant* of $\varphi$), which differs from $\varphi$ only in the choice of quantified variables such that

(a) $\varphi \vdash \varphi'$ and $\varphi' \vdash \varphi$.
(b) $t$ is substitutable for $x$ in $\varphi'$.
