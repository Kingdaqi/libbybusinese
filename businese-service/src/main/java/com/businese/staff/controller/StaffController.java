package com.businese.staff.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 员工管理
 * create by Administrator on 2018/10/8
 */
@Controller
@RequestMapping("erp/staff")
public class StaffController {

    /**
     * 员工基本信息
     * @return
     */
    @RequestMapping("/baseInfo")
    public String baseInfo(){
        return "staff/baseInfo";
    }

    /**
     * 销售额管理
     * @return
     */
    @RequestMapping("/sales")
    public String sales(){
        return "staff/sales";
    }
}
