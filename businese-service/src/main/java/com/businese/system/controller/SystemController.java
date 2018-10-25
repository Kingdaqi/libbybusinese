package com.businese.system.controller;

import com.alibaba.fastjson.JSONObject;
import com.businese.model.SysRole;
import com.businese.model.SysUser;
import com.businese.system.service.RoleService;
import com.businese.system.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * create by Administrator on 2018/10/16
 */
@Controller
@RequestMapping("/erp/system")
public class SystemController {

    @Autowired
    private RoleService roleService;
    @Autowired
    private SysUserService sysUserService;

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
     * 用户管理
     * @return
     */
    @RequestMapping("/user")
    public String user(){
        return "system/user";
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

    /**
     * 新增用户窗口
     * @return
     */
    @RequestMapping("/addUserWindow")
    public String addUserWindow(){
        return "system/addUserWindow";
    }

    /**
     * 编辑用户窗口
     * @return
     */
    @RequestMapping("/editUserWindow")
    public String editUserWindow(){
        return "system/editUserWindow";
    }

}
