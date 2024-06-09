import { defineConfig } from 'vitepress'
import { zh } from './zh'
import { tw } from './tw'

export default defineConfig({
  ...defineConfig,

  base: "/",
  locales: {
    root: { label: '简体中文', ...zh },
    tw: { label: '繁體中文', ...tw }
  },
  srcExclude: ['**/README.md', '**/LICENSE', '**/.gitignore'],

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    image: { lazyLoading: true },
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://beta.vmct-cn.top/',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  themeConfig: {
    logo: { src: '/img/vm.png', width: 30, height: 45 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Wulian233/vmct-website-beta/' }
    ]
  }
})
