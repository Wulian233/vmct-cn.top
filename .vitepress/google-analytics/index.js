/**
 * Add gtag.js to your site
 *
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/single-page-applications
 *
 * The enhanced measurement will listen to browser history events (i.e `pushState`, `popState`, and `replaceState`)
 * to collect page_view event, so we do not need to report it manually
 *
 * @see https://support.google.com/analytics/answer/9216061
 */

function mountGoogleAnalytics(id, debug) {
  // avoid duplicated import
  if (window.dataLayer && window.gtag) {
    return;
  }

  // insert gtag `<script>` tag
  const gtagScript = document.createElement("script");
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  gtagScript.async = true;
  document.head.appendChild(gtagScript);
  // insert gtag snippet
  window.dataLayer = window.dataLayer || [];
  // the gtag function must use `arguments` object to forward parameters
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  gtag("js", new Date());

  if (debug) {
    gtag("config", id, { debug_mode: true });
  } else {
    gtag("config", id);
  }
}

export default ({ id, debug }) => {
  // Google analytics integration
  if (
    typeof process !== "undefined" &&
    process.env.NODE_ENV === "production" &&
    id &&
    typeof window !== "undefined"
  ) {
    mountGoogleAnalytics(id, debug);
  }
};
