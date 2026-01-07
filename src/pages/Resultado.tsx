import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Target, 
  Zap, 
  Shield, 
  Star,
  Clock,
  Users,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { getResultProfile, UserAnswers, transformations, offerData } from '@/lib/quizData';
import { cn } from '@/lib/utils';

export default function Resultado() {
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

            {/* Pain Points */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                Por que você não viu resultados
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {profile.painPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border"
                  >
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-destructive font-bold text-sm">✗</span>
                    </div>
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

      {/* Offer Section */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Seu protocolo personalizado
            </h3>
            <p className="text-center text-muted-foreground mb-10">
              Baseado no seu diagnóstico, recomendamos o seguinte caminho:
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
