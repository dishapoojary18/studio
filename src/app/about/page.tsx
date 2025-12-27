import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">About SkillGap AI</h1>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              We are on a mission to empower students and professionals by providing them with the clarity and tools needed to navigate their career paths successfully.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                <Bot className="text-primary"/> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                In today's fast-paced job market, it's difficult to know which skills are in demand and how to acquire them. Traditional career advice is often generic and doesn't take an individual's unique background into account. SkillGap AI was born out of this frustration.
              </p>
              <p>
                We believe that everyone deserves a personalized roadmap to their dream career. By leveraging the power of advanced AI, we analyze your unique skills and experience to provide actionable insights. We bridge the gap between your current resume and your future aspirations, making your professional goals more attainable than ever.
              </p>
            </CardContent>
          </Card>

          <div className="text-center space-y-4 pt-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet the Founders</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              SkillGap AI is led by a passionate team of innovators dedicated to reshaping the future of career development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center shadow-md">
              <CardContent className="pt-6">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src="https://i.pravatar.cc/150?u=founder1" />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold font-headline">Aarav Patel</h3>
                <p className="text-primary font-medium">Co-Founder & CEO</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  A former software engineer, Aarav experienced the hiring gap firsthand. He is passionate about using technology to create equal opportunities for all.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md">
              <CardContent className="pt-6">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src="https://i.pravatar.cc/150?u=founder2" />
                  <AvatarFallback>IS</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold font-headline">Isha Singh</h3>
                <p className="text-primary font-medium">Co-Founder & Head of Product</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  With a background in career counseling, Isha ensures our product is always user-centric, providing real value to students and job seekers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
