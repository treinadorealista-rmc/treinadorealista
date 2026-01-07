import { useState, useCallback } from 'react';
import { QuizStep, QuizAnswers, UserProfile } from '@/types/quiz';
import { quizQuestions } from '@/data/quizQuestions';
import { determineProfile } from '@/data/userProfiles';
import { QuizCover } from './QuizCover';
import { QuizProgress } from './QuizProgress';
import { QuizQuestion } from './QuizQuestion';
import { QuizLoading } from './QuizLoading';
import { LeadCapture } from './LeadCapture';
import { QuizResults } from './QuizResults';
import { DiagonalLines } from './DiagonalLines';

export function Quiz() {
  const [step, setStep] = useState<QuizStep>('cover');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [userName, setUserName] = useState('');

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleStart = useCallback(() => {
    setStep('questions');
  }, []);

  const handleAnswer = useCallback((answerId: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answerId,
    }));
  }, [currentQuestion?.id]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStep('loading');
    }
  }, [currentQuestionIndex]);

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const handleLoadingComplete = useCallback(() => {
    setStep('lead-capture');
  }, []);

  const handleLeadSubmit = useCallback((data: { name: string; whatsapp: string; email: string }) => {
    setUserName(data.name);
    const userProfile = determineProfile(answers);
    setProfile(userProfile);
    setStep('results');
  }, [answers]);

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

  const canGoNext = !!answers[currentQuestion?.id];
  const canGoBack = currentQuestionIndex > 0;

  return (
    <div className="min-h-screen gradient-dark relative overflow-hidden">
      <DiagonalLines />
      
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">
        <QuizProgress 
          current={currentQuestionIndex + 1} 
          total={quizQuestions.length}
          phase={currentQuestion.phase}
        />
        
        <QuizQuestion
          question={currentQuestion}
          selectedAnswer={answers[currentQuestion.id]}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onPrevious={handlePrevious}
          currentIndex={currentQuestionIndex}
          totalQuestions={quizQuestions.length}
          canGoBack={canGoBack}
          canGoNext={canGoNext}
        />
      </div>
    </div>
  );
}
