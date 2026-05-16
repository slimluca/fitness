import Link from "next/link";

type TableOfContentsProps = {
  items: { id: string; title: string }[];
};

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <aside className="rounded-[28px] border border-[color:var(--brand-gold)]/18 bg-black/30 p-6">
      <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--brand-gold)]">
        On this page
      </p>
      <ul className="mt-4 space-y-3 text-sm text-white/70">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`#${item.id}`} className="transition hover:text-white">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
