type PricingComparisonProps = {
  headers: string[];
  rows: { label: string; values: string[] }[];
};

export function PricingComparison({
  headers,
  rows,
}: PricingComparisonProps) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
      <div className="overflow-x-auto">
        <table className="min-w-[680px] text-left text-sm text-white/72">
          <thead className="bg-black/25 text-white">
            <tr>
              <th className="px-5 py-4 font-semibold">Comparison</th>
              {headers.map((header) => (
                <th key={header} className="px-5 py-4 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.label} className={index % 2 === 0 ? "bg-white/[0.02]" : ""}>
                <td className="px-5 py-4 font-medium text-white">{row.label}</td>
                {row.values.map((value) => (
                  <td key={value} className="px-5 py-4 leading-6">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
