  
$( function() {
    var state = true;
    $( ".job-more" ).on( "click", function() {
      if ( state ) {
  	    $(".job2-conts").hide().slideDown();
	    $(".job2-conts").css("display", "inline-block");
        $( "#job-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "600px"
        }, 1000 );
      } else {
	  $(".job2-conts").show().slideUp();
  	    $(".job2-conts").css("display", "none");
        $( "#job-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
      }
      state = !state;
    });
  } );

$( function() {
    var state = true;
    $( ".mento-more" ).on( "click", function() {
      if ( state ) {
  	    $(".mento2-conts").hide().slideDown();
	    $(".mento2-conts").css("display", "inline-block");
        $( "#mento-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "600px"
        }, 1000 );
      } else {
	  $(".mento2-conts").show().slideUp();
  	    $(".mento2-conts").css("display", "none");
        $( "#mento-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
      }
      state = !state;
    });
  } );

$( function() {
    var state = true;
    $( ".video-more" ).on( "click", function() {
      if ( state ) {
  	    $(".video2-conts").hide().slideDown();
	    $(".video2-conts").css("display", "inline-block");
        $( "#video-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "600px"
        }, 1000 );
      } else {
	  $(".video2-conts").show().slideUp();
  	    $(".video2-conts").css("display", "none");
        $( "#video-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
      }
      state = !state;
    });
  } );