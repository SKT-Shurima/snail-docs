### Browser

- 浏览器对应的`JavaScript`解析引擎

  | 浏览器  | 解析引擎             |
  | ------- | -------------------- |
  | Chrome  | V8                   |
  | FireFox | OdinMonkey（奥丁猴） |
  | Safri   | JSCore               |
  | IE      | Chakra (查克拉)      |

  

- 判断浏览器类型

  ```js
  function myBrowser() {
      var e = navigator.userAgent;
      return e.indexOf("OPR") > -1 ? "Opera" : e.indexOf("Firefox") > -1 ? "FF" : e.indexOf("Trident") > -1 ? "IE" : e.indexOf("Edge") > -1 ? "Edge" : e.indexOf("Chrome") > -1 ? "Chrome" : e.indexOf("Safari") > -1 ? "Safari" : void 0
  }
  ```

- 浏览器全屏&& 退出全屏

  ```js
  const toFullScreen = () => {
    let element = document.body;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullScreen();
    }
  };
  
  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  };
  
  ```

- 浏览器版本和型号

  ```js
  const getExplorerInfo = () => {
      let t = navigator.userAgent.toLowerCase();
      return 0 <= t.indexOf("msie") ? { //ie < 11
          type: "IE",
          version: Number(t.match(/msie ([\d]+)/)[1])
      } : !!t.match(/trident\/.+?rv:(([\d.]+))/) ? { // ie 11
          type: "IE",
          version: 11
      } : 0 <= t.indexOf("edge") ? {
          type: "Edge",
          version: Number(t.match(/edge\/([\d]+)/)[1])
      } : 0 <= t.indexOf("firefox") ? {
          type: "Firefox",
          version: Number(t.match(/firefox\/([\d]+)/)[1])
      } : 0 <= t.indexOf("chrome") ? {
          type: "Chrome",
          version: Number(t.match(/chrome\/([\d]+)/)[1])
      } : 0 <= t.indexOf("opera") ? {
          type: "Opera",
          version: Number(t.match(/opera.([\d]+)/)[1])
      } : 0 <= t.indexOf("Safari") ? {
          type: "Safari",
          version: Number(t.match(/version\/([\d]+)/)[1])
      } : {
          type: t,
          version: -1
      }
  }
  ```

  

