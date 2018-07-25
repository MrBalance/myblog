//初始化
$(function (){
	var id = getUrlParam('id');
	$('#blogType').combobox({  
	    url:'/admin/blogType/listAll.do',    
	    valueField:'id',    
	    textField:'typeName' ,
	    onLoadSuccess:function(){
	    	var data = $('#blogType').combobox("getData");
	    	if(id==null){
	    		$('#blogType').combobox("setText","请选择博客类别...");
	    	}
	    	else{
	    		$.ajax({
	    	        url: "/admin/blog/get.do?id=" + id,
	    	        type: 'get',
	    	        dataType: 'json',
	    	        timeout: 1000,
	    	        cache: false,
	    	        beforeSend: LoadFunction, // 加载执行方法
	    	        error: erryFunction,  // 错误执行方法
	    	        success: succFunction // 成功执行方法
	    	    })
	    	    function LoadFunction() {
	    			load();
	    	    }
	    	    function erryFunction() {
	    			 $("#fm").html('加载失败...');
	    	    }
	    	    function succFunction(result) {
	    	    	disLoad();
	    	    	$("#id").val(result.id);
	    	    	console.log($("#id"));
	        		$("#title").val(result.title);
	        		$("#keyWord").val(result.keyWord);
	        		$("#submit").text("修改博客");
	        		$("#submit").attr('href',"javascript:submitData('update')")
	        		for(var i=0;i<data.length;i++){
		    			if(data[i].id==result.blogType.id){
		    				$('#blogType').combobox('select',data[i].typeName);
		    			}
		    		}
	        		UE.getEditor("editor").addListener("ready", function () {
	        			UE.getEditor("editor").setContent(result.content);
	        		});
	       		}
	    		
	    	}
	    }
	}); 
})
// 获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  // 匹配目标参数
    if (r != null) return unescape(r[2]); return null; // 返回参数值
}
// 弹出加载层
function load() {  
    $("<div class=\"datagrid-mask\"></div>").css({ display: "block", width: "100%", height: $(window).height() }).appendTo("body");  
    $("<div class=\"datagrid-mask-msg\"></div>").html("loading...").appendTo("body").css({ display: "block", left: ($(document.body).outerWidth(true) - 190) / 2, top: ($(window).height() - 45) / 2 });  
}
// 取消加载层
function disLoad() {  
    $(".datagrid-mask").remove();  
    $(".datagrid-mask-msg").remove();  
}