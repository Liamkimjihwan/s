var mysql = require('mysql');
var request = require("request");  
var cheerio = require("cheerio");  
var url = "https://www.ted.com/talks?language=ko&sort=newest&topics%5B%5D=astronomy";
/*https://www.ted.com/talks?language=ko&sort=newest&topics%5B%5D=astronomy
	https://www.ted.com/talks?language=ko&sort=newest&topics%5B%5D=biotech
		https://www.ted.com/talks?language=ko&sort=newest&topics%5B%5D=finance
*/var dbConnection = mysql.createConnection({   
    host: 'localhost', 
    user: 'java89',   
    password: '1111',   
    database: 'dreamtree' 
   });

request(url, function(error, response, html){  
	    if (error) {throw error};
	
	    var a = cheerio.load(html);

	    var count = 0;
	    var crtitle = new Array(); 
	    var anker = new Array();
	    var thumImg = new Array();
	    var author = new Array();    
	    var vodsc = new Array(); 
	    var simg = new Array(); 
	    var spnm = new Array(); 
	    var spdsc = new Array();

	    a('div.media__message h4.h9').each(function(){ // 제목
	    	crtitle[count++] = a(this).text().replace(/\n/g, "").replace(/\r/g, "");
	    });
	    count= 0;
	    a('div.media__image').each(function(){ // 제목
	    	anker[count++] = "https://www.ted.com" + a(this).children("a").attr("href");
	    });
	    for (var i= 0; i < anker.length; i++) {
	    	console.log("==============================");
	    	console.log("anker확인" + anker[i]);
	    	console.log("번호" + i);
	    	
	    }
	    count= 0;
	    a('img.thumb__image').each(function(){ // 제목
	    	thumImg[count++] = a(this).attr("src");
	    });
	    count= 0;
	    a('div.media__message h4.h12').each(function(){ // 제목
	    	author[count++] = a(this).text();
	    });
	    count = 0;
	    
	    
/*	    var url2 = Array();
	    for (var i= 0; i < anker.length; i++) {
	    	url2 = anker[i];
	    	console.log("anker확인" + url2);
	    }*/
	    
	    var url2 = Array();
	    for (var i= 0; i < anker.length; i++) {
	    	url2 = anker[i];
	    request(url2, function(error, response, html){
	    	console.log("anker확인" + url2);
		    if (error) {throw error};
		
		    a = cheerio.load(html);
			
		    vodsc[i] = a('p.talk-description').text().replace(/\n/g, "").replace(/\r/g, "");
		    simg[i] = a('img.thumb__image').attr("src");
		    spnm[i] = a('a.talk-speaker__link').attr("href");
		    spdsc[i++] = a('div.talk-speaker__description').text();
//		    console.log("in " + "spdsc " + spdsc.length + "  vodsc " + vodsc.length);
		});
	    
	    }
//	    console.log("out " + "spdsc " + spdsc.length + "  vodsc " + vodsc.length);
    
	    
//	    for(var i = 0; i < crtitle.length; i++) {
//	    	cono = 8; 
//	    	/*console.log(i + "타이틀" + "[" + crtitle[i]+"]" +"밸류"+ "[" +value[i] + "]" + "썸네일" + "[" +thumImg[i] + "]"+ "작가"+"[" +author[i]+ "]");*/
//	    	dbConnection.query("insert into video(cono, kotl, entl, voimg, vodsc, spnm, sjob, simg) values(?,?,?,?,?,?,?,?)", 
//	    			[cono++, crtitle[i], anker[i], thumImg[i], vodsc[i], spnm[i], spdsc[i], simg[i]], 
//	    			function (err, rows, fields) {
////	    		console.log(rows);
//	    	});
//	    }
});