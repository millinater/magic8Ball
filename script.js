$(document).ready(function(){
var magic8Ball = {};
	$("#answer").hide();
var magic8Ballanswers = ["Yes", "No", "Try Again", "Maybe", "Ask Again Later"];
magic8Ball.askQuestion = function(question){
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png")
	var randomNumber = Math.random();
var randomNumberArray = randomNumber * magic8Ballanswers.length;
var randomIndex = Math.floor(randomNumberArray);
var randomAnswer = magic8Ballanswers[randomIndex];
$("#answer").text(randomAnswer);

	console.log(question);
	console.log(randomAnswer);
};

var onClick = function(){
	$("answer").hide();
	$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	setTimeout(
		function(){
	var question = prompt("ASK A YES/NO QUESTION!");
	$("#8ball").effect("shake");
			$("#answer").fadeIn(4000);
	magic8Ball.askQuestion(question);
}, 500);
};
$("#questionButton").click(onClick);
	});
