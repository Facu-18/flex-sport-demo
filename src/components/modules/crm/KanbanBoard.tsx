"use client";

import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import type { LeadStatus } from "@/types";
import { useCrmStore } from "@/store/useCrmStore";
import { KanbanColumn } from "./KanbanColumn";

const columns: { title: string; status: LeadStatus }[] = [
  { title: "Nuevo", status: "nuevo" },
  { title: "Contactado", status: "contactado" },
  { title: "Cotizado", status: "cotizado" },
  { title: "Ganado", status: "ganado" },
  { title: "Perdido", status: "perdido" },
];

export function KanbanBoard() {
  const leads = useCrmStore((state) => state.leads);
  const moveLead = useCrmStore((state) => state.moveLead);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const from = result.source.droppableId as LeadStatus;
    const to = result.destination.droppableId as LeadStatus;

    if (from === to) {
      return;
    }

    moveLead(result.draggableId, to);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-max gap-4">
          {columns.map((column) => (
            <KanbanColumn
              key={column.status}
              title={column.title}
              status={column.status}
              leads={leads.filter((lead) => lead.estado === column.status)}
              onMove={moveLead}
            />
          ))}
        </div>
      </div>
    </DragDropContext>
  );
}
