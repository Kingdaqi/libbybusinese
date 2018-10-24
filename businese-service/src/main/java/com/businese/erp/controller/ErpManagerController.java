package com.businese.erp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * create by Administrator on 2018/7/17
 * 后台管理系统--erp系统controller
 */
@Controller
@RequestMapping("/erp")
public class ErpManagerController {

    /**
     * 后台页面框架
     * @return
     */
    @RequestMapping("/fmain")
    public String fmain(){ return "index"; }


    /**
     * 首页
     * @return
     */
    @RequestMapping("/home")
    public String home(){ return "home"; }


}
