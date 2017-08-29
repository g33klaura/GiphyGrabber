// PSUEDO CODED STEPS TO ACCOMPLISH
// API Key: e6e389c7f6fc432dba0ce6999e6c8123

// Primary:
// [x] Page has array of buttons showing
// [x] Buttons, based off my pre-set array of titles, are created by jQuery
// [x] When each button is clicked, 
// [x] an Ajax call to the Giphy API is made using parameters q (query) & limit
// [x] 10 gifs render on the page, below the buttons
// [x] Each gif shows a rating above it
// [x] When gifs load, they're initially in a static state
// [x] Upon click, gifs will change to animated state
// [x] Clicking again returns to static
// Secondary:
// [x] Input element with submit button allows user to add new buttons
// [x] Each new button is dynamically rendered with jQuery
// [x] Buttons have same functionality as primary buttons (return clickable gifs using new search term)



// VARIABLES ====================
// 

var topics = ['adventure time', 'steven universe', 'rick and morty', 'over the garden wall', 'gravity falls', 'metalocalypse', 'freakazoid', 'earthworm jim', 'aaahh real monsters', 'samurai jack', 'archer'];

// var results = null;
// var k = 0;

// var state = '';




// FUNCTIONS ====================
// 

// Function for creating themed buttons for search
function renderButtons() {
	
	// Empties button div before adding new buttons (so no buttons are repeated)
	$('#rendered-buttons').empty();

	// Looping through array of topics
	for (var i = 0; i < topics.length; i++) {

		// TEST: Cartoon titles print  ~WORKS
		// console.log(topics[i]);

		// Dynamically generate buttons for each topic in array
		var a = $('<button>');

		// Add Materialize button class
		a.addClass('waves-effect waves-light btn');

		// Add a class to each button
		a.addClass('cartoon');

		// Add data-attribute with value of the topics at index 'i'
		a.attr('data-name', topics[i]);
		// Provide text for button based on string value of topics array at index 'i'
		a.text(topics[i]);
		// // Add css to display buttons in row??
		// a.css('display: inline');
		// Render buttons on HTML
		$('#rendered-buttons').append(a);
		// $('#rendered-buttons').prepend(a);
	}	
};

/*
// Ask for help with getting this to work as a function to call later in my on-click (cuz right now, it's broke)
function displayGifs() {

	// Place everything from ajax call to get gifs into here
	// Then call in on-click

	// Variable to hold the value of the button clicked
	var cartoonTitle = $(this).attr('data-name');
		console.log(this);

	// Variable set to search Giphy API and return 10 results with the title of a show, set to whatever button was pressed
	var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=e6e389c7f6fc432dba0ce6999e6c8123&q=' + cartoonTitle + '&limit=10';

	// Ajax call
	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function(response) {

		console.log(response);

		// Variable equal to the response.data object from ajax call
		var results = response.data;
		// results = response.data;

		// Loop to render images on page for length of returned ajax results
		for (var k = 0; k < results.length; k++) {
		// for (k = 0; k < results.length; k++) {


			// jQuery created div, stored in variable
			var gifDiv = $('<div>');

			// Pulls rating from each gif result, displays as <p> tag on page
			var p = $('<p>').text('Rated: ' + results[k].rating);
				// console.log(results[k].rating);

			// Create image tag for each gif
			var gifImage = $('<img>');

				// Attempting to set multiple attributes at once........
				gifImage.attr({
					'src': results[k].images.fixed_height_still.url,
					'data-animate': results[k].images.fixed_height.url,
					'data-still': results[k].images.fixed_height_still.url,
					'data-state': 'still'
				});

				// addClass of gif ~WORKS!!
				gifImage.addClass('gif');
				// console.log(this);

				// Renders the rating variable above each image
				gifDiv.append(p);
				
				// Renders each image to the empty div 'gifDiv'
				gifDiv.append(gifImage);
				
				// Renders each new image & rating to the empty div in the HTML
				// $('#gifs').prepend(gifDiv);
				$('#gifs').append(gifDiv);
				
		}
		// ^^Closes for loop for rendering gifs
	});
};
*/




// MAIN PROCESS ====================
// 

