package com.businese.system.service.impl;

import com.businese.dao.SysRoleMapper;
import com.businese.model.SysRole;
import com.businese.model.SysRoleExample;
import com.businese.system.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("roleService")
public class RoleServiceImpl implements RoleService {

    @Autowired
    private SysRoleMapper sysRoleMapper;
    @Autowired
    private SysRoleExample sysRoleExample;

    public List<SysRole> getRoles() {
        return sysRoleMapper.getRoles();
    }
}
