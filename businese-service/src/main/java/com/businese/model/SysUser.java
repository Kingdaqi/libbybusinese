package com.businese.model;

import java.util.Date;

public class SysUser {
    private Integer id;

    private String username;

    private String password;

    private String name;

    private String email;

    private Integer status;

    private Date createtime;

    private Date lastmodifylogintime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public Date getLastmodifylogintime() {
        return lastmodifylogintime;
    }

    public void setLastmodifylogintime(Date lastmodifylogintime) {
        this.lastmodifylogintime = lastmodifylogintime;
    }

    public SysUser() {
    }

    public SysUser(String username, String password, String name, String email, Integer status, Date createtime) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.status = status;
        this.createtime = createtime;
    }
}