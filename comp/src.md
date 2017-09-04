% Theory of Computation
% Mort Yao
% 2017-04-12

Textbook:

* Michael Sipser.
***Introduction to the Theory of Computation, 3rd edition.***

Supplementary reading:

* Neil Jones.
***Computability and Complexity: From a Programming Perspective.***
[[PDF](http://www.diku.dk/~neil/comp2book2007/book-whole.pdf)]



# Formal Languages and Automata

#. Preliminaries
    * [Basic formal language theory](language/)
#. [Finite languages](language/finite/)
#. [Regular languages](language/regular/)
#. [Context-free languages](language/context-free/)
#. *Context-sensitive languages



# Computability

#. [Church-Turing thesis](church-turing/)
    * Turing machines
    * Turing completeness
        * Lambda calculus
        * Combinatory logic
        * Recursive function
        * Cellular automaton
        * Abstract rewriting system
#. [Algorithm](algorithm/)
#. [Decidability](decidability/)
    * Decidable languages
    * Undecidability
    * Logical theories <i class="fa fa-link" aria-hidden="true"></i>
#. [Reducibility](reducibility/)
    * Many-one reductions
    * Turing reductions, Turing equivalence and Turing degree
#. Recursion theorem
#. Algorithmic information theory <i class="fa fa-link" aria-hidden="true"></i>



# Complexity

#. [Overview](complexity/)
#. [Time complexity](complexity/time/)
    * P and NP
        * [NP-completeness](complexity/time/npc/)
#. Space complexity
    * Savitch's theorem
    * PSPACE
        * PSPACE-completeness
    * L and NL
        * NL-completeness
        * NL=coNL
#. Provable intractability
    * Hierarchy theorems
    * Relativization
    * Circuit complexity
#. Advanced topics
    * [Approximation algorithms](/algo/approximation/) <i class="fa fa-link" aria-hidden="true"></i>
    * [Probabilistic algorithms](/algo/randomization/) <i class="fa fa-link" aria-hidden="true"></i>
        * BPP
    * Alternation
    * Interactive proof systems
        * IP=PSPACE
    * Parallel computation
        * NC
        * P-completeness
    * [Cryptography](/crypto/) <i class="fa fa-link" aria-hidden="true"></i>
