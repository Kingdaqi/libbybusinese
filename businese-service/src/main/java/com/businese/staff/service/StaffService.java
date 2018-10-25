package com.businese.staff.service;

import com.businese.model.SysStaff;
import com.businese.model.SysUser;

import java.util.List;

/**
 * create by Administrator on 2018/10/8
 */
public interface StaffService {
    /**
     * 查询员工列表
     * @param name
     * @param page
     * @param rows
     * @return
     */
    List<SysStaff> getStaffs(String name, Integer page, Integer rows);

    /**
     * 查询符合条件的员工总数量
     * @param name
     * @return
     */
    Integer getStaffsCount(String name);

    /**
     *
     * @param id
     */
    void delete(Integer id);
}
