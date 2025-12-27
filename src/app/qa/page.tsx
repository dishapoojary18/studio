import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questions } from "@/lib/data";

export default function QAPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Frequently Asked Questions
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-lg">
        <Accordion type="single" collapsible className="w-full">
          {questions.map((qa) => (
            <AccordionItem value={qa.id} key={qa.id}>
              <AccordionTrigger className="text-lg font-semibold text-left">
                {qa.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {qa.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
