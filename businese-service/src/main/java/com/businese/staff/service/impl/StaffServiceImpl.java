package com.businese.staff.service.impl;

import com.businese.model.SysUser;
import com.businese.staff.service.StaffService;
import com.businese.system.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * create by Administrator on 2018/10/8
 */
@Service("staffService")
public class StaffServiceImpl implements StaffService {

    @Autowired
    private SysUserService sysUserService;

    public List<SysUser> getStaffs(String userName, Integer page, Integer rows) {
        return sysUserService.getUsers(userName,page,rows);
    }

    public Integer getStaffsCount(String userName) {
        return sysUserService.getUsersCount(userName);
    }

    public void delete(Integer userId) {
        sysUserService.delete(userId);
    }

}
