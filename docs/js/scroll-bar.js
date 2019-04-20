window.onscroll = function() {scrollFunction()};
var toChange = document.getElementById("mobile-menu");
var mobile = document.getElementById("lista");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    toChange.style.backgroundColor = "#f8f9fb";
    mobile.style.backgroundColor = "#f8f9fb";
  } else {
    toChange.style.backgroundColor = "rgba(255, 255, 255, 0)";
    mobile.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
}
