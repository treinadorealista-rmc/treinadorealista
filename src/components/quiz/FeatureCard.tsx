import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
}

export function FeatureCard({ icon: Icon, title }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <span className="text-sm text-center text-muted-foreground font-medium">
        {title}
      </span>
    </div>
  );
}
