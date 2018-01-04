var slideIndex = 1;
var myIndex = 0;
var playStarted;
var playVar;

showDivs(slideIndex);

function showDivs(n) {
var i;
var x = document.getElementsByClassName("slides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
if (n < x.length && n > 1 ) { slideIndex = n }

for (i = 0; i < x.length; i++) {
 x[i].style.display = "none";
}
x[slideIndex-1].style.display = "block";
}

function plusDivs(n) {
  if (playStarted) {
    playPause()
    showDivs(myIndex += n);
    }
  else {
    showDivs(slideIndex += n);
    }
}

function playStart()
{
  var i;
  playStarted = true;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";
  }
  myIndex++;
  x[myIndex-1].style.display = "block";
  clearInterval(playVar);
  playVar = setTimeout(playStart, 500);
  if (myIndex == x.length){
    clearTimeout(playVar);
    x[myIndex-1].style.display = "block";
    myIndex = 0;
  }
}

function playPause()
{
  clearTimeout(playVar);
}
