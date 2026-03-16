"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Boxes,
  Building2,
  FileSignature,
  FileText,
  LayoutDashboard,
  ShoppingCart,
  Users,
  Wallet,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/crm", label: "CRM", icon: Users },
  { href: "/cotizaciones", label: "Cotizaciones", icon: FileText },
  { href: "/contratos", label: "Contratos", icon: FileSignature },
  { href: "/cobranzas", label: "Cobranzas", icon: Wallet },
  { href: "/compras", label: "Compras", icon: ShoppingCart },
  { href: "/stock", label: "Stock", icon: Boxes },
  { href: "/obras", label: "Obras", icon: Building2 },
  { href: "/reportes", label: "Reportes", icon: BarChart3 },
];

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar({ collapsed, mobileOpen, onCloseMobile }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-72 border-r border-white/10 bg-flex-navy text-flex-ice transition-all duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 ${collapsed ? "md:w-20" : "md:w-72"}`}
    >
      <div className="flex h-20 items-center gap-3 border-b border-white/10 px-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-flex-lime text-lg font-black text-flex-navy">
          FX
        </div>
        {!collapsed ? (
          <div>
            <p className="text-lg font-extrabold tracking-wide text-white">FLEX SPORT</p>
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">Demo</p>
          </div>
        ) : null}
      </div>

      <nav className="space-y-2 p-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isCurrent(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onCloseMobile}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                active
                  ? "bg-flex-lime text-flex-navy"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={18} />
              {!collapsed ? <span>{item.label}</span> : null}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
