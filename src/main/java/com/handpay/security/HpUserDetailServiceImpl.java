package com.handpay.security;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.handpay.dao.security.ResourcesDao;
import com.handpay.dao.security.UsersDao;
import com.handpay.entity.security.Resources;
import com.handpay.entity.security.Users;


public class HpUserDetailServiceImpl implements UserDetailsService {

	@Autowired
	private UsersDao usersDao;
	@Autowired
	private ResourcesDao resourcesDao;


	// ��¼��֤
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		System.out.println(">>>>>>>>>>111<<<<<<<<<< username is " + username);
		
		//ȡ���û���Ȩ��
		Users users = this.usersDao.findByName(username);
		if(users == null)
			throw new UsernameNotFoundException("�û��������벻ƥ�䣡"); 
		
		List<Resources> resources = this.resourcesDao.findAllResourcesByUserName(username);
		Set<GrantedAuthority> grantedAuths = obtionGrantedAuthorities(resources);

		users.setAuthorities(grantedAuths);
		return users;
	}

	// ȡ���û���Ȩ��
	private Set<GrantedAuthority> obtionGrantedAuthorities(List<Resources> resources) {
		
		Set<GrantedAuthority> authSet = new HashSet<GrantedAuthority>();
		for (Resources res : resources) {
			// TODO:�û����Է��ʵ���Դ���ƣ�����˵�û���ӵ�е�Ȩ�ޣ� ע�⣺����"ROLE_"��ͷ
			// �������룺spring-security.xml
			// �������룺com.handpay.security.HpSecurityMetadataSource#loadResourceDefine
			authSet.add(new SimpleGrantedAuthority("ROLE_" + res.getName()));
		}
		return authSet;
	}
}
