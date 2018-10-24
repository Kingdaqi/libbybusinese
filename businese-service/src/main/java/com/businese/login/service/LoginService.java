package com.businese.login.service;

import com.businese.model.SysUser;

/**
 * create by Administrator on 2018/7/5
 */
public interface LoginService {

    /**
     * 用户登录
     * @param username
     * @param password
     * @return
     */
    SysUser login(String username, String password);


}
