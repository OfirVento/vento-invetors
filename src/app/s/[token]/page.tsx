"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

interface InviteeEntry {
  name: string;
  email: string;
  phone: string;
  geography: string;
  estimatedCheckSize: string;
  sponsorRank: number;
  relationshipLabel: "CLOSE" | "SOLID" | "LIGHT";
  sponsorWillNudgeAgain: boolean;
  introMode: "SELF_SEND" | "THREE_WAY_INTRO" | "DRAFT_FOR_APPROVAL";
  sponsorNote: string;
}

const emptyEntry: InviteeEntry = {
  name: "",
  email: "",
  phone: "",
  geography: "",
  estimatedCheckSize: "",
  sponsorRank: 1,
  relationshipLabel: "SOLID",
  sponsorWillNudgeAgain: false,
  introMode: "DRAFT_FOR_APPROVAL",
  sponsorNote: "",
};

export default function SponsorWorkspace() {
  const params = useParams();
  const token = params.token as string;
  const [invitees, setInvitees] = useState<InviteeEntry[]>([]);
  const [current, setCurrent] = useState<InviteeEntry>({ ...emptyEntry });
  const [showForm, setShowForm] = useState(false);

  function addInvitee() {
    if (!current.name || !current.email) return;
    setInvitees([
      ...invitees,
      { ...current, sponsorRank: invitees.length + 1 },
    ]);
    setCurrent({ ...emptyEntry });
    setShowForm(false);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-3xl mx-auto px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              V
            </div>
            <div>
              <h1 className="font-semibold">Vento Investor Sprint</h1>
              <p className="text-xs text-muted-foreground">
                Private Sponsor Portal
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        {/* Welcome */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-2">
            Thank you for helping Vento grow.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We&apos;re opening a small private window for referred angel
            investors. Your introductions carry real weight — we&apos;re asking
            you to invite <strong>5–7 people</strong> from your network who
            should take a look.
          </p>
          <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
            <p className="text-sm font-medium text-primary">The ask:</p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1">
              <li>• Submit 5–7 names of investors you trust</li>
              <li>
                • Rank your <strong>strongest 2–3</strong> — they get priority
              </li>
              <li>• Choose how you&apos;d like to make each intro</li>
            </ul>
          </div>
        </div>

        {/* Submitted invitees */}
        {invitees.length > 0 && (
          <div className="bg-card border border-border rounded-xl p-6 mb-6">
            <h3 className="font-semibold mb-4">
              Your Invitees ({invitees.length})
            </h3>
            <div className="space-y-3">
              {invitees.map((inv, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 border border-border rounded-lg"
                >
                  <div>
                    <p className="font-medium text-sm">{inv.name}</p>
                    <p className="text-xs text-muted-foreground">{inv.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        inv.relationshipLabel === "CLOSE"
                          ? "bg-green-100 text-green-700"
                          : inv.relationshipLabel === "SOLID"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {inv.relationshipLabel.toLowerCase()}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      #{inv.sponsorRank}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      Pending
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add invitee */}
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="w-full inline-flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-card px-4 py-6 text-sm font-medium text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors"
          >
            + Add an invitee
          </button>
        ) : (
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Add Invitee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={current.name}
                  onChange={(e) =>
                    setCurrent({ ...current, name: e.target.value })
                  }
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  value={current.email}
                  onChange={(e) =>
                    setCurrent({ ...current, email: e.target.value })
                  }
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Phone / WhatsApp</label>
                <input
                  type="tel"
                  value={current.phone}
                  onChange={(e) =>
                    setCurrent({ ...current, phone: e.target.value })
                  }
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  placeholder="+1 555 000 0000"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Geography</label>
                <input
                  type="text"
                  value={current.geography}
                  onChange={(e) =>
                    setCurrent({ ...current, geography: e.target.value })
                  }
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  placeholder="US / Israel / EU"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Likely Check Size</label>
                <input
                  type="text"
                  value={current.estimatedCheckSize}
                  onChange={(e) =>
                    setCurrent({
                      ...current,
                      estimatedCheckSize: e.target.value,
                    })
                  }
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  placeholder="$25K"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">
                  Relationship Strength
                </label>
                <select
                  value={current.relationshipLabel}
                  onChange={(e) =>
                    setCurrent({
                      ...current,
                      relationshipLabel: e.target.value as InviteeEntry["relationshipLabel"],
                    })
                  }
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="CLOSE">Close — I know them well</option>
                  <option value="SOLID">Solid — good relationship</option>
                  <option value="LIGHT">Light — acquaintance</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Intro Mode</label>
                <select
                  value={current.introMode}
                  onChange={(e) =>
                    setCurrent({
                      ...current,
                      introMode: e.target.value as InviteeEntry["introMode"],
                    })
                  }
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="SELF_SEND">I&apos;ll send the intro myself</option>
                  <option value="THREE_WAY_INTRO">
                    3-way intro with Ofir
                  </option>
                  <option value="DRAFT_FOR_APPROVAL">
                    Draft message for my approval
                  </option>
                </select>
              </div>
              <div className="flex items-center gap-2 pt-6">
                <input
                  type="checkbox"
                  id="nudge"
                  checked={current.sponsorWillNudgeAgain}
                  onChange={(e) =>
                    setCurrent({
                      ...current,
                      sponsorWillNudgeAgain: e.target.checked,
                    })
                  }
                  className="rounded border-input"
                />
                <label htmlFor="nudge" className="text-sm">
                  I&apos;ll nudge them if needed
                </label>
              </div>
              <div className="md:col-span-2 flex flex-col gap-1.5">
                <label className="text-sm font-medium">
                  Why is this person a fit?
                </label>
                <textarea
                  value={current.sponsorNote}
                  onChange={(e) =>
                    setCurrent({ ...current, sponsorNote: e.target.value })
                  }
                  className="flex min-h-[80px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Active angel, interested in B2B SaaS, relevant background in..."
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={addInvitee}
                disabled={!current.name || !current.email}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                Add Invitee
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
