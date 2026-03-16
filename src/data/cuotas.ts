import type { Cuota } from "@/types";

export const cuotas: Cuota[] = [
  {
    id: "cuota-001",
    contratoId: "cnt-001",
    numero: 1,
    descripcion: "Anticipo 50%",
    monto: 750000,
    vencimiento: "2026-03-05",
    estado: "pagada",
    fechaPago: "2026-03-04",
    metodoPago: "Transferencia bancaria",
  },
  {
    id: "cuota-002",
    contratoId: "cnt-001",
    numero: 2,
    descripcion: "Hito Fase 1",
    monto: 300000,
    vencimiento: "2026-03-20",
    estado: "vencida",
  },
  {
    id: "cuota-003",
    contratoId: "cnt-001",
    numero: 3,
    descripcion: "Hito Fase 2",
    monto: 250000,
    vencimiento: "2026-04-10",
    estado: "pendiente",
  },
  {
    id: "cuota-004",
    contratoId: "cnt-001",
    numero: 4,
    descripcion: "Saldo final",
    monto: 200000,
    vencimiento: "2026-05-01",
    estado: "pendiente",
  },
];
