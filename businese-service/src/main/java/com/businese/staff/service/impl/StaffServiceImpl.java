package com.businese.staff.service.impl;

import com.businese.dao.SysStaffMapper;
import com.businese.model.SysStaff;
import com.businese.model.SysStaffExample;
import com.businese.model.SysUser;
import com.businese.staff.service.StaffService;
import com.businese.system.service.SysUserService;
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

}
