package ssm.blog.dao;

import org.springframework.stereotype.Repository;
import ssm.blog.entity.Blogger;

/**
 * Created by xp on 2017/4/13.
 * ����dao�ӿ�
 */
@Repository //ע��Ϊ�־ò��bean
public interface BloggerDao {
    /**
     * ��ѯ������Ϣ
     * @return
     */
    Blogger getBloggerData();
}