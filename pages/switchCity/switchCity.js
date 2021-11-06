// pages/switchCity/switchCity.js
const computedBehavior = require("miniprogram-computed").behavior;
Component({
  behaviors: [computedBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    // ---------------------tab当前选中项
    tabActive: 0,
    // ---------------------城市tab选中的值的id
    selectCityId: "",
    // ---------------------索引栏自定义左侧选中的数据
    leftCityId: "",
    // ---------------------索引栏自定义左侧选中的数据index
    leftCityIndex: -1,
    // ---------------------索引栏自定义右侧
    indexList: [
      "A",
      "B",
      "C",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "M",
      "N",
      "Q",
      "R",
      "S",
      "T",
      "W",
      "X",
      "Y",
      "Z",
    ],
    // ---------------------索引栏自定义左侧数据
    leftLists: ["北京市", "鞍山市"],
    dataLists: {
      A: [
        {
          id: "aBar_001",
          title: "鞍山市",
          district: [
            {
              id: "aBarD_001",
              title: "铁东区",
            },
            {
              id: "aBarD_002",
              title: "立山区",
            },
          ],
        },
      ],
      B: [
        {
          id: "bBar_001",
          title: "北京市",
          district: [
            {
              id: "bBarD_001",
              title: "东城区",
            },
            {
              id: "bBarD_002",
              title: "西城区",
            },
            {
              id: "bBarD_003",
              title: "朝阳区",
            },
            {
              id: "bBarD_004",
              title: "丰台区",
            },
            {
              id: "bBarD_005",
              title: "石景山区",
            },
            {
              id: "bBarD_006",
              title: "海淀区",
            },
            {
              id: "bBarD_007",
              title: "房山区",
            },
            {
              id: "bBarD_008",
              title: "顺义区",
            },
            {
              id: "bBarD_009",
              title: "昌平区",
            },
            {
              id: "bBarD_010",
              title: "大兴区",
            },
          ],
        },
        {
          id: "bBar_002",
          title: "保定市",
          district: [
            {
              id: "bBarD_001",
              title: "市辖区",
            },
            {
              id: "bBarD_002",
              title: "竞秀区",
            },
          ],
        },
        {
          id: "bBar_003",
          title: "宝鸡市",
          district: [
            {
              id: "bBarD_001",
              title: "市辖区",
            },
          ],
        },
      ],
      C: [
        {
          id: "cBar_001",
          title: "长春市",
          district: [
            {
              id: "cBarD_001",
              title: "市辖区",
            },
            {
              id: "cBarD_002",
              title: "南关区",
            },
            {
              id: "cBarD_003",
              title: "宽城区",
            },
            {
              id: "cBarD_004",
              title: "朝阳区",
            },
          ],
        },
        {
          id: "cBar_002",
          title: "常州市",
          district: [
            {
              id: "cBarD_001",
              title: "天宁区",
            },
            {
              id: "cBarD_002",
              title: "钟楼区",
            },
            {
              id: "cBarD_003",
              title: "新北区",
            },
            {
              id: "cBarD_004",
              title: "武进区",
            },
          ],
        },
        {
          id: "cBar_003",
          title: "长沙市",
          district: [
            {
              id: "cBarD_001",
              title: "芙蓉区",
            },
            {
              id: "cBarD_002",
              title: "岳麓区",
            },
            {
              id: "cBarD_003",
              title: "开福区",
            },
            {
              id: "cBarD_004",
              title: "雨花区",
            },
            {
              id: "cBarD_005",
              title: "望城区",
            },
          ],
        },
        {
          id: "cBar_004",
          title: "重庆市",
        },
        {
          id: "cBar_005",
          title: "成都市",
        },
      ],
      D: [
        {
          id: "dBar_001",
          title: "大连市",
        },
        {
          id: "dBar_002",
          title: "东莞市",
        },
      ],
      F: [
        {
          id: "fBar_001",
          title: "福州市",
        },
        {
          id: "fBar_002",
          title: "佛山市",
        },
      ],
      G: [
        {
          id: "gBar_001",
          title: "赣州市",
        },
        {
          id: "gBar_002",
          title: "广州市",
        },
        {
          id: "gBar_003",
          title: "桂林市",
        },
        {
          id: "gBar_004",
          title: "贵阳市",
        },
      ],
      H: [
        {
          id: "hBar_001",
          title: "呼和浩特市",
        },
        {
          id: "hBar_002",
          title: "哈尔滨市",
        },
        {
          id: "hBar_003",
          title: "淮安市",
        },
        {
          id: "hBar_004",
          title: "杭州市",
        },
        {
          id: "hBar_005",
          title: "湖州市",
        },
        {
          id: "hBar_006",
          title: "合肥市",
        },
        {
          id: "hBar_007",
          title: "惠州市",
        },
        {
          id: "hBar_008",
          title: "海口市",
        },
      ],
      J: [
        {
          id: "jBar_001",
          title: "嘉兴市",
        },
        {
          id: "jBar_002",
          title: "金华市",
        },
        {
          id: "jBar_003",
          title: "九江市",
        },
        {
          id: "jBar_004",
          title: "济南市",
        },
        {
          id: "jBar_005",
          title: "江门市",
        },
        {
          id: "jBar_006",
          title: "揭阳市",
        },
      ],
      K: [
        {
          id: "kBar_001",
          title: "昆明市",
        },
      ],
      L: [
        {
          id: "lBar_001",
          title: "洛阳市",
        },
        {
          id: "lBar_002",
          title: "柳州市",
        },
        {
          id: "lBar_003",
          title: "丽江市",
        },
        {
          id: "lBar_004",
          title: "兰州市",
        },
      ],
      M: [
        {
          id: "mBar_001",
          title: "绵阳市",
        },
      ],
      N: [
        {
          id: "nBar_001",
          title: "南京市",
        },
        {
          id: "nBar_002",
          title: "南通市",
        },
        {
          id: "nBar_003",
          title: "宁波市",
        },
        {
          id: "nBar_004",
          title: "南昌市",
        },
        {
          id: "nBar_005",
          title: "南宁市",
        },
      ],
      Q: [
        {
          id: "qBar_001",
          title: "衢州市",
        },
        {
          id: "qBar_002",
          title: "泉州市",
        },
        {
          id: "qBar_003",
          title: "青岛市",
        },
      ],
      R: [
        {
          id: "rBar_001",
          title: "日碦则市",
        },
      ],
      S: [
        {
          id: "sBar_001",
          title: "石家庄市",
        },
        {
          id: "sBar_002",
          title: "沈阳市",
        },
        {
          id: "sBar_003",
          title: "上海市",
        },
        {
          id: "sBar_004",
          title: "苏州市",
        },
        {
          id: "sBar_005",
          title: "绍兴市",
        },
        {
          id: "sBar_006",
          title: "深州市",
        },
        {
          id: "sBar_007",
          title: "汕头市",
        },
        {
          id: "sBar_008",
          title: "三亚市",
        },
      ],
      T: [
        {
          id: "tBar_001",
          title: "天津市",
        },
        {
          id: "tBar_002",
          title: "太原市",
        },
        {
          id: "tBar_003",
          title: "泰州市",
        },
        {
          id: "tBar_004",
          title: "台州市",
        },
      ],
      W: [
        {
          id: "wBar_001",
          title: "无锡市",
        },
        {
          id: "wBar_002",
          title: "温州市",
        },
        {
          id: "wBar_003",
          title: "芜湖市",
        },
        {
          id: "wBar_004",
          title: "武汉市",
        },
      ],
      X: [
        {
          id: "xBar_001",
          title: "徐州市",
        },
        {
          id: "xBar_002",
          title: "厦门市",
        },
        {
          id: "xBar_003",
          title: "襄阳市",
        },
        {
          id: "xBar_004",
          title: "西安市",
        },
        {
          id: "xBar_005",
          title: "西宁市",
        },
        {
          id: "xBar_006",
          title: "香港岛",
        },
      ],
      Y: [
        {
          id: "yBar_001",
          title: "盐城市",
        },
        {
          id: "yBar_002",
          title: "扬州市",
        },
        {
          id: "yBar_003",
          title: "烟台市",
        },
        {
          id: "yBar_004",
          title: "宜昌市",
        },
        {
          id: "yBar_005",
          title: "阳江市",
        },
      ],
      Z: [
        {
          id: "zBar_001",
          title: "镇江市",
        },
        {
          id: "zBar_002",
          title: "郑州市",
        },
        {
          id: "zBar_003",
          title: "珠海市",
        },
        {
          id: "zBar_004",
          title: "中山市",
        },
      ],
    },
  },
  /**
   * 计算属性
   */
  computed: {
    // ---------------------城市tab是否可选中
    disabledBool(data) {
      return data.selectCityId ? false : true;
    },
    // ---------------------地区列表
    areaLists(data) {
      const obj = data.dataLists;
      let arry = [];
      for (let k in obj) {
        let i = obj[k].findIndex((item) => {
          return item.id == data.selectCityId;
        });
        if (i > -1) {
          arry = obj[k][i].district;
          break;
        }
      }
      return arry;
    },
  },
  /**
   * 所有方法与生命周期方法
   */
  methods: {
    // --------------------------------------自定义函数
    /**
     * 点击地区返回
     */
    backChooseStore(e) {
      let pages = getCurrentPages(); // 当前页，
      let prevPage = pages[pages.length - 2]; // 上一页
      if (prevPage.route == "pages/chooseStore/chooseStore") {
        prevPage.backSwitchCity({
          pId: this.data.selectCityId,
          cId: e.currentTarget.dataset.areaid,
        });
      }
      wx.navigateBack();
    },
    /**
     * tabs当前激活的标签改变时触发
     */
    onChangeTab(e) {
      const { index } = e.detail;
      this.setData({
        tabActive: index,
      });
    },
    /**
     * 选中字符时触发
     */
    selectIndex(e) {
      console.log("选中字符时触发==", e.currentTarget.dataset);
      const { indexid, index } = e.currentTarget.dataset;
      this.setData({
        leftCityId: indexid,
        leftCityIndex: index,
      });
      setTimeout(() => {
        this.setData({
          leftCityIndex: -1,
        });
      }, 200);
    },
    /**
     * 城市标签点击事件
     */
    selectCity(e) {
      console.log(e.currentTarget.dataset);
      const { id } = e.currentTarget.dataset;
      this.setData({
        selectCityId: id,
        tabActive: 1,
      });
    },
    // --------------------------------------生命周期函数
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
  },
});
