import type { Actividad, Alerta, DashboardKpi } from "@/types";

export const dashboardKpis: DashboardKpi[] = [
  { id: "kpi-1", label: "Leads activos", value: "26", delta: "+12% semanal" },
  { id: "kpi-2", label: "Ventas del mes", value: "$18.4M", delta: "+8% mensual" },
  { id: "kpi-3", label: "Pendiente de cobro", value: "$4.7M", delta: "6 cuotas vencidas" },
  { id: "kpi-4", label: "Obras en curso", value: "9", delta: "3 en etapa final" },
];

export const actividadReciente: Actividad[] = [
  {
    id: "act-1",
    tipo: "pago",
    descripcion: "Cuota #1 de Constructora Andes marcada como pagada",
    tiempo: "hace 2 horas",
    icono: "PAGO",
  },
  {
    id: "act-2",
    tipo: "lead",
    descripcion: "Nuevo lead: Romina Vega - Desarrollos Delta",
    tiempo: "hace 4 horas",
    icono: "LEAD",
  },
  {
    id: "act-3",
    tipo: "oc",
    descripcion: "OC-2026-091 aprobada - Electro Rapido SRL",
    tiempo: "hace 1 dia",
    icono: "OC",
  },
  {
    id: "act-4",
    tipo: "contrato",
    descripcion: "Contrato CNT-2026-012 firmado",
    tiempo: "hace 2 dias",
    icono: "DOC",
  },
  {
    id: "act-5",
    tipo: "obra",
    descripcion: "Cancha de Boca alcanzo 62% de avance",
    tiempo: "hace 3 dias",
    icono: "OBR",
  },
];

export const alertas: Alerta[] = [
  {
    id: "alerta-1",
    tipo: "danger",
    mensaje: "Cuota #2 de Constructora Andes vencida - $300.000",
  },
  {
    id: "alerta-2",
    tipo: "warning",
    mensaje: "OC-2026-094 pendiente de aprobacion desde ayer",
  },
  {
    id: "alerta-3",
    tipo: "warning",
    mensaje: "Cotizacion COT-2026-048 vence en 3 dias",
  },
];
