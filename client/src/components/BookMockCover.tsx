/** Front cover of "What Should Remain Mine?" (from the approved KDP cover file). */
export default function BookMockCover({ compact = false }: { compact?: boolean }) {
  return (
    <picture
      className={`relative mx-auto block w-full ${compact ? "max-w-[300px]" : "max-w-[360px]"}`}
    >
      <source srcSet="/media/wsrm-cover.webp" type="image/webp" />
      <img
        src="/media/wsrm-cover.jpg"
        width={1200}
        height={1800}
        alt="Cover of What Should Remain Mine? How to Delegate, Collaborate, and Think for Yourself in the Age of AI, by Deveendra Murmu"
        className="block h-auto w-full rounded-[2px] shadow-[9px_11px_0_-2px_rgba(0,0,0,0.18),0_18px_40px_-12px_rgba(0,0,0,0.45)]"
        decoding="async"
      />
    </picture>
  );
}
