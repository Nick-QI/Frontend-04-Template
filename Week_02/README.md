# 学习笔记

## Null 和 undefined 的区别

null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN

[来源](https://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)

## RegExp.prototype.exec 
在设置了 global 和 sticky 标志的情况下, JavaScript的RegExp对象是有状态的. 
会将上次匹配成功后的位置记录在lastIndex中.
使用exec可用来对单个字符串的多次匹配结果进行逐条的遍历
而match只会返回匹配到的结果