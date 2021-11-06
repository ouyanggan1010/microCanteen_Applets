// pages/orderSettlement/orderSettlement.js
// ---------------------请求
import "../../lib/runtime/runtime.js";
// ---------------------简化成promise
import { promiseFun } from "../../utils/promise.js";

const computedBehavior = require("miniprogram-computed").behavior;

Component({
  behaviors: [computedBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    // ---------------------0自取、1外卖选择项
    pickType: "0",
    // ---------------------自取的数据
    selfCollection: {
      id: "self_001",
      shopName: "海口吾悦广场21",
      address:"海南省海口市海秀东路8号望海国际广场西侧精品楼一、二层指定位置",
      distance: "1.2km",
    },
    // ---------------------外卖的位置信息数据
    takeaway: {
      id: "address_001",
      address: "龙华区城西镇枫林雅郡八栋二单元606",
      shopName: "海口吾悦广场",
      phone: "13518814469",
      name: "欧阳平",
      sex:0,//0女，1男
      packageFee: "28.00",
      deliveryFee: "4.00",
    },
    // ---------------------自取的方式
    selfRadio: "1",
    // ---------------------包装费复选框
    costChecked: true,
    // ---------------------自取的取餐时间
    partSelfTime: "立即取餐",
    // ---------------------自取的取餐时间弹框
    showSelfTime: false,
    // ---------------------外卖的取餐时间
    partTakeawayTime: "",
    // ---------------------外卖的取餐时间弹框
    showTakeawayTime: false,
    // ---------------------商品列表数据
    orderLists: [],
    // ---------------------搭配商品列表
    collocationLists: [
      {
        id: "cId_001",
        pic: "../../styles/imagesTest/奈雪拼单.jpg",
        price: "30.00",
        title: "霸气杨梅",
        num: 0,
        clickBool: false,
      },
      {
        id: "cId_002",
        pic: "../../styles/imagesTest/奈雪杯.jpg",
        price: "32.00",
        title: "黑椒味薯条",
        num: 0,
        clickBool: false,
      },
      {
        id: "cId_003",
        pic: "../../styles/imagesTest/端午粽子.jpg",
        price: "12.00",
        title: "原味薯条",
        num: 0,
        clickBool: false,
      },
    ],
    // ---------------------是否余额够支付
    disabledOver: true,
    // ---------------------余额数值
    balance: "40.00",
    // ---------------------支付方式的选项
    payRadio: "2",
    // ---------------------付款自取弹框
    showSelfPayBtn: false,
  },
  /**
   * 计算属性
   */
  computed: {
    // ---------------------是否余额够支付
    disabledOver(data) {
      const { totalPayAmount, balance } = data;
      const t = Number(totalPayAmount);
      const b = Number(balance);
      const bool = b < t;
      return bool;
    },
    // ---------------------总支付额
    totalPayAmount(data) {
      const { orderLists, collocationLists } = data;
      let totalPrice = 0;
      orderLists.forEach((item) => {
        const p = Number(item.price);
        const n = Number(item.num);
        totalPrice = totalPrice + p * n;
      });
      collocationLists.forEach((item) => {
        const p = Number(item.price);
        const n = Number(item.num);
        totalPrice = totalPrice + p * n;
      });
      return totalPrice.toFixed(2);
    },
  },
  /**
   * 所有方法与生命周期方法
   */
  methods: {
    // --------------------------------------自定义方法
    /**
     * 搭配点击增加减少按钮
     */
    changeShopCart(e) {
      const { type, cid } = e.currentTarget.dataset;
      let arr = this.data.collocationLists;
      // 获取购物车列表下标
      const card = arr.findIndex((item) => item.id === cid);

      // 判断是加号还是减号
      if (Number(type)) {
        // 点击加号
        arr[card].num++;
      } else {
        // 点击减号
        if (arr[card].num) {
          arr[card].num--;
        }
      }
      // 更新data数据
      this.setData({
        collocationLists: arr,
      });
    },
    /**
     * 搭配列表点击
     */
    addNums(e) {
      const { cid } = e.currentTarget.dataset;
      let arr = this.data.collocationLists;
      arr.forEach((item) => {
        if (item.id === cid) {
          item.clickBool = true;
        } else {
          item.clickBool = false;
        }
      });
      console.log("搭配列表点击==========", arr);
      // 获取购物车列表下标
      const card = arr.findIndex((item) => item.id === cid);
      if (arr[card].num == 0) {
        arr[card].num = 1;
      }
      // 更新data数据
      this.setData({
        collocationLists: arr,
      });
    },
    /**
     * 外卖的初始取餐时间
     */
    initialTakeawayTime() {
      // 获取毫秒数
      const nowS = new Date().getTime();
      const partMi = new Date(nowS + 3600000);
      const pH = partMi.getHours();
      const pM = partMi.getMinutes();
      let gH = pH < 10 ? "0" + pH : pH;
      let gM = pM < 10 ? "0" + pM : pM;
      return gH + ":" + gM;
    },
    /**
     * 自取取餐时间弹框关闭
     */
    closeSelfPopup() {
      this.setData({
        showSelfTime: false,
      });
    },
    /**
     * 外卖取餐时间弹框关闭
     */
    closeTakePopup() {
      this.setData({
        showTakeawayTime: false,
      });
    },
    /**
     * 自取付款弹框关闭
     */
    closeSelfPayPopup() {
      this.setData({
        showSelfPayBtn: false,
      });
    },
    /**
     * 自取方式切换事件
     */
    changeSelfRadio(event) {
      this.setData({
        selfRadio: event.detail,
      });
    },
    changePayRadio(event) {
      this.setData({
        payRadio: event.detail,
      });
    },
    /**
     * 包装费复选框切换事件
     */
    async changeCostChecked(event) {
      try {
        const { costChecked } = this.data;
        if (costChecked) {
          const res = await promiseFun({
            eventName: wx.showModal,
            params: {
              title: "温馨提示",
              content:
                "包装袋为保温袋可保冷保温，锁住新鲜！去掉可能会影响最佳口感",
              cancelColor: "#717276",
              confirmColor: "#a8d603",
              cancelText: "使用",
              confirmText: "不使用",
            },
          });
          if (res.confirm) {
            this.setData({
              costChecked: false,
            });
          }
        } else {
          wx.showLoading({ mask: true });
          setTimeout(() => {
            wx.hideLoading();
            this.setData({
              costChecked: true,
            });
          }, 500);
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * 点击取餐时间
     */
    onMealTime() {
      const popupTime = this.selectComponent("#childPopupTimeOne");
      popupTime.getPopupData();
      // 更改data数据
      this.setData({
        showSelfTime: true,
      });
    },
    /**
     * 子元素点击自取的时间段，并修改父元素自取的数据
     */
    changeSelfPartTime(e) {
      const { cnt } = e.detail;
      this.setData({
        partSelfTime: cnt,
        showSelfTime: false,
      });
    },
    /**
     * 点击外面送达时间
     */
    onServiceTime() {
      const popupTime = this.selectComponent("#childPopupTimeTwo");
      popupTime.getPopupData();
      // 更改data数据
      this.setData({
        showTakeawayTime: true,
      });
    },
    /**
     * 子元素点击外卖的时间段，并修改父元素外卖的数据
     */
    changeTakePartTime(e) {
      const { cnt } = e.detail;
      this.setData({
        partTakeawayTime: cnt,
        showTakeawayTime: false,
      });
    },
    /**
     * 自取、外卖选择项的切换事件
     */
    changePick(e) {
      const { type } = e.detail;
      const { selfCollection } = this.data;
      if (type == 1) {
        wx.navigateTo({
          url: `/pages/myAddress/myAddress?store=${selfCollection.shopName}`,
        });
      } else {
        this.setData({
          pickType: type,
          partSelfTime: "立即取餐",
          activeSelfTime: 0,
          selfRadio: "1",
        });
      }
    },
    /**
     * 返回---更改点餐页面的外卖全部地址数据
     */
    backChangeTakeaway(res) {
      console.log("更改点餐页面的外卖数据==", res);
      const { store, id, address } = res;
      const { takeaway } = this.data;
      const time = this.initialTakeawayTime();
      this.setData({
        partTakeawayTime: time,
        takeaway: {
          id: id,
          address,
          shopName: store,
          ...takeaway,
        },
        pickType: 1,
      });
    },
    /**
     * 返回---更改点餐页面的自取数据
     */
    backChangeSelfCollection(res) {
      let { selfCollection } = this.data;
      selfCollection = {
        id: "self_003",
        shopName: "更改过后的店铺2",
        distance: "1.7km",
      };
      this.setData({
        selfCollection,
      });
    },
    /**
     * 付款提交按钮
     */
    paySubBtn() {
      this.setData({
        showSelfPayBtn: true,
      });
    },
    // --------------------------------------生命周期函数
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      const { orderLists } = options;
      console.log("生命周期函数--监听页面加载", JSON.parse(orderLists));
      this.setData({
        orderLists: JSON.parse(orderLists),
      });
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
