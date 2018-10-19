package com.businese.user.service.impl;

import com.businese.dao.SysDeptMapper;
import com.businese.dao.SysUserMapper;
import com.businese.model.SysDept;
import com.businese.model.SysDeptExample;
import com.businese.model.SysUser;
import com.businese.model.SysUserExample;
import com.businese.user.service.SysUserService;
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


    public SysUser login(String username, String password) {
        String result = "success";
        sysUserExample.clear();
        SysUserExample.Criteria criteria = sysUserExample.createCriteria();
        criteria.andUsernameEqualTo(username);
        criteria.andPasswordEqualTo(password);
        List<SysUser> sysUsers = sysUserMapper.selectByExample(sysUserExample);

        if(sysUsers!=null && sysUsers.size()>0){
            return sysUsers.get(0);
        }
        return null;
    }

    public SysUser findUserByUserId(Integer userId) {
        return sysUserMapper.selectByPrimaryKey(userId);
    }

}
