package com.businese.finance.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 财务管理
 * create by Administrator on 2018/10/8
 */
@Controller
@RequestMapping("erp/finance")
public class FinanceController {

    /**
     * 入款记录
     * @return
     */
    @RequestMapping("/income")
    public String income(){
        return "finance/income";
    }

    /**
     * 出款记录
     * @return
     */
    @RequestMapping("/out")
    public String out(){
        return "finance/out";
    }
}
