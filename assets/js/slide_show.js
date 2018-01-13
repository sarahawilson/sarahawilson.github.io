slideIndex = 1;
var inPlayStart;
var playStarted;
var playInterval;
var x = document.getElementsByClassName("slides");

showDivs(slideIndex);

function showDivs(n)
{
  var i;
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}

  for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";
  }
  console.log(slideIndex);
  x[slideIndex-1].style.display = "block";

  if(playStarted){
    playStart();
    }
}

function plusDivs(n)
{
  clearTimeout(playInterval);
  showDivs(slideIndex += n);
}

function playStart()
{
  playStarted = true;
  slideIndex++;
  if (slideIndex == x.length){
    playStarted = false;
    showDivs(slideIndex);
    slideIndex = 0;
  }
  else
  {
    clearInterval(playInterval);
    playInterval = setTimeout(showDivs, 150);
  }
}

function playPause()
{
  clearTimeout(playInterval);
  if(playStarted)
  {
    slideIndex--;
  }
  playStarted = false;
}
