var request = require("request");  
var cheerio = require("cheerio");  
var url = "https://www.ted.com/talks?language=ko&sort=newest&topics%5B%5D=architecture";



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
 a("div.media__image").each(function(){
   value = {"video":""};
  value["video"] = a(this).children("a").attr("href"); 
  console.log(value);
    });
    
    a("img.thumb__image").each(function(){
    	  value = {"image":""};
    	  value["image"] = a(this).attr("src"); 
    	console.log(value);
    });

   a('div.media__message h4.h12').each(function(){
        console.log("작성자 : " + a(this).text());
    })
    
    a('div.media__message h4.h9').each(function(){
        console.log("제목 : " + a(this).text());
    })
    
});
console.log(request);


/*request(url, function (err, res, html) {
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
})
*/




	
	