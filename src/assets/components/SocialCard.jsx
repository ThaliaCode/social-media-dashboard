const iconos = {
  facebook: "/images/icon-facebook.svg",
  twitter: "/images/icon-twitter.svg",
  instagram: "/images/icon-instagram.svg",
  youtube: "/images/icon-youtube.svg",
};

export function SocialCard({ social }) {
  return (
    <section className="rounded-md p-6 text-center border-t-4 border-cyan-500">
      <div className="mb-6 flex items-center justify-center gap-2 ">
        <img className="w-5" src={iconos[social.platform]} alt={social.platform} />
        <p className="text-xs font-bold text-slate-400">{social.handle}</p>
      </div>

      <h2 className="text-6xl font-bold">{social.count}</h2>
      <p className="mt-1 text-xs uppercase tracking-[0.35em] text-slate-400">{social.countLabel}</p>

     
    </section>
  );
}