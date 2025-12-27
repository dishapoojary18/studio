'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { analyzeResume, type FormState } from '@/app/upload/actions';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  AlertCircle,
  BadgeCheck,
  BookOpen,
  Bot,
  CircleX,
  FileUp,
  Loader2,
  Sparkles,
  Target,
  Upload,
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';
import * as pdfjs from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.min.mjs';

const initialState: FormState = {
  status: 'idle',
  data: null,
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" /> Analyze Resume
        </>
      )}
    </Button>
  );
}

export function ResumeAnalyzer() {
  const [state, formAction] = useFormState(analyzeResume, initialState);
  const { toast } = useToast();
  const [isDragging, setIsDragging] = useState(false);
  const resumeTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state.status === 'error' && state.message) {
      toast({
        variant: 'destructive',
        title: 'Analysis Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  const handleFile = async (file: File) => {
    if (file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const text = loadEvent.target?.result;
        if (typeof text === 'string' && resumeTextAreaRef.current) {
          resumeTextAreaRef.current.value = text;
          toast({
            title: 'File Loaded',
            description: `${file.name} content has been pasted.`,
          });
        }
      };
      reader.onerror = () => {
        toast({
          variant: 'destructive',
          title: 'File Read Error',
          description: `Could not read the file ${file.name}.`,
        });
      };
      reader.readAsText(file);
    } else if (file.type === 'application/pdf') {
      try {
        const reader = new FileReader();
        reader.onload = async (event) => {
          if (!event.target?.result) return;
          const pdfData = new Uint8Array(event.target.result as ArrayBuffer);
          const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
          let textContent = '';
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const text = await page.getTextContent();
            textContent += text.items.map((s) => (s as any).str).join(' ');
          }
          if (resumeTextAreaRef.current) {
            resumeTextAreaRef.current.value = textContent;
            toast({
              title: 'PDF Parsed',
              description: `Extracted text from ${file.name}.`,
            });
          }
        };
        reader.readAsArrayBuffer(file);
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'PDF Parsing Error',
          description: 'Could not extract text from the PDF.',
        });
      }
    } else {
      toast({
        variant: 'destructive',
        title: 'Unsupported File Type',
        description: 'Please upload a .txt or .pdf file.',
      });
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <Card
        className={cn(
          'w-full shadow-lg bg-white transition-all',
        )}
      >
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Let's Get Started</CardTitle>
          <CardDescription>
            Paste your resume, drop a file, or click to upload.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-6">
            <div
              className={cn(
                'space-y-2 relative rounded-lg',
                isDragging && 'ring-4 ring-primary/20'
              )}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="flex justify-between items-center">
                <Label htmlFor="resumeText">Paste Your Resume</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload File
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".txt,.pdf"
                />
              </div>

              <Textarea
                ref={resumeTextAreaRef}
                id="resumeText"
                name="resumeText"
                placeholder="Paste the full text of your resume here..."
                className={cn('min-h-[250px]', isDragging && 'border-primary bg-primary/5')}
                required
              />
              {isDragging && (
                <div className="absolute inset-0 bg-primary/10 flex flex-col items-center justify-center rounded-md z-10 pointer-events-none">
                  <FileUp className="h-12 w-12 text-primary" />
                  <p className="mt-2 font-semibold text-primary">Drop your resume file here</p>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetRole">Target Job Role</Label>
              <Input id="targetRole" name="targetRole" placeholder="e.g., Senior Frontend Developer" required />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      <div className="sticky top-20">
        {state.status === 'idle' && (
          <Card className="flex flex-col items-center justify-center p-8 text-center bg-white/50 border-2 border-dashed">
            <Bot size={48} className="text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold font-headline">Awaiting Your Resume</h3>
            <p className="text-muted-foreground mt-2">
              Your personalized analysis will appear here once you submit your details.
            </p>
          </Card>
        )}

        {state.status === 'loading' && (
          <Card className="flex flex-col items-center justify-center p-8 text-center">
            <Loader2 size={48} className="text-primary animate-spin mb-4" />
            <h3 className="text-xl font-semibold font-headline">AI is Analyzing...</h3>
            <p className="text-muted-foreground mt-2">
              This may take a moment. We're crafting your personalized career roadmap!
            </p>
          </Card>
        )}

        {state.status === 'error' && state.message && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Analysis Failed</AlertTitle>
            <AlertDescription>{state.message} Please review your input and try again.</AlertDescription>
          </Alert>
        )}

        {state.status === 'success' && state.data && (
          <Card className="shadow-lg bg-white max-h-[calc(100vh-6rem)] overflow-y-auto">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Sparkles className="text-primary" /> Analysis for:{' '}
                <span className="text-primary">{state.data.targetRole}</span>
              </CardTitle>
              <CardDescription>Here is your personalized skill gap analysis and roadmap.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3 font-headline">
                  <BadgeCheck className="text-green-500" />
                  Your Current Skills
                </h3>
                {state.data.currentSkills.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {state.data.currentSkills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No specific skills identified from the resume.
                  </p>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3 font-headline">
                  <Target className="text-red-500" />
                  Missing Critical Skills
                </h3>
                {state.data.missingSkills.length > 0 ? (
                  <div className="space-y-4">
                    {state.data.missingSkills.map((item, i) => (
                      <Card key={i} className="bg-background/50">
                        <CardHeader>
                          <CardTitle className="text-md flex items-center gap-2">
                            <CircleX className="text-red-500 h-5 w-5" />
                            {item.skill}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm font-semibold flex items-center gap-2">
                            <BookOpen className="text-primary h-4 w-4" />
                            Suggested Course:
                          </p>
                          <p className="text-sm text-muted-foreground pl-6">{item.suggestedCourse}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4 bg-green-50 border-green-200 border rounded-lg">
                    <BadgeCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold text-green-800">Excellent Match!</p>
                    <p className="text-sm text-green-700">
                      Your resume shows a strong alignment with this role.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
