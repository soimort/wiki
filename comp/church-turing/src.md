% Church-Turing Thesis
% Mort Yao
% 2017-04-11

**Turing machine (TM).** A *Turing machine* $M$ is a 7-tuple $(Q, \Sigma, \Gamma, \delta, q_0, q_\text{accept}, q_\text{reject})$, where

1. $Q$ is a finite set called the *states*,
2. $\Sigma$ is a finite set called the *input alphabet*, (the blank symbol $\sqcup \notin \Sigma$)
3. $\Gamma$ is a finite set called the *tape alphabet*, ($\sqcup \in \Gamma$ and $\Sigma \subseteq \Gamma$)
4. $\delta : Q' \times \Gamma \to Q \times \Gamma \times \{\text{L}, \text{R}\}$ is the *transition function*, (where $Q' = Q-\{q_\text{accept},q_\text{reject}\}$)
5. $q_0 \in Q$ is the *start state*,
6. $q_\text{accept}$ is the *accept state*,
7. $q_\text{reject}$ is the *reject state*. ($q_\text{reject} \neq q_\text{accept}$)

A Turing machine *configuration* $C$ is written as $u\ q\ v$, where

1. $u \in \Gamma^*$ is the sequence of characters before the tape head,
2. $q \in Q$ is the current state,
3. $v \in \Gamma^*$ is the character at the tape head and all following characters up to the last non-blank character.

Suppose that we have $a, b, c \in \Gamma$, $u, v \in \Gamma^*$, and $q_i, q_j \in Q$, we say that configuration $C_1$ *yields* configuration $C_2$ if a single transition of the Turing machine converts $C_1$ to $C_2$. Formally:

1. (Leftward move) $u a\ q_i\ b v$ yields $u\ q_j\ a c v$, if $\delta(q_i, b) = (q_j, c, \text{L})$;
    * Specially, $q_i\ b v$ yields $q_j\ c v$;
2. (Rightward move) $u a\ q_i\ b v$ yields $u a c\ q_j\ v$, if $\delta(q_i, b) = (q_j, c, \text{R})$.
    * Specially, $u a\ q_i$ yields $u a c\ q_j$, if $\delta(q_i, \sqcup) = (q_j, c, \text{R})$.

The *start configuration* of a Turing machine $M$ on input $w$ is the configuration $q_0\ w$. In an *accepting configuration*, the state of the configuration is $q_\text{accept}$. In a *rejecting configuration*, the state of the configuration is $q_\text{reject}$. Accepting and rejecting configurations are called *halting configurations* and cannot yield further configurations.

We say that the Turing machine $M = (Q, \Sigma, \Gamma, \delta, q_0, q_\text{accept}, q_\text{reject})$ *accepts* a string $w$ if there exists a sequence of configurations $C_1, \dots, C_k$, where

1. $C_1$ is the start configuration of $M$ on input $w$,
2. Each $C_i$ yields $C_{i+1}$,
3. $C_k$ is an accepting configuration.

On the contrary, if $C_k$ is a rejecting configuration, we say that the Turing machine $M$ *rejects* the string $w$.

$L$ is the language of Turing machine $M$, denoted as $\mathcal{L}(M) = L$, if and only if
$$L = \{ w\ |\ w \text{ is a string accepted by } M \}$$
We also say that language $L$ is *recognized* by Turing machine $M$.

**Turing recognizability.** A language $L$ is *Turing-recognizable* if and only if there exists a Turing machine $M$ that recognizes $L$. A Turing-recognizable language is also called a *recursively enumerable language*.

**Turing decidability.** A language $L$ is *Turing-decidable* (or simply *decidable*) if and only if there exists a Turing machine $M$ that accepts every $w \in L$ and rejects every $w \notin L$. A decidable language is also called a *recursive language*.

Clearly, every decidable language is Turing-recognizable; however, not every Turing-recognizable language is decidable, i.e., for some language $L$, there exists a string $w$ that can neither be accepted ($w \in L$) nor rejected ($w \notin L$) by any Turing machine.

