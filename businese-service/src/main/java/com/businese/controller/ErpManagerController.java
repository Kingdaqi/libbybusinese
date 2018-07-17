package com.businese.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * create by Administrator on 2018/7/17
 * 后台管理系统--erp系统controller
 */
@Controller
@RequestMapping("/erp")
public class ErpManagerController {


    @RequestMapping("/erpIndex")
    public String erpIndex(){
        return "index";
    }

}
