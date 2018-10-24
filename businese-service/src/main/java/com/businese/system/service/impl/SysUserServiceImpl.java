package com.businese.system.service.impl;

import com.businese.dao.SysDeptMapper;
import com.businese.dao.SysRoleMapper;
import com.businese.dao.SysUserMapper;
import com.businese.model.SysDept;
import com.businese.model.SysRole;
import com.businese.model.SysUser;
import com.businese.model.SysUserExample;
import com.businese.system.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

/**
 * create by Administrator on 2018/7/5
 */
@Service("sysUserService")
public class SysUserServiceImpl implements SysUserService {

    @Autowired
    private SysUserMapper sysUserMapper;
    @Autowired
    private SysUserExample sysUserExample;
    @Autowired
    private SysDeptMapper sysDeptMapper;
    @Autowired
    private SysRoleMapper sysRoleMapper;

    public int addSysUser(SysUser sysUser) {
        return sysUserMapper.insert(sysUser);
    }

    public SysUser findUserByUserName(String username) {
        sysUserExample.clear();
        SysUserExample.Criteria criteria = sysUserExample.createCriteria();
        criteria.andUsernameEqualTo(username);
        List<SysUser> sysUsers = sysUserMapper.selectByExample(sysUserExample);
        if(sysUsers!=null && sysUsers.size()>0){
            return sysUsers.get(0);
        }
        return null;
    }

    public SysUser findUserByUserId(Integer userId) {
        return sysUserMapper.selectByPrimaryKey(userId);
    }

    public List<SysUser> getUsers(String userName, Integer page, Integer rows) {
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
            String roleName = "";
            for (SysRole sysRole:roles) {
                roleName += sysRole.getName();
            }
            user.setRoleName(roleName);

            sysUsers.add(user);
        }

        return sysUsers;
    }

    public Integer getUsersCount(String userName) {
        sysUserExample.clear();
        SysUserExample.Criteria criteria = sysUserExample.createCriteria();
        if (userName!=null && !"".equals(userName)){
            criteria.andUsernameEqualTo(userName);
        }
        int count = sysUserMapper.countByExample(sysUserExample);

        return count;
    }

    public void delete(Integer userId) {
        sysUserMapper.deleteByPrimaryKey(userId);
    }

}
