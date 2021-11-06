// pages/addEditAddress/addEditAddress.js
// ---------------------请求
import "../../lib/runtime/runtime.js";
// ---------------------简化成promise
import { promiseFun } from "../../utils/promise.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // --------------------------------------根据属性值来判断当前是修改还是新增
    type: 1,
    // --------------------------------------添加或修改的属性值
    addressId: "",
    receiver: "",
    sex: "",
    sexName: "",
    phone: "",
    shippingAddress: "",
    houseNumber: "",
    // --------------------------------------设置标签
    tips: ["家", "公司", "学校"],
    // 3表示无
    tip: 3,
    // --------------------------------------设置默认地址
    checked: false,
  },
  // --------------------------------------自定义方法
  /**
   * 设置默认地址
   */
  onChangeSwitch() {
    const { checked } = this.data;
    this.setData({ checked: !checked });
  },
  /**
   * 设置标签
   */
  changeTip(e) {
    const { index } = e.currentTarget.dataset;
    const { tip } = this.data;
    let num = index;
    if (index == tip) {
      num = 3;
    }
    this.setData({ tip: num });
  },
  /**
   * 选择性别
   */
  async selectSex() {
    try {
      const res = await promiseFun({
        eventName: wx.showActionSheet,
        params: { itemList: ["男", "女"] },
      });
      this.setData({
        sex: res.tapIndex,
        sexName: this.filterSex(res.tapIndex),
      });
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 根据性别的序号输出对应中文
   */
  filterSex(text) {
    const res = text;
    let sexStr;
    if (res === 0) {
      sexStr = "男";
    } else if (res === 1) {
      sexStr = "女";
    } else {
      sexStr = "";
    }
    return sexStr;
  },
  /**
   * 删除地址
   */
  async deleteAddress() {
    try {
      const res = await promiseFun({
        eventName: wx.showModal,
        params: {
          title: "提示",
          content: "确定删除该地址吗？",
          cancelColor: "#717276",
          confirmColor: "#a8d603",
        },
      });
      if (res.confirm) {
        await promiseFun({
          eventName: wx.showLoading,
          params: {
            title: "删除中",
            mask: true,
          },
        });
        setTimeout(async () => {
          wx.hideLoading();
          await promiseFun({
            eventName: wx.showToast,
            params: {
              title: "删除成功",
              icon: "success",
              mask: true,
              duration: 1000,
            },
          });
          setTimeout(async () => {
            wx.navigateBack();
          }, 800);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 选择收货地址
   */
  choseAddress() {
    wx.navigateTo({
      url: `../mapAddress/mapAddress`,
    });
  },
  // --------------------------------------生命周期函数
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    const { type, id } = options;
    let title = "新增地址";
    let obj = "";
    if (type == 1) {
      title = "编辑地址";
      // -----通过id来请求地址数据
      if (id) {
        obj = {
          addressId: id,
          receiver: "欧阳平",
          sex: 1,
          sexName: _this.filterSex(1),
          phone: "13518814469",
          shippingAddress: "喜盈门国际大厦（海口市龙华区）",
          houseNumber: "枫林雅郡八栋二单元606",
          tip: 0,
          checked: true,
        };
      }
    }
    this.setData({
      type,
      ...obj,
    });
    wx.setNavigationBarTitle({
      title,
    });
    // 清除地址缓存
    wx.setStorageSync("shipAddress", "");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: async function () {
    try {
      const res = await promiseFun({
        eventName: wx.getStorage,
        params: {
          key: "shipAddress",
        },
      });
      if (res.data) {
        this.setData({
          shippingAddress: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },

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
