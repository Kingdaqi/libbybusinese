package com.businese.user.controller;

import com.alibaba.fastjson.JSONObject;
import com.businese.model.SysUser;
import com.businese.user.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * create by Administrator on 2018/7/5
 * 后台管理系统--用户登录注册controller
 */
@Controller
@RequestMapping("/sysUser")
public class SysUserController {

    @Autowired
    private SysUserService sysUserService;

    @ResponseBody
    @RequestMapping("/addSysUser")
    public String addSysUser(@RequestParam(value = "USERNAME") String username,@RequestParam(value = "PASSWORD") String password,
                                  @RequestParam(value = "NAME") String name){

        JSONObject json = new JSONObject();
        String result = "01";

        List<SysUser> sysUsers = sysUserService.findUserByUserName(username);
        if (sysUsers!=null && sysUsers.size()>0){
            result = "04";
            json.put("result", result);
            return json.toString();
        }

        //至此，用户名和邮箱地址都可以注册，无重复
        SysUser sysUser = new SysUser();
        int row = sysUserService.addSysUser(sysUser);

        if (row==1) {
            result = "00";
        }

        json.put("result", result);
        return json.toString();
    }

    @ResponseBody
    @RequestMapping("/login")
    public String login(@RequestParam(value = "KEYDATA") String keyData, @RequestParam(value = "tm") String loginDate){
        JSONObject json = new JSONObject();

        String result = "success";
        String[] split = keyData.split(",");
        String username = split[0];
        String password = split[1];
        String code = split[2];

        result = sysUserService.login(username,password);

        json.put("result", result);
        return json.toString();
    }

}
