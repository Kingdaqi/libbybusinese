package com.businese.user.service;

import com.businese.model.SysMenu;

import java.util.List;

/**
 * create by Administrator on 2018/10/12
 */
public interface MenuService {

    /**
     * 根据userId获取左侧菜单
     * @param userId
     * @return
     */
    List<SysMenu> getMenusByUserId(int userId);
}
