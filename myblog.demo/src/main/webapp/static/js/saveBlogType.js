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
  