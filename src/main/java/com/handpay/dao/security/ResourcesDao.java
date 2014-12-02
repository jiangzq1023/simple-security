package com.handpay.dao.security;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.handpay.entity.security.Resources;



@Repository  
@Transactional
public interface ResourcesDao {

	public List<Resources> findAll();
	public List<Resources> findAllResourcesByUserName(String username);
}
