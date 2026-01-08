import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  Clock,
  Users,
  Shield,
  Star,
  Award,
  Zap
} from 'lucide-react';
import { getResultProfile, UserAnswers, offerData } from '@/lib/quizData';

export default function Oferta() {
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [leadData, setLeadData] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const savedAnswers = sessionStorage.getItem('quizAnswers');
    const savedLead = sessionStorage.getItem('leadData');
    
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
    if (savedLead) {
      setLeadData(JSON.parse(savedLead));
    }
  }, []);

  const profile = getResultProfile(answers);
  const firstName = leadData?.name?.split(' ')[0] || 'Você';

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="grid-overlay opacity-30" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Solução Personalizada</span>
          </div>

          <h1 className="text-display text-3xl md:text-5xl font-black mb-4">
            {firstName}, aqui está seu protocolo
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Baseado no seu diagnóstico de <span className="text-primary font-semibold">{profile.title}</span>, 
            preparamos o caminho ideal para sua transformação.
          </p>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Escolha o caminho para sua transformação
            </h3>
            <p className="text-center text-muted-foreground mb-10">
              Compare as opções e veja qual faz mais sentido para você:
            </p>

            {/* Offer Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {/* Consultoria Presencial */}
              <div className="relative p-6 bg-background border border-border rounded-2xl opacity-60">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                  Esgotado
                </div>
                <h4 className="font-bold mb-2">Consultoria Presencial</h4>
                <p className="text-3xl font-black line-through text-muted-foreground mb-4">
                  R$ 500
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Lista de espera: 3 meses
                  </li>
                </ul>
              </div>

              {/* Consultoria Online */}
              <div className="relative p-6 bg-background border border-border rounded-2xl opacity-60">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                  Lista de espera
                </div>
                <h4 className="font-bold mb-2">Consultoria Online</h4>
                <p className="text-3xl font-black line-through text-muted-foreground mb-4">
                  R$ {offerData.originalPrice}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Vagas limitadas por mês
                  </li>
                </ul>
              </div>

              {/* Protocolo RaonyPro */}
              <div className="relative p-6 bg-primary/5 border-2 border-primary rounded-2xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Recomendado
                </div>
                <h4 className="font-bold mb-2">{profile.protocolName}</h4>
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground line-through">R$ {offerData.originalPrice}</span>
                  <p className="text-3xl font-black text-primary">
                    R$ {offerData.discountPrice.toFixed(2).replace('.', ',')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ou {offerData.installments}x de R$ {offerData.installmentPrice.toFixed(2).replace('.', ',')}
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Acesso imediato
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Garantia de 7 dias
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits List */}
            <div className="bg-background border border-border rounded-2xl p-6 mb-8">
              <h4 className="font-bold text-lg mb-4 text-center">O que está incluído:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Treinos personalizados para seu biotipo',
                  'Plano alimentar sem dietas restritivas',
                  'Suplementação estratégica (opcional)',
                  'Acompanhamento de evolução',
                  'Comunidade exclusiva de alunos',
                  'Suporte via WhatsApp',
                  'Atualizações mensais do protocolo',
                  'Bônus: Guia de receitas rápidas',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-10">
                Começar Agora
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10">
                Garantir Meu Protocolo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>Compra segura</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span>4.9/5.0 avaliação</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
