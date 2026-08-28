import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionCard from "@/components/SectionCard";

export const metadata = { title: "Privacy Policy | AzTU LMS App" };

const lmsLink = (
  <a
    href="https://lms.aztu.edu.az"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover"
  >
    lms.aztu.edu.az
  </a>
);

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero */}
      <header>
        <div className="mx-auto max-w-3xl px-6 pt-14 pb-8">
          <p className="text-xs font-medium tracking-wide text-faint">Independent community project</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-[15px] text-muted">
            How the AzTU LMS App handles your information. Effective March 3, 2025.
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 space-y-4 px-6 pb-12">
        {/* Disclaimer callout */}
        <div className="rounded-2xl border border-warn-border bg-warn-tint px-5 py-4">
          <p className="text-sm leading-relaxed text-warn-text">
            This app is built and maintained independently. It is not an official product of Azerbaijan Technical
            University, and the university is not involved in or responsible for it. It is provided as is.
          </p>
        </div>

        <SectionCard number={1} title="What this app is">
          <p>
            The AzTU LMS App is a community-built app that wraps the official AzTU learning platform, {lmsLink}, so it
            feels native on your phone. It has no backend of its own. Everything you see, like courses, grades,
            assignments, and announcements, is loaded straight from the university&apos;s own systems. Nothing is stored
            or copied anywhere else.
          </p>
        </SectionCard>

        <SectionCard number={2} title="Your login details">
          <p>
            To sign in, the app needs your student ID and password. Both stay only on your device, in secure storage
            that the operating system encrypts and keeps private to the app. They are used to get a session token from
            the LMS, which is renewed about once an hour.
          </p>
          <p>
            Your login details are sent only to {lmsLink}. They never go to the developer, to any other company, or to
            any cloud service, and the developer cannot see them.
          </p>
        </SectionCard>

        <SectionCard number={3} title="No servers, no tracking">
          <p>
            There is no server behind this app and no database. It has no analytics, no crash reporting, and no ads, and
            it collects nothing about how you use it. None of your activity leaves your phone.
          </p>
        </SectionCard>

        <SectionCard number={4} title="The LMS belongs to AzTU">
          <p>
            Because the app talks straight to the university&apos;s systems, any data used during your session stays on
            AzTU&apos;s servers and follows the university&apos;s own rules and security.
          </p>
          <p>
            This project does not control those systems. For anything about how the university keeps or handles your
            data, including outages or security problems on their side, contact AzTU directly.
          </p>
        </SectionCard>

        <SectionCard number={5} title="Children">
          <p>
            The app is made for university students and is not aimed at children under 13. Because it collects no data of
            its own, it does not gather information from anyone.
          </p>
        </SectionCard>

        <SectionCard number={6} title="Provided as is">
          <p>
            The app comes with no warranty of any kind. It fully depends on the AzTU LMS, so there is no promise that it
            will always work or always be correct. The developer is also not responsible for problems that start on the
            university&apos;s servers, its network, or your device&apos;s storage.
          </p>
        </SectionCard>

        <SectionCard number={7} title="Changes to this policy">
          <p>
            This policy may change as the app grows. When it does, the effective date at the top of the page will change
            too. If you keep using the app, that means you accept the current version.
          </p>
        </SectionCard>

        <SectionCard number={8} title="Contact">
          <p>
            Questions about the app or this policy are welcome. Please note this is not an official support channel. For
            LMS login problems, course issues, or grade disputes, contact your university.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="https://github.com/yusifaliyevpro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-muted px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-border-strong"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
          </div>
        </SectionCard>
      </main>

      <Footer />
    </div>
  );
}
