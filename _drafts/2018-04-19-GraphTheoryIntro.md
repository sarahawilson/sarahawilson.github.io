---
layout: default
title:  "Introduction to Graph Theory (1/4)"
date:   2018-04-19
description: A simple introduction to graph theory. Graph theory comes into play in many real world applications and graph problems pervade computer science. This is part one in a four part series on the algorithms that work with graphs. Examines directed and undirected graphs and how computers can represent graphs.
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

Let's take a slight detour and talk about what metrics can be used when comparing the three computer representations of graphs. A key concept in computer science is run time. How long do computations take to complete? Am I going to be waiting a few milliseconds for results or should I come back after 6 hours? How code is written and how data is represented in a computer can have a big impact on run time. Such a big impact it has it's own notation, Big O notation.

# [](#header-2) Detour: Big O Notation
Big O notation is used in Computer Science to describe the performance of an algorithm, either in the run time or space (memory) by that algorithm. It always describes the worst-case scenario. Big O notation expresses runtime simply by examining how quickly the runtime grows relative to the input as the input gets arbitrarily large. This is shown in the notation by O(n), read as "Order of n". O() is the Order function and n is the size of the input.

O(1) - Means that regardless of size of the input to this algorithm or function, it will take the a constant amount of run time. Here's an example of a code snippet that has runtime of O(1).

{% highlight matlab linenos %}

{% endhighlight %}

O(n) - In this case the runtime is approximately the same as the size of the input.

I've only covered a few Big O types but below is a chart that shows a lot more algorithm / function types. With that out of the way let's hop back into the graphs.

# [](#header-2) Edge List
The edge list is the simplest way to represent a graph, it's just a list of all the edges in the graph. Looking at the undirected graph we introduced earlier it is pretty easy to write out all the edges. Notice that the order of the edges doesn't matter, just as long as they are captured. A computer can represent this graph by using a list or an array depending on which language you're using.

{:.centerImages}
![Edge List](../../../assets/images/imgPost/GraphImages/Edge_List.svg)

{:.centerImages}
![Undirected Graph](../../../assets/images/imgPost/GraphImages/Undirected_Graph.svg)

What would we do if we needed to see if vertex 3 and 2 were connected? If our edges are displayed in an edge list we would have to go looking through every edge until we found the one connecting vertex 3 and 2. Not a big deal for our small graph, a function to do this would be pretty quick, but again this graph could have been represented with this edge at any index, so we could have found a match at the first index or at the last index. Here's some code that shows this process, for our graph.

{% highlight matlab linenos %}

{% endhighlight %}

Now what if we had a graph with a large amount of edges? How long would this edge search algorithm take to find the one edge we are looking for? In Big O terms it would take O(E) runtime. This is because regardless of where that edge might be in the list, in the worst case we still need to search through ALL the edges to find the one we are looking for. For graphs with a lot edges the runtime would be enormous. Remember that edge lists are just the simplest way to represent a graph in the computer, but we can do better.

# [](#header-2) Adjacency List
Adjacency lists typically are used to represent sparse graphs. Spare graphs are those for which \\((E) << (V^2)\\) - when there are far less edges than vertices.

{:.centerImages}
![Adjacency List](../../../assets/images/imgPost/GraphImages/Adjacency_List.svg)

# [](#header-2) Adjacency Matrix
Adjacency matrices are typically used to represent dense graphs. Dense graphs are those for which \\((E) ~= (V^2)\\) - when the number of edges is close to the number of vertices. One small advantage of the adjacency matrix representation is that it is easy to quickly see if there is an edge is connecting two vertices.

If an adjacency matrix is symmetric than the graph is undirected.
If an adjacency matrix is NOT symmetric than the graph is directed.


INSERT SIDE BY SIDE IMAGE HERE OF ADJACENCY LIST / ADJACENCY MATRIX
