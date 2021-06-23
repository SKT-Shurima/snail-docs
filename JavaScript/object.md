# Object

- `Object.is()`

  ```js
  console.log(+0 == -0); // true
  console.log(+0 === -0); // true
  console.log(Object.is(+0, -0)); // false
  console.log(NaN == NaN); // false
  console.log(NaN === NaN); // false
  console.log(Object.is(NaN, NaN)); // true
  console.log(5 == 5); // true
  console.log(5 == "5"); // true
  console.log(5 === 5); // true
  console.log(5 === "5"); // false
  console.log(Object.is(5, 5)); // true
  console.log(Object.is(5, "5")); // false
  ```

- `Object.assign()` 
  对对象的混合；原理：

  ```js
  function mixin(receiver, supplier) {
      Object.keys(supplier).forEach(function (key) {
          receiver[key] = supplier[key];
      });
      return receiver;
  }
  ```

  

