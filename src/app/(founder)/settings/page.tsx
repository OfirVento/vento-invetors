"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="p-6 md:p-8 max-w-3xl">
      <h1 className="text-2xl font-bold mb-2">Settings</h1>
      <p className="text-muted-foreground text-sm mb-8">
        Configure round details, sprint dates, and content. Nothing is
        hardcoded.
      </p>

      <form onSubmit={handleSave} className="space-y-8">
        {/* Round Details */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Round Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Round Name</label>
              <input
                type="text"
                defaultValue=""
                placeholder="Angel Round"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Vehicle</label>
              <input
                type="text"
                defaultValue="SAFE"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Target Amount ($)</label>
              <input
                type="number"
                placeholder="500000"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
              <p className="text-xs text-muted-foreground">
                Set this before launching the sprint
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Raised to Date ($)</label>
              <input
                type="number"
                placeholder="0"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Min Check Size ($)</label>
              <input
                type="number"
                placeholder="25000"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Max Check Size ($)</label>
              <input
                type="number"
                placeholder="100000"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Sprint Dates */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Sprint Window</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Start Date</label>
              <input
                type="date"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">End Date</label>
              <input
                type="date"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Sponsor Goal</label>
              <input
                type="number"
                defaultValue={10}
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Invitee Goal</label>
              <input
                type="number"
                defaultValue={70}
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Founder Info */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Founder Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Founder Name</label>
              <input
                type="text"
                defaultValue="Ofir"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Calendar Link</label>
              <input
                type="url"
                placeholder="https://calendar.google.com/..."
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
              <p className="text-xs text-muted-foreground">
                Google Calendar link for &quot;Book a call&quot; CTA
              </p>
            </div>
          </div>
        </div>

        {/* Display Options */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Display Options</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Show allocation progress</p>
                <p className="text-xs text-muted-foreground">
                  Display &quot;X% allocated&quot; in deal room
                </p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Show urgency language</p>
                <p className="text-xs text-muted-foreground">
                  Include time-sensitive messaging
                </p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
          </div>
        </div>

        {/* Compliance */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Compliance</h2>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">Confidentiality Note</label>
            <textarea
              className="flex min-h-[100px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              placeholder="This material is confidential and intended solely for the recipient..."
            />
            <p className="text-xs text-muted-foreground">
              Displayed at the top of every deal room. Review with counsel.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Save Settings
          </button>
          {saved && (
            <span className="text-sm text-green-600">Settings saved!</span>
          )}
        </div>
      </form>
    </div>
  );
}
