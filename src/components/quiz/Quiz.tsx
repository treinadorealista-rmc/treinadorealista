import { useState } from 'react';
import { QuizStep, QuizAnswers, UserProfile } from '@/types/quiz';
import { quizQuestions } from '@/data/quizQuestions';
import { determineProfile } from '@/data/userProfiles';
import { QuizCover } from './QuizCover';
import { QuizProgress } from './QuizProgress';
import { QuizQuestion } from './QuizQuestion';
import { QuizLoading } from './QuizLoading';
import { LeadCapture } from './LeadCapture';
import { QuizResults } from './QuizResults';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function Quiz() {
  const [step, setStep] = useState<QuizStep>('cover');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [userName, setUserName] = useState('');

  const handleStart = () => {
    setStep('questions');
  };

  const handleAnswer = (answerId: string) => {
    const question = quizQuestions[currentQuestion];
    setAnswers((prev) => ({
      ...prev,
      [question.id]: answerId,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setStep('loading');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleLoadingComplete = () => {
    setStep('lead-capture');
  };

  const handleLeadSubmit = (data: { name: string; whatsapp: string; email: string }) => {
    setUserName(data.name);
    const userProfile = determineProfile(answers);
    setProfile(userProfile);
    setStep('results');
  };

  const currentQuestionData = quizQuestions[currentQuestion];
  const currentAnswer = answers[currentQuestionData?.id];
  const canProceed = currentAnswer !== undefined;

  if (step === 'cover') {
    return <QuizCover onStart={handleStart} />;
  }

  if (step === 'loading') {
    return <QuizLoading onComplete={handleLoadingComplete} />;
  }

  if (step === 'lead-capture') {
    return <LeadCapture onSubmit={handleLeadSubmit} />;
  }

  if (step === 'results' && profile) {
    return <QuizResults profile={profile} userName={userName} />;
  }

  return (
    <div className="min-h-screen gradient-dark py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <QuizProgress 
          current={currentQuestion + 1} 
          total={quizQuestions.length} 
        />

        <QuizQuestion
          key={currentQuestion}
          question={currentQuestionData}
          selectedAnswer={currentAnswer}
          onAnswer={handleAnswer}
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 max-w-2xl mx-auto">
          <Button
            variant="ghost"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>

          <Button
            variant="hero"
            size="lg"
            onClick={handleNext}
            disabled={!canProceed}
            className="group"
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Ver Resultado' : 'Próxima'}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
