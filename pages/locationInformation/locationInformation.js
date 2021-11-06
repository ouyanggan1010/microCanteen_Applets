// pages/locationInformation/locationInformation.js
const app = getApp();
// ---------------------请求
import "../../lib/runtime/runtime.js";
// ---------------------简化成promise
import { promiseFun } from "../../utils/promise.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // ---------------------当前位置纬度
    latitude: "",
    // ---------------------当前位置经度
    longitude: "",
    // ---------------------店铺的坐标点
    store: {
      id:"",
      lat: "",
      long: "",
      storeAddress: "",
      storeName: "",
    },
  },
  // ---------------------地图对象
  mapContext: "",
  // --------------------------------------自定义函数
  /**
   * 点击回到当前位置
   */
  async fixedPoint() {
    try {
      const { longitude, latitude } = this.data;
      const { mapContext } = this;
      await promiseFun({
        eventName: mapContext.moveToLocation,
        params: {
          longitude,
          latitude,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    try {
      // --------------获取页面url传过来的店铺坐标点
      const store = JSON.parse(options.store);
      console.log(store);
      // --------------创建 map 上下文 MapContext 对象
      this.mapContext = wx.createMapContext("myMap");
      // --------------获取当前的位置的经纬度
      const res1 = await promiseFun({
        eventName: wx.getLocation,
        params: { type: "gcj02" },
      });
      let la = res1.latitude;
      let lo = res1.longitude;
      this.setData({
        latitude: la,
        longitude: lo,
        store: {
          id: store.id,
          lat: store.latitude,
          long: store.longitude,
          storeAddress: store.storeAddress,
          storeName: store.storeName,
        },
        markers: [
          {
            id: 1,
            latitude: store.latitude,
            longitude: store.longitude,
            iconPath: "../../styles/images/datz.png",
            width: 40,
            height: 40,
            anchor: { x: 0.5, y: 1 },
          },
        ],
      });
    } catch (error) {
      console.log(error);
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
