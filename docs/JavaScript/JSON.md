###  ```JSON.stringify()```  ```JSON.parse()```

将对象转换 JSON 串，将 JSON 串反解析成对象

- 可以作为深拷贝对象的方法

  ```js
  JSON.parse(JSON.stringify(Object));
  ```

  ps： `JSON.stringify()` 在将`Object` 转成字符串时，需要注意一些问题：

  ```js
  const a = JSON.stringify({
      a: undefined,
      b: function(){},
      c: /abc/,
      d: new Date()
  });
  console.log(a) // "{"c":{},"d":"2021-02-02T19:40:12.346Z"}"
  console.log(JSON.parse(a)) // {c: {}, d: "2021-02-02T19:40:12.346Z"}
  ```

  ```JSON.stringify()``` 无法正确转换 JS 的部分属性；

  - undefiend

  - Function
  - RegExp（正则表达式，转换后变成了空对象）
  - Date（转换后变成了字符串，而非 Date 类的对象）

