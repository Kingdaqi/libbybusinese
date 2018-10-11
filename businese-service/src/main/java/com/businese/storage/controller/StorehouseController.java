package com.businese.storage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 仓库管理
 * create by Administrator on 2018/10/8
 */
@Controller
@RequestMapping("erp/storehouse")
public class StorehouseController {

    /**
     * 采购单
     * @return
     */
    @RequestMapping("/purchaseOrder")
    public String purchaseOrder(){
        return "storehouse/purchaseOrder";
    }

    /**
     * 入库单
     * @return
     */
    @RequestMapping("/warehouseReceipt")
    public String warehouseReceipt(){
        return "storehouse/warehouseReceipt";
    }

    /**
     * 出库单
     * @return
     */
    @RequestMapping("/outboundReceipt")
    public String outboundReceipt(){
        return "storehouse/outboundReceipt";
    }

    /**
     * 库房分配
     * @return
     */
    @RequestMapping("/distribution")
    public String distribution(){
        return "storehouse/distribution";
    }

    /**
     * 仓库管理
     * @return
     */
    @RequestMapping("/manager")
    public String manager(){
        return "storehouse/manager";
    }

}
