 const iconos = {
  facebook: "/images/icon-facebook.svg",
  twitter: "/images/icon-twitter.svg",
  instagram: "/images/icon-instagram.svg",
  youtube: "/images/icon-youtube.svg",
};
export function OverviewCard({ over }) {
  return (
    <section className="rounded-md  p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-slate-400">
          {over.metric}
        </p>
        <img className="w-5" src={iconos[over.platform]} alt={over.platform}/>
      </div>

      <div className="mt-6 flex items-end justify-between">
        <h3 className="text-3xl font-bold ">
          {over.value}
        </h3>

        <p
          className={`text-xs font-bold ${
            over.isUp ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {over.isUp ? "▲" : "▼"} {over.change}%
        </p>
      </div>
    </section>
  );
}