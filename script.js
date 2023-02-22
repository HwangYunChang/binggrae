jQuery(document).ready(function(){

    $("nav div").hover(function(){
        $(this).find(".sub").stop().fadeToggle()
        
        $(".sub").css({
          background:"#fff",
          borderRadius:"30px"  
        })
    })
   

	$(".main-visual .items").slick({
		infinite:true,
		autoplay:true, 
		autoplaySpeed: 4000,
		arrows:false,
		dots: true
	});
    
    $(".section1 .items").slick({
		infinite: true,
		autoplay: true, 
		autoplaySpeed: 2000,
		arrows:false,
		dots: false,
        slidesToShow: 3,
        slidesToScroll: 1
	});
     
    
    
});	//End