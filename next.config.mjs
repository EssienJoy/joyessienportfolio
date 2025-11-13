import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        useCache: true,
    },
};

export default withNextVideo(nextConfig);