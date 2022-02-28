 响应式数据更新
   触发 Watcher 观察者里面的回调 vm._update 函数，去通知页面更新
   这个过程中vm._render() 生成新的 vnode的
   vm._update 就会带着新的 vnode 去触发 __path__过程（虚拟dom和真实dom比较）

  vn = {
    target: 'ul',
    children: [
      { target: 'li', children: [{ vnode: { text: '2'} }]},
      { target: 'li', children: [{ vnode: { text: '1'} }]},
    ]
  }

   __path__过程:
   1. 对比新旧节点是否是相同的节点 （isSameNode）
     - 不是相同节点 isSameNode = false， 直接销毁旧的vnode， 渲染新的vnode
     - 如果节点相同，要尽可能的做节点的复用
     - 如果新vnode是文字vnode， 就直接调用浏览器的api 替换文字
     - 如果新的vnode有children，旧的vnode没有，直接addvnode新的子节点
     - 旧的vnode有children， 新的vnode没有，直接removeVnode旧的子节点

   diff核心比较：
    let oldStartIdx = 0   旧首节点
    let newStartIdx = 0   新首节点

    let oldEndInx = oldCh.length - 1   旧尾节点
    let newEndInx = newCh.length - 1   新尾节点

   function sameVnode(a, b) {
     return (
       a.key === b.key && (
         (
           a.tag === b.tag && 
           a.isComment === b.isComment && 
           isDef(a.data) === isDef(b.data) &&
           sameInputType(a, b)
         )
       )
     )
   }