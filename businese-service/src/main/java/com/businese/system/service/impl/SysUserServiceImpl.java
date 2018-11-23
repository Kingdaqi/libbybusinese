package com.businese.system.service.impl;

import com.businese.dao.SysDeptMapper;
import com.businese.dao.SysRoleMapper;
import com.businese.dao.SysUserMapper;
import com.businese.model.SysDept;
import com.businese.model.SysRole;
import com.businese.model.SysUser;
import com.businese.model.SysUserExample;
import com.businese.system.service.SysUserService;
import com.businese.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Date;
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

    public SysUser addSysUser(SysUser sysUser) {
        Integer userId = Utils.createUserId(sysUserMapper.selectLastUserId());

        sysUser.setUserid(userId);
        sysUser.setDeptName("");
        sysUser.setState(1);
        sysUser.setCreatetime(new Date());
        sysUserMapper.insert(sysUser);

        return sysUser;
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

    public SysUser findUserByName(String name) {
        sysUserExample.clear();
        SysUserExample.Criteria criteria = sysUserExample.createCriteria();
        criteria.andNameEqualTo(name);
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
            String deptName = "";
            if (sysDept!=null){
                deptName = sysDept.getName();
            }
            user.setDeptName(deptName);

            Integer userId = user.getUserid();
            List<SysRole> roles = sysRoleMapper.getRolesByUserId(userId);
            String roleName = "";
            for (SysRole sysRole:roles) {
                if (roleName.equals("")){
                    roleName += sysRole.getName();
                }else{
                    roleName += ","+sysRole.getName();
                }
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

    public SysUser getUserById(Integer userId) {
        SysUser sysUser = sysUserMapper.selectByPrimaryKey(userId);
        Integer deptId = sysUser.getDeptid();
        SysDept sysDept = sysDeptMapper.selectByPrimaryKey(deptId);
        String deptName = "";
        if (sysDept!=null){
            deptName = sysDept.getName();
        }
        sysUser.setDeptName(deptName);

        List<SysRole> roles = sysRoleMapper.getRolesByUserId(userId);
        String roleName = "";
        for (SysRole sysRole:roles) {
            if (roleName.equals("")){
                roleName += sysRole.getName();
            }else{
                roleName += ","+sysRole.getName();
            }
        }
        sysUser.setRoleName(roleName);

        return sysUser;
    }

    public void update(SysUser user) {
        sysUserMapper.updateByPrimaryKeySelective(user);
    }

    public void delete(Integer userId) {
        sysUserMapper.deleteByPrimaryKey(userId);
    }

}
