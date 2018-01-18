---
layout: default
title:  "Procedural Terrain Generation"
date: 2018-01-03
---
{::options auto_ids="false" /}

{:.postHeader}
# Procedural Terrain Generation

{:.postTagline}
## Diamond Square Algorithm

<!--excerpt.start-->

<!--excerpt.end-->


<div class="container_slideshow">
  {% for image in site.static_files %}
    {% if image.path contains 'images/imgPost/PTG_Images/slide_show_images' %}
      <img class="slides" src="{{ site.baseurl }}{{ image.path }}">
    {% endif %}
  {% endfor %}
</div>

<div style="display: flex; align-items: center; justify-content: center; margin-left: 2.5rem;">
  <button class="button-left, material-icons" onclick="plusDivs(-1)">fast_rewind</button>
  <button class="button-play, material-icons" onclick="playStart()"> play_arrow </button>
  <button class="button-pause, material-icons" onclick="playPause()"> pause </button>
  <button class="button-right, material-icons" onclick="plusDivs(1)">fast_forward</button>
</div>

# [](#header-1) Introduction
Realistic landscapes using four random points and basic math? You bet. That's what I used to create the landscape above. Go ahead click the clicky.
It's called Procedural Terrain Generation or PTG for short. PTG is method of creating data algorithmically instead of manually, meaning the computer does all the heavy lifting for you.

PTG is commonly used in video games to create textures or landscapes. PTG is how No Man's Sky, the 2016 PlayStation 4 and Windows release, boasted over *18 quintillion planets*, each with different landscapes and creatures. The planets are procedurally generated. The terrain is procedurally generated. Even the creatures are procedurally generated! Meaning almost infinite amounts of gameplay.

The Diamond Square Algorithm is the algorithm I coded up for this post. **ADD IN A LITTLE MORE INFO HERE TO EASE THE TRANSITION**

# [](#header-1) Diamond Square Algorithm
The Diamond Square Algorithm starts with a heightmap. A heightmap is basically a grid filled with values, like a spreadsheet. The dimensions of that grid act as the \\(X\\) and \\(Y\\) coordinates and the values are heights or elevations. For each \\(X,Y\\) coordinate pair there is an elevation.

For simplicity, the grids we are going to look at will be square and have the dimensions of \\(2^n + 1\\). Where \\(n \geqslant 1 \\) and \\(n\\) is an integer. Dimensions like 3x3, 5x5, 9x9 ect.

The following images show the first two calls of the diamond square algorithm being performed on a 9x9 grid. The diamond square algorithm is called until all elements, (cells if you like spreadsheets), within the grid are filled with a value. In a 9x9 grid the diamond square algorithm would have to be called 3 times in order to fill all 81 elements with values. This is further explained in the Why \\(2^n + 1\\) ? section.

<div style = "overflow: auto;">
  <figure style="float: left; width: 24%; margin-right: 0; margin-left: 0; margin-bottom: 0.5em;">
    <img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/StepByStepImages/DiamondStep.svg">
    <figcaption style="text-align: center; color: #393939;"> Diamond Step </figcaption>
  </figure>

  <figure style="float: left; width: 24%; margin-left: 10px; margin-right: 10px; margin-bottom: 0.5em; margin-top: 0;">
    <img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/StepByStepImages/SquareStep.svg">
    <figcaption style="text-align: center; color: #393939;"> Sqaure Step </figcaption>
  </figure>

  <figure style="float: left; width: 24%; margin-left: 0; margin-right: 10px; margin-bottom: 0.5em; margin-top: 0;">
    <img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/StepByStepImages/DiamondStepN2.svg">
    <figcaption style="text-align: center; color: #393939;"> Diamond Step </figcaption>
  </figure>

  <figure style="float: left; width: 24%; margin-left: 0; margin-right:0; margin-bottom: 0.5em; margin-top: 0;">
    <img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/StepByStepImages/SquareStepN2.svg">
    <figcaption style="text-align: center; color: #393939;"> Square Step </figcaption>
  </figure>
</div>

<span style="color:#990000;">1. Seed the Corners</span> <br>
Starting with a empty 9x9 grid, place any four random values in the corner elements of the grid.\\
Shown as \\(A, B, C, D\\).

<span style="color:#990000;">2. Diamond Step</span> <br>
Then take the average of elements \\(A, B, C, D\\). Add a random value (\\(valRan\\)) to that average and then place the result in the center of the square. Shown as \\(E\\).

$$
  \begin{align}
  E = \frac{A+B+C+D}{4} + valRan
  \end{align}
$$

