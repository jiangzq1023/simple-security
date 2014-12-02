package com.handpay.security;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import org.springframework.security.access.SecurityMetadataSource;
import org.springframework.security.access.intercept.AbstractSecurityInterceptor;
import org.springframework.security.access.intercept.InterceptorStatusToken;
import org.springframework.security.web.FilterInvocation;
import org.springframework.security.web.access.intercept.FilterInvocationSecurityMetadataSource;

public class HpAuthorizationFilter extends AbstractSecurityInterceptor implements Filter {
	// ��spring-security.xml���hpFilter������securityMetadataSource��Ӧ��
	// ����������������Ѿ���AbstractSecurityInterceptor����
	private FilterInvocationSecurityMetadataSource securityMetadataSource;
	public void setSecurityMetadataSource(FilterInvocationSecurityMetadataSource securityMetadataSource) {
		this.securityMetadataSource = securityMetadataSource;
	}
	public FilterInvocationSecurityMetadataSource getSecurityMetadataSource() {
		return securityMetadataSource;
	}

	@Override
	public SecurityMetadataSource obtainSecurityMetadataSource() {
		return this.securityMetadataSource;
	}

	@Override
	public Class<? extends Object> getSecureObjectClass() {
		// �����HpAccessDecisionManager��supports�������Ż�true,������������ʹ���
		return FilterInvocation.class;
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		System.out.println(">>>>>>>>>>222<<<<<<<<<< �û��������� ");
		FilterInvocation fi = new FilterInvocation(request, response, chain);

/*
		���ĵ�InterceptorStatusToken token = super.beforeInvocation(fi);
		��������Ƕ����
		securityMetadataSource:getAttributes(Object object)
		��
		accessDecisionManager:decide(Object object)
*/
		// ������****** super.beforeInvocation(fi) ִ�еĴ�������    ******������
		// 1.��ȡ������Դ��Ȩ��    :  HpSecurityMetadataSource
		//   Collection<ConfigAttribute> attributes = securityMetadataSource.getAttributes(fi);
		// 2.�Ƿ�ӵ��Ȩ��         :  HpAccessDecisionManager
		//  1) ��ȡ��ȫ���壬����ǿ��ת��ΪUserDetails��ʵ��
		//    Authentication authenticated = authenticateIfRequired();
		//    this.accessDecisionManager.decide(authenticated, fi, attributes);
		//  2) �û�ӵ�е�Ȩ��GrantedAuthority
		//    Collection<GrantedAuthority> authenticated.getAuthorities()
		// ������****** super.beforeInvocation(fi) ִ�еĴ�������    ******������
		InterceptorStatusToken token = super.beforeInvocation(fi);

		try {
			fi.getChain().doFilter(fi.getRequest(), fi.getResponse());
		} finally {
			super.afterInvocation(token, null);
		}
	}

	public void init(FilterConfig arg0) throws ServletException {
	}

	public void destroy() {
	}

}
