% Time Complexity
% Mort Yao
% 2016-12-28

**Concrete problems.** An [abstract problem](/comp/decidability) whose instance set $I$ is the set of binary strings ($I \subseteq \{0,1\}^*$) is called a *concrete problem*, in the sense that the problem instance is concretely encoded as a binary string (as in all modern computers). We say that an algorithm *solves* a concrete problem in time $\mathcal{O}(T(n))$, if it produces the solution in $\mathcal{O}(T(n))$ time, when given a problem instance $i$ of length $n=|i|$. We say that an algorithm *verifies* a solution to a concrete problem in time $\mathcal{O}(T(n))$, if it decides whether a certain solution is correct in $\mathcal{O}(T(n))$ time, when given a problem instance $i$ of length $n=|i|$ and a solution in question.

A concrete problem with solution set $S=\{0,1\}$ is a *concrete decision problem*.

**Tractability and efficiency under polynomial time.** To approach a certain problem, if we have an algorithm that runs in polynomial time, i.e., $\mathcal{O}(n^c)$ for some constant $c$ where $n$ is the size of the input, this problem is *polynomial-time solvable* and we call it *tractable*; otherwise, we call it *intractable*. Polynomial-time algorithms are considered to be *efficient*, and superpolynomial-time algorithms are considered to be *inefficient*. In the following text, we are most interested in whether a problem can be approached in polynomial-time.

**Definition 1. (Complexity class $\mathrm{P}$)**
The complexity class $\mathrm{P}$ is the set of concrete decision problems that are *polynomial-time solvable*.

**Encodings of abstract problems.** Without loss of generality, any abstract problem can be mapped to a concrete problem by encoding of problem instances.

A function $f: \{0,1\}^* \to \{0,1\}^*$ is said to be *polynomial-time computable* if there exists a polynomial-time algorithm $\mathcal{A}$ that, when given input $x \in \{0,1\}^*$, outputs $f(x)$. For an instance set $I$, two encodings $e_1$ and $e_2$ are said to be *polynomially related* if there exists two polynomial-time computable functions $f_{12}$ and $f_{21}$ such that for any $i \in I$, we have $f_{12}(e_1(i))=e_2(i)$ and $f_{21}(e_2(i))=e_1(i)$ (that is, problem instances in two encodings can be encoded/decoded into each other in polynomial-time). If two encodings $e_1$ and $e_2$ of an abstract problem are polynomially related, whether the problem is polynomial-time solvable or not is independent of the encoding that is used.

**Theorem 2.** Let $Q$ be an abstract decision problem on instance set $I$, and let $e_1$ and $e_2$ be polynomially related encodings on $I$. Then $e_1(Q) \in \mathrm{P} \iff e_2(Q) \in \mathrm{P}$.

**Proof.** Suppose that $e_1(Q)$ can be solved in time $\mathcal{O}(n^k)$ for some constant $k$. Moreover, suppose that for any problem instance $i$, the encoding $e_1(i)$ can be computed from the encoding $e_2(i)$ in time $\mathcal{O}(n^c)$ for some constant $c$, where $n=|e_2(i)|$. To solve problem $e_2(Q)$ on $e_2(i)$, we first compute $e_1(i)$, which takes time $\mathcal{O}(n^c)$; clearly, $|e_1(i)| = \mathcal{O}(n^c)$ since the output of an algorithm can be no longer than its running time. Then solving the problem on $e_1(i)$ takes time $\mathcal{O}(|e_1(i)|^k) = \mathcal{O}(n^{ck})$, which is polynomial to $n$. Similarly, we can prove that the other direction holds as well. [QED]

As is shown above, the encoding of a problem instance does not affect its polynomial-time solvability so long as it is polynomially related to some "standard" encoding using binary strings. In the future, we can assume that all problem instances are encoded as binary strings, thus we can also neglect the distinction between abstract and concrete problems.

Using the terminology of [formal languages](/comp/language/), the complexity class $\mathrm{P}$ can also be defined equivalently as:

**Definition 3. (Complexity class $\mathrm{P}$)**
$$\mathrm{P} = \{L : \textrm{there exists an algorithm }\mathcal{A}\textrm{ that decides }L\textrm{ in polynomial time}\}$$

**Theorem 4.**
$$\mathrm{P} = \{L : \textrm{there exists an algorithm }\mathcal{A}\textrm{ that accepts }L\textrm{ in polynomial time}\}$$

**Proof.** Let $L$ be the language accepted by some polynomial-time algorithm $\mathcal{A}$ in time $\mathcal{O}(n^k)$ for some constant $k$, there also exists a constant $c$ such that $\mathcal{A}$ accepts $L$ in at most $cn^k$ steps. For any input string $x$, the algorithm $\mathcal{A}'$ *simulates* $cn^k$ steps of $\mathcal{A}$. If $\mathcal{A}$ accepted $x$, then $\mathcal{A}'$ accepts $x$ by outputting $1$; if $\mathcal{A}$ did not accept $x$, then $\mathcal{A}'$ rejects $x$ by outputting $0$. The time of $\mathcal{A}'$ simulating $\mathcal{A}$ is polynomial to the running time of $\mathcal{A}$, thus, $\mathcal{A}'$ is a polynomial-time algorithm that decides $L$. [QED]

