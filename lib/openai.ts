import OpenAI from 'openai';
const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
});

export async function generatePdfSummaryFromOpenAI(pdfText: string) {
    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                {
                    role: 'user',
                    content: '',
                },
            ],
            temperature: 0.7,
            max_tokens: 1500,
        });
        return completion.choices[0].message.content;

    } catch (error: any) {
        if (error?.status === 429) {
            throw new Error('RATE_LIMIT_EXCEEDED');
        }
        throw error;
    }
}
// console.log(completion.choices[0].message);