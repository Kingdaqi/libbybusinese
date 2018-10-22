package com.businese.staff.service;

import com.businese.model.SysUser;

import java.util.List;

/**
 * create by Administrator on 2018/10/8
 */
public interface StaffService {
    /**
     * 查询员工列表
     * @param userName
     * @param page
     * @param rows
     * @return
     */
    List<SysUser> getStaffs(String userName, Integer page, Integer rows);

    /**
     * 查询符合条件的员工总数量
     * @param userName
     * @return
     */
    Integer getStaffsCount(String userName);

    /**
     *
     * @param userId
     */
    void delete(Integer userId);
}
