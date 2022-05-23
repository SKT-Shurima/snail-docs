### Web API

-  `scrollIntoView` 操作可滚动的是`Element`,`document`下没有该API;
  用法：

  - 直接调用，相当于`Element.scrollIntoView(true)`，表示直接滚动到可滚动区域的顶部；

  - 参数调用：

    | 参数     | 说明           | 是否必选 | 可选参数                         | 默认值    |
    | -------- | -------------- | -------- | -------------------------------- | --------- |
    | behavior | 滚动的行为方式 | 否       | `auto` `smooth`                  | `auto`    |
    | block    | 纵向滚动的位置 | 否       | `start` `center` `end` `nearest` | `start`   |
    | inline   | 横向滚动的位置 | 否       | `start` `center` `end` `nearest` | `nearest` |

    

  