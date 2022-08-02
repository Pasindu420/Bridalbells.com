//change this to update image folder
var folderDate = "test1220";

var baseURL = "http://www.sportsauthority.com";
var hostedURL = baseURL + "/graphics/media/tsa/hp/2015/" + folderDate + "/";
//hostedURL="";
//var templateURL = baseURL + "/graphics/media/tsa/hp/template_2014/";

var $h=jQuery.noConflict();


/*IMAGES*/
//major slide image names
var slides = [];
slides.push(["100415_Major1.jpg","#"]);
slides.push(["100415_Major1.jpg","#"]);
var numberOfSlides = slides.length;


//minor images
var tsaMinors1 = [];
tsaMinors1.push(["HP-Text1.png","#"]);
tsaMinors1.push(["HP-Text2.png","#"]);
tsaMinors1.push(["100415_textdeals3_football.jpg","#"]);


var tsaMinors2 = [];
tsaMinors2.push(["100415_Minor1.jpg","#"]);
tsaMinors2.push(["100415_Minor2.jpg","#"]);

var tsaMinors3 = [];
tsaMinors3.push(["HP-Champion-Catalog.jpg","#"]);
tsaMinors3.push(["HP-BTS-Catalog.jpg","#"]);
tsaMinors3.push(["HP-Weekly-Catalog.jpg","#"]);


var plCarousel = [];
plCarousel.push(["HP-AlpineDesign-PB.jpg","http://www.sportsauthority.com/Shop-By-Brand/Alpine-Design/category.jsp?categoryId=3143382&ab=MYOAS_Homepage_Brand_KEY_AlpineDesign_092715_SH_0_NA_LFS_NPCNS"]);
plCarousel.push(["HP-Aspire-PB.jpg","http://www.sportsauthority.com/Shop-By-Brand/Aspire/category.jsp?categoryId=4440138&ab=MYOAS_Homepage_Brand_KEY_Aspire_092715_SH_0_NA_LFS_NPCNS"]);
plCarousel.push(["HP-Bloom-PB.jpg","http://www.sportsauthority.com/Shop-By-Brand/Bloom/family.jsp?categoryId=34369956&ab=MYOAS_Homepage_Brand_KEY_Bloom_092715_SH_0_NA_LFS_NPCNS"]);
plCarousel.push(["HP-Champion-PB.jpg","http://www.sportsauthority.com/Shop-By-Brand/Champion-GEAR/category.jsp?categoryId=60530716&ab=MYOAS_Homepage_Brand_KEY_ChampGear_092715_SH_0_NA_LFS_NPCNS"]);
plCarousel.push(["HP-Oxide-PB.jpg","http://www.sportsauthority.com/Shop-By-Brand/Oxide/family.jsp?categoryId=66054346&ab=MYOAS_Homepage_Brand_KEY_Oxide_092715_SH_0_NA_LFS_NPCNS"]);
plCarousel.push(["HP-Tommy-PB.jpg","http://www.sportsauthority.com/Shop-By-Brand/TommyArmour/category.jsp?categoryId=3148256&ab=MYOAS_Homepage_Brand_KEY_TommyArmour_092715_SH_0_NA_LFS_NPCNS"]);
plCarousel.push(["HP-Trayl-PB.jpg","http://www.sportsauthority.com/Shop-By-Brand/Trayl/category.jsp?categoryId=21229946&ab=MYOAS_Homepage_Brand_KEY_Trayl_092715_SH_0_NA_LFS_NPCNS"]);

var banners =  [];
banners.push(["","#","#f7f7f7"]);/*intentionally blank goes beneath major slider*/
banners.push(["","#","#f7f7f7"]);/*intentionally blank goes beneath certona2*/
banners.push(["league_banner.png","#","#F03125"]);


function buildSlider(){  
  
	for(var i=0;i<numberOfSlides;i++){		
		
		//add slide image
		$h('#tsaSlider').append('<div class="gallery-cell pure-u-1" id="major' + (i+1) + '"><a href="'+ slides[i][1] +'"><img class="pure-u-1" src="' + hostedURL + slides[i][0] + '" alt="" /></a></div>');			
	}
	
	if(numberOfSlides>1){
    $h('#tsaSlider').addClass('gallery');
    
		//initialize flickity, imagesLoaded:true is key to making it work
		$h('#tsaSlider').flickity({ freeScroll: false, contain: false, prevNextButtons: true, pageDots: true, setGallerySize: false, resize: true, autoPlay: false, autoPlay: 7000, wrapAround: true, friction: 0.25,imagesLoaded: true});
		
		
		//make image maps respond to hover
		$h('area').mouseover(function(event) { 
			$h('#tsaSlider .flickity-prev-next-button.previous').addClass('hover');
			$h('#tsaSlider .flickity-prev-next-button.next').addClass('hover');
		});
		$h('area').mouseout(function(event) {
			$h('#tsaSlider .flickity-prev-next-button.previous').removeClass('hover');
			$h('#tsaSlider .flickity-prev-next-button.next').removeClass('hover');
		});
	
	}
}


