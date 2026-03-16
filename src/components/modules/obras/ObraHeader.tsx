import Image from "next/image";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { formatDate } from "@/lib/utils";
import type { Obra } from "@/types";

interface ObraHeaderProps {
  obra: Obra;
}

export function ObraHeader({ obra }: ObraHeaderProps) {
  return (
    <section className="rounded-2xl border border-flex-navy/10 bg-white p-6 shadow-lg shadow-flex-navy/5">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-extrabold text-flex-navy">{obra.nombre}</h1>
            <p className="text-sm text-flex-navy/70">{obra.descripcion}</p>
          </div>
          <StatusBadge status={obra.estado} />
        </div>
        <div className="relative h-56 overflow-hidden rounded-xl border border-flex-navy/10">
          <Image
            src={obra.imagen}
            alt={obra.nombre}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-4">
        <ProgressBar value={obra.progreso} />
      </div>
      <div className="mt-4 grid gap-3 text-sm text-flex-navy/75 md:grid-cols-2 xl:grid-cols-4">
        <p>Responsable: {obra.responsable}</p>
        <p>Ubicacion: {obra.ubicacion}</p>
        <p>Inicio: {formatDate(obra.fechaInicio)}</p>
        <p>Fin estimado: {formatDate(obra.fechaEstimadaFin)}</p>
      </div>
    </section>
  );
}
