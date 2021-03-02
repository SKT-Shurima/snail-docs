# Function

在 ES5  中判断函数是不是使用了`new` 来调用（即作为构造器），最流行的方式是使用`instanceof`:

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





