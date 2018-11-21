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
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        return df.format(date);
    }
}
