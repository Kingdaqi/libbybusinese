package com.businese.utils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 工具类
 * create by Administrator on 2018/11/21
 */
public class Utils {


    /**
     * date格式化yyyy--MM--dd
     * @param date
     * @return
     */
    public static String dataFormat(Date date) {
        if (date!=null){
            DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
            return df.format(date);
        }
        return null;
    }

    /**
     * 生成员工工号
     * @param maxWorkIdStr
     * @return
     */
    public static String getWorkId(String maxWorkIdStr) {
        String workIdStr = "";

        int maxWorkId = Integer.parseInt(maxWorkIdStr);
        int workId = maxWorkId+1;
        int length = String.valueOf(workId).length();

        for (int i=0;i<8-length;i++){
            workIdStr += "0";
        }
        return workIdStr+String.valueOf(workId);
    }
}
