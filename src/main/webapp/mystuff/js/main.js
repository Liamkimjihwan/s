 
$( function() { 
	
	
	
	
    var state = true;
    $(document.body).on( "click", ".job-more", function() { // 직업 더보기
      if ( state ) {
  	    $(".job2-conts").hide().slideDown();
	    $(".job2-conts").css("display", "inline-block");
        $( ".job-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "500px"
        }, 1000 );
        $(".all-rec-model, .all-rec-mento, .video-all").css("display", "none");
      } else {
	  $(".job2-conts").show().slideUp();
  	    $(".job2-conts").css("display", "none");
        $( ".job-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
        $(".all-rec-model, .all-rec-mento, .video-all").css("display", "inline-block");
      }
      state = !state;
    });
    
    var state = true;
    $(document.body).on( "click", ".model-more", function() { // 추천직업 더 보기
      if ( state ) {
    	  $(".job-all, .video-all, .all-rec-mento").show().slideUp();
  	    $(".model2-conts").hide().slideDown();
	    $(".model2-conts").css("display", "inline-block");
	    
        $( ".model-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "500px"
        }, 1000 );
        $(".all-rec-mento, .job-all, .video-all").css("display", "none");
      } else {
    	  $(".all-rec-mento, .job-all, .video-all").hide().slideDown(1200);
    	  $(".model2-conts").show().slideUp();
  	    $(".model2-conts").css("display", "none");
        $( ".model-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
        $(".all-rec-mento, .job-all, .video-all").css("display", "inline-block");
      }
      state = !state;
    });

    var state = true;
    $(document.body).on( "click", ".mento-more", function() { // 멘토 더 보기 눌렀을 때
      if ( state ) {
    	  $(".all-rec-model, .job-all, .video-all").show().slideUp();
  	    $(".mento2-conts").hide().slideDown();
	    $(".mento2-conts").css("display", "inline-block");
	    
        $( ".mento-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "500px"
        }, 1000 );
        $(".all-rec-model, .job-all, .video-all").css("display", "none");
      } else {
    	  $(".all-rec-model, .job-all, .video-all").hide().slideDown(1200);
    	  $(".mento2-conts").show().slideUp();
  	    $(".mento2-conts").css("display", "none");
        $( ".mento-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
        $(".all-rec-model, .job-all, .video-all").css("display", "inline-block");
      }
      state = !state;
    });

    var state = true;
    $(document.body).on( "click", ".video-more", function() { // 추천 영상 더보기 눌렀을 때
      if ( state ) {
  	    $(".video2-conts").hide().slideDown();
	    $(".video2-conts").css("display", "inline-block");
        $( ".video-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "500px"
        }, 1000 );
        $(".all-rec-model, .job-all, .all-rec-mento").css("display", "none");
      } else {
    	  $(".all-rec-model, .job-all, .all-rec-mento").hide().slideDown(1500);
	  $(".video2-conts").show().slideUp();
  	    $(".video2-conts").css("display", "none");
        $( ".video-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
        $(".all-rec-model, .job-all, .all-rec-mento").css("display", "inline-block");
      }
      state = !state;
    });
   
    $(document.body).on( "click", ".rec-btn", function() { // 추천목록 눌렀을 때
    	 
    	$("#rec-list").css("border-bottom", "2px solid blue");
    	$("#like-list").css("border-bottom", "none");
	    	$(".rec-btn").css("text-decoration", "none");
	    $("#all-rec-list").css("display", "block");
        $("#all-like-list").css("display", "none");
//        $(".all-rec-model, .job-all, .all-rec-mento, video-all").css("display", "inline-block");
       
    });

    $(document.body).on( "click", ".like-btn", function() {// 좋아요 목록 눌렀을 때
    	
    	$("#like-list").css("border-bottom", "2px solid blue");
    	$("#rec-list").css("border-bottom", "none");
    	$(".like-btn").css("text-decoration", "none");
	    $("#all-like-list").css("display", "block");
        $("#all-rec-list").css("display", "none");
//        $(".all-rec-model, .job-all, .all-rec-mento, video-all").css("display", "inline-block");
   
    });
    
    
  /*  $(document.body).on( "click", ".favor-btn", function() {
    
    var con_test = confirm("어떤 값이 나올까요. 확인을 눌러보세요.");
    if(con_test == true)
    { 
    	function onclick() {
        this.setAttribute( "src", "../fheart.png" );
    }
    }
    else if(con_test == false) {
      document.write("취소를 누르셨군요.");
    }
  });*/
    
    $(".hover").mouseleave(
    	    function () {
    	      $(this).removeClass("hover");
    	    }
    	  );
    
  //  
   /* $(".model-div").hover(function() { // 추천인물 hover 더보기 
    	
    	$(this).css("cursor", "pointer");
    	$(".model-more").css("display", "inline-block");
    	
    })
        $(".model-div").mouseleave(
    	    function () {
    	      $(".model-more").css("display", "none");
    	    }
    	  );*/
    //
    
    
    //
    $(".video").hover(function() { // 비디오 hover효과
    	
    	$(".video").css("background-color", "rgba(240, 128, 128, 0.27)");
    	
    })
    
    $(".video").mouseleave(
    	    function () {
    	      $(".video").css("background-color", "transparent");
    	    }
    	  );
    //
    
    
    // 추천직업 hover효과
/*    $(".job-list").hover(function() {
    	$(".job-list").css("background", "radial-gradient(ellipse at top left, rgba(105,155,200,1) 0%,rgba(181,197,216,1) 57%)");
    })
    
    $(".job-list").mouseleave(
    	    function () {
    	      $(".job-list").css("background-image", "none");
    	    }
    	  );*/
    
    
 /*   //
    $(".modelBox").hover(function(){
    	$(".model-box").css({"height":"20px", "width":"20px"});
    })
        $(".modelBox").mouseleave(
    	    function () {
    	      $(".model-box").css({"height":"0px", "width":"0px"});
    	    }
    	  );
    
    //
    */
    
    
    
    //  추천영상 더보기 버튼.
    
    $(".videoBox").hover(function(){
    	$(this).children(".video-box").css({"height":"20px", "width":"20px"});
    })
        $(".videoBox").mouseleave(
    	    function () {
    	    	$(this).children(".video-box").css({"height":"0px", "width":"0px"});
    	    }
    	  );
    
    $(".video-box").hover(function(){
    	$(this).css({"height":"50px", "width":"50px"});
    })
        $(".video-box").mouseleave(
    	    function () {
    	      $(this).css({"height":"20px", "width":"20px"});
    	    }
    	  );
    
    
    // 추천직업 더보기 버튼.
    
/*    $(".jobBox").hover(function(){
    	if (this.parents().hasId("div9")) {
    		$("#div9").children(".job-box").css({"height":"20px", "width":"20px"});
    	} else if(this.parents("#div10")) {
    		$("#div10").children(".job-box").css({"height":"20px", "width":"20px"});
    	} else {
    		$("#div11").children(".job-box").css({"height":"20px", "width":"20px"});
    	}
    	
    })
        $(".jobBox").mouseleave(function () {
        	if (this.parents().hasId("div9")) {
        		$("#div9").children(".job-box").css({"height":"0px", "width":"0px"});
        	} else if(this.parents("#div10")) {
        		$("#div10").children(".job-box").css({"height":"0px", "width":"0px"});
        	} else {
        		$("#div11").children(".job-box").css({"height":"0px", "width":"0px"});
        	}
        	
        });
    
    $(".job-box").hover(function(){
    	$(this).css({"height":"50px", "width":"50px"});
    })
        $(".job-box").mouseleave(
    	    function () {
    	      $(this).css({"height":"20px", "width":"20px"});
    	    }
    	  );*/
    
    
    $(".videoBox").hover(function(){
    	$(this).children(".video-box").css({"height":"20px", "width":"20px"});
    })
        $(".videoBox").mouseleave(
    	    function () {
    	    	$(this).children(".video-box").css({"height":"0px", "width":"0px"});
    	    }
    	  );
    
    $(".video-box").hover(function(){
    	$(this).css({"height":"50px", "width":"50px"});
    })
        $(".video-box").mouseleave(
    	    function () {
    	      $(this).css({"height":"20px", "width":"20px"});
    	    }
    	  );
    
    
    $(".jobBox").hover(function(){
    	$(this).children(".job-box").css({"height":"20px", "width":"20px"});
    })
        $(".jobBox").mouseleave(
    	    function () {
    	    	$(this).children(".job-box").css({"height":"0px", "width":"0px"});
    	    }
    	  );
    
    $(".job-box").hover(function(){
    	$(this).css({"height":"50px", "width":"50px"});
    })
        $(".job-box").mouseleave(
    	    function () {
    	      $(this).css({"height":"20px", "width":"20px"});
    	    }
    	  );
    
    
    
    
    
    
    
    
    
    
    
    // 인물 디테일 페이지.
    var $play = $('.play'),
    $detail  = $('.detail'),
    $movie = $('.movie', $detail),
    $close = $('.close');

    $('.movies .movie').click(function(){
    	console.log("dkdkdl");
    $movie.html($(this).html());
    $play.appendTo($movie);

    $poster = $('.poster', this).addClass('active');

    $('.poster', $detail).css({
    top: $poster.position().top,
    left: $poster.position().left,
    width: $poster.width(),
    height: $poster.height()
    }).data({
    top: $poster.position().top,
    left: $poster.position().left,
    width: $poster.width(),
    height: $poster.height()
    })

    $detail.show();

    $('.poster', $detail).delay(10).queue(function(next) {
    $detail.addClass('ready');

    next();
    }).delay(100).queue(function(next){
    $(this).css({
      top: '-10%',
      left: '-6%',
      width: 366,
      height: 400
    });
    next();
    })
    })


    /*--------------------
    Close
    --------------------*/
    function close(){
    console.log('asd');
    $p = $('.detail .poster');
    console.log($p)
    $p.css({
    top: $p.data('top'),
    left: $p.data('left'),
    width: $p.data('width'),
    height: $p.data('height'),
    })
    $detail.removeClass('ready').delay(500).queue(function(next){
    $(this).hide();
    $poster.removeClass('active');
    next();
    });
    }

    $close.click(close);
    $('body').click(function(e){
    $p = $(e.target).parents();
    if ($p.is('.app')){
    return false;
    } else {
    close();
    }
    })


    /*--------------------
    CodePen Thumbnail
    --------------------*/
    setTimeout(function(){
    $('.movie:eq(0)').click();
    }, 300);
    setTimeout(function(){
    close();
    },1700);
    
    
    
    
 // 멘토 리스트 페이지
    
   
    $(".mt-list").hover(function(){
    	$(this).css("cursor","pointer");
  	  $(this).children(".mt-btm").css({"background": "linear-gradient(90deg, rgba(105, 183, 235, 0.35), #b3dbd3, rgba(244, 214, 219, 0.55)"});
  	  $(this).children(".mt-btm").children(".mt-name").css("display", "inline-block");
  	$(this).children(".mt-btm").children(".mt-photo").css("top", "-50px");
  	  
    })
      
    $(".mt-list").mouseleave(
    	    function () {
    	     $(this).children(".mt-btm").css("background", "transparent");
  	  $(this).children(".mt-btm").children(".mt-name").css("display", "none");
  	$(this).children(".mt-btm").children(".mt-photo").css("top", "-6px");
    	    }
    	  );
    
    
    
    
});

