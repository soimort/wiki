% NP-Completeness
% Mort Yao
% 2016-10-22

# Concepts

**Lemma 1.1.** The complexity class $\mathrm{P}$ is closed under polynomial-time reduction, i.e., $\forall L' \in \mathrm{P} . L \leq_\mathrm{p} L' \implies L \in \mathrm{P}$.

**Proof.** Let $\mathcal{A}'$ be a polynomial-time algorithm that decides $L'$, and let $F$ be a polynomial-time reduction algorithm that computes the reduction function $f$. We construct a polynomial-time algorithm $\mathcal{A}$ that decides $L$:

For a given input $x \in \{0,1\}^*$, $\mathcal{A}$ uses $F$ to transform $x$ into $f(x)$, and then it uses $\mathcal{A}'$ to test whether $f(x) \in L'$. $\mathcal{A}$ then outputs whatever $\mathcal{A}'$ outputs. Since both $F$ and $\mathcal{A}'$ run in polynomial time, $\mathcal{A}$ runs in polynomial time.
[QED]

**Lemma 1.2.** The complexity class $\mathrm{NP}$ is closed under polynomial-time reduction.

Polynomial-time reductions provide a formal means for showing that one problem is at least as hard as another to within a polynomial-time factor, that is, if $L' \leq_\mathrm{p} L$, then $L'$ is not more than a polynomial factor harder than $L$.

**Definition 1.3. (NP-hard)** A language $L$ is said to be *NP-hard* (i.e., "hard for $\mathrm{NP}$") if every language in the complexity class $\mathrm{NP}$ is polynomial-time reducible to $L$, that is,
$$\forall L' \in \mathrm{NP} . L' \leq_\mathrm{p} L$$

