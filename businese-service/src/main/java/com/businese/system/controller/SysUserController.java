package com.businese.system.controller;

/**
 * create by Administrator on 2018/10/24
 */

import com.alibaba.fastjson.JSONObject;
import com.businese.model.SysUser;
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

    /**
     * 查询用户列表
     * @param userName  为""或NULL时查询所有
     * @param page  第几页 默认1
     * @param rows  一页几行 默认10
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getUsers",method = RequestMethod.POST)
    public ResponseEntity getUsers(@RequestParam(value = "userName") String userName,
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
     * 新增用户
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/add",method = RequestMethod.POST)
    public ResponseEntity add(@RequestBody JSONObject sysUserJson) throws Exception{
        SysUser sysUser = jsonToModel(sysUserJson);

        JSONObject result = new JSONObject();
        try{
            sysUserService.addSysUser(sysUser);
            result.put("result","success");
        }catch (Exception e){
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
    public ResponseEntity delete(@RequestParam(value = "userid") Integer userId) throws Exception{
        JSONObject result = new JSONObject();
        try{
            sysUserService.delete(userId);
            result.put("result","success");
        }catch (Exception e){
            e.printStackTrace();
        }

        return new ResponseEntity(result, HttpStatus.OK);
    }

    private SysUser jsonToModel(JSONObject sysUserJson) {
        SysUser sysUser = new SysUser();

        if(sysUserJson.get("userid")!=null){
            sysUser.setUserid(sysUserJson.getInteger("userid"));
        }

        sysUser.setUsername(sysUserJson.get("username")==null?null:sysUserJson.getString("username"));
        sysUser.setName(sysUserJson.get("name")==null?null:sysUserJson.getString("name"));
        sysUser.setPassword(sysUserJson.get("password")==null?null:sysUserJson.getString("password"));
        sysUser.setRoleName(sysUserJson.get("roleName")==null?null:sysUserJson.getString("roleName"));

        return sysUser;
    }

}
