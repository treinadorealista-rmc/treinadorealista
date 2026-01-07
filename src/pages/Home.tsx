import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Target, Activity, Zap, CheckCircle2, Star, Users } from 'lucide-react';
import bodyAnalysisImage from '@/assets/body-analysis.png';

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
        
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Activity className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Análise Clínica Digital</span>
              </div>

              {/* Headline */}
              <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Descubra seu{' '}
                <span className="text-primary">Arquétipo Metabólico</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
                Faça a análise gratuita e descubra por que treinos comuns falham com você. 
                Receba seu protocolo personalizado baseado em +2.000 alunos.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">Diagnóstico Preciso</div>
                    <div className="text-xs text-muted-foreground">9 perguntas estratégicas</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Activity className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">Análise de IA</div>
                    <div className="text-xs text-muted-foreground">Cruzamento de dados</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Zap className="w-4 h-4 text-primary" />
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
                className="text-lg px-10 py-6 h-auto font-bold w-full sm:w-auto"
              >
                Fazer Análise Gratuita
              </Button>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-muted-foreground">
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

            {/* Right Content - Body Analysis Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden border border-primary/30 bg-card/50 backdrop-blur-sm">
                  <img 
                    src={bodyAnalysisImage} 
                    alt="Análise de Composição Corporal - Massa Magra, Gordura Corporal, Massa Muscular" 
                    className="w-full max-w-md h-auto"
                  />
                  
                  {/* Overlay Labels */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                    <div className="text-center">
                      <p className="text-xs text-primary font-medium uppercase tracking-wider">Análise de Composição Corporal</p>
                      <p className="text-xs text-muted-foreground mt-1">Massa Magra • Gordura Corporal • Massa Muscular • IMC</p>
                    </div>
                  </div>
                </div>
              </div>
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
