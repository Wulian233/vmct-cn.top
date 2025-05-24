<template>
  <a
    :href="isExternal ? link : withBase(link)"
    :target="isExternal ? '_blank' : '_self'"
    :class="`card card-theme-${theme} ${hoverShadow ? 'card-hover' : ''}`"
    :title="title"
    :style="{
      ...(color ? { background: color } : null),
      ...(shadow ? { 'box-shadow': 'var(--vp-shadow-1)' } : null),
    }"
    :is-external-link="isExternal ? 'true' : 'false'"
  >
    <div v-if="cover" class="card-cover-container">
      <img
        class="card-cover-img no-zoomable skeleton-animation"
        @load="imgLoadHandler"
        @error="imgErrorHandler"
        :src="coverLink"
      />
    </div>

    <div :class="`card-footer ${logoMissing && !iconLink ? 'no-logo' : ''}`">
      <template v-if="iconLink">
        <label :class="`card-icon ${iconLink}`"></label>
      </template>
      <template v-else>
        <template v-if="!logoMissing">
          <img class="card-logo no-zoomable" :src="logoLink" />
        </template>
      </template>

      <div class="card-content">
        <div class="card-title">
          {{ title }}
        </div>
        <hr />
        <ClientOnly>
          <div class="card-desc">
            {{ descText }}
          </div>
        </ClientOnly>
      </div>
    </div>
  </a>

  <!-- 提前声明Logo，以便Unocss识别导入 -->
  <div v-once hidden>
    <span class="i-custom-123"></span>
    <span class="i-custom-afdian"></span>
    <span class="i-custom-bilibili"></span>
    <span class="i-custom-curseforge"></span>
    <span class="i-custom-discord"></span>
    <span class="i-custom-gitee"></span>
    <span class="i-custom-github"></span>
    <span class="i-custom-mediafire"></span>
    <span class="i-custom-modrinth"></span>
    <span class="i-custom-qq"></span>
  </div>
</template>

<script setup lang="ts">
import { withBase } from "vitepress";
import { isLinkExternal, isRelativeLink } from "../utils";
import { computed } from "vue";

import "../styles/card.css";

interface CardProps {
  /** Card title */
  title;
  /** Card description, default is link when empty */
  desc?;
  /** Card icon, defaults to project Logo */
  logo?;
  /** Card link */
  link?;
  /** Card background color */
  color?;
  /** Card cover image, Only NormalTheme */
  cover?;
  /** Enable hover shadow effect, defaults to false */
  hoverShadow?: boolean;
  /** Enable card shadow effect, defaults to false */
  shadow?: boolean;
  /** Card theme, defaults to normal */
  theme?: "normal" | "medium";
}

const props = withDefaults(defineProps<CardProps>(), {
  desc: "",
  logo: "",
  color: "",
  link: "",
  cover: "",
  theme: "normal",
  hoverShadow: false,
  shadow: false,
});

const iconMap: Record<string, string> = {
  "123pan.com": "i-custom-123",
  "afdian.com": "i-custom-afdian",
  "afdian.net": "i-custom-afdian",
  "bilibili.com": "i-custom-bilibili",
  "curseforge.com": "i-custom-curseforge",
  discord: "i-custom-discord",
  "gitee.com": "i-custom-gitee",
  "github.com": "i-custom-github",
  "mediafire.com": "i-custom-mediafire",
  "modrinth.com": "i-custom-modrinth",
  "qq.com": "i-custom-qq",
};

const imgLoadHandler = (e: Event) => {
  const target = e.target as HTMLImageElement;
  target.classList.remove("skeleton-animation");
};

const imgErrorHandler = (e: Event) => {
  const target = e.target as HTMLImageElement;
  target.classList.add("load-error");
  target.src = "/imgs/missing.png";
};

const iconLink = computed(() => {
  let icon = "";

  if (props.logo === "" && props.link) {
    const linkDomain = props.link.match(/(?:https?:\/\/)?(?:www\.)?([^\/]+)\//);
    if (linkDomain && linkDomain[1]) {
      const domain = linkDomain[1];
      for (const key in iconMap) {
        if (new RegExp(key).test(domain)) {
          icon = iconMap[key];
          break;
        }
      }
    }
  }
  return icon;
});

const isExternal = computed(() => isLinkExternal(props.link));

const logoLink = computed(() => {
  if (
    props.logo === "self" ||
    props.logo.includes("vmct-cn.top") ||
    isRelativeLink(props.link)
  ) {
    return withBase("/imgs/logo/logo_128.png");
  }
  if (props.logo === "" && iconLink.value === "") return "no-logo";
  return isRelativeLink(props.logo) ? withBase(props.logo) : props.logo;
});

const logoMissing = computed(() => logoLink.value === "no-logo");

const coverLink = computed(() =>
  isRelativeLink(props.cover) ? withBase(props.cover) : props.cover,
);

const descText = computed(() => {
  if (props.desc) {
    return props.desc;
  } else if (isRelativeLink(props.link)) {
    const prefix = props.link.substring(0, 3).replace(/(\.\/|\/)/g, "");
    const suffix = props.link.substring(3);
    return location.origin + withBase(`/${prefix}${suffix}`);
  } else {
    return props.link || "";
  }
});
</script>
