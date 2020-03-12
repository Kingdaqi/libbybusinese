package com.businese;

import java.util.ArrayList;
import java.util.List;

/**
 * @author daqiking
 */
public class TestMain {

    /** @param a:组合数组
     * @param m:生成组合长度
     * @return :所有可能的组合数组列表
     */
    private List<String[]> combination(String[] a, int m) {
        TestMain c = new TestMain();
        List<String[]> list = new ArrayList<String[]>();
        int n = a.length;
        //是否是最后一种组合的标记
        boolean end = false;
        //生成辅助数组。首先初始化，将数组前n个元素置1，表示第一个组合为前n个数。
        int[] tempNum = new int[n];
        for (int i = 0; i < n; i++) {
            if (i < m) {
                tempNum[i] = 1;

            } else {
                tempNum[i] = 0;
            }
        }
        // 打印首个辅助数组
        printVir(tempNum);
        // 打印第一种默认组合
        list.add(c.createResult(a, tempNum, m));
        //标记位
        int k = 0;
        while (!end) {
            boolean findFirst = false;
            boolean swap = false;
            // 然后从左到右扫描数组元素值的"10"组合，找到第一个"10"组合后将其变为"01"
            for (int i = 0; i < n; i++) {
                int l = 0;
                if (!findFirst && tempNum[i] == 1) {
                    k = i;
                    findFirst = true;
                }
                if (tempNum[i] == 1 && tempNum[i + 1] == 0) {
                    tempNum[i] = 0;
                    tempNum[i + 1] = 1;
                    swap = true;
                    for (l = 0; l < i - k; l++) {
                        // 同时将其左边的所有"1"全部移动到数组的最左端。
                        tempNum[l] = tempNum[k + l];
                    }
                    for (l = i - k; l < i; l++) {
                        tempNum[l] = 0;
                    }
                    if (k == i && i + 1 == n - m) {
                        //假如第一个"1"刚刚移动到第n-m+1个位置,则终止整个寻找
                        end = true;
                    }
                }
                if (swap) {
                    break;
                }
            }
            // 打印辅助数组
            printVir(tempNum);
            // 添加下一种默认组合
            list.add(c.createResult(a, tempNum, m));
        }
        return list;
    }

    /**
     * 根据辅助数组和原始数组生成结果数组
     */
    public String[] createResult(String[] a, int[] temp, int m) {
        String[] result = new String[m];
        int j = 0;
        for (int i = 0; i < a.length; i++) {
            if (temp[i] == 1) {
                result[j] = a[i];
                System.out.println("result[" + j + "]:" + result[j]);
                j++;
            }
        }
        return result;
    }

    /**
     * 打印整组数组
     * @param list
     */
    public void print(List<String[]> list) {
        System.out.println("具体组合结果为:");
        for (int i = 0; i < list.size(); i++) {
            String[] temp = (String[]) list.get(i);
            for (int j = 0; j < temp.length; j++) {
                //将输出格式化
                java.text.DecimalFormat df = new java.text.DecimalFormat("00");
                System.out.print(temp[j]+"=======");
            }
            System.out.println();
        }
    }

    /**
     * 打印辅助数组的方法
     * @param a
     */
    public void printVir(int[] a) {
        System.out.println("生成的辅助数组为：");
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i]);
        }
        System.out.println();
    }

    public static void main(String[] args) {
        //整数数组
        String[] a = { "quartz glass plate",
                "transparent uv quartz glass plate",
                "fused glass plates",
                "fused silica glass sheet",
                "quartz glass sheet",
                "fused silica block",
                "fused silica lens",
                "fused silica window",
                "quartz window",
                "quartz glass window",
                "quartz plate",
                "fused glass",
                "fused silica glass",
                "fused silica plate",
                "quartz glass"
        };
        // 待取出组合的个数
        int m = 2;
        TestMain c = new TestMain();
        List<String[]> list = c.combination(a, m);
        c.print(list);
        System.out.println("一共" + list.size() + "组!");
    }

}
