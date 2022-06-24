var a = 1 
var obj = {
  a: 11,
  foo: function() {
    console.log(this.a);
  } 
}

obj.foo()
