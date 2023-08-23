import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
require('dotenv').config()

type ResponseData = {
    message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = 'Generate a fact about geckos, which is wrong but sounds feasible enough that a child would believe it. Make it as absurd as possible, while still sounding plausible.';

    openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo',
    }).then((response) => {
        res.status(200).json({ message: response.choices[0].message.content || 'No response' });
    }).catch((err) => {
        res.status(500).json({ message: `Error generating gecko fact: ${err}` });
    });
}