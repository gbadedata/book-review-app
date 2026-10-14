/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output gives a small production image (used by Dockerfile.k8s); `next dev` is unaffected.
  output: "standalone",
};

export default nextConfig;
