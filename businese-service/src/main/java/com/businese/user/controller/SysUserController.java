package com.businese.user.controller;

import com.alibaba.fastjson.JSONObject;
import com.businese.model.SysUser;
import com.businese.user.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

/**
 * create by Administrator on 2018/7/5
 * 后台管理系统--用户登录注册controller
 */
@Controller
@RequestMapping("erp/sysUser")
public class SysUserController {

    @Autowired
    private SysUserService sysUserService;

    @ResponseBody
    @RequestMapping("/addSysUser")
    public String addSysUser(@RequestParam(value = "USERNAME") String username,@RequestParam(value = "PASSWORD") String password,
                                  @RequestParam(value = "NAME") String name){

        JSONObject json = new JSONObject();
        String result = "01";

        SysUser user = sysUserService.findUserByUserName(username);
        if (user!=null){
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
    public String login(HttpServletRequest request, @RequestParam(value = "KEYDATA") String keyData, @RequestParam(value = "tm") String loginDate){
        JSONObject json = new JSONObject();

        String result = "success";
        String[] split = keyData.split(",");
        String username = split[0];
        String password = split[1];

        SysUser sysUser = sysUserService.login(username, password);

        if (sysUser!=null){
            //登录成功
            request.getSession().setAttribute("userId",sysUser.getUserid());
        }else{
            //登录失败
            result = "usererror";
        }

        json.put("result", result);
        return json.toString();
    }

    @ResponseBody
    @RequestMapping("/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) throws IOException {
        //清空session
        HttpSession session = request.getSession();
        session.invalidate();//销毁session

        response.sendRedirect(request.getContextPath()+"/index.jsp");
    }

}
