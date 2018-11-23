package com.businese.system.service;

import com.businese.model.SysUser;

/**
 * create by Administrator on 2018/10/25
 */
public interface RoleUserService {
    /**
     * 根据用户信息建立用户与角色关系
     * @param user
     */
    int add(SysUser user);

    /**
     * 根据用户id与角色id建立关系
     * @param userId
     * @param roleId
     * @return
     */
    int add(Integer userId, Integer roleId);

    /**
     * 根据用户id删除用户角色关系
     * @param userId
     */
    void delete(Integer userId);

    /**
     * 根据用户id更新用户角色关系
     * @param userId
     */
    void update(Integer userId, Integer newRoleId);
}
