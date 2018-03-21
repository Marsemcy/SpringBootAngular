<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
<h2>Players</h2>

<ul>
    <c:if test="${!empty message}"><p>${message}</p>
    </c:if>
    <form method="post">
        <label>Username: <input type="text" name="username" placeholder="user"/></label>
        <label>Password: <input type="password" name="password" placeholder="password"/>
        </label> <input type="submit"/>
    </form>
</ul>

</body>
</html>
