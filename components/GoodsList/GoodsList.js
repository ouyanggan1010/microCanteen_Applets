// components/GoodsList/GoodsList.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // ---------------------列表左侧分类
    listsLeft: {
      type: Array,
      value: [],
    },
    // ---------------------列表右侧商品分类
    listsRight: {
      type: Array,
      value: [],
    },
    // ---------------------是否在可售时间
    restDate: {
      type: Boolean,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // ---------------------产品分类左侧选择项
    itemTypeL: 0,
    activeR: 0,
    // ---------------------产品分类右侧选择项
    itemTypeR: 0,
    // ---------------------右侧产品轮播
    swiperItems: [
      {
        id: "rightSwiper_001",
        pic: "../../styles/imagesTest/奈雪杯.jpg",
        link: "",
      },
      {
        id: "rightSwiper_002",
        pic: "../../styles/imagesTest/拼单.jpg",
        link: "",
      },
      {
        id: "rightSwiper_003",
        pic: "../../styles/imagesTest/端午粽子.jpg",
        link: "",
      },
      {
        id: "rightSwiper_004",
        pic: "../../styles/imagesTest/茶包.jpg",
        link: "",
      },
    ],
    // ---------------------右侧滚动条滚动数据
    scrollTopR: 0,
    top: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击增加减少按钮
     */
    changeShopCart(e) {
      const { type, cid } = e.currentTarget.dataset;
      this.triggerEvent("changeShopCart", { type, cid });
    },
    /**
     * 点击查看商品详情
     */
    foodModal(e) {
      const { pindex, cindex } = e.currentTarget.dataset;
      this.triggerEvent("foodModalC", { pindex, cindex });
    },
    /**
     * 产品左侧分类点击切换事件
     */
    changeItem(e) {
      const { index } = e.target.dataset;
      this.setData({
        itemTypeL: index,
        activeR: index,
      });
    },
    /**
     * 产品右侧分类滚动切换事件
     */
    foodScroolEnd(res) {
      const { scrollTop } = res.detail;
      this.setData({
        scrollTopR: scrollTop,
      });
      const { top, scrollTopR, activeR } = this.data;
      const len = top.length;
      for (var i = 0; i < len; i++) {
        if (
          top[i] - top[0] <= scrollTopR &&
          i < len - 1 &&
          top[i + 1] - top[0] > scrollTopR
        ) {
          const k = i - 1 > -1 ? i - 1 : 0;
          if (activeR != k) {
            this.setData({
              activeR: k,
              itemTypeR: k,
            });
          }
          break;
        }
      }
    },
    /**
     * 点击已售罄显示隐藏事件
     */
    showHideSoldOut(e) {
      const { pindex } = e.currentTarget.dataset;
      let arr = this.data.listsRight;
      arr[pindex].showHide = !arr[pindex].showHide;
      this.setData({
        listsRight: arr,
      });
      // 获取所有top数据
      this.getAllTop();
    },
    /**
     * 获取所有的top值
     */
    getAllTop() {
      const { listsLeft } = this.data;
      //获取右侧列表所有的top值
      let top2 = new Array();
      for (var i = 0; i < listsLeft.length + 1; i++) {
        wx.createSelectorQuery()
          .in(this)
          .select("#idRight_" + i)
          .boundingClientRect(function (rect) {
            var isTop = rect.top - 157;
            top2.push(isTop);
          })
          .exec();
      }
      // 将所有数据放入data中进行更新
      this.setData({
        top: top2,
      });
    },
  },
  /**
   * 生命周期函数
   */
  lifetimes: {
    // 在组件在视图层布局完成后执行
    ready: function () {
      // ----------获取所有top数据
      this.getAllTop();
    },
  },
});
