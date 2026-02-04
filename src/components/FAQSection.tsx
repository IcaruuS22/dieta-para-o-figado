import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Serve para quem tem gordura no fígado (esteatose)?",
    answer: "Sim. O receituário foi pensado para apoiar o fígado e contribuir na redução do acúmulo de gordura com escolhas simples, equilibradas e acessíveis."
  },
  {
    question: "Preciso parar de comer tudo que gosto?",
    answer: "Não. O foco é substituir ingredientes que favorecem a esteatose por alternativas saborosas e funcionais, sem abrir mão do prazer à mesa."
  },
  {
    question: "É difícil de preparar?",
    answer: "Não. As receitas são práticas, econômicas e prontas em até 15 minutos, pensadas para rotina corrida."
  },
  {
    question: "Serve para toda a família?",
    answer: "Sim. As preparações são saborosas e equilibradas, sem exigir comida separada ou complicações."
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem garantia de 7 dias com zero risco. Se não ficar satisfeito(a), devolvemos 100% do valor."
  }
];

export const FAQSection = () => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
