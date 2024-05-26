import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import BannerComponent from './components/BannerComponent.vue'
import ButtonComponent from './components/ButtonComponent.vue'
import ModalComponent from './components/ModalComponent.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ButtonComponent', ButtonComponent),
    app.component('ModalComponent', ModalComponent)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(BannerComponent),
    })
  }
};
