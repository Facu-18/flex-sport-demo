import Image from "next/image";
import Link from "next/link";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { formatDate } from "@/lib/utils";
import type { Obra } from "@/types";

interface ObraCardProps {
  obra: Obra;
}

export function ObraCard({ obra }: ObraCardProps) {
  return (
    <article className="rounded-2xl border border-flex-navy/10 bg-white p-5 shadow-lg shadow-flex-navy/5">
      <div className="relative mb-4 h-44 overflow-hidden rounded-xl border border-flex-navy/10">
        <Image
          src={obra.imagen}
          alt={obra.nombre}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={obra.id === "obra-cancha-boca"}
        />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-flex-navy">{obra.nombre}</h3>
          <p className="text-sm text-flex-navy/70">{obra.clienteEmpresa}</p>
        </div>
        <StatusBadge status={obra.estado} />
      </div>
      <div className="mt-4">
        <ProgressBar value={obra.progreso} />
      </div>
      <div className="mt-4 grid gap-2 text-xs text-flex-navy/70">
        <p>Responsable: {obra.responsable}</p>
        <p>Inicio: {formatDate(obra.fechaInicio)}</p>
        <p>Entrega estimada: {formatDate(obra.fechaEstimadaFin)}</p>
      </div>
      <Link
        href={`/obras/${obra.id}`}
        className="mt-5 inline-flex rounded-xl bg-flex-navy px-3 py-2 text-sm font-semibold text-flex-ice"
      >
        Ver detalle
      </Link>
    </article>
  );
}
