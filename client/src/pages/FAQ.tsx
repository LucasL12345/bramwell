import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How quickly can you deliver in Glasgow?",
      answer: "We strive for same-day delivery for orders placed before 10 AM. For all other orders, we guarantee next-working-day delivery across the Greater Glasgow area."
    },
    {
      question: "Is there a deposit required?",
      answer: "Yes, a small refundable security deposit is required for all rentals. This is returned to you immediately upon the safe collection of the equipment."
    },
    {
      question: "What ID do I need to hire equipment?",
      answer: "For new customers, we require two forms of identification: one photo ID (Driving Licence or Passport) and one proof of address (utility bill or bank statement dated within the last 3 months)."
    },
    {
      question: "Do you offer trade accounts?",
      answer: "Yes! We offer credit accounts for verified trade customers. Please contact our office to request an application form."
    },
    {
      question: "What if the equipment breaks down?",
      answer: "In the unlikely event of a breakdown, contact us immediately. We will swap the unit for a replacement free of charge as quickly as possible to minimize downtime."
    },
    {
      question: "How long should I run the dehumidifier for?",
      answer: "This depends on the severity of the damp or flood. For severe flooding, 24/7 operation is recommended until moisture readings return to normal. Our experts can advise you upon delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-4xl font-display font-bold text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-slate-300">Common questions about our rental process and policies.</p>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="bg-white rounded-xl shadow-sm border border-border/60 p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display text-lg font-semibold text-slate-900 hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Can't find the answer you're looking for?</p>
          <a href="/contact" className="text-primary font-bold hover:underline">Contact our support team directly →</a>
        </div>
      </div>
    </div>
  );
}
