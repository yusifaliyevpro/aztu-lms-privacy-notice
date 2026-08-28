import { BUILD_DATE } from "@/lib/buildDate";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border py-8">
      <div className="mx-auto max-w-3xl space-y-1.5 px-6 text-center">
        <p className="text-xs text-faint">Last updated {BUILD_DATE}</p>
        <p className="text-xs text-faint">
          An independent community project, not affiliated with Azerbaijan Technical University.
        </p>
      </div>
    </footer>
  );
}
