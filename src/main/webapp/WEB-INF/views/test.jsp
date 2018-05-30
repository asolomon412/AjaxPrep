<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Test</title>
</head>
<body>
	<h3>Test</h3>

	<%=new java.util.Date()%>


	<a href="<c:url value="${requestScope.url }"></c:url>">Grand Circus</a>

	<%-- simple c:if and c:out example with HTML escaping --%>
	<c:if test="${requestScope.htmlTagData ne null }">
		<c:out value="${requestScope.htmlTagData}" escapeXml="false"></c:out>
	</c:if>
	<br>
	<br>
	
	<table border="1">
		<c:forEach var="myVar" items="${test}">
			<tr>

				<td>${myVar.firstName}</td>
				<td>${myVar.lastName}</td>


			</tr>

		</c:forEach>
	</table>
</body>
</html>