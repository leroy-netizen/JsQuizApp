const playerName = document.getElementById("playerName");
const holdScore = document.getElementById("holdScore");
const score = document.getElementById("score");
const latestScore = localStorage.getItem("latestScore");
score.innerText = latestScore;
console.log(playerName.value);
holdScore.disabled = !playerName.value;
playerName.addEventListener("keyup", () => {
  console.log(playerName.value);
});

holdScore = (e) => {
  console.log("clicked save button");
  e.preventDefault();
};
