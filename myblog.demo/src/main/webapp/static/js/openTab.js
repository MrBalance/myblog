/**
         * 打开选项卡
         * @param text  选项卡标题
         * @param url   请求打开路径
         * @param icon  选项卡图标
         */
        function openTab(text,url,icon) {
            //判断当前选项卡是否存在
            if($('#tabs').tabs('exists',text)){
                //如果存在 显示
                $("#tabs").tabs("select",text);
            }else{
                //如果不存在 则新建一个
                $("#tabs").tabs('add',{
                    title:text,
                    closable:true,      //是否允许选项卡摺叠。
                    iconCls:icon,    //显示图标
                    content:"<iframe frameborder=0 scrolling='auto' style='width:100%;height:100%' src='/admin/"+url+"'></iframe>"
                    //url 远程加载所打开的url
                })
            }
        }
      