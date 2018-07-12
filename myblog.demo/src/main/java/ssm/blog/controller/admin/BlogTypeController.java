package ssm.blog.controller.admin;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import ssm.blog.entity.BlogType;
import ssm.blog.entity.PageBean;
import ssm.blog.service.BlogTypeService;
import ssm.blog.util.ResponseUtil;

import java.util.LinkedHashMap;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

/**
* Created by xp on 2017/4/14.
* @author xp
* @Description ���ͷ��������
*/
@Controller
@RequestMapping(value = "/admin/blogType")
public class BlogTypeController {
	@Resource
	private BlogTypeService blogTypeService;

	// ��ҳ��ѯ�������
	@RequestMapping("/list")
	public String listBlogType(
	        @RequestParam(value = "page", required = false) String page,
	        @RequestParam(value = "rows", required = false) String rows,
	        HttpServletResponse response) throws Exception {
	    //�����ҳbean
	    PageBean<BlogType> pageBean = new PageBean<BlogType>(Integer.parseInt(page)
	            ,Integer.parseInt(rows));
	    //�õ���ҳ����Ѿ���¼������pageBean
	    pageBean = blogTypeService.listByPage(pageBean);
	    //ʹ�ð���Ͱ͵�fastJson����JSONObject
	    JSONObject result = new JSONObject();
	    //ͨ��fastJson���л�listΪjsonArray
	    String jsonArray = JSON.toJSONString(pageBean.getResult());
	    JSONArray array = JSONArray.parseArray(jsonArray);
	    //�����л��������json������
	    result.put("total", pageBean.getTotal());
	    result.put("rows", array);
	    System.out.println(result.toString());
	    //ʹ���Զ��幤������response��д������
	    ResponseUtil.write(response, result);
	    return null;
	}
}