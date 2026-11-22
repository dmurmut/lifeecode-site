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
        className="block h-auto w-full object-cover"
        decoding="async"
      />
    </picture>
  );
}
