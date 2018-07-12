package ssm.blog.listener;

import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.ContextLoader;

import ssm.blog.entity.BlogType;
import ssm.blog.service.BlogTypeService;

public class InitBloggerData implements ServletContextListener {

	private static ApplicationContext applicationContext;
	
	public void setApplicationContext(ApplicationContext applicationContext) 
	            throws BeansException {
	        InitBloggerData.applicationContext = applicationContext;
	    }

    public void contextInitialized(ServletContextEvent sce) {
    	applicationContext = ContextLoader.getCurrentWebApplicationContext();
        //�Ȼ�ȡservlet������
        ServletContext application = sce.getServletContext();
        //ͬ�ϣ���ȡ���������Ϣservice
        System.out.println(applicationContext);
        BlogTypeService blogTypeService = applicationContext.getBean(BlogTypeService.class);
        List<BlogType> blogTypeList = blogTypeService.getBlogTypeData();
        application.setAttribute("blogTypeList", blogTypeList);
    }

    public void contextDestroyed(ServletContextEvent sce) {
        // TODO Auto-generated method stub

    }
}
