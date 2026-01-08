import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  Target, 
  Zap, 
  ArrowRight
} from 'lucide-react';
import { getResultProfile, UserAnswers } from '@/lib/quizData';

// Importar imagens de transformação
import female1 from '@/assets/transformations/female-1.png';
import female2 from '@/assets/transformations/female-2.png';
import male1 from '@/assets/transformations/male-1.jpg';
import male2 from '@/assets/transformations/male-2.jpg';

const transformationImages = [
  { image: female1, name: 'Andressa Teixeira', age: 35, duration: '12 semanas', gender: 'female' },
  { image: male1, name: 'Bruno Pereira', age: 35, duration: '10 semanas', gender: 'male' },
  { image: female2, name: 'Andressa Teixeira', age: 35, duration: '14 semanas', gender: 'female' },
  { image: male2, name: 'Bruno Pereira', age: 35, duration: '12 semanas', gender: 'male' },
];

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

      {/* Transformações */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">
            Transformações reais de alunos
          </h3>

          <div className="space-y-8 max-w-2xl mx-auto">
            {transformationImages.map((transformation, index) => (
              <div key={index} className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={transformation.image}
                    alt={`Transformação de ${transformation.name}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-semibold">{transformation.name}, {transformation.age} anos</p>
                  <p className="text-sm text-primary">Resultado em {transformation.duration}</p>
                </div>
              </div>
            ))}
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
