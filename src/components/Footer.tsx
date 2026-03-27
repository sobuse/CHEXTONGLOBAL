export default function Footer() {
  return (
    <footer className="bg-[#041f23] px-4 py-12 text-white md:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl min-w-0 flex-col gap-6 break-words md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <h3 className="font-serif text-2xl">CHEXTON GLOBAL</h3>
          <p className="mt-2 text-white/80">Phone: 09050083475</p>
          <p className="text-white/80">Email: ehuerikenbaba@gmail.com</p>
        </div>
        <div className="flex items-center gap-5 text-sm text-white/90">
          <a href="https://wa.me/2349050083475" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/chitherealtor/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl border-t border-white/20 pt-6 text-sm text-white/65">
        © {new Date().getFullYear()} CHEXTON GLOBAL. All rights reserved.
      </p>
    </footer>
  );
}
