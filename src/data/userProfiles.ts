import { UserProfile, QuizAnswers } from '@/types/quiz';

export const userProfiles: Record<string, UserProfile> = {
  'falso-magro': {
    type: 'falso-magro',
    title: 'Falso Magro com Resistência Metabólica',
    subtitle: 'Seu corpo está em modo de sobrevivência',
    description: 'Você aparenta ser magro, mas acumula gordura em áreas específicas — principalmente na barriga. Treinos genéricos de academia aumentam seu cortisol e pioram a situação. Você não precisa de mais cardio.',
    painPoints: [
      'Barriga teimosa que não some mesmo treinando',
      'Braços e pernas finos sem volume',
      'Metabolismo "travado" há anos',
      'Cansaço constante mesmo dormindo',
    ],
    solution: 'Você precisa de Tensão Mecânica Controlada — treinos curtos e intensos que ativam seu metabolismo sem disparar cortisol.',
    protocolName: 'RaonyPro Hipertrofia Tensional',
  },
  'resistente': {
    type: 'resistente',
    title: 'Resistente ao Emagrecimento',
    subtitle: 'Seu metabolismo está adaptado ao excesso',
    description: 'Seu corpo aprendeu a estocar energia de forma extremamente eficiente. Dietas restritivas só pioram essa resistência. Você precisa de uma estratégia que "engane" seu metabolismo.',
    painPoints: [
      'Gordura acumulada em múltiplas regiões',
      'Dietas não funcionam mais como antes',
      'Reganho de peso após qualquer dieta',
      'Sensação de metabolismo lento',
    ],
    solution: 'Você precisa de Ciclagem Metabólica — alternando estímulos para quebrar a adaptação do seu corpo.',
    protocolName: 'RaonyPro Queima Estratégica',
  },
  'hardgainer': {
    type: 'hardgainer',
    title: 'Hardgainer Ectomorfo',
    subtitle: 'Seu metabolismo queima tudo rapidamente',
    description: 'Você come muito mas não engorda. Ganha peso com extrema dificuldade. Treinos longos só drenam sua energia sem construir massa. Você precisa de estímulos curtos e pesados.',
    painPoints: [
      'Dificuldade extrema em ganhar peso',
      'Músculos que não respondem a treino',
      'Alta queima calórica natural',
      'Perda rápida de ganhos quando para',
    ],
    solution: 'Você precisa de Sobrecarga Progressiva Inteligente — menos volume, mais intensidade, mais recuperação.',
    protocolName: 'RaonyPro Massa Máxima',
  },
  'sedentario': {
    type: 'sedentario',
    title: 'Sedentário em Transição',
    subtitle: 'Seu corpo precisa ser reativado gradualmente',
    description: 'Anos de sedentarismo deixaram seu corpo dessensibilizado. Treinos muito intensos podem causar lesões e desmotivação. Você precisa de uma progressão inteligente.',
    painPoints: [
      'Falta de condicionamento básico',
      'Dores ao fazer exercícios simples',
      'Falta de motivação e consistência',
      'Medo de se machucar',
    ],
    solution: 'Você precisa de Adaptação Neuromuscular — começar pelo básico e progredir de forma segura.',
    protocolName: 'RaonyPro Fundamentos',
  },
};

export function determineProfile(answers: QuizAnswers): UserProfile {
  const fatArea = answers[3] as string;
  const frustration = answers[4] as string;
  const jointPain = answers[5] as string;
  const energy = answers[6] as string;
  const goal = answers[8] as string;

  // Logic to determine profile based on answers
  if (fatArea === 'belly' && (frustration === 'no-results' || frustration === 'motivation')) {
    return userProfiles['falso-magro'];
  }

  if (goal === 'lose-fat' && (fatArea === 'love-handles' || fatArea === 'legs')) {
    return userProfiles['resistente'];
  }

  if (goal === 'gain-muscle' && frustration === 'no-results') {
    return userProfiles['hardgainer'];
  }

  if (frustration === 'pain' || frustration === 'no-time' || jointPain === 'always') {
    return userProfiles['sedentario'];
  }

  if (energy === 'crashed' || energy === 'low') {
    return userProfiles['falso-magro'];
  }

  // Default fallback
  return userProfiles['falso-magro'];
}
