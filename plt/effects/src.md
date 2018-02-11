% Effects
% Mort Yao
% 2018-02-11

*Computational effects* (sometimes called *side-effects*, or simply *effects*) are anything "impure" about a computation: I/O, states, exceptions, non-determinism and partiality / non-termination. In contrast, a genuinely pure computation would compute a total computable function deterministically without causing any effect.

A *monad* is the denotational semantics of an effect. On how monads can be used to model effects, see:

* <https://stackoverflow.com/a/2488852>
* Philip Wadler, "Monads for Functional Programming."
[[PDF](http://homepages.inf.ed.ac.uk/wadler/papers/marktoberdorf/baastad.pdf)]

There are alternative programming techniques other than monadic effects that may be used to model effects.
On *algebraic effects* and handlers, see:

* Gabriel Scherer, "Algebraic Effects and Handlers -- New Language Ideas for User-Defined Side-Effects."
[[Slides](http://gallium.inria.fr/~scherer/doc/effect-handlers-talk.html#/)]
* Matija Pretnar, "An Introduction to Algebraic Effects and Handlers."
[[PDF](http://www.eff-lang.org/handlers-tutorial.pdf)]
* Andrej Bauer and Matija Pretnar, "Programming with Algebraic Effects and Handlers."
[[PDF](http://math.andrej.com/wp-content/uploads/2012/03/eff.pdf)]
* Edwin Brady, "Programming and Reasoning with Algebraic Effects and Dependent Types."
[[PDF](https://eb.host.cs.st-andrews.ac.uk/drafts/effects.pdf)]
* Gordon Plotkin and John Power, "Computational Effects and Operations: An Overview."
[[PDF](http://homepages.inf.ed.ac.uk/gdp/publications/Overview.pdf)]
* Gordon Plotkin and Matija Pretnar, "Handling Algebraic Effects."
[[PDF](https://arxiv.org/pdf/1312.1399.pdf)]

On *uniqueness types*, see:

* Edsko de Vries, Rinus Plasmeijer, and David Abrahamson, "Uniqueness Typing Simplified."
[[PDF](http://www.edsko.net/pubs/ifl07-paper.pdf)]
