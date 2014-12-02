package com.handpay.controller;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.handpay.service.UserService;
 
@Controller
@RequestMapping("/user")
public class UserController {
 
	@Autowired
	private UserService userService;
	
	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView  printHello() {
		
		return new ModelAndView("hello", "message", "Hello Spring Security !");
	}
}