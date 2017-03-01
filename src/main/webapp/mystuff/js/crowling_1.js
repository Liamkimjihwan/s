var request = require("request");  
var cheerio = require("cheerio");  
var url = "https://www.ted.com/talks?language=ko&sort=newest&topics%5B%5D=architecture";

console.log("dkdk");

request(url, function(error, response, html){  
    if (error) {throw error};

    var a = cheerio.load(html);
    
/*    $("div.media__image").each(function(){
//    	console.log("djkdjkw");
        $(this).children(".thumb__tugger").each(function(){
        	console.log("djkdjkws");
            var post = {"video":"","image":""};        
        	var mom = $("div.media__image");
        	var thumb = mom.children("img.thumb__image");
        	
        	post["video"] = mom.children("a").attr("href");
        	post["image"] = thumb.attr("src");
        	console.log(post["video"]);
        })
    
    });*/
    
//var value = "";
    var title = $(".vdo-title");
    a('div.media__message h4.h9').each(function(){
    	var crtitle = a(this).text(); 
    	console.log(crtitle);
      title.text('crtitle');
    	//        console.log("제목 : " + $(this).text());
    })
    
    a("div.media__image").each(function(){

/*   	  = a(this).children("a").attr("href"); 
    	  console.log(value);*/
    	    });
    
    a("img.thumb__image").each(function(){
    	  value = {"image":""};
    	  value["image"] = a(this).attr("src"); 
//    	console.log(value);
    });

   a('div.media__message h4.h12').each(function(){
//        console.log("작성자 : " + $(this).text());
    })
    
    
});







	
	