// components/ShopCart/ShopCart.js
const computedBehavior = require("miniprogram-computed").behavior;
Component({
  behaviors: [computedBehavior],
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // ---------------------购物车数据
    shopCarts: {
      type: Array,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // ---------------------购物车列表显示隐藏
    show: false,
    value:'2541155'
  },

  /**
   * 组件的计算属性/watch
   */
  computed: {
    // ---------------------购物车的总价格
    totalPric(data) {
      const arr = data.shopCarts;
      const total = arr.reduce((all, item) => {
        return all + Number(item.price) * item.num;
      }, 0);
      return total.toFixed(2);
    },
    // ---------------------购物车的总数量
    totalNum(data) {
      const arr = data.shopCarts;
      const total = arr.reduce((all, item) => {
        return all + item.num;
      }, 0);
      return total;
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击选好了进行跳转
     */
    jumpOrderSettlement() {
      const { shopCarts } = this.data;
      wx.redirectTo({
        url: `/pages/orderSettlement/orderSettlement?orderLists=${JSON.stringify(shopCarts)}`
      });
    },
    /**
     * 关闭购物车弹框
     */
    onClose() {
      this.setData({
        show: false,
      });
    },
    /**
     * 点击购物车图标打开关闭弹框
     */
    targgerBox() {
      const bool = !this.data.show;
      this.setData({
        show: bool,
      });
    },
    /**
     * 点击清空购物车
     */
    clearShopCart() {
      const _this = this;
      wx.showModal({
        title: "提示",
        content: "确定清空购物车吗？",
        cancelColor: "#717276",
        confirmColor: "#a8d603",
        success(res) {
          if (res.confirm) {
            _this.triggerEvent("clearShopCart");
          }
        },
      });
    },
    /**
     * 点击增加减少按钮
     */
    changeShopCart(e) {
      const { type, cid } = e.currentTarget.dataset;
      this.triggerEvent("changeShopCart", { type, cid });
    },
  },
});
