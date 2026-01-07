import { UserProfile } from '@/types/quiz';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Clock, 
  Users,
  Star,
  Zap
} from 'lucide-react';

interface QuizResultsProps {
  profile: UserProfile;
  userName: string;
}

export function QuizResults({ profile, userName }: QuizResultsProps) {
  const firstName = userName.split(' ')[0];

  return (
    <div className="min-h-screen gradient-dark">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Badge */}
          <div className="animate-fade-in mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary font-medium">
              <Zap className="w-4 h-4" />
              Resultado da Análise
            </span>
          </div>

          {/* Profile Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 animate-slide-up">
            {firstName}, seu perfil é:{' '}
            <span className="text-gradient">{profile.title}</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            {profile.subtitle}
          </p>
        </div>

        {/* Decorative */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Explanation Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="gradient-card rounded-2xl p-8 border border-border shadow-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/20">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Por que você não consegue resultados?</h2>
                <p className="text-muted-foreground">{profile.description}</p>
              </div>
            </div>

            {/* Pain Points */}
            <div className="space-y-3 mb-8">
              <h3 className="font-semibold text-lg">Baseado nas suas respostas, você enfrenta:</h3>
              {profile.painPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Solution */}
            <div className="p-6 bg-primary/10 border border-primary/30 rounded-xl">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">A Solução para o seu perfil:</h3>
                  <p className="text-muted-foreground">{profile.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              O Protocolo Ideal Para Você
            </h2>
            <p className="text-muted-foreground">
              Desenvolvido especificamente para o perfil {profile.title}
            </p>
          </div>

          <div className="gradient-card rounded-2xl p-8 border-2 border-primary shadow-card glow-primary">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg gradient-primary">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient">{profile.protocolName}</h3>
                <p className="text-muted-foreground">Protocolo Personalizado</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Shield, text: 'Treinos adaptados para prevenir lesões' },
                { icon: Clock, text: 'Sessões otimizadas de 30-45 minutos' },
                { icon: Users, text: 'Suporte da comunidade exclusiva' },
                { icon: Star, text: 'Atualizações baseadas no seu progresso' },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="text-center mb-8">
              <p className="text-muted-foreground mb-2">
                <span className="line-through">Consultoria Presencial: R$ 350/mês</span>
              </p>
              <p className="text-muted-foreground mb-4">
                <span className="line-through">Consultoria Online: R$ 150/mês</span>
              </p>
              <div className="inline-block p-4 bg-primary/20 rounded-xl border border-primary/40">
                <p className="text-sm text-primary mb-1">Protocolo RaonyPro</p>
                <p className="text-4xl font-black text-gradient">R$ 67,90</p>
                <p className="text-sm text-muted-foreground">pagamento único</p>
              </div>
            </div>

            {/* CTA */}
            <Button variant="cta" size="xl" className="w-full group">
              Quero Meu Protocolo Agora
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Guarantee */}
            <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
              <Shield className="w-4 h-4 text-green-400" />
              Garantia de 7 dias ou seu dinheiro de volta
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Resultados de Alunos com Perfil Similar
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Carlos M.',
                profile: profile.title,
                result: 'Perdeu 8kg em 10 semanas',
                quote: 'Finalmente entendi por que nada funcionava antes.',
              },
              {
                name: 'Rafael S.',
                profile: profile.title,
                result: 'Definiu abdômen em 12 semanas',
                quote: 'Os treinos são curtos mas muito eficientes.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="gradient-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center font-bold text-primary-foreground">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-primary">{testimonial.profile}</p>
                  </div>
                </div>
                <p className="font-bold text-primary mb-2">{testimonial.result}</p>
                <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
