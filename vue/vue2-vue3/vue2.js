// 数据变化了，视图就会更新
let oldArrayPrototype = Array.prototype
let proto = Object.create(oldArrayPrototype)

Array.from(['push', 'shift', 'unshift', 'pop']).forEach(method => {
  // 函数劫持, 重写函数
  proto[method] = function() {
    oldArrayPrototype[method].call(this, ...arguments)
    updateView()
  }
});

function observer(target) { // 观察者
  if (typeof target !== 'object' || target == null) {
    return target
  }

  if (Array.isArray(target)) {
    // 重写数组的原型
    // Object.setPrototypeOf(target, proto)
    target.__proto__ = proto
    return
  }

  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

function defineReactive(target, key, value) {
  if (typeof value == 'object' && value !== null) {
    observer(value)
  }
  Object.defineProperty(target, key, {
    get () {
      return value
    },
    set (newVal) {
      if (newVal !== value) {
        value = newVal
        updateView()
      }
    }
  })
}

function updateView() {
  console.log('视图更新');
}

let data = {
  name: 'wn',
  age: {
    num: 18
  },
  like: {
    a: {
      hb: 'running'
    }
  },
  job: ['coder', 'driver']
}
observer(data) // data被劫持

// data.name = '凯凯'
// data.age.num = 19
// data.like.a.hb = 'coding'
// data.job.push('teacher')

// data.job.length = 3
// data.sex = 'boy'
// console.log(data.name);