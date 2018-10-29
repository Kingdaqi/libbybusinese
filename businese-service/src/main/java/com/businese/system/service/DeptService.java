package com.businese.system.service;

import com.businese.model.SysDept;

import java.util.List;

/**
 * create by Administrator on 2018/10/29
 */
public interface DeptService {
    /**
     * 查询部门树
     * @return
     */
    List<SysDept> getDeptTree();
}
