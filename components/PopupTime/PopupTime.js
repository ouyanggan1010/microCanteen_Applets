// components/PopupTime/PopupTime.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: "1",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // ---------------------自取的取餐时间弹框-时间段选中下标
    activeTime: 0,
    // ---------------------自取的取餐时间所有时间段
    totalTimes: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 自取取餐时间弹框-左侧时间选中事件
     */
    clickTotalTime(e) {
      const { index } = e.currentTarget.dataset;
      this.setData({
        activeTime: index,
      });
    },
    /**
     * 获取外卖/自取数据
     */
    getPopupData() {
      const { type } = this.data;
      let firstCha = 5400000;
      // 判断在时间小于多少才可行
      let finTime = new Date().setHours(21, 50, 0);
      // 1表示自取；2表示外卖
      if (type == "1") {
        firstCha = 3600000;
        finTime = new Date().setHours(22, 0, 0);
      }

      // 获取毫秒数
      const nowS = new Date().getTime();
      // 获取小时
      const nowH = new Date().getHours();

      let arry = [];
      // 判断是否是第一个
      let bool = true;
      // 获取每个part的第一个时间毫秒
      let firstP = 0;
      // 循环左侧数据
      for (let i = nowH; i < 22; i++) {
        if (i % 2 != 0) {
          const last = i + 1;
          const first = i - 1;
          // 设置小时
          const getS = new Date().setHours(i, 55);
          const cha = (getS - nowS) / 3600000;
          // 获取每个part的最后一个时间毫秒
          let lastP = new Date().setHours(last, 0, 0);
          let parts = [];
          // --------------------------------------判断是否可以有值
          if (bool && cha > 1) {
            // 计算出第一个时间段
            const p = new Date(nowS + firstCha);
            let h = p.getHours();
            let m = p.getMinutes();
            let newM = parseInt(m / 5) * 5 + 5;
            firstP = new Date().setHours(h, newM, 0);
            bool = false;
          }
          if ((bool && cha > 1) || !bool) {
            for (let k = firstP; k < lastP; k = k + 900000) {
              if (k < finTime) {
                const partMi = new Date(k);
                const pH = partMi.getHours();
                const pM = partMi.getMinutes();
                let gH = pH < 10 ? "0" + pH : pH;
                let gM = pM < 10 ? "0" + pM : pM;
                parts.push(gH + ":" + gM);
              }
              // 判断是最后一个
              if (k + 900000 >= lastP) {
                firstP = k + 900000;
              }
            }
            let str = first + ":00" + "~" + last + ":00";
            arry.push({
              title: str,
              parts,
            });
          }
        }
      }
      this.setData({
        totalTimes: arry,
      });
    },
    /**
     * 点击自取的时间段，并修改自取的数据
     */
    getPartTime(e) {
      const { cnt } = e.currentTarget.dataset;
      console.log("点击自取的时间段，并修改自取的数据", cnt);
      this.triggerEvent("changePartTimeP", { cnt });
    },
  },
});
