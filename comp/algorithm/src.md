% Algorithm
% Mort Yao
% 2016-12-28

**Algorithm**. An *algorithm* is a computational method that can be represented in a well-defined [formal language](/comp/language/) within a finite amount of time and space for solving an *abstract problem*.

Starting with the *initial state* and *input*, an algorithm describes a computation that proceeds through a finite number of states, eventually producing an *output* and terminating at a *final state.* The simplest form of algorithms deals with [decision problems](/comp/decidability/), and produces yes-or-no outputs.

Per the Church-Turing thesis, any algorithm can be simulated by a *model of computation* known to be Turing-complete (e.g., Turing machine, λ-calculus).

If the transition of states is deterministic, the algorithm is called a *deterministic algorithm*; otherwise, it is called a *probabilistic algorithm* (or *randomized algorithm*, *non-deterministic algorithm*).

**Is every problem solvable/decidable (Entscheidungsproblem)?** The answer is no. Examples of undecidable problems: the halting problem and Hilbert's tenth problem.

**Can every problem that can be verified in polynomial time be decided in polynomial time?** We don't know. See the P versus NP problem.
