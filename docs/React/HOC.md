##  高阶组件 HOC

### 基本介绍

高阶组件是个一个函数，并且是一个以 **参数为组件，return一个新的组件**

eg:

```jsx
class Page1 extends React.Component {
  //...
  componentDidMount() {
    // aciton
    console.log('test')
  }
  render() {
    return <div>page1</div>
  }
}

class Page2 extends React.Component {
  // ...
  componentDidMount() {
    // aciton
    console.log('test')
  }
  render() {
    return <div>page1</div>
  }
}

class Container extends React.Component {
  // ....
  render() {
    return (
      <>
        <Page1 />
        <Page2 />
      </>
    )
  }
}
```

封装成高阶组件，即将高复用代码进行抽离，保证子组件内部只关注自身，而高阶组件（函数）内部则关注公用逻辑；

```jsx
function hocFn(WrappedComponent, pageName) {
  // 这个函数接收一个组件作为参数
  return class extends React.Component {
    componentDidMount() {
      // aciton
      console.log('test')
    }
    render() {
      // 此处注意要把this.props继续透传下去
      return <WrappedComponent {...this.props} />
    }
  }
}

class Page1 extends React.Component {
  // 共用逻辑抽离
  render() {
    return <div>page1</div>
  }
}

class Page2 extends React.Component {
  // 共用逻辑抽离
  render() {
    return <div>page2</div>
  }
}

// 使用时
const Page1WithLog = hocFn(Page1)
const Page2WithLog = hocFn(Page2)
```



### Ref

通过父组件直接通过`ref`访问高阶组件是获取不到真正的子节点的；那么此时想要通过`ref` 获取需要通过`React.forwardRef`对高阶组件进行封装；

```jsx

function hocFn(WrappedComponent, pageName) {
  // 这个函数接收一个组件作为参数
  class HOComponent extends React.Component {
    componentDidMount() {
      // aciton
      console.log('test')
    }
    render() {
      const {forwardedRef, ...rest} = this.props;
      return <WrappedComponent {...this.props} ref={forwardedRef}/>)
    }
  }
  // 注意 React.forwardRef 回调的第二个参数 “ref”。
  // 我们可以将其作为常规 prop 属性传递给 HOComponent “forwardedRef”
  // 然后它就可以被挂载到被 HOComponent 包裹的子组件上。
  return React.forwardRef((props,ref)=><HOComponent {...props} forwardedRef={ref}/>) 
}
```

