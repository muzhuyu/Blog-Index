/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "沐竹雨",
    sites: [
      {
        title: "沐竹雨博客",
        url: "https://muzhuyu.cn",
        icon: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F22ed4952-2974-42d8-a1ab-ed1deb18c755%2Fc2246c99-2215-4a63-9519-9cb1ed7d3b91%2Ffavicon.ico?id=8aab51df-59fd-41ff-b27e-c172c7561629&table=collection&spaceId=22ed4952-2974-42d8-a1ab-ed1deb18c755&userId=63c7d733-8868-40a5-9230-9b307e11009d&cache=v2",
        color: "#0171CD",
      },
      {
        title: "沐竹雨的学习记录",
        description: "记录沐竹雨的学习生活",
        url: "https://study.muzhuyu.cn/",
        icon: "",
      },
      {
        title: "思维导图",
        description: "自建思维导图工具",
        url: "https://mindmap.muzhuyu.cn/#/",
        icon: "",
      },
      {
        title: "微信编辑器",
        description: "自建markdown编辑工具",
        url: "https://md.muzhuyu.cn/",
        icon: "",
      },
    ],
  },
  {
    title: "陕西北斗",
    sites: [
      {
        title: "陕西省地质灾害平台",
        url: "http://124.22.1.13:8115/#/",
        icon: "",
        color: "#0171CD",
      },
      {
        title: "陕西省地质灾害物联网平台",
        url: "http://124.22.1.13:3000/#/",
        icon: "",
        color: "#0171CD",
      },
  },
  {
    title: "常用链接",
     sites: [
      {
        title: "阿里云",
        url: "https://www.aliyun.com/",
        icon: "",
        color: "#0171CD",
      },
      {
        title: "陕西省地质灾害物联网平台",
        url: "http://124.22.1.13:3000/#/",
        icon: "",
        color: "#0171CD",
      },
  },
  {
    title: "示例分类4",
  },
  {
    title: "示例分类5",
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "沐竹雨导航",
        description: "沐竹雨的导航页面",
        url: "https://dh.muzhuyu.cn",
        icon: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F22ed4952-2974-42d8-a1ab-ed1deb18c755%2Fc2246c99-2215-4a63-9519-9cb1ed7d3b91%2Ffavicon.ico?id=8aab51df-59fd-41ff-b27e-c172c7561629&table=collection&spaceId=22ed4952-2974-42d8-a1ab-ed1deb18c755&userId=63c7d733-8868-40a5-9230-9b307e11009d&cache=v2",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "EsunR-Blog",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.esunr.xyz",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/EsunR",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "京ICP证000001号",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "沐竹雨的导航页",
    keywords: "沐竹雨,导航",
    description: "这是沐竹雨的导航页面.",
  },
};

export default GLOBAL_CONFIG;
