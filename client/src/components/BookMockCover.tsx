export default function BookMockCover({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`book-treatment relative mx-auto aspect-[4/5.8] w-full overflow-hidden border border-[#b6b1aa] ${
        compact ? "book-treatment-compact max-w-[300px] p-7" : "max-w-[360px] p-8 sm:p-10"
      }`}
      role="img"
      aria-label="Text-only manuscript treatment for What Should Remain Mine?; final book cover not yet available"
    >
      <div className="pointer-events-none absolute inset-y-0 left-3 w-px bg-[#5e4b49]/15" />
      <div className="relative flex h-full flex-col border-t border-[#302b31]/40 pt-5">
        <span className="folio-label text-[#7e334e]">Manuscript / 01</span>
        <div className="my-auto border-l border-[#7e334e] pl-5">
          <h2 className="book-treatment-title text-[#302b31]">What Should Remain Mine?</h2>
          <p className="book-treatment-subtitle mt-5 max-w-[15rem]">
            How to Delegate, Collaborate, and Think for Yourself in the Age of AI
          </p>
        </div>
        <div className="flex items-end justify-between gap-3 border-t border-[#302b31]/40 pt-4">
          <span className="font-serif text-xl font-normal text-[#302b31]">Deveendra Murmu</span>
          <span className="folio-label text-[0.6rem] text-[#665b53]">Forthcoming</span>
        </div>
      </div>
    </div>
  );
}
