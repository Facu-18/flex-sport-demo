import type { PuntoGrafico } from "@/types";

export const ingresosMensuales: PuntoGrafico[] = [
  { mes: "Oct", valor: 520000 },
  { mes: "Nov", valor: 890000 },
  { mes: "Dic", valor: 340000 },
  { mes: "Ene", valor: 1100000 },
  { mes: "Feb", valor: 960000 },
  { mes: "Mar", valor: 1500000 },
];

export const egresosMensuales: PuntoGrafico[] = [
  { mes: "Oct", valor: 310000 },
  { mes: "Nov", valor: 620000 },
  { mes: "Dic", valor: 280000 },
  { mes: "Ene", valor: 750000 },
  { mes: "Feb", valor: 540000 },
  { mes: "Mar", valor: 637100 },
];

export const estadoCobranzas = [
  { name: "Cobrado", value: 750000, color: "#16A34A" },
  { name: "Pendiente", value: 450000, color: "#2563EB" },
  { name: "Vencido", value: 300000, color: "#DC2626" },
];

export const leadsEmbudoData = [
  { etapa: "Nuevo", cantidad: 8 },
  { etapa: "Contactado", cantidad: 6 },
  { etapa: "Cotizado", cantidad: 5 },
  { etapa: "Ganado", cantidad: 3 },
  { etapa: "Perdido", cantidad: 2 },
];

export const periodosReporte = [
  { id: "mes", label: "Este mes" },
  { id: "trimestre", label: "Trimestre" },
  { id: "semestre", label: "Semestre" },
] as const;
