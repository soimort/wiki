% Basic Probability Theory
% Mort Yao
% 2016-10-07

# Concepts

**Definition 1.1. (Experiment)**
An *experiment* or *trial* is any procedure that can be infinitely repeated and has a well-defined [set](/math/set) of possible *outcomes*, known as the *sample space*.

An experiment is said to be *random* if it has more than one possible outcome, and *deterministic* if it has only one.

A random experiment that has exactly two possible outcomes is known as a *Bernoulli trial* (or *binomial trial*).

**Definition 1.2. (Outcome)**
An *outcome* of an experiment is a possible result of that experiment. Each possible outcome of a particular experiment is unique, and different outcomes are mutually exclusive.

**Definition 1.3. (Sample space)**
The *sample space* of an experiment is the set of all possible outcomes of that experiment. A sample space is usually denoted using set notation, e.g., $S$, $\Omega$ or $U$.

In some sample spaces, it is reasonable to assume that all outcomes in the space are equally likely (that they occur with equal *probability*).

**Definition 1.4. (Event)**
Any [measurable](/math/analysis/measure) subset of the sample space, constituting a σ-algebra over the sample space itself, is known as an *event*.

Any subset of the sample space that is not an element of the σ-algebra is not an event, and does not have a probability. With a reasonable specification of the probability space, however, all events of interest are elements of the σ-algebra.

We say that the event $E$ occurs when the outcome of the experiment lies in $E$.

Events are written as propositional formulas involving random variables, e.g., if $X$ is a real-valued random variable defined on the sample space $S$, the event
$$\{s \in S | u < X(s) \leq v \}$$

can also be written as
$$u < X \leq v$$

**Definition 1.5. (Elementary event)**
An *elementary event* (also called an *atomic event* or *simple event*) is an event which contains only a single outcome in the sample space. Using set theory terminology, an elementary event is a singleton.

**Definition 1.6. (Null event)**
An *null event* is an event consisting of no outcome and hence could not occur, denoted by $\varnothing$.

**Definition 1.7. (Union and intersection of events)**
For any events $E_1, E_2, \dots$ of a sample space $S$, the *union (or disjunction) of these events*, denoted by $\bigcup_{n=1}^\infty E_n$, is defined to be the event that consists of all outcomes that are in $E_n$ for at least one value of $n = 1, 2, \dots$.

Similarly, the *intersection (or conjunction) of the events* $E_1, E_2, \dots$, denoted by $\bigcap_{n=1}^\infty E_n$, is defined to be the event consisting of those outcomes that are in all of the events.

If $\bigcap_{n=1}^\infty E_n = \varnothing$, then events $E_n$ are said to be *mutually exclusive*.

**Definition 1.8. (Complementary event)**
For any event $E$ we define the new event $\overline{E}$ (also denoted by $E'$ or $E^c$), referred to as the *complement of $E$*, to consist of all outcomes in the sample space $S$ that are not in $E$, i.e., $\overline{E}$ will occur if and only if $E$ does not occur.

The event $E$ and its complement $\overline{E}$ are mutually exclusive and exhaustive. Given an event, the event and its complementary event define a Bernoulli trial.

**Definition 1.9. (Probability defined on events)**
Consider an experiment whose sample space is $S$. For each event $E$, we assume that a number $\Pr[E]$ is defined and satisfies the following conditions (*Kolmogorov's axioms*):

1. $\Pr[E] \in \mathbb{R}$, $\Pr[E] \geq 0$
2. (Assumption of unit measure) $\Pr[S] = 1$
3. (Assumption of σ-additivity) For any sequence of events $E_1, E_2, \dots$ that are mutually exclusive, i.e., events for which $E_nE_m = \varnothing$ when $n \neq m$, then
$$\Pr\left[\bigcup_{n=1}^\infty E_n\right] = \sum_{n=1}^\infty \Pr[E_n]$$

We refer to $\Pr[E]$ as the *probability of the event $E$*.

By definition, $S = E \cup \overline{E}$, therefore $\Pr[E \cup \overline{E}]=1$. Since $E$ and $\overline{E}$ are mutually exclusive events, $\Pr[E \cup \overline{E}]=\Pr[E]+\Pr[\overline{E}]$. Thus, we have $\Pr[\overline{E}] = 1 - \Pr[E]$.

If $\Pr\left[\bigcap_{n=1}^\infty E_n\right] = \prod_{n=1}^\infty \Pr[E_n]$, then events $E_n$ are said to be *independent*.

**The probability of the empty set.** $\Pr[\varnothing] = 0$.

**Monotonicity.** If $E_1 \subseteq E_2$ then $\Pr[E_1] \leq \Pr[E_2]$.

**The numeric bound.** It immediately follows from the monotonicity property that $0 \leq \Pr[E] \leq 1$.

**Theorem 1.10. (Addition law of probability)**
$$\Pr[E_1 \cup E_2] = \Pr[E_1] + \Pr[E_2] - \Pr[E_1 \cap E_2]$$

**Theorem 1.11. (Inclusion-exclusion principle)**
$$\Pr\left[\bigcup_{i=1}^n E_i\right] = \sum_{i=1}^n\left((-1)^{i-1} \sum_{I \subset \{1,\dots,n\}, |I|=i} \Pr\left[\bigcap_{i \in I} E_i\right]\right)
$$

**Theorem 1.12. (Union bound; Boole's inequality)**
$$\Pr\left[\bigcup_{i=1}^n E_i\right] \leq \sum_{i=1}^n \Pr[E_i]$$

Boole's inequality follows from the fact that a probability measure is σ-sub-additive.

**Theorem 1.13. (Bonferroni inequalities)** For all odd $k$,
$$\Pr\left[\bigcup_{i=1}^n E_i\right] \leq \sum_{i=1}^k \left((-1)^{i-1} \sum_{I \subset \{1,\dots,n\}, |I|=i} \Pr\left[\bigcap_{i \in I} E_i\right]\right)$$
For all even $k$,
$$\Pr\left[\bigcup_{i=1}^n E_i\right] \geq \sum_{i=1}^k \left((-1)^{i-1} \sum_{I \subset \{1,\dots,n\}, |I|=i} \Pr\left[\bigcap_{i \in I} E_i\right]\right)$$
When $k=n$, the equality holds and the resulting identity is the inclusion–exclusion principle.
When $k=1$, we get Boole's inequality.

**Definition 1.14. (Conditional probability)** The *conditional probability of $E_1$ given $E_2$*, denoted $\Pr[E_1 | E_2]$, is defined as
$$\Pr[E_1 | E_2] = \frac{\Pr[E_1 \cap E_2]}{\Pr[E_2]}$$
when $\Pr[E_2] \neq 0$.

It follows immediately from the definition that
$$\Pr[E_1 \cap E_2] = \Pr[E_1 | E_2] \cdot \Pr[E_2]$$

**Theorem 1.15. (Bayes' theorem)**
If $\Pr[E_2] \neq 0$ then
$$\Pr[E_1 | E_2] = \frac{\Pr[E_2 | E_1] \cdot \Pr[E_1]}{\Pr[E_2]}$$

**Theorem 1.16.**
$$\Pr\left[\bigcup_{i=1}^k E_i\right] \leq \Pr[E_1] + \sum_{i=2}^k \Pr[E_i | \overline{E}_1 \cap \dots \cap \overline{E}_{i-1}]$$



# Useful Probability Bounds
