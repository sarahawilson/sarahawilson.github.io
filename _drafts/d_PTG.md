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
  <button class="button-left" onclick="plusDivs(-1)">Step Backward</button>
  <button class="button-play" onclick="playStart()">Play</button>
  <button class="button-pause" onclick="playPause()">Pause</button>
  <button class="button-right" onclick="plusDivs(1)">Step Forward</button>
</div>

# [](#header-1) Introduction
Realistic landscapes using four random points and basic math? You bet. That's what I used to create the landscape above. Go ahead click the clicky.
It's called Procedural Terrain Generation or PTG for short. PTG is method of creating data algorithmically instead of manually, meaning the computer does all the heavy lifting for you.

PTG is commonly used in video games to create textures or landscapes. PTG is how No Man's Sky, the 2016 PlayStation 4 and Windows release, boasted over *18 quintillion planets*, each with different landscapes and creatures. The planets are procedurally generated. The terrain is procedurally generated. Even the creatures are procedurally generated! Meaning almost infinite amounts of gameplay.

The Diamond Square Algorithm is the algorithm I coded up for this post. **ADD IN A LITTLE MORE INFO HERE TO EASE THE TRANSITION**

# [](#header-1) Diamond Square Algorithm
The Diamond Square Algorithm starts with a heightmap. A heightmap is basically a grid filled with values, like a spreadsheet. The dimensions of that grid act as the \\(X\\) and \\(Y\\) coordinates and the values are heights or elevations. For each \\(X,Y\\) coordinate pair there is an elevation.
For simplicity, the grids we are going to look at will be square and have the dimensions of \\(2^n + 1\\), where \\(n \geqslant 1 \\) and \\(n\\) is an integer. Dimensions like 3x3, 5x5, 9x9 ect.

<span style="color:#990000;">1. Seed the Corners</span> <br>
Starting with a empty grid with dimension 9x9, place any four random values in the corners of the grid. I'll show them as \\(A, B, C, D\\).

<span style="color:#990000;">2. Diamond Step</span> <br>
Take the average of points \\(A, B, C, D\\). Add a random value to that average and then place the result in the center of the grid.

$$
  \begin{align}
  E = \frac{A+B+C+D}{4} + valRan
  \end{align}
$$

<span style="color:#990000;">3. Square Step</span> <br>

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

<div style = "overflow: auto; margin: 20px; padding: 35px;">
  <figure style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;">
    <img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/StepByStepImages/DiamondStep.svg">
    <figcaption style="text-align: center; color: #393939;"> Diamond Step </figcaption>
  </figure>

  <figure style="float: right; width: 30%; margin-bottom: 0.5em; margin-top: 0;">
    <img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/StepByStepImages/SquareStep.svg">
    <figcaption style="text-align: center; color: #393939;"> Sqaure Step </figcaption>
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
Add in link to the javaworld article and write up about the source code you provided.

# [](#header-1) PTG: Main Script
{% highlight matlab linenos %}
%% Procedural Terrain Generation
% Diamond Square Algorithm

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
function [ outRandVal ] = randVal( rghUpper, rghLower )
  outRandVal = rghUpper + (rghUpper - rghLower).* rand(1);
end
{% endhighlight %}

# [](#header-1) PTG: Plotting Sub-Function

{% highlight matlab linenos%}
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
