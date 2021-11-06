// pages/invoicing/invoicing.js
// ---------------------请求
import "../../lib/runtime/runtime.js";
// ---------------------简化成promise
import { promiseFun } from "../../utils/promise.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // --------------------------------------发票类型
    type: "电子普通发票",
    typeRemark: "电子发票与纸质普通发票具备同等法律效益，可支持报销入账",
    // --------------------------------------发票抬头
    radio: "1",
    // --------------------------------------个人
    personal: {
      // --------姓名
      username: "",
      // --------邮箱地址
      email: "",
      // --------手机号
      phone: "",
    },
    // --------------------------------------企业
    enterprise: {
      // --------公司名称
      companyName: "",
      // --------识别号
      identifier: "",
      // --------邮箱地址
      email: "",
      // --------手机号
      phone: "",
    },
    // --------------------------------------正则
    regEmail: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    regPhone: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
    regLandline: /^(0\d{2,3})-?(\d{7,8})$/,
  },
  // --------------------------------------自定义函数
  /**
   * 点击radio更改数据
   */
  onChangeRadio(event) {
    this.setData({
      radio: event.detail,
    });
  },
  /**
   * 点击提交数据
   */
  async submitBill() {
    try {
      const { radio } = this.data;
      const regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      const regPhone = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      const regLandline = /^(0\d{2,3})-?(\d{7,8})$/;
      let bool = false;
      if (radio == 1) {
        const { username, email, phone } = this.data.personal;
        if (
          username &&
          email &&
          regEmail.test(email) &&
          phone &&
          (regPhone.test(phone) || regLandline.test(phone))
        ) {
          bool = true;
        }
      } else {
        const { companyName, identifier, email, phone } = this.data.enterprise;
        if (
          companyName &&
          identifier &&
          email &&
          regEmail.test(email) &&
          phone &&
          (regPhone.test(phone) || regLandline.test(phone))
        ) {
          bool = true;
        }
      }

      if (bool) {
        console.log("提交后台");
        await promiseFun({
          eventName: wx.showToast,
          params: {
            title: "提交成功",
            icon: "success",
            mask: true,
            duration: 1000,
          },
        });
        wx.navigateBack();
      } else {
        wx.showToast({
          title: "请完善信息",
          icon: "none",
          duration: 1000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 导入发票
   */
  async importBill() {
    try {
      const res = await promiseFun({
        eventName: wx.chooseInvoiceTitle,
      });
      const { title, taxNumber, telephone } = res;
      this.setData({
        radio: "2",
        enterprise: {
          companyName: title,
          identifier: taxNumber,
          email: "1147846233@qq.com",
          phone: telephone,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

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
