// ---------------------请求
import "../../lib/runtime/runtime.js";
// ---------------------简化成promise
import { promiseFun } from "../../utils/promise.js";

// components/MapPoiList/MapPoiList.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // ---------------------地图视野中心点
    mapCenterLat: {
      type: Number,
    },
    mapCenterLng: {
      type: Number,
    },
    // ---------------------地图当前定位点
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
    // ---------------------判断：1表示是搜索获取pois，2表示是根据视野中心点获取pois
    type: {
      type: Number,
    },
    // ---------------------搜索是否有内容
    searchVal: {
      type: String,
      value: "",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // ---------------------POI每页几条
    pageSize: 20,
    // ---------------------POI第几页
    pageIndex: 1,
    // ---------------------POI是否可以请求
    poiBool: true,
    // ---------------------POI全部内容
    pois: [],
    // ---------------------POI选中的序号
    activeIndex: 0,
    // ---------------------自己选中的中心点经纬度
    selfCenterLat: "",
    selfCenterLng: "",
    // ---------------------搜索需要标记的点的数组
    marks: [],
    // ---------------------滚动组件中某子元素的id，可以设定滚动到哪个子元素
    scrollId: "",
    // ---------------------滚动的top
    scrollTop: 0,
    allTop: 0,
    // ---------------------是否可以滚动
    scrollY: false,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 重置
     */
    restPoi() {
      this.setData({
        pageIndex: 1,
        poiBool: true,
        activeIndex: 0,
        pois: [],
        marks: [],
        selfCenterLat: "",
        selfCenterLng: "",
        scrollId: "",
      });
    },
    /**
     * 父组件调用--让scroll-view是否可以滚动，在弹起时滚动某个位置
     */
    changeScroll(bool) {
      let { allTop } = this.data;
      this.setData({
        scrollY: bool,
      });
      if (bool) {
        this.setData({
          scrollTop: allTop + 100,
        });
      }
    },
    /**
     * 滚动时触发
     */
    scrollview(e) {
      this.setData({
        allTop: e.detail.scrollTop,
      });
    },
    /**
     * 滚动到底部时触发
     */
    scrolltolower(e) {
      setTimeout(() => {
        this.getShop();
      }, 800);
    },
    /**
     * 滚动到顶部时触发
     */
    scrolltoupper() {
      this.triggerEvent("pChangeH", { bool: false });
      this.setData({
        scrollY: false,
      });
    },
    /**
     * 父组件调用子组件更改mark
     */
    changeMark(id) {
      const { pois, marks } = this.data;
      // 根据标记的数值id，得到对应的标记对象的下标
      const k = marks.findIndex((item) => {
        return item.id == id;
      });
      const userId = marks[k].pId;
      // 通过标记对象的pId来得到poi数组中对应的对象的下标
      const index = pois.findIndex((item) => {
        return item.id == userId;
      });
      const { lat, lng } = pois[index].location;

      this.setData({
        scrollId: userId,
      });
      this.commonChangeMark({ lat, lng, id: userId, index });
    },
    /**
     * 点击poi勾选
     */
    tapCheckPoi(e) {
      const { pois } = this.data;
      const { index } = e.currentTarget.dataset;
      const { lat, lng } = pois[index].location;
      const id = pois[index].id;
      const str = pois[index].title;
 
      this.commonChangeMark({ lat, lng, id, index });
    },
    /**
     * 数据请求共同的部分
     */
    commonChangeMark({ lat, lng, id, index }) {
      const { type } = this.data;
      // 表示是搜索
      if (type == 1) {
        let { marks } = this.data;
        // 判断当前点击的是否之前已点击过，是则将当前的变成定位图标，否则将图标变成点图标
        let array = marks.map((item) => {
          if (id == item.pId) {
            item.iconPath = "../../styles/images/datz.png";
            item.width = 50;
            item.height = 50;
          } else {
            item.iconPath = "../../styles/images/poi2.png";
            item.width = 25;
            item.height = 25;
          }
          return item;
        });
        // 将数组所有元素进行判断，全部都为点击过则返回true
        const bool = array.every((item) => {
          return item.pId != id;
        });
        if (bool) {
          let obj = {
            id: marks.length + 2,
            pId: id,
            latitude: lat,
            longitude: lng,
            iconPath: "../../styles/images/datz.png",
            width: 50,
            height: 50,
            anchor: { x: 0.5, y: 1 },
          };
          array.push(obj);
        }
        // 将更改过的数据放入data中
        this.setData({
          marks: array,
        });
        // 调用父元素的方法，添加markers
        this.triggerEvent("pAddMarkers", { array });
      }
      // 将更改过的数据放入data中
      this.setData({
        activeIndex: index,
        selfCenterLat: lat,
        selfCenterLng: lng,
      });
      // 调用父元素的方法，移动地图到某个经纬度为视野中心
      this.triggerEvent("pMoveToLocation", { lat, lng });
    },
    /**
     * 数据请求共同的部分
     */
    async commonGet(result, poiCount) {
      const {
        longitude,
        latitude,
        mapCenterLat,
        mapCenterLng,
        pageIndex,
        pois,
        activeIndex,
        type,
      } = this.data;
      let arrayAddress = [];
      // -----------计算离当前定位的距离，得到整理好的数组
      const arrayTos = result.map((item) => {
        let obj = {
          location: {
            lat: item.location.lat,
            lng: item.location.lng,
          },
        };
        return obj;
      });
      // -----------计算所有POI到当前定位点的距离
      const res2 = await promiseFun({
        eventName: "calculateDistance",
        params: {
          from: {
            latitude,
            longitude,
          },
          to: arrayTos,
        },
        type: "qqmapsdk",
      });
      // -----------将得到的数组进行整合过滤
      arrayAddress = res2.result.elements.map((item) => {
        let str = "";
        if (item.distance < 100) {
          str = "100m内";
        } else if (item.distance >= 1000) {
          str = `${(item.distance / 1000).toFixed(1)}km`;
        } else {
          str = `${item.distance}m`;
        }
        return str;
      });
      // -----------将获取到的值全部放入data
      let active = activeIndex;
      const poisNew = result.map((item, index) => {
        const { lat, lng } = item.location;
        if (mapCenterLat == lat && mapCenterLng == lng) {
          active = index;
        } else if (pageIndex == 1 && index == 0) {
          active = 0;
        }
        let obj = {
          id: item.id,
          title: item.title,
          distance: arrayAddress[index],
          address: item.address,
          location: item.location,
        };
        return obj;
      });
      const allPois = pois.concat(poisNew);
      // -----------判断当前poi数组的总条数是否小于地图的poi总条数
      const bool = allPois.length < poiCount ? true : false;

      // const { lat, lng } = result[active].location;
      // this.triggerEvent("pMoveToLocation", { lat, lng });

      this.setData({
        pois: allPois,
        pageIndex: pageIndex + 1,
        poiBool: bool,
        activeIndex: type == 1 ? "" : active,
      });
    },
    /**
     * 根据关键词获取POI
     */
    async searchGetPOI() {
      try {
        setTimeout(async () => {
          const {
            searchVal,
            longitude,
            latitude,
            pageSize,
            pageIndex,
            poiBool,
          } = this.data;
          // 判断是否可以进入请求
          if (poiBool) {
            // -----------获取当前中心点附近的POI
            const res1 = await promiseFun({
              eventName: "getSuggestion",
              params: {
                keyword: searchVal,
                location: `${latitude},${longitude}`,
                page_size: pageSize,
                page_index: pageIndex,
                policy: 1,
              },
              type: "qqmapsdk",
            });
            const result = res1.data;
            const poiCount = res1.count;
            this.commonGet(result, poiCount);
          }
        }, 500);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * 获取视野中心周边的POI
     */
    getShop() {
      try {
        setTimeout(async () => {
          const {
            longitude,
            latitude,
            mapCenterLat,
            mapCenterLng,
            selfCenterLat,
            selfCenterLng,
            pageSize,
            pageIndex,
            poiBool,
          } = this.data;
          // 判断是否可以进入请求
          if (poiBool) {
            // -----------获取当前中心点附近的POI
            const res1 = await promiseFun({
              eventName: "reverseGeocoder",
              params: {
                location: {
                  latitude: mapCenterLat,
                  longitude: mapCenterLng,
                },
                get_poi: 1,
                poi_options: `policy=2;radius=1000;page_size=${pageSize};page_index=${pageIndex}`,
              },
              type: "qqmapsdk",
            });
            const result = res1.result.pois;
            const poiCount = res1.result.poi_count;
            this.commonGet(result, poiCount);
            this.setData({
              selfCenterLat:
                selfCenterLat && pageIndex > 1 ? selfCenterLat : mapCenterLat,
              selfCenterLng:
                selfCenterLng && pageIndex > 1 ? selfCenterLng : mapCenterLng,
            });
          }
        }, 500);
      } catch (error) {
        console.log(error);
      }
    },
  },
  /**
   * 组件的生命周期
   */
  lifetimes: {
    // -------------------在组件在视图层布局完成后执行
    ready: function () {
      const { type } = this.data;
      if (type == 1) {
        this.setData({
          scrollY: true,
        });
      }
    },
  },
});
