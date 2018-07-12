/**
 * 发布博客
  */

//实例化编辑器
//建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
var ue = UE.getEditor('editor');

function submitData() {
    //获取博客标题
    var title = $("#title").val();
    //获取博客类别id
    var blogTypeId = $("#blogTypeId").combobox("getValue");
    //获取博客内容 带标记
    var content = UE.getEditor('editor').getContent();
    //截取博客前155字符 作为博客简介
    var summary = UE.getEditor('editor').getContentTxt().substr(0, 155);
    //博客关键词
    var keyWord = $("#keyWord").val();
    //获取博客内容  不带标签 纯文本
    var contentNoTag = UE.getEditor('editor').getContentTxt();
    //校验
    if (title == null || title == '') {
        $.messager.alert("系统提示", "请输入标题！");
    } else if (blogTypeId == null || blogTypeId == '') {
        $.messager.alert("系统提示", "请选择博客类型！");
    } else if (content == null || content == '') {
        $.messager.alert("系统提示", "请编辑博客内容！");
    } else {
       //ajax请求 请求后台写博客接口
        $.post("/admin/blog/save.do",
                {
                    'title' : title,
                    'blogType.id' : blogTypeId,
                    'content' : content,
                    'summary' : summary,
                    'keyWord' : keyWord,
                    'contentNoTag' : contentNoTag
                }, function(result) {
                    if (result.success) {
                        $.messager.alert("系统提示", "博客发布成功！");
                        clearValues();
                    } else {
                        $.messager.alert("系统提示", "博客发布失败！");
                    }
                }, "json");
    }
}
//清空功能
function clearValues() {
    $("#title").val("");
    $("#blogTypeId").combobox("setValue", "");
    UE.getEditor("editor").setContent("");
    $("#keyWord").val("");
}