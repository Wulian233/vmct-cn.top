import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import BannerComponent from './components/BannerComponent.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(BannerComponent),
    })
  }
};
