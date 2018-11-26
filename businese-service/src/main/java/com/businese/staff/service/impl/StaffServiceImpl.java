package com.businese.staff.service.impl;

import com.businese.dao.SysDeptMapper;
import com.businese.dao.SysRoleMapper;
import com.businese.dao.SysStaffMapper;
import com.businese.model.*;
import com.businese.staff.service.StaffService;
import com.businese.system.service.RoleUserService;
import com.businese.system.service.SysUserService;
import com.businese.utils.PinYinUtil;
import com.businese.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * create by Administrator on 2018/10/8
 */
@Service("staffService")
public class StaffServiceImpl implements StaffService {

    @Autowired
    private SysStaffMapper sysStaffMapper;
    @Autowired
    private SysStaffExample sysStaffExample;
    @Autowired
    private SysDeptMapper sysDeptMapper;
    @Autowired
    private SysRoleMapper sysRoleMapper;
    @Autowired
    private SysUserService sysUserService;
    @Autowired
    private RoleUserService roleUserService;

    public List<SysStaff> getStaffs(String name, Integer page, Integer rows) {
        sysStaffExample.clear();
        SysStaffExample.Criteria criteria = sysStaffExample.createCriteria();
        if (name!=null && !"".equals(name)){
            criteria.andNameEqualTo(name);
        }

        sysStaffExample.setStart((page-1)*rows);
        sysStaffExample.setLimit(rows);

        return sysStaffMapper.selectByExample(sysStaffExample);
    }

    public Integer getStaffsCount(String name) {
        sysStaffExample.clear();
        SysStaffExample.Criteria criteria = sysStaffExample.createCriteria();
        if (name!=null && !"".equals(name)){
            criteria.andNameEqualTo(name);
        }
        int count = sysStaffMapper.countByExample(sysStaffExample);

        return count;
    }

    public void delete(Integer id) {
        SysStaff sysStaff = sysStaffMapper.selectByPrimaryKey(id);
        sysStaffMapper.deleteByPrimaryKey(id);
        //删除员工信息后，需要删除对应的登陆用户，以及用户与关系
        SysUser user = sysUserService.findUserByName(sysStaff.getName());
        sysUserService.delete(user.getUserid());
        roleUserService.delete(user.getUserid());
    }

    public SysStaff getStaffByName(String name) {
        List<SysStaff> sysStaffs = sysStaffMapper.getStaffByName(name);

        if (sysStaffs!=null && sysStaffs.size()>0){
            SysStaff sysStaff = sysStaffs.get(0);
            SysDept sysDept = sysDeptMapper.selectByPrimaryKey(sysStaff.getDepartmentid());
            if (sysDept!=null){
                sysStaff.setDeptName(sysDept.getName());
            }

            SysRole sysRole = sysRoleMapper.selectByPrimaryKey(sysStaff.getPosid());
            if(sysRole!=null){
                sysStaff.setPositionName(sysRole.getName());
            }
            return sysStaff;
        }

        return null;
    }

    public SysStaff addSysStaff(SysStaff sysStaff) {
        String maxWorkId = sysStaffMapper.selectMaxWorkId();
        String workId = Utils.getWorkId(maxWorkId);
        sysStaff.setWorkid(workId);
        sysStaffMapper.insert(sysStaff);
        return sysStaff;
    }

    public SysStaff getStaffById(Integer id) {
        SysStaff sysStaff = sysStaffMapper.selectByPrimaryKey(id);
        SysDept sysDept = sysDeptMapper.selectByPrimaryKey(sysStaff.getDepartmentid());
        if (sysDept!=null){
            sysStaff.setDeptName(sysDept.getName());
        }

        SysRole sysRole = sysRoleMapper.selectByPrimaryKey(sysStaff.getPosid());
        if(sysRole!=null){
            sysStaff.setPositionName(sysRole.getName());
        }

        return sysStaff;
    }

    public int updateSysStaff(SysStaff sysStaff, String updateBy) {
        SysStaff staff = sysStaffMapper.selectByPrimaryKey(sysStaff.getId());
        int i = sysStaffMapper.updateByPrimaryKeySelective(sysStaff);


        SysUser user = sysUserService.findUserByName(staff.getName());
        //修改了职位（角色），需要更新用户与角色关系
        if(staff.getPosid()!=sysStaff.getPosid()){
            roleUserService.update(user.getUserid(),sysStaff.getPosid());
        }
        //修改了员工姓名，需要更新用户表name字段
        if(!staff.getName().equals(sysStaff.getName())){
            user.setName(sysStaff.getName());
            user.setUpdateby(updateBy);
            user.setUpdatetime(new Date());

            sysUserService.update(user);
        }

        return i;
    }

    public void initSysUser(SysStaff staff, SysUser sysUser) {
        sysUser.setDeptid(staff.getDepartmentid());//部门id
        sysUser.setUsername(PinYinUtil.getPinYin(staff.getName()).replace(" ",""));//登陆用户名
        sysUser.setPassword("111111");//密码
        sysUser.setName(staff.getName());//对应员工名
        sysUser.setStaffid(staff.getId());//对应员工id

        //根据员工信息新增用户
        SysUser user = sysUserService.addSysUser(sysUser);
        //用户新增成功后建立用户与角色关系
        roleUserService.add(user.getUserid(),staff.getPosid());
    }

}
