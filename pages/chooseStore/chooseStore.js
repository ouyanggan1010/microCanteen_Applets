// pages/chooseStore/chooseStore.js
// ---------------------请求
import "../../lib/runtime/runtime.js";
// ---------------------简化成promise
import { promiseFun } from "../../utils/promise.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // ---------------------城市与地区
    cityArea:"海口市",
    // ---------------------当前位置纬度
    latitude: "",
    // ---------------------当前位置经度
    longitude: "",
    // ---------------------地图的显示隐藏
    showMap: true,
    // ---------------------常用店铺数组信息
    commonlyLists:[{
      id: "store_001",
      storeAddress:
        "海南省海口市龙华区迎宾路18号海口新城吾悦广场一层1026-1027铺",
      storeName: "海口吾悦sd广场店",
      mark: "可外送",
      openTime: "10:00-22:00",
      distance: "124m",
      storePhone: "13518814469",
      latitude: "19.977304",
      longitude: "110.337662",
    }],
    // ---------------------店铺数组信息
    storeLists: [],
    // ---------------------选中的某一项
    activeId: "store_001",
  },
  // --------------------------------------自定义函数
  /**
   * 点击展开收起地图
   */
  upDownMap() {
    const { showMap } = this.data;
    this.setData({
      showMap: !showMap,
    });
  },
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
   * 跳转到位置信息页面
   */
  toLocation(e) {
    console.log(e);
    const { store } = e.detail;
    wx.navigateTo({
      url: "/pages/locationInformation/locationInformation?store=" + store,
    });
  },
  /**
   * 返回到上级页面
   */
  backMeal(e) {
    let pages = getCurrentPages(); // 当前页，
    let prevPage = pages[pages.length - 2]; // 上一页
    console.log("返回到上级页面",e.detail)
    const {storeId} = e.detail;
    if (prevPage.route == "pages/meal/meal") {
      prevPage.backChangeSelfCollection(storeId);
      wx.navigateBack();
    }else if(prevPage.route == "pages/orderSettlement/orderSettlement"){
      console.log('=====从结算页面过来，并需要跳转到点餐页')
      wx.switchTab({
        url:"/pages/meal/meal",
        success(){
          setTimeout(()=>{
            let page = getCurrentPages().pop();
            if(page == undefined || page == null) return;
            page.backChangeSelfCollection(storeId);
          },1000)
        }
      })
    }
  },
  /**
   * 由切换城市页面返回过来的
   */
  backSwitchCity(data) {
    console.log("由切换城市页面返回过来的", data)
    const { pId, cId } = data;
    let str = "更改市";
    if (cId) {
      str = "更改市 更改区";
    }
    this.setData({
      cityArea:str
    })
  },
  // --------------------------------------生命周期函数
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    try {
      const storeLists = [
        {
          id: "store_001",
          storeAddress:
            "海南省海口市龙华区迎宾路18号海口新城吾悦广场一层1026-1027铺",
          storeName: "海口吾悦广场店",
          mark: "可外送",
          openTime: "10:00-22:00",
          distance: "124m",
          storePhone: "13518814469",
          latitude: "19.977304",
          longitude: "110.337662",
        },{
          id: "store_002",
          storeAddress:
            "海南省海口市龙华区迎宾路18号海口新城吾悦广场一层1026-1027铺",
          storeName: "212海口吾悦广场店",
          mark: "可外送",
          openTime: "10:00-22:00",
          distance: "124m",
          storePhone: "13518814469",
          latitude: "19.977304",
          longitude: "110.337662",
        }
      ];
      // --------------创建 map 上下文 MapContext 对象
      this.mapContext = wx.createMapContext("myMap");

      this.setData({
        storeLists,
        latitude: storeLists[0].latitude,
        longitude: storeLists[0].longitude,
        markers: [
          {
            id: 1,
            latitude: storeLists[0].latitude,
            longitude: storeLists[0].longitude,
            iconPath: "../../styles/images/tee.png",
            width: 25,
            height: 25,
            anchor: { x: 0.5, y: 1 },
            callout: {
              content: storeLists[0].storeName,
              bgColor: "#ffffff",
              display: "ALWAYS",
              borderRadius: 4,
              padding: 4,
            },
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
