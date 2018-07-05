package com.businese.controller;

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
    public String registerSysUser(@RequestParam() String username,
                                  @RequestParam() String password,
                                  @RequestParam() String name,
                                  @RequestParam() String email,
                                  @RequestParam() String rcode,
                                  @RequestParam() String FKEY){

        String result = "00";
        int i = sysUserService.addSysUser();

        return result;
    }

}
