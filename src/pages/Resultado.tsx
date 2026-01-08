import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  Target, 
  Zap, 
  ArrowRight
} from 'lucide-react';
import { getResultProfile, UserAnswers, transformations } from '@/lib/quizData';

export default function Resultado() {
  const navigate = useNavigate();
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
  
  // Pegar as transformações (feminina e masculina)
  const femaleTransformation = transformations.find(t => t.gender === 'female');
  const maleTransformation = transformations.find(t => t.gender === 'male');
  
  const firstName = leadData?.name?.split(' ')[0] || 'Você';

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="grid-overlay opacity-30" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Diagnóstico Completo</span>
          </div>

          <h1 className="text-display text-3xl md:text-5xl font-black mb-4">
            {firstName}, seu arquétipo é:
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            {profile.title}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {profile.subtitle}
          </p>
        </div>
      </section>

      {/* Profile Description */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-center mb-10">
              {profile.description}
            </p>

            {/* Pain Points / Next Challenges */}
            <div className="mb-10">
              {profile.profile === 'athletic' ? (
                <h3 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Seus próximos desafios
                </h3>
              ) : (
                <h3 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Por que você não viu resultados
                </h3>
              )}
              
              <div className="grid md:grid-cols-2 gap-4">
                {profile.painPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border"
                  >
                    {profile.profile === 'athletic' ? (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">→</span>
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-destructive font-bold text-sm">✗</span>
                      </div>
                    )}
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                A solução para seu perfil
              </h3>
              <p className="text-muted-foreground">
                {profile.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformações Estáticas */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">
            Transformações reais de alunos
          </h3>

          <div className="space-y-10 max-w-2xl mx-auto">
            {/* Transformação Feminina */}
            {femaleTransformation && (
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="grid grid-cols-2">
                    {/* Antes */}
                    <div className="relative">
                      <img
                        src={femaleTransformation.beforeImage}
                        alt="Antes"
                        className="w-full aspect-[3/4] object-cover"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 bg-black/70 rounded-full text-sm font-medium text-white">
                        Antes
                      </div>
                    </div>
                    {/* Depois */}
                    <div className="relative">
                      <img
                        src={femaleTransformation.afterImage}
                        alt="Depois"
                        className="w-full aspect-[3/4] object-cover"
                      />
                      <div className="absolute top-3 right-3 px-3 py-1 bg-primary rounded-full text-sm font-medium text-primary-foreground">
                        Depois
                      </div>
                    </div>
                  </div>
                  {/* Linha divisória central */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white/80 -translate-x-1/2" />
                </div>
                <div className="text-center">
                  <p className="font-semibold">{femaleTransformation.name}, {femaleTransformation.age} anos</p>
                  <p className="text-sm text-muted-foreground">{femaleTransformation.description}</p>
                  <p className="text-sm text-primary mt-1">Resultado em {femaleTransformation.duration}</p>
                </div>
              </div>
            )}

            {/* Transformação Masculina */}
            {maleTransformation && (
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="grid grid-cols-2">
                    {/* Antes */}
                    <div className="relative">
                      <img
                        src={maleTransformation.beforeImage}
                        alt="Antes"
                        className="w-full aspect-[3/4] object-cover"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 bg-black/70 rounded-full text-sm font-medium text-white">
                        Antes
                      </div>
                    </div>
                    {/* Depois */}
                    <div className="relative">
                      <img
                        src={maleTransformation.afterImage}
                        alt="Depois"
                        className="w-full aspect-[3/4] object-cover"
                      />
                      <div className="absolute top-3 right-3 px-3 py-1 bg-primary rounded-full text-sm font-medium text-primary-foreground">
                        Depois
                      </div>
                    </div>
                  </div>
                  {/* Linha divisória central */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white/80 -translate-x-1/2" />
                </div>
                <div className="text-center">
                  <p className="font-semibold">{maleTransformation.name}, {maleTransformation.age} anos</p>
                  <p className="text-sm text-muted-foreground">{maleTransformation.description}</p>
                  <p className="text-sm text-primary mt-1">Resultado em {maleTransformation.duration}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para sua transformação?
            </h3>
            <p className="text-muted-foreground mb-8">
              Agora que você conhece seu diagnóstico, veja a solução personalizada que preparamos para o seu perfil.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-10 gap-2"
              onClick={() => navigate('/oferta')}
            >
              Ver Meu Protocolo Personalizado
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
