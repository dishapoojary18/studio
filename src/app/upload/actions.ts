"use server";

import {
  analyzeResumeAndSuggestSkills,
  type AnalyzeResumeAndSuggestSkillsOutput,
} from "@/ai/flows/analyze-resume-and-suggest-skills";
import { z } from "zod";

export interface FormState {
  status: "idle" | "loading" | "success" | "error";
  data: AnalyzeResumeAndSuggestSkillsOutput | null;
  message: string | null;
}

const AnalyzeSchema = z.object({
  resumeText: z.string().min(100, { message: "Resume text must be at least 100 characters." }),
  targetRole: z.string().min(3, { message: "Target role must be at least 3 characters." }),
});

export async function analyzeResume(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = AnalyzeSchema.safeParse({
    resumeText: formData.get("resumeText"),
    targetRole: formData.get("targetRole"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      data: null,
      message: validatedFields.error.flatten().fieldErrors.resumeText?.[0] 
        || validatedFields.error.flatten().fieldErrors.targetRole?.[0] 
        || "Invalid input.",
    };
  }

  const { resumeText, targetRole } = validatedFields.data;

  try {
    const analysis = await analyzeResumeAndSuggestSkills({
      resumeText,
      targetRole,
    });

    if (!analysis.currentSkills && !analysis.missingSkills) {
        return {
            status: "error",
            data: null,
            message: "The AI could not analyze this resume. Please try again with a more detailed resume or a different role."
        }
    }

    return {
      status: "success",
      data: analysis,
      message: "Analysis complete.",
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      data: null,
      message: "An unexpected error occurred during analysis. Please try again later.",
    };
  }
}
