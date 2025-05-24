import { container } from "@mdit/plugin-container";
import { load } from "js-yaml";
import { entries, fromPairs, isPlainObject, isString } from "lodash-es";
import { stringifyProp } from "../utils";

const CARD_PROPS = [
  "title",
  "desc",
  "logo",
  "link",
  "color",
  "cover",
  "hoverShadow",
  "shadow",
  "theme",
];

function checkCardProps(config) {
  if (isPlainObject(config) && isString(config.title)) {
    return fromPairs(
      entries(config).filter(
        (item) => CARD_PROPS.includes(item[0]) && isString(item[1]),
      ),
    );
  }

  return null;
}

function cardRender(tokens, index, _options, { relativePath }) {
  const token = tokens[index];
  const { content, info } = token;

  const language = info.trim().split(":", 2)[1] || "yml";
  let config = null;

  if (language === "yaml" || language === "yml") {
    try {
      config = load(content);
    } catch (err) {
      console.error(`Parsing card YAML config failed:`, err);
    }
  } else if (language === "json") {
    try {
      config = JSON.parse(content);
    } catch (err) {
      console.error(`Parsing card JSON config failed:`, err);
    }
  } else {
    console.error(
      `Can not parse card config ${language}${
        relativePath ? `, found in ${relativePath}` : ""
      }.`,
    );
  }

  const cardData = checkCardProps(config);

  if (cardData) return `<Card v-bind='${stringifyProp(cardData)}' />`;

  console.error(
    `Invalid card config${relativePath ? ` found in ${relativePath}` : ""}:\n${content}\n`,
  );

  return "";
}

const MarkdownItCard = (md) => {
  md.use(container, {
    name: "card",
    openRender: () => `<div class="card-container">\n`,
  });

  const { fence } = md.renderer.rules;

  md.renderer.rules.fence = (...args) => {
    const [tokens, index, options, env] = args;
    const { info } = tokens[index];
    const realInfo = info.split(":", 2)[0]?.trim() || "";

    if (realInfo === "card") return cardRender(tokens, index, options, env);

    return fence(...args);
  };

  md.renderer.rules.card = cardRender;
};

export default MarkdownItCard;
