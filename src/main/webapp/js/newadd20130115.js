/*块下拉*/
$('.btn-minimize').click(function(e){
		e.preventDefault();
		var $target = $(this).parent().parent().next('.box-content');
		if($target.is(':visible')) $('i',$(this)).removeClass('icon-chevron-up').addClass('icon-chevron-down');
		else 					   $('i',$(this)).removeClass('icon-chevron-down').addClass('icon-chevron-up')
		$target.slideToggle()
});

/*下拉框*/
$('.dropdown-input').live("click",function(e){
		e.preventDefault();
		if($(".dropdown-input-hover").size()){
		     $(this).next("i").removeClass("icon3-up").addClass("icon3-down")
	         $(this).removeClass("dropdown-input-hover");
	         $(".dropdown-list").hide();
			 //$(this).removeAttr("readonly")
		}
		else{
	         $(this).next("i").removeClass("icon3-down").addClass("icon3-up")
	         $(this).addClass("dropdown-input-hover");
	         $(".dropdown-list").show();
			 //$(this).attr("readonly","readonly");
		}
});
/*下拉取值*/
$('.dropdown-list li a').live("click",function(e){
	e.preventDefault();
	var $val=$(this).html();
	$('.dropdown-input').val($val);  //赋值
		     $('.dropdown-input').next("i").removeClass("icon3-up").addClass("icon3-down")
	         $('.dropdown-input').removeClass("dropdown-input-hover");
	         $(".dropdown-list").hide();
			 $(this).focus()
});

/*返回*/
$('.back').click(function(h){
	    h.preventDefault();
		history.go(-1);
});	

/*左右拉出*/
$('.setting').click(function(f){
	f.preventDefault();
	if($('.right-menu').is(':visible')){ 
	       $('.right-menu').hide(200);
		   $('.setting').removeClass('setting-re')
		   }
	else {
		   $('.right-menu').show(200);
		   $('.setting').addClass('setting-re')
		   }
	
	});

/*菜单js*/
$('.one,.two').click(function(a){
	a.preventDefault();
	var $target = $(this).next();
if($target.is(':hidden')){
	if($target.is(':visible')) {
	    if($(this).is('.one'))
		   $('i',$(this)).removeClass('icon2-jian').addClass('icon2-jia')
		if($(this).is('.two'))
		   $('i',$(this)).removeClass('icon2-up').addClass('icon2-down')
		}
	else {
		if($(this).is('.one'))                     
	       $('i',$(this)).removeClass('icon2-jia').addClass('icon2-jian')
		if($(this).is('.two'))
		   $('i',$(this)).removeClass('icon2-down').addClass('icon2-up')
		}
	
	
	$(this).prevAll('.opened').hide(200);
	$(this).prevAll('.closed').hide(200);
	$(this).nextAll('.closed').hide(200);
	$(this).nextAll('.opened').hide(200);
	if($(this).is('.one')){
	    $('i',$(this).prevAll('.one')).removeClass('icon2-jian').addClass('icon2-jia');
	    $('i',$(this).nextAll('.one')).removeClass('icon2-jian').addClass('icon2-jia')}
	if($(this).is('.two')){
	    $('i',$(this).prevAll('.two')).removeClass('icon2-up').addClass('icon2-down');
	    $('i',$(this).nextAll('.two')).removeClass('icon2-up').addClass('icon2-down')};
	
	$target.slideToggle()
}
});
   /*全展开*/
$('.allshow').click(function(b){
	if($(this).is(':checked')){   
	                                    $('.closed').removeClass('closed').addClass('opened');
										$('.opened:first').show();
										$('.icon2-jia').removeClass('icon2-jia').addClass('icon2-jian')
									}
	else { 
	        $('.opened').removeClass('opened').addClass('closed');
			$('.closed:first').hide();
	        $('.icon2-jian').removeClass('icon2-jian').addClass('icon2-jia')
	     }
});


    /*菜单浮动*/
    
	//触发浮动
