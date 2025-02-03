<template>
  <v-container class="transparent-bg pa-0">
    <v-sparkline
      v-if="contributions.length"
      :auto-line-width="autoLineWidth"
      :fill="fill"
      :gradient="gradientColors"
      :gradient-direction="gradientDirection"
      :line-width="lineWidth"
      :model-value="contributions"
      :padding="padding"
      :smooth="smooth"
      :stroke-linecap="lineCap"
      :type="type"
      auto-draw
      class="transparent-bg"
      :height="height"
    ></v-sparkline>
    <div class="text-caption text-center mt-1">
      <div class="icon-text">
        <img src="/imgs/svg/source-branch.svg" class="theme-icon" />
        <span class="ml-1">{{ texts.repoActivity }}</span>
        <strong class="ml-2"
          >{{ texts.recentCommits }} {{ totalContributions }}</strong
        >
      </div>
    </div>
  </v-container>
</template>

<script setup>
import axios from "axios";
import { ref, computed, onMounted, watch } from "vue";
import { useData } from "vitepress";

const props = defineProps({
  username: {
    type: String,
    default: "Wulian233",
  },
  repoName: {
    type: String,
    default: "vmct-cn.top",
  },
  daysToFetch: {
    type: Number,
    default: 30,
  },
  translations: {
    type: Object,
    default: () => ({
      "zh-CN": {
        repoActivity: "仓库活动",
        recentCommits: "最近提交数：",
      },
      "zh-TW": {
        repoActivity: "倉庫活動",
        recentCommits: "最近提交數：",
      },
    }),
  },
  height: {
    type: Number,
    default: 50,
  },
  lineWidth: {
    type: Number,
    default: 1,
  },
  gradientDirection: {
    type: String,
    default: "top",
  },
  type: {
    type: String,
    default: "trend",
  },
  fill: {
    type: Boolean,
    default: false,
  },
  smooth: {
    type: Boolean,
    default: true,
  },
  lineCap: {
    type: String,
    default: "round",
  },
  padding: {
    type: Number,
    default: 4,
  },
  autoLineWidth: {
    type: Boolean,
    default: true,
  },
});

const { isDark, lang } = useData();

const contributions = ref([]);
const totalContributions = computed(() =>
  contributions.value.reduce((sum, value) => sum + value, 0),
);

const texts = computed(() => {
  return props.translations[lang.value] || props.translations["en-US"];
});

const gradientColors = computed(() => {
  return isDark.value
    ? ["#4A148C", "#6A1B9A", "#8E24AA"]
    : ["#1565C0", "#1976D2", "#2196F3"];
});

const fetchContributions = async () => {
  try {
    let allCommits = [];
    let page = 1;

    while (true) {
      const response = await axios.get(
        `https://api.github.com/repos/${props.username}/${props.repoName}/commits`,
        {
          params: {
            page: page,
            per_page: 100,
          },
        },
      );

      if (response.data.length === 0) break;

      allCommits = allCommits.concat(response.data);
      page++;
    }

    contributions.value = processContributions(allCommits);
  } catch (error) {
    console.error("Error fetching GitHub commit data:", error);
  }
};

const processContributions = (commits) => {
  const contributionsMap = {};
  const today = new Date();
  const daysAgo = new Date(
    today.getTime() - props.daysToFetch * 24 * 60 * 60 * 1000,
  );

  commits.forEach((commit) => {
    const commitDate = new Date(commit.commit.author.date);
    if (commitDate >= daysAgo) {
      const dateString = commitDate.toISOString().split("T")[0];
      contributionsMap[dateString] = (contributionsMap[dateString] || 0) + 1;
    }
  });

  const contributions = Array(props.daysToFetch).fill(0);
  for (let i = 0; i < props.daysToFetch; i++) {
    const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
    const dateString = date.toISOString().split("T")[0];
    contributions[props.daysToFetch - 1 - i] =
      contributionsMap[dateString] || 0;
  }
  return contributions;
};

onMounted(() => {
  fetchContributions();
});

watch(
  () => props.daysToFetch,
  () => {
    fetchContributions();
  },
);
</script>

<style scoped>
.transparent-bg {
  background-color: transparent;
}

.container {
  padding: 0;
}

.icon-text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-icon {
  color: var(--brand-color);
  width: 1rem;
  height: 1rem;
}

.text-caption {
  font-size: 0.8rem;
  text-align: center;
}

.ml-1 {
  margin-left: 0.25rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.text-center {
  text-align: center;
}

.mt-1 {
  margin-top: 0.25rem;
}

.dark .theme-icon {
  color: var(--text-color);
}

.dark {
  --text-color: #b0bec5;
}
</style>
