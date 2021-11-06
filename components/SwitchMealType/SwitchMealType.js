// components/SwitchMealType/SwitchMealType.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: "0",
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
     * 自取、外卖选择项的切换事件
     */
    changePick(e) {
      const { type } = e.target.dataset;
      const { pickType } = this.data;
      // 防止重复点击
      if (type != pickType) {
        this.triggerEvent("changePickP", {type})
      }
    },
  },
});
