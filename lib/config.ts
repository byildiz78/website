/**
 * Helper functions to access environment variables in Next.js
 */

/**
 * Get server-side only configuration values
 */
export function getServerConfig() {
  return {
    instagramAccessToken: process.env.INSTAGRAM_ACCESS_TOKEN || '',
  };
}

/**
 * Get client-side configuration values
 */
export function getClientConfig() {
  return {
    // Add client-side config values here
  };
}
