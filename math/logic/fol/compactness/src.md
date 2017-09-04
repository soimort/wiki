% Compactness
% Mort Yao
% 2017-09-04

**Theorem 1. (Compactness Theorem)**

(a) If $\Gamma \models \varphi$, then for some finite $\Gamma_0 \subseteq \Gamma$ we have $\Gamma_0 \models \varphi$.
(b) If every finite subset $\Gamma_0$ of $\Gamma$ is satisfiable, then $\Gamma$ is satisfiable.

*Proof.*

(a)
\begin{align*}
\Gamma \models \varphi &\implies \Gamma \vdash \varphi \\
&\implies \Gamma_0 \vdash \varphi \text{ for some finite } \Gamma_0 \subseteq \Gamma \text{, deductions being finite} \\
&\implies \Gamma_0 \models \varphi
\end{align*}

(b) If every finite subset $\Gamma_0$ of $\Gamma$ is satisfiable, then by soundness $\Gamma_0$ is consistent. Thus $\Gamma$ is consistent (since deductions are finite). By completeness, $\Gamma$ is also satisfiable.

\Qed
