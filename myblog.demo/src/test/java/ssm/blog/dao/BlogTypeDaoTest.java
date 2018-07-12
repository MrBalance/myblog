package ssm.blog.dao;

import org.apache.ibatis.annotations.Param;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import ssm.blog.entity.BlogType;

import javax.annotation.Resource;

import java.util.List;

import static org.junit.Assert.*;

/**
 * Created by xp on 2017/4/14.
 * @author xp
 * @Description �������dao������
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring-beans.xml")
public class BlogTypeDaoTest {

    @Resource
    private BlogTypeDao blogTypeDao;


    @Test
    public void addBlogType() throws Exception {
        BlogType blogType = new BlogType("Mysql",10);
        int result = blogTypeDao.addBlogType(blogType);
        System.out.println(result);
    }

    @Test
    public void deleteBlogType() throws Exception {
        int result = blogTypeDao.deleteBlogType(16);
        System.out.println(result);
    }

    @Test
    public void updateBlogType() throws Exception {
        // �Ȳ�ѯ��Ҫ���µļ�¼Ȼ���޸�
        BlogType blogType = blogTypeDao.getById(17);
        //Ȼ���ύ����
        blogType.setTypeName("����mysql");
        //����
        blogTypeDao.updateBlogType(blogType);
        //��ѯ���º��ֵ ���Ҵ�ӡ
        System.out.println(blogTypeDao.getById(17));

    }

    @Test
    public void getById() throws Exception {
        BlogType blogType = blogTypeDao.getById(17);
        System.out.println(blogType);
    }

    @Test
    public void  listByPage(){
        Integer page = 1;  //��һҳ
        Integer pageSize = 2;  //һҳ��ʾ����
        Integer start =(page-1)*pageSize;
        Integer end = page*pageSize;
        List<BlogType> blogTypeList = blogTypeDao.listByPage(start,end);
        for (BlogType b: blogTypeList) {
            System.out.println(b);
        }
    }

    @Test
    public void getTotal(){
        long total = blogTypeDao.getTotal();
        System.out.println(total);
    }

}