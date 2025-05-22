'use server';

import { fetchExtractPdfText } from "@/lib/langchain";

export async function generatePdfSummary(uploadResponse: [{
    serverData: {
        userId: string,
        file: {
            ufsUrl: string,
            name: string
        }
    }
}]) {
    if (!uploadResponse) {
        return {
            success: false,
            message: 'File upload failed',
            data: null
        };
    }
    const { serverData: {
        userId,
        file: { ufsUrl: pdfUrl, name: fileName },
    },
    } = uploadResponse[0];
    if (!pdfUrl) {
        return {
            uccess: false,
            message: 'File upload failed',
            data: null
        }
    }
    try {
        const pdfText = await fetchExtractPdfText(pdfUrl)
    } catch (error) {
        return {
            uccess: false,
            message: 'File upload failed',
            data: null,
            err: error
        }
    }
}