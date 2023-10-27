<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>home.jsp</title>
<link rel="icon" type="image/png" href="/favicon.png"/>
<link rel="stylesheet" href="/css/cube.css">
<style type="text/css">

.menu {
	display: flex;
	list-style: none;
	
	align-items: flex-start;
	
	position: fixed;
	width: 95%;
	top: 10px;
	left: 10px;
}

.menu-item {
/* 	min-width: 150px; */
	width: 150px;
	flex-shrink: 0;
	background: orange;
}

.menu-title > a {
	display: block;
	text-decoration: none;
	color: black;
}

.menu-item:hover > .menu-title {
	text-shadow: 10px 10px 5px red;
}

.menu-item:hover > .sub-menu {
	max-height: 500px;
	
	transition: max-height 2s;
}

.menu-item:nth-last-child(2) {
	margin-left: auto;
	margin-right: 10px;
}

.menu-title {
	padding: 10px;
	font-size: 15pt;
}

.sub-menu {
	max-height: 0px;
	overflow: hidden;
	list-style: none;
	padding-left: 0px;
}

.sub-menu-item {

}

.sub-menu-item > a {
	display: block;
	padding: 10px;
	font-size: 12pt;
	text-decoration: none;
	color: black;
}

.sub-menu-item:hover > a {
	background: red;
}

iframe {
	margin-top: 150px;
}

</style>
<script type="text/javascript" src="/webjars/jquery/jquery.min.js"></script>
<script type="text/javascript">
function resize() {
	let iframe = document.querySelector('iframe');
	iframe.style.height = getComputedStyle(iframe.contentDocument.documentElement).height;
}

// window.onload = function() {
// 	setInterval(resize, 100);	
// }
$(document).ready(function() {
	setInterval(resize, 100);
});

</script>
</head>
<body>
<nav>
<ul class="menu">
	<li style="padding: 0px 20px;">
		<section class="perspective">
		<article class="cube">
			<div class="base">Alpha</div>
			<div class="base front">A</div>
			<div class="base back">B</div>
			<div class="base left">C</div>
			<div class="base right">D</div>
			<div class="base top">E</div>
			<div class="base bottom">F</div>
		</article>
		</section>
	</li>
	<li class="menu-item">
		<div class="menu-title">Alpha</div>
		<ol class="sub-menu">
			<li class="sub-menu-item"><a target="content" href="/alpha/fill">fill</a></li>
			<li class="sub-menu-item"><a target="content" href="/alpha/cross">cross</a></li>
			<li class="sub-menu-item"><a target="content" href="/alpha/race">race</a></li>
			<li class="sub-menu-item"><a target="content" href="/alpha/zigzag">zigzag</a></li>
			<li class="sub-menu-item"><a target="content" href="/alpha/earthwrom">earthworm</a></li>
		</ol>
	</li>
	<li class="menu-item">
		<div class="menu-title">Animation</div>
		<ol class="sub-menu">
			<li class="sub-menu-item"><a target="content" href="/ani/fill">fill</a></li>
			<li class="sub-menu-item"><a target="content" href="/ani/cross">cross</a></li>
			<li class="sub-menu-item"><a target="content" href="/ani/race">race</a></li>
			<li class="sub-menu-item"><a target="content" href="/cube.jsp">cube</a></li>
			<li class="sub-menu-item"><a target="content" href="/placeholder.jsp">placeholder</a></li>
		</ol>
	</li>
	<li class="menu-item">
		<div class="menu-title">React</div>
		<ol class="sub-menu">
			<li class="sub-menu-item"><a target="content" href="/fill.jsp">fill</a></li>
			<li class="sub-menu-item"><a target="content" href="/sort.jsp">sort</a></li>
			<li class="sub-menu-item"><a target="content" href="/move.jsp">move</a></li>
			<li class="sub-menu-item"><a target="content" href="/flow.jsp">flow</a></li>
			<li class="sub-menu-item"><a target="content" href="/ping.jsp">ping</a></li>
			<li class="sub-menu-item"><a target="content" href="/rest/dept">dept</a></li>
		</ol>
	</li>
	<li class="menu-item">
		<div class="menu-title">Employee</div>
		<ol class="sub-menu">
			<li class="sub-menu-item"><a target="content" href="/dept/list">dept</a></li>
			<li class="sub-menu-item"><a target="content" href="/emp/list">emp</a></li>
			<li class="sub-menu-item"><a target="content" href="/salgrade/list">salgrade</a></li>
		</ol>
	</li>
	<li class="menu-item">
		<div class="menu-title">City</div>
		<ol class="sub-menu">
			<li class="sub-menu-item"><a target="content" href="/city/list">city</a></li>
			<li class="sub-menu-item"><a target="content" href="/country/list">country</a></li>
			<li class="sub-menu-item"><a target="content" href="/language/list">language</a></li>
			<li class="sub-menu-item"><a target="content" href="/search">search</a></li>
		</ol>
	</li>
	<sec:authorize access="isAnonymous()">
	<li class="menu-item">
		<div class="menu-title">
			<a href="/login">Login</a>
		</div>
	</li>
	<li class="menu-item">
		<div class="menu-title">
			<a href="/register">Register</a>
		</div>
	</li>
	</sec:authorize>
	<sec:authorize access="isAuthenticated()">
	<li class="menu-item">
		<div class="menu-title">
			<a href="/logout">Logout</a>
		</div>
	</li>
	<li class="menu-item">
		<div class="menu-title">
			<a href="#"><sec:authentication property="name"/></a>
		</div>
	</li>
	</sec:authorize>
	
	
</ul>
</nav>

<iframe src="/alpha/fill" 
		 name="content" 
		 width="100%"
		 scrolling="no"
		 frameborder='0'
		 sendbox="allow-same-origin"
		 onload="resize()">
iframe 태그를 지원하지 않는 브라우저는 이 글이 보입니다. 
</iframe>



</body>
</html>