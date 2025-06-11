'use client'
import { z } from "zod";
import UploadFromInput from "./upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner"
import { generatePdfSummary } from "@/actions/upload-actions";
import { useRef, useState } from "react";
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
    const formRef = useRef<HTMLFormElement>(null);
    const [Loading, setLoading] = useState(false)
    const { startUpload, routeConfig} = useUploadThing(
        'pdfUploader',{
            onClientUploadComplete: () => {
                console.log('uploaded successfully!');
            },
            onUploadError: (err) => {
                console.error('Error occurred while uploading file: ', err);
                toast('Error occurred while uploading file', {
                    description: err.message,
                    duration: 5000
                });
            },
            // any used here
            // @ts-ignore
            onUploadBegin: ({file}) => {
                console.log('upload started', file);
            }
        }
    );
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
        setLoading(true);
            const formData = new FormData(e.currentTarget);
        const file = formData.get('file') as File;
        // console.log(file);
        // validating the file
        const validatedFields = schema.safeParse({file});
        console.log(validatedFields);
        if(!validatedFields.success) {
            console.log(validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file');
            toast('Something went wrong', {
                description: validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file',
                duration: 5000,
            })
            setLoading(false);
            return;
        }
         toast('🗒️ Uploading PDF...', {
            description: 'We are uploading your PDF! ✨',
            duration: 5000,
            
        })
        const resp = await startUpload([file]);
        if(!resp){
            toast('Something went wrong', {
            description: 'Please use a different file.',
            duration: 5000,
        })
            setLoading(false);
            return;
        }
         toast('🗒️ Processing PDF...', {
            description: 'Hang tight! Our AI is reading through your PDF! ✨',
            duration: 5000,
        })
        // @ts-ignore
        const result = await generatePdfSummary(resp)
        // const summary = await generatePdfSummary([
        //     {
        //         serverData: {
        //             userId: resp[0]?.serverData?.userId,
        //             file: {
        //                 ufsUrl: resp[0]?.serverData?.file?.ufsUrl,
        //                 name: resp[0]?.serverData?.file?.name
        //             }
        //         }
        //     }
        // ])
        console.log({ result});
        const { data = null, message = null } = result || {};
        if (data) {
            toast('🎉 Saving PDF...', {
                description: 'Hang tight! We are saving your summary!',
                duration: 5000,
            });
            formRef.current?.reset();
            if(data.summary){
                // save teh summary 
            }
        }
    } catch (error) {
        setLoading(false);
        console.error('Error in handleSubmit:', error);
        formRef.current?.reset();
        toast('Something went wrong', {
            description: 'Please try again later.',
            duration: 5000,
         });  
        } 
    };

    return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
        <UploadFromInput Loading={Loading} ref={formRef} onSubmit={handleSubmit}/>
    </div>
    )
}