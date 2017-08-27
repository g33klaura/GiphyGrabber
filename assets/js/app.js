// PSUEDO CODED STEPS TO ACCOMPLISH
// API Key: e6e389c7f6fc432dba0ce6999e6c8123

// Primary:
// [x] Page has array of buttons showing
// [x] Buttons, based off my pre-set array of titles, are created by jQuery
// [] When each button is clicked, 
// [] an Ajax call to the Giphy API is made for the following parameters: 
	// 'q', 'rating', 'limit'****
// [] 10 gifs render on the page, below the buttons
// [] Each gif shows a rating above it
// [] When gifs load, they're initially in a static state
// [] Upon click, gifs will change to animated state
// [] Clicking again returns to static
// Secondary:
// [] Input element with submit button allows user to add new buttons
// [] Each new button is dynamically rendered with jQuery
// [] Buttons have same functionality as primary buttons (return clickable gifs using new search term)


/* USE SINGLE QUOTES FOR JS & CSS AGAIN */


// VARIABLES ====================
// 

var topics = ['adventure time', 'steven universe', 'rick and morty', 'over the garden wall', 'gravity falls', 'metalocalypse', 'freakazoid', 'earthworm jim', 'aaahh real monsters', 'samurai jack'];



// FUNCTIONS ====================
// 

// Function for creating themed buttons for search
function renderButtons() {
	
	// Empties button div before adding new buttons (so no buttons are repeated)****
	// $('#rendered-buttons').empty();

	// Looping through array of topics
	for (var i = 0; i < topics.length; i++) {

		// TEST: Cartoon titles print  ~WORKS
		// console.log(topics[i]);

		// Dynamically generate buttons for each topic in array
		var a = $('<button>');
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

		// console.log(a);
	}	
};




// MAIN PROCESS ====================
// 

// Runs renderButtons function once page is loaded
$(document).ready(function() {

	renderButtons();

	// Add css to display buttons in row? ~NOT NEEDED, inline is default when Bootstrap isn't being used (OTHERWISE BOOTSTRAP OVERRIDES TO DISPLAY: BLOCK)
	// $('#rendered-buttons').css('display: inline-block');

	// ****Need to replace 'function' with function to use Ajax call and grab gifs
	$(this).on('click', '.cartoon', function() {
		
		// TEST: Buttons click  ~WORKS
		console.log('Button was clicked');

		// Variable to hold the value of the button clicked
		var cartoonTitle = $(this).attr('data-name');
			console.log(this);

		var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=e6e389c7f6fc432dba0ce6999e6c8123&q=" + cartoonTitle + "&limit=10";

		// Ajax call
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {

		console.log(response);

	});

	});


});