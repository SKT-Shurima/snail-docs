# Array

### some 和 every 区别

some 和 every 都可对纯数组，或者数据对象进行操作；

- `some`  一真为真

  ```js
  const list = ['zhangsan', 23, false, 0];
  list.some(item=>item); // true
  ```

  

- `every`  一假即假

  ```js
  const arr = [{name:'zhangsan',age:12},{name:'lisi',age:22}];
  const res =  arr.every(item=>{
    if(item.name==='zhangsan'){
      return item.age<20
    }else{
      return item.age>30
    }
  });
  console.log(res); // false
  ```

  

