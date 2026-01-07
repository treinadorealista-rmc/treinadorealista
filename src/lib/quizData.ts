export interface QuizOption {
  id: string;
  label: string;
  description?: string;
  icon?: string;
  image?: string;
}

export interface QuizQuestion {
  id: string;
  phase: 'diagnosis' | 'objectives';
  question: string;
  subtitle?: string;
  type: 'binary' | 'multiple' | 'visual';
  options: QuizOption[];
}

export interface UserAnswers {
  [questionId: string]: string;
}

export interface QuizResult {
  profile: string;
  title: string;
  subtitle: string;
  description: string;
  painPoints: string[];
  solution: string;
  protocolName: string;
}

export interface Transformation {
  id: string;
  name: string;
  age: number;
  duration: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  profiles: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'goal',
    phase: 'diagnosis',
    question: 'Qual seu principal objetivo hoje?',
    subtitle: 'Escolha o que mais representa você neste momento',
    type: 'multiple',
    options: [
      { id: 'lose-fat', label: 'Perder gordura', description: 'Eliminar gordura localizada e definir', icon: '🔥' },
      { id: 'gain-muscle', label: 'Ganhar massa muscular', description: 'Aumentar volume e força', icon: '💪' },
      { id: 'both', label: 'Os dois ao mesmo tempo', description: 'Recomposição corporal completa', icon: '⚡' },
      { id: 'health', label: 'Melhorar saúde geral', description: 'Disposição e qualidade de vida', icon: '❤️' },
    ],
  },
  {
    id: 'body-type',
    phase: 'diagnosis',
    question: 'Como você descreveria seu corpo atualmente?',
    subtitle: 'Seja honesto, isso ajuda na precisão do diagnóstico',
    type: 'visual',
    options: [
      { id: 'skinny', label: 'Magro', description: 'Dificuldade para ganhar peso', icon: '🦴' },
      { id: 'skinny-fat', label: 'Falso magro', description: 'Magro mas com gordura localizada', icon: '🎯' },
      { id: 'overweight', label: 'Acima do peso', description: 'Gordura em excesso para perder', icon: '⚖️' },
      { id: 'athletic', label: 'Atlético', description: 'Já treina mas quer otimizar', icon: '🏋️' },
    ],
  },
  {
    id: 'training-time',
    phase: 'diagnosis',
    question: 'Há quanto tempo você treina?',
    subtitle: 'Considere treino consistente, não esporádico',
    type: 'multiple',
    options: [
      { id: 'never', label: 'Nunca treinei sério', description: 'Ou parei há mais de 1 ano', icon: '🆕' },
      { id: 'beginner', label: 'Menos de 1 ano', description: 'Ainda aprendendo os movimentos', icon: '📅' },
      { id: 'intermediate', label: '1 a 3 anos', description: 'Já tenho alguma experiência', icon: '📊' },
      { id: 'advanced', label: 'Mais de 3 anos', description: 'Treino é parte da minha vida', icon: '🏆' },
    ],
  },
  {
    id: 'frustration',
    phase: 'diagnosis',
    question: 'Qual sua maior frustração com treinos?',
    subtitle: 'O que mais te incomoda ou desmotiva',
    type: 'multiple',
    options: [
      { id: 'no-results', label: 'Não vejo resultados', description: 'Treino mas o corpo não muda', icon: '😤' },
      { id: 'no-time', label: 'Falta de tempo', description: 'Rotina corrida dificulta', icon: '⏰' },
      { id: 'no-knowledge', label: 'Não sei o que fazer', description: 'Muita informação confusa', icon: '🤷' },
      { id: 'no-motivation', label: 'Falta motivação', description: 'Começo mas não consigo manter', icon: '😔' },
    ],
  },
  {
    id: 'diet',
    phase: 'diagnosis',
    question: 'Como está sua alimentação hoje?',
    subtitle: 'Seja realista sobre seus hábitos',
    type: 'multiple',
    options: [
      { id: 'bad', label: 'Desregulada', description: 'Como qualquer coisa, sem controle', icon: '🍔' },
      { id: 'trying', label: 'Tentando melhorar', description: 'Faço esforço mas não consigo', icon: '🥗' },
      { id: 'good', label: 'Razoavelmente boa', description: 'Controlo na maior parte do tempo', icon: '✅' },
      { id: 'strict', label: 'Muito controlada', description: 'Sigo uma dieta rigorosa', icon: '📋' },
    ],
  },
  {
    id: 'sleep',
    phase: 'objectives',
    question: 'Quantas horas você dorme por noite?',
    subtitle: 'O sono afeta diretamente seus resultados',
    type: 'multiple',
    options: [
      { id: 'less-5', label: 'Menos de 5 horas', description: 'Durmo muito pouco', icon: '😴' },
      { id: '5-6', label: '5 a 6 horas', description: 'Abaixo do ideal', icon: '🌙' },
      { id: '6-7', label: '6 a 7 horas', description: 'Na média', icon: '🌜' },
      { id: 'more-7', label: 'Mais de 7 horas', description: 'Sono adequado', icon: '😊' },
    ],
  },
  {
    id: 'commitment',
    phase: 'objectives',
    question: 'Quanto tempo você pode dedicar aos treinos?',
    subtitle: 'Seja realista com sua rotina',
    type: 'multiple',
    options: [
      { id: '2-3', label: '2-3 dias por semana', description: '30-45 min por sessão', icon: '📆' },
      { id: '3-4', label: '3-4 dias por semana', description: '45-60 min por sessão', icon: '💪' },
      { id: '5-6', label: '5-6 dias por semana', description: '60+ min por sessão', icon: '🔥' },
      { id: 'everyday', label: 'Todos os dias', description: 'Treino é prioridade', icon: '⚡' },
    ],
  },
  {
    id: 'previous-attempts',
    phase: 'objectives',
    question: 'O que você já tentou antes?',
    subtitle: 'Marque o que melhor descreve sua experiência',
    type: 'multiple',
    options: [
      { id: 'generic', label: 'Treinos genéricos da internet', description: 'PDFs e vídeos do YouTube', icon: '📱' },
      { id: 'personal', label: 'Personal trainer', description: 'Acompanhamento presencial', icon: '👤' },
      { id: 'apps', label: 'Apps de treino', description: 'Aplicativos automatizados', icon: '📲' },
      { id: 'nothing', label: 'Nunca tentei de verdade', description: 'Esta será minha primeira vez', icon: '🆕' },
    ],
  },
  {
    id: 'dream',
    phase: 'objectives',
    question: 'Como você quer se sentir daqui a 90 dias?',
    subtitle: 'Visualize sua transformação',
    type: 'multiple',
    options: [
      { id: 'confident', label: 'Confiante no espelho', description: 'Orgulho do meu corpo', icon: '💎' },
      { id: 'strong', label: 'Forte e capaz', description: 'Energia para tudo', icon: '💪' },
      { id: 'healthy', label: 'Saudável e disposto', description: 'Qualidade de vida', icon: '❤️' },
      { id: 'all', label: 'Todas as anteriores', description: 'Transformação completa', icon: '🌟' },
    ],
  },
];

