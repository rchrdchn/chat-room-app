

// 2) Create a div in your HTML and give it an ID.
// In JS, create an H1 and then use innerHTML to add some text to it.
// Then add that H1 to the div in your HTML, still using JS.
// When done with this, comment out your code.

// function create() {
// 	var text = document.createElement("div");
// 	text.innerHTML = "Adding some more text";

// 	var parent = document.getElementById("adding");
// 	parent.appendChild(text);
// }

function messageMe() {
	var write = document.getElementById("message").value.toLowerCase();
	var div = document.createElement("div");
	var addText = document.createElement("h3");
	var addToBody = document.getElementById("body");
	
	write.innerHTML = "hey";
	
	console.log(write);

	div.appendChild(addText);
	body.appendChild(div);
}