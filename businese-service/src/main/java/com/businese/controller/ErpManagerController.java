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
     * 后台页面框架
     * @return
     */
    @RequestMapping("/fmain")
    public String fmain(){ return "fmain"; }

    /**
     * 首页
     * @return
     */
    @RequestMapping("/erpIndex")
    public String erpIndex(){ return "index"; }

    /**
     * 库房管理-库房分配
     * @return
     */
    @RequestMapping("/ck-kffp")
    public String ckkffp(){ return "ck-kffp"; }

    /**
     * 库房管理-入库单
     * @return
     */
    @RequestMapping("/ck-rkd")
    public String ckrkd(){
        return "ck-rkd";
    }

    /**
     * 库房管理-出库单
     * @return
     */
    @RequestMapping("/ck-ckd")
    public String ckckd(){
        return "ck-ckd";
    }

    /**
     * 库房管理-仓库管理
     * @return
     */
    @RequestMapping("/ck-ckgl")
    public String ckckgl(){
        return "ck-ckgl";
    }

    /**
     * 商品库存
     * @return
     */
    @RequestMapping("/sp-spkc")
    public String spspkc(){
        return "sp-spkc";
    }

    /**
     * 商品成本
     * @return
     */
    @RequestMapping("/sp-spcb")
    public String spspcb(){
        return "sp-spcb";
    }

    /**
     * 商品属性管理
     * @return
     */
    @RequestMapping("/sp-spsxgl")
    public String spspsxgl(){
        return "sp-spsxgl";
    }

    /**
     * 订单管理
     * @return
     */
    @RequestMapping("/dd-ddgl")
    public String ddddgl(){ return "dd-ddgl"; }

    /**
     * 财务管理
     * @return
     */
    @RequestMapping("/cw-cwgl")
    public String cwcwgl(){ return "cj-ckd"; }

    /**
     * 客户基本信息
     * @return
     */
    @RequestMapping("/kh-jbxx")
    public String khjbxx(){ return "kh-jbxx"; }

    /**
     * 客户信息管理
     * @return
     */
    @RequestMapping("/kh-xxgl")
    public String khxxgl(){ return "kh-xxgl"; }

    /**
     * 客户订单管理
     * @return
     */
    @RequestMapping("/kh-ddgl")
    public String khddgl(){ return "kh-ddgl"; }

    /**
     * 员工基本信息
     * @return
     */
    @RequestMapping("/yg-jbxx")
    public String ygjbxx(){ return "yg-jbxx"; }

    /**
     * 员工权限
     * @return
     */
    @RequestMapping("/yg-ygqx")
    public String ygygqx(){ return "yg-jsgl"; }

    /**
     * 员工开通新客户
     * @return
     */
    @RequestMapping("/yg-ktxkh")
    public String ygktxkh(){ return "yg-ktxkh"; }

    /**
     * 销售额管理
     * @return
     */
    @RequestMapping("/yg-xsegl")
    public String ygxsegl(){ return "yg-xsegl"; }

    /**
     * 员工操作日志
     * @return
     */
    @RequestMapping("/yg-czrz")
    public String ygczrz(){ return "yg-czrz"; }


}
