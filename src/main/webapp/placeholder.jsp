<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript" src="/webjars/jquery/jquery.js"></script>
<title>placeholder.jsp</title>
<script type="text/javascript">
$(function() {
	for (let i=0; i<100; i++) {
		$('body').append('<img alt="xxx"/>');
	}
	
// 	$('img').attr('src', 'http://via.placeholder.com/100X100');
	$('img').attr({
		alt: function(i) {
			return i + ' num';	
		},
		src: function(i) {
			let colors = [
								'000000',
								'FF0000',
								'00FF00',
								'0000FF',
								'FFFF00',
								'FF00FF',
								'00FFFF',
								'FFFFFF',
							]
			let fg = null;
			let bg = null;
			do {
				fg = colors[parseInt(Math.random()*colors.length)];
				bg = colors[parseInt(Math.random()*colors.length)];
			} while (fg==bg);
			
			let width = parseInt(Math.random()*10 + 1) * 10;
			let height = parseInt(Math.random()*10 + 1) * 10;
			return `http://via.placeholder.com/\${width}X\${height}/\${bg}/\${fg}`;
		}
	})
	.css('border', '1px solid red')
	.css('margin', 10)
	.css('vertical-align', 'top');
	
});
</script>
</head>
<body>
</body>
</html>