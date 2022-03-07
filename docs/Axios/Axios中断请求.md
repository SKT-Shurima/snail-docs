##  Axios 中断请求

### 核心

浏览器的`XHR`或者是`Node http request`都提供了`abort`方法用于取消请求；

### 使用

```typescript
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

// 方式一，使用 CancelToken 实例提供的静态属性 source
axios.post("/user/12345", { name: "monch" }, { cancelToken: source.token });
source.cancel();

// 方式二，使用 CancelToken 构造函数自己实例化
let cancel;

axios.post(
  "/user/12345",
  { name: "monch" },
  {
    cancelToken: new CancelToken(function executor(c) {
      cancel = c;
    }),
  }
);

cancel();
```

### 源码解读

- `lib/cancel/CancelToken.js`

  ```typescript
  function CancelToken(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
  
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
  
    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
  
      token.reason = new Cancel(message);
      resolvePromise(token.reason);
    });
  }
  
  ```

  `ancelToken` 就是一个由 `promise` 控制的极简的状态机，实例化时会在实例上挂载一个 `promise`，这个 `promise` 的 `resolve` 回调暴露给了外部方法 `executor`，这样一来，我们从外部调用这个 `executor`方法后就会得到一个状态变为 `fulfilled` 的 `promise`；

- `lib/adapters/xhr.js`

  ```typescript
  if (config.cancelToken) {
    // Handle cancellation
    config.cancelToken.promise.then(function onCanceled(cancel) {
      if (!request) {
        return;
      }
  
      request.abort();
      reject(cancel);
      // Clean up request
      request = null;
    });
  }
  
  ```

- `lib/adaptors/http.js`

  ```typescript
  if (config.cancelToken) {
    // Handle cancellation
    config.cancelToken.promise.then(function onCanceled(cancel) {
      if (req.aborted) return;
  
      req.abort();
      reject(cancel);
    });
  }
  ```

  在适配器里 `CancelToken` 实例的 `promise` 的 `then` 回调里调用了 `xhr` 或 `http.request` 的 `abort` 方法。



