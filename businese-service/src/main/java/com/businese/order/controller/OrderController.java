package com.businese.order.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 订单管理
 * create by Administrator on 2018/10/8
 */
@Controller
@RequestMapping("erp/order")
public class OrderController {

    /**
     * 订单列表
     * @return
     */
    @RequestMapping("/orderList")
    public String orderList(){
        return "order/orderList";
    }

    /**
     * 合同管理
     * @return
     */
    @RequestMapping("/contract")
    public String contract(){
        return "order/contract";
    }

    /**
     * 报运管理
     * @return
     */
    @RequestMapping("/transfer")
    public String transfer(){
        return "order/transfer";
    }

    /**
     * 装箱管理
     * @return
     */
    @RequestMapping("/pack")
    public String pack(){
        return "order/pack";
    }
}
