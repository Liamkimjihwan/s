package bitcamp.java89.ems2.dao;

import java.util.ArrayList;
import java.util.Map;

<<<<<<< HEAD
import bitcamp.java89.ems2.domain.Video;

public interface VideoDao {
  int countAll() throws Exception;
  ArrayList<Video> getList(Map<String,Object> paramMap) throws Exception;
=======
import bitcamp.java89.ems2.domain.Member;
import bitcamp.java89.ems2.domain.Video;

public interface VideoDao {
  int countAll() throws Exception;
  ArrayList<Video> getList(Map<String,Object> paramMap) throws Exception;
  int isLike(Map<String,Object> paramMap) throws Exception;
  ArrayList<Video> detailList(Map<String,Object> paramMap) throws Exception;
  ArrayList<Member> selectName() throws Exception;
>>>>>>> branch 'master' of https://github.com/Liamkimjihwan/s.git
  int count(String email) throws Exception;
  int countByNo(int memberNo) throws Exception;
  
}
