package com.businese.dao;

import com.businese.model.SysRoleMenuExample;
import com.businese.model.SysRoleMenu;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface SysRoleMenuMapper {
    int countByExample(SysRoleMenuExample example);

    int deleteByExample(SysRoleMenuExample example);

    int deleteByPrimaryKey(SysRoleMenu key);

    int insert(SysRoleMenu record);

    int insertSelective(SysRoleMenu record);

    List<SysRoleMenu> selectByExample(SysRoleMenuExample example);

    int updateByExampleSelective(@Param("record") SysRoleMenu record, @Param("example") SysRoleMenuExample example);

    int updateByExample(@Param("record") SysRoleMenu record, @Param("example") SysRoleMenuExample example);
}