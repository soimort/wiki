% Basic Formal Language Theory
% Mort Yao
% 2016-10-14

# Concepts

**Definition 1.1. (Alphabet)** An *alphabet* $\Sigma$ is a well-defined [set](/math/set) of symbols.

**Definition 1.2. (Language)** A *language* $L$ over $\Sigma$ is any set of strings made up of symbols from $\Sigma$.

An *empty string* is denoted by $\varepsilon$. An *empty language* is denoted by $\varnothing$. $\varepsilon$ is contained in every language but $\varnothing.$

The *language of all strings over $\Sigma$* (including the empty string $\varepsilon$) is denoted by $\Sigma^*$, e.g., $\{0,1\}^* = \{\varepsilon,0,1,00,01,10,11,000,\dots\}$ is the set of all binary strings.

Every language $L$ over $\Sigma$ (including the empty language $\varnothing$) is a subset of $\Sigma^*$. If a finite language over $\Sigma$ has a fixed length $k$, we denote it by $\Sigma^k$, e.g., $\{0,1\}^8$ is the set of all 8-bit binary strings.

**Definition 1.3. (Union and intersection of languages)** The *union* of $L_1$ and $L_2$ is the language $L_1 \cup L_2 = \{x: x \in L_1 \textrm{ or } x \in L_2\}$. The *intersection* of $L_1$ and $L_2$ is the language $L_1 \cap L_2 = \{x: x \in L_1 \textrm{ and } x \in L_2\}$.

**Definition 1.4. (Complementary language)** The *complement* of a language $L$ over $\Sigma$ is the language $\overline{L}=\Sigma^* - L$.

**Definition 1.5. (Concatenation of languages)** The *concatenation* of two languages $L_1$ and $L_2$ is the language $L_1L_2 = \{x_1x_2: x_1 \in L_1 \textrm{ and } x_2 \in L_2\}$.

We use $L^k$ to denote the language obtained by concatenating $L$ to itself $k$ times.

**Definition 1.6. (Closure; Kleene star)** The *closure* or *Kleene star* of a language $L$ is the language
$$L^* = \{\varepsilon\} \cup L \cup L^2 \cup L^3 \cup \dots$$
