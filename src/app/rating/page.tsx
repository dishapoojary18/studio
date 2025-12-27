import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ratings } from "@/lib/data";
import { Star } from "lucide-react";

export default function RatingPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          What Our Users Say
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          We're proud to have helped so many students and professionals on their career journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ratings.map((rating) => (
          <Card key={rating.id} className="bg-white shadow-lg flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={rating.avatar} alt={rating.name} />
                  <AvatarFallback>{rating.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-lg">{rating.name}</h3>
                  <p className="text-sm text-muted-foreground">{rating.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < rating.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground italic">"{rating.comment}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
