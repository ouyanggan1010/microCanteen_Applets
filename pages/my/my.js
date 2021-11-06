// pages/my/my.js
// ---------------------请求
import "../../lib/runtime/runtime.js";
// ---------------------简化成promise
import { promiseFun } from "../../utils/promise.js";

// ---------------------计算属性
const computedBehavior = require("miniprogram-computed").behavior;

Component({
  behaviors: [computedBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: "",
      nickName: "",
      gender: "",
    },
  },
  /**
   * 计算属性
   */
  computed: {
    // ---------------------用户头像
    userAvatar(data) {
      const dataUrl = data.userInfo.avatarUrl;
      return dataUrl ? dataUrl : "../../styles/images/noPic.jpg";
    },
  },
  /**
   * 所有方法与生命周期方法
   */
  methods: {
    // --------------------------------------自定义函数
    /**
     * 点击头像获取用户信息
     */
    async getUserInfo() {
      try {
        const res = await promiseFun({
          eventName: wx.getUserProfile,
          params: {
            desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          },
        });
        this.setData({
          userInfo: res.userInfo,
        });
        wx.setStorageSync("userInfo", res.userInfo);
      } catch (error) {
        console.log(error);
      }
    },
    // --------------------------------------生命周期函数
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      const user = wx.getStorageSync("userInfo");
      if (user) {
        this.setData({
          userInfo: user,
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
  },
});
