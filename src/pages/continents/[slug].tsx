import { ContinentBanner } from '../../components/ContinentBanner/ContinentBanner';
import { ContinentDetails } from '../../components/ContinentDetails/ContinentDetails';
import { Header } from '../../components/Header/Header';

export default function Continent() {
  return (
    <>
      <Header showLeftIcon />

      <ContinentBanner
        continentImageUrl="https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?ixlib=rb-1.2.1"
        continentName="Europa"
      />

      <ContinentDetails
        bio="A Europa é, por convenção, um dos seis continentes do mundo. 
          Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se 
          da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar 
          Cáspio, o Cáucaso, e o mar Negro a sudeste"
        countriesNumber={50}
        languagesNumber={60}
        citiesNumber={27}
      />
    </>
  );
}
