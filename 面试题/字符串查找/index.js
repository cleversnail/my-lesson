a = '34'; b = '12345678' // 2    b[1]
c = '35'; d = '12345678' // -1

console.log(isContain(a, b))

function isContain(a, b) {
  for (let i in b) {
    // console.log(b[1])
    if (a[0] === b[i]) {
      let tmp = true
      for (let j in a) {
        if (a[j] !== b[~~i + ~~j]) {
          tmp = false
        }
      }
      if (tmp) {
        return i
      }
    }
  }
  return -1
}
