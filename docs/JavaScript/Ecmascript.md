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

- 剩余参数

  限制：

  - 一个函数或者解构对象只能存在一个剩余参数，并且必须放在最后；

    ```js
    // 语法错误：不能在剩余参数后使用具名参数
    function pick(object, ...keys, last) {
      let result = Object.create(null);
      for (let i = 0, len = keys.length; i < len; i++) {
        result[keys[i]] = object[keys[i]];
      }
      return result;
    }
    ```

  - 不能在对象字面量的`setter` 属性中使用；

    ```js
    let object = {
        // 语法错误：不能在 setter 中使用剩余参数
        set name(...value) {
        // 一些操作
        }
    };
    ```

    ps： 原因——对象字面量的`setter`被限定只能使用单个参数；而剩余参数按照定义是不限制参数的数量，因此不被允许。



