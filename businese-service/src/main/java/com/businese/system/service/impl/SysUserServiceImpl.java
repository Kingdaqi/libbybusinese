package com.businese.system.service.impl;

import com.businese.dao.SysUserMapper;
import com.businese.model.SysUser;
import com.businese.model.SysUserExample;
import com.businese.system.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public List<SysUser> findUserByUserName(String username) {
        sysUserExample.clear();
        SysUserExample.Criteria criteria = sysUserExample.createCriteria();
        criteria.andUserNameEqualTo(username);
        List<SysUser> sysUsers = sysUserMapper.selectByExample(sysUserExample);
        return sysUsers;
    }


    public String login(String username, String password) {
        String result = "success";
        sysUserExample.clear();
        SysUserExample.Criteria criteria = sysUserExample.createCriteria();
        criteria.andUserNameEqualTo(username);
        criteria.andPasswordEqualTo(password);
        List<SysUser> sysUsers = sysUserMapper.selectByExample(sysUserExample);

        if (sysUsers==null || sysUsers.size()==0){
            result = "usererror";
        }

        return result;
    }
}
