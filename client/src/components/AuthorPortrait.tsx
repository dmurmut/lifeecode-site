/** Author photo of Deveendra Murmu. */
export default function AuthorPortrait({ className = "" }: { className?: string }) {
  return (
    <picture className={`block ${className}`}>
      <source srcSet="/media/deveendra-murmu.webp" type="image/webp" />
      <img
        src="/media/deveendra-murmu.jpg"
        width={800}
        height={1000}
        alt="Deveendra Murmu"
        className="block h-auto w-full rounded-[2px] border border-[#302b31]/10 object-cover"
        decoding="async"
      />
    </picture>
  );
}
