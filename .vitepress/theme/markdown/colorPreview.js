const COLOR_REGEX =
  /(?:\s|^)(#(?:[a-fA-F0-9]{3}){1,2}|(?:#(?:[a-fA-F0-9]{4}){1,2})?\b|rgba?\(\d+,\s*\d+,\s*\d+(?:,\s*\d+(?:\.\d+)?)?\)|hsla?\(\d+,\s*\d+%?,\s*\d+%?,?\s*(?:,\s*\d+(?:\.\d+)?)?\))(?:[^#a-zA-Z0-9]|$)/g;

function MarkdownItColorPreview(md) {
  const replaceColor = (colorStr) => {
    colorStr = colorStr.trim();
    let color = colorStr.replace(/\P{ASCII}\p{Nd}/gu, "");

    if (color.startsWith("#")) {
      color = color.replace(/[^#0-9a-f]/gi, "");
    } else {
      const index = color.lastIndexOf(")");
      if (index !== -1) {
        color = color.slice(0, index + 1);
      }
    }

    return `<span class='color-swatch' style='background-color: ${color}'></span>${colorStr} `;
  };

  md.renderer.rules.text = (tokens, idx) => {
    let text = tokens[idx].content;
    text = md.utils.escapeHtml(text);
    return text.replace(COLOR_REGEX, replaceColor);
  };
}

export default MarkdownItColorPreview;
