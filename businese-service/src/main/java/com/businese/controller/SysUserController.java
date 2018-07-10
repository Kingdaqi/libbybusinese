package com.businese.controller;

import com.businese.model.SysUser;
import com.businese.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * create by Administrator on 2018/7/5
 * 后台管理系统用户controller
 */
@Controller
@RequestMapping("/sysUser")
public class SysUserController {

    @Autowired
    private SysUserService sysUserService;

    @RequestMapping("/registerSysUser")
    public void registerSysUser(@RequestParam() String username,@RequestParam() String password,
                                  @RequestParam() String name,@RequestParam() String email,
                                  @RequestParam() String rcode,@RequestParam() String FKEY){

        String result = "00";

        SysUser sysUser = new SysUser();
        sysUser.setUsername(username);
        sysUser.setPassword(password);
        sysUser.setName(name);
        sysUser.setEmail(email);

        int row = sysUserService.addSysUser(sysUser);

        if (row==1)
            result ="01";

//        return result;
    }

}
