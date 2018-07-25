/**
 * 发布，修改博客
  */


function submitData(operate) {
	var id = $("#id").val();
    //获取博客标题
    var title = $("#title").val();
    //获取博客类别id
    var blogTypeId = $("#blogType").combobox("getValue");
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
    	if(operate=="add"){
    		$.post("/admin/blog/test.do",
                    {	
    					'id': 12,
		                'title' : title,
		                'summary' : summary,
		                'content' : content,
		                'keyWord' : keyWord,
		                'blogType.id' : blogTypeId,
		                'contentNoTag' : contentNoTag
                    },function(result) {
                        if (result.success) {
                            $.messager.alert("系统提示", "博客发布成功！");
                            clearValues("写博客");
                        } else {
                            $.messager.alert("系统提示",  "博客发布失败！");
                        }
                    }, "json");
    	}
    	else if(operate == "update"	){
    		$.post("/admin/blog/save.do",
                    {
    					'id':id,
                        'title' : title,
                        'blogType' : blogTypeId,
                        'content' : content,
                        'summary' : summary,
                        'keyWord' : keyWord,
                        'contentNoTag' : contentNoTag
                    }, function(result) {
                        if (result.success) {
                            $.messager.alert("系统提示", "博客修改成功！");
                            clearValues("修改博客:"+id);
                        } else {
                            $.messager.alert("系统提示",  "博客修改失败！");
                        }
                    }, "json");
    	}
    	else{
    		url="#";
    	}
        
    }
}
//清空功能
function clearValues(text) {
	console.log(text);
	$('#tab').tabs('close',text);//关闭对应index的tabs
}