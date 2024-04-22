/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arturpietrzak.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
