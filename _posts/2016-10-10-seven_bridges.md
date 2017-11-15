---
layout: default
title:  "The Seven Bridges of Könisgberg"
date:   2016-10-10
---
{::options auto_ids="false" /}

{:.postHeader}
# The Seven Bridges of Könisgberg

{:.postTagline}
## All these bridges and I still can't get over it

<!--excerpt.start-->
In 1735 the city of Königsberg, Prussia  (now Kalinigrad, Russia) was set on both sides of the Pregel River. The river divided Königsberg into four regions with seven bridges connecting the regions.

**The Problem**: Can you find a path that allows you to walk around the city, crossing each of the seven bridges only once?

{:.centerImages}
![bridge](../../../assets/images/imgPost/koingsberg.png)

{:.captions}
[The City of Könisgberg](https://en.wikipedia.org/wiki/Seven_Bridges_of_K%C3%B6nigsberg)
<!--excerpt.end-->

**[Spoiler Alert] The Answer**:  It is impossible. There is no path in Königsberg that allows you to walk around the city using each bridge only once.

**The Proof**: You can simply show that one path doesn’t work, with some pencil and paper. However, showing that all paths do not work requires a bit more mathematical rigor. In 1736, Leonhard Euler provided a solution to the seven bridges problem and a general solution for any number of bridges with any number of regions.

Looking at Figure 2, consider each of the four regions of Königsberg a Vertex \\((v)\\) and each bridge an Edge \\((E)\\). Counting the number of Edges that touch a Vertex provides the Degree \\((deg(v))\\). In Königsberg, we see that degree of every vertex is odd.

$$
  \begin{align}
  deg(A) = 5\\
  deg(B,C,D) = 3\\
  \end{align}
$$

In order to to cross each bridge once and only once, the number of vertices of an odd degree must be zero or two. If there are two vertices with an odd degree, then those vertices are your starting and ending points. These are the conditions that make up an Euler Path, which is a continuous path that passes through every edge once and only once.

{:.centerImages}
![diagram_bridges](../../../assets/images/imgPost/diagrambridges.png)

{:.captions}
[Euler's Representation](http://physics.weber.edu/carroll/honors/konigsberg.htm)

The Seven Bridges of Königsberg do not meet the conditions for a Euler Path. However, if one of the bridges is removed (consider the removal of bridge b in Figure 2), then the degree of vertices A and B become even \\(deg(A,B) = 2\\). Vertices C and D remain odd, leaving these as your starting and ending points for the Euler Path.

>“…this type of solution bears little relationship to mathematics, and I do not understand why you expect a mathematician to produce it, rather than anyone else, for the solution is based on reason alone, and its discovery does not depend on any mathematical principle. Because of this, I do not know why even questions which bear so little relationship to mathematics are solved more quickly by mathematicians than by others.”\\
\\
> – Leonhard Euler, 1736

Euler should have been one to know mathematicians love a good puzzle, no matter how simple. Even though Euler found the problem trivial, he provided a general solution to the problem for any number of bridges or regions and kicked off an entirely new branch of mathematics called Graph Theory.

The Seven Bridges of Königsberg no longer exist today. Two of the seven bridges were lost in the bombing of Königsberg in WWII and two more were replaced by a highway, leaving only three bridges and an Eulerian path that is now possible.

Alright so edges, vertices, degrees, graphs and a solution to a trivial question leaves us with the humble beginnings of Graph Theory. Why do we care? Graph Theory makes up many modern day technologies. Providing your GPS with the ability to find the shortest path home, ranking the relevance of the links in your Google searches, even making up the topology of the circuits in just about every electronic device.

All these bridges and I still can’t get over it. Thanks for reading! If you’re interested in learning more about Eulerian paths or Graph Theory I’ve provided some links below with the reference material that I used to put this together and resources for going further.

[Mathematical Association of America](https://www.maa.org/press/periodicals/convergence/leonard-eulers-solution-to-the-konigsberg-bridge-problem)\\
[Google and Pregel](https://research.googleblog.com/2009/06/large-scale-graph-computing-at-google.html)\\
[NRICH](https://nrich.maths.org/2327)\\
[Graph Theory](https://www.cs.cmu.edu/~adamchik/21-127/lectures/graphs_1_print.pdf)
