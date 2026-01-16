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
  titleFemale40?: string;
  titleMale40?: string;
  subtitle: string;
  subtitleFemale40?: string;
  subtitleMale40?: string;
  whatItMeans: string;
  whatItMeansFemale40?: string;
  whatItMeansMale40?: string;
  whyMethodsFailed: string;
  rightPath: string[];
  rightPathFemale40?: string[];
  rightPathMale40?: string[];
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
  // Mantendo as originais
  {
    id: 'f1',
    name: 'Fernanda M.',
    age: 28,
    duration: '12 semanas',
    beforeImage: femaleBeforeImg,
    afterImage: femaleAfterImg,
    description: 'Eliminou 10kg e conquistou definição muscular.',
    profiles: ['skinny-fat', 'overweight', 'skinny', 'athletic'],
    gender: 'female',
  },
  // Novas Mulheres
  {
    id: 'f2',
    name: 'Mariana S.',
    age: 34,
    duration: '90 dias',
    beforeImage: 'https://i.postimg.cc/C5y6v77r/Gemini-Generated-Image-mu42vqmu42vqmu42.png',
    afterImage: 'https://i.postimg.cc/C5y6v77r/Gemini-Generated-Image-mu42vqmu42vqmu42.png',
    description: 'Definição e queima de gordura localizada.',
    profiles: ['overweight', 'skinny-fat'],
    gender: 'female',
  },
  {
    id: 'f3',
    name: 'Patrícia L.',
    age: 42,
    duration: '12 semanas',
    beforeImage: 'https://i.postimg.cc/SNftrWMv/Gemini-Generated-Image-1h9ax51h9ax51h9a.png',
    afterImage: 'https://i.postimg.cc/SNftrWMv/Gemini-Generated-Image-1h9ax51h9ax51h9a.png',
    description: 'Foco em metabolismo 40+ e tônus muscular.',
    profiles: ['otimizacao'],
    gender: 'female',
  },
  {
    id: 'f4',
    name: 'Carla B.',
    age: 29,
    duration: '8 semanas',
    beforeImage: 'https://i.postimg.cc/25MH6Gs4/Gemini-Generated-Image-fndschfndschfnds.png',
    afterImage: 'https://i.postimg.cc/25MH6Gs4/Gemini-Generated-Image-fndschfndschfnds.png',
    description: 'Resultados rápidos em recomposição corporal.',
    profiles: ['skinny-fat', 'athletic'],
    gender: 'female',
  },
  // Mantendo original masculino
  {
    id: 'm1',
    name: 'Ricardo M.',
    age: 32,
    duration: '12 semanas',
    beforeImage: maleBeforeImg,
    afterImage: maleAfterImg,
    description: 'Perdeu 15kg e ganhou definição muscular.',
    profiles: ['skinny-fat', 'overweight', 'skinny', 'athletic'],
    gender: 'male',
  },
  // Novos Homens
  {
    id: 'm2',
    name: 'Rodrigo A.',
    age: 30,
    duration: '90 dias',
    beforeImage: 'https://i.postimg.cc/8cVtd5Pk/Gemini-Generated-Image-q1j9vsq1j9vsq1j9.png',
    afterImage: 'https://i.postimg.cc/8cVtd5Pk/Gemini-Generated-Image-q1j9vsq1j9vsq1j9.png',
    description: 'Ganho de massa magra e densidade.',
    profiles: ['hardgainer', 'athletic'],
    gender: 'male',
  },
  {
    id: 'm3',
    name: 'Felipe T.',
    age: 27,
    duration: '10 semanas',
    beforeImage: 'https://i.postimg.cc/MK5dRzkq/Gemini-Generated-Image-yysebxyysebxyyse.png',
    afterImage: 'https://i.postimg.cc/MK5dRzkq/Gemini-Generated-Image-yysebxyysebxyyse.png',
    description: 'Transformação de falso magro para definido.',
    profiles: ['skinny-fat', 'beginner'],
    gender: 'male',
  },
];

