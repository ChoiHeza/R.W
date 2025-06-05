// alert("What is up?");

const themeButton = document.querySelectorAll(".theme-button");

//TODO For later when changing link styles for night theme
// const linkButton = document.querySelectorAll("a");

//~ DAY THEME FUNCTION
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

  // button border colour
  document.querySelectorAll("button")[0].style.borderColor = "rgb(87, 34, 48)";
  document.querySelectorAll("button")[1].style.borderColor = "rgb(87, 34, 48)";

  // content background color
  document.getElementById("content-story").style.backgroundColor =
    "rgb(224, 214, 200)";

  // story font colour
  document.querySelectorAll(".story")[0].style.color = "rgb(87, 34, 48)";
  document.querySelectorAll(".story")[1].style.color = "rgb(87, 34, 48)";
  document.querySelectorAll(".story")[2].style.color = "rgb(87, 34, 48)";
  document.querySelectorAll(".story")[3].style.color = "rgb(87, 34, 48)";
  document.querySelectorAll(".story")[4].style.color = "rgb(87, 34, 48)";
  document.querySelectorAll(".story")[5].style.color = "rgb(87, 34, 48)";
  document.querySelectorAll(".story")[6].style.color = "rgb(87, 34, 48)";
  document.querySelectorAll(".story")[7].style.color = "rgb(87, 34, 48)";
  document.querySelectorAll(".story")[8].style.color = "rgb(87, 34, 48)";
  document.querySelectorAll(".story")[9].style.color = "rgb(87, 34, 48)";
  document.querySelectorAll(".story")[10].style.color = "rgb(87, 34, 48)";

  // outfit section
  document.querySelectorAll(".outfit")[0].style.color = "rgb(147, 144, 145)";
}

//~ NIGHT THEME FUNCTION

function turnNight() {
  //TODO For later when changing link styles for night theme
  // const linkButton = document.querySelectorAll("a");

  // night theme background image
  document.body.style.backgroundImage =
    "url(/assets/images/nighttime-miami.jpg)";

  // button background colour
  document.querySelectorAll("button")[0].style.backgroundColor = "teal";
  document.querySelectorAll("button")[1].style.backgroundColor = "teal";

  // button font colour
  document.querySelectorAll("button")[0].style.color = "white";
  document.querySelectorAll("button")[1].style.color = "white";

  // button border colour
  document.querySelectorAll("button")[0].style.borderColor = "white";
  document.querySelectorAll("button")[1].style.borderColor = "white";

  // content background colour
  document.getElementById("content-story").style.backgroundColor = "#1f515e";

  // story font colour
  document.querySelectorAll(".story")[0].style.color = "#cce5e0";
  document.querySelectorAll(".story")[1].style.color = "#cce5e0";
  document.querySelectorAll(".story")[2].style.color = "#cce5e0";
  document.querySelectorAll(".story")[3].style.color = "#cce5e0";
  document.querySelectorAll(".story")[4].style.color = "#cce5e0";
  document.querySelectorAll(".story")[5].style.color = "#cce5e0";
  document.querySelectorAll(".story")[6].style.color = "#cce5e0";
  document.querySelectorAll(".story")[7].style.color = "#cce5e0";
  document.querySelectorAll(".story")[8].style.color = "#cce5e0";
  document.querySelectorAll(".story")[9].style.color = "#cce5e0";
  document.querySelectorAll(".story")[10].style.color = "#cce5e0";
}
