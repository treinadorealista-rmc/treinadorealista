import { cn } from '@/lib/utils';

interface DotsNavigationProps {
  current: number;
  total: number;
}

export function DotsNavigation({ current, total }: DotsNavigationProps) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            i + 1 === current
              ? "bg-primary w-3"
              : i + 1 < current
              ? "bg-primary/50"
              : "bg-muted-foreground/30"
          )}
        />
      ))}
    </div>
  );
}
