interface ToastProps {
  open: boolean;
  message: string;
}

export function Toast({ open, message }: ToastProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-xl bg-flex-navy px-4 py-3 text-sm font-semibold text-flex-ice shadow-lg">
      {message}
    </div>
  );
}
