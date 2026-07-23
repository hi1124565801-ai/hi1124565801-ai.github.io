import { internationalExperiences } from "@/data/internationalExperiences";
import { InternationalExperienceMap } from "./InternationalExperienceMap";

export function InternationalExperience() {
  return (
    <section
      className="international-experience international-experience--compact section-pad"
      aria-labelledby="international-heading"
    >
      <div className="section-head">
        <div>
          <p className="section-kicker">Academic Experience</p>
          <h2 id="international-heading">Where I study and conduct research</h2>
        </div>
        <p>A concise map of the institutions where I study, exchange, and conduct research.</p>
      </div>
      <InternationalExperienceMap experiences={internationalExperiences} />
    </section>
  );
}
