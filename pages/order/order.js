// pages/order/order.js
const computedBehavior = require("miniprogram-computed").behavior;
Component({
  behaviors: [computedBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    // ---------------------第一部分的tab默认选中项
    tabActiveP: 0,
    // ---------------------第二部分的tab默认选中项
    tabActiveC: 0,
    // ---------------------第二部分的tabs显示隐藏
    showChildTab: false,
    // ---------------------下拉加载显示隐藏
    poiBool: false,
    // ---------------------全部数据
    allOrder: [],
    // ---------------------通用的奶茶数据
    commonObj: [
      {
        id: "pId_013_002",
        title: "提拉米苏豪华宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        price: "28.00",
        standardSel: "标准(去冰)/标准糖",
        num: 1,
      },
      {
        id: "pId_013_003",
        title: "金色山脉宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        price: "25.00",
        standardSel: "标准(冰沙)/标准糖/标准(奶油顶)/茉莉初雪",
        num: 1,
      },
      {
        id: "pId_013_004",
        title: "冰博克草莓撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        price: "25.00",
        standardSel: "标准(冰沙)/标准糖/茉莉初雪",
        num: 1,
      },
      {
        id: "pId_013_005",
        title: "葡萄撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        price: "22.00",
        standardSel: "标准(冰沙)/标准糖/标准",
        num: 1,
      },
      {
        id: "pId_013_006",
        title: "黑糖珠珠宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        price: "21.00",
        standardSel: "标准(冰沙)/标准糖/标准(芝士)/金观音/不分装",
        num: 1,
      },
    ],
    // ---------------------当前订单数据
    currentOrder: [],
    // ---------------------当前订单数据-展示加载中
    showLoading: true,
    // ---------------------历史订单全部数据
    totalOrder: [],
    pageSizeTotal: 5,
    pageIndexTotal: 1,
    poiBoolTotal: true,
    // ---------------------历史订单自取数据
    selfOrder: [],
    pageSizeSelf: 5,
    pageIndexSelf: 1,
    poiBoolSelf: true,
    // ---------------------历史订单外卖数据
    takeoutOrder: [],
    pageSizeTakeout: 5,
    pageIndexTakeout: 1,
    poiBoolTakeout: true,
  },
  watch: {},
  /**
   * 所有方法与生命周期方法
   */
  methods: {
    // --------------------------------------自定义函数
    /**
     * 倒计时停止
     */
    stopTime(e) {
      console.log("倒计时停止2222====", e.detail.id);
    },
    /**
     * 点击父tab进行切换
     */
    onChangeTabP(event) {
      const { showChildTab, tabActiveC } = this.data;
      // 子tab必须要执行一次，才会有效果
      if (event.detail.index == 1 && !showChildTab) {
        console.log("子tab必须要执行一次，才会有效果");
        this.setData({
          showChildTab: true,
        });
        // 第一次点击历史订单，并重新请求某个子tab
        this.childAgain(tabActiveC);
      }
      if (event.detail.index == 1) {
        // ------------历史订单
        // 重新请求某个子tab
        this.childAgain(tabActiveC);
      } else {
        // ------------当前订单
        this.getCurrent();
      }
      // 更改父tab的默认选中项
      this.setData({
        tabActiveP: event.detail.index,
      });
    },
    /**
     * 重新请求某个子tab
     */
    childAgain(index) {
      // 子tab的重新请求
      let str = "all";
      if (index == 1) {
        // 获取历史订单的自取数据
        str = "self";
      } else if (index == 2) {
        // 获取历史订单的外卖数据
        str = "takeout";
      }
      this.commonRefresh(str);
    },
    /**
     * 点击子tab进行切换
     */
    onChangeTabC(event) {
      this.setData({
        tabActiveC: event.detail.index,
      });
      // 切换重新获取数据
      this.childAgain(event.detail.index);
    },
    /**
     * 历史订单---下拉刷新
     */
    getHistoryRefresh(e) {
      const { type } = e.detail;
      this.commonRefresh(type);
    },
    commonRefresh(type) {
      if (type == "self") {
        // 获取历史订单的自取数据
        this.setData({
          pageIndexSelf: 1,
          poiBoolSelf: true,
        });
        this.getHistorySelf();
      } else if (type == "all") {
        // 获取历史订单的全部数据
        this.setData({
          pageIndexTotal: 1,
          poiBoolTotal: true,
        });
        this.getHistoryTotal();
      } else if (type == "takeout") {
        // 获取历史订单的外卖数据
        this.setData({
          pageIndexTakeout: 1,
          poiBoolTakeout: true,
        });
        this.getHistoryTakeout();
      }
    },
    /**
     * 获取当前订单的全部数据
     */
    getCurrent() {
      // 组件进入进行加载动画
      wx.showLoading({
        mask: true,
      });
      this.setData({
        showLoading: true,
      });
      // 获取数据
      const { commonObj } = this.data;
      let arry = [];
      let obj = {};
      // 整理需要获取的页数与每页的数量
      for (let i = 0; i < 2; i++) {
        // 获取1-5的随机整数
        const end1 = Math.ceil(Math.random() * 5);
        // 获取1-2的随机整数
        const end2 = Math.ceil(Math.random() * 2);
        // 列表
        const lists = commonObj.slice(0, end1);
        // 状态 0：已取消，1：待支付
        const statusArry = [0, 1][end2 - 1];
        // 点餐方式：0表示自取，1表示外卖
        const pickType = [0, 1][end2 - 1];
        // 全部数量
        const total = lists.reduce((tatal, e) => {
          return tatal + Number(e.num);
        }, 0);
        // 总价格
        const allPrice = lists.reduce((tatal, e) => {
          return tatal + Number(e.price) * Number(e.num);
        }, 0);

        obj = {
          id: "oId_" + i,
          // -----点餐方式：0表示自取，1表示外卖
          pickType,
          pickText: pickType == 0 ? "自取" : "外卖",
          title: "海口吾悦广场店" + i,
          orderTime: "2021-05-03 11:07:17",
          status: statusArry,
          statusText: statusArry == 0 ? "已取消" : "待支付",
          total,
          allPrice: allPrice.toFixed(2),
          lists,
        };
        arry.push(obj);
      }
      this.setData({
        currentOrder: arry,
      });
      // 暂停加载动画
      setTimeout(() => {
        this.setData({
          showLoading: false,
        });
        wx.hideLoading();
      }, 500);
    },
    /**
     * 获取历史订单的全部数据
     */
    getHistoryTotal() {
      const {
        commonObj,
        totalOrder,
        pageSizeTotal,
        pageIndexTotal,
        poiBoolTotal,
      } = this.data;
      let arry = pageIndexTotal == 1 ? [] : totalOrder;
      if (poiBoolTotal) {
        let obj = {};
        // 整理需要获取的页数与每页的数量
        const index = pageSizeTotal * (pageIndexTotal - 1);
        const len = pageSizeTotal * pageIndexTotal;

        for (let i = index; i < len; i++) {
          // 获取1-5的随机整数
          const end1 = Math.ceil(Math.random() * 5);
          // 获取1-2的随机整数
          const end2 = Math.ceil(Math.random() * 2);
          // 列表
          const lists = commonObj.slice(0, end1);
          // 状态 0：已取消，1：已完成
          const statusArry = [0, 1][end2 - 1];
          // 全部数量
          const total = lists.reduce((tatal, e) => {
            return tatal + Number(e.num);
          }, 0);
          // 总价格
          const allPrice = lists.reduce((tatal, e) => {
            return tatal + Number(e.price) * Number(e.num);
          }, 0);

          obj = {
            id: "oId_" + i,
            title: "海口吾悦广场店" + i,
            orderTime: "2021-05-03 11:07:17",
            status: statusArry,
            statusText: statusArry == 0 ? "已取消" : "已完成",
            total,
            allPrice: allPrice.toFixed(2),
            lists,
          };
          arry.push(obj);
        }
        // 更新数据
        this.setData({
          totalOrder: arry,
          pageIndexTotal: pageIndexTotal + 1,
        });
        // 判断下一次是否还可以请求数据
        if (arry.length >= 10) {
          this.setData({
            poiBoolTotal: false,
          });
        }
      }
    },
    /**
     * 获取历史订单的外卖数据
     */
    getHistoryTakeout() {
      const {
        commonObj,
        takeoutOrder,
        pageSizeTakeout,
        pageIndexTakeout,
        poiBoolTakeout,
      } = this.data;
      let arry = pageIndexTakeout == 1 ? [] : takeoutOrder;
      if (poiBoolTakeout) {
        let obj = {};
        // 整理需要获取的页数与每页的数量
        const index = pageSizeTakeout * (pageIndexTakeout - 1);
        const len = pageSizeTakeout * pageIndexTakeout;

        for (let i = index; i < len; i++) {
          // 获取1-5的随机整数
          const end1 = Math.ceil(Math.random() * 5);
          // 获取1-2的随机整数
          const end2 = Math.ceil(Math.random() * 2);
          // 列表
          const lists = commonObj.slice(0, end1);
          // 状态 0：已取消，1：已完成
          const statusArry = [0, 1][end2 - 1];
          // 全部数量
          const total = lists.reduce((tatal, e) => {
            return tatal + Number(e.num);
          }, 0);
          // 总价格
          const allPrice = lists.reduce((tatal, e) => {
            return tatal + Number(e.price) * Number(e.num);
          }, 0);

          obj = {
            id: "oId_" + i,
            title: "海口吾悦广场店" + i,
            orderTime: "2021-05-03 11:07:17",
            status: statusArry,
            statusText: statusArry == 0 ? "已取消" : "已完成",
            total,
            allPrice: allPrice.toFixed(2),
            lists,
          };
          arry.push(obj);
        }
        // 更新数据
        this.setData({
          takeoutOrder: arry,
          pageIndexTakeout: pageIndexTakeout + 1,
        });
        // 判断下一次是否还可以请求数据
        if (arry.length >= 10) {
          this.setData({
            poiBoolTakeout: false,
          });
        }
      }
    },
    /**
     * 获取历史订单的自取数据
     */
    getHistorySelf() {
      const {
        commonObj,
        selfOrder,
        pageSizeSelf,
        pageIndexSelf,
        poiBoolSelf,
      } = this.data;
      let arry = pageIndexSelf == 1 ? [] : selfOrder;
      if (poiBoolSelf) {
        let obj = {};
        // 整理需要获取的页数与每页的数量
        const index = pageSizeSelf * (pageIndexSelf - 1);
        const len = pageSizeSelf * pageIndexSelf;

        for (let i = index; i < len; i++) {
          // 获取1-5的随机整数
          const end1 = Math.ceil(Math.random() * 5);
          // 获取1-2的随机整数
          const end2 = Math.ceil(Math.random() * 2);
          // 列表
          const lists = commonObj.slice(0, end1);
          // 状态 0：已取消，1：已完成
          const statusArry = [0, 1][end2 - 1];
          // 全部数量
          const total = lists.reduce((tatal, e) => {
            return tatal + Number(e.num);
          }, 0);
          // 总价格
          const allPrice = lists.reduce((tatal, e) => {
            return tatal + Number(e.price) * Number(e.num);
          }, 0);

          obj = {
            id: "oId_" + i,
            title: "海口吾悦广场店" + i,
            orderTime: "2021-05-03 11:07:17",
            status: statusArry,
            statusText: statusArry == 0 ? "已取消" : "已完成",
            total,
            allPrice: allPrice.toFixed(2),
            lists,
          };
          arry.push(obj);
        }
        // 更新数据
        this.setData({
          selfOrder: arry,
          pageIndexSelf: pageIndexSelf + 1,
        });
        // 判断下一次是否还可以请求数据
        if (arry.length >= 10) {
          this.setData({
            poiBoolSelf: false,
          });
        }
      }
    },
    // --------------------------------------生命周期函数
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log("onload========");
      this.setData({
        currentOrder:[],
        showLoading: false,
      });
      // -----------第一次进入页面，先获取当前订单的数据
      setTimeout(()=>{
        this.getCurrent();
      },100)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {},
  },
});
