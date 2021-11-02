### debounce   &   throttle

- debounce

  ```js
  const debounce = (fn, wait) => {
    let timer = null;
  
    return function() {
      let context = this,
          args = arguments;
  
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
  
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    };
  }
  ```

- throttle

  ```js
  const throttle = (fn, delay) => {
    let curTime = Date.now();
  
    return function() {
      let context = this,
          args = arguments,
          nowTime = Date.now();
  
      if (nowTime - curTime >= delay) {
        curTime = Date.now();
        return fn.apply(context, args);
      }
    };
  }
  ```

  