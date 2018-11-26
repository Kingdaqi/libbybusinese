package com.businese.system.controller;

import com.alibaba.fastjson.JSONObject;
import com.businese.model.SysDept;
import com.businese.model.SysRole;
import com.businese.model.SysStaff;
import com.businese.staff.service.StaffService;
import com.businese.system.service.DeptService;
import com.businese.system.service.RoleService;
import com.businese.system.service.SysUserService;
import com.businese.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * create by Administrator on 2018/11/23
 */
@Controller
@RequestMapping("erp/system/personalInfo")
public class PersonalInfoController {

    @Autowired
    private StaffService staffService;
    @Autowired
    private RoleService roleService;
    @Autowired
    private DeptService deptService;
    @Autowired
    private SysUserService sysUserService;

    /**
     * 查询当前登录用户信息员工
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getPersonalInfo",method = RequestMethod.GET)
    public ResponseEntity getPersonalInfo(HttpServletRequest request) {
        String staffId = request.getSession().getAttribute("staffId").toString();

        SysStaff sysStaff = staffService.getStaffById(Integer.parseInt(staffId));

        List<SysStaff> list = new ArrayList<SysStaff>();
        list.add(sysStaff);

        JSONObject result = new JSONObject();
        result.put("data",list);
//        result.put("count",count);
        result.put("code",0);
        result.put("msg","");

        return new ResponseEntity(result, HttpStatus.OK);
    }

    /**
     * 根据id查询员工
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getPersonalDetailInfo",method = RequestMethod.GET)
    public ResponseEntity getPersonalDetailInfo(HttpServletRequest request) {
        String staffId = request.getSession().getAttribute("staffId").toString();

        SysStaff sysStaff = staffService.getStaffById(Integer.parseInt(staffId));

        JSONObject result = new JSONObject();
        result.put("data",sysStaff);
        result.put("birthday",Utils.dataFormat(sysStaff.getBirthday()));
        result.put("begindate",Utils.dataFormat(sysStaff.getBegindate()));
        result.put("conversiontime",Utils.dataFormat(sysStaff.getConversiontime()));
        result.put("begincontract",Utils.dataFormat(sysStaff.getBegincontract()));
        result.put("endcontract",Utils.dataFormat(sysStaff.getEndcontract()));

        return new ResponseEntity(result, HttpStatus.OK);
    }

    /**
     * 修改员工信息
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/update",method = RequestMethod.POST)
    public ResponseEntity update(HttpServletRequest request, @RequestBody SysStaff sysStaff){
        JSONObject result = new JSONObject();
        String updateBy = request.getSession().getAttribute("name").toString();
        int count =  staffService.updateSysStaff(sysStaff,updateBy);

        if (count>0){
            result.put("result","success");
            result.put("workId",sysStaff.getWorkid());
        }else{
            result.put("result","error");
        }

        return new ResponseEntity(result, HttpStatus.OK);
    }

    /**
     * 校验员工名是否已存在
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/checkStaffName",method = RequestMethod.POST)
    public ResponseEntity checkStaffName(@RequestParam(value="name") String name){
        JSONObject result = new JSONObject();
        SysStaff sysStaff = staffService.getStaffByName(name);
        if (sysStaff==null){
            result.put("result","success");
        }else{
            result.put("result","exist");
        }

        return new ResponseEntity(result, HttpStatus.OK);
    }

    /**
     * 获取所有角色
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getRoles",method = RequestMethod.GET)
    public ResponseEntity getRoles() {
        List<SysRole> list = roleService.getRoles();

        JSONObject result = new JSONObject();
        result.put("data",list);
        if(list!=null)
            return new ResponseEntity(result, HttpStatus.OK);
        else
            return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    /**
     * 获取所有部门
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getDeptTree",method = RequestMethod.GET)
    public ResponseEntity getDeptTree() {
        List<SysDept> list = deptService.getDeptTree();

        JSONObject result = new JSONObject();
        result.put("data",list);
        if(list!=null)
            return new ResponseEntity(result, HttpStatus.OK);
        else
            return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    /**
     * 修改密码
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/modifyPassword",method = RequestMethod.POST)
    public ResponseEntity modifyPassword(HttpServletRequest request, @RequestParam(value="newpassword") String newPassword){
        JSONObject result = new JSONObject();
        String userId = request.getSession().getAttribute("userId").toString();

        try {
            sysUserService.modifyPassword(Integer.parseInt(userId),newPassword);
            result.put("result","success");
        }catch (Exception e){
            e.printStackTrace();
            result.put("result","error");
        }

        return new ResponseEntity(result, HttpStatus.OK);
    }

    /**
     * 获取旧密码
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getOldPassword",method = RequestMethod.GET)
    public ResponseEntity getOldPassword(HttpServletRequest request){
        JSONObject result = new JSONObject();
        String userId = request.getSession().getAttribute("userId").toString();

        String password = sysUserService.getPassword(Integer.parseInt(userId));

        result.put("oldpassword",password);

        return new ResponseEntity(result, HttpStatus.OK);
    }
}
