import { useId, useRef, useState, type FormEvent } from "react";

/**
 * Author newsletter signup, delivered to Kit (form 10221695).
 *
 * The form posts directly to Kit's subscription endpoint inside a hidden iframe, so no
 * Kit script runs on the site and nothing depends on cross-origin responses. Kit then
 * sends the confirmation (double opt-in) email; only confirmed addresses join the list.
 */
export const KIT_FORM_ACTION = "https://app.kit.com/forms/10221695/subscriptions";

type Props = {
  /** "page" = labelled two-column layout (newsletter page); "band" = compact (home page). */
  variant: "page" | "band";
};

const inputClass =
  "min-h-[50px] w-full border border-[#A8A193] bg-white px-4 text-[1.05rem] text-[#252923] placeholder:text-[#77796f] focus:border-[#7E334E] focus:outline-none focus:ring-2 focus:ring-[#7E334E]/30";
const buttonClass =
  "min-h-[50px] bg-[#252923] px-6 text-[1rem] font-semibold text-[#F5F2EC] transition-colors hover:bg-[#3a3f37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7E334E] focus-visible:ring-offset-2 disabled:opacity-60";
const labelClass = "mb-2 block text-[0.95rem] font-semibold text-[#252923]";

export default function NewsletterForm({ variant }: Props) {
  const id = useId();
  const frameName = `kit-frame-${id.replace(/[^a-zA-Z0-9]/g, "")}`;
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const submitted = useRef(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const email = new FormData(event.currentTarget).get("email_address");
    if (!email) {
      event.preventDefault();
      return;
    }
    submitted.current = true;
    setState("sending");
  }

  function onFrameLoad() {
    if (submitted.current) setState("done");
  }

  if (state === "done") {
    return (
      <div role="status" aria-live="polite" className="border border-[#D8D2C6] bg-white p-5">
        <p className="font-serif text-[1.25rem] font-medium text-[#252923]">Almost there</p>
        <p className="mt-2 text-[1.05rem] leading-[1.6] text-[#3D4139]">
          Please check your inbox and click the confirmation link to finish subscribing. If it hasn't
          arrived in a few minutes, look in your spam or promotions folder.
        </p>
      </div>
    );
  }

  return (
    <>
      <form
        action={KIT_FORM_ACTION}
        method="post"
        target={frameName}
        onSubmit={onSubmit}
        aria-label="Newsletter signup"
        className="grid gap-4"
      >
        <div className={variant === "page" ? "grid gap-4 sm:grid-cols-2" : "grid gap-3 sm:grid-cols-[0.8fr_1.2fr]"}>
          <div>
            <label className={labelClass} htmlFor={`${id}-first-name`}>
              First name <span className="font-normal text-[#5B5F57]">(optional)</span>
            </label>
            <input id={`${id}-first-name`} name="fields[first_name]" type="text" autoComplete="given-name" className={inputClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor={`${id}-email`}>
              Email address
            </label>
            <input id={`${id}-email`} name="email_address" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} />
          </div>
        </div>
        <div>
          <button type="submit" disabled={state === "sending"} className={buttonClass}>
            {state === "sending" ? "Sending…" : variant === "page" ? "Join the newsletter" : "Subscribe"}
          </button>
        </div>
      </form>
      <iframe name={frameName} title="Newsletter signup response" onLoad={onFrameLoad} className="hidden" aria-hidden="true" tabIndex={-1} />
    </>
  );
}
