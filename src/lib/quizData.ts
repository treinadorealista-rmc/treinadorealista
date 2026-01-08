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

export const profileResults: Record<string, QuizResult> = {
  // Perfis para usuários ATIVOS (treina há algum tempo)
  'skinny-fat': {
    profile: 'skinny-fat',
    title: 'Falso Magro com Resistência Metabólica',
    subtitle: 'Seu metabolismo está trabalhando contra você',
    whatItMeans: 'Você treina mas a gordura localizada persiste. Seu corpo desenvolveu resistência metabólica por treinos mal estruturados ou excesso de cardio que aumentou cortisol.',
    whyMethodsFailed: 'Cardio excessivo aumentou cortisol e catabolismo. Dietas muito restritivas desaceleraram seu metabolismo. Treinos genéricos não criaram o estímulo certo para recomposição corporal.',
    rightPath: [
      'Quebra de platô com periodização inteligente',
      'Ajuste de intensidade para reativar metabolismo',
      'Protocolo de recomposição corporal específico para falso magro',
    ],
    solution: 'Um plano que quebra a estagnação e força seu corpo a responder novamente.',
    protocolName: 'Protocolo Recomposição 90D',
  },
  'overweight': {
    profile: 'overweight',
    title: 'Perfil Resistente com Estagnação',
    subtitle: 'Seu corpo parou de responder aos estímulos',
    whatItMeans: 'Você treina mas os resultados estagnaram. Seu metabolismo adaptou-se ao mesmo estímulo repetido e parou de progredir, entrando em modo de preservação.',
    whyMethodsFailed: 'Mesmos treinos por muito tempo causaram adaptação negativa. Déficit calórico excessivo reduziu sua taxa metabólica. Faltou variação estratégica de estímulos.',
    rightPath: [
      'Quebra de platô com novos estímulos metabólicos',
      'Ajuste de intensidade e volume de treino',
      'Estratégia nutricional para reativar queima de gordura',
    ],
    solution: 'Um plano que quebra a estagnação e força seu corpo a responder novamente.',
    protocolName: 'Protocolo Queima Avançada 90D',
  },
  'skinny': {
    profile: 'skinny',
    title: 'Hardgainer com Metabolismo Acelerado',
    subtitle: 'Seu corpo queima tudo que você come',
    whatItMeans: 'Você treina mas ganha massa muito devagar. Seu metabolismo é extremamente eficiente em queimar calorias e precisa de sobrecarga estratégica para construir músculo.',
    whyMethodsFailed: 'Treinos longos queimaram calorias que deveriam construir músculo. Volume excessivo sem intensidade adequada. Faltou periodização para maximizar ganhos de massa.',
    rightPath: [
      'Quebra de platô com sobrecarga progressiva inteligente',
      'Ajuste de intensidade com menos volume e mais peso',
      'Foco em exercícios compostos e recuperação adequada',
    ],
    solution: 'Um plano que quebra a estagnação e força seu corpo a responder novamente.',
    protocolName: 'Protocolo Massa Máxima 90D',
  },
  'athletic': {
    profile: 'athletic',
    title: 'Atleta em Fase de Otimização',
    subtitle: 'Você já está no caminho certo',
    whatItMeans: 'Seu corpo responde bem aos estímulos. Você tem base sólida e agora precisa de refinamento para alcançar o próximo nível de performance e estética.',
    whyMethodsFailed: 'Treinos genéricos não consideram sua individualidade avançada. Falta de periodização específica limita ganhos. Recuperação e nutrição podem estar subotimizadas.',
    rightPath: [
      'Periodização avançada para maximizar performance',
      'Otimização de recuperação e nutrição de alto nível',
      'Refinamento técnico para eficiência máxima',
    ],
    solution: 'Um plano de otimização avançada construído sobre sua base sólida.',
    protocolName: 'Protocolo Performance 90D',
  },
  // Perfis para usuários SEDENTÁRIOS (nunca treinou ou < 1 ano)
  'skinny-fat-sedentary': {
    profile: 'skinny-fat',
    title: 'Falso Magro em Fase de Adaptação',
    subtitle: 'Seu corpo precisa de uma base antes de progredir',
    whatItMeans: 'Você acumula gordura localizada mesmo sendo magro na balança. Sem experiência com treinos, seu corpo está desacostumado a estímulos e seu metabolismo está lento por falta de ativação.',
    whyMethodsFailed: 'Dietas restritivas apenas reduziram seu metabolismo ainda mais. Treinos genéricos da internet não criaram adaptação neuromuscular. Sem base, qualquer protocolo avançado seria ineficaz.',
    rightPath: [
      'Construção de base muscular com progressão controlada',
      'Ativação metabólica gradual sem estresse excessivo',
      'Criação de hábito sustentável antes de intensificar',
    ],
    solution: 'Um plano que cria base primeiro e evolui conforme o seu corpo responde.',
    protocolName: 'Protocolo Adaptação 90D',
  },
  'overweight-sedentary': {
    profile: 'overweight',
    title: 'Perfil Iniciante com Sobrepeso',
    subtitle: 'O primeiro passo é o mais importante',
    whatItMeans: 'Você tem gordura para perder e ainda não criou o hábito de treinar. Seu corpo está resistente por anos sem estímulo adequado, mas iniciantes respondem muito bem aos primeiros estímulos.',
    whyMethodsFailed: 'Dietas radicais causaram efeito sanfona e desaceleraram metabolismo. Treinos muito intensos geraram desconforto e abandono. Faltou progressão adequada para seu nível atual.',
    rightPath: [
      'Construção de base com exercícios adaptados ao seu nível',
      'Progressão gradual que respeita seus limites',
      'Foco em mobilidade e criação de hábito antes de intensidade',
    ],
    solution: 'Um plano que cria base primeiro e evolui conforme o seu corpo responde.',
    protocolName: 'Protocolo Iniciante 90D',
  },
  'skinny-sedentary': {
    profile: 'skinny',
    title: 'Magro em Fase de Construção',
    subtitle: 'Hora de construir sua base muscular',
    whatItMeans: 'Seu metabolismo acelerado queima tudo rapidamente. Sem estímulo de treino consistente, seu corpo não teve motivo para construir massa muscular e você permanece magro.',
    whyMethodsFailed: 'Comer mais sem treinar adequadamente só gerou desconforto. Treinos genéricos não criaram sobrecarga progressiva necessária. Faltou estratégia específica para hardgainers iniciantes.',
    rightPath: [
      'Construção de base com foco em força fundamental',
      'Estratégia alimentar para suportar ganho de massa',
      'Treinos curtos e intensos que maximizam estímulo muscular',
    ],
    solution: 'Um plano que cria base primeiro e evolui conforme o seu corpo responde.',
    protocolName: 'Protocolo Construção 90D',
  },
};

