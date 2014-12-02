// JavaScript Document
//展开/ 隐藏一级分类
$('.icon2-o').click(function(e){
		e.preventDefault();
		var $target=$(this).parent().parent().nextAll();
		if($target.is(':visible')) { $target.hide(300);
									 $(this).removeClass('icon-minus-sign').addClass('icon-plus-sign')
									}
		else                       { $target.show(300);
		                             $(this).removeClass('icon-plus-sign').addClass('icon-minus-sign')
									}
	});

//全部 展开/隐藏 分类	
$('#all-set').click(function(i){
	    i.preventDefault();
		var $target=$('i.icon2-o').parent().parent().nextAll();
		var $alli=$('i.icon2-o');
		if($target.is(':visible')) { $target.hide(300);
		                             $(this).html('展开所有分类');
									 $alli.removeClass('icon-minus-sign').addClass('icon-plus-sign')
									}
		else                       { $target.show(300);
		                             $(this).html('收起所有分类');
		                             $alli.removeClass('icon-plus-sign').addClass('icon-minus-sign')
									}
		           
         });
		 
//添加大分类
$('.big-sort').live("click",function(i){
	i.preventDefault();
	var $nums=$('.table2').size();
	var $hosts=$('.table-hover > tbody');
	var $bigsort1="<tr>";
	var $bigsort2="<td colspan='6'>";
	var $bigsort3="<table width='100%' class='table2'><thead>";
	var $bigsort33="<table width='100%' class='table2'>";
	var $bigsort4="<tr>";
	var $bigsort5="<td width='45%'><i class='icon-minus-sign icon2-o'></i> <input type='text' placeholder='输入大分类名称' value=''></td>";
	var $bigsort6="<td width='9%'><a href='javascript:void(0)' class='btn btn-success btn-mini'><i class='icon-plus icon-white'></i></a></td>";
	var $bigsort7="<td width='8%'><label class='checkbox'><input type='checkbox'></label></td>";
	var $bigsort8="<td width='12%'><a href='javascript:void(0)' class='btn btn btn-mini'><i class='icon-arrow-up'></i></a> <a href='javascript:void(0)' class='btn btn btn-mini'><i class='icon-arrow-down'></i></a> <a href='javascript:void(0)' class='btn btn btn-mini'><i class='icon-remove'></i></a></td>";
	var $bigsort9="<td width='12%'><a class='btn btn-mini' data-toggle='modal' href='#set'>销售属性</a></td>";
	var $bigsort10="<td width='14%'><a class='btn btn-mini' href='#'>管理业务渠道</a></td>";
	var $bigsort11='</tr>';
	var $bigsort12='</thead></table>';
	var $bigsort1212='</table>';
	var $bigsort13='</td>';
	var $bigsort14='</tr>';
	var $bigsort=$bigsort1+$bigsort2+$bigsort3+$bigsort4+$bigsort5+$bigsort6+$bigsort7+$bigsort8+$bigsort9+$bigsort10+$bigsort11+$bigsort12+$bigsort13+$bigsort14;
	var $bigsort0=$bigsort1+$bigsort2+$bigsort33+$bigsort4+$bigsort5+$bigsort6+$bigsort7+$bigsort8+$bigsort9+$bigsort10+$bigsort11+$bigsort1212+$bigsort13+$bigsort14;
	($nums%2>0)?$hosts.prepend($bigsort0):$hosts.prepend($bigsort);   //在开始插入
//	$hosts.after($bigsort)   //在结尾插入
    return true
	});

//添加子分类
$('.btn-success').live('click',function(i){
	i.preventDefault();
	var $hosts=$(this).parent().parent();
	var $leves=$(this).parent().prev().children("i").size();//判断所属级别
    var $data1="<tr><td width='45%'>";
	var $i="<i class='icon2-no'></i>";
	var $datai=""; //初始化
	for(i=0;i<$leves;i++){$datai=$datai+$i}
	var $data2="<i class='icon2-turn'></i><input type='text' placeholder='输入分类名' value=''></td>";
    var $data3="<td width='9%'><a href='javascript:void(0)' class='btn btn-success btn-mini'><i class='icon-plus icon-white'></i></a></td>";
	var $data4=" <td width='8%'><label class='checkbox'><input type='checkbox'></label></td>";
    var $data5="<td width='12%'><a href='javascript:void(0)' class='btn btn-mini'><i class='icon-arrow-up'></i></a> <a href='javascript:void(0)' class='btn btn-mini'><i class='icon-arrow-down'></i></a> <a href='javascript:void(0)' class='btn btn-mini'><i class='icon-remove'></i></a></td>";
	var $data6="<td width='12%'><a class='btn btn-mini' data-toggle='modal' href='#set'>销售属性</a></td>";
    var $data7="<td width='14%'></td>";
	var $data8="</tr>";	
	var $data=$data1+$datai+$data2+$data3+$data4+$data5+$data6+$data7+$data8;
	$hosts.after($data)
});
                  
