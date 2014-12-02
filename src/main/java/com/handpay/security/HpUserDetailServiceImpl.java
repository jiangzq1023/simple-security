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


	// 登录验证
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		System.out.println(">>>>>>>>>>111<<<<<<<<<< username is " + username);
		
		//取得用户的权限
		Users users = this.usersDao.findByName(username);
		if(users == null)
			throw new UsernameNotFoundException("用户名或密码不匹配！"); 
		
		List<Resources> resources = this.resourcesDao.findAllResourcesByUserName(username);
		Set<GrantedAuthority> grantedAuths = obtionGrantedAuthorities(resources);

		users.setAuthorities(grantedAuths);
		return users;
	}

	// 取得用户的权限
	private Set<GrantedAuthority> obtionGrantedAuthorities(List<Resources> resources) {
		
		Set<GrantedAuthority> authSet = new HashSet<GrantedAuthority>();
		for (Resources res : resources) {
			// TODO:用户可以访问的资源名称（或者说用户所拥有的权限） 注意：必须"ROLE_"开头
			// 关联代码：spring-security.xml
			// 关联代码：com.handpay.security.HpSecurityMetadataSource#loadResourceDefine
			authSet.add(new SimpleGrantedAuthority("ROLE_" + res.getName()));
		}
		return authSet;
	}
}
