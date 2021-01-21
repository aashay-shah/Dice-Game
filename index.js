function getImageLocation(number){
  return "images/dice" + number + ".png"
}

function decideWinner(number1, number2){
  if(number1 === number2){
    return "Draw!";
  }else if(number1 > number2){
    return "🚩 Player 1 Wins";
  }else if(number2 > number1){
    return "Player 2 Wins 🚩";
  }
}

var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

document.querySelector(".img1").setAttribute("src", getImageLocation(randomNumber1));
document.querySelector(".img2").setAttribute("src", getImageLocation(randomNumber2));

document.querySelector("h1").innerHTML = decideWinner(randomNumber1, randomNumber2);
