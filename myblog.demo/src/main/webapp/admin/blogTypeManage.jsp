<%--
  Created by IntelliJ IDEA.
  User: xp
  Date: 2017/4/14
  Time: 08:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="en">
<head>
    <title>博客类别管理</title>
    <%@include file="./common/head.jspf" %>
</head>
<body>
 <table id="dg" title="博客管理" class="easyui-datagrid" fitColumns="true" pagination="true"
   url="${blog}/admin/blogType/list.do" toolbar="#tb" >
	<thead>
    	<tr>
	         <th field="cb" checkbox="true" align="center"></th>
	         <th field="id" width="10" align="center">博客id</th>
	         <th field="typeName" width="100"  align="center">博客类别名称</th>
	         <th field="orderNum" width="10">博客类别排序&nbsp;(博客类别会根据序号从小到大排列)</th>>
   		</tr>
 	</thead>
</table>
<div id="tb">
	    <div>
	    	<a href="javascript:addBlogType()" class="easyui-linkbutton" iconCls="icon-add" plain="true">添加</a>
	        <a href="javascript:deleteBlogType()" class="easyui-linkbutton" iconCls="icon-remove" plain="true">删除</a>
	        <a href="javascript:editBlogType()" class="easyui-linkbutton" iconCls="icon-edit" plain="true">修改</a>      
	        <a href="javascript:reload()" class="easyui-linkbutton" iconCls="icon-reload" plain="true">刷新</a>       
	    </div>
	</div>
<div id="dlg" class="easyui-dialog" style="width:500px; height:180px; padding:10px 20px"
     closed="true" buttons="#dlg-buttons">
     <form id="fm" method="post">
        <table cellspacing="8px">
            <tr>
                <td>博客类别名称</td>
                <td>
                    <input type="text" id="typeName" name="typeName" class="easyui-validatebox" required="true">
                </td>
            </tr>
            <tr>
                <td>博客类别排序</td>
                <td>
                    <input type="text" id="orderNum" name="orderNum" class="easyui-numberbox" required="true"
                           style="width:60px">&nbsp;(博客类别会根据序号从小到大排列)
                </td>
            </tr>
        </table>
    </form>
</div>
<div id="dlg-buttons">
	    <div>
	        <a href="javascript:saveBlogType()" class="easyui-linkbutton" iconCls="icon-ok" plain="true">保存</a>
	        <a href="javascript:closeBlogTypeDialog()" class="easyui-linkbutton" iconCls="icon-cancel" plain="true">关闭</a>
	    </div>
	</div>
</body>
</html>