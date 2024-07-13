export default function HtmlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-6 gap-4 h-full">
      <div className="border-r p-6">
        <ul className="text-sm">
          <li>Getting Started</li>
          <li>Html</li>
        </ul>
      </div>
      <div className="col-span-5 p-6">{children}</div>
    </div>
  );
}