**Definition 1.4. (NP-complete)** A language $L$ is said to be *NP-complete* (i.e., "complete for $\mathrm{NP}$ if it is NP-hard and $L \in \mathrm{NP}$.

We also define the complexity class $\mathrm{NPC}$ to be the class of NP-complete languages.

**Theorem 1.5.** If any language of $\mathrm{NPC}$ belongs to $\mathrm{P}$, then $\mathrm{P}=\mathrm{NP}$.

**Proof.** Suppose that there exists a language $L'$ such that $L' \in \mathrm{P}$ and $L' \in \mathrm{NPC}$. Since $L' \in \mathrm{NPC}$, for any $L \in \mathrm{NP}$, we have $L \leq_\mathrm{p} L'$; since $L' \in \mathrm{P}$, it follows from Lemma 1.1 that $L \in \mathrm{P}$. Therefore $\mathrm{NP} \subseteq \mathrm{P}$. It is also known that $\mathrm{P} \subseteq \mathrm{NP}$, thus it holds that $\mathrm{P} = \mathrm{NP}$.
[QED]

**Remark 1.6.** It is an open question whether any language of $\mathrm{NPC}$ actually belongs to $\mathrm{P}$, although the common belief is that $\mathrm{P} \cap \mathrm{NPC} = \varnothing$, since no polynomial-time algorithm for any NP-complete problem has been found yet; otherwise we shall have $\mathrm{P} = \mathrm{NP}$.



# NP-Complete Problems

## The Circuit Satisfiability Problem (CIRCUIT-SAT)

**Problem description.**
$$\textrm{CIRCUIT-SAT} = \{\langle C \rangle : C \textrm{ is a satisfiable boolean combinational circuit}\}$$

**Lemma 2.1.** $\textrm{CIRCUIT-SAT} \in \mathrm{NP}$.

**Proof sketch.** Construct a two-input, polynomial-time algorithm $\mathcal{A}$ such that for each logic gate in the circuit, it checks that the value provided by the certificate on the output wire is correctly computed as a function of the values on the input wires. If the output of the entire circuit is 1, $\mathcal{A}$ outputs 1; otherwise $\mathcal{A}$ outputs 0. Thus, we can verify CIRCUIT-SAT using the algorithm $\mathcal{A}$ in polynomial time, therefore $\textrm{CIRCUIT-SAT} \in \mathrm{NP}$.
[QED]

**Lemma 2.2.** $\textrm{CIRCUIT-SAT}$ is NP-hard.

**Proof sketch.** To show that any language $L \in \mathrm{NP}$ is polynomial-time reducible to CIRCUIT-SAT, we must construct a polynomial-time algorithm computing some function $f$ such that
$$x \in L \iff f(x) \in \textrm{CIRCUIT-SAT}$$

Since $L \in \mathrm{NP}$, there is a polynomial-time algorithm $\mathcal{A}$ such that
$$L = \{x \in \{0,1\}^* : \textrm{there exists } y \in \{0,1\}^* \textrm{ with } |y|=\mathcal{O}(|x|^c) \textrm{ such that } \mathcal{A}(x,y)=1\}$$

Given string $x$, we build a circuit $C(x)$ such that it consists of all the configuration steps of computing $\mathcal{A}(x,y)$; we assign a set of input wires (which corresponds to string $y$) to $C(x)$, which must satisfy each configuration step in order for the whole circuit to output 1. Since $\mathcal{A}$ runs in polynomial time, we have $\mathcal{O}(|x|^k)$ configuration steps, thus the whole circuit $C(x)$ can also be computed in polynomial time; as long as it holds that $\mathcal{A}(x,y)=1$ for some $y$, the circuit is satisfied and outputs 1. Thus, we can ensure that $C(x)$ has a satisfying assignment of input wires if and only if $\mathcal{A}(x,y)=1$ for some $y$ with $|y|=\mathcal{O}(|x|^c)$.

Now that $C(x)$ can be computed from $x$ in polynomial time, $L \leq_\mathrm{p} \textrm{CIRCUIT-SAT}$. Thus, CIRCUIT-SAT is NP-hard.
[QED]

**Theorem 2.3.** $\textrm{CIRCUIT-SAT} \in \mathrm{NPC}$.

**Proof.** It follows directly from Lemma 2.1 and Lemma 2.2 that $\textrm{CIRCUIT-SAT} \in \mathrm{NPC}$.
[QED]



**Lemma 2.4.** If $L$ is a language such that $L' \leq_\mathrm{p} L$ for some $L' \in \mathrm{NPC}$, then $L$ is NP-hard. If in addition $L \in \mathrm{NP}$, then $L \in \mathrm{NPC}$.

**Proof.** Since $L'$ is NP-complete, for all $L'' \in \mathrm{NP}$, we have $L'' \leq_\mathrm{p} L'$. As $L' \leq_\mathrm{p} L$ and by transitivity, we have $L'' \leq_\mathrm{p} L$, which shows that $L$ is NP-hard. If $L \in \mathrm{NP}$, we have $L \in \mathrm{NPC}$.
[QED]

Lemma 2.4 provides with an important methodology for proving the NP-completeness of a language. Intuitively, if we can reduce a known NP-complete language $L'$ to $L$, we implicitly reduce every language in $\mathrm{NP}$ to $L$ (i.e., $L$ is NP-hard). Therefore, to prove that $L$ is NP-complete, we only need to:

1. Prove that $L \in \mathrm{NP}$.
2. Prove that $L$ is NP-hard by reducing a known NP-complete language $L'$ to $L$.
    1. Choose a known NP-complete language $L'$.
    2. Construct an algorithm $\mathcal{A}$ that computes a function $f$ mapping every instance $x$ of $L'$ to an instance $f(x)$ of $L$.
    3. Prove that the function $f$ satisfies $x \in L'$ if and only if $f(x) \in L$ for all $x$.
    4. Prove that the algorithm $\mathcal{A}$ runs in polynomial time.



## The Formula Satisfiability Problem (SAT)

**Problem description.**
$$\textrm{SAT} = \{\langle \phi \rangle : \phi \textrm{ is a satisfiable boolean formula}\}$$

**Lemma 2.5.** $\textrm{CIRCUIT-SAT} \leq_\mathrm{p} \textrm{SAT}$.

**Proof sketch.** For each gate in the circuit $C$, we construct a sub-formula $\phi_i$ which is a logical equivalence of the operation on input wires and the output wire, e.g., for a certain gate, given the operation on input wires $x_1 \lor x_2$ and the output wire $x_5$, we construct the sub-formula $\phi_i = x_5 \leftrightarrow (x_1 \lor x_2)$. We define the formula $\phi = x_m \land \phi_1 \land \phi_2 \dots \land \phi_k$ (where $x_m$ is the final output wire), which can be computed in polynomial time. If the circuit $C$ has a satisfying assignment, then each wire of the circuit has a well-defined value (which is guaranteed by the sub-formula $\phi_i$), and the output of the circuit is 1. Thus, the circuit $C$ is satisfiable exactly when the formula $\phi$ is satisfiable. Therefore, $\textrm{CIRCUIT-SAT} \leq_\mathrm{p} \textrm{SAT}$.
[QED]

**Theorem 2.6.** $\textrm{SAT} \in \mathrm{NPC}$.

**Proof sketch.** $\textrm{SAT} \in \mathrm{NP}$ is trivially proved by constructing a verification algorithm that replaces each variable in the formula with its corresponding value and then evaluates the expression. If the expression evaluates to 1, then the algorithm has verified that the formula is satisfiable. Clearly, the verification algorithm runs in polynomial time.

To prove that $\mathrm{SAT}$ is NP-hard, we show that $\textrm{CIRCUIT-SAT} \leq_\mathrm{p} \textrm{SAT}$, as proved in Lemma 2.5. By the conclusion of Lemma 2.4, we have that $\textrm{SAT} \in \mathrm{NPC}$.
[QED]



## The 3-CNF Satisfiability Problem (3-CNF-SAT)

**Lemma 2.7.** $\textrm{SAT} \leq_\mathrm{p} \textrm{3-CNF-SAT}$.

[TBD]

## The Clique Problem (CLIQUE)

**Lemma 2.8.** $\textrm{3-CNF-SAT} \leq_\mathrm{p} \textrm{CLIQUE}$.

[TBD]

## The Vertex-Cover Problem (VERTEX-COVER)

**Lemma 2.9.** $\textrm{CLIQUE} \leq_\mathrm{p} \textrm{VERTEX-COVER}$.

[TBD]

## * The Hamiltonian-Cycle Problem (HAM-CYCLE)

[TBD]

## The Traveling-Salesman Problem (TSP)

**Lemma 2.10.** $\textrm{HAM-CYCLE} \leq_\mathrm{p} \textrm{TSP}$.

[TBD]

## The Subset-Sum Problem (SUBSET-SUM)

**Lemma 2.11.** $\textrm{3-CNF-SAT} \leq_\mathrm{p} \textrm{SUBSET-SUM}$.

[TBD]
