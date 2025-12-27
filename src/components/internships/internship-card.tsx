import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Internship } from "@/lib/types";
import { MapPin, Briefcase, Wallet, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function InternshipCard({ internship }: { internship: Internship }) {
  return (
    <Card className="w-full flex flex-col hover:border-primary transition-all shadow-sm hover:shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-xl">{internship.title}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-md">
          <Briefcase className="h-4 w-4"/>
          {internship.company}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{internship.location}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Wallet className="h-4 w-4" />
          <span>{internship.stipend}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{internship.duration}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Badge variant="secondary" className="flex items-center gap-2">
            <Calendar className="h-3 w-3" /> Posted {internship.postedDate}
        </Badge>
        <Button variant="outline">View Details</Button>
      </CardFooter>
    </Card>
  );
}
