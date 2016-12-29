% Principles of Modern Cryptography
% Mort Yao
% 2016-12-29

**Private-key encryption scheme**. A *private-key encryption scheme* is defined by specifying a message space along with three [algorithms](/comp/algorithm/):

1. The *message space* $\mathcal{M}$, which is the set of all possible messages (plaintexts).
2. The *key-generation algorithm* $\mathsf{Gen}$, which is a (probabilistic) algorithm that chooses a key $k \in \mathcal{K}$ (where $\mathcal{K}$ is said to be the *key space*) according to some distribution.
3. The *encryption algorithm* $\mathsf{Enc}$, which takes as input a key $k$ and a message $m \in \mathcal{M}$ and outputs a ciphertext $c \leftarrow \mathsf{Enc}_k(m)$.
4. The *decryption algorithm* $\mathsf{Dec}$, which takes as input a key $k$ and a ciphertext $c$ and outputs a plaintext $m := \mathsf{Dec}_k(c)$.

Furthermore, an encryption scheme must satisfy the correctness requirement: for every $k \in \mathcal{K}$ and every $m \in \mathcal{M}$, it holds that
$$\mathsf{Dec}_k(\mathsf{Enc}_k(m)) = m$$

**Encoding**. Most of the time, we assume that all messages are encoded as binary strings. Thus, $\mathcal{M} \subseteq \{0,1\}^*$.

**Deterministic or probabilistic algorithms.** Clearly, the decryption algorithm $\mathsf{Dec}$ should be deterministic, since the recipient party expects that a message can be decrypted deterministically and unambiguously.

The encryption algorithm $\mathsf{Enc}$ can be either deterministic or probabilistic. However, without loss of generality, any encryption scheme with a probabilistic $\mathsf{Enc}$ can be transformed into a scheme with a deterministic one without degrading the level of security, by redefining the key space $\mathcal{K}$. This will be shown later.

**Uniform key selection**. Without loss of generality, we assume that $\mathsf{Gen}$ chooses the key $k \in \mathcal{K}$ uniformly. It can be shown that any encryption scheme can be transformed into a scheme with $\mathsf{Gen}$ such that a uniform key is always chosen without degrading the level of security, by redefining the key space $\mathcal{K}$. It is important that $\mathsf{Gen}$ must be probabilistic, that is, the selection of the key must involve some randomness. This will also be shown later.

**Kerckhoffs' principle (Shannon's maxim)**. A cryptosystem should remain secure even if everything about the system, except the key, is public knowledge. In other words, we should assume that the adversaries always have full knowledge of the encryption scheme $\Pi=(\mathsf{Gen},\mathsf{Enc},\mathsf{Dec})$ that is being used ("The enemy knows the system") but not the actual key $k$.

**Security through obscurity**. In contrast to Shannon's maxim, "security through obscurity" means that the security of a cryptosystem can partially or even fully rely on the secrecy of the encryption scheme. This is not an advisable way for maintaining security in modern cryptography, for mainly two reasons:

1. It is relatively more involved to keep the whole scheme (which consists of three algorithms) secret, especially during the secret sharing process between trusted parties. Meanwhile, sharing a single key and keeping it secret are much easier.
2. Once the secret scheme is leaked, there would be no proper fix other than changing the whole scheme. Meanwhile, if the security of the cryptosystem solely relies on the key, one can simply change the key and notify the other party; this process is also much easier to implement.
