package ssm.blog.service;

import ssm.blog.entity.BlogType;
import ssm.blog.entity.PageBean;

/**
 * Created by xp on 2017/4/14.
 * @author xp
 * @Description �������service�ӿ�
 */
public interface BlogTypeService {

    //��ҳ��ѯ
    PageBean<BlogType> listByPage(PageBean<BlogType> pageBean);


}