export function getResultProfile(answers: UserAnswers): QuizResult {
  const bodyType = answers['body-type'];
  const trainingTime = answers['training-time'];
  const frustration = answers['frustration'];
  
  // Determinar se é sedentário
  const isSedentary = trainingTime === 'never' || trainingTime === 'beginner';
  const isExperienced = trainingTime === 'advanced' || trainingTime === 'intermediate';
  const hasNoIssues = frustration === 'no-issues';
  const isAthletic = bodyType === 'athletic';
  
  // REGRA 1: Usuários experientes (intermediário+) sem problemas = Perfil Athletic
  if ((isExperienced && hasNoIssues) || (isAthletic && isExperienced)) {
    return profileResults['athletic'];
  }
  
  // REGRA 2: Tipo atlético = Athletic (mesmo sem muita experiência)
  if (isAthletic) {
    return profileResults['athletic'];
  }
  
  // REGRA 3: Lógica para sedentários - usar perfis com sufixo -sedentary
  if (isSedentary) {
    if (bodyType === 'skinny-fat' && profileResults['skinny-fat-sedentary']) {
      return profileResults['skinny-fat-sedentary'];
    }
    if (bodyType === 'overweight' && profileResults['overweight-sedentary']) {
      return profileResults['overweight-sedentary'];
    }
    if (bodyType === 'skinny' && profileResults['skinny-sedentary']) {
      return profileResults['skinny-sedentary'];
    }
  }
  
  // REGRA 4: Lógica original para usuários ativos
  if (bodyType === 'skinny-fat') {
    return profileResults['skinny-fat'];
  }
  
  if (bodyType === 'overweight') {
    return profileResults['overweight'];
  }
  
  if (bodyType === 'skinny') {
    return profileResults['skinny'];
  }
  
  // REGRA 5: Fallback inteligente - experientes vão para athletic
  if (isExperienced) {
    return profileResults['athletic'];
  }
  
  // Default para falso magro sedentário (perfil mais comum para iniciantes)
  return profileResults['skinny-fat-sedentary'];
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
