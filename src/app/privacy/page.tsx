import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionCard from "@/components/SectionCard";

export const metadata = { title: "Privacy Policy — AzTU LMS App" };

export default function PrivacyPage() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />

        {/* Hero */}
        <section className="bg-brand px-6 py-14 text-white">
          <div className="mx-auto max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-widest text-blue-200 uppercase">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Community Project · Independent
            </span>
            <h1 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
            <p className="mt-2 text-sm text-blue-200">AzTU LMS App · Effective date: March 3, 2025</p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="border-b border-blue-100 bg-brand-light">
          <div className="mx-auto flex max-w-3xl items-start gap-3 px-6 py-4">
            <span className="mt-0.5 text-lg text-brand">⚠️</span>
            <p className="text-sm leading-relaxed text-brand-dark">
              <span className="font-semibold">Independent Community Project.</span> This app is not an official product
              of Azerbaijan Technical University (AzTU) or its IT team. AzTU is not affiliated with or responsible for
              this project. Provided <span className="italic">&quot;as is&quot;</span> — use at your own risk.
            </p>
          </div>
        </div>

        <main className="mx-auto w-full max-w-3xl flex-1 space-y-4 px-6 py-10">
          <SectionCard icon="🔍" title="1. Overview">
            <p>
              This Privacy Policy explains how the AzTU LMS App handles information when you use it. The App is a
              community-built mobile wrapper that provides a native experience for the official AzTU LMS at{" "}
              <a
                href="https://lms.aztu.edu.az"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline underline-offset-2 hover:text-brand-dark"
              >
                lms.aztu.edu.az
              </a>
              .
            </p>
            <p className="mt-3">
              The App has <strong>no database of its own</strong>. All academic data, courses, and content are fetched
              directly from AzTU&apos;s own API endpoints. We do not store, mirror, or retain any of that data.
            </p>
          </SectionCard>

          <SectionCard icon="🔐" title="2. Credentials & Local Storage">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Stored locally on your device only — never uploaded
            </div>
            <p>
              To authenticate with the AzTU LMS platform, the App asks for your <strong>student ID and password</strong>
              . These credentials are stored exclusively on your device using an encrypted, OS-level sandboxed storage.
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-brand">→</span>
                <span>
                  Credentials are used <strong>only</strong> to obtain a JWT token from AzTU&apos;s servers, refreshed
                  approximately every 1 hour.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-brand">→</span>
                <span>
                  Your student ID and password are <strong>never sent</strong> to any server other than{" "}
                  <code className="rounded bg-slate-100 px-1 font-mono text-xs text-slate-700">lms.aztu.edu.az</code>.
                  They are never uploaded to the developer, any third party, or any cloud.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-brand">→</span>
                <span>
                  The developer has <strong>zero access</strong> to your credentials at any point.
                </span>
              </li>
            </ul>
          </SectionCard>

          <SectionCard icon="🗄️" title="3. No Developer Database">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              No backend · No database · No analytics
            </div>
            <p>
              The App has no backend server and no database. It does not collect, log, or store any user data on
              external servers. There is no analytics SDK, crash reporting service, or advertising framework integrated
              into the App.
            </p>
            <p className="mt-3">
              All data you interact with — grades, courses, assignments, announcements — belongs to and is served
              entirely by AzTU&apos;s own infrastructure.
            </p>
          </SectionCard>

          <SectionCard icon="🌐" title="4. AzTU LMS Platform (Third-Party)">
            <p>
              Because the App connects directly to AzTU&apos;s API endpoints, any data processed during your session is
              handled by <strong>Azerbaijan Technical University&apos;s own servers</strong> under their own policies
              and security measures.
            </p>
            <p className="mt-3">
              The developer of this App is <strong>not responsible for</strong> any data handling, security incidents,
              service outages, data breaches, or privacy practices on the part of the AzTU LMS servers or the
              university&apos;s IT infrastructure. For questions about how the university handles your data, contact
              AzTU directly.
            </p>
          </SectionCard>

          <SectionCard icon="👶" title="5. Children's Privacy">
            <p>
              The App is intended for university students and is not directed at children under the age of 13. Since no
              data is collected by the App itself, there is no risk of inadvertent data collection from any age group.
            </p>
          </SectionCard>

          <SectionCard icon="⚖️" title="6. Disclaimer & Limitation of Liability">
            <p>
              This App is provided <strong>&quot;as is&quot;</strong> without warranties of any kind. The developer
              makes no guarantees regarding the availability, accuracy, or security of the AzTU LMS platform accessed
              through the App.
            </p>
            <p className="mt-3">
              The developer is <strong>not responsible</strong> for any loss of data, unauthorized access, or damage
              arising from issues on AzTU&apos;s servers, the university&apos;s network, or your device&apos;s secure
              storage. AzTU and its IT department are not affiliated with this project and bear no responsibility for
              it.
            </p>
          </SectionCard>

          <SectionCard icon="📝" title="7. Changes to This Policy">
            <p>
              This Privacy Policy may be updated if the App&apos;s functionality changes. Any updates will be reflected
              with a revised effective date at the top of this page. Continued use of the App after changes constitutes
              acceptance of the updated policy.
            </p>
          </SectionCard>

          <SectionCard icon="✉️" title="8. Contact">
            <p>
              This is an independent community project. The developer is <strong>not responsible</strong> for anything
              that occurs on AzTU&apos;s LMS servers or university infrastructure. For official university matters,
              contact AzTU directly.
            </p>
            <p className="mt-3">For questions specifically about this App and its privacy practices:</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://github.com/yusifaliyevpro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-brand/30 bg-brand-light px-4 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:yusifaliyevpro@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-brand/30 bg-brand-light px-4 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Note: This is not an official AzTU support channel. For LMS login issues, course problems, or grade
              disputes, please contact your university directly.
            </p>
          </SectionCard>
        </main>

        <Footer />
      </div>
    </>
  );
}
