package com.businese.system.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * 菜单管理
 */
@Controller
@RequestMapping("/module")
public class ModuleController {

    /**
     * 新增菜单
     * @param menuJson
     * @return
     * @throws Exception
     */
    @RequestMapping(value="save",method = RequestMethod.POST)
    public ResponseEntity save(@RequestBody JSONObject menuJson) throws Exception{
        JSONObject result = new JSONObject();

        return new ResponseEntity(result,HttpStatus.OK);
    }

    /**
     * 更新菜单
     * @param menuJson
     * @return
     * @throws Exception
     */
    @RequestMapping(value="update",method = RequestMethod.POST)
    public ResponseEntity update(@RequestBody JSONObject menuJson) throws Exception{
        JSONObject result = new JSONObject();
        return new ResponseEntity(result,HttpStatus.OK);
    }


    /**
     * 删除菜单
     * @param idsJson
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/delete",method = RequestMethod.POST)
    public ResponseEntity delete(@RequestBody JSONObject idsJson) throws Exception{
        JSONObject result = new JSONObject();
        try {
        }catch (Exception e){
        }finally {
            return new ResponseEntity(result,HttpStatus.OK);
        }
    }

    /**
     * 获取所有菜单
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getAllMenus",method = RequestMethod.GET)
    public ResponseEntity getAllMenus() throws Exception{
//        List<MenuModel> list = menuService.getAllMenu();
//
//        if(list!=null)
//            return new ResponseEntity(list, HttpStatus.OK);
//        else
            return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    /**
     *  权限管理，查回角色与菜单的对应关系
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getMenuTree",method = RequestMethod.GET)
    public ResponseEntity getMenuTree() throws Exception{
//        List<MenuModel> list = menuService.menuTree();
//
//        if(list!=null)
//            return new ResponseEntity(list, HttpStatus.OK);
//        else
            return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    /**
     *
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/sysMenu",method = RequestMethod.GET)
    public ResponseEntity sysMenu(HttpServletRequest request) throws Exception{
        //UserModel user = this.getUser();
        //Integer userId = user.getId();
        //根据当前登录用户id，查出该用户可操作的系统菜单集合
//        List<MenuModel> list = menuService.getMenusByUserId(1);
//        JSONObject result = new JSONObject();
//        result.accumulate("data",list);
//        if(list!=null)
//            return new ResponseEntity(result, HttpStatus.OK);
//        else
            return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    /**
     * 菜单排序
     * @param sortJson
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/sort",method = RequestMethod.POST)
    public ResponseEntity sort(@RequestBody JSONObject sortJson) throws Exception{
//        int id = sortJson.getInt("id");
//        String[] sortIds = sortJson.getString("sortIds").split(",");
        JSONObject result = new JSONObject();
        try {
//            menuService.updateSort(id,sortIds);
//            List<MenuModel> list = menuService.getMenusByUserId(1);
//            result.accumulate("data",list);
//            result.accumulate("status","0");
//            result.accumulate("message","调整菜单排序成功");
        }catch (Exception e){
//            result.accumulate("message","调整菜单排序失败");
//            result.accumulate("status","1");
        }finally {
            return new ResponseEntity(result,HttpStatus.OK);
        }
    }



}
