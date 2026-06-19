import { Header } from "./Header";
import { OverviewCard } from "./OverviewCard";
import { SocialCard } from "./SocialCard";

export default function Dashboard({ data }) {
  return (
    <>
      <Header dashboard={data.dashboard} />

      <section className="grid grid-cols-1 gap-6">
        {data.socialCards.map((social, index) => (
          <SocialCard key={index} social={social} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6">
        {data.overview.map((over, index) => (
          <OverviewCard key={index} over={over} />
        ))}
        
      </section>
    </>
  );
}



