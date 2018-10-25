package com.businese.system.service;

import com.businese.model.SysUser;

/**
 * create by Administrator on 2018/10/25
 */
public interface RoleUserService {
    /**
     *
     * @param user
     */
    int add(SysUser user);

    void delete(Integer userId);
}
