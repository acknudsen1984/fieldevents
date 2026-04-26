import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Field Day — frequently asked questions, troubleshooting, and contact information.",
};

const faqs = [
  {
    question: "What is Field Day?",
    answer:
      "Field Day is a mobile app for parents in Fairfield County, CT that helps you discover local events for kids — storytime at the library, outdoor festivals, arts & crafts workshops, and more. We curate events weekly so you always have fresh ideas for family outings.",
  },
  {
    question: "Is Field Day free?",
    answer:
      "Field Day offers a free tier with access to basic event listings. For full access — including the map view, smart filters, chaos scores, and social features — we offer a subscription at $6.99/month or $59.99/year.",
  },
  {
    question: "How do I create an account?",
    answer:
      'Download Field Day from the App Store, open the app, and tap "Sign in with Apple." That\'s it — no passwords to remember. Your Apple ID handles authentication securely.',
  },
  {
    question: "What is the Chaos Score?",
    answer:
      "The Chaos Score (1-10) gives you a heads-up on how hectic an event might be. A quiet storytime might be a 2, while a packed Touch-a-Truck festival could be an 8. It factors in crowd size, noise level, and general energy so you can pick events that match your family's vibe.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      'Subscriptions are managed through your Apple ID. Go to Settings → [Your Name] → Subscriptions on your iPhone, find Field Day, and tap "Cancel Subscription." You\'ll continue to have access until the end of your current billing period.',
  },
  {
    question: "What areas does Field Day cover?",
    answer:
      "Right now, Field Day focuses exclusively on Fairfield County, CT — including towns like Westport, Norwalk, Stamford, Darien, New Canaan, Greenwich, Ridgefield, and more. We're exploring expansion to other areas based on demand.",
  },
  {
    question: "How do I report a problem with an event listing?",
    answer:
      'If you notice incorrect information for an event — wrong time, location, or details — please tap the "Report" button on the event detail page or email us at support@knudsencanalesgroup.dev. We review reports within 24 hours.',
  },
  {
    question: "Can I suggest an event?",
    answer:
      "Yes! We love hearing about events we might have missed. Email us at support@knudsencanalesgroup.dev with the event name, date, location, and a link if available. We'll review and add it if it fits our coverage area.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "To delete your account and all associated data, email support@knudsencanalesgroup.dev from the email address linked to your account. We will process your request within 5 business days.",
  },
];

export default function SupportPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-field-navy sm:text-4xl">
            Support
          </h1>
          <p className="mt-3 text-lg text-field-muted">
            Find answers to common questions or reach out to our team.
          </p>
        </div>

        {/* Contact card */}
        <div className="mt-10 rounded-2xl border border-field-blue/20 bg-field-blue-light p-6 text-center">
          <h2 className="text-lg font-semibold text-field-navy">
            Need help?
          </h2>
          <p className="mt-1 text-sm text-field-muted">
            Email us anytime and we&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="mailto:support@knudsencanalesgroup.dev"
            className="mt-4 inline-block rounded-full bg-field-blue px-6 py-2.5 text-sm font-semibold text-white hover:bg-field-blue-dark transition-colors"
          >
            support@knudsencanalesgroup.dev
          </a>
        </div>

        {/* FAQ */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-field-navy">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 divide-y divide-gray-100">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-base font-semibold text-field-navy">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-field-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl bg-field-yellow-light p-8 text-center">
          <h2 className="text-xl font-bold text-field-navy">
            Still have questions?
          </h2>
          <p className="mt-2 text-sm text-field-muted">
            We&apos;re real people who actually read every email.
          </p>
          <a
            href="mailto:support@knudsencanalesgroup.dev"
            className="mt-4 inline-block rounded-full bg-field-blue px-6 py-2.5 text-sm font-semibold text-white hover:bg-field-blue-dark transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
