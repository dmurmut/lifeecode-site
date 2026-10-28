// Preserved published LifeeCode content. Edit deliberately; do not rewrite during design changes.
export default function PublishedContent() {
  return (
    <div className="lc-preserved-content">
      <section className="lc-frame py-20 md:py-28">
        <p className="lc-eyebrow">About LifeeCode</p>
        <h1 className="lc-section-heading mt-6 max-w-4xl lc-preserved-title">
          A calmer way to understand the technology shaping your health.
        </h1>
        <div className="mt-14 grid gap-12 border-t border-stone-900/15 pt-10 lg:grid-cols-[.78fr_1.22fr]">
          <aside>
            <img
              alt="Abstract leaf and data illustration representing privacy-first health technology"
              className="w-full max-w-[340px]"
              src="/media/lifeecode-privacy-illustration_2ca91e03.png"
            />
          </aside>
          <div className="max-w-2xl">
            <p className="text-[1.08rem] leading-8 text-stone-700">
              LifeeCode is a weekly health-technology briefing by{" "}
              <strong>Deveendra Murmu</strong>. It examines the shifts that can
              affect everyday health decisions—from wearables and medical AI to
              regulatory change and personal-data privacy.
            </p>
            <p className="mt-6 text-[1rem] leading-7 text-stone-600">
              The editorial premise is simple: speed matters, but so does
              judgment. Each story is selected for lasting impact, translated
              into clear language, and examined for the trade-offs most product
              announcements leave out.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="border-l-2 border-[#2d6a5a] pl-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield-check text-[#2d6a5a]"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <h2 className="mt-3 font-bold">Privacy-first</h2>
                <p className="mt-2 text-[.85rem] leading-6 text-stone-600">
                  Health information demands more care than a default setting.
                </p>
              </div>
              <div className="border-l-2 border-[#e7a328] pl-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles text-[#c7674c]"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
                <h2 className="mt-3 font-bold">Evidence-based</h2>
                <p className="mt-2 text-[.85rem] leading-6 text-stone-600">
                  Optimism is more useful when it is anchored in what the
                  evidence supports.
                </p>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/deveendramurmu/"
              target="_blank"
              rel="noreferrer"
              className="lc-text-link mt-10"
            >
              Connect with Deveendra on LinkedIn{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
