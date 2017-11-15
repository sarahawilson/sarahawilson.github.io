---
layout: default
title:  "One, Plus, Minus and Infinity"
date:   2016-10-17
---
{::options auto_ids="false" /}

{:.postHeader}
# One, Plus, Minus and Infinity

{:.postTagline}
## … It never ends.
<!--excerpt.start-->
**The Problem**: What does \\(1 – 1 + 1 – 1 + 1 …\\) equal?

Write down your answer and save it for later, I’m about to bend your brain.
<!--excerpt.end-->

$$
  \begin{align}
  1 – 1 + 1 – 1 + 1 – 1… = \text{ ?    [1] }
  \end{align}
$$

For those of you not familiar with mathematical notation the … at the end of [1] means that the pattern continues until infinity. You are subtracting and adding 1’s an infinite number of times.

**The Answers:**

**Case 1:**\\
\\(1 – 1 + 1 – 1 + 1 – 1… = 0 \\)\\
Consider grouping the numbers in the following manner:\\
\\(1 – (1 – 1) – (1 – 1) – … = 0\\)\\
\\(0 + 0 + 0 … = 0\\)

**Case 2:**\\
\\(1 – 1 + 1 – 1 + 1 – 1 … = 1\\)\\
Consider grouping the numbers in the following manner:\\
\\(1 – (1 – 1) – (1 – 1) – … = 1\\)\\
\\(1 – (0) – (0) – … = 1\\)

**Case 2a:**\\
\\(1 – 1 + 1 – 1 + 1 – 1 … = 1\\)\\
Consider grouping the numbers the following manner:\\
\\(1+(-1+1)+(-1+1) … = 1\\)\\
\\(1+0 + 0 + … =1\\)

So what’s the deal with the grouping? Isn’t throwing the parenthesis into the equation breaking some rule? The short answer, no. The way that I’m inserting the parenthesis into the equation is making use of the Associative Property of Addition: \\(a + (b + c) = (a + b) + c\\).
By this property we see that the order the addition takes place in doesn’t matter.

Taking a closer look at Case 2, one might say that I’m “changing” the order of the subtraction, and we know that the order of subtraction does matter since subtraction is not associative. There is NOT a change in the order of subtraction here. The negative gets distributed across the parenthesis first (thank you order of operations):\\
\\(1–(1 – 1)=1 +(-1+1)\\)

Case 2a doesn’t break any rules either and makes more sense when you think of the fact that subtraction is really the same as adding a negative:\\
\\(1 -1 = 1 + -1\\)

So is the answer 1 or 0? In case your brain wasn’t hurting yet, here is one more
answer.

**Case 3:**\\
\\(1 – 1 + 1 – 1 + 1 – 1 … = \frac{1}{2}\\)\\
Consider setting the series equal to a variable \\(S\\) and then subtract \\(S\\) from 1.
\\(S = 1 – 1 + 1 – 1 + 1 – 1 …\\)\\
\\(1 – S = 1 – (1 + 1 – 1 + 1 – 1) …\\)\\
Order of Operations: Distributing the Negative\\
\\(1 – S = 1 – 1 + 1 – 1 + 1 – 1 …\\)\\
On the left hand side we now see we ended up with what we started with, so we can go ahead and solve for \\(S\\).\\
\\(1 – S = S\\)\\
\\(S = \frac{1}{2}\\)\\
\\(1 – 1 + 1 – 1 + 1 – 1 … = \frac{1}{2}\\)

**The Explanation:** This infinite series is called Grandi’s Series, and the reason you can get different answers for the sum is because it is a divergent series. A divergent series means that the infinite sequence of the partial sums of the series does not have a finite limit.

$$
  \begin{align}
  \sum_{n=0}^\infty (-1)^n
  \end{align}
$$

We see that Grandi’s Series doesn’t converge to the value 1 or 0 as the number of terms in the sequence gets infinitely big, as we would expect of a convergent series. Instead, it can be both 0 and 1 and in a sense it oscillates between 0 and 1. The average of those oscillations is \\(\frac{1}{2}\\), which is why that number shows up in Case 3.

**Brain Chow:**\\
What happens if the we turned Grandi’s Series into a partial sum where n is now finite and odd?

What happens if the we turned Grandi’s Series into a partial sum where n is now finite and even?

Is infinity even or odd?

I’d tell you a joke about infinity but it never ends. As always thanks for reading! Thoughts, comments, feedback, and responses to the brain chow questions are always welcome.
