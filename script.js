// document.querySelector(".dice .img1").setAttribute("src","./images/dice5.png") ;


//   1st dice

var a = Math.floor((Math.random() * 6)+1);

if(a === 1) {
    document.querySelector(".dice .img1").setAttribute("src","./images/dice1.png") ;
}
else if(a === 2) {
    document.querySelector(".dice .img1").setAttribute("src","./images/dice2.png") ;
}
else if(a === 3) {
    document.querySelector(".dice .img1").setAttribute("src","./images/dice3.png") ;
}
else if(a === 4) {
    document.querySelector(".dice .img1").setAttribute("src","./images/dice4.png") ;
}
else if(a === 5) {
    document.querySelector(".dice .img1").setAttribute("src","./images/dice5.png") ;
}
else if(a === 6) {
    document.querySelector(".dice .img1").setAttribute("src","./images/dice6.png") ;
}

//   2nd dice

var b = Math.floor((Math.random() * 6)+1);

if(b === 1) {
    document.querySelector(".dice .img2").setAttribute("src","./images/dice1.png") ;
}
else if(b === 2) {
    document.querySelector(".dice .img2").setAttribute("src","./images/dice2.png") ;
}
else if(b === 3) {
    document.querySelector(".dice .img2").setAttribute("src","./images/dice3.png") ;
}
else if(b === 4) {
    document.querySelector(".dice .img2").setAttribute("src","./images/dice4.png") ;
}
else if(b === 5) {
    document.querySelector(".dice .img2").setAttribute("src","./images/dice5.png") ;
}
else if(b === 6) {
    document.querySelector(".dice .img2").setAttribute("src","./images/dice6.png") ;
}


// document.querySelector("h1");


if( a > b) {
    document.querySelector("h1").textContent = "Player 1 Won"
}
else if( b > a ) {
    document.querySelector("h1").textContent = "Player 2 Won"
}
else if( a === b ) {
    document.querySelector("h1").textContent = "Draw"
}
