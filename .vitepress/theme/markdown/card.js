import { container } from '@mdit/plugin-container'
import { load } from 'js-yaml'
import { stringifyProp, entries, fromEntries, isPlainObject, isString } from '../utils.js'

const CARD_PROPS = [
  'title',
  'desc',
  'logo',
  'link',
  'color',
  'cover',
  'hoverShadow',
  'shadow',
  'theme',
]

const checkCardProps = (config) => {
  if (isPlainObject(config) && isString(config['title'])) {
    return fromEntries(
      entries(config).filter(
        ([key, value]) => CARD_PROPS.includes(key) && isString(value),
      ),
    )
  }
  return null
}

const cardRender = (tokens, index, _options, { relativePath }) => {
  const token = tokens[index]
  const { content, info } = token
  const language = info.trim().split(':', 2)[1] || 'yml'

  let config = null

  try {
    if (language === 'yaml' || language === 'yml') {
      config = load(content)
    } else if (language === 'json') {
      config = JSON.parse(content)
    }
  } catch (err) {
    console.error(`Parsing card ${language.toUpperCase()} config failed:`, err)
    return ''
  }

  const cardData = checkCardProps(config)

  if (cardData) {
    return `<Card v-bind='${stringifyProp(cardData)}' />`
  }

  console.error(
    `Invalid card config${relativePath ? ` found in ${relativePath}` : ''}:\n${content}`,
  )
  return ''
}

export const cardPlugin = (md) => {
  // Add card container
  md.use(container, {
    name: 'card',
    openRender: () => `<div class="card-container">`,
  })

  // Handle `card` code blocks
  const fence = md.renderer.rules.fence

  md.renderer.rules.fence = (tokens, index, options, env) => {
    const token = tokens[index]
    if (token.info.startsWith('card')) {
      return cardRender(tokens, index, options, env)
    }
    return fence(tokens, index, options, env)
  }

  md.renderer.rules['card'] = cardRender
}
