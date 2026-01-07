import { QuizQuestion as QuestionType } from '@/types/quiz';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface QuizQuestionProps {
  question: QuestionType;
  selectedAnswer: string | string[] | undefined;
  onAnswer: (answerId: string) => void;
}

export function QuizQuestion({ question, selectedAnswer, onAnswer }: QuizQuestionProps) {
  const isSelected = (optionId: string) => {
    if (Array.isArray(selectedAnswer)) {
      return selectedAnswer.includes(optionId);
    }
    return selectedAnswer === optionId;
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-slide-up">
      {/* Phase Badge */}
      <div className="flex justify-center mb-4">
        <span className={cn(
          "px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider",
          question.phase === 'demographic' && "bg-blue-500/20 text-blue-400",
          question.phase === 'symptom' && "bg-yellow-500/20 text-yellow-400",
          question.phase === 'diagnosis' && "bg-red-500/20 text-red-400",
          question.phase === 'dream' && "bg-green-500/20 text-green-400",
        )}>
          {question.phase === 'demographic' && 'Perfil Básico'}
          {question.phase === 'symptom' && 'Sintomas'}
          {question.phase === 'diagnosis' && 'Diagnóstico'}
          {question.phase === 'dream' && 'Objetivo'}
        </span>
      </div>

      {/* Question */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
        {question.question}
      </h2>

      {question.subtitle && (
        <p className="text-muted-foreground text-center mb-8">
          {question.subtitle}
        </p>
      )}

      {/* Options */}
      <div className="grid gap-3">
        {question.options.map((option) => (
          <Button
            key={option.id}
            variant={isSelected(option.id) ? 'quizSelected' : 'quiz'}
            size="quiz"
            onClick={() => onAnswer(option.id)}
            className="text-left justify-start"
          >
            <div className="flex items-center gap-4 w-full">
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
              <div className={cn(
                "w-5 h-5 rounded-full border-2 flex-shrink-0 transition-all",
                isSelected(option.id) 
                  ? "border-primary bg-primary" 
                  : "border-muted-foreground"
              )}>
                {isSelected(option.id) && (
                  <svg className="w-full h-full text-primary-foreground p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