/*var state = true;
function changeimg() {// 좋아요 버튼 눌렀을 때
	if(state) {
		this.setAttribute( "src", "../image/fheart.png" );
	$(".like-del").css("display", "none");
	$(".like-add").css("display", "block");
	$(".like-add").addClass('animated fadeOut');
	$(".like-add").css("animation-delay", "1s");
	} else {
		this.setAttribute( "src", "../image/heart.png" );
		$(".like-add").css("display", "none");
		$(".like-del").css("display", "block");
		$('.like-del').addClass('animated fadeOut');
		$(".like-del").css("animation-delay", "1s");
	}
	state = !state;
};*/


/*function ButtonDown() {  마우스로 눌렀을 때 이미지 변환  
 * 
 * onmousedown="ButtonDown.call( this )" onmouseup="ButtonUp.call( this )"
 * => input 태그에 삽입
 * 
    this.setAttribute("src", "../image/fheart.png");
}

function ButtonUp() {
    this.setAttribute( "src", "../image/heart.png" );
}
*/

	
(function($) { // 슬라이드 쇼
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


var request = require("request");  
var cheerio = require("cheerio");  
var url = "https://www.ted.com/talks?language=ko";

request(url, function (err, res, html) {
    if (!err) {
        var $ = cheerio.load(html);
        
        // 블로그 title 정보 가져오기
        $(".entry-title > a").each(function () {
        	console.log(this);
            var post = {"title": "", "link": "", "summary": "", "category": []};
            var data = $(this);
            
            post["title"] = data.text();
            post["link"] = data.attr("href");
        });
        
        // 블로그 요약 정보 가져오기
        $(".entry-summary > p").each(function (i) {
            // do something
        })
 
        // 블로그 카테고리 가져오기
        $(".entry-categories").each(function (i) {
            $(this).children('a').each(function () {
                // do something
            });
        })
    }
//})



    
    
    
    
    
    
    
    
    
    
    
    
});


// 추천인물 디테일 페이지






	