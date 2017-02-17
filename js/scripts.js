$(document).ready(function(){
  var question1 = $("input:radio[name=question1]:checked").val();
  var question2 = $("input:radio[name=question2]:checked").val();
  var question3 = $("input:radio[name=question3]:checked").val();
  var question4 = $("input:radio[name=question4]:checked").val();
  $("form#survey").submit(function(event){
    event.preventDefault();
    if(!question1 || !question2 || !question3 || !question4){
      alert("Please finish filling out questions!")
    };
  });
});
