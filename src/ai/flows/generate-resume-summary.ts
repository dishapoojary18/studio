'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a summary of a resume.
 *
 * The flow takes resume text as input and returns a summary highlighting key skills and experiences.
 * It exports:
 *   - generateResumeSummary: The function to trigger the flow.
 *   - GenerateResumeSummaryInput: The input type for the flow.
 *   - GenerateResumeSummaryOutput: The output type for the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateResumeSummaryInputSchema = z.object({
  resumeText: z.string().describe('The text content of the resume to summarize.'),
});
export type GenerateResumeSummaryInput = z.infer<typeof GenerateResumeSummaryInputSchema>;

const GenerateResumeSummaryOutputSchema = z.object({
  summary: z.string().describe('A summary of the resume, highlighting key skills and experiences.'),
});
export type GenerateResumeSummaryOutput = z.infer<typeof GenerateResumeSummaryOutputSchema>;

export async function generateResumeSummary(input: GenerateResumeSummaryInput): Promise<GenerateResumeSummaryOutput> {
  return generateResumeSummaryFlow(input);
}

const resumeSummaryPrompt = ai.definePrompt({
  name: 'resumeSummaryPrompt',
  input: {schema: GenerateResumeSummaryInputSchema},
  output: {schema: GenerateResumeSummaryOutputSchema},
  prompt: `You are an expert resume summarizer. Please provide a concise summary of the following resume, highlighting the key skills and experiences of the candidate.

Resume Text:
{{resumeText}}`,
});

const generateResumeSummaryFlow = ai.defineFlow(
  {
    name: 'generateResumeSummaryFlow',
    inputSchema: GenerateResumeSummaryInputSchema,
    outputSchema: GenerateResumeSummaryOutputSchema,
  },
  async input => {
    const {output} = await resumeSummaryPrompt(input);
    return output!;
  }
);
