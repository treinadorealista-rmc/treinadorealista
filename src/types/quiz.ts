export interface QuizQuestion {
  id: number;
  phase: 'demographic' | 'symptom' | 'diagnosis' | 'dream';
  question: string;
  subtitle?: string;
  options: QuizOption[];
  type: 'single' | 'multiple' | 'body-map';
}

export interface QuizOption {
  id: string;
  label: string;
  icon?: string;
  description?: string;
}

export interface QuizAnswers {
  [questionId: number]: string | string[];
}

export interface UserProfile {
  type: 'falso-magro' | 'resistente' | 'hardgainer' | 'sedentario';
  title: string;
  subtitle: string;
  description: string;
  painPoints: string[];
  solution: string;
  protocolName: string;
}

export type QuizStep = 'cover' | 'questions' | 'loading' | 'lead-capture' | 'results';
