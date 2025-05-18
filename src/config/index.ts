// Handle ENV files
const siteURL = import.meta.env.VITE_SITE_LOGO_URL || "";
const siteName = import.meta.env.VITE_SITE_NAME || "";
const backendURL = import.meta.env.VITE_BACKEND_BASE_URL || "";

export { siteURL, siteName, backendURL };
