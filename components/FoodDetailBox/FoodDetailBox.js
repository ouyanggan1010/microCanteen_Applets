// components/foodDetailBox/foodDetailBox.js
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
    // ---------------------商品详情弹出层---数据
    foodDetailObj: {
      type: Object,
    },
    // ---------------------商品详情弹出层---显示隐藏
    showVariable: {
      type: Boolean,
    },
    // ---------------------商品详情弹出层---当前时间段是否可以点餐
    restIs: {
      type: Boolean,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // ---------------------轮播图当前的下标
    current: 0,
    // ---------------------添加的商品数量
    boxNum: 1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 分享
     */
    shareFood() {
      console.log("share=========")
      wx.downloadFile({
        url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/demo.ef5c5bef.jpg',
        success: (res) => {
          console.log("图片=========", res.tempFilePath)
          wx.showShareImageMenu({
            path: res.tempFilePath
          })
        }
      })
    },
    /**
     * 关闭商品列表出现弹框详情
     */
    closeFoodDetailC() {
      this.triggerEvent("hidefoodBox");
    },
    /**
     * 商品列表出现弹框详情---监听轮播图的下标
     */
    monitorCurrent: function (e) {
      let current = e.detail.current;
      this.setData({
        current: current,
      });
    },
    /**
     * 点击增加减少购物车数量
     */
    changeShopCard(e) {
      const { restIs } = this.data;
      if (!restIs) {
        return;
      }
      const { type } = e.currentTarget.dataset;
      const { boxNum } = this.data;
      let lastNum = boxNum;
      // 判断是加号还是减号
      if (Number(type)) {
        // 点击加号
        lastNum++;
      } else {
        // 点击减号
        if (lastNum > 1) {
          lastNum--;
        }
      }
      this.setData({
        boxNum: lastNum,
      });
    },
    /**
     * 点击加入购物车
     */
    addCard() {
      const { restIs } = this.data;
      if (!restIs) {
        return;
      }
      const num = this.data.boxNum;
      console.log("======", num);
      this.triggerEvent("addCardEvent", { num });
      setTimeout(() => {
        this.setData({
          boxNum: 1,
        });
      }, 300);
    },
  },
});
