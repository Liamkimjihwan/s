package bitcamp.java89.ems2.dao;

<<<<<<< HEAD
import java.util.Map;

=======
>>>>>>> branch 'master' of https://github.com/Liamkimjihwan/s.git
import bitcamp.java89.ems2.domain.ContentsHeader;

public interface ContentsHeaderDao {
  int count(int contentsNo) throws Exception;
  int insert(ContentsHeader contents) throws Exception;
  int update(ContentsHeader contents) throws Exception;
  int delete(int contentsNo) throws Exception;
  ContentsHeader getOne(int contentsNo) throws Exception;
//  Member getOneByEmailPassword(Map<String,String> paramMap) throws Exception;
}
