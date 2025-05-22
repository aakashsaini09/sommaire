import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing()

export const outFileRouter = {
    pdfUploader: f({ pdf: { maxFileSize: '32MB' } }).
        middleware(
            async ({ req }) => {
                const user = await currentUser();
                if (!user) throw new UploadThingError('Unauthrozied')
                return { userId: user.id };
            }
        ).onUploadComplete(async ({ metadata, file }) => {
            console.log('upload completed for user id', metadata.userId);
            console.log("file url: ", file.ufsUrl)
            return { userId: metadata.userId, file, url: file.ufsUrl };
        })
} satisfies FileRouter;

export type OurFileRouter = typeof outFileRouter;