//删除分类
$('.icon-remove').live("click",function(i){
	i.preventDefault();
	$('.alert-success').delay(100).show(100);
	$(this).parent().parent().parent().delay(100).hide(1);
	$('.alert-success').delay(2000).hide(100)
});                

//颜色选择
$('.subm').live("click",function(i){
	i.preventDefault();
	var $hosts=$('tr#newadd');
	var $hosts2=$(this).parent().parent().parent().parent();
	var $thecolor=$('#color').css("background-color");
	var $theval=$('#color').val();
	var $id1= "newer1"+ $theval;
	var $id2= "newer2"+ $theval;
	var $id3= "itsok"+ $theval;
	var $datahover="<tr><td width='50%' style='background:#FF6'  id='newer1"+$theval+"'><i class='colors' style='background:"+$thecolor+"'></i>&nbsp;"+$theval+"<span id='itsok"+$theval+"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='icon-ok icon-ok-sign'></i>添加成功</span></td><td width='50%' style='background:#FF6' id='newer2"+$theval+"'><a class='btn btn-mini' href='#'><i class='icon-tags'></i>&nbsp;重命名</a>&nbsp;<a class='btn btn-danger btn-mini' href='#'><i class='icon-trash icon-white'></i> 删除</a></td></tr>";
	
	//不能同名，不能为空
	if(!$theval || $thecolor==="rgb(255, 255, 255)" || !$thecolor || $thecolor==="#ffffff"){
		alert('属性名或者颜色不能为空！');
		return
		}
    else{
		//这里判断属性名是否存在
		}
	
	$('#newadd').hide(150);
	$hosts.before($datahover);
	
	function tohtml(){
	document.getElementById($id1).style.background= "";
	document.getElementById($id2).style.background= "";
	document.getElementById($id3).style.display= "none";
	}
	setTimeout(tohtml,800);
	$('#color').css("background-color","#ffffff");
	$('#color').val('')
});
                
//新增机身颜色属性
$('.newadd').live("click",function(i){
	i.preventDefault();  
    $('#newadd').show(150)
});
  
//other属性新通用
function subm(a){
	a.preventDefault();
	var $hosts=$(this).parent().parent().parent();
	var $hosts2=$(this).parent().parent().parent().parent();
	var $theval=$(this).prev('.val2').val();
	var $id1= "2newer1"+ $theval;
	var $id2= "2newer2"+ $theval;
	var $id3= "2itsok"+ $theval;
	var $datahover="<tr><td width='50%' style='background:#FF6'  id='"+$id1+"'>"+$theval+"<span id='"+$id3+"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='icon-ok icon-ok-sign'></i>添加成功</span></td><td width='50%' style='background:#FF6' id='"+$id2+"'><a class='btn btn-mini re-name' href='#'><i class='icon-tags'></i>&nbsp;重命名</a>&nbsp;<a class='btn btn-danger btn-mini' href='#'><i class='icon-trash icon-white'></i> 删除</a></td></tr>";
	
	//不能同名，不能为空
	if(!$theval){
		alert('属性名不能为空！');
		return
		}
    else{
		//这里判断属性名是否存在
		}
	
	$(this).parent().parent().parent().hide(150);
	$hosts.before($datahover);
	
	function tohtml(){
	document.getElementById($id1).style.background= "";
	document.getElementById($id2).style.background= "";
	document.getElementById($id3).style.display= "none";
	}
	setTimeout(tohtml,800); 
	$(this).prev('.val2').val('')
    }
	
	
