% Shift Cipher
% Mort Yao
% 2017-01-01

# Construction

Assume that all data are encoded using the alphabet $\Sigma = \{0,\dots,n-1\}$ (where $n$ is the length of the alphabet).

**Shift cipher (Caesar cipher).** Given $\ell \in \mathbb{Z}^+$ which is the fixed length of the plaintext, define the following encryption scheme $\Pi=(\mathsf{Gen},\mathsf{Enc},\mathsf{Dec})$:

* Message space $\mathcal{M} = \{0,\dots,n-1\}^\ell$.
* Key space $\mathcal{K} = \{0,\dots,n-1\}$.
* Ciphertext space $\mathcal{C} = \{0,\dots,n-1\}^\ell$.
* $\mathsf{Gen}$ outputs a key $k \in \mathcal{K}$ according to the uniform distribution.
* $\mathsf{Enc}$ takes as input a key $k \in \mathcal{K}$ and a message $m \in \mathcal{M}$, and outputs the ciphertext
$$\mathsf{Enc}_k(m_1 \dots m_\ell) = c_1 \dots c_\ell \textrm{, where } c_i := [(m_i+k) \operatorname{mod} n].$$
* $\mathsf{Dec}$ takes as input a key $k \in \mathcal{K}$ and a ciphertext $c \in \mathcal{C}$, and outputs the message
$$\mathsf{Dec}_k(c_1 \dots c_\ell) = m_1 \dots m_\ell \textrm{, where } m_i := [(c_i-k) \operatorname{mod} n].$$

Since modulo arithmetic is associative:
\begin{align*}
(m_i + k) - k &\equiv m_i + (k - k) \\
&\equiv m_i \pmod n
\end{align*}
this encryption scheme satisfies the correctness requirement.

# Secrecy and Cryptanalysis

Notice that $|\mathcal{K}| = n$, $|\mathcal{M}| = n^\ell$. If $|\mathcal{K}| < |\mathcal{M}|$, then the scheme cannot be perfectly secret.

**Theorem 2.1.** Shift cipher is not perfectly secret when $\ell > 1$.

**Possible cryptanalysis:** Frequency analysis.
