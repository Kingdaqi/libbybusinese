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

    /**
     * 首页
     * @return
     */
    @RequestMapping("/erpIndex")
    public String erpIndex(){ return "index"; }

    /**
     * 库存管理
     * @return
     */
    @RequestMapping("/ck-kffp")
    public String ckkffp(){
        return "ck-kffp";
    }

    /**
     * 产品管理
     * @return
     */
    @RequestMapping("/cpgl")
    public String cpgl(){
        return "cpgl";
    }

    /**
     * 订单管理
     * @return
     */
    @RequestMapping("/dd-ddgl")
    public String ddgl(){ return "dd-ddgl"; }

    /**
     * 财务管理
     * @return
     */
    @RequestMapping("/cj-ckd")
    public String cwgl(){ return "cj-ckd"; }

    /**
     * 客户管理
     * @return
     */
    @RequestMapping("/kh-khgl")
    public String kugl(){ return "kh-khgl"; }

    /**
     * 员工管理
     * @return
     */
    @RequestMapping("/yg-jbxx")
    public String yggl(){ return "yg-jbxx"; }

    /**
     * 首页
     * @return
     */
    @RequestMapping("/erpIndexJsp")
    public String erpIndexJsp(){ return "erpIndex"; }
}
