 
$( function() { 
    var state = true;
    $(document.body).on( "click", ".job-more", function() {
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
    
    var state = true;
    $(document.body).on( "click", ".model-more", function() {
      if ( state ) {
    	  $(".job-all, .video-all, .all-rec-mento").show().slideUp();
  	    $(".model2-conts").hide().slideDown();
	    $(".model2-conts").css("display", "inline-block");
	    
        $( "#model-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "600px"
        }, 1000 );
        $(".all-rec-mento, .job-all, .video-all").css("display", "none");
      } else {
    	  $(".all-rec-mento, .job-all, .video-all").hide().slideDown(1200);
    	  $(".model2-conts").show().slideUp();
  	    $(".model2-conts").css("display", "none");
        $( "#model-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
        $(".all-rec-mento, .job-all, .video-all").css("display", "inline-block");
      }
      state = !state;
    });

    var state = true;
    $(document.body).on( "click", ".mento-more", function() {
      if ( state ) {
    	  $(".all-rec-model, .job-all, .video-all").show().slideUp();
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
      }
      state = !state;
    });

    var state = true;
    $(document.body).on( "click", ".video-more", function() {
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
   
    var state = true;
    $(document.body).on( "click", "#tab-2", function() {
      if ( state ) {
    	$("input:radio[class='like-list']").attr("checked", true);
    	$("input:radio[class='rec-list']").attr("checked", false);
	    $(".all-like-list").css("display", "inline-block");
        $(".all-rec-list").css("display", "none");
        $(".all-rec-model, .job-all, .all-rec-mento, video-all").css("display", "inline-block");
      } else {
    	  $("input:radio[class='rec-list']").attr("checked", true);
      	$("input:radio[class='like-list']").attr("checked", false);
  	    $(".all-like-list").css("display", "none");
       
        $(".all-rec-list").css("display", "inline-block");
        $(".all-rec-model, .job-all, .all-rec-mento, video-all").css("display", "inline-block");
      }
      state = !state;
      console.log(state);
    });
    
    if("#tab-2".checked == true) {
    	
    	var state = true;
    $(document.body).on( "click", "#tab-1", function() {
      if ( state ) {
    	$("input:radio[class='rec-list']").attr("checked", true);
    	$("input:radio[class='like-list']").attr("checked", false);
	    $(".all-rec-list").css("display", "inline-block");
        $(".all-like-list").css("display", "none");
        $(".all-rec-model, .job-all, .all-rec-mento, video-all").css("display", "inline-block");
      } else {
    	  $("input:radio[class='like-list']").attr("checked", true);
      	$("input:radio[class='rec-list']").attr("checked", false);
  	    $(".all-rec-list").css("display", "none");
       
        $(".all-like-list").css("display", "inline-block");
        $(".all-rec-model, .job-all, .all-rec-mento, video-all").css("display", "inline-block");
      }
      state = !state;
    });
    }
  });



	
	
	
(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);

	
	
	
	
	
	
	
	
	