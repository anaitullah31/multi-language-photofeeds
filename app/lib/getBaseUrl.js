export function getBaseUrl() {
  // Vercel
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Local dev
  return process.env.BASE_API_URL || "http://localhost:3000";
}
