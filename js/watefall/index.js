window.onload = function() {
  imgLocation('container', 'box')
}

// 获取当前有多少张图片要放
function imgLocation(parent, content) {
  var cparent = document.getElementById(parent)
  var ccontent = getChildElement(cparent, content) // 20个box
  // 谁换行了
  var winWidth = document.documentElement.clientWidth
  var imgWidth = ccontent[0].offsetWidth
  var num = Math.floor(winWidth / imgWidth)
  // cparent.style.width = imgWidth * num + 'px'
  cparent.style.cssText = `width: ${imgWidth * num}px`

  var BoxHeightArr = []
  for (var i = 0; i < ccontent.length; i++) {
    if (i < num) {
      BoxHeightArr[i] = ccontent[i].offsetHeight
      // console.log(BoxHeightArr);
    } else {
      // 找数组里最小的值
      var minHeight = Math.min.apply(null, BoxHeightArr)
      var minIndex = BoxHeightArr.indexOf(minHeight)

      // ccontent[i].style.cssText = `
      //   position: absolute; 
      //   top: ${minHeight}px; 
      //   left: ${ccontent[minIndex].offsetLeft}px
      // `
      ccontent[i].style.position = 'absolute'
      ccontent[i].style.top = minHeight + 'px'
      ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'

      BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight
    }
  }

}


// 帮取出某容器内的某一层子容器
function getChildElement(parent, content) {
  const contentArr = []
  var allContent = parent.getElementsByTagName('*')
  for (var i = 0; i < allContent.length; i++) {
    if (allContent[i].className == content) {
      contentArr.push(allContent[i])
    }
  }
  // console.log(contentArr);
  return contentArr
}