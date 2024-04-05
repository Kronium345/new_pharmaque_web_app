const tile = document.querySelector(".maincard");

tile.addEventListener("click", function () {
  tile.classList.toggle("flipped");
});

function toggleQuestion() {
  var element = document.querySelector(".questionholder");
  element.classList.toggle("hide");

  var x = document.querySelector(".questionshowingtext");
  if (x.innerHTML === "Show Question") {
    x.innerHTML = "Hide Question";
  } else {
    x.innerHTML = "Show Question";
  }

  var y = document.querySelector(".showquestionicon");
  y.classList.toggle("rotate");
}

