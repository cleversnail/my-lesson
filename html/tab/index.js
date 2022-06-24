function $(id) {
  return typeof id === 'string' ? document.getElementById(id) : id;
}

// $('tab') // document.getElementById('tab')

window.onload = function() {
  var titleName = $('tab-title').getElementsByTagName('li')
  var tabContent = $('tab-content').getElementsByClassName('tabct')
  // console.log(tabContent);
  
  for (let i = 0; i < titleName.length; i++) {
    titleName[i].onmouseover = function() {
      // console.log(titleName[i]);
      // console.log(this);
      // 移除当前所有li身上的类名
      for (var j = 0; j < titleName.length; j++) {
        titleName[j].className = ''
        tabContent[j].style.display = 'none'
      }
      this.className = 'select'
      tabContent[i].style.display = 'block'
    }
  }
}