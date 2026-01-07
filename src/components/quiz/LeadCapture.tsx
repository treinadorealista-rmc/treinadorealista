import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Lock, CheckCircle } from 'lucide-react';

interface LeadCaptureProps {
  onSubmit: (data: { name: string; whatsapp: string; email: string }) => void;
}

export function LeadCapture({ onSubmit }: LeadCaptureProps) {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    const whatsappNumbers = whatsapp.replace(/\D/g, '');
    if (whatsappNumbers.length < 10) {
      newErrors.whatsapp = 'WhatsApp inválido';
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      newErrors.email = 'Email inválido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ name, whatsapp, email });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 gradient-dark">
      <div className="w-full max-w-md">
        {/* Success Badge */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400">
            <CheckCircle className="w-5 h-5" />
            Sua análise está pronta!
          </div>
        </div>

        {/* Card */}
        <div className="gradient-card rounded-2xl p-8 shadow-card border border-border animate-slide-up">
          <h2 className="text-2xl font-bold text-center mb-2">
            Seu Protocolo Personalizado
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Preencha abaixo para receber seu relatório completo e protocolo sugerido
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 bg-secondary border-border focus:border-primary"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <Input
                type="tel"
                placeholder="WhatsApp (DDD + número)"
                value={whatsapp}
                onChange={handleWhatsAppChange}
                maxLength={16}
                className="h-12 bg-secondary border-border focus:border-primary"
              />
              {errors.whatsapp && (
                <p className="text-red-400 text-sm mt-1">{errors.whatsapp}</p>
              )}
            </div>

            <div>
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-secondary border-border focus:border-primary"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <Button 
              type="submit" 
              variant="cta" 
              className="w-full mt-6"
            >
              Ver Meu Resultado
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          {/* Privacy */}
          <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-6">
            <Lock className="w-3 h-3" />
            Seus dados estão seguros e não serão compartilhados
          </p>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
