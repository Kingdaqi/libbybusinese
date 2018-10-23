package com.businese.user.controller;

import com.alibaba.fastjson.JSONObject;
import com.businese.model.SysRole;
import com.businese.user.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * 角色管理
 */
@Controller
@RequestMapping("erp/role")
public class RoleController {

    @Autowired
    private RoleService roleService;

    /**
     * 新增角色
     * @param menuJson
     * @return
     * @throws Exception
     */
    @RequestMapping(value="save",method = RequestMethod.POST)
    public ResponseEntity save(@RequestBody JSONObject menuJson) throws Exception{
        JSONObject result = new JSONObject();

        return new ResponseEntity(result,HttpStatus.OK);
    }

    /**
     * 更新角色
     * @param menuJson
     * @return
     * @throws Exception
     */
    @RequestMapping(value="update",method = RequestMethod.POST)
    public ResponseEntity update(@RequestBody JSONObject menuJson) throws Exception{
        JSONObject result = new JSONObject();
        return new ResponseEntity(result,HttpStatus.OK);
    }


    /**
     * 删除角色
     * @param idsJson
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/delete",method = RequestMethod.POST)
    public ResponseEntity delete(@RequestBody JSONObject idsJson) throws Exception{
        JSONObject result = new JSONObject();
        try {
        }catch (Exception e){
        }finally {
            return new ResponseEntity(result,HttpStatus.OK);
        }
    }

    /**
     * 获取所有角色
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getRoles",method = RequestMethod.GET)
    public ResponseEntity getRoles() throws Exception{
        List<SysRole> list = roleService.getRoles();

        JSONObject result = new JSONObject();
        result.put("data",list);
        if(list!=null)
            return new ResponseEntity(list, HttpStatus.OK);
        else
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
