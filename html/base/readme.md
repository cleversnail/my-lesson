1. html
浏览器的页面，我们在页面上能看见的所有的元素，都需要用html创建出来

2. 所有的标签都被分为3类
  - 块级 （标签自动占据一整行，可以设置宽高， 自带 display：block 属性）
  - 行内块级 (可以同行展示, 可以设置宽高)
  - 行内 （可以同行展示，不可以设置宽高）

3. 居中
  - 行内和行内块级标签都可以通过父容器的text-align: center;line-height: 400px;来控制居中的
  -   display: flex; /* 弹性容器 */
      justify-content: center; /* x轴居中 */
      align-items: center; /* y轴居中 */
  - 绝对定位