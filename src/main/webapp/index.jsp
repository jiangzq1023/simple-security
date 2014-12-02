<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix='sec' uri='http://www.springframework.org/security/tags' %>
<%String path=request.getContextPath();%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>电商平台一期_支撑平台</title>
	<meta name="viewport" content="">
	<meta name="description" content="">
	<meta name="author" content="handpay">
    <!--引入bootstrap文件-->
	<link id="bs-css" href="css/common/bootstrap.css" rel="stylesheet">
	<link id="bs-css" href="css/common/bootstrap.min.css" rel="stylesheet">
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <!--/引入bootstrap文件-->
    
    <!--新增-->
    <link id="bs-css" href="css/common/index.css" rel="stylesheet">
    <!--/新增-->
    
    <!--让ie678识别html标签-->
	<!-- The HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
	  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->	
    <!--/让ie678识别html标签-->
    
    
</head>

<body>
	<!-- 头部 -->
	<jsp:include page="top.jsp"/>
	<!--/ 头部 -->
	<div class="container-fluid">
		<div class="row-fluid">
				
			<!-- 左边菜单导航-->
			<jsp:include page="left.jsp"/>
			<!-- /左边菜单导航 -->
			
			<!--用户不支持脚本的时候-->
            <noscript>
				<div class="alert alert-block span10">
					<h4 class="alert-heading">友情提示</h4>
					<p>对不起，您需要启用浏览器的脚本支持。</p>
				</div>
			</noscript>
			<!--/用户不支持脚本的时候-->
			
            <!--右边部分-->
			<div id="content" class="span10">
			    <!--面包屑-->
			    <div>
				   <ul class="breadcrumb">
					  <li>
						<a href="#">首页</a> <span class="divider">/</span>
					  </li>
					  <li>
						<a href="#">商户管理</a>
				   	  </li>
				   </ul>
			    </div>
                <!--/面包屑-->
                
                <!--块-->
		        <div class="box">
                    <div class="box-header well">
					  <h2>欢迎您</h2>
						<div class="box-icon">
						  <a href="#" class="btn btn-minimize btn-round"><i class="icon-chevron-up"></i></a>
						</div>
				    </div>
                    <div class="box-content" style="display:block; "> 
                   
                         <!--填写内容-->
                       <p>张姗姗 ，欢迎您使用商城管理系统。</p>
                       <p>为了达到更好的展示效果，建议使用支持HTML5的浏览器<a href="http://html5test.com" target="_blank">点击测试您的浏览器是否支持</a>。推荐：<a href="http://chrome.360.cn/" target="_blank">360极速浏览器</a></p>
                      
                    <!--/填写内容-->
                    </div>
                </div>
                <!--/块-->
                
                
                <!--块-->
		        <div class="box">
                    <div class="box-header well">
					  <h2>样式库</h2>
						<div class="box-icon">
						  <a href="#" class="btn btn-minimize btn-round"><i class="icon-chevron-up"></i></a>
						</div>
				    </div>
                    <div class="box-content" style="display:none; "> 
                   
                         <!--填写内容-->
                       <p>表格样式一： &lt;table class=&quot;table table-striped table-bordered table-condensed&quot;&gt;</p>

<table  class="table table-striped table-bordered table-condensed" width="100%" border="0" cellspacing="0" cellpadding="0">
<thead>
  <tr>
    <th width="10%">序号</th>
    <th width="18%">商品分类</th>
    <th width="35%">商品名称</th>
    <th width="15%">价格</th>
    <th width="22%">操作</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>1</td>
    <td>生活日用</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>
    <a class="btn btn-success btn-mini" href="#"><i class="icon-zoom-in icon-white"></i>查看</a>
    <a class="btn btn-info btn-mini" href="#"><i class="icon-edit icon-white"></i>编辑</a>
	<a class="btn btn-danger btn-mini" href="#"><i class="icon-trash icon-white"></i>删除</a>
    </td>
  </tr>
  <tr>
    <td>2</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>
    <div class="btn-group">
          <a class="btn btn-primary btn-mini" href="#"><i class="icon-cog icon-white"></i>  操作</a>
          <a class="btn btn-primary dropdown-toggle btn-mini" data-toggle="dropdown" href="#"><span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#"><i class="icon-pencil"></i> 修改</a></li>
            <li><a href="#"><i class="icon-trash"></i> 删除</a></li>
            <li><a href="#"><i class="icon-ban-circle"></i> 禁止</a></li>
            <li class="divider"></li>
            <li><a href="#"><i class="i"></i> 设为管理员</a></li>
          </ul>
      </div>
    
    </td>
  </tr>
  <tr>
    <td>3</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>4</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  </tbody>
</table>
<p>分页样式一：</p>
	<!--分页样式-->
