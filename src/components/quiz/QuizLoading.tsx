import { useEffect, useState } from 'react';
import { Database } from 'lucide-react';
import { DiagonalLines } from './DiagonalLines';

interface QuizLoadingProps {
  onComplete: () => void;
}

const loadingMessages = [
  'Analisando suas respostas...',
  'Comparando com base de dados de 2.000 alunos...',
  'Identificando padrões metabólicos...',
  'Gerando seu protocolo personalizado...',
];

export function QuizLoading({ onComplete }: QuizLoadingProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [metrics, setMetrics] = useState({
    samples: 0,
    patterns: 0,
    precision: 0,
    confidence: 0,
  });

  useEffect(() => {
    const duration = 4000;
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      // Update message based on progress
      const newMessageIndex = Math.min(
        Math.floor((newProgress / 100) * loadingMessages.length),
        loadingMessages.length - 1
      );
      setMessageIndex(newMessageIndex);

      // Animate metrics
      setMetrics({
        samples: Math.floor((newProgress / 100) * 2047),
        patterns: Math.floor((newProgress / 100) * 156),
        precision: Math.min((newProgress / 100) * 94.3, 94.3),
        confidence: Math.min((newProgress / 100) * 98.1, 98.1),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 gradient-dark relative overflow-hidden">
      <DiagonalLines />
      
      <div className="relative z-10 w-full max-w-lg mx-auto text-center">
        {/* Icon */}
        <div className="mb-8 animate-pulse">
          <div className="w-24 h-24 mx-auto rounded-2xl bg-card border-2 border-primary shadow-[0_0_30px_rgba(255,107,0,0.3)] flex items-center justify-center">
            <Database className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* Loading Message */}
        <h2 className="text-xl md:text-2xl font-bold mb-8 min-h-[3rem]">
          {loadingMessages[messageIndex]}
        </h2>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
            <div 
              className="h-full bg-primary transition-all duration-100 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-primary font-bold text-lg">
            {Math.round(progress)}%
          </span>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          <div className="p-3 rounded-xl bg-card border border-border/50">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Amostras
            </div>
            <div className="text-lg md:text-xl font-bold text-primary">
              {metrics.samples.toLocaleString()}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-card border border-border/50">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Padrões
            </div>
            <div className="text-lg md:text-xl font-bold text-primary">
              {metrics.patterns}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-card border border-border/50">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Precisão
            </div>
            <div className="text-lg md:text-xl font-bold text-primary">
              {metrics.precision.toFixed(1)}%
            </div>
          </div>
          <div className="p-3 rounded-xl bg-card border border-border/50">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Confiança
            </div>
            <div className="text-lg md:text-xl font-bold text-primary">
              {metrics.confidence.toFixed(1)}%
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-muted-foreground text-sm mt-8">
          Aguarde enquanto processamos sua análise...
        </p>
      </div>
    </div>
  );
}
