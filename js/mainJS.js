// JavaScript Document



	// For typing text display "Detective Nathan..." 	 
			
					var string ="Detective: Nathan Drake / Age: 31 / Location: Boston / Case: Looking for Mrs.Thompson’s missing cat.....";
					var array = string.split("");
					var loopTimer;	

				function frameLooper() { //create a function name frameLooper//

						if (array.length > 0) {
							document.getElementById("intro_text").innerHTML += array.shift();
						} else {
							  clearTimeout(loopTimer);
							}
						loopTimer = setTimeout("frameLooper()",100); /* change 100 for speed */ //'setTimeout' is a function
						}
				//delaying the type text
				setTimeout("frameLooper()",3000);//this function sets up as a starter for the loop function





// for background sound//
		
		/* Get the audio from the player (using the player's ID), the [0] is necessary */
				var getaudio = $("#player")[0];


		/* Global variable for a timer. When the mouse is hovered over the speaker it will start playing after hovering for 1 second, if less than 1 second it won't play*/
				var mouseovertimer;


		/* Global variable for the audio's status (off or on). */
				var audiostatus = 'off';


		/* if the mouse hovers over the speaker image for more than 1 second the audio will start playing */
				$(document).on('mouseenter', '.speaker', function() {
					 if (!mouseovertimer) {
				   mouseovertimer = window.setTimeout(function() {
					 mouseovertimer = null;
					 if (!$('.speaker').hasClass("speakerplay")) {
					   getaudio.load(); /* Loads the audio */
					   getaudio.play(); /* Play the audio (starting at the beginning of the track) */
					   $('.speaker').addClass("speakerplay");
					   return false;
					 }
				   }, 1000);
				 }
				});


		/* If the mouse stops hovering on the image (leaves the image) clear the timer, reset back to 0 */
				$(document).on('mouseleave', '.speaker', function() {
					 if (mouseovertimer) {
					   window.clearTimeout(mouseovertimer);
					   mouseovertimer = null;
					 }
				   });



		/* Touchend  for other devices */
					 $(document).on("click touchend", ".speaker", function() {
						 if (!$(".speaker").hasClass("speakerplay")) {
						   if (audiostatus === "off") {
							 $(".speaker").addClass("speakerplay");
							 getaudio.load(); /* Loads the audio */
							 getaudio.play(); /* play the audio */
							 window.clearTimeout(mouseovertimer);
							 audiostatus = "on";
							 return false;
						   } else if (audiostatus === "on") {
							 $(".speaker").addClass("speakerplay");
							 getaudio.play(); /* play the audio */
						   }
						 } else if ($(".speaker").hasClass("speakerplay")) {
						   getaudio.pause(); /* pause the audio */
						   $(".speaker").removeClass("speakerplay");
						   window.clearTimeout(mouseovertimer);
						   audiostatus = "on";
						 }
					   });


		   /*When the audio has finished playing, remove the class speakerplay*/
					 $("#player").on("ended", function() {
						 $(".speaker").removeClass("speakerplay");

						 audiostatus = "off"; /*Set the status back to off*/
					});


// for notification transition //


$(document).scroll(function() { 
  var scroll = $(this).scrollTop();
  if (scroll >= 30) {
    $("#popUp").css("margin-left", "-400px");
    $("#plus").css("margin-left", "0px");
  }
});

$("#plus").click(function() {
  $("#popUp").css("margin-left", "0px");
  $("#plus").css("margin-left", "-400px");
});

$("#close").click(function() {
  $("#popUp").css("margin-left", "-400px");
  $("#plus").css("margin-left", "0px");
});




/*$(document).ready(function() {

	});*/



/*function storyMessage(message,champ)
  {
  if(document.getElementById)
    document.getElementById(champ).innerHTML = message;





var div = document.getElementById("perpage");  
    var nestedDiv = document.getElementById("nested");  
    nestedDiv.textContent = "Hello";  

    var text = "[" + div.textContent + "]";  
	
	
	
	
	
	
  function sayHi(){
  var txtName = document.getElementById("txtName");
  var txtOutput = document.getElementById("txtOutput");
  var name = txtName.value;
  txtOutput.value = "Hi there, " + name + "!"
  }
	
	
	*/



//document.getElementById("bgSound").play();
			/*var audio = new Audio("#bgSound");
			audio.play();*/
