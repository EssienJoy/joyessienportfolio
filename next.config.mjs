import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        cacheComponents: true,
    }
};

export default withNextVideo(nextConfig);