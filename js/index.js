$(document).ready(function(){
	//增加或减少数量
	$('.num-con').click(function(e){
		e.preventDefault();
		
		var    $number = $('#number'),
			 number = parseInt($number.html()),
		            $tar = $(e.target);
		
		if($tar.hasClass('minus')&&number>0){
			$number.html(number-1);
		}else if($tar.hasClass('plus')){
			$number.html(number+1);
		}
	});
});
