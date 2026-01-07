import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Database, Shield, Sparkles } from 'lucide-react';
import { loadingMessages } from '@/lib/quizData';

const icons = [Activity, Database, Shield, Sparkles];

export default function Loading() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [iconIndex, setIconIndex] = useState(0);
  const [metrics, setMetrics] = useState({
    samples: 0,
    patterns: 0,
    precision: 0,
    confidence: 0,
  });

  useEffect(() => {
    const duration = 5000;
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      // Update message every 25%
      const newMessageIndex = Math.min(
        Math.floor(newProgress / 25),
        loadingMessages.length - 1
      );
      setMessageIndex(newMessageIndex);

      // Update icon
      setIconIndex(Math.floor(currentStep / (steps / icons.length)) % icons.length);

      // Update metrics
      setMetrics({
        samples: Math.min(Math.floor(newProgress * 23.47), 2347),
        patterns: Math.min(Math.floor(newProgress * 1.27), 127),
        precision: Math.min(Math.floor(newProgress * 0.97), 97),
        confidence: Math.min(Math.floor(newProgress * 0.94), 94),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          navigate('/lead');
        }, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [navigate]);

  const CurrentIcon = icons[iconIndex];

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="grid-overlay opacity-50" />
      
      {/* Diagonal Lines Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '-100%',
              right: '-100%',
              transform: 'rotate(-15deg)',
              animation: `slide-right ${3 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-lg">
        {/* Icon */}
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
          <div className="relative p-6 bg-card border border-border rounded-full">
            <CurrentIcon className="w-12 h-12 text-primary animate-pulse" />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-display text-xl md:text-2xl font-bold mb-6">
          {loadingMessages[messageIndex]}
        </h2>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-3 bg-muted rounded-full overflow-hidden mb-2">
            <div 
              className="h-full bg-primary transition-all duration-100 ease-linear rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-card border border-border rounded-xl">
            <div className="text-2xl font-bold text-primary">{metrics.samples.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Amostras analisadas</div>
          </div>
          <div className="p-4 bg-card border border-border rounded-xl">
            <div className="text-2xl font-bold text-primary">{metrics.patterns}</div>
            <div className="text-xs text-muted-foreground">Padrões identificados</div>
          </div>
          <div className="p-4 bg-card border border-border rounded-xl">
            <div className="text-2xl font-bold text-primary">{metrics.precision}%</div>
            <div className="text-xs text-muted-foreground">Precisão do modelo</div>
          </div>
          <div className="p-4 bg-card border border-border rounded-xl">
            <div className="text-2xl font-bold text-primary">{metrics.confidence}%</div>
            <div className="text-xs text-muted-foreground">Nível de confiança</div>
          </div>
        </div>

        {/* Footer Message */}
        <p className="text-sm text-muted-foreground mt-8">
          Aguarde enquanto preparamos sua análise personalizada...
        </p>
      </div>

      <style>{`
        @keyframes slide-right {
          from { transform: translateX(-100%) rotate(-15deg); }
          to { transform: translateX(100%) rotate(-15deg); }
        }
      `}</style>
    </div>
  );
}
