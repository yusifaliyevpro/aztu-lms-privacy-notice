import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <Link href="/privacy" className="flex items-center gap-2.5">
          <Image src="/icon.png" alt="" width={22} height={22} className="rounded" />
          <span className="text-sm font-semibold tracking-tight text-text">AzTU LMS</span>
        </Link>
        <span className="text-xs font-medium tracking-wide text-faint">Privacy Policy</span>
      </div>
    </header>
  );
}
