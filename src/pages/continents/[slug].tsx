import { ContinentBanner } from '../../components/ContinentBanner/ContinentBanner';
import { Header } from '../../components/Header/Header';

export default function Continent() {
  return (
    <>
      <Header showLeftIcon />

      <ContinentBanner
        continentImageUrl="https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?ixlib=rb-1.2.1"
        continentName="Europa"
      />
    </>
  );
}
