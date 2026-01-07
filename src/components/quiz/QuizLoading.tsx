import { useEffect, useState } from 'react';
import { loadingSteps } from '@/data/quizQuestions';
import { Activity, CheckCircle } from 'lucide-react';

interface QuizLoadingProps {
  onComplete: () => void;
}

export function QuizLoading({ onComplete }: QuizLoadingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);

  useEffect(() => {
    if (currentStep >= loadingSteps.length) {
      setTimeout(onComplete, 500);
      return;
    }

    const step = loadingSteps[currentStep];
    const progressInterval = 50;
    const progressIncrement = 100 / (step.duration / progressInterval);

    const timer = setInterval(() => {
      setStepProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentStep((s) => s + 1);
            setStepProgress(0);
          }, 200);
          return 100;
        }
        return prev + progressIncrement;
      });
    }, progressInterval);

    return () => clearInterval(timer);
  }, [currentStep, onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 gradient-dark">
      {/* Animated Logo */}
      <div className="relative mb-12">
        <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center animate-pulse-glow">
          <Activity className="w-12 h-12 text-primary-foreground animate-spin-slow" />
        </div>
        <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-primary/30 animate-ping" />
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
        Processando sua Análise
      </h2>
      <p className="text-muted-foreground text-center mb-12">
        Aguarde enquanto geramos seu protocolo personalizado
      </p>

      {/* Steps */}
      <div className="w-full max-w-md space-y-4">
        {loadingSteps.map((step, index) => (
          <div 
            key={index}
            className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
              index < currentStep 
                ? 'bg-primary/10 border border-primary/30' 
                : index === currentStep 
                  ? 'bg-card border border-border' 
                  : 'opacity-40'
            }`}
          >
            <div className="flex-shrink-0">
              {index < currentStep ? (
                <CheckCircle className="w-6 h-6 text-primary" />
              ) : index === currentStep ? (
                <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-muted-foreground" />
              )}
            </div>
            <div className="flex-1">
              <p className={`font-medium ${index <= currentStep ? 'text-foreground' : 'text-muted-foreground'}`}>
                {step.text}
              </p>
              {index === currentStep && (
                <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full gradient-primary transition-all duration-100 rounded-full"
                    style={{ width: `${stepProgress}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
