// ---------------------简化成promise
import { promiseFun } from "./promise.js";
// --------------------------------------------格式化时间
const formatTime = (time, option) => {
  const date = new Date(time)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const week = date.getDay()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  
  //获取 年月日
  if (option == 'YY-MM-DD') return [year, month, day].map(formatNumber).join('-')

  //获取 年月
  if (option == 'YY-MM') return [year, month].map(formatNumber).join('-')

  //获取 年
  if (option == 'YY') return [year].map(formatNumber).toString()

  //获取 月
  if (option == 'MM') return  [mont].map(formatNumber).toString()

  //获取 日
  if (option == 'DD') return [day].map(formatNumber).toString()

  //获取 年月日 周一 至 周日
  if (option == 'YY-MM-DD Week')  return [year, month, day].map(formatNumber).join('-') + ' ' + getWeek(week)

  //获取 月日 周一 至 周日
  if (option == 'MM-DD Week')  return [month, day].map(formatNumber).join('-') + ' ' + getWeek(week)

  //获取 周一 至 周日
  if (option == 'Week')  return getWeek(week)

  //获取 时分秒
  if (option == 'hh-mm-ss') return [hour, minute, second].map(formatNumber).join(':')

  //获取 时分
  if (option == 'hh-mm') return [hour, minute].map(formatNumber).join(':')

  //获取 分秒
  if (option == 'mm-dd') return [minute, second].map(formatNumber).join(':')

  //获取 时
  if (option == 'hh')  return [hour].map(formatNumber).toString()

  //获取 分
  if (option == 'mm')  return [minute].map(formatNumber).toString()

  //获取 秒
  if (option == 'ss') return [second].map(formatNumber).toString()

  //默认 时分秒 年月日
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getWeek = n => {
  switch(n) {
    case 1:
      return '星期一'
    case 2:
      return '星期二'
    case 3:
      return '星期三'
    case 4:
      return '星期四'
    case 5:
      return '星期五'
    case 6:
      return '星期六'
    case 7:
      return '星期日'
  }
}

// --------------------------------------------授权地理位置，并获取当前地理位置
/**
 * 获取地理位置的授权
 */
const getUserLocation = async (callback1, callback2) => {
  try {
    const res1 = await promiseFun({ eventName: wx.getSetting });
    // res1.authSetting['scope.userLocation'] == undefined 表示 初始化进入该页面
    // res1.authSetting['scope.userLocation'] == false 表示 非初始化进入该页面,且未授权
    // res1.authSetting['scope.userLocation'] == true 表示 地理位置授权
    if (
      res1.authSetting["scope.userLocation"] != undefined &&
      res1.authSetting["scope.userLocation"] != true
    ) {
      const res2 = await promiseFun({
        eventName: wx.showModal,
        params: {
          title: "地址位置未授权",
          content: "如需使用奈雪的小程序，请开启您手机中的定位授权",
          cancelText: "取消",
          cancelColor: "#717276",
          confirmText: "去授权",
          confirmColor: "#a7d700",
        },
      });
      if (res2.cancel) {
        callback2();
      } else if (res2.confirm) {
        const res3 = await promiseFun({ eventName: wx.openSetting });
        if (res3.authSetting["scope.userLocation"] == true) {
          wx.showToast({
            title: "授权成功",
            icon: "success",
            duration: 1000,
          });
          //再次授权，调用wx.getLocation的API
          getLocation(callback1);
        } else {
          wx.showToast({
            title: "授权失败",
            icon: "none",
            duration: 1000,
          });
        }
      }
    } else {
      //调用wx.getLocation的API
      getLocation(callback1);
    }
  } catch (error) {
    console.log(error);
  }
};
/**
 * 获取用户的当前位置
 */
const getLocation = async (callback) => {
  try {
    const res = await promiseFun({
      eventName: wx.getLocation,
      params: {
        type: "wgs84",
      },
    });
    callback(res);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  formatTime,
  getUserLocation,
};
