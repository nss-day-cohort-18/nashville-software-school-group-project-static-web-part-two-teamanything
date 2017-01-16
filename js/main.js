	var widget1 = {
		name: "yeah",
		description: "It is wonderful",
		price: "$5.00",
		url: "http:/"
	}

	var widget2 = {
		name: "yaa",
		description: "It is wonderful",
		price: "$5.00",
		url: "http:/"
	}

	var widget3 = {
		name: "yay",
		description: "It is wonderful",
		price: "$5.00",
		url: "http:/"
	}
//////////////////////////////////////////////////////////////////
	var widgetList = [
		widget1,
		widget2,
		widget3
	]

for (var i = 0; i < widgetList.length; i++) {              //start loop
	var container = document.createElement("div");         //create the <div> tag
	container.id = "card" + (i + 1);                       //create and name the div id="card1,2,3 etc."
	container.innerHTML =                                  //physically create the list
		"<li>" + widgetList[i].name + "</li>" +            
		"<li>" + widgetList[i].price + "</li>" + 
		"<li>" + widgetList[i].description + "</li>" +
		"<li>" + widgetList[i].url + "</li>" + "</div>";
	document.body.appendChild(container);                  //physically add to HTML
}