<span style="color:#990000;">3. Square Step</span> <br>
Then take the average of the value placed in the center of the square \\(E\\) and the two elements located at the top, bottom, left and right. (Each is a separate average). Add a random value to those averages and then place the results in the midpoint of the top, bottom, left and bottom edges of the square. Shown as \\(F, I, H, G\\).

$$
  \begin{align}
  F = \frac{A+C+E}{3} + valRan\\
  \\
  I = \frac{C+D+E}{3} + valRan\\
  \\
  H = \frac{D+B+E}{3} + valRan\\
  \\
  G = \frac{A+B+E}{3} + valRan\\
  \end{align}
$$

<span style="color:#990000;">3. Rinse and Repeat* </span> <br>
\\(A, B, C, D\\)
<div style = "overflow: auto;">
  <figure style="float: left; width: 24%; margin-right: 0; margin-left:150px; margin-bottom: 0.5em;">
    <img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/StepByStepImages/NonEdgeCase.svg">
    <figcaption style="text-align: center; color: #393939;"> Edge Case </figcaption>
  </figure>

  <figure style="float: right; width: 24%; margin-left: 10px; margin-right: 150px; margin-bottom: 0.5em; margin-top: 0;">
    <img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/StepByStepImages/EdgeCase.svg">
    <figcaption style="text-align: center; color: #393939;"> Non-Edge Case </figcaption>
  </figure>
</div>


# [](#header-1) Why \\(2^n + 1\\) ?
So what the heck in n anyway? It's not the dimensions of the grid. \\(Dim = 2^n + 1\\)


<img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/StepByStepImages/2nOneExp.svg" height="200" width="200">

# [](#header-1) Roughness Coefficient

<div style = "overflow: auto;">
  <figure style="float: left; width: 40%; margin-right: 1%; margin-bottom: 0.5em;">
    <img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/rCOE/grid_rCOEpoint10.svg">
    <figcaption style="text-align: center; color: #393939;"> Roughness = 0.10 </figcaption>
  </figure>

  <figure style="float: right; width: 40%; margin-bottom: 0.5em; margin-top: 0;">
    <img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/rCOE/grid_rCOE_point250.svg">
    <figcaption style="text-align: center; color: #393939;"> Roughness = 0.25 </figcaption>
  </figure>

  <figure style="float: left; width: 40%; margin-bottom: 0.5em;">
    <img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/rCOE/grid_rCOEpoint50.svg">
    <figcaption style="text-align: center; color: #393939;"> Roughness = 0.50 </figcaption>
  </figure>

  <figure style="float: left; width: 40%; margin-bottom: 0.5em;">
    <img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/rCOE/grid_rCOE1point90.svg">
    <figcaption style="text-align: center; color: #393939;"> Roughness = 0.9 </figcaption>
  </figure>
</div>

# [](#header-1) Resources and Going Further
The diamond square algorithm is only the tip of the iceberg when it comes to Procedural Terrain Generation. The following links were extremely helpful in the making of this post :

