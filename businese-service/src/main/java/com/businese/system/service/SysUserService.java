package com.businese.system.service;

import com.businese.model.SysUser;

import java.util.List;

/**
 * create by Administrator on 2018/7/5
 */
public interface SysUserService {

    /**
     * 注册新用户
     * @param sysUser
     * @return
     */
    int addSysUser(SysUser sysUser);

    /**
     * 根据用户名查询用户
     * @param username
     * @return
     */
    List<SysUser> findUserByUserName(String username);


    /**
     * 用户登录
     * @param username
     * @param password
     * @return
     */
    String login(String username, String password);
}
