// enter a name and click button to add name to list
// a name will be added to a list (array)
// click another button to print list to dom

//create an Array
var students = [];
//event listner
//function
$('button').eq(0).on("click", function(){
  //get value out of the input
  var studentName=$('input').val()
  //put value into an Array(push)
  students.push(studentName)
});

//event listner
//function
$('button').eq(1).on("click", function(){
  //loop through the array
  students.forEach(function(el){
    //add each element to the dom
    $('ol').append("<li>"+el+"</li>")
  });
});
