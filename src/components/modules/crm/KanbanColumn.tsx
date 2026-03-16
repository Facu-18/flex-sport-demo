import { Droppable } from "@hello-pangea/dnd";
import type { Lead, LeadStatus } from "@/types";
import { LeadCard } from "./LeadCard";

interface KanbanColumnProps {
  title: string;
  status: LeadStatus;
  leads: Lead[];
  onMove: (leadId: string, status: LeadStatus) => void;
}

export function KanbanColumn({ title, status, leads, onMove }: KanbanColumnProps) {
  return (
    <section className="min-w-[260px] flex-1 rounded-2xl border border-flex-navy/10 bg-flex-ice p-3">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-flex-navy/65">{title}</h3>
        <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-flex-navy">
          {leads.length}
        </span>
      </div>
      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`space-y-3 rounded-xl p-1 transition ${
              snapshot.isDraggingOver ? "bg-flex-lime/25" : ""
            }`}
          >
            {leads.map((lead, index) => (
              <LeadCard key={lead.id} lead={lead} onMove={onMove} index={index} />
            ))}
            {provided.placeholder}
            {leads.length === 0 ? (
              <p className="rounded-xl border border-dashed border-flex-navy/15 bg-white/50 px-3 py-6 text-center text-xs text-flex-navy/50">
                Arrastra leads a {status}
              </p>
            ) : null}
          </div>
        )}
      </Droppable>
    </section>
  );
}
