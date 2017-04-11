% Basic Formal Language Theory
% Mort Yao
% 2017-04-11

**Definition 1. (Alphabet)** An *alphabet* $\Sigma$ is a well-defined [set](/math/set) of symbols.

**Example.** $\{\texttt{0},\texttt{1}\}$, $\{\texttt{0}, \texttt{1}, \dots, \texttt{9}\}$, $\{\texttt{a}, \texttt{b}, \dots, \texttt{z}\}$, and $\{\sqcup\}$ are all valid alphabets.

**Definition 2. (String)** A *string* is a sequence of symbols.

Specifically, a string consisting of no symbol (i.e., a sequence of zero length) is called an *empty string*, denoted as $\varepsilon$.

**Example.** $\texttt{1001}$, $\texttt{cat}$, and $\varepsilon$ are all valid strings.

**Definition 3. (Language)** A *language* $L$ over the alphabet $\Sigma$ is any set of strings made up of symbols from $\Sigma$ (including the empty string $\varepsilon$ vacuously, if $L$ is nonempty).

Specifically, an empty set of strings is called an *empty language*, denoted as $\varnothing$. For every $L \neq \varnothing$, $\varepsilon \in L$ by definition.

The *language of all strings over $\Sigma$* (including the empty string $\varepsilon$) is denoted as $\Sigma^*$, that is,
$$\Sigma^* = \{a^*\ |\ a \in \Sigma\}$$

**Example.** $\{\texttt{0},\texttt{1}\}^* = \{b^*\ |\ b \in \{\texttt{0}, \texttt{1}\}\} = \{\varepsilon,\texttt{0},\texttt{1},\texttt{00},\texttt{01},\texttt{10},\texttt{11},\texttt{000},\dots\}$, $\{\varepsilon, \texttt{0}, \texttt{1}\}$, $\{\varepsilon\}$, and $\varnothing$ are all valid languages.

Note that every language $L$ over $\Sigma$ (including the empty language $\varnothing$) is a subset of $\Sigma^*$, that is, for every $L$ over $\Sigma$, $L \subseteq \Sigma^* = \{a^*\ |\ a \in \Sigma\}$.

If a language over $\Sigma$ contains every string of fixed length $k$, we denote the language as $\Sigma^k$.

**Example.** $\{\texttt{0}, \texttt{1}\}^8$ is the language of all 8-bit binary strings.

**Definition 4. (Union)** The *union* of two languages $L_1$ and $L_2$ is the language
$$L_1 \cup L_2 = \{ w\ |\ w \in L_1 \lor w \in L_2 \}$$

**Definition 5. (Intersection)** The *intersection* of two languages $L_1$ and $L_2$ is the language
$$L_1 \cap L_2 = \{ w\ |\ w \in L_1 \land w \in L_2 \}$$

**Definition 6. (Complementation)** The *complement* of a language $L$ over $\Sigma$ is the language
$$\overline{L} = \Sigma^* \setminus L$$

**Definition 7. (Concatenation)** The *concatenation* of two languages $L_1$ and $L_2$ is the language
$$L_1 \circ L_2 = \{ w_1w_2\ |\ w_1 \in L_1 \land w_2 \in L_2 \}$$

Additionally, we use $L^k$ to denote the language obtained by concatenating $L$ to itself $k$ times.

**Definition 8. (Kleene star / Closure)** The *Kleene star* or *closure* of a language $L$ is the language
$$L^* = \{\varepsilon\} \cup L \cup L^2 \cup L^3 \cup \cdots$$