<div style=" text-align:center;">
               <span class="pagination pagination-centered">
						  <ul>
							<li><a href="#">上一页</a></li>
							<li class="active"><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">4</a></li>
							<li><a href="#">下一页</a></li>
			             </ul>
				</span> 
                <span class="btn-group" style=" margin:-15px auto 8px auto;">
                <button class="btn  dropdown-toggle" data-toggle="dropdown">20 <span class="caret"></span></button>
                <ul class="dropdown-menu" style="min-width:50px">
                  <li><a href="#">20</a></li>
                  <li><a href="#">50</a></li>
                  <li><a href="#">100</a></li>
                </ul>
              </span> 
</div> 
<!--/分页样式--> 


 <legend>按钮集</legend>
<table  class="table table-striped table-bordered table-condensed" width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="16%">&nbsp;</td>
    <td width="10%">用于</td>
    <td width="74%">样式</td>
  </tr>
  <tr>
    <td><button class="btn btn-large btn-primary">提交</button>  <button class="btn btn-large">返回</button></td>
    <td>大按钮用于表单提交按钮</td>
    <td>使用大尺寸样式，.btn-large</td>
  </tr>
  <tr>
    <td><a class="btn btn-primary" href="#">提交</a></td>
    <td>主要操作小按钮</td>
    <td>&lt;a class=&quot;btn btn-primary&quot; href=&quot;#&quot;&gt;提交&lt;/a&gt;</td>
  </tr>
  <tr>
    <td><a class="btn btn-primary disabled" href="#">提交</a>    <a class="btn disabled" href="#">取消</a></td>
    <td>禁用状态</td>
    <td>对超链接按钮添加 .disabled 类，或是在 &lt;button&gt; 元素中设置 disabled 属性，却可将其变成禁用状态。</td>
  </tr>
  <tr>
    <td><a class="btn" href="#">取消</a></td>
    <td>取消按钮</td>
    <td>&lt;a class=&quot;btn&quot; href=&quot;#&quot;&gt;默认按钮&lt;/a&gt;</td>
  </tr>
  <tr>
    <td><a class="btn btn-success" href="#"><i class="icon-zoom-in icon-white"></i>查看</a></td>
    <td>查看信息</td>
    <td>&lt;a class=&quot;btn btn-success&quot; href=&quot;#&quot;&gt;&lt;i class=&quot;icon-zoom-in icon-white&quot;&gt;&lt;/i&gt;查看&lt;/a&gt;</td>
  </tr>
  <tr>
    <td><a class="btn btn-info" href="#"><i class="icon-edit icon-white"></i>编辑</a></td>
    <td>编辑操作</td>
    <td>&lt;a class=&quot;btn btn-info btn&quot; href=&quot;#&quot;&gt;&lt;i class=&quot;icon-edit icon-white&quot;&gt;&lt;/i&gt;编辑&lt;/a&gt;</td>
  </tr>
  <tr>
    <td><a class="btn btn-danger" href="#"><i class="icon-trash icon-white"></i>删除</a></td>
    <td>删除操作</td>
    <td>&lt;a class=&quot;btn btn-danger btn&quot; href=&quot;#&quot;&gt;&lt;i class=&quot;icon-trash icon-white&quot;&gt;&lt;/i&gt;删除&lt;/a&gt;</td>
  </tr>
  <tr>
    <td><a class="btn btn-danger btn-mini" href="#"><i class="icon-trash icon-white"></i>删除</a></td>
    <td>表格中的按钮</td>
    <td>使用迷你版，.btn-mini</td>
  </tr>
</table>

 <legend>状态显示特殊样式</legend>
<table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Labels</th>
                <th>Markup</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="label">不可用</span>
                </td>
                <td>
                  <code>&lt;span class="label"&gt;不可用&lt;/span&gt;</code>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="label label-success">成功/可用</span>
                </td>
                <td>
                  <code>&lt;span class="label label-success"&gt;成功&lt;/span&gt;</code>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="label label-warning">警告提示</span>
                </td>
                <td>
                  <code>&lt;span class="label label-warning"&gt;警告提示&lt;/span&gt;</code>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="label label-important">已到期/重要提醒</span>
                </td>
                <td>
                  <code>&lt;span class="label label-important"&gt;Important&lt;/span&gt;</code>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="label label-info">标注信息</span>
                </td>
                <td>
                  <code>&lt;span class="label label-info"&gt;标注信息&lt;/span&gt;</code>
                </td>
              </tr>
            </tbody>
          </table>
                        
 <legend>表单集</legend>
<div class="control-group">
            <label class="control-label">栅格指定尺寸</label>
            <div class="controls docs-input-sizes">
              <input class="span1" type="text" placeholder=".span1">
              <input class="span2" type="text" placeholder=".span2">
              <input class="span3" type="text" placeholder=".span3"><br />
              <select class="span1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <select class="span2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <select class="span3">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <p class="help-block">
		同样是使用 <code>.span*</code> 类来指定输入框大小
	      </p>
            </div>
          </div>

