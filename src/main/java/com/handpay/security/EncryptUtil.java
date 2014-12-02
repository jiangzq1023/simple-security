package com.handpay.security;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.StandardPasswordEncoder;

public class EncryptUtil implements PasswordEncoder{

	//从配置文件中获得  
   private static final String SITE_WIDE_SECRET = "handpay";  
   private static final PasswordEncoder encoder = new StandardPasswordEncoder(  
      SITE_WIDE_SECRET);  
  
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		EncryptUtil e =new EncryptUtil();
		System.out.println(e.encode("admin"));
		System.out.println(e.matches("admin","af678c37086e0158e5e4f1fb0624e0de006ff2700480bd50294aa515112736eab775c028272fad4c"));
	}

	@Override
	public String encode(CharSequence rawPassword) {
		return encoder.encode(rawPassword);  
	}

	@Override
	public boolean matches(CharSequence rawPassword, String password) {
		return encoder.matches(rawPassword, password);  
	}


}
