console.log("hello")

Question = function(input1,input2){

	this.qtext = input1;
	var answer = input2;
	this.congrats = "Well done! It is " + answer + "!";
	this.check = function(givenAnswer){
		if(givenAnswer == answer){
			alert(this.congrats)
		}
	}
}

var qList = [] 
qList[0] = new Question("What is the capital of France?","paris");               //this is the Question bank
qList[1] = new Question("2+2=","4");


function mymath(){
	document.getElementById("askmath").innerHTML = qList[0].qtext
	document.getElementById("textbox").value;
	document.getElementById("qmath").onclick = "" 
}
//qList[0].check(prompt(qList[0].qtext));
	
	 
	//alert(x)