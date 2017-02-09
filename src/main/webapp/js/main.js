  
$( function() {
    var state = true;
    $( ".job-more" ).on( "click", function() {
      if ( state ) {
  	    $(".rec-job2").hide().slideDown();
	    $(".rec-job2").css("display", "inline-block");
        $( "#job-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "600px"
        }, 1000 );
      } else {
	  $(".rec-job2").show().slideUp();
  	    $(".rec-job2").css("display", "none");
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
  	    $(".rec-mento2").hide().slideDown();
	    $(".rec-mento2").css("display", "inline-block");
        $( "#mento-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "600px"
        }, 1000 );
      } else {
	  $(".rec-mento2").show().slideUp();
  	    $(".rec-mento2").css("display", "none");
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
  	    $(".rec-video2").hide().slideDown();
	    $(".rec-video2").css("display", "inline-block");
        $( "#video-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "600px"
        }, 1000 );
      } else {
	  $(".rec-video2").show().slideUp();
  	    $(".rec-video2").css("display", "none");
        $( "#video-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
      }
      state = !state;
    });
  } );