 const iconos = {
  facebook: "/images/icon-facebook.svg",
  twitter: "/images/icon-twitter.svg",
  instagram: "/images/icon-instagram.svg",
  youtube: "/images/icon-youtube.svg",
};
export function OverviewCard({ over }) {
  return (
    <section>
      <h1>Overview - Today</h1>
      <div>
        <img src={iconos[over.platform]} alt={over.platform} />
      </div>
      <p>{over.metric}</p>
      <p>{over.platform}</p>

      <h3>{over.value}</h3>

      <p>
        {over.isUp ? "+" : "-"} {over.change}%
      </p>
    </section>
  );
}