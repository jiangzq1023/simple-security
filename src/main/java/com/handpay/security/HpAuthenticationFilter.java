package com.handpay.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;



public class HpAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	private static final String USERNAME = "username";
	private static final String PASSWORD = "password";
	private boolean allowEmptyValidateCode = false;
	private String sessionvalidateCodeField = DEFAULT_SESSION_VALIDATE_CODE_FIELD;
	private String validateCodeParameter = DEFAULT_VALIDATE_CODE_PARAMETER;
	public static final String DEFAULT_SESSION_VALIDATE_CODE_FIELD = "validateCode";
	public static final String DEFAULT_VALIDATE_CODE_PARAMETER = "validateCode";
    private boolean postOnly = true;
    


	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
		if (postOnly && !request.getMethod().equals("POST")) {
			throw new AuthenticationServiceException("Authentication method not supported: " + request.getMethod());
		}
		// ��֤��֤��
		if (!isAllowEmptyValidateCode())
			checkValidateCode(request);

		String username = obtainUsername(request);
		String password = obtainPassword(request);
		
		if (username == null) {
			username = "";
		}

		if (password == null) {
			password = "";
		}
		System.out.println(">>>>>>>>>>000<<<<<<<<<< username is " + username);

		// ʵ�� Authentication
		UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(username, password);
		// ��������������ϸ����
		setDetails(request, authRequest);
		// ����UserDetailsService��loadUserByUsername �ٴη�װAuthentication
		return this.getAuthenticationManager().authenticate(authRequest);
	}
	
	/**
	 * 
	 * <li>�Ƚ�session�е���֤����û��������֤���Ƿ����</li>
	 * 
	 */
	protected void checkValidateCode(HttpServletRequest request) {
		String sessionValidateCode = obtainSessionValidateCode(request);
		String validateCodeParameter = obtainValidateCodeParameter(request);
		if (StringUtils.isEmpty(validateCodeParameter) || !sessionValidateCode.equalsIgnoreCase(validateCodeParameter)) {
			throw new AuthenticationServiceException("��֤���������");
		}
	}
	
	private String obtainValidateCodeParameter(HttpServletRequest request) {
		return request.getParameter(validateCodeParameter);
	}

	protected String obtainSessionValidateCode(HttpServletRequest request) {
		Object obj = request.getSession().getAttribute(sessionvalidateCodeField);
		return null == obj ? "" : obj.toString();
	}

	@Override
	protected String obtainUsername(HttpServletRequest request) {
		Object obj = request.getParameter(USERNAME);
		return null == obj ? "" : obj.toString();
	}

	@Override
	protected String obtainPassword(HttpServletRequest request) {
		Object obj = request.getParameter(PASSWORD);
		return null == obj ? "" : obj.toString();
	}
	
	@Override
	protected void setDetails(HttpServletRequest request, UsernamePasswordAuthenticationToken authRequest) {
		super.setDetails(request, authRequest);
	}
	
	public boolean isAllowEmptyValidateCode() {
		return allowEmptyValidateCode;
	}
	
    public void setPostOnly(boolean postOnly) {
        this.postOnly = postOnly;
    }
}
