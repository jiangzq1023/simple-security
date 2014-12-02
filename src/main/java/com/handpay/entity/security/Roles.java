package com.handpay.entity.security;

import java.util.HashSet;
import java.util.Set;

public class Roles implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4665680072760917601L;
	private Integer id;
	private String name;
	private String descn;
	private Set<Resources> resources = new HashSet<Resources>(0);
	private Set<Tree> tree = new HashSet<Tree>(0);
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescn() {
		return descn;
	}
	public void setDescn(String descn) {
		this.descn = descn;
	}
	public Set<Resources> getResources() {
		return resources;
	}
	public void setResources(Set<Resources> resources) {
		this.resources = resources;
	}
	public Set<Tree> getTree() {
		return tree;
	}
	public void setTree(Set<Tree> tree) {
		this.tree = tree;
	}

}