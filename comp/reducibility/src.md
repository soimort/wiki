% Reducibility
% Mort Yao
% 2016-10-17

In computability theory and computational complexity theory, a *reduction* is an algorithm for transforming one problem into another problem.

Intuitively, a problem $A$ is *reducible* to another problem $B$ if an algorithm for solving problem $B$ efficiently (if it existed) could also be used as a subroutine to solve problem $A$ efficiently, so that solving problem $A$ would not be "harder" than solving problem $B$, written as $A \leq B$.

As suggested by the notation, a reduction is a preorder (which is reflexive and transitive).

**Motivation.** The necessity of reductions arises in two situations:

1. We are trying to solve problem $A$ that is similar to problem $B$ we solved already. If solving $A$ can be transformed into solving $B$, then $A$ can be solved easily (via a subroutine of solving $B$) as well. (i.e., $A$ is no harder than $B$)
2. We already know that problem $B$ is hard to solve, and we have another seemingly hard problem $A$. Suppose $A$ is easier (than $B$) to solve, if we can show that every instance of $B$ is solved easily by transforming them into solving $A$, we know that $B$ would not be so hard at all; otherwise, we know that $A$ is at least as hard as $B$.

**Proof by reduction.** Assume that some existing problem is hard, using contradiction (as discussed above) we can prove that another problem is also hard. As a practical example: In cryptography, under the unproven assumption that $\mathrm{P} \neq \mathrm{NP}$, if we know that a mathematical problem is very hard, we can prove that some construction is secure (because solving the corresponding computational problem to "break" the scheme would be hard too).

**Definition 1. (Mapping reduction)**
Language $L_1$ is *mapping reducible* to language $L_2$, written as $L_1 \leq_\mathrm{m} L_2$, if there is a computable function $f : \Sigma^* \to \Sigma^*$, where for every $w$,
$$w \in L_1 \iff f(w) \in L_2$$
The function $f$ is called the *reduction* from $L_1$ to $L_2$.

**Definition 2. (Polynomial-time reduction)**
Language $L_1$ is *polynomial-time reducible* to language $L_2$, written as $L_1 \leq_\mathrm{p} L_2$, if there is a polynomial-time computable function $f : \Sigma^* \to \Sigma^*$, where for every $w$,
$$w \in L_1 \iff f(w) \in L_2$$
The function $f$ is called the *polynomial-time reduction* from $L_1$ to $L_2$.

The most commonly used polynomial-time reductions are [many-one reductions](many-one) therefore in many cases the phrase "polynomial-time reduction" is used to mean a polynomial-time many-one reduction (also called a *Karp reduction*).

**Definition 3. (Closure under reducibility)** A class $C$ of languages is said to be *closed* under reducibility $\leq$ if there exists no reduction from a language in $C$ to a language outside $C$, that is, for every $L$,
$$\forall L' \in C. L \leq L' \implies L \in C$$

If a class is closed under many-one reducibility, then many-one reduction may be used to show that a problem is in $C$ by reducing a problem in $C$ to it. Notably, most well-studied [complexity classes](../complexity) are closed under polynomial-time and/or log-space many-one reductions.

**Definition 4. (Hardness)** Given a class $C$ of languages, a language $L$ is said to be *hard* for $C$ if every language in $C$ is reducible to $L$, that is,
$$\forall L' \in C. L' \leq L$$

N.B. $L$ itself does not have to be in $C$.

**Definition 5. (Completeness)** Given a class $C$ of languages, a language $L$ is said to be *complete* for $C$ if it is hard for $C$ and $L \in C$.

**Further topics.**

* [Many-one reduction](many-one)
* [Turing reduction, Turing equivalence and Turing degree](turing)
