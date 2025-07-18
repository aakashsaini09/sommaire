import { SUMMARY_SYSTEM_PROMPT } from '@/utils/prompts';
import OpenAI from 'openai';
const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
});

export async function generatePdfSummaryFromOpenAI(pdfText: string) {
    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: 'system', content: SUMMARY_SYSTEM_PROMPT },
                {
                    role: 'user',
                    content: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper makrdown formatting:\n\n${pdfText}`,
                },
            ],
            temperature: 0.7,
            max_tokens: 1500,
        });
        return completion.choices[0].message.content;

    } catch (error: any) {
        if (error?.status === 429) {
            console.log("error: ", error)
            throw new Error('RATE_LIMIT_EXCEEDED');
        }
        throw error;
    }
}
// console.log(completion.choices[0].message);