function latest_news()
{
 	var newPara = document.createElement("p");
	var add_news = document.createTextNode("This is the News");
	newPara.appendChild(add_news);
	
	var footer = document.getElementById("footer");
	document.body.insertBefore(newPara,footer);
}