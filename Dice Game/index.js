//Function to get a random integer from 1-max
function getRandomNum(max){
    return Math.floor(Math.random() * max) + 1;
}
//creating variables to start random number that maxes at 6
var randomNum1 = getRandomNum(6);
var randomNum2 = getRandomNum(6);
//console log to be able to make sure the right numbers come out
console.log(randomNum1);
console.log(randomNum2);

//conditional to make sure the first dice shows the same number as randomNum1
if (randomNum1 === 1){
    document.querySelector(".plrOne").setAttribute("src", "./images/dice1.png");
}else if(randomNum1 === 2){
    document.querySelector(".plrOne").setAttribute("src", "./images/dice2.png");
}else if(randomNum1 === 3){
    document.querySelector(".plrOne").setAttribute("src", "./images/dice3.png");
}else if(randomNum1 === 4){
    document.querySelector(".plrOne").setAttribute("src", "./images/dice4.png");
}else if(randomNum1 === 5){
    document.querySelector(".plrOne").setAttribute("src", "./images/dice5.png");
}else if(randomNum1 === 6){
    document.querySelector(".plrOne").setAttribute("src", "./images/dice6.png");
}else{
    document.querySelector("h2").innerHTML = "Something broke, try again later";
}
//conditional to make sure the second dice shows the same number as randomNum2
if (randomNum2 === 1){
    document.querySelector(".plrTwo").setAttribute("src", "./images/dice1.png");
}else if(randomNum2 === 2){
    document.querySelector(".plrTwo").setAttribute("src", "./images/dice2.png");
}else if(randomNum2 === 3){
    document.querySelector(".plrTwo").setAttribute("src", "./images/dice3.png");
}else if(randomNum2 === 4){
    document.querySelector(".plrTwo").setAttribute("src", "./images/dice4.png");
}else if(randomNum2 === 5){
    document.querySelector(".plrTwo").setAttribute("src", "./images/dice5.png");
}else if(randomNum2 === 6){
    document.querySelector(".plrTwo").setAttribute("src", "./images/dice6.png");
}else{
    document.querySelector("h2").innerHTML = "Something broke, try again later";
}
//conditional for winning screen/draw
if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}
//reset the page back to its default layout
document.querySelector(".resButton").addEventListener("click", function(){
    document.querySelector("h1").innerHTML = "Dice Game";
    document.querySelector(".plrTwo"). setAttribute("src", "./images/dice6.png");
    document.querySelector(".plrOne"). setAttribute("src", "./images/dice6.png");
})