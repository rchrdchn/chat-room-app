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

$("#message").on("keypress", function(e) {
	if (e.which === 13) {
		messageMe();
	}
});

// function heartMe() {
// 	var heart = document.getElementById("message").innerHTML = "<i class="fa fa-heart heart" aria-hidden="true"></i>";
// 	var addHeart = document.createElement("h3");
// 	var divHeart = document.createElement("div");
// 	var addHeartToBody = document.getElementById("body");
	
// 	divHeart.appendChild(addHeart);
// 	divHeart.appendChild(heart);
// 	divHeart.className = "box-me";
// 	addHeartToBody.appendChild(divHeart);	
// }