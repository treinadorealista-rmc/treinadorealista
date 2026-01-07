import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, Zap, Check } from 'lucide-react';
import { DiagonalLines } from './DiagonalLines';
import { FeatureCard } from './FeatureCard';

interface QuizCoverProps {
  onStart: () => void;
}

export function QuizCover({ onStart }: QuizCoverProps) {
  return (
    <div className="min-h-screen flex flex-col gradient-dark relative overflow-hidden">
      <DiagonalLines />
      
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Badge */}
        <div className="animate-fade-in mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
            Análise Clínica Digital
          </span>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
            Descubra qual é o seu
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary leading-tight mb-4">
            Arquétipo Metabólico
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            E por que treinos comuns falham com você
          </p>
          
          {/* Decorative line */}
          <div className="w-24 h-1 bg-primary mx-auto my-8 rounded-full" />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-xl mx-auto mb-10 animate-fade-in">
          <FeatureCard icon={Target} title="Protocolo Personalizado" />
          <FeatureCard icon={Users} title="Base de 2.000 Alunos" />
          <FeatureCard icon={Zap} title="Resultados em 12 Semanas" />
        </div>

        {/* CTA Button */}
        <div className="animate-scale-in mb-6">
          <Button 
            variant="cta" 
            size="xl" 
            onClick={onStart}
            className="group uppercase tracking-wider"
          >
            Fazer Análise Gratuita
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Quick info */}
        <p className="text-muted-foreground text-sm flex items-center gap-2 animate-fade-in">
          <Zap className="w-4 h-4 text-primary" />
          Análise completa em menos de 3 minutos
        </p>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-border/30 bg-card/30 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
            Não é mais um quiz genérico
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {[
                'Análise baseada em mais de 2.000 alunos reais',
                'Identifica seu padrão metabólico único',
                'Protocolo específico para seu biotipo',
                'Prevenção de lesões personalizada',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="hidden md:block">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl font-black text-primary mb-2">94.3%</div>
                  <div className="text-muted-foreground text-sm">Taxa de precisão na análise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
