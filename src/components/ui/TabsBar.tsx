interface TabOption {
  id: string;
  label: string;
}

interface TabsBarProps {
  tabs: TabOption[];
  active: string;
  onChange: (id: string) => void;
}

export function TabsBar({ tabs, active, onChange }: TabsBarProps) {
  return (
    <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-flex-navy/10 bg-white p-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
            active === tab.id
              ? "bg-flex-navy text-flex-ice"
              : "text-flex-navy/70 hover:bg-flex-ice"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
