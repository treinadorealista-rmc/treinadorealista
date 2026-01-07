import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Target, Activity, Zap, CheckCircle2, Star, Users } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="grid-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 py-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Análise Clínica Digital</span>
          </div>

          {/* Headline */}
          <h1 className="text-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Descubra seu{' '}
            <span className="text-primary">Arquétipo Metabólico</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Faça a análise gratuita e descubra por que treinos comuns falham com você. 
            Receba seu protocolo personalizado baseado em +2.000 alunos.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
              <div className="p-2 rounded-lg bg-primary/10">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">Diagnóstico Preciso</div>
                <div className="text-xs text-muted-foreground">9 perguntas estratégicas</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
              <div className="p-2 rounded-lg bg-primary/10">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">Análise de IA</div>
                <div className="text-xs text-muted-foreground">Cruzamento de dados</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
              <div className="p-2 rounded-lg bg-primary/10">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">Resultado Imediato</div>
                <div className="text-xs text-muted-foreground">Protocolo personalizado</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={handleStart}
            size="lg"
            className="text-lg px-10 py-6 h-auto font-bold"
          >
            Fazer Análise Gratuita
          </Button>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>+2.000 alunos</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span>4.9/5.0 avaliação</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>100% gratuito</span>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display text-2xl md:text-4xl font-bold mb-6">
              Não é mais um quiz genérico
            </h2>
            <p className="text-muted-foreground mb-10">
              Enquanto outros fazem perguntas superficiais, nossa análise identifica o verdadeiro motivo 
              pelo qual você não consegue resultados.
            </p>

            <div className="grid gap-4 text-left">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Baseado em ciência real</div>
                  <div className="text-sm text-muted-foreground">
                    Metodologia desenvolvida com +2.000 casos reais documentados
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Diagnóstico personalizado</div>
                  <div className="text-sm text-muted-foreground">
                    Identifica seu arquétipo específico entre os 3 perfis metabólicos
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Protocolo sob medida</div>
                  <div className="text-sm text-muted-foreground">
                    Treino e alimentação específicos para seu tipo de metabolismo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
