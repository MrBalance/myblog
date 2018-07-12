function closeBlogTypeDialog() {
        $("typeName").val(""); //保存成功后将内容置空
        $("typeNum").val("");
        $("#dlg").dialog("close"); //关闭对话框
    }