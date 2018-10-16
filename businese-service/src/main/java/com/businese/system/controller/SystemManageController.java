package com.businese.system.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * create by Administrator on 2018/10/16
 */
@Controller
@RequestMapping("/erp/system")
public class SystemManageController {

    /**
     * 个人信息
     * @return
     */
    @RequestMapping("/personalInfo")
    public String personalInfo(){
        return "system/personalInfo";
    }

    /**
     * 部门管理
     * @return
     */
    @RequestMapping("/dept")
    public String dept(){
        return "system/dept";
    }

    /**
     * 菜单管理
     * @return
     */
    @RequestMapping("/menu")
    public String menu(){
        return "system/menu";
    }

    /**
     * 权限管理
     * @return
     */
    @RequestMapping("/authority")
    public String authority(){
        return "system/authority";
    }

    /**
     * 角色管理
     * @return
     */
    @RequestMapping("/role")
    public String role(){
        return "system/role";
    }

    /**
     * 员工操作日志
     * @return
     */
    @RequestMapping("/actionLog")
    public String actionLog(){
        return "system/actionLog";
    }
}