function buildMinors(){
	
	for(var i=0;i<tsaMinors1.length;i++){		
    	$h('#tsaMinors1').append('<div class="minor pure-u-1 pure-u-sm-1-3 pure-u-md-1-3"><div class="l-box" id="minor1-'+(i+1)+'" ><a href="'+ tsaMinors1[i][1] +'"><img class="pure-u-1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-128/loading-graphic.gif" data-src="' + hostedURL + tsaMinors1[i][0] + '" alt="" /><noscript><img class="pure-u-1" src="' + hostedURL + tsaMinors1[i][0] + '" alt="" /></noscript></a></div></div>');
		
	}
	
	for(var j=0;j<tsaMinors2.length;j++){		
    	$h('#tsaMinors2').append('<div class="minor pure-u-1 pure-u-sm-1-2 pure-u-md-1-2"><div class="l-box" id="minor1-'+(i+1)+'" ><a href="'+ tsaMinors2[j][1] +'"><img class="pure-u-1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-128/loading-graphic.gif" data-src="' + hostedURL + tsaMinors2[j][0] + '" alt="" /><noscript><img class="pure-u-1" src="' + hostedURL + tsaMinors2[j][0] + '" alt="" /></noscript></a></div></div>');
		
	}
	
	for(var k=0;k<tsaMinors3.length;k++){		
    	$h('#tsaMinors3').append('<div class="minor pure-u-1 pure-u-sm-1-3 pure-u-md-1-3"><div class="l-box" id="minor1-'+(i+1)+'" ><a href="'+ tsaMinors3[k][1] +'"><img class="pure-u-1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-128/loading-graphic.gif" data-src="' + hostedURL + tsaMinors3[k][0] + '" alt="" /><noscript><img class="pure-u-1" src="' + hostedURL + tsaMinors3[k][0] + '" alt="" /></noscript></a></div></div>');
		
	}	
	

}

function buildPrivateCarousel(){
	for(var k=0;k<plCarousel.length;k++){		
    	$h('#tsaPrivateLabel>div').append('<div class="gallery-cell"><a href="' + plCarousel[k][1] +'"><img data-flickity-lazyload="' + hostedURL + plCarousel[k][0] + '" alt="" ' + k + '" /></a></div>');		
	}
	$h('#tsaPrivateLabel>div').flickity({ freeScroll: false, contain: false, prevNextButtons: true, pageDots: false, setGallerySize: false, resize: true, autoPlay: false, wrapAround: true, friction: 0.25, lazyLoad:5, cellAlign: 'center', imagesLoaded: true});
}


function initializeBrandBar(){
	$h('#tsaBrandBar div.gallery').flickity({ freeScroll: false, contain: true, prevNextButtons: false, pageDots: false, setGallerySize: false, resize: true, autoPlay: false, wrapAround: true, friction: 0.25, cellAlign: 'left', percentPosition: false,  imagesLoaded: true});
}

function buildBanners(){
	if(banners[0][0]==""){
		$h('#tsaBanner1').css({'min-height':'0px','padding':'0px'});
	}else{
		$h('#tsaBanner1 div.sa-align-mid').append('<div class="l-box"><a href="'+banners[0][1]+'"><img class="pure-u-1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-128/loading-graphic.gif" data-src="' + hostedURL + banners[0][0] + '" alt="" /></a></div>');
    
    //banner bg color
    if(banners[0][2]){$h('#tsaBanner1').css('background-color',banners[0][2])}
	}
	if(banners[1][0]==""){		
		$h('#tsaBanner2').css({'min-height':'0px','padding':'0px'});
	}else{
		$h('#tsaBanner2 div.sa-align-mid').append('<div class="l-box"><a href="'+banners[1][1]+'"><img class="pure-u-1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-128/loading-graphic.gif" data-src="' + hostedURL + banners[1][0]  + '" alt="" /></a></div>');
    
    //banner bg color
    if(banners[1][2]){$h('#tsaBanner2').css('background-color',banners[1][2])}
	}
	
	if(banners[2]){
		$h('#tsaBanner3 div.sa-align-mid').append('<div class="l-box"><a href="'+banners[2][1]+'"><img class="pure-u-1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-128/loading-graphic.gif" data-src="' + hostedURL + banners[2][0]  + '" alt="" /></a></div>');
    
    //banner bg color
    if(banners[2][2]){$h('#tsaBanner3').css('background-color',banners[2][2])}
	}
		
}



