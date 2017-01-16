var productsList = [

	{
		name: "yeah",
		description: "It is wonderful",
		price: "$5.00",
		url: "http:/"
	},

	{
		name: "yaa",
		description: "It is wonderful",
		price: "$5.00",
		url: "http:/"
	},

	{
		name: "yay",
		description: "It is wonderful",
		price: "$5.00",
		url: "http:/"
	},

	{
		name: "yeah",
		description: "It is wonderful",
		price: "$5.00",
		url: "http:/"
	},

	{
		name: "yeah",
		description: "It is wonderful",
		price: "$5.00",
		url: "http:/"
	},

	{
		name: "yeah",
		description: "It is wonderful",
		price: "$5.00",
		url: "http:/"
	},

	{
		name: "yeah",
		description: "It is wonderful",
		price: "$5.00",
		url: "http:/"
	},

	{
		name: "yeah",
		description: "It is wonderful",
		price: "$5.00",
		url: "http:/"
	},

	{
		name: "yeah",
		description: "It is wonderful",
		price: "$5.00",
		url: "http:/"
	}
]	
//////////////////////////////////////////////////////////////////
for (var i = 1; i < productsList.length; i++) {              //start loop
	var container = document.createElement("article");         //create the <article> tag
	container.setAttribute("class","main-content");                       //create and name the article class="card1,2,3 etc."
	container.innerHTML =                                  //physically create the list
		"<h3>" + productsList[i].name + "</h3>" +            
		"<p>" + productsList[i].price + "</p>" + 
		"<p>" + productsList[i].description + "</p>" +
		"<img src=\"img/mushroom-" + i + "-300X300.jpg\" class=\"card-images\">" + "</article>";
	document.body.appendChild(container);                  //physically add to HTML
}
