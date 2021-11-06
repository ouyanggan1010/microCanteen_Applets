// pages/mapAddress/mapAddress.js
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
    // ---------------------地图中心纬度
    mapCenterLat: "",
    // ---------------------地图中心经度
    mapCenterLng: "",
    // ---------------------标记点
    markers: [],
    // ---------------------在地图上显示圆
    circles: [],
    // ---------------------标记点动画
    ani: "",
    // ---------------------------------------------------------------搜索相关参数
    // ---------------------搜索的关键字
    searchVal: "",
    // ---------------------搜索板块的显示隐藏
    showSearch: false,
    // ---------------------搜索板块的是否获取焦点
    focusBool: false,

    // ---------------------中心的图片的标记点
    showImgMark: true,
    // ---------------------上下拉板块显示隐藏
    showUpDownPlate: false,
    // ---------------------上下拉时更改地图与列表的高度
    changeH: false,
  },
  // ---------------------地图对象
  mapContext: "",
  // ---------------------子组件
  mapPoiList: "",
  mapSearchPoiList: "",
  // ---------------------输入定时
  timing: "",
  // ---------------------滑动方向需要的参数
  lastX: 0,
  lastY: 0,
  // --------------------------------------自定义函数
  /**
   * 点击完成--更改最终的值
   */
  changeData(e) {
    const { showSearch } = this.data;
    let str;
    if (!showSearch) {
      const { pois, activeIndex } = this.mapPoiList.data;
      str = pois[activeIndex].title;
    } else {
      const { pois, activeIndex } = this.mapSearchPoiList.data;
      str = pois[activeIndex].title;
    }
    wx.setStorageSync('shipAddress', str);
    wx.navigateBack()
  },
  /**
   * 点击取消
   */
  cancelBack() { 
    wx.navigateBack()
  },
  /**
   * 滑动--子组件调用更改地图与列表的高度
   */
  changeHEvent(e) {
    const { bool } = e.detail;
    this.setData({
      changeH: bool,
      showUpDownPlate: bool,
    });
  },
  /**
   * 滑动开始
   */
  handletouchtart(e) {
    this.setData({
      lastX: e.touches[0].pageX,
      lastY: e.touches[0].pageY,
    });
  },
  /**
   * 触摸--更改地图与列表的高度
   */
  touchChangeH(e) {
    const { changeH, showSearch, lastX, lastY } = this.data;
    // -------------------判断滑动方向
    let currentX = e.touches[0].pageX;
    let currentY = e.touches[0].pageY;
    let tx = currentX - lastX;
    let ty = currentY - lastY;
    let direction = "";
    if (Math.abs(tx) <= Math.abs(ty)) {
      if (ty < 0) {
        direction = "up";
      }
    }
    //将当前坐标进行保存以进行下一次计算
    this.setData({
      lastX: currentX,
      lastY: currentY,
    });

    if (direction == "up" && !changeH) {
      console.log("touchChangeH", e);
      this.setData({
        changeH: true,
        showUpDownPlate: true,
      });
      if (!showSearch) {
        this.mapPoiList.changeScroll(true);
      } else {
        this.mapSearchPoiList.changeScroll(true);
      }
    }
  },
  /**
   * 点击上下板块--更改地图与列表的高度
   */
  downPlate() {
    const { showSearch } = this.data;
    if (!showSearch) {
      this.mapPoiList.changeScroll(false);
    } else {
      this.mapSearchPoiList.changeScroll(false);
    }
    this.setData({
      changeH: false,
      showUpDownPlate: false,
    });
  },
  /**
   * map---点击标记点时触发e.detail = {markerId}
   */
  markertap(e) {
    const { markerId } = e.detail;
    this.mapSearchPoiList.changeMark(markerId);
  },
  /**
   * 搜索---取消搜索时触发
   */
  async searchCancel() {
    try {
      let { markers } = this.data;
      const { selfCenterLat, selfCenterLng } = this.mapPoiList.data;
      const { mapContext } = this;
      await promiseFun({
        eventName: mapContext.moveToLocation,
        params: {
          longitude: selfCenterLng,
          latitude: selfCenterLat,
        },
      });
      // 重置子组件
      this.mapSearchPoiList.restPoi();
      this.setData({
        showSearch: false,
        focusBool: false,
        searchVal: "",
        showImgMark: true,
        markers: markers.slice(0, 1),
      });
      // 标记动画效果
      this.markerAni();
      this.downPlate();
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 搜索---输入框聚焦时触发
   */
  searchTap() {
    this.setData({
      showSearch: true,
      focusBool: true,
      showImgMark: false,
      changeH: true,
      showUpDownPlate: true,
    });
  },
  /**
   * 搜索---输入框输入内容时触发
   */
  searchChange(event) {
    this.setData({
      searchVal: event.detail,
    });
    const { timing } = this;
    clearTimeout(timing);
    this.timing = setTimeout(() => {
      // 重置子组件
      this.mapSearchPoiList.restPoi();
      if (event.detail) {
        // 重置子组件
        this.mapSearchPoiList.restPoi();
        // 调用子组件的方法获取pois
        this.mapSearchPoiList.searchGetPOI();
      }
    }, 500);
  },
  /**
   * 标记动画
   */
  markerAni() {
    const animation = wx.createAnimation({
      duration: 350,
    });
    animation.top("45%").step().top("50%").step();
    this.setData({
      ani: animation.export(),
    });
  },
  /**
   * 地图视野发生变化时触发
   */
  async regionchange(res) {
    try {
      const _this = this;
      const { showSearch } = this.data;
      const { mapContext } = this;
      if (res.type == "end" && res.causedBy !== "update" && !showSearch) {
        // ------------------给标记点做一下动画效果
        this.markerAni();
        // ------------------获取当前地图中心的坐标点
        const res = await promiseFun({
          eventName: mapContext.getCenterLocation,
        });
        const { latitude, longitude } = res;
        this.setData({
          mapCenterLat: latitude,
          mapCenterLng: longitude,
        });
        // 重置子组件
        this.mapPoiList.restPoi();
        // 调用子组件的方法获取pois
        this.mapPoiList.getShop();
      }
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 在地图渲染更新完成时触发
   */
  mapUpdated() {
    const { showSearch } = this.data;
    if (!showSearch) {
      // 调用子组件的方法获取pois
      this.mapPoiList.getShop();
    }
  },
  /**
   * 点击回到当前位置
   */
  async fixedPoint() {
    try {
      const { longitude, latitude, showSearch } = this.data;
      const { mapContext } = this;
      await promiseFun({
        eventName: mapContext.moveToLocation,
        params: {
          longitude,
          latitude,
        },
      });
      this.setData({
        mapCenterLat: latitude,
        mapCenterLng: longitude,
      });
      if (!showSearch) {
        // 重置子组件
        this.mapPoiList.restPoi();
        // 调用子组件的方法获取pois
        this.mapPoiList.getShop();
      }
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 子组件调用----将地图中心移置某个定位点
   */
  async moveToLocation(e) {
    try {
      const { lat, lng } = e.detail;
      const { mapContext } = this;
      await promiseFun({
        eventName: mapContext.moveToLocation,
        params: {
          longitude: lng,
          latitude: lat,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 子组件调用----给地图在视野中心点添加marker
   */
  addMarkers(e) {
    const { array } = e.detail;
    let { markers } = this.data;
    let mark = [markers.shift(0, 1), ...array];
    this.setData({
      markers: mark,
    });
  },
  // --------------------------------------生命周期函数
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    try {
      const _this = this;
      // --------------获取子组件
      this.mapPoiList = this.selectComponent("#mapPoiList");
      // --------------获取搜索子组件
      this.mapSearchPoiList = this.selectComponent("#mapSearchPoiList");

      // --------------创建 map 上下文 MapContext 对象
      this.mapContext = wx.createMapContext("myMap");
      // --------------获取当前的位置的经纬度
      const res1 = await promiseFun({
        eventName: wx.getLocation,
        params: { type: "gcj02" },
      });
      let la = res1.latitude;
      let lo = res1.longitude;
      _this.setData({
        mapCenterLat: la,
        mapCenterLng: lo,
        latitude: la,
        longitude: lo,
        circles: [
          {
            latitude: la,
            longitude: lo,
            radius: 30,
            color: "#1485ef30",
            fillColor: "#1485ef30",
          },
        ],
        markers: [
          {
            id: 1,
            latitude: la,
            longitude: lo,
            iconPath: "../../styles/images/dingdian.png",
            width: 30,
            height: 30,
            anchor: { x: 0.5, y: 0.5 },
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
