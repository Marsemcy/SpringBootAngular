<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%--@elvariable id="players" type="java.util.List"--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <meta charset="UTF-8">
    <title>Players</title>
</head>
<body>

<sec:authorize access="hasRole('USER')"><h2>Secret content!</h2>
    <p>${message}</p>
    <p>
        <a href="/logout">Logout</a></p>
</sec:authorize>


<c:forEach items="${players}" var="player">
    <li> Player Name: ${player.name}, Player Surname: ${player.surname}, Players' Team: ${player.team}

    </li>

</c:forEach>

<br>
<br>

</body>
</html>