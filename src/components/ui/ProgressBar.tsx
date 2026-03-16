interface ProgressBarProps {
  value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div>
      <div className="h-2.5 w-full rounded-full bg-flex-navy/10">
        <div
          className="h-2.5 rounded-full bg-flex-lime transition-all duration-500"
          style={{ width: `${safeValue}%` }}
        />
      </div>
      <p className="mt-1 text-xs font-semibold text-flex-navy/65">{safeValue}% completado</p>
    </div>
  );
}
