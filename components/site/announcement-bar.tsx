import { siteConfig } from "@/content/site";

export function AnnouncementBar() {
  return (
    <div className="border-b border-white/10 bg-black/70 px-4 py-2 text-center text-[10px] uppercase tracking-[0.2em] text-white/68 backdrop-blur-sm sm:text-[11px]">
      {siteConfig.appointmentNotice} | No Walk-Ins
    </div>
  );
}
