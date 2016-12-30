% One-Time Pad
% Mort Yao
% 2016-12-30

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

# Secrecy and Cryptanalysis

**Theorem 2.1.** One-time pad is perfectly secret.

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

*Remark 2.2.* In the proof of Theorem 2.1 (perfect secrecy of one-time pad), we assumed that $\Pr[K = m \oplus c] = 2^{-\ell}$. If the key $K$ is not a independently, uniformly chosen $\ell$-bit string, the equality does not hold. In practice, for the one-time pad to be perfectly secure, it is required that a one-time key is used for each encryption. If the same key is used more than once (in multiple sessions of encryption), then perfect secrecy cannot be guaranteed.

Theoretically, the one-time pad scheme is unbreakable under any cryptanalysis (as long as the key is uniformly chosen every time). When the key is reused, the resulting scheme is sometimes called a *two-time pad* and it is vulnerable to frequency analysis or other kinds of heuristic attacks. Notice that an adversary who obtains $c = k \oplus m$ and $c' = k \oplus m'$ can compute
$$c \oplus c' = (k \oplus m) \oplus (k \oplus m') = m \oplus m'
$$
which is the bitwise exclusive-or of the two messages.

**Theorem 2.3.** One-time pad does not yield indistinguishable multiple encryptions in the presence of an eavesdropper.

**Proof.** In a multiple-message eavesdropping experiment $\mathsf{PrivK}^\mathsf{mult}$ where a random bit $b$ is chosen, consider the following polynomial-time adversary $\mathcal{A}$:

1. $\mathcal{A}$ outputs $\vec{M}_0 = (m_{0,1}, m_{0,2}) = (\{0\}^\ell, \{0\}^\ell)$ and $\vec{M}_1 = (m_{1,1}, m_{1,2}) = (\{0\}^\ell, \{1\}^\ell)$.
2. $\mathcal{A}$ receives $\vec{C} = (c_1, c_2)$ which contains two ciphertexts.
    * If $c_1 = c_2$, $\mathcal{A}$ outputs $b' = 0$.
    * Otherwise, $\mathcal{A}$ outputs $b' = 1$.

Let $k$ be the reused key. It is known that $k \oplus m_{0,1} = k \oplus m_{0,2}$ and $k \oplus m_{1,1} \neq k \oplus m_{1,2}$. Clearly, $c_1 = c_2$ if and only if $b=0$, otherwise $b=1$. Therefore, the adversary $\mathcal{A}$ will output $b'=b$ correctly with probability $1$.
[QED]

**Theorem 2.4.** One-time pad is not CPA-secure.

**Proof.** Given any pair of plaintext and ciphertext $(m, c)$, the adversary computes
$$m \oplus c = m \oplus (k \oplus m) = k
$$
which is the key.
[QED]

As shown by Theorem 2.4, it is extremely simple to recover the key used in one-time pad under any attack where an attacker can obtain the plaintext and the ciphertext at the same time (e.g., KPA, CPA, CCA). However, this is rarely a concern in reality, since the one-time key is never supposed to be reused.
