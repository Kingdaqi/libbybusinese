package com.businese.staff.service.impl;

import com.businese.dao.SysDeptMapper;
import com.businese.dao.SysRoleMapper;
import com.businese.dao.SysUserMapper;
import com.businese.model.SysDept;
import com.businese.model.SysRole;
import com.businese.model.SysUser;
import com.businese.model.SysUserExample;
import com.businese.staff.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * create by Administrator on 2018/10/8
 */
@Service("staffService")
public class StaffServiceImpl implements StaffService {

    @Autowired
    private SysUserMapper sysUserMapper;
    @Autowired
    private SysUserExample sysUserExample;
    @Autowired
    private SysDeptMapper sysDeptMapper;
    @Autowired
    private SysRoleMapper sysRoleMapper;

    public List<SysUser> getStaffs(String userName, Integer page, Integer rows) {
        List<SysUser> sysUsers = new ArrayList<SysUser>();
        sysUserExample.clear();
        SysUserExample.Criteria criteria = sysUserExample.createCriteria();
        if (userName!=null && !"".equals(userName)){
            criteria.andUsernameEqualTo(userName);
        }

        sysUserExample.setStart((page-1)*rows);
        sysUserExample.setLimit(rows);
        List<SysUser> users= sysUserMapper.selectByExample(sysUserExample);

        for (SysUser user:users) {
            Integer deptId = user.getDeptid();
            SysDept sysDept = sysDeptMapper.selectByPrimaryKey(deptId);
            user.setDeptName(sysDept.getDeptName());

            Integer userId = user.getUserid();
            List<SysRole> roles = sysRoleMapper.getRolesByUserId(userId);
            user.setRoles(roles);

            sysUsers.add(user);
        }

        return sysUsers;
    }

    public Integer getStaffsCount(String userName) {
        sysUserExample.clear();
        SysUserExample.Criteria criteria = sysUserExample.createCriteria();
        if (userName!=null && !"".equals(userName)){
            criteria.andUsernameEqualTo(userName);
        }
        int count = sysUserMapper.countByExample(sysUserExample);

        return count;
    }

}
