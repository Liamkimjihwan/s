
var mysql = require('mysql');
var request = require("request");  
var cheerio = require("cheerio");  
var url = "https://www.ted.com/talks?language=ko&sort=newest&topics%5B%5D=architecture";
var dbConnection = mysql.createConnection({   
    host: 'localhost', 
    user: 'java89',   
    password: '1111',   
    database: 'sdb' 
   });

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
    var count = 0;
    var crtitle = new Array();
    var value = new Array();
    var thumImg = new Array();
    var author = new Array();
    a('div.media__message h4.h9').each(function(){ // 제목
    	crtitle[count++] = a(this).text().replace(/\n/g, "").replace(/\r/g, "");
    });
    count= 0;
    a('div.media__image').each(function(){ // 제목
    	value[count++] = a(this).children("a").attr("href");
    });
    count= 0;
    a('img.thumb__image').each(function(){ // 제목
    	thumImg[count++] = a(this).attr("src");
    });
    count= 0;
    a('div.media__message h4.h12').each(function(){ // 제목
    	author[count++] = a(this).text();
    });

    for(var i = 0; i < crtitle.length; i++) {
    	/*console.log(i + "타이틀" + "[" + crtitle[i]+"]" +"밸류"+ "[" +value[i] + "]" + "썸네일" + "[" +thumImg[i] + "]"+ "작가"+"[" +author[i]+ "]");*/
    	dbConnection.query("insert into video(cono, kotl,entl,dsc,spnm,sjob,simg) values(?,?,?,?,?,?,?)", 
    			[i, value[i],thumImg[i],crtitle[i],author[i],'e','f'], 
    			function (err, rows, fields) {
    		console.log(rows);
    	});
    }
    
    
    
/*    a('div.media__message h4.h9, div.media__image, img.thumb__image, div.media__message h4.h12').each(function(){ // 제목
    	crtitle = a('div.media__message h4.h9').text();
    	value = a('div.media__image').children("a").attr("href");
    	 thumImg = a('img.thumb__image').attr("src");
    	 author = a('div.media__message h4.h12').text();
    	 count = count;
    	 console.log(crtitle);
    	 console.log(value);
    	//        console.log("제목 : " + $(this).text());
    	dbConnection.query("insert into video(cono,kotl,entl,dsc,spnm,sjob,simg) values(?,?,?,?,?,?,?)", 
    			[count,value,thumImg,crtitle,author,'e','f'], 
    			function (err, rows, fields) {
    		console.log(rows);
    	});
    	count++;
    })*/
/*    
    a("div.media__image").each(function(){ // 영상 이미지

   	  value = a(this).children("a").attr("href"); 
    	    });
    
    a("img.thumb__image").each(function(){
    	  thumImg = a(this).attr("src"); 
    });

   a('div.media__message h4.h12').each(function(){
     author = a(this).text();
    })
    */
    
    
});

















	
	