function newadd2(b){b.preventDefault();$('#tab2 > table > tbody').find('tr').last().show(150) }
function newadd3(b){b.preventDefault();$('#tab3 > table > tbody').find('tr').last().show(150) }
function newadd4(b){b.preventDefault();$('#tab4 > table > tbody').find('tr').last().show(150) }
function newadd5(b){b.preventDefault();$('#tab5 > table > tbody').find('tr').last().show(150) }
function newadd6(b){b.preventDefault();$('#tab6 > table > tbody').find('tr').last().show(150) }
	
$(".newadd2").live("click",newadd2);
$(".newadd3").live("click",newadd3);
$(".newadd4").live("click",newadd4);
$(".newadd5").live("click",newadd5);
$(".newadd6").live("click",newadd6);
$('.subm2').live("click",subm);
$('.subm3').live("click",subm);
$('.subm4').live("click",subm);
$('.subm5').live("click",subm);
$('.subm6').live("click",subm);

//确定
$(".re-button1").live("click",function(a){
	a.preventDefault();
   alert('等待后台开发')
});
//取消
$(".re-button2").live("click",function(a){
	a.preventDefault();
     alert('等待后台开发')
});
//重命名和删除
$("tbody > tr > td > .re-name").live("click",function(a){
	a.preventDefault();
	var $hosts=$(this).parent().prev("td");
	var $hosts2=$hosts.find("i").remove().end();
	var $hosts3=$hosts2.find("span").remove().end();
	var $theval=$hosts3.html();
	var $data="<div class='input-append emed'><input type='text' value='"+$theval+"' class='span2 val2' style='height:18px; lineheight:18px; padding:1px;' placeholder=''/><button type='button' class='btn subm2 re-button1'>确定</button><button type='button' class='btn subm2 re-button2'>取消</button></div>";
	$hosts.html($data)
});


//新增销售属性
$(".new-add-big").live("click",function(i){
	i.preventDefault();
    var $hosts1=$(this).parent().prev("li");
	var $v=$(this).parent().prevAll("li").size(); //判断是否有值
	var $hosts2=$('#myTabContent .tab-pane').last();
	var $ids=$('#myTab').children("li:not(.addnew)").children("a").last().attr('href');
	    if($v){
	            $ids=Number($ids.substr(4,5)*1+1*1)
	          }
		else{
                $ids=2
	        }
	var $titledata="<li class='active'><a href='#tab"+$ids+"' data-toggle='tab' style=' padding-bottom:0px;'><input name='tab-title' placeholder='编辑名称' value='编辑名称' onFocus=if(this.value=='编辑名称'){this.value=''} onblur=if(this.value==''){this.value='编辑名称'} class='tab-title' style='margin-bottom:6px; margin-bottom:7px\9;_margin-bottom;7px; width:72px; height:19px; line-height:19px; padding:0px; font-size:12px; padding-left:2px;'/></a></li>";
	var $textdata="<div class='tab-pane active' id='tab"+$ids+"'><table class='table table-striped' style='margin-bottom:5px;'><thead><tr><th width='50%'>标签</th><th width='50%'>操作</th></tr></thead><tbody><tr style='display:none'><td width='50%'><div class='input-append emed'><input type='text' class='span2 val2' placeholder='输入属性名称'/><button type='button' class='btn subm2'>确定</button></div></td><td width='50%'><a class='btn btn-mini icon2-o' href='#'><i class='icon-tags'></i> 重命名</a><a class='btn btn-danger btn-mini icon2-o' href='#'><i class='icon-trash icon-white'></i> 删除</a></td></tr></tbody></table><div align='left'><a href='#' class='btn btn-mini newadd"+$ids+"'><i class='icon-plus-sign opacity'></i> 新增属性值</a></div></div>";
	if($v){
	   $("#myTabContent div").removeClass("active");
	   $(this).parent().prevAll("li").removeClass("active");
	   $hosts1.after($titledata);
	   $hosts2.after($textdata)  ;
	   }
	else {
	   $(this).parent().parent().prepend($titledata);
	   $("#tab0").remove();
	   $('#myTabContent').prepend($textdata);
     }
});


