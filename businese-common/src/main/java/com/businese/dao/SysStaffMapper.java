package com.businese.dao;

import com.businese.model.SysStaff;
import com.businese.model.SysStaffExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface SysStaffMapper {
    int countByExample(SysStaffExample example);

    int deleteByExample(SysStaffExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(SysStaff record);

    int insertSelective(SysStaff record);

    List<SysStaff> selectByExample(SysStaffExample example);

    SysStaff selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") SysStaff record, @Param("example") SysStaffExample example);

    int updateByExample(@Param("record") SysStaff record, @Param("example") SysStaffExample example);

    int updateByPrimaryKeySelective(SysStaff record);

    int updateByPrimaryKey(SysStaff record);
}