function buildCertona(container){
  
  var jsonRaw=window.jsonResponse;
  
  //cycle through response array and find the container id
  for(var z=0; z<jsonRaw.length;z++){
    if(jsonRaw[z].scheme==container.substring(1)){
      jsonRaw=jsonRaw[z].output;  
      //reassign jsonRaw variable to the exact json response for below
    }    
  }
  
  //parse json and evaluate
   jsonRaw = JSON.parse("["+jsonRaw+"]");
  
  var pidURL = "http://www.sportsauthority.com/product/index.jsp?productId=";
  
  var sliderWidth;
  var sliderWidth;
  var buildCount;
  var listPrice;
  var salePrice;
  var showListPrice=true; 
  
  sliderWidth = $h(container).width();
  buildCount = Math.floor( sliderWidth/150);//how many to show initially  

  
  //add html container
  $h(container).html('<div class="gallery"></div>');
  
  //loop through json data array
	for(var k=0;k<jsonRaw.length;k++){ 
    
    listPrice=parseFloat(jsonRaw[k].listprice).toFixed(2);
    salePrice=parseFloat(jsonRaw[k].saleprice).toFixed(2);
    
    if(showListPrice && salePrice<listPrice){
      $h(container+'>div.gallery').append('<div class="gallery-cell certona"> <a href="' + pidURL+jsonRaw[k].id + '"><img class="certona-image gallery-cell-image" data-flickity-lazyload="' + jsonRaw[k].imageurl + '" alt="' + jsonRaw[k].description + '" /></a> <p class="certona-price"><span class="certona-sale-price">$'+ salePrice + '</span> <span class="certona-list-price">$'+ listPrice + '</span></p> <p class="certona-desc"><a href="' + pidURL+jsonRaw[k].id + '">' + jsonRaw[k].description +'</p></a></div>');
      
    }else{
   $h(container+'>div.gallery').append('<div class="gallery-cell certona"> <a href="' + pidURL+jsonRaw[k].id + '"><img class="certona-image gallery-cell-image" data-flickity-lazyload="' + jsonRaw[k].imageurl + '" alt="' + jsonRaw[k].description + '" /></a> <p class="certona-price">$'+ parseInt(jsonRaw[k].saleprice).toFixed(2) + '</p> <p class="certona-desc"><a href="' + pidURL+jsonRaw[k].id + '">' + jsonRaw[k].description +'</p></a></div>');
    }
     
  };//end loop building carousel
  
  //initialize flickity after building slides
	$h(container+'>div.gallery').flickity({ freeScroll: true, contain: true, prevNextButtons: true, pageDots: false, setGallerySize: false, resize: true, autoPlay: false, wrapAround: false, friction: 0.25, imagesLoaded: true, lazyLoad:buildCount, cellAlign: 'left', initialIndex: 0});
  
  var index;
  
  //press next button to skip ahead and load images 
  $h(container+' button.next').on( 'click', function() {        
    
    //check current index add on next set
    index =$h(container+'>div.gallery').flickity().data('flickity').selectedIndex+(buildCount-1);
       
    //check if at the end
    if(index>$h(container+'>div.gallery').flickity().data('flickity').cells.length){
      index=$h(container+'>div.gallery').flickity().data('flickity').cells.length;
    }
    
    //move the slider to the new select position
    $h(container+'>div.gallery').flickity('select', index ); 
  });/*end next button function*/

  //previous button same concept as above
  $h(container+' button.previous').on( 'click', function() {
    index =$h(container+'>div.gallery').flickity().data('flickity').selectedIndex-(buildCount-1);
    
    if(index<0){index=0;}
    
   $h(container+'>div.gallery').flickity('select', index )
  });/*end prev button function*/  
  
  
  //show the container
   $h(container).css('visibility','visible');
  
}; //end buildCertona

function loadInvodo(){
	Invodo.init({
  pageName: "HomePage",
  pageType: "product",
  onload: function(){
	   Invodo.Widget.add({refId:"fieldVid1", widgetId:"player1", mode:"embedded", type:"inplayer", parentDomId:"fieldVid1", autoplay:false, podId:"TRBG50M8"});
	   }
	});
	
}

function buildCTA(divID,ctaText,ctaTop,ctaLeft,ctaColor,ctaURL){
$h('#'+divID).append('<div class="pover" style="top:'+ctaTop+'%; left:'+ctaLeft+'%;"><a class="pure-button cta-button sa-'+ ctaColor +'-bg" href="'+ ctaURL +'">'+ ctaText +' &#9656</a></div>');
}
  

//After everything on the page has loaded
$h(document).ready(function () {
	"use strict";	
	
	buildSlider();
	buildMinors();
	buildPrivateCarousel();
	initializeBrandBar();
	buildBanners();
	buildCertona('#homejson_rr'); 
  buildCertona('#homejson2_rr');
	
 //BuildCTAs
  	buildCTA("major1","SHOP LATER",80,45,"red",baseURL); 
	
	Invodo.init({
  pageName: "HomePage",
  pageType: "product",
  onload: function(){
	   Invodo.Widget.add({refId:"fieldVid1", widgetId:"player1", mode:"embedded", type:"inplayer", parentDomId:"fieldVid1", autoplay:false, podId:"TRBG50M8"});
	   }
	});
	
  $h('img').unveil();
 
	
});//end document ready