//TAB title 保存
$(".tab-title").live("blur",function(i){
	i.preventDefault();
	if(!$(this).val() || $(this).val()=='编辑名称'){
	    alert('请输入新增的销售属性名称');
		$(this).val('');
		$(this).focus();
	    return}
   	else{
		$(this).parent("a").removeAttr("style");
	    $(this).parent("a").html($(this).val());
		}
})
 //双击修改
$(".nav-tabs > .active > a").live("dblclick",function(i){
	i.preventDefault();
	var $theval=$(this).html();
	var $id=$(this).attr("href");
	var $titledata="<a href='"+$id+"' data-toggle='tab' style=' padding-bottom:0px;'><input name='tab-title' placeholder='' value='"+$theval+"' onblur=if(this.value==''){this.value='编辑名称'} class='tab-title' style='margin-bottom:6px; margin-bottom:7px\9;_margin-bottom;7px; width:72px; height:19px; line-height:19px; padding:0px; font-size:12px; padding-left:2px;'/></a>";

	$(this).parent("li").html($titledata);
	
})

//全选/反选/清空
$(function () {
 $("#getall").click(function () {
$("#check-box tr td label :checkbox").attr("checked", true);
});
$("#loseall").click(function () {
 $("#check-box tr td label :checkbox").attr("checked", false);
 });
$("#inverse").click(function () {
$("#check-box tr td label :checkbox").each(function () {
$(this).attr("checked",!$(this).attr("checked"))
})
})
});

//删除tab
$(".nav-tabs > li").live("click",function(e){
	e.preventDefault();
	if(!$(this).children("i").size()){//避免重复
	$(this).prepend("<i class='icon-remove-sign del-position'></i>");
	$(this).prevAll("li:not(.addnew)").children("i").remove(); //删除前面的i
	$(this).nextAll("li:not(.addnew)").children("i").remove(); //删除后面的i
	};
	});
//$(".nav-tabs > .active").live("mouseover",function(e){
	//e.preventDefault();
	//if(!$(this).children("i").size()){//避免重复
	//$(this).prepend("<i class='icon-remove-sign del-position'></i>")
	//};
	//});
//$(".nav-tabs > .active").live("mouseout",function(e){
	//e.preventDefault();
	//alert("移开")
	//$(this).children("i").remove();
	//});
	
//删除	
$(".nav-tabs > .active > i").live("click",function(e){
	e.preventDefault();
	var $id=Number($(this).next("a").attr("href").substr(4,5));  //获取id
	var $ids="#tab"+$id;
	var $ids1="#tab"+($id*1-1*1);
	var $ids2="#tab"+($id*1+1*1);
	var $next=$(this).parent().next();
	var $prev=$(this).parent().prev();
    var $hoverprev=$prev.size(); //选择前面一个
	var $hovernext=$next.not(".addnew").size();  //选择后面一个
	var $a=confirm("此操作不可逆，确认删除?","dsf");
if($a==false){ return}
else{
	$(this).parent().remove("li.active"); //删除当前tab
	$($ids).remove("div.active");//关闭当前tab主体内容
	//删除后还要默认指定打开的项
	if($hovernext){ //如果后面有
		$next.addClass("active");
		$next.prepend("<i class='icon-remove-sign del-position'></i>");
		$($ids2).addClass("active")
		}
	else{
		if($hoverprev){//如果前面有
		$prev.addClass("active");
		$prev.prepend("<i class='icon-remove-sign del-position'></i>");
		$($ids1).addClass("active")
			}
	    else{ //如果前面也没有
		$("#tab0").addClass("active");  //都没有的时候显示“No date!”
			}
		}
}
});

//more超出隐藏部分
 $(".imore").live('click',function(event){ //点击显示
    event.preventDefault();
    event.stopPropagation();
    $(".imore-re").show();
    $(this).addClass("icon-white");
    $(".li-ul-more").toggle(300);
 });

$(".imore").hover(   //鼠标经过部分
   function(){
	          $(".imore-re").show();
	          $(this).addClass("icon-white");
			  clickshow();
			 },
   function(){
	          $(".imore-re").hide();
	          $(this).removeClass("icon-white");
			 }
);

//单独对区域外处理
$(document).click(function() {
   $(".imore-ed").removeClass("imore-ed");
   $(this).removeClass("icon-white");
   $(".li-ul-more").hide();
});