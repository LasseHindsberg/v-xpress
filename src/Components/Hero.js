import { Button } from "@mui/material";
import { Link } from "@reach/router";
import HeroImg from "../images/heroBackground.jpg";

export default function Hero() {
  return (
    <main className="hero">
      <img
        className="hero__backgroundImage"
        src={HeroImg}
        alt="Background"
      />
      <div className="hero__overlay">
        <h1>Your Wingman When Trading</h1>
        <Link to="/home">
          <Button color="primary">Enter Site</Button>
        </Link>
      </div>
    </main>
  );
}
