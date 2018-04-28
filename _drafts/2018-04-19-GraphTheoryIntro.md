---
layout: default
title:  "Introduction to Graph Theory (1/4)"
date:   2018-04-19
---
{::options auto_ids="false" /}

{:.postHeader}
# Introduction to Graph Theory (1/4)

<!--excerpt.start-->
  In 2016 I wrote the very first entry for this blog: [The Seven Bridges of Könisgberg](https://sarahawilson.github.io/2016/10/10/seven_bridges.html). This post described the question that kicked off the branch of mathematics known today as Graph Theory. Graph theory comes into play in many real world applications and graph problems pervade computer science. This is part one in a four part series on the algorithms that work with graphs. Let's get down to the basics!
<!--excerpt.end-->

# [](#header-1) Review of Graphs

{:.centerImages}
![General Graph](../../../assets/images/imgPost/GraphImages/Gen_Graph.svg)

This is a graph. The points where the lines intersect is a Vertex \\((V)\\) and the lines connecting the points are Edges \\((E)\\).

Mathematically we define a graph as \\(G = (V,E)\\). The graph \\((G)\\) is made up of the ordered pair (V,E). V is the set of all vertices inside the graph. E is the set of all edges in the graph.\\

\\( \\{ x \\} \\)


\\(V = \\{ v1, v2, v3 ... vn \\}\\)
\\(E = \\{ \\{ v1,v2 \\} , \\{ v1,v3 \\} , \\{ v2,v3 \\} ... vn \\} \\)

Counting the number of Edges that touch a Vertex provides the Degree \\((deg(V))\\).

Directed vs undirected graphs. Explanation HERE.
There are many other styles of graphs but I'll stick to these two types for now.

ADD NEW CUSTOM CSS HERE FOR SIDE BY SIDE IMAGES

{:.centerImages}
![Undirected Graph](../../../assets/images/imgPost/GraphImages/Undirected_Graph.svg)

{:.centerImages}
![Undirected Graph](../../../assets/images/imgPost/GraphImages/Directed_Graph.svg)

# [](#header-1) How Computers Can Represent Graphs
The three most commons ways a computer can represent a graph are edge lists, adjacency lists and adjacency matrices. All ways can be used to represent directed and undirected graphs. Each representation has it's own unique advantages and which representation to use depends on the application.

Let's take a slight detour and talk about what metrics can be used when comparing the three computer representations of graphs. A key concept in computer science is run time. How long do computations take to complete? Am I going to be waiting a few milliseconds for results or should I come back after 6 hours? How code is written and how data is represented in a computer can have a big impact on run time. Such a big impact it has it's own notation. Big O notation.

Big O notation. (BIG OOOOO)

# [](#header-2) Edge List

# [](#header-2) Adjacency List
Adjacency lists typically are used to represent sparse graphs. Spare graphs are those for which \\((E) << (V^2)\\) - when there are far less edges than vertices.

# [](#header-2) Adjacency Matrix
Adjacency matrices are typically used to represent dense graphs. Dense graphs are those for which \\((E) ~= (V^2)\\) - when the number of edges is close to the number of vertices. One small advantage of the adjacency matrix representation is that it is easy to quickly see if there is an edge is connecting two vertices.

If an adjacency matrix is symmetric than the graph is undirected.
If an adjacency matrix is NOT symmetric than the graph is directed.


INSERT SIDE BY SIDE IMAGE HERE OF ADJACENCY LIST / ADJACENCY MATRIX
