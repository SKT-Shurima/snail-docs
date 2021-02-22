# String

- ```String.prototype.pcodePointAt``` && ```String.fromCodePoint```

  ```codePointAt``` ：指的是字符串中按位置提取 Unicode 代码点，非负整数；

  ``` fromCodePoint``` ：将Unicode 代码点转换为字符串；

  

- ```String.startsWith```  `String.endsWith` ```String.includes```

  三个方法接收两个参数，第一个是想要匹配的字符串，第二个是从字符串中某个索引位置开始匹配；

  三者都是对字符串的检索，返回一个Boolean；
  
  `startsWith`  判断字符串是否以某个字符串开始；
  
  ```js
  const str = 'gitbooks';
  str.startsWith('git'); // true
  ```
  
  `endsWith` 判断字符串是否已某个字符串结束:
  
  ```js
  const str = 'gitbooks';
  str.startsWith('books'); // true
  ```
  
  ``` includes```  查找字符串中是否出现某个字符：
  
  ````js
  const str = 'I like gitbooks.';
  str.includes('like'); // true
  ````
  
  ps: 如果向```startsWith()``` `endWith()` `include()` 方法中传入正则表达式而不是字符串，将抛出错误；  这与``` indexOf() ```以及 ```lastIndexOf() ```方法的表现形成了反差，它们会 将正则表达式转换为字符串并搜索它。
  
- `String.prototype.repeat()`

  `repeat` 方法接收一个非负整数作为字符串重复次数；

  ```js
  const str = 'log';
  console.log(str.repeat(3)); // "logloglog" 
  ```

  

- `String.split` `String.slice`

  

- `String.indexOf` 、`String.lastIndexOf`

