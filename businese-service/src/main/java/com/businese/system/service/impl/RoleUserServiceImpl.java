package com.businese.system.service.impl;

import com.businese.dao.SysRoleUserMapper;
import com.businese.model.SysRole;
import com.businese.model.SysRoleUser;
import com.businese.model.SysRoleUserExample;
import com.businese.model.SysUser;
import com.businese.system.service.RoleUserService;
import com.businese.system.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * create by Administrator on 2018/10/25
 */
@Service("roleMenuService")
public class RoleUserServiceImpl implements RoleUserService {

    @Autowired
    private RoleService roleService;
    @Autowired
    private SysRoleUserMapper sysRoleUserMapper;
    @Autowired
    private SysRoleUserExample sysRoleUserExample;

    public int add(SysUser user) {
        Integer userId = user.getUserid();

        String roleName = user.getRoleName();
        SysRole sysRole = roleService.selectByRoleName(roleName);
        Integer roleId = sysRole.getId();

        SysRoleUser sysRoleUser = new SysRoleUser();
        sysRoleUser.setUserid(userId);
        sysRoleUser.setRoleid(roleId);

        return sysRoleUserMapper.insert(sysRoleUser);
    }

    public void delete(Integer userId) {
        sysRoleUserExample.clear();
        SysRoleUserExample.Criteria criteria = sysRoleUserExample.createCriteria();
        criteria.andUseridEqualTo(userId);
        sysRoleUserMapper.deleteByExample(sysRoleUserExample);
    }
}
