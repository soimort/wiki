% Decidability
% Mort Yao
% 2016-10-15

**Abstract problems and decision problems.** In computability theory and computational complexity theory, a *decision problem* is a question in some formal system with a yes-or-no answer (which is encoded as a bit $1$ or $0$). If we define an *abstract problem* as a binary relation between a set $I$ of problem instances and a set $S$ of problem solutions, decision problems are those with solution set $S=\{0,1\}$.

**Motivation.** Unsurprisingly, many abstract problems are not decision problems but rather *optimization problems*, in which the solution set $S$ has more than 2 elements or is infinitely large. Still, we are interested in decision problems for the following reasons:

1. Every optimization problem can be reduced into a decision problem (does an optimal solution exist?) that is no harder than the original optimization problem. If we can prove that the decision problem is unsolvable, we then know that the optimization problem is also unsolvable.
2. If we know that the decision problem is hard (intractable), the optimization problem must be no easier than that. Consequently, we should try to approach the problem using alternative methods (e.g., approximations) rather than to look for a general solution.

From the point of view of [formal language theory](../language), the set of instances for any decision problem $Q$ is the set $\Sigma^*$, where $\Sigma=\{0,1\}$. Since $Q$ can be fully characterized by the problem instances that produce a $1$ ("yes") answer, $Q$ can be viewed as a language $L$ over $\Sigma=\{0,1\}$, denoted by using a propositional formula as:
$$L = \{x \in \{0,1\}^*: Q(x) = 1\}$$

Intuitively, the language $L$ of a decision problem $Q$ is the set of binary strings that encode the yes-instances of that problem.

For a decision problem, an [algorithm](../algorithm) $\mathcal{A}$ *accepts* a string $x \in \{0,1\}^*$ if $\mathcal{A}(x)=1$. $\mathcal{A}$ *rejects* a string $x$ if $\mathcal{A}(x)=0$. The language accepted by an algorithm $\mathcal{A}$ is the set of binary strings
$$L_\mathcal{A} = \{x \in \{0,1\}^*: \mathcal{A}(x) = 1\}$$

N.B. If a given string $x$ is not accepted by the algorithm $\mathcal{A}$, i.e., $x \not\in L_\mathcal{A}$, it is not necessarily rejected; $\mathcal{A}(x)$ could never halt thus fail to give an output.

**Definition 1. (Decidability)** A language $L$ is *decided* by an algorithm $\mathcal{A}$ if every binary string in $L$ is accepted by $\mathcal{A}$ and every binary string not in $L$ is rejected by $\mathcal{A}$, that is,
$$\forall x \in L . \mathcal{A}(x)=1$$
$$\forall x \in \{0,1\}^* \setminus L . \mathcal{A}(x)=0$$

Clearly, the decidability of a language is a stronger property than its acceptability. For an algorithm $\mathcal{A}$ to accept a language $L$, it only needs to accept every string in $L$; to decide a language, however, $\mathcal{A}$ must explicitly accept or reject every string in $\Sigma^*$. In fact, there are languages that cannot be decided by any algorithm; that is, the corresponding decision problems are *undecidable*, such as Turing's halting problem.

**Further topics.**

* [Undecidability](undecidability)
