import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { triggerCheckout } from "@/utils/checkoutAction";

const faqItems = [
  {
    question: "O treino é realmente personalizado para o meu perfil?",
    answer: "Sim. Diferente de fichas genéricas de academia, o sistema utiliza as respostas do seu diagnóstico (como idade, biotipo e nível de experiência) para selecionar os estímulos biomecânicos exatos que o seu corpo precisa agora para evoluir.",
  },
  {
    question: "Tenho mais de 40 anos, esse método funciona para mim?",
    answer: "Com certeza. Inclusive, temos um protocolo específico de Otimização Metabólica focado em saúde hormonal e preservação de massa magra, respeitando a integridade das suas articulações e o seu tempo de recuperação.",
  },
  {
    question: "Preciso passar horas na academia todos os dias?",
    answer: "Não. O conceito de \"Treino Realista\" foca na eficiência do movimento e na intensidade correta, não no volume excessivo. Os treinos são desenhados para serem executados em uma rotina comum, otimizando seus resultados em menos tempo.",
  },
  {
    question: "Sou iniciante e nunca treinei sério, vou conseguir acompanhar?",
    answer: "Sim. O protocolo de Adaptação foi feito exatamente para quem está começando ou voltando após um longo período parado, focando em construir a base necessária antes de avançar para intensidades maiores.",
  },
  {
    question: "O que acontece se eu tiver dúvidas sobre a execução dos exercícios?",
    answer: "Todo o conteúdo é estruturado com foco em biomecânica aplicada, garantindo que você entenda não apenas o que fazer, mas como fazer de forma segura para evitar lesões e maximizar a ativação muscular.",
  },
];

export default function FAQ() {
  return (
    <section className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Dúvidas Frequentes</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Perguntas Frequentes</h3>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Final */}
          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg px-12 py-6 bg-green-600 hover:bg-green-700 text-white font-bold"
              onClick={triggerCheckout}
            >
              ACESSAR MEU PLANO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}