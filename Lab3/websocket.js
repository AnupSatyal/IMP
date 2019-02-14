var connection = new WebSocket('wss://obscure-waters-98157.herokuapp.com');


// Log errors
connection.onerror = function (error) {
  console.log('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
	//console.log('Server: ' + e.data);
	$("#message").prepend("<p>"+e.data+"</p><hr>" );
}			
//Input from the text box
function sendMessage(){
	var message =document.getElementById("text-message").value;
	//console.log(message);
	connection.send(message);
	//clear the text box after submit button is clicked
	document.getElementById("text-message").value = "";
}