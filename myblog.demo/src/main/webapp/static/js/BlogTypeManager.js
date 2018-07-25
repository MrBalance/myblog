/**
 * 添加博客类型
 */
	function addBlogType() {  //回调函数
		//打开对话框并且设置标题
         $("#dlg").dialog("open").dialog("setTitle", "添加博客类别信息");
        //将url设置为添加
        url = "/admin/blogType/save.do";
        }
/**
 * 修改博客类型
 */
	function editBlogType() {
		//获取选中要修改的行
		var selectedRows = $("#dg").datagrid("getSelections");
		//确保被选中行只能为一行
		if(selectedRows.length != 1) {
		$.messager.alert("系统提示", "请选择一个要修改的博客类别");
		return;
		}
		//获取选中行id
		var row = selectedRows[0];
		//打开对话框并且设置标题
		$("#dlg").dialog("open").dialog("setTitle", "修改博客类别信息");
		//将数组回显对话框中
		$("#fm").form("load", row);//会自动识别name属性，将row中对应的数据，填充到form表单对应的name属性中
		//在url中添加id 后台就能识别是更新操作
		url = "/admin/blogType/save.do?id=" + row.id;
      }


/**
 * 删除博客类型
 * 可以多选
 */
    function deleteBlogType() {
        //获取选中要删除的行
        var selectedRows = $("#dg").datagrid("getSelections");
        //判断是否有选择的行
        if(selectedRows.length == 0) {
            $.messager.alert("系统提示", "请选择要删除的数据");
            return;
        }
        //定义选中 选中id数组
        var idsStr = [];
        //循环遍历将选中行的id push进入数组
        for(var i = 0; i < selectedRows.length; i++) {
            idsStr.push(selectedRows[i].id);
        }
        //将数组安装,连接成字符串
        var ids = idsStr.join(","); //1,2,3,4
        //提示是否确认删除
        $.messager.confirm("系统提示", "<font color=red>您确定要删除选中的"+selectedRows.length+"条数据么？</font>", function(r) {
            //确定删除
            if(r) {
                //发送ajax请求
            	$.post("/admin/blogType/delete.do",
                        {ids: ids}, function(result){
                            if(result.exist) {
                                $.messager.alert("系统提示", '该类别下有博客，不能删除!');
                            } else if(result.success) {
                                $.messager.alert("系统提示", "数据删除成功！");
                                selectedRows.length = 0;
                                $("#dg").datagrid("reload");
                            } else {
                                $.messager.alert("系统提示", "数据删除失败！");
                            }
                        }, "json");
            }
        });
    }
//定义全局url 用于修改与添加操作
    var url;

//省略其他代码  让url声明在第一行
 /**
  * 添加或者修改博客类别
  */
  function saveBlogType() {
        $("#fm").form("submit",{
            url: url,
            onSubmit: function() {
                return $(this).form("validate");
            }, //进行验证，通过才让提交
            success: function(result) {
                var result = eval("(" + result + ")"); //将json格式的result转换成js对象
                if(result.success) {
                    $.messager.alert("系统提示", "博客类别保存成功");
                    $("typeName").val(""); //保存成功后将内容置空
                    $("typeNum").val("");
                    $("#dlg").dialog("close"); //关闭对话框
                    $("#dg").datagrid("reload"); //刷新一下
                } else {
                    $.messager.alert("系统提示", "博客类别保存失败");
                    return;
                }
            }
        });
    }
  function closeBlogTypeDialog() {
      $("typeName").val(""); //保存成功后将内容置空
      $("typeNum").val("");
      $("#dlg").dialog("close"); //关闭对话框
  }
  