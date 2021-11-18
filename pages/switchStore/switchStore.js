// pages/switchStore/switchStore.js
// ---------------------请求
import "../../lib/runtime/runtime.js";
// ---------------------简化成promise
import { promiseFun } from "../../utils/promise.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // ---------------------配送地址
    address: "",
    // ---------------------配送店铺
    storeName: "",
    // ---------------------店铺数组信息
    storeLists: [
      {
        id:"store_001",
        storeAddress:
          "海南省海口市龙华区迎宾路18号海口新城吾悦广场一层1026-1027铺",
        storeName: "海口吾悦广场店1",
        mark: "可外送",
        openTime: "10:00-22:00",
        distance: "124m",
        deliveryFee: "10",
        storePhone: "13518814469",
        latitude: "19.977304",
        longitude: "110.337662",
      },{
        id:"store_002",
        storeAddress:
          "海南省海口市龙华区迎宾路18号海口新城吾悦广场一层1026-1027铺",
        storeName: "海口吾悦广场店2",
        mark: "可外送",
        openTime: "10:00-22:00",
        distance: "124m",
        deliveryFee: "10",
        storePhone: "13518814469",
        latitude: "19.977304",
        longitude: "110.337662",
      },{
        id:"store_003",
        storeAddress:
          "海南省海口市龙华区迎宾路18号海口新城吾悦广场一层1026-1027铺",
        storeName: "海口吾悦广场店3",
        mark: "可外送",
        openTime: "10:00-22:00",
        distance: "124m",
        deliveryFee: "10",
        storePhone: "13518814469",
        latitude: "19.977304",
        longitude: "110.337662",
      },{
        id:"store_004",
        storeAddress:
          "海南省海口市龙华区迎宾路18号海口新城吾悦广场一层1026-1027铺",
        storeName: "海口吾悦广场店4",
        mark: "可外送",
        openTime: "10:00-22:00",
        distance: "124m",
        deliveryFee: "10",
        storePhone: "13518814469",
        latitude: "19.977304",
        longitude: "110.337662",
      },
    ],
  },
  // --------------------------------------自定义函数
  /**
   * 拨打店铺电话
   */
  async makePhone(e) {
    try {
      const { phone } = e.detail;
      await promiseFun({
        eventName: wx.makePhoneCall,
        params: {
          phoneNumber: phone,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 返回到上级页面
   */
  backMeal(e) {
    const { storeId } = e.detail;
    let pages = getCurrentPages(); // 当前页，
    let prevPage = pages[pages.length - 2]; // 上一页
    if (prevPage.route == "pages/meal/meal") {
      prevPage.backChangeTakeawayStore(storeId);
    }
    wx.navigateBack();
  },
  /**
   * 跳转到位置信息页面
   */
  toLocation(e) {
    console.log(e)
    const { store } = e.detail;
    wx.navigateTo({
      url: "/pages/locationInformation/locationInformation?store=" + store,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("switchStore===", options);
    const { addressId, storeId } = options;
    if(addressId){
      this.setData({
        address:"海口市枫林雅郡",
      });
    }
    if(storeId){
      this.setData({
        storeName:"吾悦广场店",
      });
    }
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
});
