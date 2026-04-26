import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Field Day privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-field-navy sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-field-muted">
          Last updated: April 20, 2026
        </p>

        <div className="mt-10 space-y-8 text-field-text leading-relaxed">
          <Section title="Overview">
            <p>
              Field Day (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
              operated by Knudsen Canales Group LLC. This Privacy Policy
              explains how we collect, use, and protect your information when
              you use the Field Day mobile application.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p className="font-semibold">Account Information</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                When you sign in with Apple, we receive your name and email
                address (or a relay email if you choose to hide it).
              </li>
              <li>
                We do not collect passwords — authentication is handled
                securely by Apple and Firebase Authentication.
              </li>
            </ul>

            <p className="mt-4 font-semibold">Usage Data</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Events you save, like, or interact with.</li>
              <li>
                General location data (your selected region, e.g., Fairfield
                County) to show relevant events. We do not track precise GPS
                location.
              </li>
              <li>
                Device information (device model, OS version) for crash
                reporting and compatibility.
              </li>
            </ul>

            <p className="mt-4 font-semibold">Subscription Data</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Subscription status is managed by RevenueCat and Apple. We do
                not store your payment details.
              </li>
            </ul>
          </Section>

          <Section title="How We Use Your Information">
            <ul className="list-disc space-y-1 pl-5">
              <li>Display personalized event recommendations.</li>
              <li>Enable social features (activity feed, friend connections).</li>
              <li>Process and manage your subscription.</li>
              <li>Improve app performance and fix bugs.</li>
              <li>Send important service updates (not marketing emails).</li>
            </ul>
          </Section>

          <Section title="Data Sharing">
            <p>We do not sell your personal information. We share data only with:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Firebase (Google)</strong> — authentication and
                database hosting.
              </li>
              <li>
                <strong>RevenueCat</strong> — subscription management.
              </li>
              <li>
                <strong>Apple</strong> — App Store and payment processing.
              </li>
            </ul>
            <p className="mt-2">
              These providers process data under their own privacy policies and
              in accordance with applicable law.
            </p>
          </Section>

          <Section title="Data Security">
            <p>
              We use industry-standard security measures including encrypted
              data transmission (TLS), Firebase security rules with
              deny-by-default policies, and server-side privacy enforcement
              for social features. No method of transmission over the Internet
              is 100% secure, but we take reasonable precautions to protect
              your data.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              Field Day is designed for parents and caregivers to discover
              family events. We do not knowingly collect information from
              children under 13. If you believe a child has provided us with
              personal information, please contact us and we will delete it
              promptly.
            </p>
          </Section>

          <Section title="Your Rights">
            <ul className="list-disc space-y-1 pl-5">
              <li>Request access to your personal data.</li>
              <li>Request deletion of your account and associated data.</li>
              <li>Opt out of non-essential data collection.</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, email us at{" "}
              <a
                href="mailto:support@fielddayapp.com"
                className="text-field-blue hover:underline"
              >
                support@fielddayapp.com
              </a>
              .
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes through the app or by email.
              Continued use of the app after changes constitutes acceptance of
              the updated policy.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <p className="mt-2">
              Knudsen Canales Group LLC
              <br />
              <a
                href="mailto:support@fielddayapp.com"
                className="text-field-blue hover:underline"
              >
                support@fielddayapp.com
              </a>
            </p>
          </Section>
        </div>
      </article>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-field-navy">{title}</h2>
      <div className="mt-3 text-sm sm:text-base">{children}</div>
    </section>
  );
}
