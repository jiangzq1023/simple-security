package com.handpay.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.access.SecurityConfig;
import org.springframework.security.web.FilterInvocation;
import org.springframework.security.web.access.intercept.FilterInvocationSecurityMetadataSource;

import com.handpay.dao.security.ResourcesDao;
import com.handpay.entity.security.Resources;


//1 ������Դ��Ȩ�޵Ķ�Ӧ��ϵ
public class HpSecurityMetadataSource implements FilterInvocationSecurityMetadataSource {
	// ��spring����
	public HpSecurityMetadataSource(ResourcesDao resourcesDao) {
		this.resourcesDao = resourcesDao;
		loadResourceDefine();
	}

	private ResourcesDao resourcesDao;


	// ������������Դ����Ҫ��Ȩ��
	public Collection<ConfigAttribute> getAttributes(Object object)	throws IllegalArgumentException {
		System.out.println(">>>>>>>>>>333<<<<<<<<<< ������������Դ����Ҫ��Ȩ�� ");
		String requestUrl = ((FilterInvocation) object).getRequestUrl();
		System.out.println("requestUrl is " + requestUrl);
		if (resourceMap == null) {
			loadResourceDefine();
		}
		return resourceMap.get(requestUrl);
	}

	public Collection<ConfigAttribute> getAllConfigAttributes() {
		return null;
	}

	public boolean supports(Class<?> clazz) {
		return true;
	}

	// ����������Դ��Ȩ�޵Ĺ�ϵ
	private static Map<String, Collection<ConfigAttribute>> resourceMap = null;
	private void loadResourceDefine() {
		if (resourceMap == null) {
			resourceMap = new HashMap<String, Collection<ConfigAttribute>>();
			List<Resources> resources = this.resourcesDao.findAll();
			for (Resources resource : resources) {
				Collection<ConfigAttribute> configAttributes = new ArrayList<ConfigAttribute>();
				// TODO:ͨ����Դ��������ʾ�����Ȩ�� ע�⣺����"ROLE_"��ͷ
				// �������룺spring-security.xml
				// �������룺com.handpay.security.HpUserDetailServiceImpl#obtionGrantedAuthorities
				ConfigAttribute configAttribute = new SecurityConfig("ROLE_" + resource.getName());
				configAttributes.add(configAttribute);
				resourceMap.put(resource.getUrl(), configAttributes);
			}
		}
	}

}
