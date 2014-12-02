<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%String path=request.getContextPath();%>
			<!-- 左边菜单导航-->
            <div class="span2 main-menu-span">
               <div style="position:relative; width:100%; height:0;">
                  <span class="setting"></span>
                  
                   <ul class="right-menu">
						<li><a href="javascript:void(0)"><input type="checkbox" class="checkbox allshow"/>全部展开</a></li>
						<li class="divider2"></li>
						<li><a href="javascript:void(0)"><input type="checkbox" class="checkbox drift"/>浮动前置</a></li>
						<li class="divider2"></li>
						<li><a href="1.html">样式库</a></li>
			      </ul>
                  
               </div>
               <div class="well nav-collapse sidebar-nav" style="overflow:hidden;">
                  <ul class="main-menu">
                     <li class="first-menu one"><i class="icon2 icon2-jia"></i>商城管理</li>
                     <li class="first-menu closed">
                         <ul>
                             <li class="second-menu"><a href="<%=path%>/shopmanagement/sortmanagement.html"><i class="icon2-no"></i>分类管理</a></li>
                             <li class="second-menu"><a href="<%=path%>/shopmanagement/brandmanagement.html"><i class="icon2-no"></i>品牌管理</a></li> 
                             <li class="second-menu"><a href="<%=path%>/shopmanagement/businesscontractmanagement.html"><i class="icon2-no"></i>商户合同管理</a></li>
                         </ul>
                     </li>
                     <li class="first-menu one"><i class="icon2 icon2-jia"></i>商品管理</li>
                     <li class="first-menu closed">
                         <ul>
                             <li class="second-menu"><a href="1.html"><i class="icon2-no"></i>上架商品</a></li>
                             <li class="second-menu"><a href="1.html"><i class="icon2-no"></i>下架商品</a></li> 
                         </ul>
                    </li>
                    <li class="first-menu one"><i class="icon2 icon2-jia"></i>订单管理</li>
                    <li class="first-menu closed">
                         <ul>
                             <li class="second-menu"><a href="1.html"><i class="icon2-no"></i>订单管理</a></li>
                         </ul>
                    </li>
                     <li class="first-menu one"><i class="icon2 icon2-jian"></i>权限管理</li>
                     <li class="first-menu opened">
                         <ul>
                             <li class="second-menu"><a href="<%=path%>/rightsmanagement/groupmanagement.html"><i class="icon2-no"></i>组管理</a></li>
                             <li class="second-menu selected"><a href="<%=path%>/rightsmanagement/usersmanagement.html"><i class="icon2-no"></i>用户管理</a></li>
                         </ul>
                     </li>
                  </ul>
               </div>
            </div>
			<!-- /左边菜单导航 -->