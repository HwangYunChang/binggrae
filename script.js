jQuery(document).ready(function(){

	// 메뉴버튼
    $("nav div").hover(function(){
        $(this).find(".sub").stop().fadeToggle()
        
        $(".sub").css({
          background:"#fff",
          borderRadius:"30px"  
        })
    })
   

	// 메인 이미지
	$(".main-visual .items").slick({
		infinite:true,
		autoplay:true, 
		autoplaySpeed: 3000,
		arrows:false,
		fade:true,
		dots: true,
	});
    
	// 인기상품
    $(".section1 .items").slick({
		infinite: true,
		autoplay: true, 
		autoplaySpeed: 2000,
		arrows:false,
		dots: false,
        slidesToShow: 3,
        slidesToScroll: 1
	});
    
	// 메인 탭 컨텐츠
	jQuery(document).ready(function(){
		jQuery(".tab-cnt .tab-content").hide();
		jQuery(".tab-cnt ul.tabs>li:first").addClass("active").show(); 	
		jQuery(".tab-cnt .tab-content:first").show();

		jQuery(".tab-cnt ul.tabs>li").click(function(e) {
			e.preventDefault();

			jQuery(".tab-cnt ul.tabs>li").removeClass("active");
			jQuery(this).addClass("active");
			jQuery(".tab-cnt .tab-content").hide();		
			
			var activeTab = jQuery(this).find("a").attr("href");
			jQuery(activeTab).show();
			return false;
		});
	}); 
    
	// 메인 새소식 슬라이더
    var swiper = new Swiper(".swiper-container", {
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        loop:true,
        breakpoints: {
            640: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            768: {
            slidesPerView: 2,
            spaceBetween: 40,
            },
            1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            },
        },
    });
});	//End