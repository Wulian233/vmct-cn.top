import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import BannerComponent from './components/BannerComponent.vue'
import ButtonComponent from './components/ButtonComponent.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ButtonComponent', ButtonComponent)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(BannerComponent),
    })
  }
};
