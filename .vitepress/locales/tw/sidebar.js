const sidebar = {
  '/modpacks': [
    { text: '返回首頁', link: '/tw/index' },
    { text: '地圖翻譯', link: '/tw/map' },
    { text: '地圖翻譯準則', link: 'rule' },
    { text: '雙十一事變', link: 'what' },
    { text: '用戶協定', link: '/tw/agreement' },
    { text: '隱私政策', link: '/tw/privacy' },
    {
      text: '模組包翻譯',
      collapsed: false,
      items: [
        { text: '奧術學院', link: '/modpacks/arcanum' },
        { text: '蜜蜂空島2', link: '/modpacks/bee' },
        { text: '空島升級', link: '/modpacks/bettermc' },
        { text: '黑石世界', link: '/modpacks/black' },
        { text: 'Bliss', link: '/modpacks/bliss' },
        { text: '洞穴城', link: '/modpacks/cave' },
        { text: '春曉之巫', link: '/modpacks/cottage' },
        { text: '機械動力：星辰', link: '/modpacks/create' },
        { text: '破曉之界', link: '/modpacks/dawn' },
        { text: 'The Decursio Project Expert', link: '/modpacks/decursio' },
        { text: 'Enigmatica 9: Expert E9E', link: '/modpacks/e9e' },
        { text: '幻想領域', link: '/modpacks/fantasy' },
        { text: '飼養奇異點生存', link: '/modpacks/feed' },
        { text: '冰雪之域', link: '/modpacks/frozenopolis' },
        { text: '無限協會', link: '/modpacks/if' },
        { text: '地狱起源', link: '/modpacks/infernal' },
        { text: '噴氣背包貓', link: '/modpacks/jetpack' },
        { text: '永恆的MC', link: '/modpacks/mce' },
        { text: '中世纪的MC 1.19 Fabric', link: '/modpacks/mmc' },
        { text: 'Muskteer', link: '/modpacks/muskteer' },
        { text: 'FTB Neotech', link: '/modpacks/neotech' },
        { text: '核荒地', link: '/modpacks/nuclear' },
        { text: '天空奧德賽', link: '/modpacks/odyssey' },
        { text: 'FTB建築師天堂2', link: '/modpacks/paradise2' },
        { text: 'Prey', link: '/modpacks/prey' },
        { text: 'Roguelike冒險與地牢（RAD）', link: '/modpacks/rad' },
        { text: '重生之夜', link: '/modpacks/rotn' },
        { text: '石頭世界3', link: '/modpacks/sb3' },
        { text: '星辰工廠', link: '/modpacks/star' },
        { text: '寶藏獵人3', link: '/modpacks/vault' },
        { text: 'FTB Presents Direwolf20', link: '/modpacks/wolf' },
      ]
    }
  ],
  '/tw/map':[
    { text: '返回首頁', link: '/tw/index' },
    { text: '模組包翻譯', link: 'modpacks' },
    { text: '地圖翻譯準則', link: 'rule' },
    { text: '雙十一事變', link: 'what' },
    { text: '用戶協定', link: '/tw/agreement' },
    { text: '隱私政策', link: '/tw/privacy' },
    {
      text: '地圖翻譯',
      collapsed: false,
      items: [
        { text: '最終悖論', link: '/tw/map/final' },
        { text: '神界隕落', link: '/tw/map/divinity' },
        { text: '貝維爾小鎮', link: '/tw/map/bayville' },
        { text: '死亡競速2', link: '/tw/map/deathrunner' },
        { text: 'Lumina Complex', link: '/tw/map/lumina' },
        { text: '狂亂之境4', link: '/tw/map/rc4' },
        { text: 'Would You Rather', link: '/tw/map/wyr' },
      ]
    }
  ],
  '/vmtu':[
    { text: 'VM翻譯組', link: 'index' },
    {
      text: '入門',
      collapsed: false,
      items: [
        { text: '功能介紹', link: '/vmtu/' },
        { text: '使用與設定檔', link: '/vmtu/config' },
        { text: '支援版本', link: '/vmtu/support' },
      ]
    }
  ],
}

export default sidebar
