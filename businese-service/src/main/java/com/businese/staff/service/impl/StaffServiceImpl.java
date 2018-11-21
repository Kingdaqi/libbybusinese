package com.businese.staff.service.impl;

import com.businese.dao.SysDeptMapper;
import com.businese.dao.SysRoleMapper;
import com.businese.dao.SysStaffMapper;
import com.businese.model.SysDept;
import com.businese.model.SysRole;
import com.businese.model.SysStaff;
import com.businese.model.SysStaffExample;
import com.businese.staff.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        sysStaffMapper.deleteByPrimaryKey(id);
    }

    public SysStaff getStaffByName(String name) {
        sysStaffExample.clear();
        SysStaffExample.Criteria criteria = sysStaffExample.createCriteria();
        if (name!=null && !"".equals(name)){
            criteria.andNameEqualTo(name);
        }
        List<SysStaff> sysStaffs = sysStaffMapper.selectByExample(sysStaffExample);
        if (sysStaffs!=null && sysStaffs.size()>0){
            return sysStaffs.get(0);
        }

        return null;
    }

    public SysStaff addSysStaff(SysStaff sysStaff) {
        return null;
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

    public int updateSysStaff(SysStaff sysStaff) {
        return sysStaffMapper.updateByPrimaryKeySelective(sysStaff);
    }

}
