export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="container mx-auto px-4 max-w-7xl py-24 min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">{title}</h1>
      <p className="text-slate-500 text-lg">
        This section is currently under construction. Please check back later!
      </p>
    </div>
  );
}
