var $titles = $('.accordion__title');
var $contents = $('.accordion__content');
var $lastTitleClicked = null;


$titles.on('click', function(){
	
	var $currentTitle = $(this);
	var $currentContent = $currentTitle.next();


	$contents.slideUp();
	if(!$currentContent.is(":visible"))
		{
			$currentContent.slideDown();
		}
});