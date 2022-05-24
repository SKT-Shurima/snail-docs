---
lang: zh-CN
title: Axios
description: Axios
---

### 使用 Axios 拦截器来取消多次重复的请求

对于一个界面交互请求，如一个 button 按钮多次请求刷新数据，或者提交表单等操作，会在同一时间发送多次请求，为了避免该问题，需要从架构的层次，多同一时间多次请求进行请求拦截限制。

Axios 拦截器工作原理，`axios` 中内置两个拦截器：

- 请求拦截器 `axios.interceptors.request.use()`;
- 响应拦截器 `axios.interceptors.response.use()`;

![1595616-20190728145040109-427538891](D:\workspace\gitbook\docs\Axios\1595616-20190728145040109-427538891.png)

实现思路：

- 创建一个空数组，用于存储每次请求成功的 URL（请求方式+URL 路径），并针对该 URL 设置`axios`提供的`CancelToken`，用于取消操作；
- 在下次发送任意请求前，校验该 URL 是否已经被保存过了，如果是，则进行取消操作；

```javascript
import axios from 'axios';

const { CancelToken } = axios;
const pending = [];
const removePending = (config) => {
  let removeIndex;
  const url = `${config.method}${config.url}`;
  pending.forEach((item, index) => {
    if (item && item.url === url) {
      item.f();
      removeIndex = index;
    }
  });
  if (removeIndex !== undefined) {
    pending.splice(removeIndex, 1);
  }
};

const instance = axios.create();
instance.interceptors.request.use((config) => {
  removePending();
  config.cancelToken = new CancelToken(function executor(c) {
    pending.push({
      url: `${config.method}${config.url}`,
      f: c
    });
  });
});
```
