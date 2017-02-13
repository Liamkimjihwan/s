  
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
        $(".all-rec-model, .all-rec-mento, .video-all").css("display", "none");
      } else {
	  $(".job2-conts").show().slideUp();
  	    $(".job2-conts").css("display", "none");
        $( "#job-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
        $(".all-rec-model, .all-rec-mento, .video-all").css("display", "inline-block");
      }
      state = !state;
    });
  } );

$( function() {
    var state = true;
    $( ".mento-more" ).on( "click", function() {
      if ( state ) {
    	  $(".all-rec-model, .job-all, .video-all").hide().slideUp();
  	    $(".mento2-conts").hide().slideDown();
	    $(".mento2-conts").css("display", "inline-block");
	    
        $( "#mento-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "600px"
        }, 1000 );
        $(".all-rec-model, .job-all, .video-all").css("display", "none");
      } else {
    	  $(".all-rec-model, .job-all, .video-all").hide().slideDown(1200);
    	  $(".mento2-conts").show().slideUp();
  	    $(".mento2-conts").css("display", "none");
        $( "#mento-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
        $(".all-rec-model, .job-all, .video-all").css("display", "inline-block");
//        $(".all-rec-model, .job-all").show().slidedown();
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
        $(".all-rec-model, .job-all, .all-rec-mento").css("display", "none");
      } else {
    	  $(".all-rec-model, .job-all, .all-rec-mento").hide().slideDown(1500);
	  $(".video2-conts").show().slideUp();
  	    $(".video2-conts").css("display", "none");
        $( "#video-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
        $(".all-rec-model, .job-all, .all-rec-mento").css("display", "inline-block");
      }
      state = !state;
    });
  } );



	
	
	
	
	
	
	
	
	
	
	
	
	
	