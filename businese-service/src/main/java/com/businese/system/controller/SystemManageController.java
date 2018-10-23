package com.businese.system.controller;

import com.alibaba.fastjson.JSONObject;
import com.businese.model.SysRole;
import com.businese.model.SysUser;
import com.businese.user.service.RoleService;
import com.businese.user.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
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
public class SystemManageController {

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
     * 查询用户列表
     *
     * @param userName 为""或NULL时查询所有
     * @param page     第几页 默认1
     * @param rows     一页几行 默认10
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getUsers", method = RequestMethod.POST)
    public ResponseEntity getUsers(@RequestParam(value = "userName") String userName,
                                   @RequestParam(value = "page") Integer page,
                                   @RequestParam(value = "limit") Integer rows) throws Exception {

        List<SysUser> list = sysUserService.getUsers(userName, page, rows);
        Integer count = sysUserService.getUsersCount(userName);

        JSONObject result = new JSONObject();
        result.put("data", list);
        result.put("count", count);
        result.put("code", 0);
        result.put("msg", "");

        return new ResponseEntity(result, HttpStatus.OK);
    }


    /**
     * 删除用户信息
     * @param userId
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity delete(@RequestParam(value = "userId") Integer userId) throws Exception {
        JSONObject result = new JSONObject();
        try {
            sysUserService.delete(userId);
            result.put("result", "success");
            return new ResponseEntity(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            result.put("result", "failure");
            return new ResponseEntity(result, HttpStatus.OK);
        }
    }

    /**
     * 获取角色列表
     * @param userId
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getRoles", method = RequestMethod.GET)
    public ResponseEntity getRoles(HttpServletRequest request) throws Exception {
        List<SysRole> list = roleService.getRoles();

        JSONObject result = new JSONObject();
        result.put("data",list);
        if(list!=null)
            return new ResponseEntity(result, HttpStatus.OK);
        else
            return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
