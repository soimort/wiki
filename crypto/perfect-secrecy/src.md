% Perfect Secrecy
% Mort Yao
% 2016-12-29

**Definition 1. (Perfect secrecy)** An encryption scheme $\Pi=(\mathsf{Gen},\mathsf{Enc},\mathsf{Dec})$ with message space $\mathcal{M}$ is said to be *perfectly secret* if for every probability distribution over $\mathcal{M}$, every message $m \in \mathcal{M}$ and every ciphertext $c \in \mathcal{C}$ ($\Pr[C=c] > 0$), it holds that
$$\Pr[M=m | C=c] = \Pr[M=m]$$

**Definition 2.** An encryption scheme $\Pi=(\mathsf{Gen},\mathsf{Enc},\mathsf{Dec})$ with message space $\mathcal{M}$ is perfectly secret if for every $m, m' \in \mathcal{M}$ and every ciphertext $c \in \mathcal{C}$,
$$\Pr[\mathsf{Enc}_K(m) = c] = \Pr[\mathsf{Enc}_K(m') = c]$$
where the probabilities are over the choice of $K$ and the randomness of $\mathsf{Enc}$.

**Lemma 3.** Definition 2 is equivalent to Definition 1.

**Proof.**

**i. ($\Rightarrow$)**
Fix a distribution over $\mathcal{M}$, a message $m$ and a ciphertext $c$ for which $\Pr[C=c] > 0$.

Note that if $\Pr[M=m] = 0$, we immediately have
$$\Pr[M=m | C=c] = 0 = \Pr[M=m]$$

If $\Pr[M=m] > 0$, there is
$$\Pr[C=c | M=m] = \Pr[\mathsf{Enc}_K(M)=c | M=m] = \Pr[\mathsf{Enc}_K(m)=c]$$

Note that given Definition 2, for any $m' \in \mathcal{M}$, it holds that $\Pr[\mathsf{Enc}_K(m')=c] = \Pr[C=c | M=m'] = \Pr[\mathsf{Enc}_K(m)=c] = \Pr[C=c | M=m]$. Using Bayes' Theorem:
\begin{align*}
\Pr[M=m | C=c] &= \frac{\Pr[C=c | M=m] \cdot \Pr[M=m]}{\Pr[C=c]} \\
&= \frac{\Pr[C=c | M=m] \cdot \Pr[M=m]}{\sum_{m' \in \mathcal{M}}\Pr[C=c | M=m'] \cdot \Pr[M=m']} \\
&= \frac{\Pr[M=m]}{\sum_{m' \in \mathcal{M}} \Pr[M=m']} \\
&= \frac{\Pr[M=m]}{1} \\
&= \Pr[M=m]
\end{align*}

that is, Definition 1 holds if Definition 2 holds.

**ii. ($\Leftarrow$)**
Given Definition 1, for every distribution on $\mathcal{M}$, we have
$$\Pr[M=m | C=c] = \Pr[M=m]$$

for all $m \in \mathcal{M}$ and all $c \in \mathcal{C}$ for which $\Pr[C=c] > 0$.

Note that
$$\Pr[M=m] = \frac{\Pr[M=m]}{\sum_{m' \in \mathcal{M}} \Pr[M=m']}$$

Also by Bayes' Theorem:
\begin{align*}
\Pr[M=m | C=c]
&= \frac{\Pr[C=c | M=m] \cdot \Pr[M=m]}{\Pr[C=c]} \\
&= \frac{\Pr[C=c | M=m] \cdot \Pr[M=m]}{\sum_{m' \in \mathcal{M}}\Pr[C=c | M=m'] \cdot \Pr[M=m']}
\end{align*}

For the equation in Definition 1 to hold, it must hold true that
$$\Pr[C=c | M=m] = \Pr[C=c | M=m']$$

for any value of $m'$, and $\Pr[M=m] \neq 0$.

Therefore,
\begin{align*}
\Pr[\mathsf{Enc}_K(m)=c] = \Pr[C=c | M=m]
&= \Pr[C=c | M=m'] \\
&= \Pr[\mathsf{Enc}_K(m')=c]
\end{align*}

that is, Definition 2 holds if Definition 1 holds.

[QED]

**Adversarial indistinguishability experiment $\mathsf{PrivK}_{\mathcal{A},\Pi}^\mathsf{eav}$:**

1. The adversary $\mathcal{A}$ outputs a pair of messages $m_0, m_1 \in \mathcal{M}$.
2. A key $k$ is generated using $\mathsf{Gen}$ and a uniformly random bit $b \in \{0,1\}$ is chosen; both are unknown to $\mathcal{A}$. A ciphertext $c \leftarrow \mathsf{Enc}_k(m_b)$ (called the *challenge ciphertext*) is computed and given to $\mathcal{A}$.
3. $\mathcal{A}$ outputs a bit $b'$.
4. If $b'=b$, the output of the experiment is defined to be $\mathsf{PrivK}_{\mathcal{A},\Pi}^\mathsf{eav} = 1$ ($\mathcal{A}$ *succeeds* in the game); otherwise, it is defined to be 0 ($\mathcal{A}$ *fails* in the game).

**Definition 4. (Perfect indistinguishability)** An encryption scheme $\Pi=(\mathsf{Gen},\mathsf{Enc},\mathsf{Dec})$ with message space $\mathcal{M}$ is said to be *perfectly indistinguishable* if for every $\mathcal{A}$, it holds that
$$\Pr\left[ \mathsf{PrivK}_{\mathcal{A},\Pi}^\mathsf{eav} = 1 \right] = \frac{1}{2}$$

Clearly, any adversary can succeed in the game with probability $\frac{1}{2}$ by making a random guess on the unknown bit $b$. Intuitively, the definition of perfect indistinguishability says that no adversary can do better than this.

**Lemma 5.** Definition 3 (perfect indistinguishability) is equivalent to Definition 1 (perfect secrecy).

**Theorem 6.** By redefining the key space, we can assume that any encryption scheme $\Pi=(\mathsf{Gen},\mathsf{Enc},\mathsf{Dec})$ with message space $\mathcal{M}$ satisfies

(1) $\mathsf{Gen}$ chooses a key uniformly at random from the key space.
(2) $\mathsf{Enc}$ is deterministic.

without changing $\Pr[C=c | M=m]$ for any $m,c$.

**Theorem 7.** If $\Pi=(\mathsf{Gen},\mathsf{Enc},\mathsf{Dec})$ is a perfectly secret encryption scheme with message space $\mathcal{M}$ and key space $\mathcal{K}$, then it must hold that
$$|\mathcal{K}| \geq |\mathcal{M}|$$

Theorem 7 shows an important inherent limitation of perfect secrecy: For any encryption scheme to be perfectly secret ("theoretically unbreakable"), it *must* have a key space which is no smaller than the message space. In other words, assume that both the key and the message are encoded as binary strings, the key should be a uniform binary string which is (at least) as long as the message to be encrypted.

**Theorem 8. (Shannon's theorem)** Let $\Pi=(\mathsf{Gen},\mathsf{Enc},\mathsf{Dec})$ be an encryption scheme with message space $\mathcal{M}$ and key space $\mathcal{K}$, for which $|\mathcal{M}| = |\mathcal{K}| = |\mathcal{C}|$. The scheme is perfectly secret if and only if:

1. Every $k \in \mathcal{K}$ is chosen by $\mathsf{Gen}$ with the same probability $\frac{1}{|\mathcal{K}|}$.
2. For every $m \in \mathcal{M}$ and every $c \in \mathcal{C}$, there exists a unique key $k \in \mathcal{K}$ such that $\mathsf{Enc}_k(m)$ outputs $c$.

**Practical construction.** A practical construction of perfectly secret encryption schemes is called the [one-time pad (OTP)](/crypto/one-time-pad/). It is easy to verify that the two conditions specified in Shannon's theorem are satisfied by the one-time pad.
