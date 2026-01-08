import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  Target, 
  Zap, 
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { getResultProfile, UserAnswers, transformations } from '@/lib/quizData';

export default function Resultado() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [leadData, setLeadData] = useState<{ name: string } | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

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
  const relevantTransformations = transformations.filter(t => 
    t.profiles.includes(answers['body-type'] || 'skinny-fat')
  );
  const firstName = leadData?.name?.split(' ')[0] || 'Você';

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

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

      {/* Before/After Slider */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">
            Transformações reais de alunos
          </h3>

          {relevantTransformations.length > 0 && (
            <div 
              ref={sliderRef}
              className="relative max-w-lg mx-auto aspect-[3/4] rounded-2xl overflow-hidden cursor-ew-resize select-none"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image */}
              <img
                src={relevantTransformations[0].afterImage}
                alt="Depois"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Before Image (clipped) */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={relevantTransformations[0].beforeImage}
                  alt="Antes"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
                />
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <ChevronLeft className="w-4 h-4 text-gray-600 -mr-1" />
                  <ChevronRight className="w-4 h-4 text-gray-600 -ml-1" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 rounded-full text-sm font-medium">
                Antes
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary rounded-full text-sm font-medium">
                Depois
              </div>
            </div>
          )}

          {/* Transformation Info */}
          {relevantTransformations.length > 0 && (
            <div className="text-center mt-6 max-w-lg mx-auto">
              <p className="font-semibold">{relevantTransformations[0].name}, {relevantTransformations[0].age} anos</p>
              <p className="text-sm text-muted-foreground">{relevantTransformations[0].description}</p>
              <p className="text-sm text-primary mt-1">Resultado em {relevantTransformations[0].duration}</p>
            </div>
          )}
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
