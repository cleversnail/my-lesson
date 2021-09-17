# 1.请列举7种以上常用的HTML标签，说明其语义。

# 2.请说明下面各种情况的执行结果，并注明产生对应结果的理由。
function doSomething() {
    alert(this);
}
① element.onclick = doSomething，点击element元素后。
② element.onclick = function() {doSomething()}， 点击element元素后。
③ 直接执行doSomething()。

【
  1. element object, 函数赋值方式导致this指向element
  2. window object，this是写在doSomething这个函数里面的，这种方式的事件绑定并没有将element对象传递给this（在函数调用的模式下，this会被绑定到全局对象上）
  3. window object， 在window中被调用指向window
】

# 3. 请用JavaScript语言实现 sort 排序函数，要求：sort([5, 100, 6, 3, -12]) // 返回 [-12, 3, 5, 6, 100]。如果你有多种解法，请阐述各种解法的思路及优缺点。（仅需用代码实现一种解法，其它解法用文字阐述思路即可）
【
  arr.sort((a, b) => {
      return a - b
  })
】



# 4. 请根据下面的HTML和CSS代码，画出布局示意图
<div id="page">
    <div class="main">
        <div class="sub"></div>
    </div>
    <div class="nav"></div>
</div>
<style type="text/css">
    #page { width: 520px; }
    .nav  { width: 200px; float: right; }
    .main { width: 200px; float: left; padding-left: 110px; }    
    .sub  { width: 100px; float: left; margin: 10px 0 10px -100px; }    
    .main { border: 1px solid #000; }
    .nav, .sub { border: 1px dashed #000; height: 300px; }    
    .sub { height: 280px; }
</style>

# 5. 阅读以下JavaScript代码：
if (window.addEventListener) {
       var addListener = function(el, type, listener, useCapture) {
           el.addEventListener(type, listener, useCapture);
       };
   } else if (document.all) {
       addListener = function(el, type, listener) {
           el.attachEvent("on" + type, function() {
               listener.apply(el);
           });
       };
   }
请阐述 a) 代码的功能; b) 代码的优点和缺点; c) listener.apply(el) 在此处的作用; d) 如果有可改进之处，请给出改进后的代码，并说明理由。

【
  a. 做低版本浏览器的事件注册的兼容
  b. 优点：跨浏览器  缺点：
】


# 6.请编写一个JavaScript 函数toRGB，它的作用是转换CSS中常用的颜色编码。 要求：
alert(toRGB("#0000FF"));          // 输出 rgb(0, 0, 255)
alert(toRGB("invalid"));          // 输出 invalid
alert(toRGB("#G00"));              // 输出 #G00



# 7. 尝试实现注释部分的Javascript代码，可在其他任何地方添加更多代码（如不能实现，说明一下不能实现的原因）：
var Obj = function(msg){
    this.msg = msg;
    this.shout = function(){
        alert(this.msg);
    }  
    this.waitAndShout = function(){
        //隔五秒钟后执行上面的shout方法
    }
}


# 8. 请编写一个JavaScript函数，它的作用是校验输入的字符串是否是一个有效的电子邮件地址。要求： a)   使用正则表达式。 b)   如果有效返回true ，反之为false。
【
  var checkEmail  = function(email){
  var preg = 
          "(^[a-zA-Z]|^[\\w-_\\.]*[a-zA-Z0-9])@(\\w+\\.)+\\w+$"，,
      pregObj  =new RegExp(preg);
      return pregObj.test(email);
  }
】

# 9. 请分别列出HTML、JavaScript、CSS、Java、php、python的注释代码形式。
【
  <!-- html -->

  /* css */

  // js

  /**
  *java
  */

  # php单行注释
  /**
  *php
  */

  # Python

  "
  Python
  "
】


# 10. 请用CSS定义p标签，要求实现以下效果: 字体颜色在IE6下为黑色(#000000)；IE7下为红色(#ff0000)；而其他浏览器下为绿色(#00ff00)。
【
  p{
    color: #00ff00;
    _color: #000;
  }
  *+html p{ // ie7
    color: #ff0000
  }
】



