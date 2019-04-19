// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
var toChange = document.getElementById("example-menu");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    toChange.style.backgroundColor = "#f8f9fb";
  } else {
    toChange.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  }
}