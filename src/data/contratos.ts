import type { Contrato } from "@/types";

export const contratos: Contrato[] = [
  {
    id: "cnt-001",
    numero: "CNT-2026-012",
    cotizacionId: "cot-001",
    cotizacionNumero: "COT-2026-047",
    clienteNombre: "Mariana Ibarra",
    clienteEmpresa: "Constructora Andes",
    obraId: "obra-cancha-boca",
    obraNombre: "Cancha de Boca",
    montoTotal: 1500000,
    estado: "en_ejecucion",
    fechaCreacion: "2026-03-01",
    fechaFirma: "2026-03-03",
    cuotaIds: ["cuota-001", "cuota-002", "cuota-003", "cuota-004"],
  },
];
