var r1 = Math.floor(Math.random() * 6);
var r2 = Math.floor(Math.random() * 6);
var arr = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];
function display() {
  document.querySelector(".img1").setAttribute("src", arr[r1]);
  document.querySelector(".img2").setAttribute("src", arr[r2]);
  if (r1 > r2) {
    document.querySelector("h1").innerText = "Player 1 Won!";
  } else if (r2 > r1) {
    document.querySelector("h1").innerText = "Player 2 Won!";
  } else {
    document.querySelector("h1").innerText = "Draw";
  }
}
