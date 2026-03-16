"use client";

import { Bell, Menu, PanelLeftClose, PanelLeftOpen, UserCircle2 } from "lucide-react";

interface TopbarProps {
  collapsed: boolean;
  onToggleSidebar: () => void;
  onOpenMobile: () => void;
}

export function Topbar({ collapsed, onToggleSidebar, onOpenMobile }: TopbarProps) {
  const today = new Intl.DateTimeFormat("es-AR", {
    dateStyle: "full",
  }).format(new Date());

  return (
    <header className="sticky top-0 z-10 border-b border-flex-navy/10 bg-white/95 backdrop-blur">
      <div className="flex h-20 items-center justify-between gap-4 px-4 md:px-8">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={onOpenMobile}
            className="inline-flex rounded-lg border border-flex-navy/20 p-2 text-flex-navy md:hidden"
          >
            <Menu size={18} />
          </button>
          <button
            type="button"
            aria-label="Colapsar menú"
            onClick={onToggleSidebar}
            className="hidden rounded-lg border border-flex-navy/20 p-2 text-flex-navy md:inline-flex"
          >
            {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          </button>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-flex-navy/55">
              Centro de mando
            </p>
            <p className="text-sm font-medium capitalize text-flex-navy/80">{today}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="relative rounded-lg border border-flex-navy/20 p-2 text-flex-navy hover:bg-flex-ice"
          >
            <Bell size={18} />
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-flex-lime px-1 text-[10px] font-bold text-flex-navy">
              3
            </span>
          </button>
          <div className="inline-flex items-center gap-2 rounded-xl border border-flex-navy/20 bg-flex-ice px-3 py-2">
            <UserCircle2 className="text-flex-navy" size={18} />
            <div className="hidden md:block">
              <p className="text-xs font-semibold leading-tight text-flex-navy">Admin Demo</p>
              <p className="text-[11px] leading-tight text-flex-navy/65">flexsport.local</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
