package com.businese.staff.controller;

import com.alibaba.fastjson.JSONObject;
import com.businese.model.SysDept;
import com.businese.model.SysRole;
import com.businese.model.SysStaff;
import com.businese.staff.service.StaffService;
import com.businese.system.service.DeptService;
import com.businese.system.service.RoleService;
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
    @Autowired
    private RoleService roleService;
    @Autowired
    private DeptService deptService;

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
     * 跳转新增员工页面
     * @return
     */
    @RequestMapping("/addStaffWindow")
    public String addStaffWindow(){
        return "staff/addStaffWindow";
    }

    /**
     * 跳转编辑员工页面
     * @return
     */
    @RequestMapping("/editStaffWindow")
    public String editStaffWindow(){
        return "staff/editStaffWindow";
    }

    /**
     * 查询员工列表
     * @param name  为""或NULL时查询所有
     * @param page  第几页 默认1
     * @param rows  一页几行 默认10
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getStaffs",method = RequestMethod.POST)
    public ResponseEntity getStaffs(@RequestParam(value = "searchParam") String name,
                                   @RequestParam(value = "page") Integer page,
                                   @RequestParam(value = "limit") Integer rows) {

        List<SysStaff> list = staffService.getStaffs(name,page,rows);
        Integer count = staffService.getStaffsCount(name);

        JSONObject result = new JSONObject();
        result.put("data",list);
        result.put("count",count);
        result.put("code",0);
        result.put("msg","");

        return new ResponseEntity(result, HttpStatus.OK);
    }

    /**
     * 根据id查询员工
     * @param id
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getStaffById",method = RequestMethod.POST)
    public ResponseEntity getStaffById(@RequestParam(value = "id") Integer id) {

        SysStaff sysStaff = staffService.getStaffById(id);

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
     * 新增员工
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public ResponseEntity save(HttpServletRequest request, @RequestBody SysStaff sysStaff){
        JSONObject result = new JSONObject();
//        String createBy = request.getSession().getAttribute("username").toString();
        try{
//            sysUser.setCreateby(createBy);
            SysStaff staff = staffService.addSysStaff(sysStaff);
//            if (staff!=null){
//                roleUserService.add(user);
//            }
            result.put("result","success");
        }catch (Exception e){
            result.put("result","error");
            e.printStackTrace();
        }

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
//      String createBy = request.getSession().getAttribute("username").toString();
//      sysUser.setCreateby(createBy);
        int count =  staffService.updateSysStaff(sysStaff);
        if (count>0){
            result.put("result","success");
        }else{
            result.put("result","error");
        }

        return new ResponseEntity(result, HttpStatus.OK);
    }

    /**
     * 根据员工id删除员工
     * @param id
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/delete",method = RequestMethod.POST)
    public ResponseEntity delete(@RequestParam(value = "id") Integer id) {
        JSONObject result = new JSONObject();
        try{
            staffService.delete(id);
//            roleUserService.delete(userId);
            result.put("result","success");
        }catch (Exception e){
            e.printStackTrace();
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

}
