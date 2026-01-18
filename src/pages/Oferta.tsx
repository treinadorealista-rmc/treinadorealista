import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  Shield,
  Star,
  Award,
  Play,
  Dumbbell,
  Utensils,
  Users,
  Gift,
  Zap,
  MessageCircle
} from 'lucide-react';
import { getResultProfile, UserAnswers, offerData } from '@/lib/quizData';

// Import ALL transformation images
import female1 from '@/assets/transformations/female-1.png';
import female2 from '@/assets/transformations/female-2.png';
import male1 from '@/assets/transformations/male-1.jpg';
import male2 from '@/assets/transformations/male-2.jpg';

// All transformation images with gender
const transformationImages = [
  { image: female1, name: 'Andressa Teixeira', age: 35, gender: 'female' },
  { image: female2, name: 'Andressa Teixeira', age: 35, gender: 'female' },
  { image: male1, name: 'Bruno Pereira', age: 35, gender: 'male' },
  { image: male2, name: 'Bruno Pereira', age: 35, gender: 'male' },
];

export default function Oferta() {
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [leadData, setLeadData] = useState<{ name: string } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
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
  const userGender = answers['gender'] || 'female';
  
  // Filter ALL transformations by gender
  const genderTransformations = transformationImages.filter(t => t.gender === userGender);

  const deliverables = [
    {
      icon: Dumbbell,
      title: 'Sistema de Treino Adaptativo',
      items: ['Treinos para seu biotipo específico', 'Sobrecarga progressiva inteligente'],
    },
    {
      icon: MessageCircle,
      title: 'Acompanhamento',
      items: ['Comunidade exclusiva de alunos no WhatsApp'],
    },
    {
      icon: Gift,
      title: 'Bônus Exclusivos',
      items: ['25 Receitas Simples, Rápidas e Saudáveis: O Guia Prático para Emagrecer Sem Complicação'],
    },
    {
      icon: Zap,
      title: 'Manual da Constância Imbatível',
      items: ['Como treinar mesmo sem motivação e nunca mais parar no meio do caminho'],
    },
];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Section 1: Headline + Subheadline Dinâmica */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="grid-overlay opacity-30" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Plano Recomendado</span>
          </div>

          <h1 className="text-display text-3xl md:text-5xl font-black mb-6">
            Este é o plano recomendado para o seu diagnóstico
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Baseado no seu diagnóstico de <span className="text-primary font-bold">{profile.archetypeName}</span>, {profile.offerSubheadline}
          </p>
        </div>
      </section>

      {/* Section 2: Vídeo e Transição */}
      <section className="py-10 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-lg font-medium mb-6 flex items-center justify-center gap-2">
              <Play className="w-5 h-5 text-primary" />
              Assista antes de continuar (leva menos de 4 minutos)
            </p>
            
            {/* Video - Vertical Format (9:16) */}
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden border border-border">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/27EdggR5-3g"
                  title="Vídeo de apresentação"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            
            <p className="text-center text-xl md:text-2xl font-bold">
              O que você vai usar na prática para sair da estagnação:
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Blocos de Entregáveis */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {deliverables.map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Ancoragem e Oferta Única */}
      <section className="py-10 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              {offerData.anchorText}
            </p>
            
            <div className="p-8 bg-primary/5 border-2 border-primary rounded-2xl">
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">
                Hoje, acesso completo por apenas R$47,90
              </p>
              <p className="text-lg text-muted-foreground">
                ou 12x de R$6,82
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CTA e Prova Social */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* CTA Button */}
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg px-12 py-6 bg-green-600 hover:bg-green-700 text-white font-bold mb-8"
              onClick={() => window.open('https://lastlink.com/p/C2013B548/checkout-payment/', '_blank')}
            >
              Acessar meu plano recomendado
            </Button>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-5 h-5 text-primary" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-5 h-5 text-primary" />
                <span>Garantia 7 dias</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-5 h-5 text-primary" />
                <span>Compra segura</span>
              </div>
            </div>
            
            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <span className="text-muted-foreground">4.9/5.0 avaliação média dos alunos</span>
            </div>
            
            {/* Gender-based Transformations - ALL images */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-4">
                Resultados de alunos com perfil similar ao seu:
              </p>
              <div className="space-y-6">
                {genderTransformations.map((transformation, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-center">
                      <img 
                        src={transformation.image} 
                        alt={`Transformação de ${transformation.name}`}
                        className="rounded-xl max-h-80 object-cover"
                      />
                    </div>
                    <p className="text-center font-medium">
                      {transformation.name}, {transformation.age} anos
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
