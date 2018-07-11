package ssm.blog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by xp on 2017/4/13.
 * ����������
 */
@Controller  //ע��Ϊ������bean
@RequestMapping(value = "/blog")    //����·��
public class BloggerController {

    @ResponseBody  //����json����
    @RequestMapping(value="/hello")
    public String hello(){
        return "hello";
    }

}