export type LeadStatus = "nuevo" | "contactado" | "cotizado" | "ganado" | "perdido";
export type CotizacionEstado = "borrador" | "enviada" | "aprobada" | "rechazada";
export type ContratoEstado =
  | "borrador"
  | "enviado"
  | "firmado"
  | "en_ejecucion"
  | "finalizado";
export type CuotaEstado = "pendiente" | "pagada" | "vencida";
export type ObraEstado = "planificacion" | "en_ejecucion" | "pausada" | "finalizada";
export type OrdenCompraEstado =
  | "solicitada"
  | "aprobada"
  | "ordenada"
  | "recibida"
  | "pagada";
export type MovimientoTipo = "entrada" | "salida" | "reserva" | "devolucion";

export interface Cliente {
  id: string;
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  cuit: string;
}

export interface Lead {
  id: string;
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  estado: LeadStatus;
  fechaIngreso: string;
  responsable: string;
  notas: string[];
}

export interface ItemCotizacion {
  descripcion: string;
  cantidad: number;
  precioUnitario: number;
}

export interface Cotizacion {
  id: string;
  numero: string;
  leadId: string;
  clienteNombre: string;
  clienteEmpresa: string;
  items: ItemCotizacion[];
  subtotal: number;
  descuento: number;
  total: number;
  estado: CotizacionEstado;
  fechaCreacion: string;
  validezDias: number;
  condicionesPago: string;
}

export interface Contrato {
  id: string;
  numero: string;
  cotizacionId: string;
  cotizacionNumero: string;
  clienteNombre: string;
  clienteEmpresa: string;
  obraId: string;
  obraNombre: string;
  montoTotal: number;
  estado: ContratoEstado;
  fechaCreacion: string;
  fechaFirma?: string;
  cuotaIds: string[];
}

export interface Cuota {
  id: string;
  contratoId: string;
  numero: number;
  descripcion: string;
  monto: number;
  vencimiento: string;
  estado: CuotaEstado;
  fechaPago?: string;
  metodoPago?: string;
}

export interface Obra {
  id: string;
  nombre: string;
  imagen: string;
  cliente: string;
  clienteEmpresa: string;
  contratoId: string;
  contratoNumero: string;
  estado: ObraEstado;
  progreso: number;
  fechaInicio: string;
  fechaEstimadaFin: string;
  responsable: string;
  ubicacion: string;
  descripcion: string;
}

export interface Proveedor {
  id: string;
  nombre: string;
  rubro: string;
  contacto: string;
  email: string;
  telefono: string;
}

export interface ItemOC {
  productoNombre: string;
  cantidad: number;
  unidad: string;
  precioUnitario: number;
}

export interface OrdenCompra {
  id: string;
  numero: string;
  obraId: string;
  obraNombre: string;
  proveedorId: string;
  proveedorNombre: string;
  items: ItemOC[];
  total: number;
  estado: OrdenCompraEstado;
  fechaSolicitud: string;
  fechaAprobacion?: string;
  solicitadoPor: string;
}

export interface Producto {
  id: string;
  codigo: string;
  nombre: string;
  categoria: string;
  unidad: string;
  stockDisponible: number;
  stockReservado: number;
  obraAsignada?: string;
  precioUnitario: number;
}

export interface MovimientoStock {
  id: string;
  productoId: string;
  productoNombre: string;
  obraId: string;
  obraNombre: string;
  tipo: MovimientoTipo;
  cantidad: number;
  fecha: string;
  ocId?: string;
  ocNumero?: string;
  motivo: string;
  responsable: string;
}

export interface DashboardKpi {
  id: string;
  label: string;
  value: string;
  delta: string;
}

export interface Actividad {
  id: string;
  tipo: "lead" | "pago" | "contrato" | "oc" | "obra";
  descripcion: string;
  tiempo: string;
  icono: string;
}

export interface Alerta {
  id: string;
  tipo: "danger" | "warning";
  mensaje: string;
}

export interface PuntoGrafico {
  mes: string;
  valor: number;
}