**Theorem 1. (Closure properties)** The class of Turing-recognizable languages is closed under union, intersection, concatenation, Kleene star and homomorphism.

**Theorem 2. (Closure properties)** The class of decidable languages is closed under union, intersection, complementation, concatenation and Kleene star.

**Proof.**

**(1)** Closure under union.

For any two decidable languages $L_1$ and $L_2$, let $M_1$ and $M_2$ be the TMs that decide them. We construct a TM $M'$ that decides the union of $L_1$ and $L_2$:

$M' =$ "On input $w$:

> 1. Run $M_1$ on $w$. If it accepts, *accept*.
> 2. Run $M_2$ on $w$. If it accepts, *accept*. Otherwise, *reject*.''

$M'$ accepts $w$ if and only if either $M_1$ or $M_2$ accepts it. If both reject, $M'$ rejects.

**(2)** Closure under intersection.

For any two decidable languages $L_1$ and $L_2$, let $M_1$ and $M_2$ be the TMs that decide them. We construct a TM $M'$ that decides the intersection of $L_1$ and $L_2$:

$M' =$ "On input $w$:

> 1. Run $M_1$ on $w$. If it rejects, *reject*.
> 2. Run $M_2$ on $w$. If it accepts, *accept*. Otherwise, *reject*.''

$M'$ accepts $w$ if and only if both $M_1$ and $M_2$ accept it. If either rejects, $M'$ rejects.

**(3)** Closure under complementation.

For any decidable language $L$, let $M$ be the TM that decides it. We construct a TM $M'$ that decides the complement of $L$:

$M' =$ "On input $w$:

> 1. Run $M$ on $w$. If it accepts, *reject*. Otherwise, *accept*.''

$M'$ accepts $w$ if and only if it is rejected by some TM $M$. Otherwise, $M'$ rejects.

**(4)** Closure under concatenation.

For any two decidable languages $L_1$ and $L_2$, let $M_1$ and $M_2$ be the TMs that decide them. We construct an NTM $M'$ that decides the concatenation of $L_1$ and $L_2$:

$M' =$ "On input $w$:

> 1. For each $w_1, w_2$ such that $w = w_1w_2$:
>     1. Run $M_1$ on $w_1$.
>     2. Run $M_2$ on $w_2$. If for some $w_1$ and $w_2$, both are accepted, *accept*.
> 2. If not accepted, *reject*.''

$M'$ accepts $w$ if and only if for some $w_1$ and $w_2$ such that $w = w_1w_2$, both $w_1$ and $w_2$ are accepted by some TMs. Since there are finitely many ways of splitting $w = w_1w_2$, $M'$ is guaranteed to halt.

**(5)** Closure under Kleene star.

For any decidable language $L$, let $M$ be the TM that decides it. We construct an NTM $M'$ that decides the Kleene star of $L$:

$M' =$ "On input $w$:

> 1. For each $w_1, \dots, w_n$ such that $w = w_1 \dots w_n$:
>     1. Run $M$ on each $w_i$ (for $i = 1, \dots, n$). If $M$ accepts every $w_i$, *accept*.
> 2. If not accepted, *reject*.''

$M'$ accepts $w$ if and only if for some $w_1, \dots, w_n$ such that $w = w_1 \dots w_n$, every $w_i$ is accepted by some TM $M$. Since there are finitely many ways of splitting $w = w_1 \dots w_n$, $M'$ is guaranteed to halt.

[QED]



**Church-Turing thesis.** Everything that can be effectively computed can be computed using a Turing machine (or the lambda calculus).

Equivalent models of computation:

* (Single-tape, deterministic) Turing machine;
* Multi-tape Turing machine;
* Nondeterministic Turing machine;
* Enumerator;
* Abstract rewriting system;
* Lambda calculus;
* etc.
