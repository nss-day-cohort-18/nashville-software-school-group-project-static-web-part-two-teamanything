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
for (var i = 0; i < productsList.length; i++) {              //start loop
	var container = document.createElement("article");         //create the <article> tag
	container.class = "card";                       //create and name the article class="card1,2,3 etc."
	container.innerHTML =                                  //physically create the list
		"<h3>" + productsList[i].name + "</h3>" +            
		"<p>" + productsList[i].price + "</p>" + 
		"<p>" + productsList[i].description + "</p>" +
		"<img src=\"images/image1.jpg\" class=\"card-images\">" + productsList[i].url + ">" + "</article>";
	document.body.appendChild(container);                  //physically add to HTML
}
