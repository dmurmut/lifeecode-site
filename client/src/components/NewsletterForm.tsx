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
  /** "page" = labelled two-column layout (newsletter page); "band" = single row (home page). */
  variant: "page" | "band";
};

const inputClass =
  "min-h-12 w-full rounded-lg border border-white/25 bg-[#fbfbfa] px-4 text-sm text-[#302b31] placeholder:text-[#7e756c] focus:border-[#f0ce8a] focus:outline-none focus:ring-2 focus:ring-[#f0ce8a]/60";
const buttonClass =
  "min-h-12 rounded-lg bg-[#302b31] px-6 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#1f1b20] focus:outline-none focus:ring-2 focus:ring-[#f0ce8a]/70 disabled:opacity-60";

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
      <div role="status" aria-live="polite" className="rounded-lg border border-[#f0ce8a]/60 bg-[#302b31]/40 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#f0ce8a]">Almost there</p>
        <p className="reading-text mt-3">
          Please check your inbox and click the confirmation link to finish subscribing. If it hasn't
          arrived in a few minutes, look in your spam or promotions folder.
        </p>
      </div>
    );
  }

  const firstName =
    variant === "page" ? (
      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-[0.13em] text-[#f1deca]" htmlFor={`${id}-first-name`}>
          First name <span className="font-normal normal-case tracking-normal">(optional)</span>
        </label>
        <input id={`${id}-first-name`} name="fields[first_name]" type="text" autoComplete="given-name" placeholder="First name" className={inputClass} />
      </div>
    ) : (
      <>
        <label className="sr-only" htmlFor={`${id}-first-name`}>First name (optional)</label>
        <input id={`${id}-first-name`} name="fields[first_name]" type="text" autoComplete="given-name" placeholder="First name" className={inputClass} />
      </>
    );

  const email =
    variant === "page" ? (
      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-[0.13em] text-[#f1deca]" htmlFor={`${id}-email`}>
          Email address
        </label>
        <input id={`${id}-email`} name="email_address" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} />
      </div>
    ) : (
      <>
        <label className="sr-only" htmlFor={`${id}-email`}>Email address</label>
        <input id={`${id}-email`} name="email_address" type="email" required autoComplete="email" placeholder="Email address" className={inputClass} />
      </>
    );

  return (
    <>
      <form
        action={KIT_FORM_ACTION}
        method="post"
        target={frameName}
        onSubmit={onSubmit}
        aria-label="Newsletter signup"
        className={variant === "page" ? "grid gap-4" : "grid gap-3 sm:grid-cols-[0.7fr_1.3fr_auto]"}
      >
        {variant === "page" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {firstName}
            {email}
          </div>
        ) : (
          <>
            {firstName}
            {email}
          </>
        )}
        <button type="submit" disabled={state === "sending"} className={buttonClass}>
          {state === "sending" ? "Sending…" : variant === "page" ? "Join the Newsletter" : "Subscribe"}
        </button>
      </form>
      <iframe name={frameName} title="Newsletter signup response" onLoad={onFrameLoad} className="hidden" aria-hidden="true" tabIndex={-1} />
    </>
  );
}
