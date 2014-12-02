package com.handpay.dao.security;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.handpay.entity.security.Roles;



@Repository  
@Transactional
public interface RoleDao {

	public List<Roles> findAll();
}
