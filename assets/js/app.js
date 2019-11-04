var myApp = new Framework7({
    swipeBackPage: false,
    pushState: true,
    swipePanel: 'left',

});


var $$ = Dom7;
var mainView = myApp.addView('.view-main', {dynamicNavbar: true});


$$('.popup-splash').on('opened', function () {
    var mySwiper = myApp.swiper('.swiper-container', {
        speed: 400,
        pagination: '.swiper-pagination',
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    });
	
});
$$('#shareToWA').on('click', function () {
	window.plugins.socialsharing.shareViaWhatsApp('Aplikasi Keren ', null /* img */, 'https://play.google.com/store/apps/details?id=com.computika.infinityguitarchord.songbook', 
	function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
});
$$('#shareToFB').on('click', function () {
	window.plugins.socialsharing.shareViaFacebook('Aplikasi Keren http://bit.ly/InvinityGuitarChord ', null, 'http://bit.ly/NewInfinityGuitarChord', 
	function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
});
$$('#shareToIG').on('click', function () {
	window.plugins.socialsharing.shareViaInstagram('Aplikasi Keren http://bit.ly/InvinityGuitarChord ', null, 'http://bit.ly/NewInfinityGuitarChord', 
	function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
});
$$('#shareToSMS').on('click', function () {
	window.plugins.socialsharing.shareViaSMS('Aplikasi Keren http://bit.ly/InvinityGuitarChord ', null, 'http://bit.ly/NewInfinityGuitarChord', 
	function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
});
$$('#shareToEmail').on('click', function () {
	window.plugins.socialsharing.shareViaEmail('Aplikasi Keren http://bit.ly/InvinityGuitarChord ', null, 'http://bit.ly/NewInfinityGuitarChord', 
	function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
});
$$('#shareToLink').on('click', function () {
	window.plugins.socialsharing.shareVia('Aplikasi Keren http://bit.ly/InvinityGuitarChord ', null, 'http://bit.ly/NewInfinityGuitarChord', 
	function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
});

$$('#ratebutton').on('click', function () {
	cordova.plugins.market.open('com.computika.infinityguitarchord.songbook');
});
$$('#probutton').on('click', function () {
	if (myApp.alert("dengan Menggunakan Versi Pro (Bebas Iklan) anda sudah memberikan kami dukungan dan support untuk terus mengembangkan aplikasi ini")){
	cordova.plugins.market.open('com.computika.infinityguitarchord.songbookpro');
	}
});
$$('#exitbutton').on('click', function () {
	
	navigator.app.exitApp();
});


if( (!localStorage.getItem("fungsiupdate") || localStorage.getItem("fungsiupdate") == ''))
{ localStorage.setItem("fungsiupdate", "https://catatanlamers.github.io/InfinityGuitarChord/data.js"); }

var linkupdateurl = ''+localStorage.getItem("fungsiupdate")+'?v='+localStorage.getItem("clearingcache")+'';
$$.get(linkupdateurl, function(data) {
	$$('#isi_li').append(data);
	
	
});

myApp.onPageInit('carilagu', function (page) {
	admob.interstitial.show();	
  var linkmasterdata = "assets/js/dbkunci.js";
  $.getScript( linkmasterdata, function() {
	  $.getScript( linkmasterdata, function() {
			var options = {
				data: data,
				placeholder: "Cari Lagu",
				list: {
					maxNumberOfElements: 20,
					match: {
						enabled: true
					}
				},
				theme: "round",
				getValue: "P",
				template: {
					type: "custom",
					method: function(value, item) {			
						return "<a href='chordplayer.html#" + value.split("@")[0] + "' ><span style=\"color:#AB000D;\">&raquo; " + value.split("@")[1] + "</span></a>";
					}
				}
			};
			$("#textpencarian").easyAutocomplete(options);
		});		
	});	
});


myApp.onPageInit('banddir', function (page) {
	for (i = 2; i < 28; i++) {
		var li= "<a style=\"font-weight: bold;font-size: 20px;color:#bb1403;\"href=\"bandlist.html#"+i+"\" style=\"color:#ffffff\"><div class=\"row banddir\" ><div class=\"col-33\" style=\"padding-left: 20px;\"><i class=\"fa fa-star fa-lg\"></i><i class=\"fa fa-star fa-lg\"></i><i class=\"fa fa-star fa-lg\"></i></div><div class=\"col-33\" style=\"text-align: center;\"><small style=\"color:white\"> "+ (i+8).toString(36).toUpperCase() +"</small></div><div class=\"col-33 text-right\" style=\"padding-right: 20px;\"><i class=\"fa fa-star fa-lg\"></i><i class=\"fa fa-star fa-lg\"></i><i class=\"fa fa-star fa-lg\"></i></div></div></a>";
		$('#disiniletakdir').append(li);
	}
});

	
	
myApp.onPageInit('bandlist', function (page) {
	var idabjad = window.location.hash.split("#")[2];
	if(idabjad == 2) { var foldernya = 'A'; };
	if(idabjad == 3) { var foldernya = 'B'; };
	if(idabjad == 4) { var foldernya = 'C'; };
	if(idabjad == 5) { var foldernya = 'D'; };
	if(idabjad == 6) { var foldernya = 'E'; };
	if(idabjad == 7) { var foldernya = 'F'; };
if(idabjad == 8) { var foldernya = 'G'; };
	if(idabjad == 9) { var foldernya = 'H'; };
	if(idabjad == 10) { var foldernya = 'I'; };
	if(idabjad == 11) { var foldernya = 'J'; };
	if(idabjad == 12) { var foldernya = 'K'; };
	if(idabjad == 13) { var foldernya = 'L'; };
	if(idabjad == 14) { var foldernya = 'M'; };
	if(idabjad == 15) { var foldernya = 'N'; };
	if(idabjad == 16) { var foldernya = 'O'; };
	if(idabjad == 17) { var foldernya = 'P'; };
	if(idabjad == 18) { var foldernya = 'Q'; };
	if(idabjad == 19) { var foldernya = 'R'; };
	if(idabjad == 20) { var foldernya = 'S'; };
	if(idabjad == 21) { var foldernya = 'T'; };
	if(idabjad == 22) { var foldernya = 'U'; };
	if(idabjad == 23) { var foldernya = 'V'; };
	if(idabjad == 24) { var foldernya = 'W'; };
	if(idabjad == 25) { var foldernya = 'X'; };
	if(idabjad == 26) { var foldernya = 'Y'; };
	if(idabjad == 27) { var foldernya = 'Z'; };
	if(idabjad == 1) { var foldernya = '0-9'; };
	document.title = "[Direktori Abjad] "+foldernya;
	var listband = "";
	$.getScript( "assets/js/bandlist.js", function() {
		for (i = 0; i < databandlist.length; i++) { 
			if(databandlist[i].id_abjad == idabjad) {
				listband +="<a style=\"font-weight: bold;font-size: 20px;color:#ffbfbf;\" id=\""+ databandlist[i].id_band +"\" href=\"bandalbum.html#"+ databandlist[i].id_abjad +"#"+ databandlist[i].id_band +"#"+ databandlist[i].nama_band +"\"><div class=\"row banddir\"><div class=\"col-99\" style=\"padding-left: 20px;\"><i class=\"fa fa-headphones fa-lg\"></i>&nbsp;<small style=\"color:white\"> "+ databandlist[i].nama_band + "</small></div></div></a>";
			}
		}$('#disiniletaklist').append(listband);
	});
});

myApp.onPageInit('bandalbum', function (page) {
	var okehash = location.hash.split("#");	
	var backtolist = "<a href=\"bandlist.html#"+okehash[2]+"\" class=\"back link\" data-load-previous=\"true\" ><span class=\"icon-chevron-left\"></span> <span>Back</span></a>";
	$('#backtolist').append(backtolist);
	$.getScript( "assets/js/dbalbumlist/albumlist-"+okehash[2]+".js", function() {
		var tomboljudulalbum = "<button class=\"button buttonbandalbum\" ><span style=\"color:white\"> List Lagu "+ decodeURIComponent(okehash[4])+"</span></button></div>";
		$('#tomboljudulalbum').append(tomboljudulalbum);
		document.title = "[Album] "+decodeURIComponent(okehash[4]);
		var isialbum = "";
		for (i = 0; i < dataalbumlist.length; i++) { 
			if(dataalbumlist[i].id_band == okehash[3]) {
				isialbum +="<a style=\"font-weight: bold;font-size: 20px;color:#ffbfbf;\" id=\""+ dataalbumlist[i].id +"\" href=\"chordplayer.html#"+ dataalbumlist[i].id +"\"><div class=\"row banddir\"><div class=\"col-99\" style=\"padding-left: 20px;\"><i class=\"fa fa-headphones fa-lg\"></i>&nbsp;<small style=\"color:white\"> "+ dataalbumlist[i].judul + "</small></div></div></a>";
			}
		};
		$('#disiniletakalbum').append(isialbum);
	});

});


myApp.onPageInit('chordplayer', function (page) {
	
	$(document).ready(function() {
		admob.interstitial.show();	
		window.plugins.insomnia.keepAwake()
		
		if(!localStorage.getItem("nilaiscroll")) { localStorage.setItem("nilaiscroll", "5"); };
		var hh = localStorage.getItem("nilaiscroll");
		$$('input#textscroll').val(hh);
	
		var urllokasi = location.hash;
		var pisah = urllokasi.split("#");
		var idchord = pisah[2];
		var kelipatan = 100;
		for (x = 0; x < idchord;x = x+kelipatan ){ 
			batasatas = x+kelipatan; 
			batasbawah = batasatas-kelipatan; 
		}	
		var linkjschordmini = ''+batasbawah+'-'+batasatas+'';	
		$.getScript( "assets/js/db/chord"+linkjschordmini+".js", function() {
			
			$('#dpvideo').append("<a class=\"external\" href=\"https://www.youtube.com/results?search_query="+(tampilchord[idchord]['nama_band'].replace(/\'/g, "\\'"))+" "+(tampilchord[idchord]['judul'].replace(/\'/g, "\\'"))+"\" ><span class=\"fa-stack fa-lg\"><i class=\"fa fa-headphones fa-stack-1x fa-inverse\"></i></span></a>");
			
			
			
			document.title = "[Chord] "+tampilchord[idchord]['nama_band']+" - "+tampilchord[idchord]['judul'];
			document.getElementById("textjudullagu").innerHTML=""+tampilchord[idchord]['nama_band']+" - "+tampilchord[idchord]['judul']+"";
			document.getElementById("tittle_lagi").innerHTML=""+tampilchord[idchord]['nama_band']+" - "+tampilchord[idchord]['judul']+"";
			isiyangdipisah = tampilchord[idchord]['isi'];
			isiyangdipisah = isiyangdipisah.replace(/Gb/g,"F#");
			isiyangdipisah = isiyangdipisah.replace(/Ab/g,"G#");
			isiyangdipisah = isiyangdipisah.replace(/Bb/g,"A#");
			isiyangdipisah = isiyangdipisah.replace(/Db/g,"C#");
			isiyangdipisah = isiyangdipisah.replace(/Eb/g,"D#");
			isiyangdipisah = isiyangdipisah.replace(/A:s1:([a-z])/g, "a:s1:$1");
			isiyangdipisah = isiyangdipisah.replace(/:([A-Z])(.*?):/g, ":<span style=\"color:#fff700;font-weight:bold;\">$1$2</span>:");
			posisikunci = isiyangdipisah.replace(/<\/span>(.*?)<span style=\"color:#fff700;font-weight:bold;\">/g, " ");
			posisikunci = posisikunci.replace(/(.*?)<span style=\"color:#fff700;font-weight:bold;\">/g, " ");
			posisikunci = posisikunci.replace(/<\/span>(.*?)$/g, " ");
			Array.prototype.removeDuplicate = function(){
			   var result = [];
			   for(var i =0; i < this.length ; i++){
				   if(result.indexOf(this[i]) == -1) result.push(this[i]);
			   }
			   return result;
			}
			var posisikunci = posisikunci;
			posisikunci = posisikunci.replace(/[\/]/g," ").split(" ").removeDuplicate().join(":after::before:")+":after:";
			posisikunci = posisikunci.replace(/#/g, "kr3s");
			posisikunci = posisikunci.replace(/:before:(.*?):after:/g, "<div><img src='assets/img/chord/$1.png' ></div>");
			posisikunci = posisikunci.replace(/(:before:|:after:)/g, "");

			isiyangdipisah = isiyangdipisah.replace(/http(.*?):x/g, ":x");

			isiyangdipisah = isiyangdipisah.replace(/:s10:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
			isiyangdipisah = isiyangdipisah.replace(/:s9:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
			isiyangdipisah = isiyangdipisah.replace(/:s8:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
			isiyangdipisah = isiyangdipisah.replace(/:s7:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
			isiyangdipisah = isiyangdipisah.replace(/:s6:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
			isiyangdipisah = isiyangdipisah.replace(/:s5:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
			isiyangdipisah = isiyangdipisah.replace(/:s4:/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
			isiyangdipisah = isiyangdipisah.replace(/:s3:/g, "&nbsp;&nbsp;&nbsp;");
			isiyangdipisah = isiyangdipisah.replace(/:s2:/g, "&nbsp;&nbsp;");
			isiyangdipisah = isiyangdipisah.replace(/:s1:/g, "&nbsp;");
			isiyangdipisah = isiyangdipisah.replace(/:x5:/g, "<br><br><br><br><br>");
			isiyangdipisah = isiyangdipisah.replace(/:x4:/g, "<br><br><br><br>");
			isiyangdipisah = isiyangdipisah.replace(/:x3:/g, "<br><br><br>");
			isiyangdipisah = isiyangdipisah.replace(/:x2:/g, "<br><br>");
			isiyangdipisah = isiyangdipisah.replace(/:x1:/g, "<br>");
			if(isiyangdipisah == '' || !isiyangdipisah || 0 === isiyangdipisah.length) { 
				isiyangdipisah = '<br><br><br><br><center>Not Found!<br>Please Update Your Apps<br>To The Latest Version!<br><Br><hr>Or Contact Us<br>Inc Media Tawa</center>'; 
			}		
			$('#stage').append("<span class=\"chord\">"+isiyangdipisah+"<br><br><hr><div class=\"diagram_chord\">"+posisikunci+"</div></span>");
			
			var tombolalbum = "<a href=\"bandalbum.html#"+tampilchord[idchord]["id_abjad"]+'#'+tampilchord[idchord]["id_band"]+'#'+tampilchord[idchord]["nama_band"]+"\" class=\"link \"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-list fa-stack-1x fa-inverse\"></i></span></a>";
			$('#dpalbum').append(tombolalbum);
			 if (!localStorage.getItem("laguku"+idchord)){
				 $$('#belumsimpan').show();
				 $$('#sudahsimpan').hide();
			 }else{
				 $$('#belumsimpan').hide();
				 $$('#sudahsimpan').show();
			 }

			$$('.simpanchord').on('click', function () {
				if (!localStorage.getItem("laguku"+idchord)){
					localStorage.setItem("laguku"+idchord, ""+tampilchord[idchord]['nama_band']+" - "+tampilchord[idchord]['judul']+"");
					myApp.addNotification({
						title: 'Saved !!',
						subtitle: 'Berhasil disimpan di Koleksi',
						message: 'Lihat daftar Koleksi anda di halaman Mychord atau dengan mengklik <a href="mychord.html" class="link">disini</a>',
						media: '<i class="fa fa-save fa-lg"></i>'
					});
					$$('#belumsimpan').hide();
					$$('#sudahsimpan').show();
				}
				else{
					localStorage.removeItem("laguku"+idchord);
					myApp.addNotification({
						title: 'Terhapus',
						subtitle: 'Lagu Dihapus dari Daftar Koleksi',
						
						media: '<i class="fa fa-trash fa-lg"></i>'
					});
					$$('#belumsimpan').show();
					$$('#sudahsimpan').hide();
				}
				
			});

		});
	



		var match;
		var chords =
			['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B','C','Db','D','D#','E','F','Gb','G','G#','A','A#','B'];
		var chordRegex = /C#|D#|F#|G#|A#|Db|Eb|Gb|Ab|Bb|C|D|E|F|G|A|B/g;

			$('#transposeUp').click(function() {
			$('.chord').each(function() {
				var currentChord = $(this).html();
				var currentChord = currentChord.replace(/kr3s/g, "#");
				var output = "";
				var parts = currentChord.split(chordRegex);
				var index = 0;
				while (match = chordRegex.exec(currentChord))
				{
					var chordIndex = chords.indexOf(match[0]);
					output += parts[index++] + chords[chordIndex+1];
				};
				output += parts[index];
				output = output.replace(/Gb/g,"F#");
				output = output.replace(/Ab/g,"G#");
				output = output.replace(/Bb/g,"A#");
				output = output.replace(/Db/g,"C#");
				output = output.replace(/Eb/g,"D#");
				output = output.replace(/<img(.*?)#(.*?)>/g, "<img$1kr3s$2>");

				$(this).html(output);
			});
		});

		$('#transposeDown').click(function() {
			$('.chord').each(function() {
				var currentChord = $(this).html();
				var currentChord = currentChord.replace(/kr3s/g, "#");
				var output = "";
				var parts = currentChord.split(chordRegex);
				var index = 0;
				while (match = chordRegex.exec(currentChord))
					{
						var chordIndex = chords.indexOf(match[0],1);
						output += parts[index++] + chords[chordIndex-1];
					};
				output += parts[index];
				output = output.replace(/Gb/g,"F#");
				output = output.replace(/Ab/g,"G#");
				output = output.replace(/Bb/g,"A#");
				output = output.replace(/Db/g,"C#");
				output = output.replace(/Eb/g,"D#");
				output = output.replace(/<img(.*?)#(.*?)>/g, "<img$1kr3s$2>");

				$(this).html(output);
			});
		});

		$('#zoomin').click(function() {
			if (document.querySelector('#stage').style.fontSize == "") {
				document.querySelector('#stage').style.fontSize = "1.0em";
			};
			document.querySelector('#stage').style.fontSize = parseFloat(document.querySelector('#stage').style.fontSize) + (1 * 0.2) + "em";
		
		});
		$('#zoomout').click(function() {
			if (document.querySelector('#stage').style.fontSize == "") {
				document.querySelector('#stage').style.fontSize = "1.0em";
			};
			document.querySelector('#stage').style.fontSize = parseFloat(document.querySelector('#stage').style.fontSize) + (-1 * 0.2) + "em";
		
		});

	
		$$('.tampilzoom').on('click', function () {$$('.containerZoom').show();});
		$$('.fa-times-circle').on('click', function () {$$('.containerZoom').hide();});	
		$$('.tampilscroll').on('click', function () {$$('.containerscroll').show();});
		$$('.close_scroll').on('click', function () {$$('.containerscroll').hide();});
		$$('.btn_play').on('click', function () {
			$$('.btn_play').hide();
			$$('.btn_stop').show();
		
		var hash = "#endchord";
		var nilaiuser = document.getElementById("textscroll").value;
		var kecepatan = nilaiuser * 70000;
		$('.page-content').animate({
			scrollTop: $(hash).offset().top
			}, kecepatan, function(){
						
		});
			
			
		});
		$$('.btn_stop').on('click', function () {
			$$('.btn_play').show();
			$$('.btn_stop').hide();
			mainView.router.refreshPage();
		});
		
		$$('.textscroll').change(function(){
			var nx = this.value;
			if(nx < 1 || nx > 100) { nx = 5; };
			localStorage.setItem("nilaiscroll", ""+nx+"");
		});
		
		
		
	});
	
	
	
	
});



















$$(document).on('pageInit', function (e) {
	var page = e.detail.page;
	
	if (page.name == 'index'){
	
		var linkrandom = 'assets/js/dbkunci.js';
		$.getScript( linkrandom, function() {
			var batas = 9;
			for (var j = 0; j < batas; j++){
				var rand = data[Math.floor(Math.random() * data.length)];
				
				
				var isirandom =  "<div class=\"card-info popularcard\"><div class=\"row\"><div class=\"col-88\"><small><a href=\"chordplayer.html#"+rand.P.split('@')[0]+"\" style=\"color:#ffffff\">&rAarr; "+rand.P.split('@')[1]+"</a></small></div><div class=\"col-22 text-right\"></div></div></div>";
				
				$('.popularchord').append(isirandom);	
			
			}
		
});
		
	}
	var jumlahmychord=0;
	if( page.name === 'mychord' ){
	var isimychord = '';
			for(var i=0, panjang=localStorage.length; i<panjang; i++) {
				var key = localStorage.key(i);
				var value = localStorage[key];
				if(key.match(/laguku/)) {
				jumlahmychord++;	
				var key = key.replace(/laguku/i, '');
				
				var isimychord = isimychord + "<div class=\"row\"><div class=\"col-88\"><small><a href=\"chordplayer.html#"+ key +"\" style=\"color:#ffffff\">&rAarr; "+value+"</a></small></div><div class=\"col-22 text-right\"></div></div>";
				}
				
			}

	$('.disini').append(isimychord);
	}
	if(jumlahmychord >= 1){
		
		$('#jumlahmychord').append("<span class=\"badge badge-primary\">"+jumlahmychord+"</span>");
		
	}
	
	
	
	
	

	
	
	
    
	
	

    

    
   

   

    

  
	
	
    

   
  



    


});

$(document).ready(function() {
	
	if( localStorage.getItem('statusSplash') === null || localStorage.getItem('statusSplash') === true ) {
        myApp.popup('.popup-splash');
        localStorage.setItem('statusSplash', true);
    }		
	var linkrandom = 'assets/js/dbkunci.js';
		$.getScript( linkrandom, function() {
			var batas = 9;
			for (var j = 0; j < batas; j++){
				var rand = data[Math.floor(Math.random() * data.length)];
				
				
				var isirandom =  "<div class=\"card-info popularcard\"><div class=\"row\"><div class=\"col-88\"><small><a href=\"chordplayer.html#"+rand.P.split('@')[0]+"\" style=\"color:#ffffff\">&rAarr; "+rand.P.split('@')[1]+"</a></small></div><div class=\"col-22 text-right\"></div></div></div>";
				
				$('.popularchord').append(isirandom);	
			
			}
		});
	
	
	

    

    

  

    
});




