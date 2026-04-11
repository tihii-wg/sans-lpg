import SectionAdvantages from "../components/SectionAdvantages";
import SectionOurWork from "../components/SectionOurWork";
import SectionInstallation from "../components/SectionInstallation";
import SectionAdditionalWork from "../components/SectionAdditioanlWork";
import SectionReviews from "../components/SectionReviews";

export default function Content() {
  return (
    <>
      <SectionAdvantages />
      <SectionAdditionalWork />
      <SectionOurWork />
      <SectionInstallation />
      <SectionReviews/>
    </>
  );
}
