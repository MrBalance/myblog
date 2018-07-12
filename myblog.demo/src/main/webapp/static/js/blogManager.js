 /**
     * 格式化博客类型获取其类型名称
     * @param val
     * @param row
     * @returns {string}
     */
    function formatBlogType(val, row) {
        return val.typeName;
    }

    /**
     * 按照title查询博客信息
     */
    function searchBlog() {
        $("#dg").datagrid("load", {
            "title":$("#s_title").val()
        });
    }

    /**
     * 删除博客信息
     * 可以多选
     */
    function deleteBlog() {
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
                $.post("/admin/blog/delete.do",
                        {ids: ids}, function(result){
                            if(result.success) {
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
    /**
     *打开修改博客界面
     */
    function openBlogModifyTab() {

    }
    /**
     * 重新载入数据
     */
    function reload() {
        $("#dg").datagrid("reload");
    }