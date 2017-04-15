// 

function messageMe() {
	var write = document.getElementById("message").value.toLowerCase();
	var addText = document.createElement("h3");
	var div = document.createElement("div");
	var addToBody = document.getElementById("body");
	
	addText.innerHTML = write;
	div.appendChild(addText);
	div.className = "box-me";
	addToBody.appendChild(div);
}