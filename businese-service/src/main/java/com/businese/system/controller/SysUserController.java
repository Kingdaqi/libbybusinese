package com.businese.system.controller;

/**
 * create by Administrator on 2018/10/24
 */

import com.alibaba.fastjson.JSONObject;
import com.businese.model.SysUser;
import com.businese.system.service.RoleUserService;
import com.businese.system.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * 用户管理
 */
@Controller
@RequestMapping("erp/system/sysUser")
public class SysUserController {

    @Autowired
    private SysUserService sysUserService;
    @Autowired
    private RoleUserService roleUserService;

    /**
     * 查询用户列表
     * @param userName  为""或NULL时查询所有
     * @param page  第几页 默认1
     * @param rows  一页几行 默认10
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getUsers",method = RequestMethod.POST)
    public ResponseEntity getUsers(@RequestParam(value = "searchParam") String userName,
                                    @RequestParam(value = "page") Integer page,
                                    @RequestParam(value = "limit") Integer rows) throws Exception{

        List<SysUser> list = sysUserService.getUsers(userName,page,rows);
        Integer count = sysUserService.getUsersCount(userName);

        JSONObject result = new JSONObject();
        result.put("data",list);
        result.put("count",count);
        result.put("code",0);
        result.put("msg","1");

        return new ResponseEntity(result, HttpStatus.OK);
    }

    /**
     * 根据id查询用户
     * @param userId
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getUserById",method = RequestMethod.POST)
    public ResponseEntity getUserById(@RequestParam(value = "userId") Integer userId) throws Exception{

        SysUser sysUser = sysUserService.getUserById(userId);

        JSONObject result = new JSONObject();
        result.put("data",sysUser);

        return new ResponseEntity(result, HttpStatus.OK);
    }

    /**
     * 新增用户
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/add",method = RequestMethod.POST)
    public ResponseEntity add(HttpServletRequest request,@RequestBody SysUser sysUser){
        JSONObject result = new JSONObject();
        String createBy = request.getSession().getAttribute("username").toString();
        try{
            sysUser.setCreateby(createBy);
            SysUser user = sysUserService.addSysUser(sysUser);
            if (user!=null){
                roleUserService.add(user);
            }
            result.put("result","success");
        }catch (Exception e){
            result.put("result","error");
            e.printStackTrace();
        }

        return new ResponseEntity(result, HttpStatus.OK);
    }

    /**
     * 根据用户id删除用户
     * @param userId
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/delete",method = RequestMethod.POST)
    public ResponseEntity delete(@RequestParam(value = "userId") Integer userId) throws Exception{
        JSONObject result = new JSONObject();
        try{
            sysUserService.delete(userId);
            roleUserService.delete(userId);
            result.put("result","success");
        }catch (Exception e){
            e.printStackTrace();
        }

        return new ResponseEntity(result, HttpStatus.OK);
    }

    /**
     * 校验用户名是否已存在
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/checkUserName",method = RequestMethod.POST)
    public ResponseEntity checkUserName(@RequestParam(value="username") String userName){
        JSONObject result = new JSONObject();
        SysUser user = sysUserService.findUserByUserName(userName);
        if (user==null){
            result.put("result","success");
        }else{
            result.put("result","exist");
        }

        return new ResponseEntity(result, HttpStatus.OK);
    }
}
