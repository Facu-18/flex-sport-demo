import type { Cotizacion } from "@/types";

export const cotizaciones: Cotizacion[] = [
  {
    id: "cot-001",
    numero: "COT-2026-047",
    leadId: "lead-001",
    clienteNombre: "Mariana Ibarra",
    clienteEmpresa: "Constructora Andes",
    items: [
      {
        descripcion: "Instalacion Sistema Hidraulico",
        cantidad: 1,
        precioUnitario: 850000,
      },
      {
        descripcion: "Provision de materiales Fase 1",
        cantidad: 3,
        precioUnitario: 120000,
      },
      {
        descripcion: "Mano de obra especializada (mes)",
        cantidad: 2,
        precioUnitario: 180000,
      },
    ],
    subtotal: 1570000,
    descuento: 70000,
    total: 1500000,
    estado: "aprobada",
    fechaCreacion: "2026-02-25",
    validezDias: 30,
    condicionesPago: "50% anticipo, 50% contra entrega final",
  },
  {
    id: "cot-002",
    numero: "COT-2026-048",
    leadId: "lead-002",
    clienteNombre: "Pablo Ruiz",
    clienteEmpresa: "Grupo Horizonte",
    items: [
      {
        descripcion: "Relevamiento tecnico inicial",
        cantidad: 1,
        precioUnitario: 90000,
      },
      {
        descripcion: "Diseno y planificacion",
        cantidad: 1,
        precioUnitario: 210000,
      },
    ],
    subtotal: 300000,
    descuento: 0,
    total: 300000,
    estado: "enviada",
    fechaCreacion: "2026-03-05",
    validezDias: 15,
    condicionesPago: "100% contra aprobacion",
  },
  {
    id: "cot-003",
    numero: "COT-2026-049",
    leadId: "lead-001",
    clienteNombre: "Mariana Ibarra",
    clienteEmpresa: "Constructora Andes",
    items: [
      {
        descripcion: "Adicional electrico Fase 2",
        cantidad: 1,
        precioUnitario: 250000,
      },
    ],
    subtotal: 250000,
    descuento: 0,
    total: 250000,
    estado: "borrador",
    fechaCreacion: "2026-03-10",
    validezDias: 30,
    condicionesPago: "A convenir",
  },
];
