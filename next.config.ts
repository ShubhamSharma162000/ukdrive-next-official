/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/ayt9mk2gv9/**",
      },
    ],
  },
};

module.exports = nextConfig;
