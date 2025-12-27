import { ResumeAnalyzer } from "@/components/upload/resume-analyzer";

export default function UploadPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
       <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Analyze Your Resume
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Paste your resume and enter your target role to get an instant AI-powered analysis.
        </p>
      </div>
      <ResumeAnalyzer />
    </div>
  );
}
