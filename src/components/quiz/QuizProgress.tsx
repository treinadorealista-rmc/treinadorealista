interface QuizProgressProps {
  current: number;
  total: number;
  phase: string;
}

const phaseNames: Record<string, string> = {
  demographic: 'Perfil',
  symptom: 'Sintomas',
  diagnosis: 'Diagnóstico',
  dream: 'Objetivo',
};

export function QuizProgress({ current, total, phase }: QuizProgressProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full border-b border-border/30 pb-4 mb-8">
      <div className="flex justify-between items-start mb-1">
        <div>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            Pergunta {current} de {total}
          </span>
          <div className="text-sm font-medium text-foreground">
            Fase: {phaseNames[phase] || phase}
          </div>
        </div>
        <span className="text-primary font-bold text-lg">
          {percentage}%
        </span>
      </div>
      <div className="h-1 bg-muted rounded-full overflow-hidden mt-3">
        <div 
          className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
