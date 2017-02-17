$(document).ready(function(){



  $("#survey").submit(function(event){
    event.preventDefault();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question3]:checked").val();
    var question3 = $("input:radio[name=question4]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();

    console.log(question1);
    if(!question1 || !question2 || !question3 || !question4){
    alert("Please finish filling out questions!");
  }else if ((question1 === "a" || question1 === "b") && (question2 === "b" || question2 === "c")){
    alert("Java!");
    };

  });
});
