jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}

	var options = {
	  useEasing : true, 
	  useGrouping : true, 
	  separator : ',', 
	  decimal : '.', 
	  prefix : '', 
	  suffix : '' 
	};
	var users_countup = new CountUp("users_countup", 0, 1200, 0, 1, options);
	var activities_countup = new CountUp("activities_countup", 0, 2000, 0, 1, options);
	var countries_countup = new CountUp("countries_countup", 0, 48, 0, 1, options);
	users_countup.start();
	activities_countup.start();
	countries_countup.start();
});