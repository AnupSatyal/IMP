
function personList(){
  var person = document.getElementById("personInput").value;
  //personInput is connectiong with input element in HTML, this stores the value.
  var text = document.createTextNode(person);
  //persons from personInput are stored in variable Text.
  var newperson = document.createElement("li");
  newperson.appendChild(text)
  //when clicked, it will append the persons from newpersons in li
  document.getElementById("personList").appendChild(newperson);
  // we will get ol list and append to newperson

}
