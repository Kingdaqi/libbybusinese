package com.businese.login.controller;

import com.alibaba.fastjson.JSONObject;
import com.businese.login.service.LoginService;
import com.businese.model.SysUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * create by Administrator on 2018/7/5
 * 后台管理系统--用户登录注册controller
 */
@Controller
@RequestMapping("erp/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @ResponseBody
    @RequestMapping(value="/login",produces = "application/json;charset=utf-8")
    public String login(HttpServletRequest request, @RequestParam(value = "KEYDATA") String keyData, @RequestParam(value = "tm") String loginDate){
        JSONObject json = new JSONObject();

        String result = "success";
        String[] split = keyData.split(",");
        String username = split[0];
        String password = split[1];

        SysUser sysUser = loginService.login(username, password);

        if (sysUser!=null){
            //登录成功
            request.getSession().setAttribute("userId",sysUser.getUserid());
            json.put("name", sysUser.getName());
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
