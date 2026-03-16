import type { OrdenCompra } from "@/types";

export const ordenesCompra: OrdenCompra[] = [
  {
    id: "oc-001",
    numero: "OC-2026-089",
    obraId: "obra-cancha-boca",
    obraNombre: "Cancha de Boca",
    proveedorId: "prov-001",
    proveedorNombre: "Materiales del Sur S.A.",
    items: [
      {
        productoNombre: "Cano de PVC 110mm",
        cantidad: 200,
        unidad: "m",
        precioUnitario: 850,
      },
      {
        productoNombre: "Codo 90 PVC 110mm",
        cantidad: 80,
        unidad: "u",
        precioUnitario: 320,
      },
    ],
    total: 195600,
    estado: "recibida",
    fechaSolicitud: "2026-03-07",
    fechaAprobacion: "2026-03-08",
    solicitadoPor: "Luciano Soto",
  },
  {
    id: "oc-002",
    numero: "OC-2026-091",
    obraId: "obra-cancha-boca",
    obraNombre: "Cancha de Boca",
    proveedorId: "prov-002",
    proveedorNombre: "Electro Rapido SRL",
    items: [
      {
        productoNombre: "Cable 2.5mm2 (rollo 100m)",
        cantidad: 15,
        unidad: "rollo",
        precioUnitario: 12500,
      },
      {
        productoNombre: "Tablero electrico 24 polos",
        cantidad: 3,
        unidad: "u",
        precioUnitario: 28000,
      },
    ],
    total: 271500,
    estado: "aprobada",
    fechaSolicitud: "2026-03-10",
    fechaAprobacion: "2026-03-11",
    solicitadoPor: "Luciano Soto",
  },
  {
    id: "oc-003",
    numero: "OC-2026-094",
    obraId: "obra-cancha-boca",
    obraNombre: "Cancha de Boca",
    proveedorId: "prov-003",
    proveedorNombre: "HidroTec Argentina",
    items: [
      {
        productoNombre: "Bomba centrifuga 1.5HP",
        cantidad: 2,
        unidad: "u",
        precioUnitario: 85000,
      },
    ],
    total: 170000,
    estado: "solicitada",
    fechaSolicitud: "2026-03-15",
    solicitadoPor: "Nora Varela",
  },
];
