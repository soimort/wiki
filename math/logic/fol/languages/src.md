% First-Order Languages
% Mort Yao
% 2017-09-06

**Symbols.** We take these following symbols to construct our first-order language $\mathcal{L}$:

#. Logical symbols.
    #. Parentheses: $($, $)$.
    #. Sentential connective symbols: $\to$, $\lnot$.
    #. Variables: $x, y, z, v_1, v_2,$ ...
    #. Equality symbol (special 2-place predicate symbol; optional): $=$.
#. Parameters.
    #. Universal quantifier symbol: $\forall$.
    #. ($n$-place) Predicate symbols (a.k.a. relation symbols): $P_1, P_2,$ ...
    #. Constant symbols (0-place function symbols): $c_1, c_2,$ ...
    #. ($n$-place) Function symbols: $f_1, f_2,$ ...

***Example 1.*** The Language of Set Theory (LOST) contains:
(1) the equality symbol $=$;
(2) $\in$ as a 2-place predicate symbol.

***Example 2.*** The Language of Elementary Number Theory contains:
(1) the equality symbol $=$;
(2) $<$ as a 2-place predicate symbol;
(3) $\mathbf{0}$ (zero) as a constant symbol;
(4) $\mathbf{S}$ (successor) as a 1-place function symbol;
(5) $+$ (addition), $\cdot$ (multiplication) and $\mathbf{E}$ (exponentiation) as 2-place function symbols.

*Remark 3.* For sentential connective symbols, we choose $\to$ and $\lnot$ as a complete set. Other common connectives are seen as abbreviations of them:
\begin{align*}
(\alpha \land \beta) &\quad\text{ is equivalent to }\quad
(\lnot (\alpha \to (\lnot \beta))) \\
(\alpha \lor \beta) &\quad\text{ is equivalent to }\quad
((\lnot \alpha) \to \beta) \\
(\alpha \leftrightarrow \beta) &\quad\text{ is equivalent to }\quad
(\lnot((\alpha \to \beta) \to (\lnot (\beta \to \alpha))))
\end{align*}
The existential quantifier $\exists$ is also seen as an abbreviation:
$$\exists x \alpha \quad\text{ is equivalent to }\quad
(\lnot \forall x (\lnot \alpha))$$
For 2-place predicate and function symbols, it is conventional to use infix notations instead, e.g., $u = t$ abbreviates $= u\ t$, $u \in t$ abbreviates $\in u\ t$. Moreover, $u \neq t$ abbreviates $(\lnot = u\ t)$; similarly, $u \notin t$ abbreviates $(\lnot \in u\ t)$.

An *expression* is any finite sequence of symbols. Among all possible expressions, terms and formulas are of our interest.

**Terms.** Let $\mathcal{L}$ be a first-order language. We define
$$\text{Term}^\mathcal{L}_0 = \{ \langle a \rangle : a \text{ is a variable or constant symbol} \}$$
$$\text{Term}^\mathcal{L}_{n+1} = \{ f t_1 \cdots t_m :
f \text{ is a }m\text{-place function symbol},
t_1,\dots,t_m \in \bigcup_{0 \leq i \leq n}\text{Term}^\mathcal{L}_i \}$$
Furthermore, we define
$$\text{Term}(\mathcal{L}) = \bigcup_{n \in \mathbb{N}} \text{Term}^\mathcal{L}_n$$
thus, $t$ is a *term* in $\mathcal{L}$ if and only if $t \in \text{Term}(\mathcal{L})$.

The *complexity of a term* $t$ is an integer $n$ such that $t \in \text{Term}^\mathcal{L}_n$, and for every $k < n$, $t \notin \text{Term}^\mathcal{L}_k$.

**Proposition 4. (Induction principle for terms)** If $\Pi$ is a set of terms such that

(1) $\text{Term}^\mathcal{L}_0 \subseteq \Pi$;
(2) If $f$ is an $m$-place function symbol and $t_1,\dots,t_m \in \Pi$ then $f t_1 \cdots t_m \in \Pi$;

