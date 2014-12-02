<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix='sec' uri='http://www.springframework.org/security/tags' %>
<%String path=request.getContextPath();%>  
    <!-- 头部 -->
	<div class="navbar">
		<div class="navbar-inner">
			<div class="container-fluid">
                <!--LOGO-->
				<a class="brand" href="<%=path%>/index.jsp"> <img alt="Charisma Logo" src="<%=path%>/images/hp_logo.png" /></a>
                <!--/logo-->
				
				<div class="btn-group pull-right">
					<a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
						<i class="icon-user"></i><span class="hidden-phone"><sec:authentication property="principal.username"/></span>
						<span class="caret"></span>
					</a>
				    <!-- 用户下拉｜隐藏 -->
					<ul class="dropdown-menu">
						<li><a href="moditypass.html">修改密码</a></li>
						<li class="divider"></li>
						<li><a href="<%=path%>/j_spring_security_logout">退出</a></li>
					</ul>
				    <!--／ 用户下拉｜隐藏 -->
				</div>
			</div>
		</div>
	</div>
	<!--/ 头部 -->