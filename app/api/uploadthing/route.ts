import { createRouteHandler } from "uploadthing/next";
import { OurFileRouter, outFileRouter } from "./core";
export const { GET, POST } = createRouteHandler({
    router: outFileRouter,
    // config
});