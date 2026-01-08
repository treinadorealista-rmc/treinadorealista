export interface QuizOption {
  id: string;
  label: string;
  description?: string;
  icon?: string;
  image?: string;
  category?: 'sedentary' | 'active';
  score?: number;
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
  whatItMeans: string;
  whyMethodsFailed: string;
  rightPath: string[];
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
  gender: 'male' | 'female';
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'gender',
    phase: 'diagnosis',
    question: 'Qual é o seu gênero biológico?',
    subtitle: 'Isso nos ajuda a personalizar suas recomendações',
    type: 'binary',
    options: [
      { id: 'male', label: 'Masculino', icon: '👨' },
      { id: 'female', label: 'Feminino', icon: '👩' },
    ],
  },
  {
    id: 'age',
    phase: 'diagnosis',
    question: 'Qual é a sua faixa etária?',
    subtitle: 'Seu metabolismo muda com a idade',
    type: 'multiple',
    options: [
      { id: '18-25', label: '18 a 25 anos', icon: '🔥' },
      { id: '26-35', label: '26 a 35 anos', icon: '💪' },
      { id: '36-45', label: '36 a 45 anos', icon: '⚡' },
      { id: '45+', label: 'Acima de 45 anos', icon: '🎯' },
    ],
  },
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
      { id: 'never', label: 'Nunca treinei sério', description: 'Ou parei há mais de 1 ano', icon: '🆕', category: 'sedentary' },
      { id: 'beginner', label: 'Menos de 1 ano', description: 'Ainda aprendendo os movimentos', icon: '📅', category: 'sedentary' },
      { id: 'intermediate', label: '1 a 3 anos', description: 'Já tenho alguma experiência', icon: '📊', category: 'active' },
      { id: 'advanced', label: 'Mais de 3 anos', description: 'Treino é parte da minha vida', icon: '🏆', category: 'active' },
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
      { id: 'no-issues', label: 'Estou satisfeito com meu treino', description: 'Quero apenas otimizar meus resultados', icon: '✅' },
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

// Imagens de transformação locais
import femaleBeforeImg from '@/assets/transformations/female-before.jpg';
import femaleAfterImg from '@/assets/transformations/female-after.jpg';
import maleBeforeImg from '@/assets/transformations/male-before.jpg';
import maleAfterImg from '@/assets/transformations/male-after.jpg';

export const transformations: Transformation[] = [
  // Transformação Feminina Principal
  {
    id: 'f1',
    name: 'Fernanda M.',
    age: 28,
    duration: '12 semanas',
    beforeImage: femaleBeforeImg,
    afterImage: femaleAfterImg,
    description: 'Eliminou 10kg e conquistou definição muscular com o protocolo personalizado.',
    profiles: ['skinny-fat', 'overweight', 'skinny', 'athletic'],
    gender: 'female',
  },
  // Transformação Masculina Principal
  {
    id: 'm1',
    name: 'Ricardo M.',
    age: 32,
    duration: '12 semanas',
    beforeImage: maleBeforeImg,
    afterImage: maleAfterImg,
    description: 'Perdeu 15kg e ganhou definição muscular seguindo o protocolo à risca.',
    profiles: ['skinny-fat', 'overweight', 'skinny', 'athletic'],
    gender: 'male',
  },
];

