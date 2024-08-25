function mountGoogleAnalytics(id) {
	if (("dataLayer" in window && window.gtag) || window.location.hostname === "localhost") {
		return;
	}

	const analyticsScript = document.createElement("script");

	analyticsScript.addEventListener("load", () => {
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			window.dataLayer.push(arguments);
		}

		gtag("js", new Date());
		gtag("config", id);

		window.gtag = gtag;
	});

	analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;

	document.body.appendChild(analyticsScript);
}

export default function ({ id }) {
	if (id && typeof window !== "undefined") {
		mountGoogleAnalytics(id);
	}
}