export const profileResults: Record<string, QuizResult> = {
  // PERFIL 0: Metabolismo Lento e Inflamado (Sobrepeso - Prioridade Máxima)
  'sobrepeso': {
    profile: 'sobrepeso',
    title: 'Metabolismo Lento e Inflamado',
    titleFemale: 'Metabolismo Lento e Inflamado',
    subtitle: 'Seu corpo está em modo de estocagem.',
    whatItMeans: 'Seu metabolismo está desacelerado e inflamado. Dietas restritivas e cardio em excesso só pioram a situação, pois aumentam cortisol e mantêm seu corpo em modo de sobrevivência.',
    whyMethodsFailed: 'Estratégias genéricas focam em cortar calorias, mas seu corpo precisa de reativação metabólica primeiro. Sem isso, qualquer dieta gera efeito rebote.',
    rightPath: [
      'Reativar metabolismo com treinos anti-inflamatórios',
      'Reduzir cortisol e estresse crônico',
      'Criar déficit calórico inteligente sem privar o corpo',
    ],
    solution: 'Um plano de reativação metabólica que prioriza queima de gordura sem inflamação.',
    protocolName: 'Protocolo Reativação 90D',
    archetypeName: 'Metabolismo Lento e Inflamado',
    archetypeNameFemale: 'Metabolismo Lento e Inflamado',
    offerSubheadline: 'este sistema foi estruturado para reativar seu metabolismo e queimar gordura de forma sustentável.',
  },
  // PERFIL 1: Falso Magro / Iniciante (Alvo Principal - Jovens)
  'iniciante': {
    profile: 'iniciante',
    title: 'Falso Magro em Fase de Adaptação',
    titleFemale: 'Falsa Magra em Fase de Adaptação',
    subtitle: 'Seu corpo ainda não responde bem a estímulos de treino.',
    whatItMeans: 'Antes de avançar para protocolos intensos, você precisa de base e adaptação metabólica para alcançar definição muscular.',
    whyMethodsFailed: 'Tentativa de pular etapas sem criar base. Falta de base muscular para acelerar o metabolismo e conquistar estética.',
    rightPath: [
      'Criar constância sem sobrecarga',
      'Ativar o metabolismo para definição',
      'Construir base muscular com ganho rápido e seguro',
    ],
    solution: 'Um plano que cria base primeiro e evolui conforme o seu corpo responde.',
    protocolName: 'Protocolo Adaptação 90D',
    archetypeName: 'Falso Magro em Fase de Adaptação',
    archetypeNameFemale: 'Falsa Magra em Fase de Adaptação',
    offerSubheadline: 'este sistema foi estruturado para criar sua base muscular do zero sem risco de lesão.',
  },
  // PERFIL 2: Hardgainer / Platô (Público Ativo - Jovens)
  'hardgainer': {
    profile: 'hardgainer',
    title: 'Hardgainer com Metabolismo Acelerado',
    titleFemale: 'Hardgainer com Metabolismo Acelerado',
    subtitle: 'Você treina, come bem… e mesmo assim não cresce.',
    whatItMeans: 'Seu corpo queima calorias com muita eficiência. Sem estímulos corretos, ele mantém o peso em vez de construir massa muscular e definição.',
    whyMethodsFailed: 'Muito volume e pouca intensidade reforçam a estagnação. Treinos longos gastam energia que deveria virar músculo.',
    rightPath: [
      'Quebrar platô com sobrecarga progressiva',
      'Maximizar definição e ganho muscular rápido',
      'Periodização estratégica para estética',
    ],
    solution: 'Um plano que quebra a estagnação e força seu corpo a responder novamente.',
    protocolName: 'Protocolo Performance 90D',
    archetypeName: 'Hardgainer com Metabolismo Acelerado',
    archetypeNameFemale: 'Hardgainer com Metabolismo Acelerado',
    offerSubheadline: 'este sistema foi estruturado para forçar adaptação e ganho de massa sem desperdício de energia.',
  },
  // PERFIL 3: Otimização Metabólica (Saúde 40+)
  'otimizacao': {
    profile: 'otimizacao',
    // === TEXTOS BASE (Masculino Jovem - fallback) ===
    title: 'Otimização Metabólica e Longevidade',
    titleFemale: 'Otimização Metabólica',
    subtitle: 'Seu metabolismo pede ajuste fino na intensidade.',
    whatItMeans: 'Após os 40, a estratégia muda completamente. Foco em preservação de massa magra e saúde hormonal.',
    whyMethodsFailed: 'Treinos de alta intensidade geraram estresse excessivo e cortisol. Dietas muito restritivas desaceleraram ainda mais o metabolismo. Falta de foco em recuperação comprometeu os resultados.',
    rightPath: [
      'Intensidade ajustada para maximizar queima sem fadiga',
      'Foco em recuperação e qualidade do sono',
      'Estratégia anti-inflamatória para otimizar metabolismo',
    ],
    // === HOMEM 40+ ===
    titleMale40: 'Otimização Metabólica e Longevidade',
    subtitleMale40: 'Manter testosterona natural e força funcional é prioridade agora.',
    whatItMeansMale40: 'Após os 40, a manutenção de testosterona natural, força funcional e cuidado articular se tornam prioridades absolutas para resultados duradouros.',
    rightPathMale40: [
      'Manutenção de Testosterona Natural',
      'Preservação de Força Funcional',
      'Cuidado Articular e Recuperação Otimizada',
    ],
    // === MULHER 40+ ===
    titleFemale40: 'Reativação Metabólica e Equilíbrio Hormonal',
    subtitleFemale40: 'Seu corpo precisa de reativação metabólica e equilíbrio hormonal.',
    whatItMeansFemale40: 'Após os 40, mudanças hormonais exigem uma abordagem focada em reativação metabólica e equilíbrio hormonal para resultados sustentáveis.',
    rightPathFemale40: [
      'Reativação Metabólica',
      'Equilíbrio Hormonal',
      'Preservação de Massa Magra com Segurança Articular',
    ],
    solution: 'Um plano de otimização metabólica focado em saúde e longevidade.',
    protocolName: 'Protocolo Otimização 90D',
    archetypeName: 'Otimização Metabólica e Longevidade',
    archetypeNameFemale: 'Reativação Metabólica e Equilíbrio Hormonal',
    offerSubheadline: 'este sistema foi estruturado para queimar gordura e aumentar disposição respeitando os limites do seu corpo.',
  },
  // PERFIL 4: Performance / Atlético (Para quem já tem corpo atlético)
  'performance': {
    profile: 'performance',
    title: 'Atleta em Fase de Otimização',
    titleFemale: 'Atleta em Fase de Otimização',
    subtitle: 'Você já tem base sólida. Agora é hora de otimizar.',
    whatItMeans: 'Seu corpo já responde bem a estímulos de treino. O próximo passo é periodização estratégica para quebrar platôs, maximizar resultados e manter a consistência em alto nível.',
    whyMethodsFailed: 'Treinos genéricos não respeitam seu nível avançado. Você precisa de estímulos progressivos calibrados e recuperação otimizada para continuar evoluindo.',
    rightPath: [
      'Periodização estratégica para quebrar platôs',
      'Otimização de recuperação e performance',
      'Ajuste fino de intensidade e volume para máximo resultado',
    ],
    solution: 'Um protocolo de performance para atletas que querem ir além do que já conquistaram.',
    protocolName: 'Protocolo Performance 90D',
    archetypeName: 'Atleta em Fase de Otimização',
    archetypeNameFemale: 'Atleta em Fase de Otimização',
    offerSubheadline: 'este sistema foi estruturado para otimizar sua performance e quebrar platôs de forma inteligente.',
  },
};

