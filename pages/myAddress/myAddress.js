// pages/myAddress/myAddress.js
// ---------------------请求
import "../../lib/runtime/runtime.js";
// ---------------------简化成promise
import { promiseFun } from "../../utils/promise.js";

const computedBehavior = require("miniprogram-computed").behavior;
const app = getApp();
Component({
  behaviors: [computedBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    // ---------------------当前时间段是否是可以点餐
    restDate: app.restDate,
    // ---------------------当前位置的店铺名字
    store: "",
    // --------------------------------------所有的地址信息
    listsData: [
      {
        id: "address_001",
        isDefault: false,
        tag: "公司",
        address: "222龙华区城西镇枫林雅郡八栋二单元606",
        name: "欧阳平1",
        sex: "女士",
        phone: "13518814469",
        // 可以配送的最近的门店
        store: "海口吾悦广场店",
        distance: "4.7km",
      },
      {
        id: "address_002",
        isDefault: true,
        tag: "学校",
        address:
          "1沙发萨芬的汉服可沙发萨芬的汉服可发萨芬的汉服可发萨芬的汉服可",
        name: "欧阳平2",
        sex: "女士",
        phone: "13518814469",
        // 可以配送的最近的门店
        store: "",
        distance: "",
      },
      {
        id: "address_003",
        isDefault: false,
        tag: "家",
        address:
          "2沙发萨芬的汉服可沙发萨芬的汉服可发萨芬的汉服可发萨芬的汉服可",
        name: "欧阳平3",
        sex: "女士",
        phone: "13518814469",
        // 可以配送的最近的门店
        store: "海口阳光城店",
        distance: "5.8km",
      },
    ],
    // --------------------------------------在配送范围内的地址
    listsDataYes: [],
    // --------------------------------------不在配送范围内的地址
    listsDataNo: [],
  },
  /**
   * 计算属性
   */
  computed: {},
  /**
   * 方法
   */
  methods: {
    // --------------------------------------自定义函数
    /**
     * 请求地址数据并重置
     */
    restData() {
      // ---------重组地址列表
      const { listsData, restDate, store } = this.data;
      let yesArry = [];
      let noArry = [];
      if (restDate) {
        yesArry = listsData.filter((item) => {
          return item.store == store;
        });
        noArry = listsData.filter((item) => {
          return !item.store || item.store !== store;
        });
      } else {
        noArry = listsData;
      }
      this.setData({
        listsDataYes: yesArry,
        listsDataNo: noArry,
      });
    },
    /**
     * 阻止navigator冒泡
     */
    emptyFunc() {},
    /**
     * 点击地址列表事件
     */
    async clickAddress(e) {
      try {
        const { type, list } = e.currentTarget.dataset;
        const { restDate } = this.data;
        if (type == "0") {
          let pages = getCurrentPages(); // 当前页，
          let prevPage = pages[pages.length - 2]; // 上一页
          if (prevPage.route == "pages/meal/meal" || prevPage.route == "pages/orderSettlement/orderSettlement") {
            prevPage.backChangeTakeaway(list);
          } 
          wx.navigateBack();
        } else {
          // -------需要通过请求判断当前的地址范围内是否可以有配送店铺
          // -------分两种情况：1.当前时间段不是配送时间；2.该地址没有可以配送的门店
          if (restDate && list.store) {
            const res1 = await promiseFun({
              eventName: wx.showModal,
              params: {
                title: "温馨提示",
                content: `选择此地址将切换到${list.store}，是否继续？`,
                cancelColor: "#717276",
                confirmColor: "#a8d603",
              },
            });
            if (res1.confirm) {
              let pages = getCurrentPages(); // 当前页，
              let prevPage = pages[pages.length - 2]; // 上一页
              if (prevPage.route == "pages/meal/meal" || prevPage.route == "pages/orderSettlement/orderSettlement") {
                prevPage.backChangeTakeaway(list);
              }
              wx.navigateBack();
            }
          }
          if (!restDate && list.store) {
            wx.showModal({
              title: "温馨提示",
              content: `该地址附近${list.store}外卖配送休息中`,
              cancelColor: "#717276",
              confirmText: "知道了",
              confirmColor: "#a8d603",
            });
          }
          if (!list.store) {
            wx.showModal({
              title: "温馨提示",
              content: "抱歉，目前该地址附近没有可配送的门店",
              cancelColor: "#717276",
              confirmText: "知道了",
              confirmColor: "#a8d603",
            });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * 点击获取微信地址
     */
    async chooseAddress() {
      try {
        const _this = this;
        const { listsData } = this.data;
        const res = await promiseFun({
          eventName: wx.chooseAddress,
        });
        const obj = {
          id: "address_006",
          isDefault: false,
          address:
            res.provinceName + res.cityName + res.countyName + res.detailInfo,
          name: res.userName,
          sex: "男士",
          phone: res.telNumber,
          // 可以配送的最近的门店
          store: "海口阳光城店",
          distance: "5.8km",
        };
        listsData.push(obj);
        _this.setData({
          listsData,
        });
        _this.restData();
      } catch (error) {
        console.log(error);
      }
    },
    // --------------------------------------生命周期函数
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      // ---------获取到url中的店铺名
      const { store } = options;
      this.setData({
        store,
      });
      // ---------重组地址列表
      this.restData();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},
  },
});
