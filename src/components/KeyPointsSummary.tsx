import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

interface KeyPointsSummaryProps {
  points: string[];
}

export function KeyPointsSummary({ points }: KeyPointsSummaryProps) {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border-2 border-primary/30 shadow-lg">
      {/* Decorative accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-primary/80 to-accent" />
      
      <CardContent className="py-6 pl-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-lg bg-primary/20">
            <Lightbulb className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-bold text-lg text-foreground tracking-tight">
            Key Points Summary
          </h3>
        </div>
        <ul className="grid md:grid-cols-2 gap-4 text-sm">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary font-bold text-xs flex items-center justify-center mt-0.5">
                {index + 1}
              </span>
              <span className="text-foreground/80 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
