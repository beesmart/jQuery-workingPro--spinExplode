
/*! Spinning JS */

/*
 * Below you'll find the jQuery functions to make us spin!
 * We have 2 buttons and 2 on.click functions.
 * One adds classes and one removes classes (check the CSS file for these) - Steve
 */

// cache those recurrent calls to the DOM
var square = $("#super-square")
var resetButton = $("#reset-square")
var animateButton = $("#animate-square")

// When a user clicks on the button "#animate-square", load our spin function 
$('#animate-square').on('click', function(e){
	console.log("Spin!")

	// Our spin (animate) function is loaded, we add a couple of CSS classes that make it spin! 
	//  We also animate left to complete the impression of an explosion
	function animateIt() {
   		square
	   		.show( "slow" )
	   		.addClass('box-spin box-animate')
		    .animate({ left: "+=200" }, 500 )
		    .css( "background-color", "orange")
		    .toggle("explode", {pieces: 16 }, 1000)
	// Don't forget to return our box to the original position, ready to go again.
		    .animate({ left: "-=200" }, 100 )


}

// Call that lazy animate function out of bed
animateIt();
// Hide the animate button and show our (currently) hidden reset button
animateButton.toggle(200);
resetButton.toggle(200);


})

// When a user clicks on the button "#reset-square", load our reset function 
$('#reset-square').on('click', function(e){
	console.log("reset")

	// Our reset function is loaded, we remove our 2 CSS classes so we can spin again! 	
	function resetBox() {
		square
			// reset all the changes we made to our box in the animate function 
			.css( "background-color", "red")
    		.removeClass('box-spin box-animate')
    	 	.toggle();
	}

// We have to call this function too, otherwise it stays in bed
resetBox();
// Switch the buttons back again...
resetButton.toggle(200);
animateButton.toggle(200);


})

