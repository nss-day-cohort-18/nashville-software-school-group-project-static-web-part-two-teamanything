var productsList = [

	{
		name: "Mini Mushroom",
		description: "Gravida id eget suscipit, sed in a pretium, ornare amet. Leo volutpat dapibus, wisi pede eleifend donec, ullamcorper massa potenti lobortis id mauris, morbi diam velit massa eget ut mauris. Suscipit feugiat ligula facilisi sit libero. Pede in est pulvinar a, turpis sodales. Curabitur donec amet non bibendum mi libero, sit nibh et duis pellentesque donec, quis magna curae proin eu neque. Quis ut ac, magnis tincidunt, a nulla odio ut malesuada a sapiente, adipiscing porta sed ac fusce integer, molestie et vehicula. Convallis in in neque sed nulla.",
		price: "$5.00",
		url: ""
	},

	{
		name: "Magnificent Mushroom",
		description: "Gravida id eget suscipit, sed in a pretium, ornare amet. Leo volutpat dapibus, wisi pede eleifend donec, ullamcorper massa potenti lobortis id mauris, morbi diam velit massa eget ut mauris. Suscipit feugiat ligula facilisi sit libero. Pede in est pulvinar a, turpis sodales. Curabitur donec amet non bibendum mi libero, sit nibh et duis pellentesque donec, quis magna curae proin eu neque. Quis ut ac, magnis tincidunt, a nulla odio ut malesuada a sapiente, adipiscing porta sed ac fusce integer, molestie et vehicula. Convallis in in neque sed nulla.",
		price: "$7.00",
		url: ""
	},

	{
		name: "Marvelous Mushroom",
		description: "Gravida id eget suscipit, sed in a pretium, ornare amet. Leo volutpat dapibus, wisi pede eleifend donec, ullamcorper massa potenti lobortis id mauris, morbi diam velit massa eget ut mauris. Suscipit feugiat ligula facilisi sit libero. Pede in est pulvinar a, turpis sodales. Curabitur donec amet non bibendum mi libero, sit nibh et duis pellentesque donec, quis magna curae proin eu neque. Quis ut ac, magnis tincidunt, a nulla odio ut malesuada a sapiente, adipiscing porta sed ac fusce integer, molestie et vehicula. Convallis in in neque sed nulla.",
		price: "$9.00",
		url: ""
	},

	{
		name: "Magnanimous Mushroom",
		description: "Gravida id eget suscipit, sed in a pretium, ornare amet. Leo volutpat dapibus, wisi pede eleifend donec, ullamcorper massa potenti lobortis id mauris, morbi diam velit massa eget ut mauris. Suscipit feugiat ligula facilisi sit libero. Pede in est pulvinar a, turpis sodales. Curabitur donec amet non bibendum mi libero, sit nibh et duis pellentesque donec, quis magna curae proin eu neque. Quis ut ac, magnis tincidunt, a nulla odio ut malesuada a sapiente, adipiscing porta sed ac fusce integer, molestie et vehicula. Convallis in in neque sed nulla.",
		price: "$15.00",
		url: ""
	},

	{
		name: "Metropolitan Mushroom",
		description: "Gravida id eget suscipit, sed in a pretium, ornare amet. Leo volutpat dapibus, wisi pede eleifend donec, ullamcorper massa potenti lobortis id mauris, morbi diam velit massa eget ut mauris. Suscipit feugiat ligula facilisi sit libero. Pede in est pulvinar a, turpis sodales. Curabitur donec amet non bibendum mi libero, sit nibh et duis pellentesque donec, quis magna curae proin eu neque. Quis ut ac, magnis tincidunt, a nulla odio ut malesuada a sapiente, adipiscing porta sed ac fusce integer, molestie et vehicula. Convallis in in neque sed nulla.",
		price: "$18.00",
		url: ""
	},

	{
		name: "Mundane Mushroom",
		description: "Gravida id eget suscipit, sed in a pretium, ornare amet. Leo volutpat dapibus, wisi pede eleifend donec, ullamcorper massa potenti lobortis id mauris, morbi diam velit massa eget ut mauris. Suscipit feugiat ligula facilisi sit libero. Pede in est pulvinar a, turpis sodales. Curabitur donec amet non bibendum mi libero, sit nibh et duis pellentesque donec, quis magna curae proin eu neque. Quis ut ac, magnis tincidunt, a nulla odio ut malesuada a sapiente, adipiscing porta sed ac fusce integer, molestie et vehicula. Convallis in in neque sed nulla.",
		price: "$25.00",
		url: ""
	},

	{
		name: "Mirth Mushroom",
		description: "Gravida id eget suscipit, sed in a pretium, ornare amet. Leo volutpat dapibus, wisi pede eleifend donec, ullamcorper massa potenti lobortis id mauris, morbi diam velit massa eget ut mauris. Suscipit feugiat ligula facilisi sit libero. Pede in est pulvinar a, turpis sodales. Curabitur donec amet non bibendum mi libero, sit nibh et duis pellentesque donec, quis magna curae proin eu neque. Quis ut ac, magnis tincidunt, a nulla odio ut malesuada a sapiente, adipiscing porta sed ac fusce integer, molestie et vehicula. Convallis in in neque sed nulla.",
		price: "$39.00",
		url: ""
	},

	{
		name: "Malevolent Mushroom",
		description: "Gravida id eget suscipit, sed in a pretium, ornare amet. Leo volutpat dapibus, wisi pede eleifend donec, ullamcorper massa potenti lobortis id mauris, morbi diam velit massa eget ut mauris. Suscipit feugiat ligula facilisi sit libero. Pede in est pulvinar a, turpis sodales. Curabitur donec amet non bibendum mi libero, sit nibh et duis pellentesque donec, quis magna curae proin eu neque. Quis ut ac, magnis tincidunt, a nulla odio ut malesuada a sapiente, adipiscing porta sed ac fusce integer, molestie et vehicula. Convallis in in neque sed nulla.",
		price: "$55.00",
		url: ""
	},

	{
		name: "Magic Mushroom",
		description: "No longer sold in the United States.",
		price: "$135.00",
		url: ""
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