$('.drift').click(function(d){
	var b=$('.main-menu-span');
	var d=$('#content');
	if($(this).is(':checked')) { b.addClass('order-top');
	                             d.addClass('content-left');
	                             initFloatTips()
	}
	else{                        b.removeClass('order-top');
	                             d.removeClass('content-left')}
	});
	
	
	//定义浮动效果
    var tips; 
    var theTop = 71/*这是默认高度,越大越往下*/; 
    var old = theTop;
    function initFloatTips() {
      tips = $('.order-top')[0];
      moveTips();
    };
    function moveTips() {
      var tt=10;
      if (window.innerHeight) {
        pos = window.pageYOffset
      }
      else if (document.documentElement && document.documentElement.scrollTop) {
        pos = document.documentElement.scrollTop
      }
      else if (document.body) {
        pos = document.body.scrollTop;
      }
      pos=pos-tips.offsetTop+theTop;
      pos=tips.offsetTop+pos/10;
      if (pos < theTop) pos = theTop;
      if (pos != old) {
        tips.style.top = pos+"px";
        tt=10;
      //alert(tips.style.top);
      }
      old = pos;
      setTimeout(moveTips,tt);
    };
	
//loading js
function loading(time){
	$('#loading').delay(0).show(0);
	$('#loading').delay(time).hidden(500)
	
	}	
	

//解决IE不支持placeholder
    function isPlaceHolder(){  //判断浏览器是否支持placeholder
        var input = document.createElement("input");
        return "placeholder" in input;
    }
    if(!isPlaceHolder()){
        function addClass(obj,cls){
            var clsn = obj.className;
            if(clsn.indexOf(cls) == -1){
                obj.className = clsn + (clsn != "" ? " " : "") + cls;
            }
        }
        function removeClass(obj,cls){
            var clsn = obj.className;
            if(clsn.indexOf(cls) != -1){
                obj.className = clsn.replace((clsn.indexOf(" ") != -1 ? " " : "")+cls,"");
            }
        }
        function placeHolder(obj){
            if(!obj){return;}
            var placeholder = obj.getAttribute("placeholder");
            if(obj.value == "" || obj.value == placeholder){
                obj.value = placeholder;
                addClass(obj,"placeholder");
            }
            obj.onfocus = function(){
                if(this.value == this.getAttribute("placeholder")){
                    this.value = "";
                }
                removeClass(obj,"placeholder");
            };
            obj.onblur = function(){
                if(this.value == ""){
                    this.value = this.getAttribute("placeholder");
                    addClass(obj,"placeholder");
                }
            };
        }
        function init(){
            var inps = document.getElementsByTagName("input");
            for(var i=0,len=inps.length;i<len;i++){
                if(inps[i].getAttribute("placeholder")){
                    placeHolder(inps[i]);
                }
            }
        }
        window.onload = init;
    }

//删除确认
$("tbody > tr > td > .btn-danger").live("click",function(a){
	a.preventDefault();
	var $html1="确认删除?&nbsp;&nbsp;<font>取消</font>&nbsp;&nbsp;|&nbsp;&nbsp;<font>确定</font>";
	var $html2="<i class='icon-trash icon-white'></i>删除";
	if($(this).html()!==$html1){
	$(this).html($html1);
	
	  //其他均关闭
	  var $prev=$(this).parent("td").parent("tr").prevAll("tr").children("td").children("a");
	  var $next=$(this).parent("td").parent("tr").nextAll("tr").children("td").children("a");
	  if($prev.children("font").size()!=0 || $next.children("font").size()!=0){
		 $prev.children("font").parent().html($html2);
		 $next.children("font").parent().html($html2);                        }
	}
});
$("tbody > tr > td > .btn-danger font").live("click",function(e){
	e.preventDefault();
	var $html2="<i class='icon-trash icon-white'></i>删除";
	var $before=$(this).prevAll("font").size();
	var $after=$(this).nextAll("font").size();
	if($before==0){ //点击取消
	    $(this).parent().html($html2);
		//alert('取消');
		return false;
		}
	if($after==0){ //点击确定
	    $(this).parent().parent().parent().hide(500);
		return false;
		}
});	

//下拉框取值
$('.stateopen > li > a').click(function(e){
		e.preventDefault();
		$(this).parent().parent().parent().children('.stateshow').html($(this).text()+' <span class=caret ></span>')
	});