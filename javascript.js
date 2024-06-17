

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let imgsrc = "./images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", imgsrc);


    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let imgsrc2 = "./images/dice" + randomNumber2 + ".png";
 document.querySelectorAll("img")[1].setAttribute("src", imgsrc2);


if (randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = "Player 1 win";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "player 2 win";
}
else{
    document.querySelector("h1").innerHTML = "The Dice Game is Draw";
}