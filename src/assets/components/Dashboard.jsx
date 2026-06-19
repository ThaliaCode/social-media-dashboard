import { Header } from "./Header";
import { OverviewCard } from "./OverviewCard";
import { SocialCard } from "./SocialCard";

export default function Dashboard({ data }) {
  return (
    <>
      <Header dashboard={data.dashboard} />

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {data.socialCards.map((social, index) => (
          <SocialCard key={index} social={social} />
        ))}
      </section >
      <h1 className="text-slate-400 text-2xl m-2 font-bold">
      Overview - Today
      </h1>

     <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {data.overview.map((over, index) => (
      <OverviewCard key={index} over={over} />
      ))}
      </section>
    </>
  );
}



