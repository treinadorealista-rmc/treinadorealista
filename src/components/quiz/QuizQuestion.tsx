import { QuizQuestion as QuestionType } from '@/types/quiz';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { DotsNavigation } from './DotsNavigation';

interface QuizQuestionProps {
  question: QuestionType;
  selectedAnswer: string | string[] | undefined;
  onAnswer: (answerId: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalQuestions: number;
  canGoBack: boolean;
  canGoNext: boolean;
}

export function QuizQuestion({ 
  question, 
  selectedAnswer, 
  onAnswer,
  onNext,
  onPrevious,
  currentIndex,
  totalQuestions,
  canGoBack,
  canGoNext,
}: QuizQuestionProps) {
  const isSelected = (optionId: string) => {
    if (Array.isArray(selectedAnswer)) {
      return selectedAnswer.includes(optionId);
    }
    return selectedAnswer === optionId;
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      {/* Question */}
      <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8">
        {question.question}
      </h2>

      {/* Options */}
      <div className="grid gap-3 mb-8">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswer(option.id)}
            className={cn(
              "w-full p-4 rounded-xl text-left transition-all duration-200",
              "bg-card border-2 hover:border-primary/50",
              isSelected(option.id) 
                ? "border-primary bg-primary/10" 
                : "border-border/50"
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
            </div>
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <Button
          variant="ghost"
          onClick={onPrevious}
          disabled={!canGoBack}
          className="text-muted-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        
        <Button
          variant="cta"
          onClick={onNext}
          disabled={!canGoNext}
          className="px-8"
        >
          Próxima
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Dots Navigation */}
      <DotsNavigation current={currentIndex + 1} total={totalQuestions} />
    </div>
  );
}
