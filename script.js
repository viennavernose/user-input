$(function() {
  //All JS goes within these brackets  
  
  $("#age-submit").click(function(){
    
    //select the box with id of age
    //get the value from that box
    var ageString = $("#age").val();

    //convert string to number
    var age = parseInt(ageString);

    //check if age is greater than 21
    if ( age >= 18 ) {
      //if age is greater than 21 show the next question
      $("#answer").text("Yay! Get out and register to vote!")
    } else {
      $("#answer").text("Try again when you're 18!");
      
      };