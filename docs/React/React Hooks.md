##  React Hooks

### 创建组件的方式

​	React 创建组件的方式分为两种:

- 类组件
- 函数式组件

  - 纯函数式组件没有状态
  - 没有生命周期
  - 没有`this`




### Hook使用规则

Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

- 只能在**函数最外层**调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 **React 的函数组件**中调用 Hook。不要在其他 JavaScript 函数中调用。
- 自定义Hook必须**以“use”开头**；



### useState

`useState`等价于 class 类组件中的`state`

- `useState`

  ```tsx
  import React, { useState } from 'react';
  
  function Example() {
    // 声明一个叫 "count" 的 state 变量
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  ```

- class `state`

  ```tsx
  class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }
  ```

### useEffect

- 类比class组件`componentDidMount`、`componentDidUpdate`、`componentWillUnmount`的钩子函数，`effect`在这些生命周期阶段都会执行，与 `componentDidMount`、`componentDidUpdate` 不同的是，在浏览器完成布局与绘制**之后**，传给 `useEffect` 的函数会延迟调用。

- 使用 `useEffect` 调度的 `effect` 不会阻塞页面渲染；

- 使用`useEffect`内部接收一个参数(`function`)，可以执行副作用，`return`一个函数，用来取消副作用；

- `useEffect`第二个参数是个数组，内部存放可能变化的参数，用于性能优化；

  ``` typescript
    useEffect(() => {
      function handleStatusChange(status) {
        setIsOnline(status.isOnline);
      }
  
      ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
      return () => {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
      };
    });
  ```



### useContext

- `useContext`的参数必须是 *context* 对象本身

  ```tsx
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
  const ThemeContext = React.createContext(themes.light);
  
  function App() {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }
  ```

###  useReducer

- `useState` 的替代方案，类比`Redux`；

- `useReducer`接收两个参数，第一个参数为`reducer`函数，第二个参数为初始化`state`；

  ```tsx
  function init(initialCount) {
    return {count: initialCount};
  }
  
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      case 'reset':
        return init(action.payload);
      default:
        throw new Error();
    }
  }
  
  function Counter({initialCount}) {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
      <>
        Count: {state.count}
        <button
          onClick={() => dispatch({type: 'reset', payload: initialCount})}>
          Reset
        </button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </>
    );
  }
  ```

  

  ### useCallback

  - `useCallback(fn, deps)`相当于 `useMemo(() => fn, deps)`；

  - 第一个参数是内联回调函数，第二个参数是依赖项数组，返回一个`memoized`回调函数；回调函数仅在某个依赖项改变时才会更新

    ```typescript
    const memoizedCallback = useCallback(
      () => {
        doSomething(a, b);
      },
      [a, b],
    );
    ```

  ### useMemo

  - 第一个参数是“创建”函数，第二个参数是依赖项数组，返回一个`memoized`值；

  - 依赖项数组不会作为参数传给“创建”函数；

  - “创建”函数只在渲染期间执行，所以不要在函数内部执行与渲染无关的操作；

  - 可以作为性能优化的手段；

    ```typescript
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    ```

    ```typescript
    const [n, setN] = useState(0); 
    const addN = useMemo(() => {
        return () => {
          setN(n + 1);
        };
      }, [n]);
    ```

  ### useRef

  - `useRef` 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（`initialValue`）;

  - 返回的 ref 对象在组件的整个生命周期内保持不变；

    ```tsx
    function TextInputWithFocusButton() {
      const inputEl = useRef(null);
      const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        inputEl.current.focus();
      };
      return (
        <>
          <input ref={inputEl} type="text" />
          <button onClick={onButtonClick}>Focus the input</button>
        </>
      );
    }
    ```

  ###  useImperativeHandle

  - `useImperativeHandle` 可以让你在使用 `ref` 时自定义暴露给父组件的实例值；

    ```typescript
    useImperativeHandle(ref, createHandle, [deps])
    ```

    ```tsx
    function FancyInput(props, ref) {
      const inputRef = useRef();
      useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current.focus();
        }
      }));
      return <input ref={inputRef} ... />;
    }
    FancyInput = forwardRef(FancyInput);
    ```

    渲染 `<FancyInput ref={inputRef} />` 的父组件可以调用 `inputRef.current.focus()`



