$(document).ready(function(){
	
	// Lift card and show stats on Mouseover
	$('.product-card').hover(function(){
			$(this).addClass('animate');
			$(this).find('div.carouselNext, div.carouselPrev').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$(this).find('div.carouselNext, div.carouselPrev').removeClass('visible');
	});	
	
	// Flip card to the back side
	$('.view_details').click(function(){		
		// $('div.carouselNext, div.carouselPrev').removeClass('visible');
		$(this).parent().parent().find('div.carouselNext, div.carouselPrev').removeClass('visible');
		// $('.product-card').addClass('flip-10');
		$(this).parent().parent().parent().find('.product-card').addClass('flip-10');
		setTimeout(function(){
			$(this).parent().parent().parent().find('.product-card').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
				$(this).parent().parent().find('.product-front, .product-front div.shadow').hide();			
			});
		}, 50);

		$this = $(this);
		
		setTimeout(function(){
			$($this).parent().parent().parent().find('.product-card').removeClass('flip90').addClass('flip190');
			$($this).parent().parent().find('.product-back').show().find('div.shadow').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$($this).parent().parent().parent().find('.product-card').removeClass('flip190').addClass('flip180').find('div.shadow').hide();						
				setTimeout(function(){
					$($this).parent().parent().parent().find('.product-card').css('transition', '100ms ease-out');			
					$($this).parent().parent().find('.cx, .cy').addClass('s1');
					setTimeout(function(){$($this).parent().parent().find('.cx, .cy').addClass('s2');}, 100);
					setTimeout(function(){$($this).parent().parent().find('.cx, .cy').addClass('s3');}, 200);				
					$($this).parent().parent().find('div.carouselNext, div.carouselPrev').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});			
	
	// Flip card back to the front side
	$('.flip-back').click(function(){		
		
		$this = $(this).parent().parent().parent().find('.product-card');
		$($this).removeClass('flip180').addClass('flip190');
		

		setTimeout(function(){
			$($this).removeClass('flip190').addClass('flip90');
	
			$($this).parent().parent().parent().find('.product-back div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
				$($this).parent().parent().find('.product-back, .product-back div.shadow').hide();
				$($this).parent().parent().find('.product-front, .product-front div.shadow').show();
			});
		}, 50);
		
		setTimeout(function(){
			$($this).parent().parent().parent().find('.product-card').removeClass('flip90').addClass('flip-10');
			$($this).parent().parent().parent().find('.product-front div.shadow').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$($this).parent().parent().parent().find('.product-front div.shadow').hide();
				$($this).parent().parent().parent().find('.product-card').removeClass('flip-10').css('transition', '100ms ease-out');		
				$($this).find('.cx, .cy').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	

	
	/* ----  Image Gallery Carousel   ---- */
	
	var carousel = $('.carousel-produto ul');
	var carouselSlideWidth = 335;
	var carouselWidth = 0;	
	var isAnimating = false;
	
	// building the width of the casousel
	$('.carousel-produto li').each(function(){
		carouselWidth += carouselSlideWidth;
	});
	$(carousel).css('width', carouselWidth);
	
	// Load Next Image
	$('div.carouselNext').on('click', function(){
		var currentLeft = Math.abs(parseInt($(carousel).css("left")));
		var newLeft = currentLeft + carouselSlideWidth;
		if(newLeft == carouselWidth || isAnimating === true){return;}
		$('.carousel-produto ul').css({'left': "-" + newLeft + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating = true;
		setTimeout(function(){isAnimating = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev').on('click', function(){
		var currentLeft = Math.abs(parseInt($(carousel).css("left")));
		var newLeft = currentLeft - carouselSlideWidth;
		if(newLeft < 0  || isAnimating === true){return;}
		$('.carousel-produto ul').css({'left': "-" + newLeft + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating = true;
		setTimeout(function(){isAnimating = false;}, 300);			
	});
});