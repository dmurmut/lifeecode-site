import SiteLayout from "@/components/SiteLayout";
import { usePageMeta } from "@/hooks/usePageMeta";

const sections = [
  {
    title: "Current staging state",
    body: "The author-newsletter form is disabled in this staging preview. It does not submit or store names or email addresses. No author mailing list has been created through this preview.",
  },
  {
    title: "Contact by email",
    body: "If you email hello@devmmurmu.com, your address and the information you send are handled through the Hostinger-hosted mailbox so your message can be read and answered. Sending an inquiry does not subscribe you to the author newsletter.",
  },
  {
    title: "Before newsletter activation",
    body: "Before the form is activated, this notice will identify the selected email provider, explain what information is collected and why, describe consent and retention, and provide a working method to unsubscribe. The author list will remain separate from LifeeCode unless a subscriber has expressly consented to both.",
  },
  {
    title: "External destinations",
    body: "Links to LinkedIn, X, YouTube, Spotify, research publications, regulators, and other third-party services take visitors to sites with their own privacy practices. Those services control the information collected on their platforms.",
  },
  {
    title: "LifeeCode",
    body: "LifeeCode is being preserved as a separate publication section. Its health-technology articles are educational content, not personal medical advice. Its future privacy notice will describe any publication-specific forms or services separately from the author newsletter.",
  },
];

export default function Privacy() {
  usePageMeta(
    "Privacy — Deveendra Murmu",
    "Draft privacy information for the Deveendra Murmu author website staging preview.",
  );

  return (
    <SiteLayout>
      <section className="editorial-grid border-b border-[#302b31]/10 py-22 lg:py-30">
        <div className="container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="section-kicker">Draft for review</p>
            <h1 className="page-title mt-6">Privacy</h1>
          </div>
          <div className="max-w-2xl">
            <p className="editorial-quote italic text-[#7e334e]">Clear terms should come before data collection, not after it.</p>
            <p className="reading-text mt-6">This page records the current staging state. It is not the final launch policy. The final wording will be completed after the newsletter provider is selected and the site’s data practices are reviewed.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfbfa] py-24 lg:py-30">
        <div className="container ruled-list">
          {sections.map((section, index) => (
            <article key={section.title} className={`grid gap-3 py-10 lg:grid-cols-[5rem_0.75fr_1.25fr] lg:gap-10 ${index % 2 === 1 ? "lg:ml-16" : ""}`}>
              <span className="folio-label text-[#7e511b]">{String(index + 1).padStart(2, "0")} /</span>
              <h2 className="subsection-heading ">{section.title}</h2>
              <p className="reading-text">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#302b31]/10 bg-[#f1f0ed] py-18">
        <div className="container grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="section-kicker">Privacy questions</p>
            <h2 className="subsection-heading mt-4 max-w-2xl">Questions about your information?</h2>
          </div>
          <a href="mailto:hello@devmmurmu.com" className="secondary-button">Email hello@devmmurmu.com</a>
        </div>
      </section>
    </SiteLayout>
  );
}
