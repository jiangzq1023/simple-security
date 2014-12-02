// JavaScript Document

// JavaScript Document

$("#sort-select li a").click(function(e){
	e.preventDefault();
	var $targetall=$(this).parent().parent().parent().nextAll("div");
    var $target=$(this).parent().parent().parent().next("div");
	if(!$target.is(":visible")) {$target.show();
	                             $target.children("#loading").delay(1000).hide(0);
								 $target.children("form").delay(1001).show(0);
								 $target.children("ul").delay(1001).show(0);
								 $target.children().children("ul").delay(1001).show(0);
	                             $(this).addClass("selected");
	                             $(this).parent().nextAll().children(".selected").removeClass("selected");
	                             $(this).parent().nextAll().children(".selected").removeClass("selected")}
	else  {
		    $target.hide();
		    $targetall.not($target).hide();
			$target.show();
			$target.nextAll("li > a > .selected").removeClass("selected");
			$(this).addClass("selected");
			$(this).parent().nextAll().children(".selected").removeClass("selected");
			$(this).parent().prevAll().children(".selected").removeClass("selected");
		}
	var $num=$(this).parent().parent().parent().prevAll("div").size();
	var $num2=$(this).parent().parent().parent().nextAll("div").size();
	var $title=".th"+($num*1+2*1)+"-setup";
	var $titlepre=".th"+($num*1+1*1)+"-setup";
	$($title).addClass("ing");
	$($titlepre).removeClass("ing").addClass("ed");
	if($num2==1)  $(".modal-footer").show()
	});
	
$(".check-more").click(function(e){
	e.preventDefault();
	$(this).parent().parent().nextAll("ul").children(".none").toggle();
	if($(this).html()=="更多") $(this).html("收起");
	else $(this).html("更多")
	});

$('.em').click(function(e){
		e.preventDefault();
		$(this).toggle();
		$(this).next('div').toggle()
});


$('.subm').click(function(e){
		e.preventDefault();
		$(this).parent().prev('a.em').toggle();
		$(this).parent('div').toggle();
		$(this).parent().parent().prev('.val1').text($('input.val2').val()+'%');
		$('.value2').val('')  //清空
});

$('a.icon-del').click(function(e){
		e.preventDefault();
		$(this).parent().parent().delay(300).hide(100);
		$('.alert-success').delay(300).show(100);
		$('.alert-success').delay(3000).hide(100)
});

