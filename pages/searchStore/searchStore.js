// pages/searchStore/searchStore.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // ---------------------搜索框输入的值
    searchVal: "",
    // ---------------------搜索的数据
    searchLists: [],
  },
  // ---------------------输入定时
  timing: "",

  // --------------------------------------自定义函数
  /**
   * 搜索---取消搜索时触发
   */
  searchCancel() {
    wx.navigateBack();
  },
  /**
   * 搜索---输入框输入内容时触发
   */
  searchChange(event) {
    this.setData({
      searchVal: event.detail,
    });
    const { timing } = this;
    // 初始化数据
    clearTimeout(timing);
    this.setData({
      searchLists: [],
    });
    // 判断输入有值则进行请求
    if (event.detail) {
      this.timing = setTimeout(() => {
        this.getSearchLists();
      }, 500);
    }
  },
  /**
   * 获取搜索的数据
   */
  getSearchLists() {
    this.setData({
      searchLists: [],
    });
    let arry = [];
    for (let i = 0; i < 5; i++) {
      let obj = {
        id: "search_00" + (i + 1),
        storeName: "海口吾悦广场店" + (i + 1),
        address: "海南省海口市龙华区迎宾路18号海口新城吾悦广场一层1026-1027铺",
        distance: "1.2km",
      };
      arry.push(obj);
    }
    this.setData({
      searchLists: arry,
    });
  },
  /**
   * 点击返回到点餐页面
   */
  backMeal(e) {
    console.log("点击返回到点餐页面", e.currentTarget.dataset);
    const { id } = e.currentTarget.dataset;
    wx.reLaunch({
      url: "/pages/meal/meal?selfId=" + id,
    });
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
