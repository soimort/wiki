% Subtyping
% Mort Yao
% 2018-02-08

*Subtyping* is a form of type polymorphism, represented as a preorder on types:
$$\tau' \preceq \tau$$
we say that $\tau'$ is a *subtype* of $\tau$, and that $\tau$ is a *supertype* of $\tau'$. (Note that $\preceq$ need not be a partial order, as no antisymmetry is assumed, i.e., it may be the case that both $\tau' \preceq \tau$ and $\tau \preceq \tau'$ but not $\tau' = \tau$.)

As a preorder, the subtyping relation satisfies reflexivity:
$$\frac{}{
\tau \preceq \tau
}\qquad\textsc{ST-Refl}$$
and transitivity:
$$\frac{
\tau' \preceq \tau'' \qquad
\tau'' \preceq \tau
}{
\tau' \preceq \tau
}\qquad\textsc{ST-Trans}$$

On function types, the following rule applies:
$$\frac{
\tau_1 \preceq \tau_1' \qquad
\tau_2' \preceq \tau_2
}{
\tau_1' \to \tau_2' \preceq \tau_1 \to \tau_2
}\qquad\textsc{ST-Fun}$$
The $\to$ type constructor is said to be *contravariant* in the argument type and *covariant* in the return type.

The typing rule of *subsumption* applies:
$$\frac{
\Gamma \vdash t : \tau'
\qquad \tau' \preceq \tau
}{
\Gamma \vdash t : \tau
}\qquad\textsc{T-Sub}$$

**Nominal vs. structural subtyping.** *Nominal subtyping* requires an explicit declaration of the subtype/supertype relation. In contrast, in *structural subtyping*, the structure of two types determines the subtype/supertype relation.

**Inclusive vs. coercive subtyping.** Given $\tau' \preceq \tau$. In an *inclusive* implementation of subtyping, a term $t' : \tau'$ is just the same value (of type $\tau$) $t' : \tau$. In a *coercive* implementation of subtyping, a term $t' : \tau'$ must be converted to another value (of type $\tau$) $t : \tau$, using an implicit type conversion function $coerce: \tau' \to \tau$ from subtype to supertype (e.g., from an integer to a floating-point number).

**Mutable references.** Write-only references (i.e., *sinks*) are contravariant, and read-only references (i.e., *sources*) are covariant. Mutable references which act as both sources and sinks are invariant.

**Behavioral subtyping in OOP.**
In the scope of object-oriented programming where side effects are allowed, the notion of *behavioral subtyping* and the *Liskov substitution principle* apply, which are stronger than the above (sub)typing rules. Behavioral subtyping requires that subtypes preserve all invariants guaranteed by the supertypes in some contract; this problem is generally undecidable thus cannot be guaranteed by a type checker.

**Subtyping and FP.**

Conventionally, functional languages like ML and Haskell provide no direct support for subtype polymorphism. Subtyping raises difficulty for type inference; moreover, it is problematic in the presence of mutability. See:

* <https://redd.it/423o0c>

Standard ML's parametric polymorphism may be used to encode the subtyping hierarchy. See:

* <http://mlton.org/ObjectOrientedProgramming>
* Matthew Fluet and Riccardo Pucella, "Phantom Types and Subtyping."
[[PDF](https://www.cs.rit.edu/~mtf/research/phantom-subtyping/jfp06/jfp06.pdf)]

Type inference has been implemented on MLsub, a superset of the core ML language. See:

* Stephen Dolan and Alan Mycroft, "Polymorphism, Subtyping, and Type Inference in MLsub."
[[PDF](https://www.cl.cam.ac.uk/~sd601/papers/mlsub-preprint.pdf)]
[[Code](https://github.com/stedolan/mlsub)]
