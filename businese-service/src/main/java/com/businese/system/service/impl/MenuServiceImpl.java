package com.businese.system.service.impl;

import com.businese.dao.SysMenuMapper;
import com.businese.model.SysMenu;
import com.businese.system.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * create by Administrator on 2018/10/12
 */
@Service("menuService")
public class MenuServiceImpl implements MenuService {

    @Autowired
    private SysMenuMapper sysMenuMapper;

    public List<SysMenu> getMenusByUserId(int userId) {
        List<SysMenu> list = sysMenuMapper.getMainMenusByUserId(userId);
        List<SysMenu> menus = new ArrayList<SysMenu>();
        for (SysMenu menu:list) {
            Map<String,Integer> param = new HashMap<String,Integer>();
            param.put("userId",userId);
            param.put("parentId",menu.getId());
            List<SysMenu> children = sysMenuMapper.getChildMenusByParentIdAndUserId(param);
            menu.setChildren(children);
            menus.add(menu);
        }
        return menus;
    }

}
