<!-- 评论区部分代码来自CrychicTeam的CrychicDoc项目
https://github.com/PickAID/CrychicDoc/blob/main/.vitepress/theme/components/content/comment.vue
进行部分修改 -->

<template>
  <div v-if="showComment" class="giscus-wrapper" :ref="giscusContainer"></div>
</template>


<script setup>
import { ref, watch, onMounted, computed, nextTick } from "vue";
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
    translations[lang.value] ||
    translations["zh-TW"]
  );
});

const extractTerm = (path) => {
  const cleanedPath = path.replace(/^\/[a-z]{2}\//, "");
  return cleanedPath.length > 0 ? cleanedPath : "none";
};

const giscusContainer = ref<HTMLElement | null>(null);
const isLoading = ref(false);

const loadGiscus = async () => {
  if (
    typeof window === "undefined" ||
    !giscusContainer.value ||
    isLoading.value
  ) {
    return;
  }

  isLoading.value = true;

  try {
    giscusContainer.value.innerHTML = "";
    await nextTick();

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossorigin = "anonymous";

    script.dataset.repo = "Wulian233/vmct-cn.top";
    script.dataset.repoId = "R_kgDOLqlXFw";
    script.dataset.category = "Announcements";
    script.dataset.categoryId = "DIC_kwDOLqlXF84CigPB";
    script.dataset.mapping = "pathname";
    script.dataset.term = extractTerm(route.path);
    script.dataset.inputPosition = "top";
    script.dataset.lang = currentLangConfig.value.langCode;
    script.dataset.theme = isDark.value ? "noborder_dark" : "noborder_light";

    script.onerror = () => {
      console.error("Failed to load Giscus script");
      isLoading.value = false;
    };

    script.onload = () => {
      isLoading.value = false;
    };

    giscusContainer.value.appendChild(script);
  } catch (error) {
    console.error("Error loading Giscus:", error);
    isLoading.value = false;
  }
};

const updateGiscusConfig = (config) => {
  if (typeof window === "undefined" || !showComment.value) return;

  const iframe = document.querySelector(
    "iframe.giscus-frame",
  );
  if (iframe?.contentWindow) {
    iframe.contentWindow.postMessage(
      {
        giscus: {
          setConfig: config,
        },
      },
      "https://giscus.app",
    );
  }
};

onMounted(() => {
  if (showComment.value) {
    loadGiscus();
  }
});

let routeTimer;
watch(
  () => route.path,
  () => {
    if (showComment.value) {
      clearTimeout(routeTimer);
      routeTimer = setTimeout(() => {
        loadGiscus();
      }, 150);
    }
  },
);

watch(isDark, (newValue) => {
  if (showComment.value) {
    updateGiscusConfig({
      theme: newValue ? "noborder_dark" : "noborder_light",
    });
  }
});

watch(currentLangConfig, (newConfig) => {
  if (showComment.value) {
    const iframe = document.querySelector(
      "iframe.giscus-frame",
    );
    if (iframe?.contentWindow) {
      updateGiscusConfig({
        lang: newConfig.langCode,
      });
    } else {
      loadGiscus();
    }
  }
});

watch(showComment, (newValue) => {
  if (newValue) {
    nextTick(() => loadGiscus());
  }
});
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
