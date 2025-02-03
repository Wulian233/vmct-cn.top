import { onMounted, watch, nextTick } from "vue";
import { useData, useRoute } from "vitepress";
import DefaultTheme, { VPBadge } from "vitepress/theme-without-fonts";

import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";
import mediumZoom from "medium-zoom";
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import googleAnalytics from "../google-analytics";

import MyLayout from "./components/MyLayout.vue";

import CommitsCounter from "./components/CommitsCounter.vue";
import Coins from "./components/Coins.vue";
import DownloadLinks from "./components/DownloadLinks.vue";
import Card from "../theme/components/Card.vue";
import LinkGrid from "../theme/components/LinkGrid.vue";

import "@nolebase/vitepress-plugin-git-changelog/client/style.css";
import "uno.css";
import "./styles/animation.css";
import "./styles/vars.css";
import "./styles/main.css";
import "./styles/ui.css";

export default {
  ...DefaultTheme,
  Layout: MyLayout,

  enhanceApp({ app }) {
    googleAnalytics({ id: "G-98VEMPQYQD", debug: false });

    app.use(NolebaseGitChangelogPlugin);

    const components = {
      Coins,
      Card,
      CommitsCounter,
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
    const { frontmatter } = useData();
    const handleRouteChange = () => nextTick(initZoom);

    onMounted(initZoom);
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

    giscusTalk(
      {
        repo: "Wulian233/vmct-cn.top",
        repoId: "R_kgDOLqlXFw",
        category: "Announcements",
        categoryId: "DIC_kwDOLqlXF84CigPB",
        mapping: "pathname",
        inputPosition: "bottom",
        lang: "zh-CN",
      },
      {
        frontmatter,
        route,
      },
    );
  },
};

const initZoom = () => {
  mediumZoom(".main img:not(.no-zoomable)", {
    background: "var(--vp-c-bg)",
  });
};
