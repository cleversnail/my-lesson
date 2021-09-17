// https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/
// 输入一个字符串，打印出该字符串中字符的所有排列。
// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]



var permutation = function(s) {
  let result = []; //结果数组，存放结果
  let mapstr = ''; //不重复的字符串，用来循环遍历组合不同的字符串，如果用原字符串，会超时
  let map = new Map(); //存放字符的哈希表
  for(let i=0;i<s.length;i++){
      if(!mapstr.includes(s[i])) mapstr += s[i];
      map.set(s[i], map.get(s[i])>0 ? map.get(s[i])+1 : 1);
  }

  function isDivision(str){
      //如果长度和原字符串相等，则推入结果数组
      if(str.length == s.length){
          if(!result.includes(str)){
              result.push(str)
          }
          return
      }
      for(let i=0;i<mapstr.length;i++){
          //保存变化前字符串
          let prev = str;
          //获取当前字符的次数
          let temp = map.get(mapstr[i]);
          if(temp >0){
              //组合字符串
              str += mapstr[i];
              //减少次数
              map.set(mapstr[i],temp - 1);
              isDivision(str);
              //恢复
              str = prev;
              map.set(mapstr[i],temp);
          }
          continue
      }
  }
  isDivision('');
  return result
};


console.log(permutation('abcd'))
