	$(".mainNav a").hover(function(){
		$(this).parent().find(".subNav").slideDown('fast').show();

    //two perameters for hover; mouseenter (anonymous function to keep menu down when hovered) and mouseleave function to slide up menu when not hovered
		$(this).parent().hover(function(){}, function(){
			$(this).parent().find(".subNav").slideUp('fast');
		});

	}).hover(function(){
		$(this).addClass("subHover");
	}, function(){
		$(this).removeClass("subHover");
	});