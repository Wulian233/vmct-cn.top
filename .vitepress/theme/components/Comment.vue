<!-- 评论区部分代码来自CrychicTeam的CrychicDoc项目（旧版）
https://github.com/PickAID/CrychicDoc/blob/main/.vitepress/theme/components/content/comment.vue
进行部分修改 -->

<template>
  <!-- 使用 v-if 根据 showComment 是否为 true 来控制评论组件的显示 -->
  <div v-if="showComment" class="giscus-wrapper" ref="giscusContainer"></div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, computed } from "vue";
import { useData, useRoute } from "vitepress";

const { isDark, lang, frontmatter } = useData();
const route = useRoute();

// 根据 frontmatter.showComment 控制显示，默认为 true
const showComment = computed(() => frontmatter.value.showComment !== false);

const translations = {
  "zh-TW": {
    langCode: "zh-TW",
  },
  "zh-CN": {
    langCode: "zh-CN",
  },
};

const currentLangConfig = computed(() => {
  return (
    translations[lang.value as keyof typeof translations] ||
    translations["zh-TW"]
  );
});

const extractTerm = (path: string) => {
  const cleanedPath = path.replace(/^\/[a-z]{2}\//, "");
  return cleanedPath.length > 0 ? cleanedPath : "none";
};

const giscusContainer = ref<HTMLElement | null>(null);

const loadGiscus = () => {
  if (!giscusContainer.value) return;

  giscusContainer.value.innerHTML = "";

  const script = document.createElement("script");
  script.src = "https://giscus.app/client.js";
  script.async = true;
  script.setAttribute("data-repo", "Wulian233/vmct-cn.top");
  script.setAttribute("data-repo-id", "R_kgDOLqlXFw");
  script.setAttribute("data-category", "Announcements");
  script.setAttribute("data-category-id", "DIC_kwDOLqlXF84CigPB");
  script.setAttribute("data-mapping", "pathname");
  script.setAttribute("data-term", extractTerm(route.path));
  script.setAttribute("data-input-position", "top");
  script.setAttribute("data-lang", currentLangConfig.value.langCode);
  script.setAttribute(
    "data-theme",
    isDark.value ? "noborder_dark" : "noborder_light",
  );
  script.setAttribute("crossorigin", "anonymous");
  giscusContainer.value.appendChild(script);
};

onMounted(() => {
  if (showComment.value) {
    loadGiscus();
  }
});

watch(
  () => route.path,
  () => {
    if (showComment.value) {
      loadGiscus();
    }
  },
);

watch(
  () => isDark.value,
  () => {
    if (showComment.value) {
      const iframe = document.querySelector(
        "iframe.giscus-frame",
      ) as HTMLIFrameElement;
      if (iframe) {
        iframe.contentWindow?.postMessage(
          {
            giscus: {
              setConfig: {
                theme: isDark.value ? "noborder_dark" : "noborder_light",
              },
            },
          },
          "https://giscus.app",
        );
      }
    }
  },
);

watch(
  () => lang.value,
  () => {
    if (showComment.value) {
      const iframe = document.querySelector(
        "iframe.giscus-frame",
      ) as HTMLIFrameElement;
      if (iframe) {
        iframe.contentWindow?.postMessage(
          {
            giscus: {
              setConfig: {
                lang: currentLangConfig.value.langCode,
              },
            },
          },
          "https://giscus.app",
        );
      } else {
        loadGiscus();
      }
    }
  },
);
</script>

<style>
.giscus-wrapper {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

main .giscus,
main .giscus-frame {
  width: 100%;
}

main .giscus-frame {
  border: none;
}

.giscus-wrapper[data-loading="true"]::after {
  content: "Loading comments...";
  display: block;
  text-align: center;
  color: var(--vp-c-text-2);
  padding: 2rem;
}
</style>
