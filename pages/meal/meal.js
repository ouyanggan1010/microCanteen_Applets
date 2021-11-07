// ---------------------请求
import "../../lib/runtime/runtime.js";
// ---------------------简化成promise
import { promiseFun } from "../../utils/promise.js";

const { foodLists, shopCart } = require("../../styles/json/foodList.js");
const { getUserLocation } = require("../../utils/util.js");
const computedBehavior = require("miniprogram-computed").behavior;
const app = getApp();
// pages/meal/meal.js
Component({
  behaviors: [computedBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    // ---------------------左上角距离顶部的数值
    topPad: 0,
    // ---------------------左上角顶部标题的数值
    titleLineH: 0,
    // ---------------------当前时间段是否是可以点餐
    restDate: app.restDate,
    // ---------------------自取、外卖选择项
    pickType: "0",
    // ---------------------自取的数据
    selfCollection: {
      id: "self_001",
      shopName: "",
      distance: "",
    },
    // ---------------------外卖的位置信息数据
    takeaway: {
      id: "address_001",
      address: "龙华区城西镇枫林雅郡八栋二单元606",
      shopName: "海口吾悦广场",
    },
    // ---------------------通知消息
    notice: "储值有礼，最高享买1赠1券",
    // ---------------------列表左侧分类
    foodListsLeft: [],
    // ---------------------列表右侧商品分类
    foodListsRight: [],
    // ---------------------购物车{id:"",title:"",pic:"",price:"",standardSel:"",num:1}
    foodCart: [],
    // ---------------------商品详情弹出层显示隐藏
    showFoodDetail: false,
    // ---------------------商品详情弹出层---数据
    foodDetailObj: {},
    // ---------------------拼单弹框
    showFightOrder: false,
    // ---------------------当前页面是否显示
    isPage: false,
  },
  /**
   * 不需要在界面中展示的数据
   */
  // ---------------------当前坐标经纬度
  geographical: {
    la: "",
    lo: "",
  },
  /**
   * 计算属性
   */
  computed: {
    // ---------------------购物车的显示隐藏
    shopCartShow(data) {
      return data.foodCart.length > 0 ? true : false;
    },
  },
  /**
   * 所有方法与生命周期方法
   */
  methods: {
    /**
     * 自取、外卖选择项的切换事件
     */
    changePick(e) {
      const { type } = e.detail;
      const { selfCollection } = this.data;
      if (type == 1) {
        wx.navigateTo({
          url: `/pages/myAddress/myAddress?store=${selfCollection.shopName}`,
        });
      } else {
        this.setData({
          pickType: type,
        });
      }
    },
    // --------------------------------------拼单
    /**
     * 关闭拼单弹框
     */
    closeFightOrderP() {
      this.setData({ showFightOrder: false });
    },
    /**
     * 打开拼单弹框
     */
    openFightOrderP() {
      this.setData({ showFightOrder: true });
    },
    // --------------------------------------加减事件
    /**
     * 点击增加减少购物车数量
     */
    changeShopCart(e) {
      // 点击事件
      const { type, cid } = e.detail;
      let arrFoodP = this.data.foodListsRight;
      let arrCart = this.data.foodCart;
      // 获取购物车列表下标
      const card = arrCart.findIndex((item) => item.id === cid);
      // 获取右侧列表下标
      let food = 0;
      let cIndex = 0;
      for (let k = 0; k < arrFoodP.length; k++) {
        const i = arrFoodP[k].children.findIndex((item) => item.id === cid);
        if (i > -1) {
          food = i;
          cIndex = k;
          break;
        }
      }
      let arrFoodC = arrFoodP[cIndex].children[food];
      // 判断是加号还是减号
      if (Number(type)) {
        // 点击加号
        arrFoodC.buyNum++;
        if (card > -1) {
          arrCart[card].num = arrFoodC.buyNum;
        } else {
          arrCart.push({
            id: arrFoodC.id,
            title: arrFoodC.title,
            pic: arrFoodC.pic,
            price: arrFoodC.price,
            standardSel: "标准(去冰)/标准糖",
            num: arrFoodC.buyNum,
          });
        }
      } else {
        // 点击减号
        if (arrFoodC.buyNum) {
          arrFoodC.buyNum--;
          if (card > -1 && arrFoodC.buyNum) {
            arrCart[card].num = arrFoodC.buyNum;
          } else {
            arrCart.splice(card, 1);
          }
        }
      }
      // 更新data数据
      this.setData({
        foodListsRight: arrFoodP,
        foodCart: arrCart,
      });
    },
    // --------------------------------------商品列表
    /**
     * 点击商品列表出现弹框详情
     */
    async foodModal(e) {
      try {
        const { pindex, cindex } = e.detail;
        const { foodListsRight } = this.data;
        const obj = foodListsRight[pindex].children[cindex];
        await promiseFun({
          eventName: wx.hideTabBar,
          params: {
            animation: true,
          },
        });
        this.setData({
          showFoodDetail: true,
          foodDetailObj: obj,
        });
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * 关闭商品列表
     */
    closeFoodDetailP() {
      this.setData({ showFoodDetail: false });
      setTimeout(() => {
        wx.showTabBar({ animation: true });
      }, 300);
    },
    /**
     * 商品列表出现弹框详情---加入购物车
     */
    changeBuyNumP(e) {
      const { num } = e.detail;
      const { foodDetailObj, foodListsRight } = this.data;
      // 商品总数量
      const total = foodDetailObj.buyNum + num;
      // 更改商品详情的购买数量
      foodDetailObj.buyNum = total;
      // 判断当前右侧列表数组中当前数据的位置，并更改数组中的数量
      let indexP, indexC;
      for (let k = 0; k < foodListsRight.length; k++) {
        const index = foodListsRight[k].children.findIndex(
          (item2) => item2.id === foodDetailObj.id
        );
        if (index > -1) {
          indexP = k;
          indexC = index;
          break;
        }
      }
      foodListsRight[indexP].children[indexC].buyNum = total;
      // 获取购物车数组
      let arrCard = this.data.foodCart;
      // 获取购物车列表下标
      const card = arrCard.findIndex((item) => item.id === foodDetailObj.id);
      // 判断购物车中是否有当前这条数据
      if (card > -1) {
        arrCard[card].num = total;
      } else {
        arrCard.push({
          id: foodDetailObj.id,
          title: foodDetailObj.title,
          pic: foodDetailObj.pic,
          price: foodDetailObj.price,
          num: total,
        });
      }
      // 更新数据
      this.setData({
        foodDetailObj,
        foodListsRight,
        foodCart: arrCard,
      });
      // 关闭弹框
      this.closeFoodDetailP();
    },
    /**
     * 购物车---清空数据
     */
    clearShopCartP() {
      const { foodCart, foodListsRight } = this.data;
      foodListsRight.forEach((itemP) => {
        itemP.children.forEach((itemC) => {
          const bool = foodCart.some((cart) => itemC.id == cart.id);
          if (bool) {
            itemC.buyNum = 0;
          }
        });
      });
      this.setData({
        foodCart: [],
        foodListsRight,
      });
    },
    /**
     * 返回---更改点餐页面的外卖全部地址数据
     */
    backChangeTakeaway(res) {
      console.log("更改点餐页面的外卖数据==", res);
      const { store, id, address } = res;
      this.setData({
        takeaway: {
          id: id,
          address,
          shopName: store,
        },
        pickType: 1,
      });
    },
    /**
     * 返回---更改点餐页面的外卖门店数据
     */
    backChangeTakeawayStore(res) {
      console.log("更改点餐页面的外卖门店数据==", res);
      let { takeaway } = this.data;
      takeaway.shopName = res;
      this.setData({
        takeaway,
      });
    },
    /**
     * 返回---更改点餐页面的自取数据
     */
    backChangeSelfCollection(res) {
      console.log("更改点餐页面的自取数据==", res);
      let { selfCollection } = this.data;
      selfCollection = {
        id: "self_003",
        shopName: "更改过后的店铺2",
        distance: "1.7km",
      };
      this.setData({
        selfCollection,
      });
    },
    // ----------------------------------------------------生命周期函数
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log("监听页面加载--点餐页", options);
      const { selfId } = options;

        // ----------获取当前坐标经纬度
        getUserLocation(
          (res) => {
            let la = res.latitude;
            let lo = res.longitude;
            this.geographical = {
              la,
              lo,
            };
            // 更改过自取的店铺位置
            let selfCollection;
            if (selfId) {
              selfCollection = {
                id: "self_003",
                shopName: "更改过后的店铺",
                distance: "4.7km",
              };
            } else {
              selfCollection = {
                id: "self_001",
                shopName: "海口吾悦广场店",
                distance: "4.7km",
              };
            }
            // ----------通过请求后台获取距离当前位置最近的店铺与距离
            this.setData({
              selfCollection,
              isPage: true,
            });
          },
          () => {
            console.log("获取经纬度点击了取消");
          }
        );
      // ----------数据整理
      // 左侧数据整理
      const leftArry = foodLists.map((item) => {
        const obj = {
          name: item.name,
          tips: item.tips || "",
          id: item.id,
        };
        return obj;
      });

      // 右侧数据整理
      const rightArry = foodLists.map((itemAll) => {
        let outNum = 0;
        const children = itemAll.children.map((item) => {
          // 通过状态判断有多少个已售罄商品
          if (item.isSoldOut) {
            outNum++;
          }
          // 遍历购物车数据，知道当前商品已选购多少
          const cardIndex = shopCart.findIndex((card) => card.id === item.id);
          // 更改data数据
          return {
            ...item,
            tagGray: item.tagGray || "",
            tagYellow: item.tagYellow || "",
            tagPink: item.tagPink ? item.tagPink.split("，") : "",
            isSoldOut: item.isSoldOut || false,
            buyNum: cardIndex > -1 ? shopCart[cardIndex].num : 0,
          };
        });
        return {
          name: itemAll.name,
          id: itemAll.id,
          outNum,
          // 当前是否显示已售罄商品
          showHide: false,
          children,
        };
      });
      // 获取右上角按钮的数据
      const client = wx.getMenuButtonBoundingClientRect();
      console.log("监听页面加载", client);
      // 将所有数据放入data中进行更新
      this.setData({
        foodListsLeft: leftArry,
        foodListsRight: rightArry,
        // 购物车数据，从后台获取
        foodCart: shopCart,
        topPad: client.top,
        titleLineH: client.height
      });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () { },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      // 组件进入进行加载动画
      wx.showLoading({
        mask: true,
      });
      // 暂停加载动画
      setTimeout(() => {
        this.setData({
          showLoading: false,
        });
        wx.hideLoading();
      }, 500);
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () { },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () { },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () { },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () { },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () { },
  },
});
