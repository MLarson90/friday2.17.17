$(document).ready(function(){



  $("#survey").submit(function(event){
    event.preventDefault();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question3]:checked").val();
    var question3 = $("input:radio[name=question4]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var nameInput = $("input#name").val();
    $(".student").append(nameInput);

    if(!question1 || !question2 || !question3 || !question4){
    alert("Please finish filling out questions!");
  }else if ((question1 === "a" || question1 === "b") && (question2 === "b" || question2 === "c")){
    $("#cc").hide();
    $("#php").hide();
    $("#java").show();
  }else if ((question1 === "b" || question1 === "c") && question2 === "c"){
    $("#php").hide();
    $("#java").hide();
    $("#cc").show();
  }else if ((question1 === "a" || question1 === "c") && (question2 === "a" || question2 === "b")){
    $("#java").hide();
    $("#cc").hide();
    $("#php").show();
  };

  });
});
