package com.handpay.security;

import java.util.Collection;
import java.util.Iterator;

import org.springframework.security.access.AccessDecisionManager;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

public class HpAccessDecisionManager implements AccessDecisionManager {

	public void decide(Authentication authentication, Object object, Collection<ConfigAttribute> configAttributes) throws AccessDeniedException, InsufficientAuthenticationException {
		System.out.println(">>>>>>>>>>444<<<<<<<<<< HpAccessDecisionManager ");
		if (configAttributes == null) {
			return;
		}

		// ���������Դӵ�е�Ȩ��(һ����Դ�Զ��Ȩ��)
		Iterator<ConfigAttribute> iterator = configAttributes.iterator();
		while (iterator.hasNext()) {
			ConfigAttribute configAttribute = iterator.next();
			// ������������Դ����Ҫ��Ȩ��
			String needPermission = configAttribute.getAttribute();
			System.out.println("needPermission is " + needPermission);
			// �û���ӵ�е�Ȩ��authentication
			for (GrantedAuthority ga : authentication.getAuthorities()) {
				System.out.println("yourPermission is " + ga.getAuthority());
				if (needPermission.equals(ga.getAuthority())) {
					return;
				}
			}
		}
		// û��Ȩ��������ȥ��׽
		throw new AccessDeniedException(" û��Ȩ�޷��ʣ�");
	}

	public boolean supports(ConfigAttribute attribute) {
		return true;
	}

	public boolean supports(Class<?> clazz) {
		return true;
	}

}