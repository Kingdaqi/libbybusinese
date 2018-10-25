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

    public SysRole selectByRoleName(String roleName) {
        sysRoleExample.clear();
        SysRoleExample.Criteria criteria = sysRoleExample.createCriteria();
        criteria.andNameEqualTo(roleName);

        List<SysRole> sysRoles = sysRoleMapper.selectByExample(sysRoleExample);
        if (sysRoles!=null && sysRoles.size()>0){
            return sysRoles.get(0);
        }
        return null;
    }
}
