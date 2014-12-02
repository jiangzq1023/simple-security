package com.handpay.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.handpay.dao.security.UsersDao;


@Service
public class UserService {

	@Autowired
	private UsersDao usersDao;
	
	public String queryUser(){
		
		return "";
	}
}
