package com.businese.customer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 客户管理
 * create by Administrator on 2018/10/8
 */
@Controller
@RequestMapping("erp/customer")
public class CustomerController {

    /**
     * 客户基本信息
     * @return
     */
    @RequestMapping("/baseInfo")
    public String baseInfo(){
        return "customer/baseInfo";
    }

    /**
     * 客户订单管理
     * @return
     */
    @RequestMapping("/orderRel")
    public String orderRel(){
        return "customer/orderRel";
    }
}
