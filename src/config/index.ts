// Handle ENV files
const siteURL = import.meta.env.VITE_SITE_LOGO_URL || "";
const siteName = import.meta.env.VITE_SITE_NAME || "";
const backendURL = import.meta.env.VITE_BACKEND_BASE_URL || "";
const siteEmail = import.meta.env.VITE_SITE_EMAIL || "";

export { siteURL, siteName, backendURL, siteEmail };
