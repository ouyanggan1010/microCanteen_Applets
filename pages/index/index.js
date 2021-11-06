//Page Object
Page({
  data: {
    // ---------------------左上角距离顶部的数值
    reminderTop: 0,
    // ---------------------当前用户名
    userName: "",
    // ---------------------轮播数组
    swiperItems: [
      {
        id: "indexSwiper_001",
        pic: "../../styles/imagesTest/奈雪杯.jpg",
        link: "",
      },
      {
        id: "indexSwiper_002",
        pic: "../../styles/imagesTest/拼单.jpg",
        link: "",
      },
      {
        id: "indexSwiper_003",
        pic: "../../styles/imagesTest/端午粽子.jpg",
        link: "",
      },
      {
        id: "indexSwiper_004",
        pic: "../../styles/imagesTest/茶包.jpg",
        link: "",
      },
    ],
    // ---------------------我的积分
    scores: 29,
    // ---------------------会员新鲜事
    member: [
      {
        id: "member_001",
        pic: "../../styles/imagesTest/美术馆.jpg",
        leftCnt: "CUP美术馆",
        rightCnt: "牵着手，握着爱",
      },
      {
        id: "member_002",
        pic: "../../styles/imagesTest/奈雪拼单.jpg",
        leftCnt: "奈雪拼单",
        rightCnt: "最高优惠30元",
      },
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const res = wx.getMenuButtonBoundingClientRect();
    console.log("监听页面加载", res.top);
    this.setData({
      reminderTop: res.top,
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
