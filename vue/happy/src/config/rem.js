(function(doc, win) {
  var docEl = doc.documentElement,  // 获取页面的根节点 html
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
      }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  // DOMContentLoaded 页面结构加载完毕
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)