var admobid = {}
if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
  admobid = {
    banner: 'ca-app-pub-4903669693063977/7866283471',
    interstitial: 'ca-app-pub-4903669693063977/7819834408'
  }
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
  admobid = {
    banner: 'ca-app-pub-4903669693063977/7866283471',
    interstitial: 'ca-app-pub-4903669693063977/7819834408'
  }
}

document.addEventListener('deviceready',function(){
	admob.banner.config({
		id: admobid.banner,
		isTesting: false,
		autoShow: true
	});
	admob.banner.prepare();
	
	
	
	admob.interstitial.config({
		id: admobid.interstitial,
		isTesting: false,
		autoShow: false
	});
	 admob.interstitial.prepare();
},false);

document.addEventListener('admob.interstitial.events.CLOSE', function(event) {


  admob.interstitial.prepare();
});





