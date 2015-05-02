/*************************/
/***** AUTHOR : HUSENTELWALA
/***** DATE : 09-10-2014
/*************************/

$(document).ready(function(){
	$(function () {
		$tabsRightLink=$('.responsive-tab .tabs-right ul > li > a');				
		$tabsRight =$('.responsive-tab .tabs-right ul > li');
		createLeftTabs();		
		
		$('.tabs-left li').click(function(){
			$this = $(this);
			$this.parents('ul').find('li').removeClass('active');
			$this.addClass('active');
			$index=($this.index());
			$tabsRight.removeClass('active');
			$tabsRight.eq($index).addClass('active');			
		});
		$tabsRightLink.parents('ul').find('li.activem .inner').css({'display':'block'});
		$tabsRightLink.click(function(){
			if (!isDekstopIpad()) { 
				$this = $(this);				
				if(($this).parents('li').hasClass('activem')) {
					($this).parents('li.activem').removeClass('activem');
					$this.parents('li').find('.inner').slideUp(function(){
					});	
				}
				else
				{		
					$this.parents('li').toggleClass('activem');
					$this.parents('li').find('.inner').slideToggle(function(){
					});
				}
			}
		});
	});
	 
	var isDekstopIpad = function () {
		var width = getWidth();
		return (width >= 768);
    };
	
	var getWidth = function () {
        if (width === 0) {
            width = $(window).width();
        }
        return width
    };
	
	var createLeftTabs = function() {
		$structure='<ul>';
		$tabsRight.each(function(){
			$this = $(this);
			var $tempContent='';
			$tempContent=$this.find('a').wrap('<abbr/>').parent().html();
			$this.find('a').unwrap();			
			if($this.hasClass('active'))
				$structure+='<li class="active">'+ $tempContent +'</li>';
			else
				$structure+='<li>'+ $tempContent +'</li>';
		});		
		$structure+='</ul>';		
		$('.tabs-left').append($structure);
	}
});
