import { FileText } from "lucide-react";

export default function TemplatesPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <FileText className="h-16 w-16 text-primary" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Resume Templates Coming Soon
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          We are working on a collection of professionally designed resume templates to help you stand out. Check back soon!
        </p>
      </div>
    </div>
  );
}
