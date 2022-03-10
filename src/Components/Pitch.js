import { BiCrown } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { VscArrowSwap } from "react-icons/vsc";
import PitchCard from "./PitchCard";

export default function Pitch() {
  return (
    <article className="pitch">
      <h2 className="pitch__header">Why we are the best wingman</h2>
      <h3 className="pitch__subheader">
        All the reasons vXpress can help you get great gear - fast and secure
      </h3>

      <section className="pitch__cardContainer">
        <PitchCard
          heading="King of Trading"
          icon={<BiCrown />}
          body="We strive to be the best trading company available for you."
        />
        <PitchCard
          heading="100% Safe &amp; Secure"
          icon={<BsShieldCheck />}
          body="our newest technology within trading makes sure that you can be 100% safe to use our services."
        />
        <PitchCard
          heading="100% money back guarantee!"
          icon={<FaRegMoneyBillAlt />}
          body="If you're not satisfied with the service within the first 14 days, we will give you a 100% refund"
        />
        <PitchCard
          heading="Fastest Service available on the market"
          icon={<VscArrowSwap />}
          body="Start trading now, and recieve your items within minutes!"
        />
      </section>
    </article>
  );
}
