import FAQ from "../Components/FAQ";
import Navbar from "../Components/Navbar";
import Parallax from "../Components/Parallax";
import Pitch from "../Components/Pitch";
import PriceContainer from "../Components/PriceContainer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Parallax />
      <Pitch />
      <PriceContainer />
      <FAQ/>
    </main>
  );
}
