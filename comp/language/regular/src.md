% Regular Languages
% Mort Yao
% 2017-04-11

**Deterministic finite automaton (DFA).**
A *deterministic finite automation* $M$ is a 5-tuple $(Q, \Sigma, \delta, q_0, F)$, where

1. $Q$ is a finite set called the *states*,
2. $\Sigma$ is a finite set called the *alphabet*,
3. $\delta: Q \times \Sigma \to Q$ is the *transition function*,
4. $q_0 \in Q$ is the *start state* (also called the *initial state*),
5. $F \subseteq Q$ is the set of *accept states* (also called *final states*).

We say that the DFA $M = (Q, \Sigma, \delta, q_0, F)$ *accepts* a string $w = a_1 \cdots a_n$ (where each $a_i \in \Sigma$) if and only if there exists a sequence of states $r_0, \dots, r_n$ (where each $r_i \in Q$) such that:

1. $r_0 = q_0$,
2. For every $0 \leq i < n$, $r_{i+1} = \delta(r_i, a_{i+1})$,
3. $r_n \in F$.

Otherwise, we say that the DFA $M$ *rejects* the string $w$.

$L$ is the *language* of DFA $M$, denoted as $\mathcal{L}(M) = L$, if and only if $L = \{w\ |\ w \text{ is a string accepted by } M\}$.
We say that the DFA $M$ *recognizes* the language $L$.

**Regular language (RL).** A language $L$ is called a *regular language* if there exists a DFA $M$ that recognizes $L$.

**Regular operations.** Given languages $L_1$, $L_2$ and $L$, we define the *regular operations* as follows:

* *Union*: $L_1 \cup L_2 = \{ w\ |\ w \in L_1 \lor w \in L_2 \}$.
* *Concatenation*: $L_1 \circ L_2 = \{ w_1w_2\ |\ w_1 \in L_1 \land w_2 \in L_2\}$.
* *Kleene star*: $L^* = \{ w_1w_2 \dots w_k\ |\ k \geq 0 \land \forall i \in \{1, \dots, k\} : w_i \in L \}$.

**Theorem 1. (Closure properties)** The class of regular languages is closed under regular operations.

**Nondeterministic finite automaton (NFA).**
A *nondeterministic finite automaton* is a 5-tuple $(Q, \Sigma, \delta, q_0, F)$, where

1. $Q$ is a finite set of states,
2. $\Sigma$ is a finite alphabet,
3. $\delta: Q \times \Sigma_\varepsilon \to \mathcal{P}(Q)$ is the transition function,
(where $\Sigma_\varepsilon = \Sigma \cup \{\varepsilon\}$)
4. $q_0 \in Q$ is the start state,
5. $F \subseteq Q$ is the set of accept states.

We say that the NFA $M = (Q, \Sigma, \delta, q_0, F)$ *accepts* a string $w$ if $w$ may be written as $w = a_1 \cdots a_n$ (where each $a_i \in \Sigma_\varepsilon$), and there exists a sequence of states $r_0, \dots, r_n$ (where each $r_i \in Q$) such that:

1. $r_0 = q_0$,
2. For every $0 \leq i < n$, $r_{i+1} \in \delta(r_i, a_{i+1})$,
3. $r_n \in F$.

Otherwise, we say that the NFA $M$ *rejects* the string $w$.

$L$ is the language of NFA $M$, denoted as $\mathcal{L}(M) = L$, if and only if $L = \{w\ |\ w \text{ is a string accepted by } M\}$.
We say that the NFA $M$ *recognizes* the language $L$.

Clearly, every DFA has an equivalent NFA (that recognizes exactly the same language), by taking $Q \times \Sigma \subset Q \times \Sigma_\varepsilon$ as the domain and $Q \in \mathcal{P}(Q)$ as the range of the transition function.

**Theorem 2. (Rabin-Scott powerset construction)** Every NFA has an equivalent DFA.

**Corollary 3.** A language $L$ is regular if and only if there exists an NFA $M$ that recognizes $L$.

**Regular expression (RE).** A *regular expression* $R$ is defined as
$$R ::= a\ |\ \varepsilon\ |\ \emptyset\ |\ (R_1 \cup R_2)\ |\ (R_1 \circ R_2)\ |\ (R_1^*)$$
where $a \in \Sigma$, $R_1$ and $R_2$ are regular expressions.

$L$ is the language of regular expression $R$, denoted as $\mathcal{L}(R) = L$, if and only if $L = \{ w\ |\ w \text{ is a string in the form of } R \}$.

**Theorem 4. (Kleene's theorem)** A language $L$ is regular if and only if there exists a regular expression $R$ that describes $L$.

**Theorem 5. (Pumping lemma)** If $L$ is a regular language, then there is a number $p$ (called the *pumping length*) such that if $w \in L$ and $|w| \geq p$, then $w$ may be written as $w = xyz$, under the following conditions:

1. For every $i \geq 0$, $xy^iz \in L$,
2. $|y| > 0$,
3. $|xy| \leq p$.

**Theorem 6. (Myhill-Nerode theorem)** Let $L$ be a language over $\Sigma$. We say that strings $x$ and $y$ are *indistinguishable* by $L$ if and only if for every string $z$, we have both $xz \in L$ and $yz \in L$, or both $xz \notin L$ and $yz \notin L$, denoted as $x \equiv_L y$. Then,

1. $L$ is regular if and only if the equivalence relation $\equiv_L$ has a finite number of equivalence classes;
2. There exists a DFA $M$ with $\mathcal{L}(M) = L$ having precisely one state for each equivalence class of $\equiv_L$.
