var productsList = [

	{
		name: "yeahtalbot",
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
var mainContent = document.getElementsByClassName("main-content");

for (var i = 0; i < productsList.length; i++) {                  //start loop
	var mainSection = document.createElement("section");     //create the <article> tag
	mainSection.setAttribute("class","card");                //create and name the article class="card1,2,3 etc."
	mainSection.innerHTML =                                  //physically create the list
		"<h3>" + productsList[i].name + "</h3>" +            
		"<p>" + productsList[i].price + "</p>" + 
		"<p>" + productsList[i].description + "</p>" +
		"<img src=\"img/mushroom-" + (i+1) + "-300X300.jpg\" class=\"card-images\">";
	mainContent[0].appendChild(mainSection);}
