"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-12 px-6 md:px-0 ${className}`}>{children}</section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="text-sm font-medium">{q}</span>
        <span className="text-muted-foreground ml-4">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="text-sm text-muted-foreground pb-4 leading-relaxed">
          {a}
        </p>
      )}
    </div>
  );
}

export default function DealRoom() {
  const params = useParams();
  const [ctaSelected, setCtaSelected] = useState<string | null>(null);
  const [checkRange, setCheckRange] = useState<string | null>(null);

  function handleCTA(response: string) {
    setCtaSelected(response);
    // In production: POST to /api/invitees/[id]/cta
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Confidentiality bar */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-2xl mx-auto px-6 py-2 text-center">
          <p className="text-xs text-muted-foreground">
            Confidential — Shared privately with you. Please do not forward.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* 1. Trust Header — Why this was shared */}
        <Section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold">
              V
            </div>
            <div>
              <p className="font-semibold">Vento</p>
              <p className="text-xs text-muted-foreground">
                Private Investor Invitation
              </p>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            Private invitation from Vento investors
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            You&apos;re seeing this because someone who already invested in
            Vento thought this would be relevant to you.
          </p>
        </Section>

        <hr className="border-border" />

        {/* 2. Social Proof */}
        <Section>
          <h2 className="text-lg font-semibold mb-4">
            Why current investors are sharing this
          </h2>
          <div className="bg-card border border-border rounded-xl p-5">
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              &quot;Vento is attacking a real problem that I&apos;ve seen
              firsthand in enterprise revenue operations. The timing with the
              CPQ migration wave makes this especially compelling.&quot;
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              — Current Vento Investor
            </p>
          </div>
        </Section>

        <hr className="border-border" />

        {/* 3. Founder Credibility */}
        <Section>
          <h2 className="text-lg font-semibold mb-4">
            Built by people who lived the pain
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Ofir saw firsthand how hidden pricing and revenue rules create
            silent leakage, slow investigations, and make every change risky.
            While scaling a B2B SaaS business unit, a single discount rule in
            the CRM silently eroded revenue on renewals — and nobody caught it
            for months. That lived pain is the reason Vento exists.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mt-3">
            Daniel brings deep experience building large-scale AI and data
            systems in complex enterprises, including logic-heavy intelligence
            systems and production infrastructure.
          </p>
        </Section>

        <hr className="border-border" />

        {/* 4. Why Now */}
        <Section>
          <h2 className="text-lg font-semibold mb-4">
            A forcing event is creating a rare window
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Salesforce CPQ is end-of-sale. Thousands of companies are being
            forced to rebuild critical revenue workflows. This is not just a
            system migration. It is the moment companies finally have to
            extract, understand, and rebuild the logic that actually runs
            revenue.
          </p>
          <div className="mt-4 bg-primary/5 border border-primary/10 rounded-lg p-4">
            <p className="text-sm font-medium text-primary">
              4,000+ enterprises forced to touch their revenue engine
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              A once-in-a-decade architectural reset where urgency and budget
              already exist.
            </p>
          </div>
        </Section>

        <hr className="border-border" />

        {/* 5. What Vento Does */}
        <Section>
          <h2 className="text-lg font-semibold mb-4">
            Capture. Govern. Automate.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Revenue logic is the hidden engine behind every dollar a business
            earns — scattered across CRM objects, flows, code, contracts, PDFs,
            spreadsheets, and communication channels. The core pain is silent
            revenue leakage, operational drag, and change risk.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Capture",
                desc: "Extract hidden logic from revenue systems into a visible, portable asset",
              },
              {
                title: "Govern",
                desc: "Make revenue logic safe, auditable, and change-ready",
              },
              {
                title: "Automate",
                desc: "Power high-friction workflows like pricing, approvals, renewals, and billing",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-lg p-4"
              >
                <p className="font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <hr className="border-border" />

        {/* 6. Why Vento Wins */}
        <Section>
          <h2 className="text-lg font-semibold mb-4">
            Real wedge, real channel, real signal
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Vento enters through consulting partners already trusted to lead
            CPQ migration transitions. The company becomes the logic and
            automation layer that stays installed, creating a compounding
            partner advantage.
          </p>
          <div className="mt-4 bg-card border border-border rounded-lg p-4">
            <p className="text-sm font-medium mb-1">AllCloud Signal</p>
            <p className="text-xs text-muted-foreground">
              Vento has a live collaboration agreement with AllCloud around an
              assessment agent and assessment report that can be packaged into
              partner-led opportunities.
            </p>
          </div>
        </Section>

        <hr className="border-border" />

        {/* 7. What this round unlocks */}
        <Section>
          <h2 className="text-lg font-semibold mb-4">
            What this round unlocks
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            This round is about getting Vento from current validation into
            repeatable partner-led deployments and stronger proof for the next
            financing step.
          </p>
        </Section>

        <hr className="border-border" />

        {/* 8. FAQ */}
        <Section>
          <h2 className="text-lg font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="bg-card border border-border rounded-xl px-5">
            <FAQItem
              q="What exactly is Vento?"
              a="Vento is the Revenue Logic Brain: the layer that captures the hidden rules behind how a company makes money and uses that governed logic to automate workflows safely."
            />
            <FAQItem
              q="Why now?"
              a="Because Salesforce CPQ's end-of-sale is forcing companies to rebuild critical revenue workflows, creating a rare timing window where the underlying logic has to be extracted and understood."
            />
            <FAQItem
              q="Why does this matter in the AI era?"
              a="AI can only run high-stakes revenue workflows safely if the full logic is captured first. Otherwise it guesses against incomplete context."
            />
            <FAQItem
              q="Why can Vento win through partners?"
              a="Because consulting partners already own trusted enterprise relationships during migration projects. Vento makes those projects faster, more profitable, and more recurring."
            />
            <FAQItem
              q="What is the AllCloud signal?"
              a="Vento has a live collaboration agreement with AllCloud around an assessment agent and assessment report, with formal acceptance criteria and commercial mechanics."
            />
          </div>
        </Section>

        <hr className="border-border" />

        {/* 9. CTA */}
        <Section className="pb-20">
          <h2 className="text-xl font-bold mb-2 text-center">
            What would you like to do next?
          </h2>
          <p className="text-muted-foreground text-sm text-center mb-6">
            Choose the option that feels right. No pressure.
          </p>

          {!ctaSelected ? (
            <div className="flex flex-col gap-3 max-w-sm mx-auto">
              <button
                onClick={() => handleCTA("INTERESTED")}
                className="w-full rounded-xl bg-primary px-4 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                I&apos;m interested, let&apos;s talk
              </button>
              <button
                onClick={() => handleCTA("MORE_DETAILS")}
                className="w-full rounded-xl border border-border bg-card px-4 py-4 text-sm font-medium hover:bg-muted transition-colors"
              >
                Send me more details
              </button>
              <button
                onClick={() => handleCTA("NOT_NOW")}
                className="w-full rounded-xl px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Not right now
              </button>
            </div>
          ) : (
            <div className="max-w-sm mx-auto text-center">
              {ctaSelected === "INTERESTED" && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <p className="text-green-800 font-semibold mb-2">
                    Great! Let&apos;s connect.
                  </p>
                  <p className="text-green-700 text-sm mb-4">
                    Book a time with Ofir directly:
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition-colors"
                  >
                    Book a Call
                  </a>

                  {/* Optional check size */}
                  <div className="mt-6 pt-4 border-t border-green-200">
                    <p className="text-xs text-green-700 mb-3">
                      If you have a sense of range (optional):
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {["$25K", "$50K", "$75K", "Other"].map((size) => (
                        <button
                          key={size}
                          onClick={() => setCheckRange(size)}
                          className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                            checkRange === size
                              ? "bg-green-600 text-white border-green-600"
                              : "border-green-300 text-green-700 hover:bg-green-100"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {ctaSelected === "MORE_DETAILS" && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <p className="text-blue-800 font-semibold mb-2">
                    We&apos;ll send you more details shortly.
                  </p>
                  <p className="text-blue-700 text-sm">
                    Check your email for additional materials from the Vento
                    team.
                  </p>
                </div>
              )}
              {ctaSelected === "NOT_NOW" && (
                <div className="bg-card border border-border rounded-xl p-6">
                  <p className="font-semibold mb-2">
                    Totally understand. Thanks for taking a look.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    We&apos;ll keep you on our update list — there are a few
                    milestones coming that may make this more relevant.
                  </p>
                </div>
              )}
            </div>
          )}
        </Section>
      </div>
    </div>
  );
}
