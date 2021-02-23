//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    addColumns(cityPop);
    addEvents();
};

//adds column, which includes different city sizes
function addColumns(cityPop){
    //adds each city size to the column
    $("tr").each(function(i){
    	if (i == 0){
    		$(this).append("<th>City Size</th>");
    	} else {
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
    		} else {
    			citySize = 'Large';
    		};
		
		//adds new city size
    		$(this).append("<td>" + citySize + "</td>");
    	};
    });
};

//adds colors when mouse is over desired location
function addEvents(){
	//checks if mouse is over desired location; changes colors
	$("table").mouseover(function(){
		var color = "rgb(";
		
		//loop for obtaining random colors
		for (var i=0; i<3; i++){
			var random = Math.round(Math.random() * 255);
			color += random;

			if (i<2){
				color += ",";
			} else {
				color += ")";
			}
		};
		//assigning colors
		$(this).css('color', color);
	});
	
	//pops alert message when user clicks table
	function clickme(){
		alert('Hey, you clicked me!');
	};
	
	$("table").on('click', clickme);
};

//document is ready and calls the initialize function
$(document).ready(initialize);
