% Introduction to Probability Theory
% Mort Yao
% 2016-04-15

# Definitions

## Experiment ^[<https://en.wikipedia.org/wiki/Experiment_(probability_theory)>]

An **experiment** or **trial** is any procedure that can be infinitely repeated and has a well-defined [set](/math/set) of possible *outcomes*, known as the *sample space*.

An experiment is said to be *random* if it has more than one possible outcome, and *deterministic* if it has only one.

A random experiment that has exactly two possible outcomes is known as a **Bernoulli trial** (or **binomial trial**).

## Outcomes ^[<https://en.wikipedia.org/wiki/Outcome_(probability)>]

An **outcome** of an experiment is a possible result of that experiment. Each possible outcome of a particular experiment is unique, and different outcomes are mutually exclusive.

### Sample space ^[<https://en.wikipedia.org/wiki/Sample_space>]

The **sample space** of an experiment is the set of all possible outcomes of that experiment. A sample space is usually denoted using set notation, e.g., $S$, $\Omega$ or $U$.

In some sample spaces, it is reasonable to assume that all outcomes in the space are equally likely (that they occur with equal *probability*).

### Event ^[<https://en.wikipedia.org/wiki/Event_(probability_theory)>]

Any measurable subset of the sample space, constituting a σ-algebra over the sample space itself, is known as an **event**.

Any subset of the sample space that is not an element of the σ-algebra is not an event, and does not have a probability. With a reasonable specification of the probability space, however, all events of interest are elements of the σ-algebra.

We say that the event $E$ occurs when the outcome of the experiment lies in $E$.

Events are written as propositional formulas involving random variables, e.g., if $X$ is a real-valued random variable defined on the sample space $S$, the event
$$\{s \in S | u < X(s) \leq v \}$$

can also be written as
$$u < X \leq v$$

#### Elementary event ^[<https://en.wikipedia.org/wiki/Elementary_event>]

An **elementary event** (also called an **atomic event** or **simple event**) is an event which contains only a single outcome in the sample space. Using set theory terminology, an elementary event is a singleton.

#### Null event

An **null event** is an event consisting of no outcome and hence could not occur, denoted by $\varnothing$.

#### Unions and intersections of events

For any events $E_1, E_2, \cdots$ of a sample space $S$, the union of these events, denoted by $\bigcup_{n=1}^\infty E_n$, is defined to be the event that consists of all outcomes that are in $E_n$ for at least one value of $n = 1, 2, \cdots$.

Similarly, the intersection of the events $E_1, E_2, \cdots$, denoted by $\bigcap_{n=1}^\infty E_n$, is defined to be the event consisting of those outcomes that are in all of the events.

if $\bigcap_{n=1}^\infty E_n = \varnothing$, then events $E_n$ are said to be mutually exclusive.

#### Complementary event ^[<https://en.wikipedia.org/wiki/Complementary_event>]

For any event $E$ we define the new event $E^c$ (also denoted by $E'$ or $\overline{E}$), referred to as the complement of $E$, to consist of all outcomes in the sample space $S$ that are not in $E$, i.e., $E^c$ will occur if and only if $E$ does not occur.

The event $E$ and its complement $E^c$ are mutually exclusive and exhaustive. Given an event, the event and its complementary event define a Bernoulli trial.

### Probabilities defined on events

Consider an experiment whose sample space is $S$. For each event $E$, we assume that a number $P(E)$ is defined and satisfies the following conditions:

1. $0 \leq P(E) \leq 1$
2. $P(S) = 1$
3. For any sequence of events $E_1, E_2, \cdots$ that are mutually exclusive, i.e., events for which $E_nE_m = \varnothing$ when $n \neq m$, then
$$P\bigg(\bigcup_{n=1}^\infty E_n\bigg) = \sum_{n=1}^\infty P(E_n)$$

We refer to $P(E)$ as the probability of the event $E$.
