package com.businese.staff.controller;

import com.alibaba.fastjson.JSONObject;
import com.businese.model.SysUser;
import com.businese.staff.service.StaffService;
import com.businese.user.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/**
 * 员工管理
 * create by Administrator on 2018/10/8
 */
@Controller
@RequestMapping("erp/staff")
public class StaffController {

    @Autowired
    private StaffService staffService;

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

    /**
     * 查询员工列表
     * @param userName  为""或NULL时查询所有
     * @param page  第几页 默认0
     * @param rows  一页几行 默认5
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getStaffs",method = RequestMethod.POST)
    public ResponseEntity getStaffs(@RequestParam(value = "userName") String userName,
                                   @RequestParam(value = "page") Integer page,
                                   @RequestParam(value = "limit") Integer rows) throws Exception{

        List<SysUser> list = staffService.getStaffs(userName,page,rows);
        Integer count = staffService.getStaffsCount(userName);

        JSONObject result = new JSONObject();
        result.put("data",list);
        result.put("count",count);
        result.put("code",0);
        result.put("msg","");

        return new ResponseEntity(result, HttpStatus.OK);
    }

}
