% Substitution Cipher
% Mort Yao
% 2017-01-01

# Construction

Assume that all data are encoded using the alphabet $\Sigma = \{0,\dots,n-1\}$ (where $n$ is the length of the alphabet).

**Substitution cipher.** Given $\ell \in \mathbb{Z}^+$ which is the fixed length of the plaintext, define the following encryption scheme $\Pi=(\mathsf{Gen},\mathsf{Enc},\mathsf{Dec})$:

* Message space $\mathcal{M} = \{0,\dots,n-1\}^\ell$.
* Key space $\mathcal{K} = \mathfrak{S}_\Sigma$ which is the symmetric group on $\Sigma$. (Thus $|\mathcal{K}| = n!$)
* Ciphertext space $\mathcal{C} = \{0,\dots,n-1\}^\ell$.
* $\mathsf{Gen}$ outputs a permutation (as the key) $\sigma \in \mathcal{K}$ according to the uniform distribution.
* $\mathsf{Enc}$ takes as input a key $\sigma \in \mathcal{K}$ and a message $m \in \mathcal{M}$, and outputs the ciphertext
$$\mathsf{Enc}_k(m_1 \dots m_\ell) = c_1 \dots c_\ell \textrm{, where } c_i := \sigma(m_i).$$
* $\mathsf{Dec}$ takes as input a key $\sigma \in \mathcal{K}$ and a ciphertext $c \in \mathcal{C}$, and outputs the message
$$\mathsf{Dec}_k(c_1 \dots c_\ell) = m_1 \dots m_\ell \textrm{, where } m_i := \sigma^{-1}(c_i).$$
Note that since $\sigma$ is bijective, its inverse $\sigma^{-1}$ is guaranteed to exist uniquely.

Obviously,
$$\sigma^{-1}(\sigma(m_i)) = m_i$$
thus this encryption scheme satisfies the correctness requirement.

*Remark 1.1.*
The [shift cipher](/classical/shift/) may be considered as a limited form of the substitution cipher, where the key space is merely a permutation group $\mathcal{K} < \mathfrak{S}_\Sigma$.

# Secrecy and Cryptanalysis

Notice that $|\mathcal{K}| = n!$, $|\mathcal{M}| = n^\ell$. If $|\mathcal{K}| < |\mathcal{M}|$, then the scheme cannot be perfectly secret.

**Theorem 2.1.** Substitution cipher is not perfectly secret when $\ell$ is sufficiently large (e.g., $\ell \geq n$).

**Possible cryptanalysis:** Frequency analysis.
