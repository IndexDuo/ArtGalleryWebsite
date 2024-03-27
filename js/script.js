"use strict";

function adjustBreaks() {
  var breakPoints = document.querySelectorAll('.break');
  if (window.innerWidth < 768) {
    // Example breakpoint
    breakPoints.forEach(function (point) {
      return point.innerHTML = '<br>';
    });
  } else {
    breakPoints.forEach(function (point) {
      return point.innerHTML = ' ';
    });
  }
}
function adjustBreaksDesktop() {
  var breakPoints = document.querySelectorAll('.breakDeskTop');
  if (window.innerWidth > 1068) {
    // Example breakpoint
    breakPoints.forEach(function (point) {
      return point.innerHTML = '<br>';
    });
  } else {
    breakPoints.forEach(function (point) {
      return point.innerHTML = ' ';
    });
  }
}

// Run on initial load and on window resize
Window.addEventListener('load', adjustBreaks);
Window.addEventListener('resize', adjustBreaks);
Window.addEventListener('load', adjustBreaksDesktop);
Window.addEventListener('resize', adjustBreaksDesktop);