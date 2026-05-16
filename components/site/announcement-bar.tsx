import { siteConfig } from "@/content/site";

export function AnnouncementBar() {
  return (
    <div className="border-b border-white/10 bg-black/70 px-4 py-3 text-center text-xs uppercase tracking-[0.28em] text-white/70 backdrop-blur-sm">
      {siteConfig.appointmentNotice} | No Walk-Ins
    </div>
  );
}
