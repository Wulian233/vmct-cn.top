import { onMounted, watch, nextTick, defineAsyncComponent, h } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme, { VPBadge } from 'vitepress/theme-without-fonts'

import mediumZoom from 'medium-zoom'
import { createPinia } from 'pinia'
import googleAnalytics from '../google-analytics'

import Link from './components/Link.vue'
import Coins from './components/Coins.vue'
import DownloadLinks from './components/DownloadLinks.vue'
import Card from '../theme/components/Card.vue'
import LinkGrid from '../theme/components/LinkGrid.vue'
import DocHeader from './components/DocHeader.vue'
import HighlightTargetedHeading from './components/HighlightTargetedHeading.vue'

import 'uno.css'
import './styles/vars.css'
import './styles/main.css'
import './styles/ui.css'

const pinia = createPinia()

export default {
  ...DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(defineAsyncComponent(() => import('./components/Banner.vue'))),
      'layout-bottom': () => h(HighlightTargetedHeading),
      'doc-before': () => h(DocHeader),
    });
  },

  enhanceApp({ app }) {
    googleAnalytics({ id: 'G-98VEMPQYQD', debug: false });
    app.use(pinia);

    const components = { Link, Coins, Card, DownloadLinks, LinkGrid, VPBadge };
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },

  setup() {
    const route = useRoute();

    const handleRouteChange = () => nextTick(initZoom);

    onMounted(initZoom);
    watch(() => route.path, handleRouteChange);
  },
};

const initZoom = () => {
  mediumZoom('.main img:not(.no-zoomable)', {
    background: 'var(--vp-c-bg)',
  })
}
