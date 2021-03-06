package com.businese.system.service;

import com.businese.model.SysUser;

import java.util.List;

/**
 * create by Administrator on 2018/11/26
 */
public interface SysUserService {

    /**
     * 新增用户
     * @param SysUser
     * @return
     */
    SysUser addSysUser(SysUser SysUser);

    /**
     * 根据用户名查询用户
     * @param username
     * @return
     */
    SysUser findUserByUserName(String username);

    /**
     * 根据用户姓名查询用户
     * @param name
     * @return
     */
    SysUser findUserByName(String name);

    /**
     * 根据id获取用户
     * @param userId
     * @return
     */
    SysUser findUserByUserId(Integer userId);

    /**
     * 根据id删除用户
     * @param userId
     */
    void delete(Integer userId);

    /**
     * 分页查询用户
     * @param userName 用户名
     * @param page
     * @param rows
     * @return
     */
    List<SysUser> getUsers(String userName, Integer page, Integer rows);

    /**
     * 根据用户名查询数量
     * @param userName
     * @return
     */
    Integer getUsersCount(String userName);

    /**
     * 根据用户id查询用户
     * @param userId
     * @return
     */
    SysUser getUserById(Integer userId);

    /**
     * 更新用户信息
     * @param user
     */
    void update(SysUser user);

    /**
     * 修改登录密码
     * @param userId
     * @param newPassword
     */
    void modifyPassword(int userId, String newPassword);

    /**
     * 根据用户id获取用户密码
     * @param userId
     * @return
     */
    String getPassword(int userId);
}
