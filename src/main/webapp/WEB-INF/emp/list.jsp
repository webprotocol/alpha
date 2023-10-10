<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core"%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>list.jsp</title>
</head>
<body>
<h1>Emp List</h1>
<hr>
<form action="/emp/list">
	<label>부서 선택</label>
	<select name="deptno">
			<c:choose>
			<c:when test="${empty param.deptno}">
				<option value="" selected="selected">전체</option>
			</c:when>
			<c:otherwise>
				<option value="">전체</option>
			</c:otherwise>
			</c:choose>
		<c:forEach var="dept" items="${depts}">
			<c:choose>
			<c:when test="${param.deptno eq dept.deptno}">
				<option value="${dept.deptno}" selected="selected">${dept.deptno} ${dept.dname}</option>
			</c:when>
			<c:otherwise>
				<option value="${dept.deptno}">${dept.deptno} ${dept.dname}</option>
			</c:otherwise>
			</c:choose>
		</c:forEach>
	</select>
	<input type="text" name="search">
	<input type="submit" value="직원검색">
</form>
<hr>
<table border="1" width="800">
	<thead>
		<tr>
			<th>empno</th>
			<th>ename</th>
			<th>gender</th>
			<th>job</th>
			<th>mgr</th>
			<th>hiredate</th>
			<th>sal</th>
			<th>comm</th>
			<th>deptno</th>
		</tr>
	</thead>
	<tbody>
	<c:forEach var="emp" items="${list}">
		<tr>
			<td>${emp.empno}</td>
			<td>${emp.ename}</td>
			<td>${emp.gender}</td>
			<td>${emp.job}</td>
			<td>${emp.mgr}</td>
			<td>${emp.hiredate}</td>
			<td align="right">${emp.sal}</td>
			<td align="right">${emp.comm}</td>
			<td>${emp.deptno}</td>
		</tr>
	</c:forEach>
	</tbody>
</table>
</body>
</html>