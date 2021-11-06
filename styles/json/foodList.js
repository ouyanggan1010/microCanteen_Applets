const foodLists = [
  {
    name: "原创回归",
    tips: "新品",
    id: "pId_001",
    children: [
      {
        id: "pId_001_001",
        title: "霸气荔枝",
        pic: "../../styles/imagesTest/tea.jpg",
        tagPink: "新品上市",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "30.20",
      },
      {
        id: "pId_001_002",
        title: "霸气杨梅",
        pic: "../../styles/imagesTest/tea.jpg",
        tagPink: "金奖茉莉初雪茶",
        detail:
          "【650ml】奈雪‘当家花旦’饮品霸气杨梅原创回归；当季新鲜杨梅手工去核，搭配金奖茉莉初雪茶，不用吸管大口喝，香气饱满，口口爆汁",
        price: "30.00",
      },
      {
        id: "pId_001_003",
        title: "霸气芝士杨梅",
        pic: "../../styles/imagesTest/tea.jpg",
        detail:
          "【650ml】味甜多汁的霸气杨梅加入轻盈香滑的芝士奶盖，口感层次丰富",
        price: "30.00",
      },
      {
        id: "pId_001_004",
        title: "当家花旦限量手机壳（白色款）",
        pic: "../../styles/imagesTest/tea.jpg",
        detail:
          "1.磨砂质感+浮雕印刷，亲肤手感又防滑 2.植绒内衬，柔软纤维不伤机 3.原机开模，孔位精准 4.高回弹性，易拆不变形。自用吸睛，送礼宜人，你也可以是生活中的当家花旦",
        price: "19.90",
      },
      {
        id: "pId_001_005",
        title: "当家花旦限量手机壳（黑色款）",
        pic: "../../styles/imagesTest/tea.jpg",
        detail:
          "1.磨砂质感+浮雕印刷，亲肤手感又防滑 2.植绒内衬，柔软纤维不伤机 3.原机开模，孔位精准 4.高回弹性，易拆不变形。自用吸睛，送礼宜人，你也可以是生活中的当家花旦",
        price: "19.90",
      },
    ],
  },
  {
    name: "奈雪必点",
    id: "pId_002",
    children: [
      {
        id: "pId_002_001",
        title: "霸气芝士草莓",
        pic: "../../styles/imagesTest/tea.jpg",
        tagPink: "人气爆品，奈雪TOP1",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_002_002",
        title: "霸气橙子",
        pic: "../../styles/imagesTest/tea.jpg",
        tagGray: "含茶",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_002_003",
        title: "霸气榴莲王",
        pic: "../../styles/imagesTest/tea.jpg",
        tagGray: "含芒果丁",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_002_004",
        title: "霸气芝士葡萄",
        pic: "../../styles/imagesTest/tea.jpg",
        tagGray: "含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_002_005",
        title: "霸气玉油柑",
        pic: "../../styles/imagesTest/tea.jpg",
        tagPink: "约66颗油柑初榨",
        isSoldOut: true,
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "29.00",
      },
      {
        id: "pId_002_006",
        title: "草莓魔法棒",
        pic: "../../styles/imagesTest/tea.jpg",
        tagPink: "人气爆品",
        isSoldOut: true,
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "20.00",
      },
    ],
  },
  {
    name: "一周好茶/主题周边",
    tips: "新品",
    id: "pId_003",
    children: [
      {
        id: "pId_003_001",
        title: "一周好茶-花茶系列",
        pic: "../../styles/imagesTest/tea.jpg",
        tagPink: "金奖茉莉初雪茶，七杯花茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "48.00",
      },
      {
        id: "pId_003_002",
        title: "一周好茶礼盒（混合装）",
        pic: "../../styles/imagesTest/tea.jpg",
        tagPink: "金奖茉莉初雪茶，特等奖奈雪初露茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "48.00",
      },
    ],
  },
  {
    name: "霸气鲜果茶",
    id: "pId_004",
    children: [
      {
        id: "pId_004_001",
        title: "霸气荔枝",
        pic: "../../styles/imagesTest/tea.jpg",
        tagPink: "新品上市",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "30.00",
      },
      {
        id: "pId_004_002",
        title: "霸气杨梅",
        pic: "../../styles/imagesTest/tea.jpg",
        tagPink: "金奖茉莉初雪茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "30.00",
      },
      {
        id: "pId_004_003",
        title: "霸气芝士杨梅",
        pic: "../../styles/imagesTest/tea.jpg",
        tagPink: "人气爆品，奈雪TOP1",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_004_004",
        title: "霸气芝士芒果",
        pic: "../../styles/imagesTest/tea.jpg",
        tagGray: "含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "27.00",
      },
      {
        id: "pId_004_005",
        title: "霸气芝士葡萄",
        pic: "../../styles/imagesTest/tea.jpg",
        tagGray: "含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_004_006",
        title: "霸气燃爆橙子",
        pic: "../../styles/imagesTest/tea.jpg",
        tagGray: "含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "29.00",
      },
      {
        id: "pId_004_007",
        title: "霸气橙子",
        pic: "../../styles/imagesTest/tea.jpg",
        tagGray: "含茶",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_004_008",
        title: "霸气西柚",
        pic: "../../styles/imagesTest/tea.jpg",
        tagGray: "含茶",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "22.00",
      },
      {
        id: "pId_004_009",
        title: "霸气柠檬",
        pic: "../../styles/imagesTest/tea.jpg",
        tagGray: "含茶",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "17.00",
      },
      {
        id: "pId_004_010",
        title: "霸气玉油柑",
        pic: "../../styles/imagesTest/tea.jpg",
        tagPink: "约66颗油柑初榨",
        isSoldOut: true,
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "29.00",
      },
    ],
  },
  {
    name: "宝藏鲜奶茶",
    id: "pId_005",
    children: [
      {
        id: "pId_005_001",
        title: "多料椰椰杨枝甘露宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_005_002",
        title: "提拉米苏豪华宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_005_003",
        title: "金色山脉宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_005_004",
        title: "冰博克草莓撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_005_005",
        title: "葡萄撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "22.00",
      },
      {
        id: "pId_005_006",
        title: "黑糖珠珠宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "21.00",
      },
    ],
  },
  {
    name: "奈雪软欧包",
    id: "pId_006",
    children: [
      {
        id: "pId_006_001",
        title: "多料椰椰杨枝甘露宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_006_002",
        title: "提拉米苏豪华宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_006_003",
        title: "金色山脉宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_006_004",
        title: "冰博克草莓撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_006_005",
        title: "葡萄撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "22.00",
      },
      {
        id: "pId_006_006",
        title: "黑糖珠珠宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "21.00",
      },
    ],
  },
  {
    name: "吐司/甜品",
    id: "pId_007",
    children: [
      {
        id: "pId_007_001",
        title: "多料椰椰杨枝甘露宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_007_002",
        title: "提拉米苏豪华宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_007_003",
        title: "金色山脉宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_007_004",
        title: "冰博克草莓撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_007_005",
        title: "葡萄撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "22.00",
      },
      {
        id: "pId_007_006",
        title: "黑糖珠珠宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "21.00",
      },
    ],
  },
  {
    name: "芝士茶/纯茶",
    id: "pId_008",
    children: [
      {
        id: "pId_008_001",
        title: "多料椰椰杨枝甘露宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_008_002",
        title: "提拉米苏豪华宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_008_003",
        title: "金色山脉宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_008_004",
        title: "冰博克草莓撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_008_005",
        title: "葡萄撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "22.00",
      },
      {
        id: "pId_008_006",
        title: "黑糖珠珠宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "21.00",
      },
    ],
  },
  {
    name: "奈雪零食",
    id: "pId_009",
    children: [
      {
        id: "pId_009_001",
        title: "多料椰椰杨枝甘露宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_009_002",
        title: "提拉米苏豪华宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_009_003",
        title: "金色山脉宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_009_004",
        title: "冰博克草莓撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_009_005",
        title: "葡萄撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "22.00",
      },
      {
        id: "pId_009_006",
        title: "黑糖珠珠宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "21.00",
      },
    ],
  },
  {
    name: "无糖茶铺",
    id: "pId_010",
    children: [
      {
        id: "pId_010_001",
        title: "多料椰椰杨枝甘露宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_010_002",
        title: "提拉米苏豪华宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_010_003",
        title: "金色山脉宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_010_004",
        title: "冰博克草莓撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_010_005",
        title: "葡萄撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "22.00",
      },
      {
        id: "pId_010_006",
        title: "黑糖珠珠宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "21.00",
      },
    ],
  },
  {
    name: "端午粽子",
    id: "pId_011",
    children: [
      {
        id: "pId_011_001",
        title: "多料椰椰杨枝甘露宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_011_002",
        title: "提拉米苏豪华宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_011_003",
        title: "金色山脉宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_011_004",
        title: "冰博克草莓撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_011_005",
        title: "葡萄撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "22.00",
      },
      {
        id: "pId_011_006",
        title: "黑糖珠珠宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "21.00",
      },
    ],
  },
  {
    name: "外卖推荐",
    id: "pId_012",
    children: [
      {
        id: "pId_012_001",
        title: "多料椰椰杨枝甘露宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_012_002",
        title: "提拉米苏豪华宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_012_003",
        title: "金色山脉宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_012_004",
        title: "冰博克草莓撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_012_005",
        title: "葡萄撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "22.00",
      },
      {
        id: "pId_012_006",
        title: "黑糖珠珠宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "21.00",
      },
    ],
  },
  {
    name: "共同防疫",
    id: "pId_013",
    children: [
      {
        id: "pId_013_001",
        title: "多料椰椰杨枝甘露宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_013_002",
        title: "提拉米苏豪华宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      {
        id: "pId_013_003",
        title: "金色山脉宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_013_004",
        title: "冰博克草莓撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "25.00",
      },
      {
        id: "pId_013_005",
        title: "葡萄撞撞宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "22.00",
      },
      {
        id: "pId_013_006",
        title: "黑糖珠珠宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        tagYellow: "可做热饮",
        tagGray: "不含茶",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "21.00",
      },
    ],
  },
  {
    name: "霸气玉油柑",
    id: "pId_014",
    children: [
      {
        id: "pId_014_001",
        title: "多料椰椰杨枝甘露宝藏茶",
        pic: "../../styles/imagesTest/tea.jpg",
        detail:
          "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
        price: "28.00",
      },
      // {
      //   id: "pId_014_002",
      //   title: "提拉米苏豪华宝藏茶",
      //   pic: "../../styles/imagesTest/tea.jpg",
      //   tagYellow: "可做热饮",
      //   detail:
      //     "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
      //   price: "28.00",
      // },
      // {
      //   id: "pId_014_003",
      //   title: "金色山脉宝藏茶",
      //   pic: "../../styles/imagesTest/tea.jpg",
      //   tagYellow: "可做热饮",
      //   detail:
      //     "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
      //   price: "25.00",
      // },
      // {
      //   id: "pId_014_004",
      //   title: "冰博克草莓撞撞宝藏茶",
      //   pic: "../../styles/imagesTest/tea.jpg",
      //   tagYellow: "可做热饮",
      //   detail:
      //     "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
      //   price: "25.00",
      // },
      // {
      //   id: "pId_014_005",
      //   title: "葡萄撞撞宝藏茶",
      //   pic: "../../styles/imagesTest/tea.jpg",
      //   tagYellow: "可做热饮",
      //   tagGray: "不含茶",
      //   detail:
      //     "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
      //   price: "22.00",
      // },
      // {
      //   id: "pId_014_006",
      //   title: "黑糖珠珠宝藏茶",
      //   pic: "../../styles/imagesTest/tea.jpg",
      //   tagYellow: "可做热饮",
      //   tagGray: "不含茶",
      //   detail:
      //     "【650ml】精选饱满剔透，肉白如珠，汁多味甜的海南妃子笑荔枝，颗颗手剥，粒粒手捣，制成冰肌感细腻果肉，搭配香气浓郁的金奖茉莉初雪茶，清甜多汁。[荔枝鲜果易氧化，建议尽快饮用，口感更佳]",
      //   price: "21.00",
      // },
    ],
  },
];
const shopCart = [
  // {
  //   id: "pId_014_003",
  //   title: "金色山脉宝藏茶",
  //   pic: "../../styles/imagesTest/tea.jpg",
  //   price: "25.00",
  //   num: 1,
  // },
  // {
  //   id: "pId_014_004",
  //   title: "冰博克草莓撞撞宝藏茶",
  //   pic: "../../styles/imagesTest/tea.jpg",
  //   price: "25.00",
  //   num: 2,
  // },
];
module.exports = {
  foodLists,
  shopCart,
};
