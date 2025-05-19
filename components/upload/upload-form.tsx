'use client'
import { z } from "zod";
import UploadFromInput from "./upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";
const schema = z.object({
    file: z.instanceof(File, {message: "Invalid file"}).
    refine((file) => file.size <= 20 * 1024 * 1024, 
    "File size should be less than 20MB",
    )
    .refine((file) => file.type.startsWith('application/pdf'),
    "File must be a PDF",
    ),
})
export default function UploadForm() {
    const { startUpload, routeConfig} = useUploadThing(
        'pdfUploader',{
            onClientUploadComplete: () => {
                console.log('uploaded successfully!');
            },
            onUploadError: (err) => {
                console.error('Error occurred while uploading file: ', err);
            },
            // any used here
            onUploadBegin: ({file}) => {
                console.log('upload started', file);
            }
        }
    );
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const file = formData.get('file') as File;
        // console.log(file);
        // validating the file
        const validatedFields = schema.safeParse({file});
        console.log(validatedFields);
        if(!validatedFields.success) {
            console.log(validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file');
            return;
        }
        const resp = await startUpload([file]);
        if(!resp){
            return;
        }
    };
    return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
        <UploadFromInput onSubmit={handleSubmit}/>
    </div>
    )
}