import type { Proveedor } from "@/types";

export const proveedores: Proveedor[] = [
  {
    id: "prov-001",
    nombre: "Materiales del Sur S.A.",
    rubro: "Materiales de construccion",
    contacto: "Diego Peralta",
    email: "ventas@matsur.com",
    telefono: "+54 11 4800-1100",
  },
  {
    id: "prov-002",
    nombre: "Electro Rapido SRL",
    rubro: "Materiales electricos",
    contacto: "Carla Mendez",
    email: "pedidos@erapido.com",
    telefono: "+54 351 555-2200",
  },
  {
    id: "prov-003",
    nombre: "HidroTec Argentina",
    rubro: "Sistemas hidraulicos",
    contacto: "Martin Gomez",
    email: "comercial@hidrotec.ar",
    telefono: "+54 11 4711-9900",
  },
];
