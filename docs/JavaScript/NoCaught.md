```js
class NoCaught {
  static options

  static markStyle

  constructor(options) {
    /**
     * @description: options参数说明
     * @param {boolean} noCopy 禁止拷贝
     * @param {boolean} noPrint 禁止打印
     * @param {boolean} noSave 禁止保存 另存为
     * @param {boolean} noScreenshot 禁止截屏捕获
     */
    this.options = options
    this.init()
  }

  /**
   * @description: 构造函数初始化，根据传入参数来屏蔽对应功能
   * 无论屏蔽哪种功能，必然会屏蔽 keydown 相应逻辑，所以统一处理，由内部进行条件判断
   */
  init = () => {
    const { noSave = false, noCopy = false, noScreenshot = false } = this.options
    document.addEventListener('keydown', this.handleKeyDown)
    if (noCopy) this.forbiddenCopy()
    if (noScreenshot) {
      this.initMarking()
      this.forbiddenScreenShot()
    }
    if (noCopy || noSave) {
      document.addEventListener('contextmenu', this.disableContextMenu)
    }
  }

  /**
   * @description: 生成遮罩蒙版，用于截屏之前模糊当前界面，防止用户截屏
   * 当触发组合键的时候显示蒙版，其他情况清除
   */
  initMarking = () => {
    const markStyle = document.createElement('style')
    markStyle.type = 'text/css'
    markStyle.media = 'screen'
    markStyle.id = 'no-caught-mark-style'
    markStyle.innerHTML =
      'div{-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}'
    document.head.appendChild(markStyle)
    document.body.style.cssText =
      '-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;'
  }

  /**
   * @description: 模糊蒙版
   */
  toBlur = () => {
    document.body.style.cssText =
      '-webkit-filter: blur(5px);-moz-filter: blur(5px);-ms-filter: blur(5px);-o-filter: blur(5px);filter: blur(5px);'
  }

  /**
   * @description: 清除模糊蒙版
   */
  toClear = () => {
    document.body.style.cssText =
      '-webkit-filter: blur(0px);-moz-filter: blur(0px);-ms-filter: blur(0px);-o-filter: blur(0px);filter: blur(0px);'
    if (navigator.clipboard) navigator.clipboard.writeText('')
    this.copyToBoard(' ')
  }

  /**
   * @description: 根据用户的相应组合键盘事件，屏蔽对应的默认功能
   * @param {KeyboardEvent} e 键盘事件
   */
  handleKeyDown = e => {
    const { noSave = false, noCopy = false, noPrint = false, noScreenshot = false } = this.options
    // 禁止 ctrl+p 打印快捷键
    if (noPrint && (e.ctrlKey || e.metaKey) && e.key === 'p') {
      e.cancelBubble = true
      e.preventDefault()
      e.stopImmediatePropagation()
    }
    // 禁止ctrl+c 拷贝功能
    if (noCopy && (e.ctrlKey || e.metaKey) && e.key === 'c') {
      e.preventDefault()
    }
    // 禁止ctrl+s 另存为
    if (noSave && (e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault()
    }

    // 禁止截屏 组合键功能
    if ((noScreenshot && e.metaKey && e.shiftKey) || (e.metaKey && e.ctrlKey)) {
      e.preventDefault()
      this.toBlur()
    } else {
      this.toClear()
    }
  }

  /**
   * @description: 屏蔽右键
   * @param {KeyboardEvent} e 键盘事件
   */
  disableContextMenu = e => {
    e.preventDefault()
  }

  /**
   * @description: 屏蔽拷贝
   * @param {KeyboardEvent} e 键盘事件
   */
  disableCopy = e => {
    e.preventDefault()
  }

  /**
   * @description: 屏蔽选中
   * @param {KeyboardEvent} e 键盘事件
   */
  disableSelectstart = e => {
    e.preventDefault()
  }

  disableClipboard = () => {
    this.toClear()
  }

  /**
   * @description: 清空剪切板内容
   * @param {string} value 替换剪切板中的内容 默认是 " " 里面必须有值
   * @return {boolean} 返回是否剪切成功
   */
  copyToBoard = value => {
    const element = document.createElement('textarea')
    document.body.appendChild(element)
    element.value = value
    element.select()
    if (document.execCommand('copy')) {
      document.execCommand('copy')
      document.body.removeChild(element)
      return true
    }
    document.body.removeChild(element)
    return false
  }

  /**
   * @description: 添加事件监听禁止拷贝
   */
  forbiddenCopy = () => {
    document.addEventListener('copy', this.disableCopy)
    document.addEventListener('selectstart', this.disableSelectstart)
  }

  /**
   * @description: 取消事件监听
   */
  cancelForbiddenCopy = () => {
    document.removeEventListener('copy', this.disableCopy)
    document.removeEventListener('selectstart', this.disableSelectstart)
  }

  /**
   * @description: 禁止用户截屏，当当前界面隐藏/失焦/点击/keyup/mouseenter/mouseleave，则清空剪切板
   */
  forbiddenScreenShot = () => {
    window.addEventListener('visibilitychange', this.disableClipboard)
    window.addEventListener('focus', this.toClear)
    window.addEventListener('blur', this.toClear)
    document.addEventListener('keyup', this.toClear)
    document.addEventListener('click', this.toClear)
    document.addEventListener('mouseenter', this.toClear)
    document.addEventListener('mouseleave', this.toClear)
  }

  cancelForbiddenScreenShot = () => {
    window.removeEventListener('visibilitychange', this.disableClipboard)
    window.removeEventListener('focus', this.toClear)
    window.removeEventListener('blur', this.toClear)
    document.removeEventListener('keyup', this.toClear)
    document.removeEventListener('click', this.toClear)
    document.removeEventListener('mouseenter', this.toClear)
    document.removeEventListener('mouseleave', this.toClear)
  }

  /**
   * @description: 组件/页面销毁时调用，********必须执行*******
   */
  destroy = () => {
    const { noSave = false, noCopy = false, noScreenshot = false } = this.options
    if (noCopy) this.cancelForbiddenCopy()
    if (noScreenshot) this.cancelForbiddenScreenShot()
    document.head.removeChild(document.getElementById('no-caught-mark-style'))
    document.removeEventListener('keydown', this.handleKeyDown)
    if (noCopy || noSave) {
      document.removeEventListener('contextmenu', this.disableContextMenu)
    }
  }
}

export default NoCaught

```



