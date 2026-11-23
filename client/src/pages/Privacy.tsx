import SiteLayout from "@/components/SiteLayout";
import { usePageMeta } from "@/hooks/usePageMeta";

const sections = [
  {
    title: "Who is responsible",
    body: "This website and the author newsletter are run by Deveendra Murmu through Mainod Academy LLC, New Jersey, USA. Questions about your information can be sent to hello@devmmurmu.com.",
  },
  {
    title: "What the newsletter collects",
    body: "When you subscribe, I collect your email address and, if you choose to give it, your first name. Kit, the email service that runs the newsletter, also records the date and time you signed up and confirmed, and the technical details of that request such as your IP address, as a record of your consent. Kit may also record whether emails are opened or links are clicked, which helps me understand what readers find useful.",
  },
  {
    title: "Why, and on what basis",
    body: "Your details are used only to send the author newsletter: occasional essays, reflections and news about my books. I send it because you asked for it and confirmed your subscription, and you can withdraw that consent at any time.",
  },
  {
    title: "Kit, the email provider",
    body: "The newsletter is managed through Kit (ConvertKit LLC), which stores subscriber details on its servers in the United States and processes them on my behalf. Kit's own privacy policy is available at kit.com/privacy.",
  },
  {
    title: "Sharing",
    body: "I don't sell, rent or trade your information, and I don't share it with advertisers. It is kept separate from LifeeCode and any other project unless you have expressly subscribed to those as well.",
  },
  {
    title: "Unsubscribing and your choices",
    body: "Every newsletter includes a one-click unsubscribe link. You can also email hello@devmmurmu.com to ask what information I hold about you, to correct it, or to have it deleted.",
  },
  {
    title: "How long it is kept",
    body: "Your details are kept while you remain subscribed. If you unsubscribe, I stop emailing you; Kit may keep a minimal record of the unsubscribe so you are not emailed again by mistake. You can ask for that record to be deleted as well.",
  },
  {
    title: "Contact by email",
    body: "If you email hello@devmmurmu.com, your address and message are handled through my Hostinger-hosted mailbox so I can read and reply. Emailing me does not subscribe you to the newsletter.",
  },
  {
    title: "This website",
    body: "The site is hosted by Vercel, which may keep basic server logs, including IP addresses, for security and reliability. The site itself does not use analytics, advertising or tracking cookies. Links to LinkedIn, X, YouTube, Spotify, research publications and other services take you to sites with their own privacy practices.",
  },
  {
    title: "LifeeCode",
    body: "LifeeCode's health-technology articles are educational content, not personal medical advice. LifeeCode does not currently collect personal information through this site.",
  },
  {
    title: "Changes",
    body: "If these practices change, this page will be updated and the date below revised. Last updated: November 2026.",
  },
];

export default function Privacy() {
  usePageMeta(
    "Privacy — Deveendra Murmu",
    "How Deveendra Murmu’s website and author newsletter collect, use and protect your information.",
  );

  return (
    <SiteLayout>
      <section className="editorial-grid border-b border-[#252923]/10 py-22 lg:py-30">
        <div className="container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="section-kicker">Privacy notice</p>
            <h1 className="page-title mt-6">Privacy</h1>
          </div>
          <div className="max-w-2xl">
            <p className="editorial-quote text-[#7E334E]">Clear terms should come before data collection, not after it.</p>
            <p className="reading-text mt-6">This page explains, in plain language, what information this website and the author newsletter collect, why, and the choices you have.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2EC] py-24 lg:py-30">
        <div className="container ruled-list">
          {sections.map((section, index) => (
            <article key={section.title} className={`grid gap-3 py-10 lg:grid-cols-[5rem_0.75fr_1.25fr] lg:gap-10`}>
              <span className="folio-label text-[#7E334E]">{String(index + 1).padStart(2, "0")} /</span>
              <h2 className="subsection-heading ">{section.title}</h2>
              <p className="reading-text">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#252923]/10 bg-[#EDE8DF] py-18">
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
