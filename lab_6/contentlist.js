
let items = ["hewey", "dewey", "louie"];
function addContent () {
	// add a list of items to the content div
    
	content = document.getElementById('contentForm').value

	if (content != "Content Here"){
		i = items.length
		items[i] = content
	}
	// build the html string for a <ul> list
    let items_html = "<ul>";
    for (let i=0; i < items.length; i++) {
		item = items[i];
		items_html += "<li>" + item + "</li>";
	};


	items_html += "</ul>";
	
	
	document.getElementById('content').innerHTML = items_html;
	// using javascript
	// 1. find the content div
	// 2. modify its html attribute by adding items_html

}

function removeContent(
){
	items.pop();
	let items_html = "<ul>";
    for (let i=0; i < items.length; i++) {
		item = items[i];
		items_html += "<li>" + item + "</li>";
	};
	document.getElementById('content').innerHTML = items_html;

}


