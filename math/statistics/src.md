% Basic Statistics
% Mort Yao
% 2017-01-08

Basic probability theory and statistics:

* Michael Mitzenmacher and Eli Upfal. ***Probability and Computing: Randomized Algorithms and Probabilistic Analysis***.
* Michael Baron. ***Probability and Statistics for Computer Scientists, 2nd edition***.

---

Statistics applies tools of the probability theory to the study of data (either a *sample* or the *population*):

* *Descriptive statistics* quantitatively describe or summarize features of a sample.
* *Inferential statistics* use random sample data to infer properties about a larger population.



# Descriptive Statistics

To describe a sample (data set) quantitatively, three kinds of measures are commonly used: central tendency (often in connection with the first raw moment), dispersion / variability (often in connection with the second central moment) and shape (often in connection with higher-order central moments or cumulants).

## Central Tendency

**Arithmetic mean (AM, $\mu$).** Sum of values of a data set divided by number of values:
$$\mu = \bar{x} = \frac{1}{n} \sum_{i=1}^n x_i$$
Example: Given data set $\{1,2,2,3,4,7,9\}$, the arithmetic mean is $\mu = \frac{1+2+2+3+4+7+9}{7} = 4$.

**Remark 1.1.1. (Difference between arithmetic mean and expectation)** Note that although the formula of an arithmetic mean looks similar to the one of a mathematical expectation in probability theory, arithmetic mean is defined on a given sample (data set), while expectation is defined on a random variable with a given probability distribution. Moreover, arithmetic mean is generally unweighted.

**Median ($\nu)$.** Middle value separating the greater and lesser halves of a data set.
Example: Given data set $\{1,2,2,3,4,7,9\}$, the median is $\nu = 3$.

**Mode ($\theta$).** Most frequent value in a data set.
Example: Given data set $\{1,2,2,3,4,7,9\}$, the mode is $\theta = 2$.

**Mid-range.** The arithmetic mean of the maximum and minimum values in a data set.
Example: Given data set $\{1,2,2,3,4,7,9\}$, the midrange is $\frac{9+1}{2} = 5$.

Values far from the mode are called *outliers*, such as very infrequent, occasional or false experimental data records. The mode and the median are relatively robust in the presence of outliers, while the arithmetic mean is rather sensitive. The mid-range is extremely sensitive to the values of outliers, thus it is rarely used in practical statistical analysis as it fails to provide a robust estimator for most distributions of interest.

For an arbitrary distribution, the arithmetic mean $\mu$, the median $\nu$ and the mode $\theta$ may appear in any order.

Besides the arithmetic mean, other means of measuring a data set are also defined:

**Geometric mean (GM).** Defined as $\left(\prod_{i=1}^n x_i \right)^\frac{1}{n}$.

**Harmonic mean (HM).** Defined as $\frac{n}{\sum_{i=1}^n \frac{1}{x_i}}$. (Related to the harmonic series $\sum_{n=1}^\infty \frac{1}{n}$.)

Arithmetic mean (AM), geometric mean (GM) and harmonic mean (HM) are sometimes referred to as *Pythagorean means*, which are special cases of the *generalized mean*:

**Generalized mean (power mean; Hölder mean).** Given $x_1,\dots,x_n \in \mathbb{R}^+$, and $w_1,\dots,w_n \in \mathbb{R}$ with $\sum_{i=1}^n w_i = 1$. For $p \in \mathbb{R}, p \neq 0$, the generalized mean with exponent $p$ of $\{x_1,\dots,x_n\}$ weighted by $\{w_1,\dots,w_n\}$ is defined as
$$\operatorname{M}_p (x_1,\dots,x_n) = \left( \sum_{i=1}^n w_i x_i^p \right)^\frac{1}{p}$$
For $p = 0$, we assume that it is equal to the geometric mean (which is the limit of means with exponents approaching zero):
$$\operatorname{M}_0 (x_1,\dots,x_n) = \lim_{p \to 0} \operatorname{M}_{p}(x_1,\dots,x_n) = \prod_{i=1}^n x_i^{w_i}$$
The unweighted means correspond to setting all $w_i = \frac{1}{n}$.

We can redefine Pythagorean means using the generalized mean with different parameters $p$:

* (Harmonic mean, $p=-1$) $\operatorname{HM}(x_1,\dots,x_n) = \operatorname{M}_{-1}(x_1,\dots,x_n) = \frac{n}{\sum_{i=1}^n \frac{1}{x_i}}$.
* (Geometric mean, $p=0$) $\operatorname{GM}(x_1,\dots,x_n) = \operatorname{M}_{0}(x_1,\dots,x_n) = \left(\prod_{i=1}^n x_i \right)^\frac{1}{n}$.
* (Arithmetic mean, $p=1$) $\operatorname{AM}(x_1,\dots,x_n) = \operatorname{M}_{1}(x_1,\dots,x_n) = \frac{1}{n} \sum_{i=1}^n x_i$.

