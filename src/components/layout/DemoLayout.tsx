"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { WhatsAppBadge } from "./WhatsAppBadge";

export function DemoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-flex-ice">
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      {mobileOpen ? (
        <button
          type="button"
          aria-label="Cerrar menú"
          className="fixed inset-0 z-20 bg-flex-navy/60 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      <div className={`transition-all duration-300 ${collapsed ? "md:pl-20" : "md:pl-72"}`}>
        <Topbar
          collapsed={collapsed}
          onToggleSidebar={() => setCollapsed((value) => !value)}
          onOpenMobile={() => setMobileOpen(true)}
        />
        <main className="px-4 py-6 md:px-8">{children}</main>
      </div>
      <WhatsAppBadge />
    </div>
  );
}
