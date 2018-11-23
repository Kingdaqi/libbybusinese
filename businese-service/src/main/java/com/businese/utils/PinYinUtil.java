package com.businese.utils;

import net.sourceforge.pinyin4j.PinyinHelper;
import net.sourceforge.pinyin4j.format.HanyuPinyinCaseType;
import net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat;
import net.sourceforge.pinyin4j.format.HanyuPinyinToneType;
import net.sourceforge.pinyin4j.format.HanyuPinyinVCharType;
import net.sourceforge.pinyin4j.format.exception.BadHanyuPinyinOutputFormatCombination;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class PinYinUtil {

    private static final Log log = LogFactory.getLog(PinYinUtil.class);
    private static final int C_LENGTH = 255;

    /**
     * 将汉字转换为全拼
     *
     * @param inputString
     * @return String
     */
    public static String getPinYin(String inputString) {
        HanyuPinyinOutputFormat format = new HanyuPinyinOutputFormat();
        format.setCaseType(HanyuPinyinCaseType.LOWERCASE);
        format.setToneType(HanyuPinyinToneType.WITHOUT_TONE);
        format.setVCharType(HanyuPinyinVCharType.WITH_U_UNICODE);
        char[] input = inputString.trim().toCharArray();
        StringBuffer output = new StringBuffer("");

        try {
            for (int i = 0; i < input.length; i++) {
                if (Character.toString(input[i]).matches("[\\u4E00-\\u9FA5]+")) {
                    String[] temp = PinyinHelper.toHanyuPinyinStringArray(input[i], format);
                    output.append(temp[0]);
                    output.append(" ");
                } else {
                    output.append(Character.toString(input[i]));
                }
            }
        } catch (BadHanyuPinyinOutputFormatCombination e) {
            log.error("BadHanyuPinyinOutputFormatCombination", e);
        }
        return output.toString();
    }

    public static String toPinyin(String input) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (c <= C_LENGTH) {
                sb.append(c);
            } else {
                String pinyin = null;
                try {

                    HanyuPinyinOutputFormat format = new HanyuPinyinOutputFormat();
                    format.setCaseType(HanyuPinyinCaseType.LOWERCASE);
                    format.setToneType(HanyuPinyinToneType.WITH_TONE_MARK);
                    format.setVCharType(HanyuPinyinVCharType.WITH_U_UNICODE);

                    String[] pinyinArray = PinyinHelper.toHanyuPinyinStringArray(c, format);
                    pinyin = pinyinArray[0];
                } catch (BadHanyuPinyinOutputFormatCombination e) {
                    log.error("BadHanyuPinyinOutputFormatCombination", e);
                }
                if (pinyin != null) {
                    sb.append(pinyin);
                }
            }
        }
        return sb.toString();
    }

    /**
     * 提取每个汉字的首字母
     *
     * @param str
     * @return String
     */
    public static String getPinYinHeadChar(String str) {
        StringBuilder result = new StringBuilder();
        for (int j = 0; j < str.length(); j++) {
            char word = str.charAt(j);
            // 提取汉字的首字母
            String[] pinyinArray = PinyinHelper.toHanyuPinyinStringArray(word);
            if (pinyinArray != null) {
                result.append(pinyinArray[0].charAt(0));
            } else {
                result.append(word);
            }
        }
        return result.toString();
    }

}
