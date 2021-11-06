// components/CurrentOrderDetails/CurrentOrderDetails.js
const computedBehavior = require("miniprogram-computed").behavior;
const { formatTime } = require("../../utils/util.js");
// ---------------------请求
import "../../lib/runtime/runtime.js";
// ---------------------简化成promise
import { promiseFun } from "../../utils/promise.js";

Component({
  behaviors: [computedBehavior],
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // ---------------------从父组件获取到的id值
    getId: {
      type: String,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
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
    // ---------------------订单详情
    currentObj: {},
    // ---------------------倒计时长度
    countdownLen: 9 * 60 * 1000,
    // ---------------------当前时间
    currentTime: 0,
    // ---------------------当前时间定时器
    currentInt: "",
    // ---------------------该订单是否倒计时完成，true表示未倒计时完
    isCountdown: true,
    // ---------------------展开true收起false
    unfoldUp: false,
    // ---------------------取消订单的理由选择项
    columns: [
      "点少了/点错了/点多了",
      "不想要了/临时有事",
      "地址/电话填错了",
      "送达时间选错了",
      "忘记使用优惠群",
      "忘记使用余额",
      "忘记使用礼品卡",
      "忘记写备注",
    ],
    // ---------------------是否展示popup
    showPopup: false,
    // ---------------------picker选中的项
    pickerVal: "",
    pickerIndex: 0,
  },

  /**
   * 计算属性
   */
  computed: {
    // ---------------------剩余时间
    timeLeft(data) {
      const { orderMillisecond } = data.currentObj;
      const { currentTime, countdownLen, currentInt } = data;
      let time = "";
      // 剩余的毫秒数
      if (currentTime && orderMillisecond) {
        const lastTime = currentTime - orderMillisecond;
        const lave = countdownLen - lastTime;
        if (lastTime >= 0 && lave > 0) {
          time = formatTime(lave, "mm-dd");
        } else {
          time = "00:00";
          clearInterval(currentInt);
        }
      }
      console.log("倒计时中---", time);
      return time;
    },
    // ---------------------是否只显示3条数据
    showItemIndex(data) {
      const { lists } = data.currentObj;
      const { unfoldUp } = data;
      if (unfoldUp) {
        // 展开
        return lists.length;
      } else {
        // 收起
        return 3;
      }
    },
  },
  watch: {
    // ---------------------监听剩余时间，判断剩余时间是否已用完
    timeLeft: function (val) {
      let bool = true;
      if (val == "00:00") {
        bool = false;
        console.log("监听剩余时间---", val);
        this.triggerEvent("chearTime", { id: this.data.getId });
      }
      this.setData({
        isCountdown: bool,
      });
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击展开更多，或收起
     */
    upDownItem() {
      console.log("id", this.data.getId);
      const { unfoldUp } = this.data;
      this.setData({
        unfoldUp: !unfoldUp,
      });
    },
    /**
     * 获取并更改当前时间
     */
    changeCurrentTime() {
      const time = new Date().getTime();
      this.setData({
        currentTime: time,
      });
    },
    /**
     * 点击复制订单号
     */
    async copyOrderNumber() {
      try {
        const { orderNumber } = this.data.currentObj;
        await promiseFun({
          eventName: wx.setClipboardData,
          params: {
            data: orderNumber,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * 拨打店铺电话
     */
    async makePhone() {
      try {
        const { storePhone } = this.data.currentObj;
        await promiseFun({
          eventName: wx.makePhoneCall,
          params: {
            phoneNumber: storePhone,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * picker框--点击取消按钮
     */
    pickerCancel() {
      this.setData({
        showPopup: false,
      });
    },
    /**
     * picker框--点击确定按钮
     */
    async pickerConfirm(e) {
      try {
        const { value, index } = e.detail;
        const { currentInt } = this.data;
        this.setData({
          showPopup: false,
        });
        const res = await promiseFun({
          eventName: wx.showModal,
          params: {
            title: "提示",
            content: "确定取消订单？",
            cancelColor: "#717276",
            confirmColor: "#a8d603",
            cancelText: "先等等",
            confirmText: "取消订单",
          },
        });
        if (res.confirm) {
          clearInterval(currentInt);
          this.setData({
            pickerVal: value,
            pickerIndex: index,
          });
          this.triggerEvent("parentCancel");
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Popup框--点击遮罩
     */
    closePopup() {
      this.setData({
        showPopup: false,
      });
    },
    /**
     * 点击取消订单
     */
    cancelOrder() {
      this.setData({
        showPopup: true,
      });
    },
    /**
     * 获取订单详情信息
     */
    getDetails() {
      // -----------通过id值获取当前订单详情
      const { commonObj } = this.data;
      // 获取1-5的随机整数
      const end1 = Math.ceil(Math.random() * 5);
      // 列表
      const lists = commonObj.slice(0, end1);

      // 获取1-2的随机整数
      const end2 = Math.ceil(Math.random() * 2);
      // 点餐方式：0表示自取，1表示外卖
      const pickType = [0, 1][end2 - 1];
      // 获取1-3的随机整数
      const end3 = Math.ceil(Math.random() * 3);
      const statusType = [0, 1, 2][end3 - 1];
      console.log("statusType--", statusType);

      // 点餐时间-毫秒
      let orderMillisecond;
      if (statusType == 2) {
        orderMillisecond = new Date().getTime();
      } else {
        orderMillisecond = new Date("2021.08.06 08:59:00").getTime();
      }
      const orderTime1 = formatTime(orderMillisecond, "YY-MM-DD").replace(
        /\-/g,
        "."
      );
      const orderTime2 = formatTime(orderMillisecond, "hh-mm");
      const orderTime = orderTime1 + " " + orderTime2;

      const currentObj = {
        // -----点餐方式：0表示自取，1表示外卖
        pickType,
        // -----状态：0表示已取消，1表示已完成，2表示待支付
        statusType,
        // -----收货地址
        address: "喜盈门国际大厦(海口市龙华区)12楼",
        // -----门店名字/配送店铺
        storeName: "海口吾悦广场店",
        // -----距离
        distance: "281m",
        // -----店铺电话
        storePhone: "18389555209",
        // -----餐品列表
        lists,
        // -----支付方式
        payMethod: "微信支付",
        // -----微信支付
        payToolPrice: "4.00",
        // -----包装费
        packagingFee: "4.00",
        // -----配送费
        deliveryFee: "4.00",
        // -----实付
        actuallyPaid: "100.00",
        // -----下单时间
        orderMillisecond,
        orderTime,
        // -----下单店铺
        orderStore: "海口吾悦广场店",
        // -----订单号
        orderNumber: "12124566885",
        // -----就餐方式
        diningWay: "外卖",
        // -----取餐时间
        mealTime: "立即",
        // -----备注
        remark: "备注备注备注备注备注备注备注备注备注",
      };
      this.setData({
        currentObj,
      });
      // -----------循环执行更改当前时间
      if (statusType == 2) {
        this.changeCurrentTime();
        const currentInt = setInterval(() => {
          this.changeCurrentTime();
        }, 1000);
        this.setData({
          currentInt,
        });
      }
    },
  },
  /**
   * 组件的生命周期
   */
  lifetimes: {
    // ---------------------在组件实例进入页面节点树时执行
    attached: function () {
      console.log(this.data.getId);
      this.getDetails();
      console.log("attached");
    },
    // ---------------------在组件实例被从页面节点树移除时执行
    detached: function () {
      const { currentInt } = this.data;
      clearInterval(currentInt)
      console.log("detached");
    },
  },
});
