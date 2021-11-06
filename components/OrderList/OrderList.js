// components/OrderList/OrderList.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // ---------------------判断是全部、自取或外卖
    type: {
      type: String
    },
    // ---------------------数据
    arryData: {
      type: Array,
      value: [],
    },
    // ---------------------下拉加载是否请求数据
    poiBool: {
      type: Boolean,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // ---------------------展示加载中
    showLoading: true,
    // ---------------------下拉刷新
    triggered: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 滚动到底部时触发
     */
    scrolltolower(e) {
      console.log("滚动到底部时触发");
      setTimeout(() => {
        this.triggerEvent("getData");
      }, 500);
    },
    /**
     * 自定义下拉刷新控件被下拉
     */
    refresherpulling() {
      this.setData({
        triggered: true,
      });
      setTimeout(() => {
        this.setData({
          triggered: false,
        });
      }, 2000);
    },
    /**
     * 自定义下拉刷新被复位
     */
    refresherrestore() {
      console.log("=====",this.data.type)
      this.triggerEvent("refresh", { type: this.data.type });
    },
  },

  /**
   * 生命周期
   */
  lifetimes: {
    // 在组件在视图层布局完成后执行
    attached: function () {
      // console.log("组件");
      // 组件进入进行加载动画
      wx.showLoading({
        mask: true,
      });
      // 暂停加载动画
      setTimeout(() => {
        this.setData({
          showLoading: false,
        });
        wx.hideLoading();
      }, 500);
    },
  },
});
