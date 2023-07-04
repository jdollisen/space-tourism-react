import { useLocation } from 'react-router-dom';
import { Article } from "../components/common/Article";
import { Indicator } from "../components/common/Indicator";
import { PosterImage } from "../components/common/PosterImage";
import { SiteData } from "../SiteData";

export const Technology = () => {
  //const location = useLocation().pathname.replace(/^./, "");
  const location = useLocation().pathname.slice(21);
  const arrData = SiteData[0].technology;

  return (
    <main id="main" className="grid-container grid-container--technology flow">
      <h1 className="numbered-title"><span aria-hidden="true">03</span>Space Launch 101</h1>
      <div className="number-indicators flex fs-500 ff-serif" role="tablist" aria-label="vehicle spaceport capsule">
        <Indicator data={arrData} page={location} />
      </div>
      <Article data={arrData} page={location} />
      <PosterImage data={arrData} page={location} />
    </main>
  );
}
