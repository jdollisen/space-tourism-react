import { useLocation } from 'react-router-dom';
import { Article } from "../components/common/Article";
import { Indicator } from "../components/common/Indicator";
import { PosterImage } from "../components/common/PosterImage";
import { SiteData } from "../SiteData";

export const Crew = () => {
  const location = useLocation().pathname.replace(/^./, "");
  const arrData = SiteData[0].crew;

  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>

      <div className="dot-indicators flex" role="tablist" aria-label="crew member list">
        <Indicator data={arrData} page={location} />
      </div>
      <Article data={arrData} page={location} />
      <PosterImage data={arrData} page={location} />

    </main>
  );
}
