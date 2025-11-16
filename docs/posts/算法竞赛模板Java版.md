---
title: 算法竞赛模板Java版
date: 2025-11-16
---
# 前言
之前都是使用CPP打算法竞赛，现在使用Java。<br>
为了避免Java繁琐的输入输出，准备了下面的初始模板。<br>
大家有问题和建议可以多多交流

# 初始模板
``` java
import java.io.*;
import java.util.*;
import static java.lang.Math.*;

public class Main {
    // 使用缓冲读和缓冲写加速
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static PrintWriter out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(System.out)));
    static StringTokenizer st;

    public static void solve() throws IOException {
        // int n = nextInt();
        // long k = nextLong();
        // String s = next();
        // out.println("Hello, Java!");
    }

    public static void main(String[] args) throws IOException {
        // int T = nextInt();
        int T = 1;
        while (T-- > 0) {
            solve();
        }
        out.flush();
        out.close();
    }

    // 将一行输入按照空格分词，返回字符串
    public static String next() throws IOException {
        while (st == null || !st.hasMoreTokens()) {
            st = new StringTokenizer(br.readLine());
        }
        return st.nextToken();
    }

    // 将字符串解析为具体类型
    public static int nextInt() throws IOException {
        return Integer.parseInt(next());
    }

    public static long nextLong() throws IOException {
        return Long.parseLong(next());
    }

    public static double nextDouble() throws IOException {
        return Double.parseDouble(next());
    }

    // 直接读取一行
    public static String nextLine() throws IOException {
        return br.readLine();
    }
}
```