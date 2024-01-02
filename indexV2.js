//V2 file to show better code
//creating random numbers
var ranNum1 = Math.floor(Math.random() * 6) + 1;
var ranNum2 = Math.floor(Math.random() * 6) + 1;
//creating file name
var dicePhoto1 = "./images/dice" + ranNum1 + ".png";
var dicePhoto2 = "./images/dice" + ranNum2 + ".png";
//changing photo based on random number
document.querySelector(".plrOne").setAttribute("src", dicePhoto1);
document.querySelector(".plrTwo").setAttribute("src", dicePhoto2);
//conditional for winning screen/draw
if(ranNum1 > ranNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(ranNum1 < ranNum2){
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