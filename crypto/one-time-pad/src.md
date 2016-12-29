% One-Time Pad
% Mort Yao
% 2016-12-29

# Construction

**One-time pad (Vernam cipher).** Given $\ell \in \mathbb{Z}^+$ which is the fixed length of the plaintext, define the following encryption scheme $\Pi=(\mathsf{Gen},\mathsf{Enc},\mathsf{Dec})$:

* Message space $\mathcal{M} = \{0,1\}^\ell$.
* Key space $\mathcal{K} = \{0,1\}^\ell$.
* Ciphertext space $\mathcal{C} = \{0,1\}^\ell$.
* $\mathsf{Gen}$ outputs a key $k \in \mathcal{K}$ according to the uniform distribution.
* $\mathsf{Enc}$ takes as input a key $k \in \mathcal{K}$ and a message $m \in \mathcal{M}$, and outputs the ciphertext $c := k \oplus m$.
* $\mathsf{Dec}$ takes as input a key $k \in \mathcal{K}$ and a ciphertext $c \in \mathcal{C}$, and outputs the message $m := k \oplus c$.

where $\oplus$ denotes the bitwise exclusive-or (XOR) of two binary strings.
Since
\begin{align*}
\mathsf{Dec}_k(\mathsf{Enc}_k(m)) &= k \oplus (k \oplus m) \\
&= (k \oplus k) \oplus m \\
&= \{0\}^\ell \oplus m \\
&= m
\end{align*}
this encryption scheme satisfies the correctness requirement.

# Proof of Security

**Theorem 2.** One-time pad is perfectly secret.

**Proof.** For any $c \in \mathcal{C}$ and $m \in \mathcal{M}$,
\begin{align*}
\Pr[C=c | M=m] &= \Pr[\mathsf{Enc}_K(m) = c] \\
&= \Pr[m \oplus K=c] \\
&= \Pr[K=m \oplus c] \\
&= 2^{-\ell}
\end{align*}
where the last equality holds since the key $K$ is a uniform $\ell$-bit string.

Fix any distribution over $\mathcal{M}$. For any $c \in \mathcal{C}$, we have
\begin{align*}
\Pr[C=c] &= \sum_{m' \in \mathcal{M}} \Pr[C=c | M=m'] \cdot \Pr[M=m'] \\
&= 2^{-\ell} \cdot \sum_{m' \in \mathcal{M}} \Pr[M=m'] \\
&= 2^{-\ell}
\end{align*}

Using Bayes' Theorem:
\begin{align*}
\Pr[M=m | C=c] &= \frac{\Pr[C=c | M=m] \cdot \Pr[M=m]}{\Pr[C=c]} \\
&= \frac{2^{-\ell} \cdot \Pr[M=m]}{2^{-\ell}} \\
&= \Pr[M=m]
\end{align*}
Therefore, the one-time pad encryption scheme is perfectly secret.
[QED]
