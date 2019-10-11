// var quickSort = function(arr) {
// 　　if (arr.length <= 1) {//如果数组长度小于等于1无需判断直接返回即可 
//         return arr;
//     }
// 　　var pivotIndex = Math.floor(arr.length / 2);//取基准点 
// 　　var pivot = arr.splice(pivotIndex, 1)[0];//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数
// 　　var left = [];//存放比基准点小的数组
// 　　var right = [];//存放比基准点大的数组 
// 　　for (var i = 0; i < arr.length; i++){ //遍历数组，进行判断分配 
// 　　　　if (arr[i] < pivot) {
// 　　　　　　left.push(arr[i]);//比基准点小的放在左边数组 
// 　　　　} else {
// 　　　　　　right.push(arr[i]);//比基准点大的放在右边数组 
// 　　　　}
// 　　}
//           //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1； 
// 　　return quickSort(left).concat([pivot], quickSort(right));
// }
// var quick = function(arr) {
//   return arr.sort((a, b) => {
//     return a - b
//   })
// }
// var arr = ['B4', 'F3', 'F9', 'S12', 'R32', 'X8', 'P2', 'Q0', 'H21']
// // console.log(quick(arr))
// function mySorter(a, b){
//   if (/^\0/.test(a) ^ /^\D/.test(b)) return a>b?1:(a==b?0:-1);
//   return a>b?-1:(a==b?0:1);
// }

// var pyArray=["a","d","fa","5","t","fw2","a31","b","e","2fs","4","0"]

// console.log(arr.sort(mySorter))


"use strict"; // 加上这行就是严格模式，严格模式和非严格模式下这里的打印不一样
const abc = {
  name: 'wn'
}
Object.preventExtensions(abc) // 将对象设置成不可扩展
abc.age = '18'
console.log(abc)


// var a = {
//   user:"wn",
//   fn:function(){
//       console.log(this);
//   }
// }
// var b = a.fn;
// b.call(null);