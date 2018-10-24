package com.businese.login.service.impl;

import com.businese.dao.SysUserMapper;
import com.businese.model.SysUser;
import com.businese.model.SysUserExample;
import com.businese.login.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * create by Administrator on 2018/7/5
 */
@Service("loginService")
public class LoginServiceImpl implements LoginService {

    @Autowired
    private SysUserMapper sysUserMapper;
    @Autowired
    private SysUserExample sysUserExample;

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

}
