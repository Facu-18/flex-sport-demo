interface StatusBadgeProps {
  status: string;
}

const badgeStyles: Record<string, string> = {
  nuevo: "bg-slate-200 text-slate-700",
  contactado: "bg-sky-100 text-sky-700",
  cotizado: "bg-indigo-100 text-indigo-700",
  ganado: "bg-emerald-100 text-emerald-700",
  perdido: "bg-rose-100 text-rose-700",
  borrador: "bg-slate-200 text-slate-700",
  enviada: "bg-blue-100 text-blue-700",
  aprobada: "bg-emerald-100 text-emerald-700",
  rechazada: "bg-rose-100 text-rose-700",
  enviado: "bg-blue-100 text-blue-700",
  firmado: "bg-emerald-100 text-emerald-700",
  en_ejecucion: "bg-cyan-100 text-cyan-700",
  finalizado: "bg-teal-100 text-teal-700",
  pendiente: "bg-slate-200 text-slate-700",
  pagada: "bg-emerald-100 text-emerald-700",
  vencida: "bg-rose-100 text-rose-700",
  solicitada: "bg-slate-200 text-slate-700",
  aprobada_oc: "bg-blue-100 text-blue-700",
  ordenada: "bg-amber-100 text-amber-700",
  recibida: "bg-emerald-100 text-emerald-700",
  pagada_oc: "bg-lime-200 text-lime-800",
  planificacion: "bg-slate-200 text-slate-700",
  pausada: "bg-amber-100 text-amber-700",
};

const labels: Record<string, string> = {
  en_ejecucion: "En ejecucion",
  planificacion: "Planificacion",
};

function resolveStyle(status: string) {
  if (status === "aprobada") {
    return "bg-emerald-100 text-emerald-700";
  }
  if (status === "pagada" || status === "pagada_oc") {
    return "bg-emerald-100 text-emerald-700";
  }
  if (status === "aprobada_oc") {
    return "bg-blue-100 text-blue-700";
  }

  return badgeStyles[status] ?? "bg-slate-100 text-slate-700";
}

function normalizeLabel(status: string) {
  if (labels[status]) {
    return labels[status];
  }

  return status.replaceAll("_", " ");
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${resolveStyle(status)}`}
    >
      {normalizeLabel(status)}
    </span>
  );
}
