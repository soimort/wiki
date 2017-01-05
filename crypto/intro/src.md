% Principles of Modern Cryptography
% Mort Yao
% 2017-01-05

**Private-key encryption scheme**. A *private-key encryption scheme* $\Pi = (\mathsf{Gen}, \mathsf{Enc}, \mathsf{Dec})$ is defined by specifying a message space along with three [algorithms](/comp/algorithm/):

* The *message space* $\mathcal{M}$, which is the set of all possible messages (plaintexts).
* The *key-generation algorithm* $\mathsf{Gen}$, which is a (probabilistic) algorithm that chooses a key $k \in \mathcal{K}$ (where $\mathcal{K}$ is said to be the *key space*) according to some distribution.
* The *encryption algorithm* $\mathsf{Enc}$, which takes as input a key $k$ and a message $m \in \mathcal{M}$ and outputs a ciphertext $c \leftarrow \mathsf{Enc}_k(m)$.
* The *decryption algorithm* $\mathsf{Dec}$, which takes as input a key $k$ and a ciphertext $c$ and outputs a plaintext $m := \mathsf{Dec}_k(c)$.

Furthermore, an encryption scheme must satisfy the correctness requirement: for every $k \in \mathcal{K}$ and every $m \in \mathcal{M}$, it holds that
$$\mathsf{Dec}_k(\mathsf{Enc}_k(m)) = m$$

**Encoding**. Most of the time, we assume that all messages are encoded as binary strings. Thus, $\mathcal{M} \subseteq \{0,1\}^*$.

**Deterministic or probabilistic algorithms.** Clearly, the decryption algorithm $\mathsf{Dec}$ should be deterministic, since the recipient party expects that a message can be decrypted deterministically and unambiguously.

The encryption algorithm $\mathsf{Enc}$ can be either deterministic or probabilistic. However, without loss of generality, any encryption scheme with a probabilistic $\mathsf{Enc}$ can be transformed into a scheme with a deterministic one without degrading the level of security, by redefining the key space $\mathcal{K}$. This will be shown later.

**Uniform key selection**. Without loss of generality, we assume that $\mathsf{Gen}$ chooses the key $k \in \mathcal{K}$ uniformly. It can be shown that any encryption scheme can be transformed into a scheme with $\mathsf{Gen}$ such that a uniform key is always chosen without degrading the level of security, by redefining the key space $\mathcal{K}$. It is important that $\mathsf{Gen}$ must be probabilistic, that is, the selection of the key must involve some randomness. This will also be shown later.

**Kerckhoffs' principle (Shannon's maxim)**. A cryptosystem should remain secure even if everything about the system, except the key, is public knowledge. In other words, we should assume that the attackers always have full knowledge of the encryption scheme $\Pi=(\mathsf{Gen},\mathsf{Enc},\mathsf{Dec})$ that is being used ("The enemy knows the system") but not the actual key $k$.

**Security through obscurity**. In contrast to Shannon's maxim, "security through obscurity" means that the security of a cryptosystem can partially or even fully rely on the secrecy of the encryption scheme. This is not an advisable way for maintaining security in modern cryptography, for mainly two reasons:

1. It is relatively more involved to keep the whole scheme (which consists of three algorithms) secret, especially during the secret sharing process between trusted parties. Meanwhile, sharing a single key and keeping it secret are much easier.
2. Once the secret scheme is leaked, there would be no proper fix other than changing the whole scheme. Meanwhile, if the security of the cryptosystem solely relies on the key, one can simply change the key and notify the other party; this process is also much easier to implement.

**Principles of modern cryptography**:

1. *Formal definition of security*: A ciphertext should leak absolutely no information about the underlying plaintext, regardless of how much information an attacker already has.
2. *Minimal assumptions*: For example, if we can make the assumption that solving a mathematical problem is computationally hard and that decrypting a ciphertext is equivalent to solving that problem, then it is possible to define a notion of security based on the difficulty of some computation. Note that most modern cryptographic constructions cannot be proven secure unless such assumptions are preconceived.
3. *Rigorous mathematical proofs of security*.

**Common threat models**:

1. *Ciphertext-only attack*, where an attacker knows nothing more than the ciphertext.
2. *Known-plaintext attack* (KPA), where an attacker is able to obtain the encrypted ciphertext for some known, given plaintext.
3. *Chosen-plaintext attack* (CPA), where an attacker is able to obtain the encrypted ciphertext for some plaintext of their choice.
4. *Chosen-ciphertext attack* (CCA), where an attacker is able to obtain the decrypted plaintext for some ciphertext of their choice.
