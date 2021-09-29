# Function

- 在 ES5  中判断函数是不是使用了`new` 来调用（即作为构造器），最流行的方式是使用`instanceof`:

  ```js
  function Person(name) {
  	if (this instanceof Person) {
  		this.name = name; // 使用 new
  	} else {
  		throw new Error("You must use new with Person.")
  	}
  }
  var person = new Person("Nicholas");
  var notAPerson = Person("Nicholas"); // 抛出错误
  ```

  

- 箭头函数 `=>` 与传统JS函数的不同点

  1. 没有`this`、`super`、`arguments`，也没有`ne.target`绑定：`this`、`super`、`arguments`、以及函数内的`new.target`的值由所在的、最靠近的非箭头函数来决定；

  2. 不能被使用`new`调用， 箭头函数没有`[[Construct]]`方法，因此不能被用为构造函数，使用`new`调用箭头函数会抛出错误；

  3. 没有原型（因为不能被`new`调用）；

  4. 不能更改`this`，`this`在整个声明周期内其值会保持不变；

  5. 没有`arguments`对象，需要通过具名参数或剩余参数访问函数的参数；

  6. 不允许有重名的具名参数；

     