# 11. 请编写一个通用的事件注册函数（请看下面的代码）。
function addEvent(element, type, handler) {
    // 在此输入你的代码，实现预定功能
    if (element.addEventListener) {
      element.addEventListener(type, handler, false)
    } else if (element.attachEvent) { // IE
      element.attachEvent('on'+type, handler)
    } else {
      element['on'+ type] = handler
    }
}


# 17. 请编写一个JavaScript函数 parseQueryString，它的用途是把URL参数解析为一个对象，如：
var url = “http://www.taobao.com/index.php?key0=0&key1=1&key2=2.....”
var obj = parseQueryString(url);
alert(obj.key0)  // 输出0

# 18. 请把以下用于连接字符串的JavaScript代码修改为更有效率的方式
var htmlString =
    "<div class=”container”>" + "<ul id=”news-list”>";
for (var i = 0; i < NEWS.length; i++) {
    htmlString += "<li><a href=”"
        + NEWS[i].LINK + ">"
        + NEWS[i].TITLE + "</a></li>";
}
htmlString += "</ul></div>";


【
  var htmlString  =  "<div class=”container”>"   +   "<ul id=”news-list”>";
  for  (var i  =  0;  i  <  NEWS.length;  i++) 
  {
      var newsItem = NEWS[i];
      htmlString  +=  "<li><a href=”"  + newsItem.LINK  + ">"  
          + newsItem.TITLE  + "</a></li>";
  }
  htmlString  +=  "</ul></div>";
】

# 18. 请根据下面的描述，用JSON语法编写一个对象: “小明今年22岁，来自杭州。兴趣是看电影和旅游。他有两个姐姐，一个叫小芬，今年25岁，职业是护士。还有一个叫小芳，今年23岁，是一名小学老师。”
var person = {
  "name": "小明"
}


# 19. 为了不断优化推荐效果，今日头条每天要存储和处理海量数据。假设有这样一种场景：我们对用户按照它们的注册时间先后来标号，对于一类文章，每个用户都有不同的喜好值，我们会想知道某一段时间内注册的用户（标号相连的一批用户）中，有多少用户对这类文章喜好值为k。因为一些特殊的原因，不会出现一个查询的用户区间完全覆盖另一个查询的用户区间(不存在L1<=L2<=R2<=R1)。



输入描述:
输入： 第1行为n代表用户的个数 第2行为n个整数，第i个代表用户标号为i的用户对某类文章的喜好度 第3行为一个正整数q代表查询的组数  第4行到第（3+q）行，每行包含3个整数l,r,k代表一组查询，即标号为l<=i<=r的用户中对这类文章喜好值为k的用户的个数。 数据范围n <= 300000,q<=300000 k是整型

输出描述:
输出：一共q行，每行一个整数代表喜好值为k的用户的个数

示例1
输入
5
1 2 3 3 5
3
1 2 1
2 4 5
3 5 3
输出
1
0
2

说明
样例解释:
有5个用户，喜好值为分别为1、2、3、3、5，
第一组询问对于标号[1,2]的用户喜好值为1的用户的个数是1
第二组询问对于标号[2,4]的用户喜好值为5的用户的个数是0
第三组询问对于标号[3,5]的用户喜好值为3的用户的个数是2


# 20. 作为一个手串艺人，有金主向你订购了一条包含n个杂色串珠的手串——每个串珠要么无色，要么涂了若干种颜色。为了使手串的色彩看起来不那么单调，金主要求，手串上的任意一种颜色（不包含无色），在任意连续的m个串珠里至多出现一次（注意这里手串是一个环形）。手串上的颜色一共有c种。现在按顺时针序告诉你n个串珠的手串上，每个串珠用所包含的颜色分别有哪些。请你判断该手串上有多少种颜色不符合要求。即询问有多少种颜色在任意连续m个串珠中出现了至少两次。


# 21. 设计一个TODO List，页面结构如下图所示，要求：

使用HTML与CSS完成界面开发

实现添加功能：输入框中可输入任意字符，按回车后将输入字符串添加到下方列表的最后，并清空输入框

实现删除功能：点击列表项后面的“X”号，可以删除该项

实现模糊匹配：在输入框中输入字符后，将当前输入字符串与已添加的列表项进行模糊匹配，将匹配到的结果显示在输入框下方。如匹配不到任何列表项，列表显示空
