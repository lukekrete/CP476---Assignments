window.onload = function(){
	console.log("Yo");
	var images = document.getElementsByClassName("similar-product");
	for(let img of images){
		console.log(img);
		img.addEventListener("mouseover",hover,false);
		img.addEventListener("mouseout",unhover,false);
	}
}
function hover() {
	this.style.width = '120%';
	this.style.height = 'auto';
}

function unhover(){
	this.style.width = 'auto';
	this.style.height = 'auto';
}
const form = document.querySelector("#form1");
form.addEventListener("submit", onSubmit);

function onSubmit(event){
	var textFields = document.querySelectorAll("input[type=text], input[type=date]");
	for(i =0; i < textFields.length; i++){
		if (textFields[i].value == ""){
			event.preventDefault();
			textFields[i].style.backgroundColor = "#ffa1a1";
			textFields[i].style.border = "2px solid red";
			textFields[i].style.backgroundRepeat = "no-repeat";
			textFields[i].style.backgroundImage = "url('./images/error.png')";
			textFields[i].style.backgroundPosition = "right";

			
		}
		else{
			textFields[i].style.removeProperty('background-image');
			textFields[i].style.removeProperty('border');
			textFields[i].style.removeProperty('background-color');
			if(textFields[i].parentNode.querySelectorAll("img").length != 0){
				textFields[i].parentNode.removeChild(textFields[i].parentNode.lastChild);
			}

		}
			
	}
	var radioGroup = document.querySelectorAll("input[name=continent]");
	var radioSelected = false;
	for(i = 0; i < radioGroup.length; i++){
		if (radioGroup[i].checked == true){
			radioSelected = true;
		}
	}
	if (radioSelected){
		radioGroup[0].parentNode.style.removeProperty('background-color');
		radioGroup[0].parentNode.style.removeProperty('background-image');

	}
	else{
		event.preventDefault();
		radioGroup[0].parentNode.style.backgroundColor = "#ffa1a1";
		radioGroup[0].parentNode.style.backgroundImage = "url('./images/error.png')";
		radioGroup[0].parentNode.style.backgroundRepeat = "no-repeat";
		radioGroup[0].parentNode.style.backgroundPosition = "right";

		
	}
	var agreeBox = document.querySelector("input[type=checkbox]");
	if (!agreeBox.checked){
		event.preventDefault();
		agreeBox.parentNode.style.border = "2px solid red";
		agreeBox.parentNode.style.backgroundColor = "#ffa1a1";
		agreeBox.parentNode.style.backgroundImage = "url('./images/error.png')";
		agreeBox.parentNode.style.backgroundRepeat = "no-repeat";
		agreeBox.parentNode.style.backgroundPosition = "right";
		agreeBox.addEventListener("change", function(){
			if (this.checked){
				this.parentNode.style.removeProperty('border');
				this.parentNode.style.removeProperty('background-color');
				this.parentNode.style.removeProperty("background-image");
			}
		});
	}
}