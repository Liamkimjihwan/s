 
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
});

var state = true;
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
};


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

	

$(document).ready(function ($) {

    var jssor_1_SlideoTransitions = [
/*      [{b:0,d:600,y:-290,e:{y:27}}],
      [{b:0,d:1000,y:185},{b:1000,d:500,o:-1},{b:1500,d:500,o:1},{b:2000,d:1500,r:360},{b:3500,d:1000,rX:30},{b:4500,d:500,rX:-30},{b:5000,d:1000,rY:30},{b:6000,d:500,rY:-30},{b:6500,d:500,sX:1},{b:7000,d:500,sX:-1},{b:7500,d:500,sY:1},{b:8000,d:500,sY:-1},{b:8500,d:500,kX:30},{b:9000,d:500,kX:-30},{b:9500,d:500,kY:30},{b:10000,d:500,kY:-30},{b:10500,d:500,c:{x:87.50,t:-87.50}},{b:11000,d:500,c:{x:-87.50,t:87.50}}],
      [{b:0,d:600,x:410,e:{x:27}}],
      [{b:-1,d:1,o:-1},{b:0,d:600,o:1,e:{o:5}}],
      [{b:-1,d:1,c:{x:175.0,t:-175.0}},{b:0,d:800,c:{x:-175.0,t:175.0},e:{c:{x:7,t:7}}}],
      [{b:-1,d:1,o:-1},{b:0,d:600,x:-570,o:1,e:{x:6}}],
      [{b:-1,d:1,o:-1,r:-180},{b:0,d:800,o:1,r:180,e:{r:7}}],
      [{b:0,d:1000,y:80,e:{y:24}},{b:1000,d:1100,x:570,y:170,o:-1,r:30,sX:9,sY:9,e:{x:2,y:6,r:1,sX:5,sY:5}}],
      [{b:2000,d:600,rY:30}],
      [{b:0,d:500,x:-105},{b:500,d:500,x:230},{b:1000,d:500,y:-120},{b:1500,d:500,x:-70,y:120},{b:2600,d:500,y:-80},{b:3100,d:900,y:160,e:{y:24}}],
      [{b:0,d:1000,o:-0.4,rX:2,rY:1},{b:1000,d:1000,rY:1},{b:2000,d:1000,rX:-1},{b:3000,d:1000,rY:-1},{b:4000,d:1000,o:0.4,rX:-1,rY:-1}]*/
    ];

    var jssor_1_options = {
      $AutoPlay: true,
      $Idle: 2000,
      $CaptionSliderOptions: {
        $Class: $JssorCaptionSlideo$,
        $Transitions: jssor_1_SlideoTransitions,
        $Breaks: [
          [{d:2000,b:1000}]
        ]
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 600);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*responsive code end*/
});
	
	
	
	