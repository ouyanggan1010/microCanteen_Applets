const computedBehavior = require('miniprogram-computed').behavior

Component({
  behaviors: [computedBehavior],
  data: {
    a: "Test",
    b: ".wxml",
  },
  computed: {
    sum(data) {
      // 注意： computed 函数中不能访问 this ，只有 data 对象可供访问
      // 这个函数的返回值会被设置到 this.data.sum 字段中
      return data.a + data.b
    },
  },
  methods: {
    
  }
})