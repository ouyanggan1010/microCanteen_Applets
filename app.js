// app.js
// ---------------------地图
const QQMapWX = require("./lib/qqmap-wx-jssdk/qqmap-wx-jssdk.min.js");
// ---------------------请求
import "./lib/runtime/runtime.js";
// ---------------------简化成promise
import { promiseFun } from "./utils/promise.js";

// ---------------------缓存名字与使用的页面或组件
/**
  * mapAddress：shipAddress（地图选择地址）
  * my：userInfo（用户信息）
*/

App({
  // -------------------地图
  qqmapsdk: "",
  // -------------------用户信息
  userInfo: {
    avatarUrl: "",
    nickName: "",
    gender: "",
  },
  // -------------------当前时间段是否是休息
  restDate: true,
  async onLaunch() {
    try {
      console.log("app.js")
      // ---------------------将缓存中不需要的数据清除
      wx.setStorageSync('shipAddress', '');
      // ---------------------进入小程序检测是否登录
      wx.checkSession({
        async fail() {
          //登录态过期
          // ---------------------如果没有登录则重新发起登录请求
          const res2 = await promiseFun({
            eventName: wx.login,
          });
          if (res2.code) {
            // 将code数据通过请求传入后台，获取后台传过来的session_key，并存入缓存中
            console.log("app.js-login",res2);
          } else {
            wx.showToast({
              title: res2.errMsg,
              icon: "error",
              duration: 2000,
            });
          }
        },
      });
      // ---------------------当前时间段是否是可以点餐
      // 当前时间
      const dateOne = new Date();
      const year = dateOne.getFullYear();
      const month = dateOne.getMonth();
      const day = dateOne.getDate();
      const timeNow = dateOne.getTime();
      // 休息的时间段
      const timeStart = new Date(year, month, day, 10, 0).getTime();
      const timeEnd = new Date(year, month, day, 22, 30).getTime();

      if (timeStart <= timeNow && timeNow <= timeEnd) {
        this.restDate = true;
      } else {
        this.restDate = false;
      }
      // ---------------------地图对象
      this.qqmapsdk = new QQMapWX({
        key: "MJIBZ-O5EKD-TJK4T-PLOS4-Q5JIF-5KFGO",
      });
    } catch (error) {
      console.log(error);
    }
  },
});
