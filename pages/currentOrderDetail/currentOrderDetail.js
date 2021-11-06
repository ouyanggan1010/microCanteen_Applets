// pages/currentOrderDetail/currentOrderDetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // ---------------------单个订单的id，通过id获取订单详情数据
    orderId: "",
  },
  // ---------------------子组件的对象
  child:"",
  // --------------------------------------自定义函数
  /**
   * 倒计时停止
   */
  stopTime(e) {
    console.log("倒计时停止====",e.detail.id);
  },
  /**
   * 调用子组件，重新获取订单详情
   */
  restGetOrder() {
    this.child.getDetails();
  },
  // --------------------------------------生命周期函数
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    this.child = this.selectComponent("#orderDetail");
    this.setData({
      orderId: options.id,
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
});
