// components/StoreLists/StoreLists.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // ---------------------门店数据
    storeLists: {
      type: Array,
    },
    // ---------------------选中项的id
    activeId: {
      type: String,
      value: "",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 拨打店铺电话
     */
    makePhone(e) {
      const { phone } = e.currentTarget.dataset;
      this.triggerEvent("makePhoneP", { phone });
    },
    /**
     * 跳转到位置信息页面
     */
    toLocation(e) {
      console.log(e);
      const store = JSON.stringify(e.currentTarget.dataset.store);
      this.triggerEvent("toLocationP", { store });
    },
    /**
     * 返回到上级页面
     */
    backMeal(e) {
      const { storeid } = e.currentTarget.dataset;
      this.triggerEvent("backMealP", { storeId:storeid });
    },
  },
});
