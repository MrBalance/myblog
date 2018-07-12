package ssm.blog.service.impl;

import org.springframework.stereotype.Service;
import ssm.blog.dao.BlogTypeDao;
import ssm.blog.entity.BlogType;
import ssm.blog.entity.PageBean;
import ssm.blog.service.BlogTypeService;

import javax.annotation.Resource;

/**
 * Created by xp on 2017/4/14.
 * @author xp
 * @Description �������service�ӿ�ʵ����
 */
@Service
public class BlogTypeServiceImpl implements BlogTypeService{

    @Resource
    private BlogTypeDao blogTypeDao;

    public PageBean<BlogType> listByPage(PageBean<BlogType> pageBean) {
        //��ѯ��ҳ���
        pageBean.setResult(blogTypeDao.listByPage(pageBean.getStart(),pageBean.getEnd()));
        //��ѯ��¼����
        pageBean.setTotal(blogTypeDao.getTotal());
        return pageBean;
    }
}