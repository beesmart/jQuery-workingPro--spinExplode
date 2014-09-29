
/*! Spinning JS */

/*
 * Below you'll find the jQuery functions to make us spin!
 * We have 2 buttons and 2 on.click functions.
 * One adds classes and one removes classes (check the CSS file for these) - Steve
 */




// When a user clicks on the button "#animate-square", load our spin function 
$('#animate-square').on('click', function(e){
	console.log("Spin!")

	// Our spin (animate) function is loaded, we add a couple of CSS classes that make it spin! 
	function animateBox() {
   		 $("#super-square").addClass('box-spin box-animate');
}
// We have to call our function otherwise it stays in bed
animateBox();


})

// When a user clicks on the button "#reset-square", load our reset function 
$('#reset-square').on('click', function(e){
	console.log("reset")

	// Our reset function is loaded, we remove our 2 CSS classes so we can spin again! 	
	function resetBox() {
    	$("#super-square").removeClass('box-spin box-animate');
	}
// We have to call this function too, otherwise it stays in bed
resetBox();


})

