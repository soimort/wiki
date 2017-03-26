% Formal Proofs and Deductive Systems
% Mort Yao
% 2017-03-27

# Formal Proofs

**Formal proof.** A *formal proof* (or a *derivation*) is a finite sequence of *well-formed formulas* (in the scope of [formal languages](/comp/language/)), each of which is an *axiom*, an *assumption*, or follows from the preceding sentences in the sequence by a *rule of inference*. Formal proofs are a form of logical argumentation using [deductive reasoning](/philosophy/logic/#reasoning).

Several commonly used deduction styles (also called *proof calculi*) for expressing logical arguments exist:

* Structural proof theory (prefers the use of rules of inferences)
    * **Natural deduction**. Every line is a conditional tautology with zero or more conditions on the left, and exactly one asserted proposition on the right.
    * **Sequent calculus**. Every line is a conditional tautology with zero or more conditions on the left, and zero or more asserted propositions on the right.
* **Hilbert-style systems** (prefers the use of axioms). Every line is an unconditional tautology.

A proof calculus is merely a style of formal inferences, which may be applied to different logics (e.g., classical logic, intuitionistic logic) in different formal systems.

A *semi-formal proof* is a proof written in a natural language, which is intended to be read by human. A semi-formal proof should be easily translatable into a formal proof that can be verified by a machine.

**Term.** A *well-formed term* is either a parameter variable, or a function applied to some other terms. In formal grammar:
$$t ::= x\ |\ f(t_1, \dots, t_n)$$

A *function symbol* builds up a term from other terms, which can be defined as
$$f(x_1, \dots, x_n) \equiv t$$
(Note that $t$ may not use $f$ recursively.)

A *relation symbol* (or a *predicate*) builds up an *atomic formula* from terms, which can be defined as
$$p(x_1, \dots, x_n) \equiv P$$
(Note that $P$ may not use $p$ recursively.)

**Formula.** A *well-formed formula* is either an atomic formula, or a compound formula built up from atomic formulas using *connectives* or *quantifiers*. In formal grammar:
$$P ::= p(t_1, \dots, t_n)\ |\ P_1 \land P_2\ |\ P_1 \lor P_2\ |\ P_1 \Rightarrow P_2\ |\ \top\ |\ \bot\ |\ \lnot P_1\ |\ \forall x : S . P_1\ |\ \exists x : S . P_1$$

(Note that a formula may contain *free variables* that are not bound by any quantifier.)

**Proposition.** A *proposition* is a statement such that

> For all $x_1$ in $S_1$, \dots, and $x_n$ in $S_n$, if $P_1, \dots, P_m$ all hold, then $Q$ holds.

or (as a well-formed formula)
$$\models \forall x_1 : S_1 . \cdots \forall x_n : S_n . P_1 \land \cdots \land P_m \Rightarrow Q$$
where $x_1, \dots, x_n$ are the *parameters*, $P_1, \dots, P_m$ are the *assumptions* (or the *hypotheses*), and $Q$ is the *conclusion* (or the *consequence*). The assumptions and the conclusion may not contain free variables other than the given parameters. Thus, a proposition always has a definite truth value.

A proposition is *valid* (semantically *true* in all interpretations), if and only if there is a truth judgment
$$P_1, \dots, P_m \models Q$$

A proposition is *provable*, if and only there is a sequent judgment
$$P_1, \dots, P_m \vdash Q$$
that follows from a formal proof, where $P_1, \dots, P_m$ (also written collectively as $\Gamma$) are the *antecedents*, and $Q$ is the *consequent*.

**Theorem.** A provably true proposition is a *theorem*.

**Soundness.** A formal system is said to be *sound*, if and only if given all axioms and rules of inference, $\Gamma \vdash Q$ implies $\Gamma \models Q$. (*Provability implies validity*)

**Completeness.** A formal system is said to be *complete*, if and only if given all axioms and rules of inference, $\Gamma \models Q$ implies $\Gamma \vdash Q$. (*Validity implies provability*)

While verifying a proof is often mechanized efficiently, finding the proof of a theorem can be computationally intractable or only semi-decidable.



# Rules of Inference

In the tree-like presentation of a proof (proof tree), a derivation is constructed from proof rules such as
$$\frac{\Gamma_1 \vdash Q_1 \quad \cdots \quad \Gamma_n \vdash Q_n}{\Gamma \vdash Q}$$
The sequents above the line are the *premises* of the rule; the sequent below the line is the *conclusion* of the rule.


## Assumption

$$\textsc{Ass}_i : \frac{}{P_1, \dots, P_n \vdash P_i}
\quad (i \in \{1, \dots, n\})$$


## Domain-Specific Axiom

$$\textsc{Axiom}_P : \frac{}{\Gamma \vdash P}
\quad (P \textrm{ is an axiom})$$


## Internal Lemma

$$\textsc{Lemma} : \frac{\Gamma \vdash P \quad \Gamma, P \vdash Q}{\Gamma \vdash Q}$$


## Conjunction Introduction

Also called *adjunction*.

$$\land\textsc{I} : \frac{\Gamma \vdash P_1 \quad \Gamma \vdash P_2}{\Gamma \vdash P_1 \land P_2}$$


## Conjunction Elimination

Also called *simplification*.

$$\land\textsc{E}_1 : \frac{\Gamma \vdash P_1 \land P_2}{\Gamma \vdash P_1}$$

$$\land\textsc{E}_2 : \frac{\Gamma \vdash P_1 \land P_2}{\Gamma \vdash P_2}$$


## Disjunction Introduction

Also called *addition*.

$$\lor\textsc{I}_1 : \frac{\Gamma \vdash P_1}{\Gamma \vdash P_1 \lor P_2}$$

$$\lor\textsc{I}_2 : \frac{\Gamma \vdash P_2}{\Gamma \vdash P_1 \lor P_2}$$


## Disjunction Elimination

Also called *proof by cases*.

$$\lor\textsc{E} : \frac{\Gamma \vdash P_1 \lor P_2 \quad \Gamma, P_1 \vdash Q \quad \Gamma,P_2 \vdash Q}{\Gamma \vdash Q}
$$


## Implication Introduction

Also called the *deduction theorem*.

$$\Rightarrow\textsc{I} : \frac{\Gamma, P \vdash Q}{\Gamma \vdash P \Rightarrow Q}$$


## Implication Elimination

Also called *modus ponens*.

$$\Rightarrow\textsc{E} : \frac{\Gamma \vdash P \Rightarrow Q \quad \Gamma \vdash P}{\Gamma \vdash Q}$$


## Truth Introduction

$$\top\textsc{I} : \frac{}{\Gamma \vdash \top}$$


## Falsehood Elimination

Also called the *principle of explosion* (*ex falso quodlibet*).
This rule is rejected by minimal logic.

$$\bot\textsc{E} : \frac{\Gamma \vdash \bot}{\Gamma \vdash Q}$$

An alternative rule of the ex falso axiom is

$$\Rightarrow\textsc{EFQ} = \frac{\Gamma \vdash \lnot P}{\Gamma \vdash P \Rightarrow Q}$$


## Negation Introduction

$$\lnot\textsc{I} : \frac{\Gamma, P \vdash \bot}{\Gamma \vdash \lnot P}$$

A related rule is *modus tollens*:

$$\lnot\textsc{MT} : \frac{\Gamma \vdash P \Rightarrow Q, \lnot Q}{\Gamma \vdash \lnot P}$$


## Negation Elimination

$$\lnot\textsc{E} : \frac{\Gamma \vdash \lnot P \quad \Gamma \vdash P}{\Gamma \vdash \bot}$$


## Universal Introduction

$$\forall\textsc{I} : \frac{\Gamma \vdash P[x'/x]}{\Gamma \vdash \forall x : S . P}
\quad (x' \textrm{ does not occur in } \Gamma \textrm{ or } P.)$$


## Universal Elimination

$$\forall\textsc{E}_t : \frac{\Gamma \vdash \forall x : S . P}{\Gamma \vdash P[t/x]}
\quad (t \textrm{ is a term of sort } S.)$$


## Existential Introduction

$$\exists\textsc{I}_t : \frac{\Gamma \vdash P[t/x]}{\Gamma \vdash \exists x : S . P}
\quad (t \textrm{ is a term of sort } S.)$$


## Existential Elimination

$$\exists\textsc{E} : \frac{\Gamma \vdash \exists x : S . P \quad \Gamma, P[x'/x] \vdash Q}{\Gamma \vdash Q}
\quad (x' \textrm{ does not occur in } \Gamma, P \textrm{ or } Q.)$$


## Equality

### Equality Introduction

Also call *reflexivity*.

$$=\textsc{I} : \frac{}{\Gamma \vdash t = t}$$

### Equality Elimination

$$=\textsc{E} : \frac{\Gamma \vdash t_1 = t_2 \quad \Gamma \vdash P[t_1/x]}{\Gamma \vdash P[t_2/x]}$$


## Indirect Proofs

These rules are rejected by intuitionistic logic.

### Proof by Contradiction

$$\textsc{PBC} : \frac{\Gamma, \lnot P \vdash \bot}{\Gamma \vdash P}$$

### Double Negation Elimination

$$\textsc{DNE} : \frac{\Gamma \vdash \lnot\lnot P}{\Gamma \vdash P}$$

### Law of Excluded Middle

$$\textsc{LEM} : \frac{}{\Gamma \vdash P \lor \lnot P}$$


## Induction

### Mathematical Induction

$$\textsc{Ind}_\mathbb{N} :
\frac{\Gamma \vdash P[0/x] \quad \Gamma, P[x'/x] \vdash P[(x' + 1)/x]}{\Gamma \vdash \forall x : \mathbb{N} . P}
\quad (x' \textrm{ does not occur in } \Gamma \textrm{ or } P.)$$
