package com.businese.system.service.impl;

import com.businese.dao.SysDeptMapper;
import com.businese.model.SysDept;
import com.businese.system.service.DeptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * create by Administrator on 2018/10/29
 */
@Service("deptService")
public class DeptServiceImpl implements DeptService {

    @Autowired
    private SysDeptMapper sysDeptMapper;

    public List<SysDept> getDeptTree() {
        List<SysDept> depts = sysDeptMapper.getDeptTree();
        List<SysDept> deptTree = new ArrayList<SysDept>();
        for (SysDept sysDept: depts) {
            if (sysDept.getId()==0){
                //去除重复部分部门
                deptTree.add(sysDept);
            }
        }

        return deptTree;
    }
}
