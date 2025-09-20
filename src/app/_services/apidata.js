import { createBlurUp } from "@mux/blurup";

export async function getBlurredPlaceholder(muxPlaybackId, options) {
    try {
        const { blurDataURL, aspectRatio } = await createBlurUp(muxPlaybackId, options);

        return { blurDataURL, aspectRatio };
    } catch (err) {
        if (err.code === "ECONNREFUSED" || err.code === "ENOTFOUND") {
            throw new Error("Check network connection");
        }

        throw err;
    }
}
