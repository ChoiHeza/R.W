// alert("What is up?");

const themeButton = document.querySelectorAll(".theme-button");

//TODO For later when changing link styles for night theme
const linkButton = document.querySelectorAll("a");

function turnDay() {
  document.body.style.backgroundImage = "url(/assets/images/daytime-miami.png)";

  // button background colour
  document.querySelectorAll("button")[0].style.backgroundColor =
    "rgb(224, 214, 200)";
  document.querySelectorAll("button")[1].style.backgroundColor =
    "rgb(224, 214, 200)";

  // button font colour
  document.querySelectorAll("button")[0].style.color = "rgb(87, 34, 48)";
  document.querySelectorAll("button")[1].style.color = "rgb(87, 34, 48)";

  //button border colour
  document.querySelectorAll("button")[0].style.borderColor = "rgb(87, 34, 48)";
  document.querySelectorAll("button")[1].style.borderColor = "rgb(87, 34, 48)";
}
