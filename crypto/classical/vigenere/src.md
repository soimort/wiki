% Vigenère Cipher
% Mort Yao
% 2017-01-01

# Construction

Assume that all data are encoded using the alphabet $\Sigma = \{0,\dots,n-1\}$ (where $n$ is the length of the alphabet).

**Vigenère cipher (poly-alphabetic shift cipher).** Given $\ell \in \mathbb{Z}^+$ which is the fixed length of the plaintext and $t \in \mathbb{Z}^+$ which is the fixed length of the key, define the following encryption scheme $\Pi=(\mathsf{Gen},\mathsf{Enc},\mathsf{Dec})$:

* Message space $\mathcal{M} = \{0,\dots,n-1\}^\ell$.
* Key space $\mathcal{K} = k_1 k_2 \dots k_t = \{0,\dots,n-1\}^t$.
* Ciphertext space $\mathcal{C} = \{0,\dots,n-1\}^\ell$.
* $\mathsf{Gen}$ outputs a key $k \in \mathcal{K}$ according to the uniform distribution.
* $\mathsf{Enc}$ takes as input a key $k \in \mathcal{K}$ and a message $m \in \mathcal{M}$, and outputs the ciphertext
$$\mathsf{Enc}_k(m_1 \dots m_\ell) = c_1 \dots c_\ell \textrm{, where } c_i := [(m_i+k_{[(i-1) \operatorname{mod} t] + 1}) \operatorname{mod} n].$$
* $\mathsf{Dec}$ takes as input a key $k \in \mathcal{K}$ and a ciphertext $c \in \mathcal{C}$, and outputs the message
$$\mathsf{Dec}_k(c_1 \dots c_\ell) = m_1 \dots m_\ell \textrm{, where } m_i := [(c_i-k_{[(i-1) \operatorname{mod} t] + 1}) \operatorname{mod} n].$$

($k_{[(i-1) \operatorname{mod} t] + 1}$ guarantees that for each $i$, a valid index from the range $\{1,\dots,t\}$ is selected, e.g., for $i \in \{1,1+t,1+2t,\dots\}$, $k_1$ is always used.)

*Remark 1.1.* In practice, the key length $t$ is not necessarily known (to the attacker). We fix it here as an integer so that $\mathsf{Gen}$ can choose a key uniformly from the finite key space.

# Secrecy and Cryptanalysis

Notice that $|\mathcal{K}| = n^t$, $|\mathcal{M}| = n^\ell$. If $|\mathcal{K}| < |\mathcal{M}|$, then the scheme cannot be perfectly secret.

**Theorem 2.1.** Vigenère cipher is not perfectly secret when $t < \ell$.

**Possible cryptanalysis:**

1. When the key length $t$ is known, for all $j \in \{1,\dots,t\}$, extract all sequences
$$c_j,c_{j+t},c_{j+2t}\dots$$
and apply frequency analysis.
2. When the key length is unknown, two approaches may be used to determine the key length $t$ efficiently:
    * *Kasiski's method*.
    * *Index of coincidence method*.
