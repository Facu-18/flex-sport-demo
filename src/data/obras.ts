import type { Obra } from "@/types";

export const obras: Obra[] = [
  {
    id: "obra-cancha-boca",
    nombre: "Cancha de Boca",
    imagen: "/cancha-boca.jpg",
    cliente: "Mariana Ibarra",
    clienteEmpresa: "Constructora Andes",
    contratoId: "cnt-001",
    contratoNumero: "CNT-2026-012",
    estado: "en_ejecucion",
    progreso: 62,
    fechaInicio: "2026-03-05",
    fechaEstimadaFin: "2026-06-30",
    responsable: "Luciano Soto",
    ubicacion: "Brandsen 805, CABA",
    descripcion:
      "Adecuacion integral de instalaciones hidraulicas y electricas en zona de tribunas.",
  },
  {
    id: "obra-parque-central",
    nombre: "Parque Central",
    imagen: "/parque-central.jpg",
    cliente: "Pablo Ruiz",
    clienteEmpresa: "Grupo Horizonte",
    contratoId: "",
    contratoNumero: "",
    estado: "planificacion",
    progreso: 10,
    fechaInicio: "2026-04-01",
    fechaEstimadaFin: "2026-09-30",
    responsable: "Nora Varela",
    ubicacion: "Bv. Chacabuco 900, Cordoba",
    descripcion:
      "Relevamiento y diseno integral de instalaciones para complejo de usos mixtos.",
  },
];