**Theorem 1.1.2. (Generalized mean inequality)** If $p, q \in \mathbb{R}$ and $p < q$, then
$$\operatorname{M}_p(x_1,\dots,x_n) \leq \operatorname{M}_q(x_1,\dots,x_n)$$
The equality holds if and only if $x_1 = \dots = x_n$ ($= \operatorname{M}_p(x_1,\dots,x_n)$).

## Dispersion / Variability

**Minimum (first or smallest order statistic).** The smallest value in the data set. Defined using the generalized mean:
$$\operatorname{min}\{x_1,\dots,x_n\} = \operatorname{M}_{-\infty}(x_1,\dots,x_n)$$

**Maximum (largest order statistic).** The largest value in the data set. Defined using the generalized mean:
$$\operatorname{max}\{x_1,\dots,x_n\} = \operatorname{M}_{+\infty}(x_1,\dots,x_n)$$

**Range.** The size of the smallest interval which contains all the data; it is equal to the difference between the maximum and minimum:
$$\operatorname{Range}\{x_1,\dots,x_n\} = \operatorname{max}\{x_1,\dots,x_n\} - \operatorname{min}\{x_1,\dots,x_n\}$$
Intuitively, the range provides a naïve indication of statistical dispersion of the data set.

**Remark 1.2.1. (Difference between range and support)** Recall that the support of a given probability distribution is the closure of the set of all possible values of a random variable having that distribution. The range is defined for a sample (data set), and does not necessarily include every possible value of the population.

**Interquartile range (IQR; mid-spread; H-spread).** The difference between the 75th and the 25th percentiles (i.e., the 3rd and the 1st quartiles).

Unlike the regular (full) range, the IQR is a 25%-trimmed estimator thus it is more robust in the presence of outliers.

**Maximum absolute deviation.** Defined as
$$\max_i |x_i - m|$$
where $m$ can take the value of any chosen measure of central tendency of the data set (e.g., the mean $\mu$ or the median $\nu$).

**Mean absolute deviation (MAD; average absolute deviation).** Defined as
$$\frac{1}{n} \sum_{i=1}^n |x_i - m|$$
where $m$ can take the value of any chosen measure of central tendency of the data set (e.g., the mean $\mu$ or the median $\nu$).

Clearly, the MAD is a more robust measure of dispersion than the maximum absolute deviation, which is highly sensitive to the values of outliers.

**Sample variance.** The (unbiased) sample variance $s^2$ is an unbiased estimator of the population variance $\sigma^2$:
$$s^2 = \frac{n}{n-1}s_n^2 = \frac{1}{n-1} \sum_{i=1}^n (x_i - \bar{x})^2$$
$s$ is also called the **sample standard deviation**.

**Remark 1.2.2. (Bessel's correction)** The use of the term $n-1$ instead of $n$ is called Bessel's correction. It corrects the bias in the estimation of the population variance; however, it often increases the mean squared error (MSE) in these estimations. $\bar{x}$ in this formula should be interpreted as the sample (arithmetic) mean. When the population mean is already known, there is no need to use Bessel's correction, since the use of the population mean will not lead to any bias for estimating the population variance.

**Coefficient of variation (CV; relative standard deviation).** The coefficient of variation is defined as the ratio of the sample standard deviation $s$ to the sample mean $\bar{x}$:
$$\widehat{c_{\rm v}} = \frac{s}{\bar{x}}$$
Note that this is a biased estimator. The correction varies for different distributions of data.

**Index of dispersion (coefficient of dispersion; relative variance; variance-to-mean ratio; VMR).** Defined as
$$\widehat{D} = \frac{s^2}{\bar{x}}$$

CV and VMR are normalized values of the sample standard deviation and the sample variance respectively, thus they are also called the relative standard deviation and the relative variance, and are only defined when the sample mean $\bar{x}$ is non-zero.

## Shape

**Sample skewness.** Defined as
$$g_1 = \frac{m_3}{m_2^{3/2}} = \frac{\frac{1}{n} \sum_{i=1}^n (x_i - \bar{x})^3}{(\frac{1}{n} \sum_{i=1}^n (x_i - \bar{x})^2)^{3/2}}$$
where $m_i$ is the $i$th sample central moment. Note that this is a biased estimator.

In practice, sample skewness is a measure of the asymmetry of the distribution of a data set about its mean. The skewness of any univariate normal distribution is 0 (symmetric).

**Sample excess kurtosis.** Defined as
$$g_2 = \frac{m_4}{m_2^2} - 3 = \frac{\frac{1}{n} \sum_{i=1}^n (x_i - \bar{x})^4}{(\frac{1}{n} \sum_{i=1}^n (x_i - \bar{x})^2)^2} - 3$$
where $m_i$ is the $i$th sample central moment. Note that this is a biased estimator.

In practice, larger sample kurtosis indicates that the data set has more extreme outliers, so there could be a problem with sampling. The kurtosis of any univariate normal distribution is 3 (thus the sample excess kurtosis should be ideally close to 0).

## Correlation



# Inferential Statistics



---

Related topics:

* [Probability](/math/probability/)
* [Information theory](/info/)
