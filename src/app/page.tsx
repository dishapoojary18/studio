import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Bot, FileText, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline fade-in">
                  Bridge Your <span className="text-primary">Skill Gap</span> with AI
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl fade-in" style={{ animationDelay: '0.2s' }}>
                  Upload your resume, tell us your dream job, and our AI will create a personalized roadmap to success with tailored course recommendations and internship opportunities.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row fade-in" style={{ animationDelay: '0.4s' }}>
                <Button asChild size="lg" className="group">
                  <Link href="/upload">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/#features">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            <div className="w-full max-w-md mx-auto fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-primary to-secondary rounded-lg blur-xl opacity-25"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-border">
                  <div className="flex flex-col items-center space-y-4">
                    <Bot size={64} className="text-primary" />
                    <p className="font-semibold text-center text-lg">Your Personal Career Analyst</p>
                    <div className="w-full p-4 border-2 border-dashed border-border rounded-lg text-center">
                      <FileText className="mx-auto mb-2 text-muted-foreground" size={32} />
                      <p className="text-sm text-muted-foreground">your_resume.pdf</p>
                    </div>
                    <ArrowRight size={32} className="text-muted-foreground" />
                    <div className="w-full p-4 bg-secondary/30 rounded-lg text-center">
                      <Briefcase className="mx-auto mb-2 text-primary" size={32} />
                      <p className="font-medium text-primary">Your Dream Career Awaits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">How SkillGAP Works for You</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We've simplified the path to your dream career. Here’s how our platform helps you get there faster.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-primary" /> AI Resume Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Upload your resume and get an instant, in-depth analysis of your skills and experience against your desired job role.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="text-primary" /> Personalized Skill Roadmap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Discover critical skills you're missing and get a curated list of top courses from platforms like Coursera and Udemy.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="text-primary" /> Internship Matching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Find relevant internship opportunities to gain practical experience, with filters to match your location preferences.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