**Theorem 5.**
$\mathrm{P}$ is closed under polynomial-time reductions.

**Proof sketch.** Given any language $A \in \mathrm{P}$, we want to prove that for any language $B$ such that $w \in A \Leftrightarrow f(w) \in B$, where $f$ is a polynomial-time computable function, it holds that $B \in \mathrm{P}$.

Since $A \in \mathrm{P}$, there exists an algorithm $\mathcal{A}_1$ that decides $A$ in polynomial time. Since $f$ is polynomial-time computable, there also exists an algorithm $\mathcal{A}_2$ that computes $f(w)$ in polynomial time. Construct the following algorithm $\mathcal{A}$: Run $\mathcal{A}_1$ on $w$, and run $\mathcal{A}_2$ on $w$ and compute $f(w)$. If both accept, $\mathcal{A}$ accepts $B$; otherwise, it rejects $B$. Therefore, $\mathcal{A}$ is an algorithm that decides $B$ in polynomial time. [QED]

**Verification algorithms.** A two-argument algorithm $\mathcal{A}$ *verifies* an input string $x$ if there exists a certificate $y$ such that $\mathcal{A}(x,y)=1$. The language verified by a verification algorithm $\mathcal{A}$ is
$$L = \{x \in \{0,1\}^* : \textrm{there exists } y \in \{0,1\}^* \textrm{ such that } \mathcal{A}(x,y) = 1\}$$

Intuitively, an algorithm $\mathcal{A}$ verifies a language $L$ if for any string $x \in L$, there exists a certificate $y$ that $\mathcal{A}$ can use to prove that $x \in L$. Moreover, for any string $x \not\in L$ there must be no certificate showing that $x \in L$.

**Definition 6. (Complexity class $\mathrm{NP}$)** The complexity class $\mathrm{NP}$ is the set of concrete decision problems that are *polynomial-time verifiable* (i.e., for any given solution, we can verify it in polynomial time).

A language $L$ belongs to $\mathrm{NP}$ if and only if there exists a two-argument polynomial-time algorithm $\mathcal{A}$ and a constant $c$ such that
$$L = \{x \in \{0,1\}^* : \textrm{there exists a certificate } y \textrm{ with } |y| = \mathcal{O}(|x|^c) \textrm{ such that } \mathcal{A}(x,y) = 1\}$$

Notice that, to verify the correctness of a solution to a problem, we can always try to fully solve the problem and see if the given solution holds present, thus, if a problem is polynomial-time solvable, it is also polynomial-time verifiable, i.e., $L \in \mathrm{P} \implies L \in \mathrm{NP}$. Therefore, $\mathrm{P} \subseteq \mathrm{NP}$.

**$\mathrm{P}=\mathrm{NP}$ problem**. It is an open question whether $\mathrm{P}=\mathrm{NP}$ or $\mathrm{P} \subset \mathrm{NP}$.

**Definition 7. (Complexity class $\textrm{co-NP}$)** The complexity class $\textrm{co-NP}$ is the set of languages $L$ such that $\overline{L} \in \mathrm{NP}$.

Intuitively, $\textrm{co-NP}$ is the class of problems for which efficiently verifiable proofs of "no"-instances exist. For example, for the SUBSET-SUM problem (which in the $\mathrm{NP}$ class): given a finite set of integers, is there a non-empty subset that sums to zero? The complementary problem (which is in the $\textrm{co-NP}$ class) asks: given a finite set of integers, does every non-empty subset have a non-zero sum?

Clearly, $\mathrm{P} \subseteq \textrm{co-NP}$, since if a problem is polynomial-time solvable, "no"-instances are easily verified in polynomial time. It follows from above that $\mathrm{P} \subseteq \mathrm{NP} \cap \textrm{co-NP}$.

**$\mathrm{NP}=\textrm{co-NP}$ problem.** It is an open question whether $\mathrm{NP}=\textrm{co-NP}$. That is, it is unknown whether $\mathrm{NP}$ is closed under complement.

---

Further topics:

* [NP-completeness](npc): The class of $\mathrm{NP}$ problems to which every $\mathrm{NP}$ problem is reducible. Intuitively, the class of NP problems which are considered to be "the hardest".

More complexity classes:

* $\mathrm{ZPP}$: The class of decision problems that can be solved with zero error on a probabilistic Turing machine in polynomial time.
* $\mathrm{RP}$: The class of decision problems that can be solved with 1-sided error on a probabilistic Turing machine in polynomial time.
* $\mathrm{BPP}$: The class of decision problems that can be solved with 2-sided error on a probabilistic Turing machine in polynomial time.
* $\mathrm{BQP}$: The class of decision problems that can be solved with 2-sided error on a quantum Turing machine in polynomial time.
