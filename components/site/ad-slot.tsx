type AdSlotProps = {
  label: string;
};

export function AdSlot({ label }: AdSlotProps) {
  return (
    <div className="rounded-[28px] border border-dashed border-white/18 bg-white/4 px-6 py-10 text-center">
      <p className="text-xs uppercase tracking-[0.26em] text-white/40">Ad Placeholder</p>
      <p className="mt-3 text-sm text-white/60">{label}</p>
    </div>
  );
}
