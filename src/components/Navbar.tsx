import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-sm">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <Link href="/privacy" className="flex items-center gap-2.5">
          <div className="flex size-10 items-center justify-center rounded-lg">
            <Image src="/icon.png" alt="Logo" width={24} height={24} />
          </div>
          <span className="text-sm font-semibold tracking-tight text-brand">AzTU LMS</span>
        </Link>
        <span className="hidden text-xs font-medium tracking-widest text-slate-400 uppercase sm:block">
          Privacy Policy
        </span>
      </div>
    </header>
  );
}