export const transformations: Transformation[] = [
  {
    id: '1',
    name: 'Ricardo M.',
    age: 32,
    duration: '12 semanas',
    beforeImage: 'https://images.unsplash.com/photo-1583500178450-e59e4309b57d?w=300&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=400&fit=crop',
    description: 'Perdeu 12kg e ganhou definição muscular seguindo o protocolo à risca.',
    profiles: ['skinny-fat', 'overweight'],
  },
  {
    id: '2',
    name: 'Carlos A.',
    age: 28,
    duration: '16 semanas',
    beforeImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300&h=400&fit=crop',
    description: 'Saiu do falso magro e conseguiu o shape que sempre quis.',
    profiles: ['skinny-fat', 'skinny'],
  },
  {
    id: '3',
    name: 'Pedro H.',
    age: 35,
    duration: '20 semanas',
    beforeImage: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=300&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=400&fit=crop',
    description: 'Eliminou a barriga e conquistou o abdômen definido aos 35 anos.',
    profiles: ['overweight', 'skinny-fat'],
  },
  {
    id: '4',
    name: 'Lucas S.',
    age: 24,
    duration: '10 semanas',
    beforeImage: 'https://images.unsplash.com/photo-1583500178450-e59e4309b57d?w=300&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300&h=400&fit=crop',
    description: 'Ganhou 8kg de massa magra partindo do zero.',
    profiles: ['skinny', 'athletic'],
  },
];

