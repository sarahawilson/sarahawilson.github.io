---
layout: ptg_layout
title:  "Procedural Terrain Generation"
date: 2018-01-28
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
Realistic terrain using four random values and basic math? You bet! That's what I used to create the terrain above. Procedural generation is a method of creating data algorithmically instead of manually.  Procedural generation is commonly used in video games to create textures or landscapes. The 2016 title, No Man's Sky, boasted over *18 quintillion* planets, each with unique landscapes and creatures, all created by using procedural generation algorithms. Procedural generation can be used to make realistic looking terrain, hence the name Procedural Terrain Generation (PTG). The Diamond Square Algorithm is a straight forward method of procedurally generating terrain.

# [](#header-1) Diamond Square Algorithm
The Diamond Square Algorithm starts with a heightmap. A heightmap is a matrix filled with values. For those not familiar think of a matrix like an Excel Spreadsheet, it has rows and columns that hold data and allow that data to be manipulated. The matrix's row and column indices act as the \\(X\\) and \\(Y\\) position coordinates. The values placed inside the matrix are heights or the \\(Z\\) position coordinate. A heightmap maps a 2D coordinate \\((X, Y)\\) with a height \\((Z)\\). In other words, a height map can describe the topography of an area.

The diamond square algorithm can be broken out into four main steps:
1. Set the Dimensions
2. Seed the Corners
3. Perform the Diamond Step
4. Perform the Square Step

<span style="color:#990000;">1. Set the Dimensions</span> <br>
The diamond square algorithm needs the matrix to be square and have the dimensions of \\(2^n + 1\\). Where \\(n \geqslant 1 \\) and \\(n\\) is an integer. Dimensions like 3x3, 5x5, 9x9 ect.

{:.PTGcenterImages}
![Empty 5x5](../../../assets/images/imgPost/PTG_Images/StepByStepImages/Empty 5x5.svg)


 Why \\(2^n + 1\\)? And what is \\(n\\) anyway? It's not the dimensions of the grid. \\(Dim = 2^n + 1\\)

<img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/StepByStepImages/2nOneExp.svg" height="200" width="200">

<span style="color:#990000;">2. Seed the Corners</span> <br>
The matrix starts off empty, with dimensions of \\(2^n + 1\\), then any four random values are placed in the corners of the matrix.
Shown as \\(A, B, C, D\\).

{:.PTGcenterImages}
![SeedCorners](../../../assets/images/imgPost/PTG_Images/StepByStepImages/SeedCorners.svg)


<span style="color:#990000;">3. Perform the Diamond Step</span> <br>
The diamond step takes the four corner elements of a square, then finds the center element of that square. The value of the center element is set equal to the average of the four corner element values plus a random value.\\
\\(E\\)\\
random value (\\(valRan\\))\\
DESCRIBE HOW IT LOOKS LIKE A DIAMOND

$$
  \begin{align}
  E = \frac{A+B+C+D}{4} + valRan
  \end{align}
$$

{:.PTGcenterImages}
![DiamondStepN1](../../../assets/images/imgPost/PTG_Images/StepByStepImages/Diamond_Step_N1.svg)


<span style="color:#990000;">4. Perform the Square Step</span> <br>
The square step takes the tip elements of the diamond created in the diamond step and then finds the center element of that diamond. The value of the center element is set equal to the average of all the tip elements plus a random value.\\
DESCRIBE HOW IT LOOKS LIKE A SQUARE\\

{:.PTGcenterImages}
![SquareStepN1](../../../assets/images/imgPost/PTG_Images/StepByStepImages/Square_Step_N1.svg)

then place the results in the midpoint of the top, bottom, left and bottom edges of the square. Shown as \\(F, I, H, G\\).

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

<span style="color:#990000;">Rinse and Repeat* </span> <br>
 two steps are called over and over until all elements within the matrix are filled with values, the Diamond Step and Square Step.

{:.PTGrowImages}
![BaseGrid](../../../assets/images/imgPost/PTG_Images/StepByStepImages/BaseGrid.svg)
Set Dimensions

{:.PTGrowImages}
![SeedCorners](../../../assets/images/imgPost/PTG_Images/StepByStepImages/SeedCorners.svg)
Seed the Corners

{:.PTGrowImages}
![DiamondStepN1](../../../assets/images/imgPost/PTG_Images/StepByStepImages/Diamond_Step_N1.svg)
Diamond Step \\(n = 1\\)

{:.PTGrowImages}
![SquareStepN1](../../../assets/images/imgPost/PTG_Images/StepByStepImages/Square_Step_N1.svg)
Square Step \\(n = 1\\)

{:.PTGrowImages}
![DiamondStepN2](../../../assets/images/imgPost/PTG_Images/StepByStepImages/Diamond_Step_N2.svg)
Diamond Step \\(n = 2\\)

{:.PTGrowImages}
![SquareStepN2](../../../assets/images/imgPost/PTG_Images/StepByStepImages/Square_Step_N2.svg)
Square Step \\(n = 2\\)

<br style="clear:left">
<br>
<br>

 <div style = "overflow: auto; clear: Left;">
   <figure style="float: left; width: 24%; margin-right: 0; margin-left:150px; margin-bottom: 0.5em;">
     <img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/StepByStepImages/5x5_Edge.svg">
     <figcaption style="text-align: center; color: #393939;"> Edge Case </figcaption>
   </figure>

   <figure style="float: right; width: 24%; margin-left: 10px; margin-right: 150px; margin-bottom: 0.5em; margin-top: 0;">
     <img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/StepByStepImages/5x5_NoEdge.svg">
     <figcaption style="text-align: center; color: #393939;"> Non-Edge Case </figcaption>
   </figure>
 </div>

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
