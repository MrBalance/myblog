package ssm.blog.service;

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


}