<div class="control-group">
            <label class="control-label" for="inlineCheckboxes">行级复选框</label>
            <div class="controls">
              <label class="checkbox inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
              </label>
              <label class="checkbox inline">
                <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
              </label>
              <label class="checkbox inline">
                <input type="checkbox" id="inlineCheckbox3" value="option3"> 3
              </label>
            </div>
          </div>
          
<fieldset>
          <legend>表单控件状态</legend>
          <div class="control-group">
            <label class="control-label" for="focusedInput">已获得焦点的输入框</label>
            <div class="controls">
              <input class="input-xlarge focused" id="focusedInput" type="text" value="已获得焦点">
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">不可编辑的输入框</label>
            <div class="controls">
              <span class="input-xlarge uneditable-input">不可编辑，只读</span>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label" for="disabledInput">被禁用的输入框</label>
            <div class="controls">
              <input class="input-xlarge disabled" id="disabledInput" type="text" placeholder="输入框被禁用" disabled="">
            </div>
          </div>
          <div class="control-group">
            <label class="control-label" for="optionsCheckbox2">被禁用的复选框</label>
            <div class="controls">
              <label class="checkbox">
                <input type="checkbox" id="optionsCheckbox2" value="option1" disabled="">
                被禁用
              </label>
              
              <label class="radio"><input type="radio" name="optionsRadios"  checked="">费率
              <span class="input-append"><input class="input-mini" id="appendedInput" size="16" type="text"><span class="add-on">%</span></span></label>
            </div>
          </div>
        
          <div class="control-group error">
            <label class="control-label" for="inputError">Error状态的输入框</label>
            <div class="controls">
              <input type="text" id="inputError">
              <span class="help-inline">错误信息</span>
            </div>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">保存更改</button>
            <button class="btn">取消</button>
          </div>
        </fieldset>
          
          
          
<div class="control-group">
            <label class="control-label" for="optionsCheckboxList">多复选框</label>
            <div class="controls">
              <label class="checkbox">
                <input type="checkbox" name="optionsCheckboxList1" value="option1">
		第一个选项，最好给出将其做为首选的理由
              </label>
              <label class="checkbox">
                <input type="checkbox" name="optionsCheckboxList2" value="option2">
		第二个选项，同样可选并包含在表单结果中
              </label>
              <label class="checkbox">
                <input type="checkbox" name="optionsCheckboxList3" value="option3">
		第三个选项，同样可选并包含在表单结果中
              </label>
              <p class="help-block"><strong>注意</strong>
		建议使用label标签将option选项包裹起来，这样可以提供更大的点击区域，提升表单可用性。
	      </p>
            </div>
          </div>
          
<div class="controls">
              <label class="radio">
                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
		第一个选项，最好给出将其做为首选的理由
              </label>
              <label class="radio">
                <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
		第二个选项，如果选译该选项就会取消第一个选项。
              </label>
            </div>


<legend>提示信息</legend>
<div class="alert alert-error"><button type="button" class="close" data-dismiss="alert">×</button>错误提示信息</div>
<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">×</button>成功提示信息</div>
<div class="alert alert-info"><button type="button" class="close" data-dismiss="alert">×</button>成功提示信息</div>

日期控件：
<input class="span2 hp-date" type="text">-<input class="span2 hp-date-end" type="text" >
<br />
class:<br />
             hp-date  2013-12-30<br />
             hp-date-yyyymm  2013-12<br />
             hp-date-hhmm  2013-12-30 12:00<br />
             hp-date-hhmmss 2013-12-30 12:00:00<br />
  起始日期两个框的<br />
             hp-date-start   2012-12-30<br />
             hp-date-end    2012-12-30<br />
                      
                    <!--/填写内容-->
                    </div>
                </div>
                <!--/块-->
			    
		  </div>
            <!--/右边部分-->
		</div>
        <!--/中间-->
        <hr>
        <!--底部-->
		<footer>
			<p class="pull-left">&copy; <a href="http://www.handpay.com.cn" target="_blank">handpay.com.cn</a> 2013</p>
			<p class="pull-right">Powered by: <a href="http://www.handpay.com.cn">瀚银信息技术有限公司</a></p>
		</footer>
        <!--/底部-->
		
	</div>
</body>
</html>
<!--需要在页尾加载的js-->
	<script src="js/jquery-1.7.2.min.js"></script>
	<script src="js/jquery.cookie.js"></script>
	<script src="js/jquery.history.js"></script>
	<script src="js/charisma.js"></script>
    <script src="js/newadd20130115.js"></script>