package com.businese.service.impl;

import com.businese.dao.SysUserMapper;
import com.businese.model.SysUser;
import com.businese.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * create by Administrator on 2018/7/5
 */
@Service("sysUserService")
public class SysUserServiceImpl implements SysUserService {

    @Autowired
    private SysUserMapper sysUserMapper;

    public int addSysUser(SysUser sysUser) {
        return sysUserMapper.insert(sysUser);
    }
}
