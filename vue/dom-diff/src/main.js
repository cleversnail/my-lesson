import { createElement, render, renderDom } from  './element'
import diff from './diff'
import patch from './patch'

let vertualDom1 = createElement('ul', {class: 'list'}, [
  createElement('li', {class: 'item'}, ['1']),
  createElement('li', {class: 'item'}, ['2'])
])
let vertualDom2 = createElement('ul', {class: 'list-group'}, [
  createElement('li', {class: 'item'}, ['2']),
  createElement('li', {class: 'item'}, ['1']),
  createElement('li', {class: 'item'}, ['3']),
])

// 如果平级元素有互换，那会导致重新渲染-------react源码中不会，因为有key这个唯一标识
// 新增节点也不会被更新
// index


let el = render(vertualDom1)
renderDom(el, window.app)

let pacthes = diff(vertualDom1, vertualDom2)
// 给元素打补丁，重新更新视图
patch(el, pacthes)


// 将虚拟dom转化成了真实dom，渲染到页面上
// let el = render(vertualDom)
// renderDom(el, window.root)

// console.log(el)
// console.log(vertualDom)

// DOM Diff 比较两个虚拟DOM区别，比较两个对象的区别
// dom diff作用 根据两个虚拟对象创建出补丁，描述改变的内容，将这个补丁用来更新dom