// Runs renderButtons function once page is loaded
$(document).ready(function() {

	renderButtons();

	// Add css to display buttons in row? ~NOT NEEDED, inline is default when Bootstrap isn't being used (OTHERWISE BOOTSTRAP OVERRIDES TO DISPLAY: BLOCK)
	// $('#rendered-buttons').css('display: inline-block');

	// Readies each button for on-click to get gifs from Giphy
	$(this).on('click', '.cartoon', function() {
		
		// ****See working-movie-app for turning the block below into a function, then calling it in the on-click
		// **********************************

		// Hoping this will empty the gifs div on each click
		$('#gifs').empty();

		// TEST: Buttons click  ~WORKS
		console.log('Button was clicked');

		
		// Variable to hold the value of the button clicked
		var cartoonTitle = $(this).attr('data-name');
			console.log(this);

		// Variable set to search Giphy API and return 10 results with the title of a show, set to whatever button was pressed
		var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=e6e389c7f6fc432dba0ce6999e6c8123&q=' + cartoonTitle + '&limit=10&rating=PG-13&lang=en';

		// Ajax call
		$.ajax({
			url: queryURL,
			method: 'GET'
		}).done(function(response) {

		console.log(response);

		// Variable equal to the response.data object from ajax call
		var results = response.data;
		// results = response.data;

		// Loop to render images on page for length of returned ajax results
		for (var k = 0; k < results.length; k++) {
		// for (k = 0; k < results.length; k++) {


			// jQuery created div, stored in variable
			var gifDiv = $('<div>');

			// Pulls rating from each gif result, displays as <p> tag on page
			var p = $('<p>').text('Rated: ' + results[k].rating);
				// console.log(results[k].rating);

			// ISN'T SET TO STATIC IMAGE YET!!!
				// - rename from gifImageStatic to just gifImage
			
			// Create image tag for each gif
			var gifImage = $('<img>');

				
				// Renders only the image result with fixed-height
				// gifImage.attr('src', results[k].images.fixed_height_still.url);

				// HOW TO GET BOTH SOURCES FOR IMAGES?????????  ~FIXED!! YAAAY!
				// gifImage.attr('data-animate', results[k].images.fixed_height.url);

				// gifImage.attr('data-still', results[k].images.fixed_height_still.url);

				// Does this go here or in the image on-click????
				// gifImage.attr('data-state', 'still');
				

				// Attempting to set multiple attributes at once........
				gifImage.attr({
					'src': results[k].images.fixed_height_still.url,
					'data-animate': results[k].images.fixed_height.url,
					'data-still': results[k].images.fixed_height_still.url,
					'data-state': 'still'
				});

				// gifImage.attr('src', $(this).attr('data-still' + results[k].images.fixed_height_still.url));

				// addClass of gif ~WORKS!!
				gifImage.addClass('gif');
				// console.log(this);

				// Renders the rating variable above each image
				gifDiv.append(p);
				
				// Renders each image to the empty div 'gifDiv'
				gifDiv.append(gifImage);
				
				// Renders each new image & rating to the empty div in the HTML
				// $('#gifs').prepend(gifDiv);
				$('#gifs').append(gifDiv);
				
		}
		// ^^Closes for loop for rendering gifs

		});
		// ^^Closes ajax call
		

		// displayGifs();

	});
	// ^^Closes on-click for button function


	// Adds click function to each image created
	$(this).on('click', '.gif', function() {

		// ~WORKS!!
		console.log('gif clicked');
		
		// There's a delay because this var is in this on-click, but if I move it to the other function, it's out of the scope....  ~FIXED
		// SOLUTION: Set the data-state to still in the render images function, so it ~starts~ with the data-state of still :)
		var state = $(this).attr('data-state');

		// 	console.log(this);

		// Switch between still & animate on click
		// switches data-states, but doesn't change images.... ~FIXED!!
		if (state === 'still') {
			$(this).attr('src', $(this).attr('data-animate'));
			// $(this).attr('src', $(this).attr('data-animate' + results[k].images.fixed_height.url));
			$(this).attr('data-state', 'animate');
		} else {
			$(this).attr('src', $(this).attr('data-still'));
			// $(this).attr('src', $(this).attr('data-still' + results[k].images.fixed_height_still.url));
			$(this).attr('data-state', 'still');
		}
	});


	// This function handles events where add cartoon button is pressed
      $('#add-cartoon').on('click', function(event) {
        
        event.preventDefault();

        // Statement checks if a value was entered into input box
        // Prevents blank buttons from being created
        if ( $('#gif-input').val().length === 0 ) {
        		alert('Whoops! Please enter a title.');
        	} else {

        // This line grabs the input from the textbox
        var newCartoon = $('#gif-input').val().trim();

        	// Adding input from the textbox to our array
        	topics.push(newCartoon);

        	// Calling renderButtons which handles the processing of our movie array
        	renderButtons();

        	// Empty add button input
			// $('#gif-input').val().empty();
			$('#gif-input').val('');
        };

      });

});