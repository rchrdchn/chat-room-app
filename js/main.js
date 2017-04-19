// prompt question for name and adds name below <h1>

var person = prompt("Please enter your name");
	if (person != null) {
    document.getElementById("username").innerHTML = "Welcome " + person + "!";
}

// function gets user input value on submit button
function messageMe() {

	// gets user input
	var write = document.getElementById("message").value.toLowerCase();
	// creates <h3> tag
	var addText = document.createElement("h3");
	// creates <div> tag
	var div = document.createElement("div");
	// targets ID body
	var addToBody = document.getElementById("body");

	// adds value input from write variable to DOM as <h3>, then spits user input value
	addText.innerHTML = write;
	// appends <h3> to <div>
	div.appendChild(addText);
	// adds "box-me" class to <div>
	div.className = "box-me";
	// appends <div> with <h3> in it to body ID, creating a box since class="box-me" has been added
	addToBody.appendChild(div);

	// if nothing in text input, do nothing
	if (write.length == 0) {
		div.className = "";
		alert("Please type something :)");
	};
}

// submits text on keypress (enter)
$("#message").on("keypress", function(e) {
	if (e.which === 13) {
		messageMe();
		this.val();
	}
});

