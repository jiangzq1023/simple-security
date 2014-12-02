package com.handpay.dao.security;


import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.apache.ibatis.annotations.Param;

import com.handpay.entity.security.Users;



@Repository  
@Transactional
public interface UsersDao {

	public Users findByName(String account);
	public void addUser(Users user);
	public void setUser(Users user);
	public void delUser(int id);
	public void setPassword(@Param(value = "id") int id,@Param(value = "password") String password);
}
