package ssm.blog.service;

import java.util.List;
import java.util.Map;

import ssm.blog.entity.BlogType;
import ssm.blog.entity.PageBean;

/**
 * Created by xp on 2017/4/14.
 * @author xp
 * @Description 博客类别service接口
 */
public interface BlogTypeService {

    //分页查询
    PageBean<BlogType> listByPage(PageBean<BlogType> pageBean);
    // 添加博客类别
    public Integer addBlogType(BlogType blogType);

    // 更新博客类别
    public Integer updateBlogType(BlogType blogType);

    // 删除博客类别
    public Integer deleteBlogType(Integer id);
    
    //获取博客
	List<BlogType> getBlogTypeData();


}