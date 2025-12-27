'use server';
/**
 * @fileOverview Analyzes a resume and suggests skills to learn.
 *
 * - analyzeResumeAndSuggestSkills - A function that handles the resume analysis and skill suggestion process.
 * - AnalyzeResumeAndSuggestSkillsInput - The input type for the analyzeResumeAndSuggestSkills function.
 * - AnalyzeResumeAndSuggestSkillsOutput - The return type for the analyzeResumeAndSuggestSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeResumeAndSuggestSkillsInputSchema = z.object({
  resumeText: z.string().describe('The text content of the resume.'),
  targetRole: z.string().describe('The job role the user is targeting.'),
});
export type AnalyzeResumeAndSuggestSkillsInput = z.infer<typeof AnalyzeResumeAndSuggestSkillsInputSchema>;

const AnalyzeResumeAndSuggestSkillsOutputSchema = z.object({
  currentSkills: z.array(z.string()).describe('The skills the user currently has.'),
  missingSkills: z.array(
    z.object({
      skill: z.string().describe('The missing skill.'),
      suggestedCourse: z.string().describe('A suggested course to learn the skill.'),
    })
  ).describe('The skills the user is missing and suggested courses for each skill.'),
});
export type AnalyzeResumeAndSuggestSkillsOutput = z.infer<typeof AnalyzeResumeAndSuggestSkillsOutputSchema>;

export async function analyzeResumeAndSuggestSkills(input: AnalyzeResumeAndSuggestSkillsInput): Promise<AnalyzeResumeAndSuggestSkillsOutput> {
  return analyzeResumeAndSuggestSkillsFlow(input);
}

const analyzeResumePrompt = ai.definePrompt({
  name: 'analyzeResumePrompt',
  input: {schema: AnalyzeResumeAndSuggestSkillsInputSchema},
  output: {schema: AnalyzeResumeAndSuggestSkillsOutputSchema},
  prompt: `Act as a strict career counselor. Here is a resume: {{{resumeText}}}. The user wants to be a {{{targetRole}}}.\n\nList the skills they currently have.\n\nList the CRITICAL skills they are lacking.\n\nFor every lacking skill, recommend a specific course title from Udemy or Coursera.\n\nOutput strictly in JSON format like this: { "current_skills": [], "missing_skills": [ { "skill": "React", "suggested_course": "React - The Complete Guide (Udemy)" } ] }`,
});

const analyzeResumeAndSuggestSkillsFlow = ai.defineFlow(
  {
    name: 'analyzeResumeAndSuggestSkillsFlow',
    inputSchema: AnalyzeResumeAndSuggestSkillsInputSchema,
    outputSchema: AnalyzeResumeAndSuggestSkillsOutputSchema,
  },
  async input => {
    const {output} = await analyzeResumePrompt(input);
    return output!;
  }
);
