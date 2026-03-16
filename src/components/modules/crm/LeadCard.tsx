import { Draggable } from "@hello-pangea/dnd";
import Link from "next/link";
import type { Lead, LeadStatus } from "@/types";
import { StatusBadge } from "@/components/ui/StatusBadge";

interface LeadCardProps {
  lead: Lead;
  onMove: (leadId: string, status: LeadStatus) => void;
  index: number;
}

const nextStatusMap: Partial<Record<LeadStatus, LeadStatus>> = {
  nuevo: "contactado",
  contactado: "cotizado",
  cotizado: "ganado",
};

export function LeadCard({ lead, onMove, index }: LeadCardProps) {
  const nextStatus = nextStatusMap[lead.estado];

  return (
    <Draggable draggableId={lead.id} index={index}>
      {(provided, snapshot) => (
        <article
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`space-y-3 rounded-xl border border-flex-navy/10 bg-white p-3 shadow-sm transition ${
            snapshot.isDragging ? "rotate-1 shadow-xl" : ""
          }`}
        >
          <div>
            <Link href={`/crm/${lead.id}`} className="font-semibold text-flex-navy hover:underline">
              {lead.nombre}
            </Link>
            <p className="text-xs text-flex-navy/60">{lead.empresa}</p>
          </div>
          <div className="flex items-center justify-between">
            <StatusBadge status={lead.estado} />
            <span className="rounded-full bg-flex-ice px-2 py-1 text-xs font-medium text-flex-navy/70">
              {lead.responsable}
            </span>
          </div>
          {nextStatus ? (
            <button
              type="button"
              onClick={() => onMove(lead.id, nextStatus)}
              className="w-full rounded-lg border border-flex-navy/20 bg-flex-ice px-2 py-1.5 text-xs font-semibold text-flex-navy hover:border-flex-navy"
            >
              Mover a {nextStatus}
            </button>
          ) : null}
        </article>
      )}
    </Draggable>
  );
}
