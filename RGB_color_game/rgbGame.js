var numberOfSquares=6;
var colors =[];
var pickedColor;
var resetButton=document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1=document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}
function setupModeButtons(){
for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent==="Easy"){
				numberOfSquares=3;
			}else{
				numberOfSquares=6;
			}
			reset();
		})
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
		//grab color of clicked square
		 var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent="Correct!";
			resetButton.textContent = "Play Again?";
			changeColor(clickedColor);
			h1.style.backgroundColor= clickedColor;
		}else{
			 this.style.background="#232323";
			 messageDisplay.textContent="Try Again";
			}
		});
	}
}


function reset(){
		//generate all new color
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color form array
	pickedColor=pickColor();
	//change color of squares
	colorDisplay.textContent = pickedColor;
	resetButton.textContent="New Colors"
	messageDisplay.textContent = "";

	for (var i =0; i<squares.length; i++) {
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display="none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";

 }



resetButton.addEventListener("click",function(){
	reset();
})



function changeColor(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=color;
	}
	//change each color to match given color
}

function pickColor(){
	var random= Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
	//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var R= Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var G=Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var B=Math.floor(Math.random() * 256);
	return "rgb(" + R + ", " + G + ", " + B +")";
}