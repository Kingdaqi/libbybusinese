package com.businese.product.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 商品管理
 * create by Administrator on 2018/10/8
 */
@Controller
@RequestMapping("erp/product")
public class ProductController {

    /**
     * 商品列表
     * @return
     */
    @RequestMapping("/productList")
    public String productList(){
        return "product/productList";
    }
}
