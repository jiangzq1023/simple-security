// JavaScript Document
$(".renew").click(function(e){
        e.preventDefault();	
	
});

$(".btn-warning").live("click",function(e){
e.preventDefault();
var $target=$(this).parent().prev("td");
if($target.html()=="停用"){//判断不是续签
$target.html("正常");
$(this).removeClass("btn-warning").addClass("stop");
$(this).html("<i class='icon-off'></i>停用")}
});

$(".stop").live("click",function(e){
e.preventDefault();	
var $target=$(this).parent().prev("td");
$target.html("停用");
$(this).removeClass("stop").addClass("btn-warning");
$(this).html("<i class='icon-off icon-white'></i>重启")
});
