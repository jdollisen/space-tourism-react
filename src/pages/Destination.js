import { useLocation } from 'react-router-dom';
import { Article } from "../components/common/Article";
import { Indicator } from "../components/common/Indicator";
import { PosterImage } from "../components/common/PosterImage";
import { SiteData } from "../SiteData";

export const Destination = () => {
  const arrData = SiteData[0].destination;
  let location = useLocation().pathname.slice(21);
      location = location.replace(/\//, "");

  //console.log(location);
  return (
    <main id="main" className="grid-container grid-container--destination flow">
      <h1 className="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>
      <PosterImage data={arrData} page={location} />
      <div className="tab-list underline-indicators flex" role="tablist" aria-label="destination list">
        <Indicator data={arrData} page={location} />
      </div>
      <Article data={arrData} page={location} />
    </main>
  );
}