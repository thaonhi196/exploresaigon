$(document).ready(function() {

    var counter = 0;
    var c = 0;
    var i = setInterval(function(){
        $("#load-block h1").html(c + "%");
        $("#load-block .load-svg-color").css("height", c + "px");
        //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");

      /*
      $(".loading-page .counter h1.color").css("width", c + "%");
      */
      counter++;
      c++;

      if(counter ==25) {
          clearInterval(i);
        $('#load-block').fadeOut();        
      }
    }, 50);
  });
	// JavaScript Document