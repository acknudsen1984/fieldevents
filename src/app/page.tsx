import Image from "next/image";

const features = [
  {
    icon: "📍",
    title: "Hyperlocal Discovery",
    description:
      "Events curated specifically for Fairfield County families. No noise, just what matters near you.",
  },
  {
    icon: "👶",
    title: "Chaos Score",
    description:
      "Know what you're getting into. Each event includes a chaos rating so you can plan accordingly.",
  },
  {
    icon: "🗺️",
    title: "Map View",
    description:
      "See events on a map to find what's closest. Filter by age, category, and distance.",
  },
  {
    icon: "❤️",
    title: "Save & Share",
    description:
      "Bookmark your favorites and see what other local parents are excited about.",
  },
  {
    icon: "🏷️",
    title: "Smart Tags",
    description:
      "Stroller friendly, easy parking, drop-off OK — the details that actually matter to parents.",
  },
  {
    icon: "📅",
    title: "Weekly Updates",
    description:
      "Fresh events added every week from libraries, parks, studios, and community centers.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-field-blue to-field-blue-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,197,24,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <p className="inline-block rounded-full bg-field-yellow/20 px-4 py-1 text-sm font-semibold text-field-yellow">
                Fairfield County, CT
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Every weekend should be a{" "}
                <span className="text-field-yellow">Field Day</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-blue-100 sm:text-xl mx-auto lg:mx-0">
                Discover local events for kids — storytime, festivals, arts &
                crafts, outdoor adventures — all in one app built for Fairfield
                County parents.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="https://apps.apple.com/app/field-day"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-black px-6 py-3 text-white hover:bg-gray-900 transition-colors"
                >
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-base font-semibold leading-tight">
                      App Store
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* App icon / visual */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-field-yellow/20 blur-2xl" />
                <Image
                  src="/app-icon.png"
                  alt="Field Day app icon"
                  width={240}
                  height={240}
                  className="relative rounded-[2.5rem] shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-field-navy sm:text-4xl">
              Built for busy parents
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-field-muted">
              Everything you need to plan your family&apos;s weekend — without
              the endless scrolling through Facebook groups.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-field-gray p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-field-navy">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-field-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-field-yellow-light py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-field-navy sm:text-4xl">
            Your family&apos;s next adventure starts here
          </h2>
          <p className="mt-4 text-lg text-field-muted">
            Join thousands of Fairfield County parents discovering events every
            week.
          </p>
          <a
            href="https://apps.apple.com/app/field-day"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-field-blue px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-field-blue-dark transition-colors"
          >
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download Field Day
          </a>
        </div>
      </section>
    </>
  );
}
