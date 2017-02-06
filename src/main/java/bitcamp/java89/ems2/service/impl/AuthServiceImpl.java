package bitcamp.java89.ems2.service.impl;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems2.dao.ManagerDao;
import bitcamp.java89.ems2.dao.MemberDao;
import bitcamp.java89.ems2.dao.StudentDao;
import bitcamp.java89.ems2.dao.TeacherDao;
import bitcamp.java89.ems2.domain.Member;
import bitcamp.java89.ems2.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {
  
  @Autowired MemberDao memberDao;
  @Autowired StudentDao studentDao; 
  @Autowired TeacherDao teacherDao;
  @Autowired ManagerDao managerDao;
  
  public Member getMemberInfo(String email, String password, String userType) throws Exception {
    // 이메일과 암호를 주고 해당 정보를 달라고함.
    // Dao를 실행하려면 이메일과 암호가 필요함.
    HashMap<String,String> paramMap = new HashMap<>();
    paramMap.put("email", email);
    paramMap.put("password", password);
    
    Member member = memberDao.getOneByEmailPassword(paramMap);
    
    if (member == null) {
      return null;
    }
    if (userType.equals(Member.STUDENT)) { // 각각 타입에 따라 값을 꺼내는 것.
      return studentDao.getOne(member.getMemberNo());
      
    } else if (userType.equals(Member.TEACHER)) {
      return teacherDao.getOneWithPhoto(member.getMemberNo());
      
    } else /*if (userType.equals(Member.MANAGER))*/ {
      return managerDao.getOne(member.getMemberNo());
    }
    
  }
}
