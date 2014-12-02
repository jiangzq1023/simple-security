// JavaScript Document
$("tbody > tr > td > .btn-warning").live("click",function(a){
	a.preventDefault();
	
	     $(this).parent().prev("td").html('停用');
	     $(this).html("<i class='icon-off icon-white'></i>启用");
	     $(this).removeClass('btn-warning').addClass("btn-success")
})

$("tbody > tr > td > .btn-success").live("click",function(a){
	a.preventDefault();
	     $(this).parent().prev("td").html('启用');
	     $(this).html("<i class='icon-off icon-white'></i>停用");
	     $(this).removeClass('btn-success').addClass("btn-warning")
})