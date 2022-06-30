(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{462:function(t,a,s){"use strict";s.r(a);var n=s(25),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javascript-常见设计模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-常见设计模式"}},[t._v("#")]),t._v(" JavaScript 常见设计模式")]),t._v(" "),s("h3",{attrs:{id:"惰性单例模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#惰性单例模式"}},[t._v("#")]),t._v(" 惰性单例模式")]),t._v(" "),s("p",[t._v("惰性单例模式指的是需要的时候才创建对象实例。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Singleton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"策略模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#策略模式"}},[t._v("#")]),t._v(" 策略模式")]),t._v(" "),s("p",[t._v("策略模式是一种常用且有效的设计模式。")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句。")]),t._v(" "),s("li",[t._v("策略模式提供了对开放—封闭原则的完美支持，将算法封装在独立的strategy中，使得它们易于切换，易于理解，易于扩展。")]),t._v(" "),s("li",[t._v("策略模式中的算法也可以复用在系统的其他地方，从而避免许多重复的复制粘贴工作。")]),t._v(" "),s("li",[t._v("在策略模式中利用组合和委托来让Context拥有执行算法的能力，这也是继承的一种更轻便的替代方案。")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("会在程序中增加许多策略类或者策略对象")])]),t._v(" "),s("p",[t._v("面向对象设计原则——单一职责原则： 指一个类（通常包括对象和函数等）而言，应该仅有一个引起它变化的原因。")]),t._v(" "),s("h3",{attrs:{id:"代理模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代理模式"}},[t._v("#")]),t._v(" 代理模式")]),t._v(" "),s("p",[t._v("代理对象和本体是一致的，代理接手的请求的过程对用户来说是透明的，用户并不清楚代理和本体的区别")]),t._v(" "),s("ul",[s("li",[t._v("用户可以放心地请求代理，他只关心是否能得到想要的结果；")]),t._v(" "),s("li",[t._v("在任何使用本体的地方都可以替换成代理；")])]),t._v(" "),s("h3",{attrs:{id:"迭代器模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迭代器模式"}},[t._v("#")]),t._v(" 迭代器模式")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("each\n")])])]),s("h3",{attrs:{id:"发布-订阅模式-观察者模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布-订阅模式-观察者模式"}},[t._v("#")]),t._v(" 发布-订阅模式（观察者模式）")]),t._v(" "),s("p",[t._v("定于对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖他的对象都将得到通知。")]),t._v(" "),s("h3",{attrs:{id:"命令模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令模式"}},[t._v("#")]),t._v(" 命令模式")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("组合模式")]),t._v(" "),s("p",[t._v("组合模式要求组合对象和叶对象拥有相同的接口，且一对叶组合对象的操作必须具有一致性")])]),t._v(" "),s("li",[s("p",[t._v("双向映射关系\n比如一个子节点可能会在多个父节点中出现，在这种复合情况下，就必须给父节点和子节点建立双向映射关系；")])]),t._v(" "),s("li",[s("p",[t._v("用职责链模式提高组合模式性能\n比如一个复杂的树结构，节点很多，遍历整棵树性能表现不佳，那么可以在父子之间创建职责链；职责链模式的前提是需要开发者手动设置链条，这样可以实现子节点顺着链条找到对应的对象，反之，父节点也可以找到子节点；")])])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("参考文献:")]),t._v(" "),s("p",[t._v("[1]. JavaScripts设计模式与开发实践")])])}),[],!1,null,null,null);a.default=r.exports}}]);