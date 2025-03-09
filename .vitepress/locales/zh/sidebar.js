const sidebar = {
  "/modpacks": [
    { text: "返回首页", link: "index" },
    { text: "地图汉化", link: "map" },
    { text: "汉化准则", link: "rule" },
    { text: "双十一事变", link: "what" },
    { text: "用户协议", link: "agreement" },
    { text: "隐私政策", link: "privacy" },
    {
      text: "整合包汉化",
      collapsed: false,
      items: [
        { text: "卓越2", link: "/modpacks/prominence2" },
        { text: "FTB Neotech", link: "/modpacks/neotech" },
        { text: "FTB Oceanblock 2", link: "/modpacks/oceanblock2" },
        { text: "FTB石头世界3", link: "/modpacks/sb3" },
        { text: "Integrated MC", link: "/modpacks/imc" },
        { text: "Bliss", link: "/modpacks/bliss" },
        { text: "Chunk Block", link: "/modpacks/chunk" },
        { text: "FTB Evolution", link: "/modpacks/ftbe" },
        { text: "FTB天空奥德赛", link: "/modpacks/odyssey" },
        { text: "FTB建筑师天堂2", link: "/modpacks/paradise2" },
        { text: "FTB Presents Direwolf20 1.19", link: "/modpacks/wolf" },
        { text: "Muskteer", link: "/modpacks/muskteer" },
        { text: "Prey", link: "/modpacks/prey" },
        { text: "The Decursio Project Expert", link: "/modpacks/decursio" },
        { text: "奥术学院", link: "/modpacks/arcanum" },
        { text: "宝藏猎人3", link: "/modpacks/vault" },
        { text: "冰雪之域", link: "/modpacks/frozenopolis" },
        { text: "春晓之巫", link: "/modpacks/cottage" },
        { text: "洞穴城", link: "/modpacks/cave" },
        { text: "等价交换工程2", link: "/modpacks/architect2" },
        { text: "地狱起源", link: "/modpacks/infernal" },
        { text: "幻想领域", link: "/modpacks/fantasy" },
        { text: "黑石世界", link: "/modpacks/black" },
        { text: "机械动力：星辰", link: "/modpacks/create" },
        { text: "渴望科技2", link: "/modpacks/hungry" },
        { text: "农业森友会5", link: "/modpacks/fc5" },
        { text: "喷气背包猫", link: "/modpacks/jetpack" },
        { text: "破晓之界", link: "/modpacks/dawn" },
        { text: "喂养奇点生存", link: "/modpacks/feed" },
        { text: "无限协会", link: "/modpacks/if" },
        { text: "Roguelike冒险与地牢（RAD）", link: "/modpacks/rad" },
        { text: "重生之夜", link: "/modpacks/rotn" },
        { text: "天空工厂5", link: "/modpacks/sf5" },
        { text: "星辰工厂", link: "/modpacks/star" },
        { text: "永恒的MC", link: "/modpacks/mce" },
        { text: "中世纪的MC 1.19 Fabric", link: "/modpacks/mmc" },
        { text: "核荒地", link: "/modpacks/nuclear" },
        { text: "Enigmatica 9: Expert E9E", link: "/modpacks/e9e" },
      ],
    },
  ],
  "/modpacks/fc5-wiki": [
    { text: "农业森友会5 wiki", link: "index" },
    {
      text: "wiki",
      collapsed: false,
      items: [
        { text: "农业森友会5", link: "/modpacks/fc5-wiki" },
        {
          text: "Farming Crossing Craving Mechanic",
          link: "/modpacks/fc5-wiki/farming",
        },
        {
          text: "Modpack Exclusive Features",
          link: "/modpacks/fc5-wiki/features",
        },
        {
          text: "Performance Improvements",
          link: "/modpacks/fc5-wiki/performance",
        },
        { text: "Quest Overview", link: "/modpacks/fc5-wiki/quest" },
        { text: "Miles Tickets", link: "/modpacks/fc5-wiki/tickets" },
        {
          text: "Suggest Translation Improvements",
          link: "/modpacks/fc5-wiki/translation",
        },
        { text: "Tutorials", link: "/modpacks/fc5-wiki/tutorials" },
        { text: "Modpack Tweaks", link: "/modpacks/fc5-wiki/tweaks" },
        {
          text: "Villagers available to move in",
          link: "/modpacks/fc5-wiki/villagers",
        },
      ],
    },
  ],
  "/map": [
    { text: "返回首页", link: "index" },
    { text: "整合包汉化", link: "modpacks" },
    { text: "汉化准则", link: "rule" },
    { text: "双十一事变", link: "what" },
    { text: "用户协议", link: "agreement" },
    { text: "隐私政策", link: "privacy" },
    {
      text: "地图汉化",
      collapsed: false,
      items: [
        { text: "最终悖论", link: "/map/final" },
        { text: "神界陨落", link: "/map/divinity" },
        { text: "贝维尔小镇", link: "/map/bayville" },
        { text: "死亡竞速2", link: "/map/deathrunner" },
        { text: "Lumina Complex", link: "/map/lumina" },
        { text: "The Machine", link: "/map/machine" },
        { text: "狂乱之境4", link: "/map/rc4" },
        { text: "艺之神殿", link: "/map/tota" },
        { text: "Would You Rather", link: "/map/wyr" },
      ],
    },
  ],
  "/vmtu": [
    { text: "VM汉化组", link: "index" },
    {
      text: "入门",
      collapsed: false,
      items: [
        { text: "功能介绍", link: "/vmtu/" },
        { text: "使用与配置文件", link: "/vmtu/config" },
        { text: "支持版本", link: "/vmtu/support" },
      ],
    },
  ],
};

export default sidebar;
