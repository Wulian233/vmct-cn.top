import { isObject } from "lodash-es";

export function escapeHtml(unsafeHTML) {
  return unsafeHTML
    .replace(/&/gu, "&amp;")
    .replace(/</gu, "&lt;")
    .replace(/>/gu, "&gt;")
    .replace(/"/gu, "&quot;")
    .replace(/'/gu, "&#039;");
}

const markdownLinkRegexp = /.md((\?|#).*)?$/;

export function stringifyProp(data) {
  return JSON.stringify(data).replace(/'/g, "&#39");
}

export function isLinkHttp(link) {
  return /^(https?:)?\/\//.test(link);
}

export const isLinkFtp = (link) => link.startsWith("ftp://");

export function isLinkExternal(link, base = "/") {
  if (isLinkHttp(link) || isLinkFtp(link)) {
    return true;
  }

  if (
    link.startsWith("/") &&
    !link.startsWith(base) &&
    !markdownLinkRegexp.test(link)
  ) {
    return true;
  }

  return false;
}

export function isRelativeLink(link) {
  return /^(?!www\.|https?:\/\/|[A-Za-z]:\\|\/\/).*/.test(link);
}

function concatLink(link, base) {
  return `/${base}/${link}`.replace(/\/+/gu, "/");
}

function modifyLink(obj, base) {
  if (Array.isArray(obj)) {
    return obj.map((item) => modifyLink(item, base));
  }
  if (isObject(obj)) {
    const newObj = {};
    for (const key in obj) {
      if (Array.isArray(obj[key]) || typeof obj[key] === "object") {
        newObj[key] = modifyLink(obj[key], base);
      } else if (key === "link" && isRelativeLink(obj[key])) {
        newObj[key] = concatLink(obj[key], base);
        if (isLinkExternal(obj[key])) {
          newObj.target = "_blank";
        }
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }
  return obj;
}

function modifyKey(obj, base) {
  const newObj = {};
  for (const key in obj) {
    if (key.startsWith("/") && base !== "") {
      const newKey = concatLink(key, base);
      newObj[newKey] = obj[key];
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

export function baseHelper(obj, base) {
  return modifyKey(modifyLink(obj, base), base);
}

export function hash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash &= hash;
  }
  return hash;
}

export function camelCase(str) {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function removeQueryParam(param) {
  const urlObj = new URL(location.href);
  urlObj.searchParams.delete(param);
  const url = urlObj.toString();
  window.history.replaceState({}, "", url);
  return url;
}

export function toCamelCaseObject(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [camelCase(key), value]),
  );
}

export function ensureStartingSlash(path) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function getLangPath(localeIndex) {
  return localeIndex === "root" ? "/" : `/${localeIndex}/`;
}

export function binaryToBase64(binary) {
  return btoa(String.fromCharCode(...binary));
}

export function equalLangCode(lang, _lang) {
  return getLangCode(lang) === getLangCode(_lang);
}

export function equalScriptCode(lang, _lang) {
  return getScriptCode(lang) === getScriptCode(_lang);
}

export function equalCountryCode(lang, _lang) {
  return getCountryCode(lang) === getCountryCode(_lang);
}

export function equalLocaleCode(lang, _lang) {
  return lang.toLowerCase() === _lang.toLowerCase();
}

export function getLangCode(lang) {
  return lang.split("-")[0].toLowerCase();
}

export function getScriptCode(lang) {
  return (
    lang.split("-")[1].charAt(0).toUpperCase() +
    lang.split("-")[1].slice(1).toLowerCase()
  );
}

export function getCountryCode(lang) {
  return lang.split("-")[2].toUpperCase();
}
