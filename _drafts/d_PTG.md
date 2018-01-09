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


<img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/StepByStepImages/DiamondStep.svg" height="250" width="250" style="display:inline;">

<img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/StepByStepImages/SquareStep.svg" height="250" width="250" style="display:inline;">

<img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/StepByStepImages/2nOneExp.svg" height="300" width="300" style="display:inline;">

<div style = "overflow: auto;">
<img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/rCOE/grid_rCOEpoint10.svg" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;">
<img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/rCOE/grid_rCOEpoint50.svg" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;">
<img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/rCOE/grid_rCOE1point90.svg" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;">
<img src="{{ site.baseurl }}/assets/images/imgPost/PTG_Images/rCOE/grid_rCOE1point90.svg" style="float: left; width: 30%; margin-right: 1%; margin-bottom: 0.5em;">
</div>


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
