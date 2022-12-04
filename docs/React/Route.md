### Route

####  history

使用`react-route` 监听路由变化：

```typescript
const unlisten = this.props.history.listen(location => {
  // 通过最新路由的 pathname 来判断路由是否发生变化
  if(this.props.location.pathname !== location.pathname){
    // 路由发生变化逻辑
  }
});
```

`history.listen` 自动返回 `unlisten` 函数用来取消监听，可在`componentWillUnmount`中使用；注：该监听方法只在所注册的组件所在的路由中有效；

