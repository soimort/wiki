% Naive Set Theory
% Mort Yao
% 2017-04-02

Basic set theory, with ZF axioms:

* Paul Halmos. ***Naive Set Theory.***

---

**Finite sets and infinite sets**. A set is called *finite* if it contains finitely many elements; otherwise, it is called *infinite*.

**Countable set and uncountable sets.** A set is called *countable* if its elements can be enumerated; otherwise, it is called *uncountable*.

Clearly, all finite sets are countable. The set of natural numbers $\mathbb{N}$, the set of integers $\mathbb{Z}$ and the set of rational numbers $\mathbb{Q}$ are also countable. However, the set of real numbers $\mathbb{R}$ is uncountable.

**Subset and superset.** $A$ is a *subset* of $B$ (or: $B$ is a *superset* of $A$), denoted as $A \subseteq B$ (or: $B \supseteq A$), if and only if for every $x \in A$, there is $x \in B$.

$A$ and $B$ are said to be equal, denoted as $A = B$, if and only if $A \subseteq B$ and $B \subseteq A$; otherwise, $A$ and $B$ are said to be unequal, denoted as $A \neq B$.

$A$ is a *proper subset* of $B$ (or: $B$ is a *proper superset* of $A$), denoted as $A \subset B$ (or: $B \supset A$), if and only if $A \subseteq B$ and $A \neq B$.

**Union.** $A \cup B = \{ x : x \in A \lor x \in B \}$.

**Intersection.** $A \cap B = \{ x : x \in A \land x \in B \}$.

**Difference.** $A \setminus B = \{ x : x \not\in A \land x \in B \}$.

**Symmetric difference.** $A \triangle B = (A \setminus B) \cup (B \setminus A) = \{ x : x \in A \oplus x \in B \}$.

**Cartesian product (cross product).** $A \times B = \{ (x,y) : x \in A \land y \in B \}$.

**Power set.** $\mathcal{P}(A) = \{ X : X \subseteq A \}$.

**Empty set.** The empty set $\{\}$ is denoted as $\varnothing$. $| \varnothing | = 0$.

**Disjoint sets.** Two sets $A$ and $B$ are said to be *disjoint*, if and only if $A \cap B = \varnothing$.
