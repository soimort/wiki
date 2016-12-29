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
