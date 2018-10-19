package com.businese.user.service;

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
    SysUser findUserByUserName(String username);


    /**
     * 用户登录
     * @param username
     * @param password
     * @return
     */
    SysUser login(String username, String password);

    /**
     * 根据id获取用户
     * @param userId
     * @return
     */
    SysUser findUserByUserId(Integer userId);

}
