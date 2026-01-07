import { QuizQuestion } from '@/types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    phase: 'demographic',
    question: 'Qual é o seu gênero biológico?',
    subtitle: 'Isso nos ajuda a calibrar sua análise metabólica',
    type: 'single',
    options: [
      { id: 'male', label: 'Masculino', icon: '👤' },
      { id: 'female', label: 'Feminino', icon: '👤' },
    ],
  },
  {
    id: 2,
    phase: 'demographic',
    question: 'Qual é a sua faixa etária?',
    subtitle: 'Seu metabolismo muda drasticamente com a idade',
    type: 'single',
    options: [
      { id: '18-25', label: '18 a 25 anos', description: 'Pico hormonal' },
      { id: '26-35', label: '26 a 35 anos', description: 'Fase de consolidação' },
      { id: '36-45', label: '36 a 45 anos', description: 'Início do declínio' },
      { id: '45+', label: 'Acima de 45', description: 'Otimização necessária' },
    ],
  },
  {
    id: 3,
    phase: 'symptom',
    question: 'Onde você mais acumula gordura?',
    subtitle: 'Clique na região que mais te incomoda',
    type: 'single',
    options: [
      { id: 'belly', label: 'Barriga', icon: '🎯', description: 'Gordura visceral' },
      { id: 'love-handles', label: 'Flancos (Pneuzinhos)', icon: '🎯', description: 'Gordura subcutânea' },
      { id: 'chest', label: 'Peito/Costas', icon: '🎯', description: 'Distribuição superior' },
      { id: 'legs', label: 'Coxas/Glúteos', icon: '🎯', description: 'Distribuição inferior' },
    ],
  },
  {
    id: 4,
    phase: 'symptom',
    question: 'Qual é sua maior frustração com treinos?',
    subtitle: 'Seja honesto — isso define seu protocolo',
    type: 'single',
    options: [
      { id: 'no-results', label: 'Treino mas não vejo resultado', icon: '😤' },
      { id: 'no-time', label: 'Não tenho tempo para academia', icon: '⏰' },
      { id: 'pain', label: 'Sinto dores que me impedem', icon: '🤕' },
      { id: 'motivation', label: 'Começo e paro toda hora', icon: '🔄' },
    ],
  },
  {
    id: 5,
    phase: 'diagnosis',
    question: 'Você sente dores articulares após treinar?',
    subtitle: 'Joelhos, ombros, lombar...',
    type: 'single',
    options: [
      { id: 'always', label: 'Sim, sempre', description: 'Preciso de adaptação urgente' },
      { id: 'sometimes', label: 'Às vezes', description: 'Dependendo do exercício' },
      { id: 'rarely', label: 'Raramente', description: 'Só quando exagero' },
      { id: 'never', label: 'Nunca', description: 'Articulações saudáveis' },
    ],
  },
  {
    id: 6,
    phase: 'diagnosis',
    question: 'Como está sua energia às 15h da tarde?',
    subtitle: 'Isso revela muito sobre seu metabolismo',
    type: 'single',
    options: [
      { id: 'crashed', label: 'Completamente esgotado', icon: '😴', description: 'Preciso de café urgente' },
      { id: 'low', label: 'Baixa, mas funciono', icon: '😐', description: 'Rendo menos' },
      { id: 'stable', label: 'Estável', icon: '🙂', description: 'Sem grandes quedas' },
      { id: 'high', label: 'Alta e produtiva', icon: '⚡', description: 'Meu melhor horário' },
    ],
  },
  {
    id: 7,
    phase: 'diagnosis',
    question: 'Quantas horas você dorme por noite?',
    subtitle: 'O sono é o maior anabolizante natural',
    type: 'single',
    options: [
      { id: 'less-5', label: 'Menos de 5 horas', description: 'Déficit severo' },
      { id: '5-6', label: '5 a 6 horas', description: 'Insuficiente' },
      { id: '6-7', label: '6 a 7 horas', description: 'No limite' },
      { id: '7+', label: '7 horas ou mais', description: 'Ideal' },
    ],
  },
  {
    id: 8,
    phase: 'dream',
    question: 'Em 12 semanas, o que te deixaria mais realizado?',
    subtitle: 'Escolha o objetivo que mais importa agora',
    type: 'single',
    options: [
      { id: 'lose-fat', label: 'Perder gordura visível', icon: '🔥', description: 'Definição e shape' },
      { id: 'gain-muscle', label: 'Ganhar massa muscular', icon: '💪', description: 'Volume e força' },
      { id: 'energy', label: 'Ter mais energia e disposição', icon: '⚡', description: 'Performance diária' },
      { id: 'health', label: 'Melhorar saúde geral', icon: '❤️', description: 'Longevidade e bem-estar' },
    ],
  },
];

export const loadingSteps = [
  { text: 'Analisando sua biometria...', duration: 1500 },
  { text: 'Comparando com base de 2.000+ alunos...', duration: 1800 },
  { text: 'Calculando estratégia anti-lesão...', duration: 1600 },
  { text: 'Gerando Protocolo Personalizado...', duration: 2000 },
];
