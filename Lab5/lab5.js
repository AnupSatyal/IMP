
//global varaibles

var nameList = "";
var emailList = "";

function loadPersons(){
	$.ajax({

		dataType: "jsonp",
		url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp"
	});
}


 // $('#loadBtn').dblclick(function() {
 // $("tdhead").empty();
 //  $("tdbody").empty();
 // });
// clear preloaded data after clicking the btn twice

function jsonCallback(data) {
	$('#tdhead').prepend("<tr><th>Firstname</th><th>Email</th></tr>");
	for(var i=0; i<data.length; i++){
		nameList = data[i].name;
		emailList = data[i].email;
		$('#tdbody').prepend("<tr><td>" +nameList+ "</td><td><a href='mailto:" +emailList+ "'>"+emailList+"</a></td></tr>");
	}  
}

