# Table

当`table`中的`td`内容文字过长，会出现不换行，就会造成原始定义的`width`失效；

解决方案：

```less
.table {
	table-layout: fixed;
  word-break: break-all;
}
```

