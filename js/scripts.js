$(document).ready(function(){



  $("#survey").submit(function(event){
    event.preventDefault();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question3]:checked").val();
    var question3 = $("input:radio[name=question4]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    var nameInput = $("input#name").val();
    $(".student").append(nameInput);

    if(!question1 || !question2 || !question3 || !question4 || !question5){
    alert("Please finish filling out questions!");
  }else if ((question1 === "a" || question1 === "b") && (question2 === "a")){
    $("#ruby").hide();
    $("#cc").hide();
    $("#php").hide();
    $("#java").show();
  }else if ((question1 === "a" || question1 === "b") && question3 === "b"){
    $("#ruby").hide();
    $("#php").hide();
    $("#java").hide();
    $("#cc").show();
  }else if ((question1 === "a" || question1 === "b") && (question3 === "c")){
    $("ruby").hide();
    $("#java").hide();
    $("#cc").hide();
    $("#php").show();
  }else if ((question1 === "c") && (question2 === "a")){
    $("#ruby").hide();
    $("#java").hide();
    $("#cc").hide();
    $("#php").show();
  }else if ((question2 === "a" || question2 === "c") && (question3 === "b")){
    $("#java").hide();
    $("#cc").hide();
    $("#php").hide();
    $("#ruby").show();
  }else if ((question2 === "a" || question3 === "c") && (question1 === "a")){
    $("#java").hide();
    $("#cc").hide();
    $("#php").hide();
    $("#ruby").show();
  }else if ((question1 === "a" || question2 === "c") && (question3 === "a")){
    $("#java").hide();
    $("#cc").show();
    $("#php").show();
    $("ruby").hide();
  }else if ((question3 === "a" || question3 === "c") && (question2 === "a")){
    $("#ruby").hide();
    $("#java").hide();
    $("#cc").hide();
    $("#php").show();
  }else{
    $("#ruby").hide();
    $("#cc").hide();
    $("#php").hide();
    $("#java").show();
  };

  });
});
