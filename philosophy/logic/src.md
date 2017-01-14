% Logic
% Mort Yao
% 2017-01-14

# Logical Reasoning

**Deductive reasoning (deduction).** Inferring a conclusion by deriving a logical consequence from some premises using *rules of inference* in a formal system, e.g., propositional logic or first-order logic.

Applications: Pure mathematics, formal semantics of programming languages, type theory.

Only deductive reasoning should be used in mathematical proofs and other formal theories of science.

**Inductive reasoning (induction).** Inferring a probable conclusion from the generalization of some observations.

Applications: Bayesian inference (statistical learning).

N.B. Despite the name, *mathematical induction*, as an inference rule used in proofs, forms steps of deductive reasoning rather than inductive reasoning. The induction rule may be formalized as an axiom in second-order logic.

**Abductive reasoning (abduction; inference to the best explanation).** Inferring a probable explanation from some observations.

Applications: Belief revision.

N.B. Abduction is formally equivalent to the logical fallacy of affirming the consequent, given that multiple possible explanations may exist. Among all three types of reasoning, it is least used (and least reliable) in math and science, yet still a powerful tool in statistical learning.



# Logical Fallacies

**Formal fallacy (deductive fallacy).** A logical fallacy that violates a particular rule of formal logic, thus renders the argument invalid ("non sequitur").

**Informal fallacy (relevance fallacy; soundness fallacy).** An argument that is formally valid but is unsound because of the falsity or irrelevance of one or more of its premises.

Common types of fallacies:

* Inductive fallacies (faulty generalization)
    * Hasty generalization / misleading vividness
    * Slothful induction
    * Overwhelming exception
    * Sampling bias
        * Cherry picking (suppressing evidence)
        * McNamara fallacy (quantitative fallacy)
    * Base rate fallacy / prosecutor's fallacy
* Deductive fallacies (sweeping generalization)
    * Accident
    * Converse accident
* Questionable cause
    * Gambler's fallacy (Monte Carlo fallacy) / hot-hand fallacy
    * Post hoc ergo propter hoc
    * Regression fallacy
* Vagueness / ambiguity
* Question-begging
