# ECMAScript

- let && const

  ```let``` 定义之后可以改变，```const```定义之后不能改变。（const 阻止的是对变量绑定的修改，而不是阻止对成员值的修改）

- 暂时性死区

  块级内部声明之前使用：

  ```js
  if (condition) {
      console.log(typeof value);  // 引用错误
      let value = 'string';
  }
  ```

  块级外部声明之前使用：

  ```js
  console.log(typeof value); // "undefined"
  
  if (condition) {
      let value = 'string';
  }
  ```

  ps：暂时性死区只是块级绑定的一个独特的表现

  



