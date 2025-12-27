
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Bot, FileText, Briefcase, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-white">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold">
                Powered by Google AI
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-foreground">
                Unlock Your Career Potential
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                SkillGap AI analyzes your resume against your dream job, identifies skill gaps, and creates a personalized learning roadmap to help you succeed.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/upload">
                    Analyze Your Resume <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#how-it-works">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-xl shadow-2xl p-2 bg-gradient-to-br from-primary to-secondary">
               <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop"
                alt="A person working on a laptop"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Smarter Way to Build Your Career</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                In three simple steps, gain clarity and direction for your professional journey.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 border-2 border-primary/20">
                    <FileText className="h-8 w-8 text-primary" />
                </div>
              <h3 className="text-xl font-bold font-headline">1. Upload Your Resume</h3>
              <p className="text-sm text-muted-foreground">
                Provide your current resume and tell us the job title you're aiming for.
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 border-2 border-primary/20">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline">2. Get AI-Powered Insights</h3>
              <p className="text-sm text-muted-foreground">
                Our AI analyzes your skills and experience, highlighting what you have and what you need.
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 border-2 border-primary/20">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline">3. Follow Your Roadmap</h3>
              <p className="text-sm text-muted-foreground">
                Receive a personalized plan with course recommendations and relevant internship opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
       {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
              Ready to Close Your Skill Gap?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take the first step towards your dream career today. Get your free resume analysis and personalized roadmap.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
             <Button asChild size="lg">
                  <Link href="/upload">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
