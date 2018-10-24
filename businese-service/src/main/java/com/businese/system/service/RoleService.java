package com.businese.system.service;

import com.businese.model.SysRole;

import java.util.List;

public interface RoleService {
    /**
     * 获取所有角色
     * @return
     */
    List<SysRole> getRoles();
}
