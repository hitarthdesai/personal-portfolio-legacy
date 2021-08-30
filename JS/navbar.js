var navBar = document.getElementsByTagName("nav");
var menuIcon = document.getElementsByClassName("menu");

function navBarDisplayChange() {
  if (navBar[0].style.display === "none") {
    navBar[0].style.display = "block";
  } else {
    navBar[0].style.display = "none";
  }
}
menuIcon[0].addEventListener("click", navBarDisplayChange);
