package com.handpay.dao.security;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.handpay.entity.security.Tree;



@Repository  
@Transactional
public interface TreeDao {

	public List<Tree> findAll();
	public List<Tree> findAllResourcesByUserName(String username);
}
