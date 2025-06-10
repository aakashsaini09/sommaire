'use server';

import { fetchExtractPdfText } from "@/lib/langchain";
import { generatePdfSummaryFromOpenAI } from "@/lib/openai";

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
        console.log(pdfText)
        let summary;
        try {
            summary = await generatePdfSummaryFromOpenAI(pdfText);
            console.log("AI summary", { summary });
        } catch (error) {
            console.log(error)
            // call gemini here is openai fails
        }
        if (!summary) {
            return {
                success: false,
                message: 'Failed to generate summary',
                data: null
            }
        }
        return {
            success: true,
            message: 'Summary generated successfully',
            data: {
                summary
            }
        }
    } catch (error) {
        return {
            uccess: false,
            message: 'File upload failed',
            data: null,
            err: error
        }
    }
}