[3D Graphic Java: Render Fractal Landscapes](https://www.javaworld.com/article/2076745/learn-java/3d-graphic-java--render-fractal-landscapes.html)\\
An older article, but the most in-depth as it covers lighting, shadows and view point calculations.

[Algorithms for Procedural Content Generation](http://pcg.wikidot.com/category-pcg-algorithms)\\
A listing of many high level concepts related to writing code for procedural content generation.

[Terrian Generation with Diamond Square](http://stevelosh.com/blog/2016/06/diamond-square/)\\
A full series of posts covering, midpoint displacement, recursive midpoint displacement and the diamond square algorithm.

I took an iterative approach, as opposed to a recursive one, when I coded my version of the Diamond Square Algorithm. I used MatLab because it was the most accessible 3D graphing tool I had on hand. There are three functions: the main script, the plotting sub-function and the random value generation sub-function. The best way to learn something is to try coding it on your own first, but feel free to use and play around with this code.

# [](#header-1) PTG: Main Script
{% highlight matlab linenos %}
%% Procedural Terrain Generation
% Diamond Square Algorithm
% Sarah Wilson
% https://sarahawilson.github.io/

%% Defined Inputs

n = 3;                          % Number of Iterations
GRDIM  = ((2^n)+1);             % Grid Dimensions
RCOE = .2;                      % Roughness Coefficient

%% Initialize Grid

grid = zeros(GRDIM);        
rValUpper = RCOE^n;             % Upper Limit for Roughness
rValLower = (-1*rValUpper);     % Lower Limit for Roughness

grid(1, 1) = 1;                 % Pre-seed the corners with a value
grid(1, GRDIM) = 1.4;
grid(GRDIM, 1) = 1;
grid(GRDIM, GRDIM) = 1.2;

stpDim = GRDIM;             % Step Dimension to be used in loops
mp = (ceil(stpDim/2));       % Midpoint of each square

%% Main

while (mp > 1)
    % Diamond Step
    for row = 1:(stpDim - 1):GRDIM
        if (row == GRDIM)
            break;              % If edge of grid by row break out
        end
        for col = 1:(stpDim - 1):GRDIM
            if (col==GRDIM)
                break;          % If edge of grid by col break out
            end

            topLeft = grid(row,col);
            topRight = grid(row, (col + (stpDim - 1)));
            botLeft = grid((row + (stpDim - 1)), col);
            botRight = grid((row + (stpDim - 1)),(col + (stpDim - 1)));

            valRan = randValGen(rValLower, rValUpper); % Random Value
            valD = ((topLeft + topRight + botLeft + botRight)/4) + valRan;
            grid((row + (mp - 1)), (col + (mp - 1))) = valD;
        end
    end

    % Square Step
    for row = 1:(stpDim - 1):GRDIM
        if (row == GRDIM)
            break;              % If edge of grid by row break out
        end
        for col = 1:(stpDim - 1):GRDIM
            if (col == GRDIM)
                break;          % If edge of grid by col break out
            end
            sTopL = grid(row, col);             % Get the values for the conrners from the diamond step
            sTopR = grid(row, (col + (stpDim - 1)));  
            sBotL = grid((row + (stpDim - 1)), col);
            sBotR = grid((row + (stpDim - 1)),(col + (stpDim - 1)));
            sCen = grid((row + (mp - 1)), (col + (mp - 1)));

            rValR = randValGen(rValLower, rValUpper);
            rValL = randValGen(rValLower, rValUpper);
            rValT = randValGen(rValLower, rValUpper);
            rValB = randValGen(rValLower, rValUpper);

            curRowCen = row + (mp - 1);
            curColCen = col + (mp - 1);

            if (row == 1)
                Top = ((sTopL + sTopR + sCen)/3) + rValR;
                grid(row, (col + (mp - 1))) = Top;
            end

            if (col == 1)
                Left = ((sTopL + sBotL + sCen)/3) + rValL;
                grid((row + (mp - 1)), col) = Left;
            end

            if ((row + (stpDim - 1)) == GRDIM)
                Bot = ((sBotL + sBotR + sCen)/3) + rValB;
                grid(GRDIM, (col + (mp - 1))) = Bot;
            else
                bnsCen = grid((curRowCen + (stpDim - 1)), curColCen);
                % bns Bottom Next Square
                Bot = ((sBotL + sBotR + sCen + bnsCen)/4) + rValB;
                grid((row + (stpDim - 1)), curColCen) = Bot;
            end

            if ((col + (stpDim - 1)) == GRDIM)
                Right = ((sBotR + sTopR + sCen)/3) + rValR;
                grid((row + (mp-1)), GRDIM) = Right;
            else
                rnsCen = grid(curRowCen, (curColCen + (stpDim - 1)));
                Right = ((sTopR + sBotL + sCen + rnsCen)/4) + rValR;
                grid(curRowCen, (col + (stpDim - 1))) = Right;
            end
        end
    end

    % Get Ready for the Next Iteration
    stpDim = mp;
    mp = ceil(stpDim/2);
    n = n - 1;
    rValUpper = RCOE^n;
    rValLower = (-1 * rValUpper);

end

%% Final Plot

ptg_plotter( grid, plotNum );

{% endhighlight %}


# [](#header-1) PTG: Random Value Generator Sub-Function

{% highlight matlab linenos %}
%% Random Value Generator
% Sarah Wilson
% https://sarahawilson.github.io/

function [ outRandVal ] = randVal( rghUpper, rghLower )
  outRandVal = rghUpper + (rghUpper - rghLower).* rand(1);
end
{% endhighlight %}

# [](#header-1) PTG: Plotting Sub-Function

{% highlight matlab linenos%}
%% PTG Plotter  
% Sarah Wilson
% https://sarahawilson.github.io/

function [] = ptg_plotter( grid, plotNum )

  figure()
  surf(grid);
  view([-47 74])
  caxis('manual');
  demcmap(([0 1.8]));
  zlim([0 2.5]);

  step = num2str(plotNum);
  if (plotNum<10)
    fileName = ['grid_0' step]
  else
    fileName = ['grid_' step]
  end
  saveas(gcf, fileName,'svg')
  close all

end

{% endhighlight %}
