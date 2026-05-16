import { siteConfig } from "@/content/site";

export function AnnouncementBar() {
  return (
    <div className="border-b border-white/10 bg-black/70 px-4 py-2.5 text-center text-[11px] uppercase tracking-[0.22em] text-white/68 backdrop-blur-sm sm:text-xs">
      {siteConfig.appointmentNotice} | No Walk-Ins
    </div>
  );
}
