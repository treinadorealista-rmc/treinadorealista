import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { quizQuestions, UserAnswers } from '@/lib/quizData';
import { cn } from '@/lib/utils';

export default function Quiz() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});

  const currentQuestion = quizQuestions[currentIndex];
  const totalQuestions = quizQuestions.length;
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const currentPhase = currentQuestion.phase === 'diagnosis' ? 'Diagnóstico' : 'Objetivos';
  const selectedAnswer = answers[currentQuestion.id];

  useEffect(() => {
    // Scroll to top on question change
    window.scrollTo(0, 0);
  }, [currentIndex]);

  const handleSelect = (optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Save answers and go to loading
      sessionStorage.setItem('quizAnswers', JSON.stringify(answers));
      navigate('/loading');
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">
              Pergunta {currentIndex + 1} de {totalQuestions}
            </span>
            <span className="text-sm text-primary font-medium">{currentPhase}</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          
          {/* Progress Bar */}
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Question Content */}
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col">
        <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full">
          {/* Question */}
          <div className="text-center mb-8">
            <h2 className="text-display text-2xl md:text-4xl font-bold mb-3">
              {currentQuestion.question}
            </h2>
            {currentQuestion.subtitle && (
              <p className="text-muted-foreground">
                {currentQuestion.subtitle}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="grid gap-3 mb-8">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={cn(
                  "w-full p-4 rounded-xl text-left transition-all duration-200",
                  "bg-card border-2 hover:border-primary/50",
                  selectedAnswer === option.id 
                    ? "border-primary bg-primary/10" 
                    : "border-border"
                )}
              >
                <div className="flex items-center gap-4">
                  {option.icon && (
                    <span className="text-2xl flex-shrink-0">{option.icon}</span>
                  )}
                  <div className="flex-1">
                    <div className="font-semibold text-base">{option.label}</div>
                    {option.description && (
                      <div className="text-sm text-muted-foreground mt-1">
                        {option.description}
                      </div>
                    )}
                  </div>
                  {selectedAnswer === option.id && (
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="ghost"
              onClick={handlePrevious}
              className="text-muted-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="px-8"
            >
              {currentIndex === totalQuestions - 1 ? 'Finalizar' : 'Próxima'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Phase Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {['diagnosis', 'objectives'].map((phase, index) => (
            <div
              key={phase}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                currentQuestion.phase === phase
                  ? "bg-primary"
                  : index < (currentQuestion.phase === 'objectives' ? 1 : 0)
                    ? "bg-primary/50"
                    : "bg-muted"
              )}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
