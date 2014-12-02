/*
 Keila Bowers
 Student #: 0004632583
 WDD244-0 Section 01
 December 1, 2014
 Week 1 - Analyze Buggy Search V1
 */

// Create privatized scope using a self-executing function
(function(){ //start of a self-executing function
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), // Sets the variable to return the 'results' from the HTML page (DOM)
		searchInput = document.forms[0].search, //returns the first value from the 'search' field in the HTML page
		currentSearch = '' //Will be the var to store the user results
	;
	
	// Validates search query
	var validqte == function(query){ //sets the variable "validqte" as a function + Function calls the query variable
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){
			query = query.substring(1, query.length); //If the first character is a space then it removes it
		};
		while(query.charAt(query.length-1) === ""){ //If the last character is a space then it removes it
			query = query.substring(0, query.length-1);
		;
		
		// Check search length, must have 3 characters
		if(query.length < 3){ //Sees if the length of the user input is less than 3 characters
			alert("Your search query is too small, try again."); //Added last " to end string //Pop up alert telling the user the search input is too small
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); //will clear the search field
			return;
		};
		
		search(query);
	};
	
	// Finds search matches
	var search = function(query) //sets the variable "search" as a function + Function calls the query variable again
		
		// split the user's search query string into an array
		var queryArray = query.join(" "); //puts a space between the array values
		
		// array to store matched results from database.js
		var results = []; //declares results variable as the container to store arrays results from database

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); //Sets variable as the Title from the database
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); //converts all characters to lowercase
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){ //loops for each character of the user input search
				var qitem = queryArray[ii].tolowercase(); //converts all characters to lowercase
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); //compares the lowercase versions of the database arrays and user input search
				if(compare !== -1){ //shows how many characters matched
					results.push(db[i]); //sends all results out
				};
			;
		;
		
		results.sort(); //sorts results
		
		// Check that matches were found, and run output functions
		if(results.length = 0){  //if non matched go to function noMatch()
			noMatch();
		}else{
			showMatches(results); //if they did then go to function showMatches
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'//Updates the html to say "No results... etc."
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ //if there is a match
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',  //updates HTML with a the text "Results"
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|'); //if the results is a video
			title = results[i].subString(0, titleEnd); //grab index number
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); //grabs url from DB
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; //updates URL text in the HTML file to be a link
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})();