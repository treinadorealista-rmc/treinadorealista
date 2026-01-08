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
  'athletic': {
    profile: 'athletic',
    title: 'Atleta em Fase de Otimização',
    subtitle: 'Você já está no caminho certo',
    description: 'Parabéns! Você já tem uma base sólida de treino e não apresenta problemas significativos. Seu corpo está respondendo bem aos estímulos. Agora é hora de otimizar cada detalhe para alcançar a próxima fase da sua evolução.',
    painPoints: [
      'Quebrar platôs de performance',
      'Otimizar recuperação muscular',
      'Periodização mais inteligente',
      'Maximizar resultados com eficiência',
    ],
    solution: 'Você precisa de um protocolo de otimização avançada que refine seus treinos, melhore sua recuperação e acelere seus ganhos — tudo construído sobre a base sólida que você já tem.',
    protocolName: 'Protocolo Performance 90D',
  },
  // Perfis para usuários SEDENTÁRIOS (nunca treinou ou < 1 ano)
  'skinny-fat-sedentary': {
    profile: 'skinny-fat',
    title: 'Falso Magro em Fase de Adaptação',
    subtitle: 'Seu corpo precisa de uma base antes de progredir',
    description: 'Você é magro na balança, mas acumula gordura localizada. Como ainda não tem experiência com treinos, seu corpo precisa de uma fase de adaptação antes de protocolos mais intensos.',
    painPoints: [
      'Nunca criou o hábito de treinar',
      'Corpo não está acostumado com exercícios',
      'Metabolismo lento por falta de estímulo',
      'Sem base muscular para começar',
    ],
    solution: 'Você precisa de um protocolo de primeiros passos que crie hábito, corrija postura e prepare seu corpo. Depois de criar a base, você avança para a recomposição corporal.',
    protocolName: 'Protocolo Adaptação 90D',
  },
  'overweight-sedentary': {
    profile: 'overweight',
    title: 'Perfil Iniciante com Sobrepeso',
    subtitle: 'O primeiro passo é o mais importante',
    description: 'Você tem gordura para perder e ainda não tem o hábito de treinar. A boa notícia é que iniciantes respondem muito bem aos primeiros estímulos — você verá resultados rápidos se seguir o protocolo.',
    painPoints: [
      'Nunca conseguiu manter uma rotina de exercícios',
      'Desconforto ao se exercitar',
      'Baixa disposição e energia',
      'Medo de não conseguir acompanhar',
    ],
    solution: 'Você precisa de um protocolo progressivo que comece do zero, respeitando seus limites. O foco inicial é criar hábito e mobilidade, depois acelerar a queima de gordura.',
    protocolName: 'Protocolo Iniciante 90D',
  },
  'skinny-sedentary': {
    profile: 'skinny',
    title: 'Magro em Fase de Construção',
    subtitle: 'Hora de construir sua base muscular',
    description: 'Você é magro e tem dificuldade para ganhar peso, mas ainda não tentou treinar de forma consistente. Seu corpo tem potencial, só precisa do estímulo certo.',
    painPoints: [
      'Nunca conseguiu criar rotina de treino',
      'Não sabe por onde começar',
      'Come pouco por falta de apetite',
      'Metabolismo muito acelerado',
    ],
    solution: 'Você precisa de um protocolo focado em criar hábito alimentar e adaptação muscular. Com os estímulos certos, seu corpo vai começar a responder e você verá os primeiros ganhos.',
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
