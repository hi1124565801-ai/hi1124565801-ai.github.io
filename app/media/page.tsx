import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { MediaFeatureItem } from "@/components/media/MediaFeatureItem";
import { mediaFeatures } from "@/data/mediaFeatures";

export const metadata: Metadata = {
  title: "Media Coverage",
  description:
    "Selected interviews and profiles about Yunmoxiao Tian’s study, research, writing, and international experiences.",
};

export default function MediaPage() {
  return (
    <PageShell>
      <header className="page-hero page-hero--media">
        <p className="section-kicker">Media Coverage</p>
        <h1>Profiles and stories about my work</h1>
        <p>
          Selected interviews and profiles published by Peking University and
          other institutions, covering my study, research, writing, and
          international experiences.
        </p>
      </header>
      <section className="media-feature-list section-pad" aria-label="Media features">
        {mediaFeatures.map((feature, index) => (
          <MediaFeatureItem key={feature.id} feature={feature} index={index} />
        ))}
      </section>
    </PageShell>
  );
}
