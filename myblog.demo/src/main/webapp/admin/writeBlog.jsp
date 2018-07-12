<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>写博客</title>
	<%@include file="./common/head.jspf" %>
</head>
<body style="margin: 10px; font-family: microsoft yahei">

    <div id="p" class="easyui-panel" title="编写博客" style="padding: 10px;">

        <table cellspacing="20px">
            <tr>
                <td width="80px">博客标题：</td>
                <td><input type="text" id="title" name="title" style="width:400px" /></td>
            </tr>
            <tr>
                <td>所属类别：</td>
                <td><select id="blogTypeId" class="easyui-combobox"
                    name="blogType.id" style="width:154px" editable="false"
                    panelHeight="auto">
                        <option value="">请选择博客类别...</option>
                        <c:forEach items="${blogTypeList }" var="blogType">
                            <option value="${blogType.id }">${blogType.typeName }</option>
                        </c:forEach>
                </select></td>
                <td></td>
            </tr>
            <tr>
                <td valign="top">博客内容：</td>
                <td><script id="editor" name="content" type="text/plain"
                        style="width:95%; height:200px;"></script></td>
            </tr>
            <tr>
                <td>关键字：</td>
                <td><input type="text" id="keyWord" name="keyWord"
                    style="width:400px" />&nbsp;&nbsp;&nbsp;多个关键字的话请用空格隔开</td>
            </tr>
            <tr>
                <td></td>
                <td><a href="javascript:submitData()" class="easyui-linkbutton"
                    data-options="iconCls:'icon-submit'">发布博客</a></td>
            </tr>
        </table>
    </div>
<script type="text/javascript">
	var ue = UE.getEditor('editor');
</script>
</body>
</html>