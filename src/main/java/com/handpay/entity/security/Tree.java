package com.handpay.entity.security;

/**
 * @author Administrator
 *
 */
public class Tree implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1215278477084203459L;
	private Integer id;
	private String text;
	private Integer node;
	private Integer parent;
	private String href;
	private Integer isParent;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public Integer getNode() {
		return node;
	}
	public void setNode(Integer node) {
		this.node = node;
	}
	public Integer getParent() {
		return parent;
	}
	public void setParent(Integer parent) {
		this.parent = parent;
	}
	public String getHref() {
		return href;
	}
	public void setHref(String href) {
		this.href = href;
	}
	public Integer getIsParent() {
		return isParent;
	}
	public void setIsParent(Integer isParent) {
		this.isParent = isParent;
	}
	
}