// 6 Profiles (3 per gender)
export const profileResults: Record<string, QuizResult> = {
  // SEDENTARY PROFILES
  'sedentary-female': {
    profile: 'sedentary',
    title: 'Falsa Magra em Fase de Adaptação',
    subtitle: 'Seu corpo precisa despertar antes de evoluir',
    whatItMeans: 'Seu corpo ainda não desenvolveu a base necessária para responder aos estímulos. Sem ativação metabólica prévia, qualquer dieta ou treino genérico falha. Você acumula gordura localizada mesmo parecendo magra na balança.',
    whyMethodsFailed: 'Você tentou atalhos que exigem uma base que ainda não existe. Seu metabolismo está adormecido e precisa ser ativado gradualmente, não forçado. Dietas restritivas apenas desaceleraram ainda mais seu metabolismo.',
    rightPath: [
      'Ativação metabólica do zero com progressão segura',
      'Construção de base muscular antes de intensificar',
      'Criação de hábitos sustentáveis que geram constância'
    ],
    solution: 'Um plano que cria base primeiro e evolui conforme o seu corpo responde.',
    protocolName: 'Protocolo Adaptação 90D',
  },
  'sedentary-male': {
    profile: 'sedentary',
    title: 'Falso Magro em Fase de Adaptação',
    subtitle: 'Seu corpo precisa despertar antes de evoluir',
    whatItMeans: 'Seu corpo ainda não desenvolveu a base necessária para responder aos estímulos. Sem ativação metabólica prévia, qualquer dieta ou treino genérico falha. Você acumula gordura localizada mesmo parecendo magro na balança.',
    whyMethodsFailed: 'Você tentou atalhos que exigem uma base que ainda não existe. Seu metabolismo está adormecido e precisa ser ativado gradualmente, não forçado. Dietas restritivas apenas desaceleraram ainda mais seu metabolismo.',
    rightPath: [
      'Ativação metabólica do zero com progressão segura',
      'Construção de base muscular antes de intensificar',
      'Criação de hábitos sustentáveis que geram constância'
    ],
    solution: 'Um plano que cria base primeiro e evolui conforme o seu corpo responde.',
    protocolName: 'Protocolo Adaptação 90D',
  },

  // HARDGAINER/ACTIVE PROFILES
  'hardgainer-female': {
    profile: 'hardgainer',
    title: 'Hardgainer com Metabolismo Acelerado',
    subtitle: 'Seu corpo estagnou e precisa de um novo estímulo',
    whatItMeans: 'Você treina mas seu corpo estagnou. Seu metabolismo adaptou-se ao mesmo estímulo repetido e parou de responder. Fazer mais do mesmo não vai quebrar esse platô.',
    whyMethodsFailed: 'Faltou variação estratégica de estímulos para quebrar a estagnação. Seu corpo ficou eficiente demais no que você fazia, e agora precisa de periodização inteligente para voltar a evoluir.',
    rightPath: [
      'Quebra de platô com periodização inteligente',
      'Ajuste de intensidade para reativar o metabolismo',
      'Estratégia de sobrecarga progressiva personalizada'
    ],
    solution: 'Um plano que quebra a estagnação e força seu corpo a responder novamente.',
    protocolName: 'Protocolo Evolução 90D',
  },
  'hardgainer-male': {
    profile: 'hardgainer',
    title: 'Hardgainer com Metabolismo Acelerado',
    subtitle: 'Seu corpo estagnou e precisa de um novo estímulo',
    whatItMeans: 'Você treina mas seu corpo estagnou. Seu metabolismo adaptou-se ao mesmo estímulo repetido e parou de responder. Fazer mais do mesmo não vai quebrar esse platô.',
    whyMethodsFailed: 'Faltou variação estratégica de estímulos para quebrar a estagnação. Seu corpo ficou eficiente demais no que você fazia, e agora precisa de periodização inteligente para voltar a evoluir.',
    rightPath: [
      'Quebra de platô com periodização inteligente',
      'Ajuste de intensidade para reativar o metabolismo',
      'Estratégia de sobrecarga progressiva personalizada'
    ],
    solution: 'Um plano que quebra a estagnação e força seu corpo a responder novamente.',
    protocolName: 'Protocolo Evolução 90D',
  },

  // 45+ PROFILES
  '45plus-female': {
    profile: '45plus',
    title: 'Perfil de Otimização Metabólica 45+',
    subtitle: 'Seu corpo maduro precisa de estratégia, não de força bruta',
    whatItMeans: 'Após os 45, seu metabolismo naturalmente desacelera e a perda de massa muscular acelera. Mudanças hormonais afetam como seu corpo responde aos estímulos. Você precisa de um protocolo inteligente, não genérico.',
    whyMethodsFailed: 'Métodos genéricos ignoram as necessidades específicas do seu corpo maduro. Treinos muito intensos podem causar lesões e dietas radicais prejudicam seu equilíbrio hormonal.',
    rightPath: [
      'Otimização metabólica respeitando suas limitações',
      'Foco em saúde articular e longevidade',
      'Protocolo adaptado para maximizar resultados com segurança'
    ],
    solution: 'Um plano de otimização avançada construído para seu momento de vida.',
    protocolName: 'Protocolo Longevidade 90D',
  },
  '45plus-male': {
    profile: '45plus',
    title: 'Perfil de Otimização Metabólica 45+',
    subtitle: 'Seu corpo maduro precisa de estratégia, não de força bruta',
    whatItMeans: 'Após os 45, seu metabolismo naturalmente desacelera e a perda de massa muscular acelera. Mudanças hormonais afetam como seu corpo responde aos estímulos. Você precisa de um protocolo inteligente, não genérico.',
    whyMethodsFailed: 'Métodos genéricos ignoram as necessidades específicas do seu corpo maduro. Treinos muito intensos podem causar lesões e dietas radicais prejudicam seu equilíbrio hormonal.',
    rightPath: [
      'Otimização metabólica respeitando suas limitações',
      'Foco em saúde articular e longevidade',
      'Protocolo adaptado para maximizar resultados com segurança'
    ],
    solution: 'Um plano de otimização avançada construído para seu momento de vida.',
    protocolName: 'Protocolo Longevidade 90D',
  },
};

// Get Result Profile based on answers
export function getResultProfile(answers: UserAnswers): QuizResult {
  const gender = answers['gender'] || 'male';
  const age = answers['age'];
  const trainingTime = answers['training-time'];
  
  const isFemale = gender === 'female';
  const is45Plus = age === '45+';
  const isSedentary = trainingTime === 'never' || trainingTime === 'beginner';
  
  // RULE 1: 45+ profile has priority
  if (is45Plus) {
    return isFemale ? profileResults['45plus-female'] : profileResults['45plus-male'];
  }
  
  // RULE 2: Sedentary
  if (isSedentary) {
    return isFemale ? profileResults['sedentary-female'] : profileResults['sedentary-male'];
  }
  
  // RULE 3: Active (Hardgainer)
  return isFemale ? profileResults['hardgainer-female'] : profileResults['hardgainer-male'];
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