export const profileResults: Record<string, QuizResult> = {
  'skinny-fat': {
    profile: 'skinny-fat',
    title: 'Falso Magro com Resistência Metabólica',
    subtitle: 'Seu metabolismo está trabalhando contra você',
    description: 'Você é magro na balança, mas acumula gordura localizada — especialmente na barriga. Isso acontece por um desequilíbrio hormonal e metabólico que treinos genéricos não resolvem.',
    painPoints: [
      'Treina mas a barriga não some',
      'Come pouco mas não emagrece',
      'Sem força para ganhar músculo',
      'Metabolismo "travado"',
    ],
    solution: 'Você precisa de um protocolo que primeiro corrija sua resistência metabólica, depois construa massa muscular enquanto elimina a gordura localizada. Não adianta fazer dieta restritiva ou cardio excessivo.',
    protocolName: 'Protocolo Falso Magro 90D',
  },
  'overweight': {
    profile: 'overweight',
    title: 'Perfil Resistente com Excesso de Peso',
    subtitle: 'Sua genética dificulta, mas não impossibilita',
    description: 'Seu corpo tem tendência a acumular gordura e resistência à perda de peso. Dietas restritivas só pioram porque desaceleram ainda mais seu metabolismo.',
    painPoints: [
      'Já tentou várias dietas sem sucesso',
      'Perde peso e recupera tudo',
      'Sente fome constante',
      'Cansaço e falta de disposição',
    ],
    solution: 'Você precisa de um protocolo que acelere seu metabolismo gradualmente, sem passar fome. O foco é criar um déficit sustentável enquanto preserva massa muscular.',
    protocolName: 'Protocolo Resistente 90D',
  },
  'skinny': {
    profile: 'skinny',
    title: 'Hardgainer com Metabolismo Acelerado',
    subtitle: 'Seu corpo queima tudo que você come',
    description: 'Você tem dificuldade para ganhar peso e massa muscular. Seu metabolismo é tão acelerado que precisa de uma estratégia específica de alimentação e treino.',
    painPoints: [
      'Come muito mas não engorda',
      'Treina pesado sem resultado',
      'Sem força e resistência',
      'Braços e pernas finos',
    ],
    solution: 'Você precisa de um protocolo hipercalórico estratégico com treinos focados em força e hipertrofia. Nada de cardio excessivo que só queima suas calorias.',
    protocolName: 'Protocolo Hardgainer 90D',
  },
};

export function getResultProfile(answers: UserAnswers): QuizResult {
  const bodyType = answers['body-type'];
  
  if (bodyType === 'skinny-fat') {
    return profileResults['skinny-fat'];
  }
  
  if (bodyType === 'overweight') {
    return profileResults['overweight'];
  }
  
  if (bodyType === 'skinny') {
    return profileResults['skinny'];
  }
  
  // Default para falso magro (perfil mais comum)
  return profileResults['skinny-fat'];
}

export const loadingMessages = [
  'Analisando seu perfil metabólico...',
  'Cruzando dados com +2.000 casos...',
  'Identificando padrões de resistência...',
  'Gerando protocolo personalizado...',
];

export const offerData = {
  originalPrice: 297,
  discountPrice: 67.90,
  installments: 12,
  installmentPrice: 6.82,
};
