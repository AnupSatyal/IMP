var canvas,
    context,
    dragging = false,
    dragStartlocation,
    snapshot;



function getCanvasCoordinates(event) {
	var x = event.clientX - canvas.getBoundingClientRect().left, 
	    y = event.clientY - canvas.getBoundingClientRect().top;

	return {x: x, y: y};
}

function takeSnapshot() {
	snapshot = context.getImageData(0, 0, canvas.width, canvas.height);
}


function restoreSnapshot() {
	context.putImageData(snapshot, 0, 0);
}


function drawLine(position) {
  context.beginPath();
  context.moveTo(dragStartlocation.x, dragStartlocation.y);
  context.lineTo(position.x, position.y);
  context.stroke();


}


function dragstart(event) {
	dragging = true;
	dragStartlocation = getCanvasCoordinates(event);
	takeSnapshot();
    
}

function drag(event) {
     var position;
     if(dragging == true) {
     	restoreSnapshot();
     	position = getCanvasCoordinates(event);
     	drawLine(position);
     }
}

function dragstop(event) {
     dragging = false;
     restoreSnapshot();
     var position = getCanvasCoordinates(event);
     drawLine(position);
}
 
function init() {
     canvas = document.getElementById("canvas");
     context = canvas.getContext('2d');
     context.strokeStyle = 'black';
     context.lineWidth = 4;
     context.lineCap = 'round';

     canvas.addEventListener('mousedown', dragstart, false);
     canvas.addEventListener('mousemove', drag, false);
     canvas.addEventListener('mouseup', dragstop, false);


}

function clearCanvas(){
	context.clearRect(0,0, canvas.width, canvas.height);
}


window.addEventListener('load', init, false);