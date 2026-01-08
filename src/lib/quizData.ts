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
  titleFemale?: string;
  subtitle: string;
  whatItMeans: string;
  whyMethodsFailed: string;
  rightPath: string[];
  solution: string;
  protocolName: string;
  archetypeName: string;
  archetypeNameFemale?: string;
  offerSubheadline: string;
}

interface ProfileScores {
  adaptacao: number;
  hardgainer: number;
  otimizacao: number;
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
    subtitle: 'Seu metabolismo muda drasticamente com a idade',
    type: 'multiple',
    options: [
      { id: '18-25', label: '18 a 25 anos', description: 'Pico hormonal', icon: '⚡' },
      { id: '26-35', label: '26 a 35 anos', description: 'Fase de consolidação', icon: '💪' },
      { id: '36-45', label: '36 a 45 anos', description: 'Início do declínio', icon: '📊' },
      { id: '45+', label: 'Acima de 45 anos', description: 'Otimização necessária', icon: '🎯' },
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
  // PERFIL 1: Falso Magro / Iniciante (Alvo Principal)
  'iniciante': {
    profile: 'iniciante',
    title: 'Falso Magro em Fase de Adaptação',
    titleFemale: 'Falsa Magra em Fase de Adaptação',
    subtitle: 'Seu corpo ainda não responde bem a estímulos de treino.',
    whatItMeans: 'Antes de avançar para protocolos intensos, você precisa de base e adaptação metabólica.',
    whyMethodsFailed: 'Tentativa de pular etapas sem criar base. Falta de base muscular para acelerar o metabolismo.',
    rightPath: [
      'Criar constância sem sobrecarga',
      'Ativar o metabolismo gradualmente',
      'Construir base muscular com progressão segura',
    ],
    solution: 'Um plano que cria base primeiro e evolui conforme o seu corpo responde.',
    protocolName: 'Protocolo Adaptação 90D',
    archetypeName: 'Falso Magro em Fase de Adaptação',
    archetypeNameFemale: 'Falsa Magra em Fase de Adaptação',
    offerSubheadline: 'este sistema foi estruturado para criar sua base muscular do zero sem risco de lesão.',
  },
  // PERFIL 2: Hardgainer / Platô (Público Ativo)
  'hardgainer': {
    profile: 'hardgainer',
    title: 'Hardgainer com Metabolismo Acelerado',
    titleFemale: 'Hardgainer com Metabolismo Acelerado',
    subtitle: 'Você treina, come bem… e mesmo assim não cresce.',
    whatItMeans: 'Seu corpo queima calorias com muita eficiência. Sem estímulos corretos, ele mantém o peso em vez de construir massa muscular.',
    whyMethodsFailed: 'Muito volume e pouca intensidade reforçam a estagnação. Treinos longos gastam energia que deveria virar músculo.',
    rightPath: [
      'Quebrar platô com sobrecarga progressiva',
      'Priorizar exercícios compostos',
      'Periodização estratégica para forçar novas adaptações',
    ],
    solution: 'Um plano que quebra a estagnação e força seu corpo a responder novamente.',
    protocolName: 'Protocolo Performance 90D',
    archetypeName: 'Hardgainer com Metabolismo Acelerado',
    archetypeNameFemale: 'Hardgainer com Metabolismo Acelerado',
    offerSubheadline: 'este sistema foi estruturado para forçar adaptação e ganho de massa sem desperdício de energia.',
  },
  // PERFIL 3: Otimização Metabólica (Saúde 45+)
  'otimizacao': {
    profile: 'otimizacao',
    title: 'Otimização Metabólica',
    titleFemale: 'Otimização Metabólica',
    subtitle: 'Seu metabolismo pede ajuste fino na intensidade.',
    whatItMeans: 'Seu metabolismo pede um ajuste fino na intensidade para queimar gordura sem gerar fadiga excessiva. Após os 45, a estratégia muda completamente.',
    whyMethodsFailed: 'Treinos de alta intensidade geraram estresse excessivo e cortisol. Dietas muito restritivas desaceleraram ainda mais o metabolismo. Falta de foco em recuperação comprometeu os resultados.',
    rightPath: [
      'Intensidade ajustada para maximizar queima sem fadiga',
      'Foco em recuperação e qualidade do sono',
      'Estratégia anti-inflamatória para otimizar metabolismo',
    ],
    solution: 'Um plano de otimização metabólica focado em saúde e longevidade.',
    protocolName: 'Protocolo Otimização 90D',
    archetypeName: 'Otimização Metabólica',
    archetypeNameFemale: 'Otimização Metabólica',
    offerSubheadline: 'este sistema foi estruturado para queimar gordura e aumentar disposição respeitando os limites do seu corpo.',
  },
};

export function getResultProfile(answers: UserAnswers): QuizResult {
  const gender = answers['gender'];
  
  // === SISTEMA DE PONTUAÇÃO POR EIXOS ===
  const scores: ProfileScores = {
    adaptacao: 0,
    hardgainer: 0,
    otimizacao: 0,
  };
  
  // === EIXO OTIMIZAÇÃO (40+/Saúde) ===
  if (answers['age'] === '45+') scores.otimizacao += 3;
  if (answers['age'] === '36-45') scores.otimizacao += 1;
  if (answers['goal'] === 'health') scores.otimizacao += 2;
  if (answers['goal'] === 'lose-fat') scores.otimizacao += 1;
  
  // === EIXO ADAPTAÇÃO (Iniciante/Sedentário) ===
  if (answers['training-time'] === 'never') scores.adaptacao += 3;
  if (answers['training-time'] === 'beginner') scores.adaptacao += 2;
  if (answers['body-type'] === 'skinny-fat') scores.adaptacao += 1;
  if (answers['frustration'] === 'no-knowledge') scores.adaptacao += 1;
  if (answers['frustration'] === 'no-motivation') scores.adaptacao += 1;
  
  // === EIXO HARDGAINER (Platô/Estagnação) ===
  if (answers['training-time'] === 'intermediate') scores.hardgainer += 2;
  if (answers['training-time'] === 'advanced') scores.hardgainer += 2;
  if (answers['frustration'] === 'no-results') scores.hardgainer += 3;
  if (answers['body-type'] === 'athletic') scores.hardgainer += 1;
  if (answers['commitment'] === '5-6' || answers['commitment'] === 'everyday') {
    scores.hardgainer += 1;
  }
  
  // === DETERMINAR PERFIL DOMINANTE ===
  // Prioridade de desempate: Otimização > Hardgainer > Adaptação
  let dominantProfile = 'iniciante';
  let maxScore = scores.adaptacao;
  
  if (scores.hardgainer > maxScore) {
    dominantProfile = 'hardgainer';
    maxScore = scores.hardgainer;
  }
  if (scores.otimizacao > maxScore) {
    dominantProfile = 'otimizacao';
    maxScore = scores.otimizacao;
  }
  
  // === RETORNAR RESULTADO COM AJUSTE DE GÊNERO ===
  const baseResult = profileResults[dominantProfile];
  const result = { ...baseResult };
  
  if (gender === 'female') {
    result.title = baseResult.titleFemale || baseResult.title;
    result.archetypeName = baseResult.archetypeNameFemale || baseResult.archetypeName;
  }
  
  return result;
}

export const loadingMessages = [
  'Analisando seu perfil metabólico...',
  'Cruzando dados com +2.000 casos...',
  'Identificando padrões de resistência...',
  'Gerando protocolo personalizado...',
];

export const offerData = {
  originalPrice: 297,
  discountPrice: 47.90,
  installments: 12,
  installmentPrice: 6.82,
  anchorText: 'Um acompanhamento desse nível normalmente custa entre R$300 e R$500 por mês.',
};
