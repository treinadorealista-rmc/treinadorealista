import { Button } from '@/components/ui/button';
import { ArrowRight, Activity, Shield, Users } from 'lucide-react';

interface QuizCoverProps {
  onStart: () => void;
}

export function QuizCover({ onStart }: QuizCoverProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 gradient-dark">
      {/* Badge */}
      <div className="animate-fade-in mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
          <Activity className="w-4 h-4" />
          Análise Metabólica Avançada
        </span>
      </div>

      {/* Main Headline */}
      <div className="text-center max-w-3xl mx-auto animate-slide-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
          Descubra seu{' '}
          <span className="text-gradient">Arquétipo Metabólico</span>
          {' '}e por que treinos comuns{' '}
          <span className="text-muted-foreground">falham com você</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Em 2 minutos, você vai entender exatamente por que seu corpo resiste a mudanças 
          — e receber um protocolo personalizado baseado em +2.000 alunos analisados.
        </p>
      </div>

      {/* CTA Button */}
      <div className="animate-scale-in mb-12">
        <Button 
          variant="cta" 
          size="xl" 
          onClick={onStart}
          className="group"
        >
          Fazer Análise Gratuita
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm animate-fade-in">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary" />
          <span>100% Gratuito</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-primary" />
          <span>+2.000 análises realizadas</span>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-primary" />
          <span>Resultado em 2 minutos</span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
