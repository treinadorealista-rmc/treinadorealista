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
  // Mulheres
  { image: female1, name: 'Andressa Teixeira', age: 35, gender: 'female' },
  { image: female2, name: 'Andressa Teixeira', age: 35, gender: 'female' },
  { image: 'https://i.postimg.cc/C5y6v77r/Gemini-Generated-Image-mu42vqmu42vqmu42.png', name: 'Mariana S.', age: 34, gender: 'female' },
  { image: 'https://i.postimg.cc/SNftrWMv/Gemini-Generated-Image-1h9ax51h9ax51h9a.png', name: 'Patrícia L.', age: 42, gender: 'female' },
  { image: 'https://i.postimg.cc/25MH6Gs4/Gemini-Generated-Image-fndschfndschfnds.png', name: 'Carla B.', age: 29, gender: 'female' },
  // Homens
  { image: male1, name: 'Bruno Pereira', age: 35, gender: 'male' },
  { image: male2, name: 'Bruno Pereira', age: 35, gender: 'male' },
  
  { image: 'https://i.postimg.cc/MK5dRzkq/Gemini-Generated-Image-yysebxyysebxyyse.png', name: 'Felipe T.', age: 27, gender: 'male' },
];

export default function Resultado() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [leadData, setLeadData] = useState<{ name: string } | null>(null);

  useEffect(() => {
    // Garantir scroll para o topo ao carregar a página
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
  const firstName = leadData?.name?.split(' ')[0] || 'Você';

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Seção 1: Diagnóstico Completo */}
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

      {/* Seção 2: O que isso significa na prática */}
      <section className="py-10 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              O que isso significa na prática
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {profile.whatItMeans}
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3: Por que métodos comuns não funcionaram */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              Por que métodos comuns não funcionaram para você até agora
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {profile.whyMethodsFailed}
            </p>
          </div>
        </div>
      </section>

      {/* Seção 4: O caminho certo para o seu perfil */}
      <section className="py-10 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              O caminho certo para o seu perfil
            </h3>
            <div className="space-y-4">
              {profile.rightPath.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: Resultados de pessoas com o MESMO perfil */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">
            Resultados de pessoas com o MESMO perfil
          </h3>

          <div className="space-y-8 max-w-2xl mx-auto">
            {transformationImages
              .filter(t => t.gender === answers['gender'])
              .map((transformation, index) => (
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
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Seção 6: Transição e CTA */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Com base no seu diagnóstico, esta é a solução recomendada para você agora:
            </p>
            <p className="text-xl md:text-2xl font-bold text-primary mb-8">
              {profile.solution}
            </p>
            <Button 
              size="lg" 
              className="text-lg px-10 gap-2 bg-green-600 hover:bg-green-700"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/oferta');
              }}
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