then $\Pi = \text{Term}(\mathcal{L})$.

**Formulas.** Let $\mathcal{L}$ be a first-order language. We define the set of *atomic formulas* as
$$\text{Formula}^\mathcal{L}_0 = \{ P t_1 \cdots t_k : P \text{ is a }k\text{-place predicate symbol or }=, t_1,\dots,t_k \in \text{Term}(\mathcal{L}) \}$$
We say that $\varphi \in \text{Formula}^\mathcal{L}_{n+1}$ if and only if one of the following holds:

#. $\varphi = (\lnot \psi)$ for some $\psi \in \bigcup_{m \leq n} \text{Formula}^\mathcal{L}_m$;
#. $\varphi = (\psi \to \theta)$ for some $\psi, \theta \in \bigcup_{m \leq n} \text{Formula}^\mathcal{L}_m$;
#. $\varphi = \forall v_i \psi$ for some $v_i \in V$ and $\psi \in \bigcup_{m \leq n} \text{Formula}^\mathcal{L}_m$.

Furthermore, we define
$$\text{Formula}(\mathcal{L}) = \bigcup_{n \in \mathbb{N}} \text{Formula}^\mathcal{L}_n$$
thus, $\varphi$ is a *formula* (or *well-formed formula*, *wff*) in $\mathcal{L}$ if and only if $\varphi \in \text{Formula}(\mathcal{L})$.

The *complexity of a formula* $\varphi$ is an integer $n$ such that $\varphi \in \text{Formula}^\mathcal{L}_n$, and for every $k < n$, $\varphi \notin \text{Formula}^\mathcal{L}_k$.

**Proposition 5. (Induction principle for formulas)** If $\Phi \subseteq \text{Formula}(\mathcal{L})$ is a set of formulas such that

(1) $\text{Formula}^\mathcal{L}_0 \subseteq \Phi$;
(2) If $\varphi \in \Phi$ then $(\lnot \varphi) \in \Phi$;
(3) If $\varphi, \psi \in \Phi$ then $(\varphi \to \psi) \in \Phi$;
(4) If $\varphi \in \Phi$ then for any $v_i \in V$, $\forall v_i \varphi \in \Phi$;

then $\Phi = \text{Formula}(\mathcal{L})$.

**Free variables.** For any wff $\varphi$, we define that a variable $x$ *occurs free* in $\varphi$ (or $x$ is a *free variable* of $\varphi$) by recursion:

1. For atomic $\psi$, $x$ occurs free in $\psi$ iff $x$ is a symbol in $\psi$;
2. $x$ occurs free in $(\lnot \psi)$ iff $x$ occurs free in $\psi$;
3. $x$ occurs free in $(\psi \to \theta)$ iff $x$ occurs free in $\psi$ or in $\theta$;
4. $x$ occurs free in $\forall v_i \psi$ iff $x$ occurs free in $\psi$ and $x \neq v_i$.

Alternatively, we can define $h(\alpha)$ as the set of all variables in the atomic formula $\alpha$. And we extend $h$ to a function $\bar{h}$ on all wffs such that
\begin{align*}
\bar{h}((\lnot \psi)) &= \bar{h}(\psi) \\
\bar{h}((\psi \to \theta)) &= \bar{h}(\psi) \cup \bar{h}(\theta) \\
\bar{h}(\forall v_i \psi) &= \bar{h}(\psi) \text{ after removing }v_i\text{ if present}
\end{align*}
then we say that a variable $x$ occurs free in $\varphi$ iff $x \in \bar{h}(\varphi)$. The existence of a unique such $\bar{h}$ follows from the recursion theorem and the fact that each wff has a unique decomposition.

If no variable occurs free in the wff $\varphi$, i.e., $\bar{h}(\varphi) = \emptyset$, then $\varphi$ is called a *sentence*.
