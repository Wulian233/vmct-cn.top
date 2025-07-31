import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
import DefaultTheme, { VPBadge } from "vitepress/theme-without-fonts";

import mediumZoom from "medium-zoom";
import MyLayout from "./components/MyLayout.vue";

import Coins from "./components/Coins.vue";
import Comment from "./components/Comment.vue";
import DocSupport from "./components/DocSupport.vue";
import DownloadLinks from "./components/DownloadLinks.vue";
import Card from "../theme/components/Card.vue";
import LinkGrid from "../theme/components/LinkGrid.vue";

import "uno.css";
import "./styles/animation.css";
import "./styles/vars.css";
import "./styles/main.css";
import "./styles/ui.css";

export default {
  ...DefaultTheme,
  Layout: MyLayout,

  enhanceApp({ app }) {
    const components = {
      Coins,
      Card,
      Comment,
      DocSupport,
      DownloadLinks,
      LinkGrid,
      VPBadge,
    };
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },

  setup() {
    const route = useRoute();
    const handleRouteChange = () => nextTick(initZoom);

    onMounted(() => {
      mediumZoom(".main img:not(.no-zoomable)", {
        background: "var(--vp-c-bg)",
      });

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-98VEMPQYQD";
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-98VEMPQYQD");
      };
    });

    watch(() => route.path, handleRouteChange);

    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "nllu2xu38c");
  },
};