export function getResultProfile(answers: UserAnswers): QuizResult {
  // 1. Extração segura das variáveis
  const gender = answers['gender'] || 'male';
  const age = answers['age'] || '26-35';
  const bodyType = answers['body-type'] || 'skinny-fat';
  const trainingTime = answers['training-time'] || 'beginner';
  
  // 2. Flags Booleanas (Para facilitar leitura)
  const isFemale = gender === 'female';
  const isOver40 = age === '45+' || age === '36-45';
  const isOverweight = bodyType === 'overweight';
  const isAthletic = bodyType === 'athletic';
  const isSkinnyFat = bodyType === 'skinny-fat';
  const isSkinny = bodyType === 'skinny';
  const isTrained = trainingTime === 'intermediate' || trainingTime === 'advanced';
  
  let dominantProfile: string;

  // ═══════════════════════════════════════════════════════════════
  // HIERARQUIA DE DECISÃO (A ORDEM IMPORTA MUITO)
  // ═══════════════════════════════════════════════════════════════
  
  // NÍVEL 1: IDADE (Tem prioridade sobre peso e treino)
  if (isOver40) {
    dominantProfile = 'otimizacao';
  }
  
  // NÍVEL 2: SOBREPESO (Se não for velho, mas for gordo)
  else if (isOverweight) {
    dominantProfile = 'sobrepeso';
  }
  
  // NÍVEL 3: ATLÉTICO (Se não for velho nem gordo, e for atlético)
  // IMPORTANTE: Joga para performance, nunca para iniciante
  else if (isAthletic) {
    dominantProfile = 'performance';
  }
  
  // NÍVEL 4: MAGRO (Ectomorfo)
  else if (isSkinny) {
    if (isTrained) {
      dominantProfile = 'hardgainer'; // Magro que treina
    } else {
      dominantProfile = 'iniciante'; // Magro sedentário
    }
  }
  
  // NÍVEL 5: FALSO MAGRO (Skinny-fat)
  else if (isSkinnyFat) {
    dominantProfile = 'iniciante';
  }
  
  // FALLBACK
  else {
    dominantProfile = 'iniciante';
  }

  // === RETORNAR RESULTADO COM AJUSTE DE GÊNERO E IDADE ===
  const baseResult = profileResults[dominantProfile];
  const result = { ...baseResult };
  
  if (isOver40 && dominantProfile === 'otimizacao') {
    // Aplicar variantes específicas para 40+
    if (isFemale) {
      result.title = baseResult.titleFemale40 || baseResult.titleFemale || baseResult.title;
      result.subtitle = baseResult.subtitleFemale40 || baseResult.subtitle;
      result.whatItMeans = baseResult.whatItMeansFemale40 || baseResult.whatItMeans;
      result.rightPath = baseResult.rightPathFemale40 || baseResult.rightPath;
      result.archetypeName = baseResult.archetypeNameFemale || baseResult.archetypeName;
    } else {
      result.title = baseResult.titleMale40 || baseResult.title;
      result.subtitle = baseResult.subtitleMale40 || baseResult.subtitle;
      result.whatItMeans = baseResult.whatItMeansMale40 || baseResult.whatItMeans;
      result.rightPath = baseResult.rightPathMale40 || baseResult.rightPath;
    }
  } else if (isFemale) {
    // Aplicar variantes femininas para jovens
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
