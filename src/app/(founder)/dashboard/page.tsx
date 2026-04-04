function MetricCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
      {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
    </div>
  );
}

function ActionItem({
  type,
  title,
  subtitle,
}: {
  type: "high" | "medium" | "low";
  title: string;
  subtitle: string;
}) {
  const colors = {
    high: "bg-destructive/10 border-destructive/20 text-destructive",
    medium: "bg-warning/10 border-warning/20 text-warning",
    low: "bg-muted border-border text-muted-foreground",
  };

  return (
    <div
      className={`flex items-start gap-3 p-3 rounded-lg border ${colors[type]}`}
    >
      <div
        className={`w-2 h-2 rounded-full mt-1.5 ${
          type === "high"
            ? "bg-destructive"
            : type === "medium"
            ? "bg-warning"
            : "bg-muted-foreground"
        }`}
      />
      <div>
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  // Demo data — will be replaced with real DB queries
  return (
    <div className="p-6 md:p-8 max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Command Center</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Sprint Overview — configure dates and targets in Settings
          </p>
        </div>
        <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">
          Day — of 10
        </div>
      </div>

      {/* Sprint Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MetricCard label="Sprint Target" value="$—" sub="Set in Settings" />
        <MetricCard label="Raised to Date" value="$—" sub="—% of target" />
        <MetricCard label="Sponsors Active" value="0" sub="of 0 total" />
        <MetricCard label="Invitees" value="0" sub="0 invitations sent" />
        <MetricCard label="Deal Room Views" value="0" />
        <MetricCard label="CTAs Received" value="0" />
        <MetricCard label="Meetings Booked" value="0" />
        <MetricCard label="Commitments" value="$0" sub="0 committed" />
      </div>

      {/* Pipeline Funnel */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Pipeline</h2>
        <div className="flex items-end justify-between gap-2 h-32">
          {[
            { label: "Submitted", count: 0 },
            { label: "Invited", count: 0 },
            { label: "Viewed", count: 0 },
            { label: "Engaged", count: 0 },
            { label: "Meeting", count: 0 },
            { label: "Committed", count: 0 },
            { label: "Funded", count: 0 },
          ].map((stage, i) => (
            <div key={stage.label} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-lg font-bold">{stage.count}</span>
              <div
                className="w-full bg-primary/20 rounded-t-sm"
                style={{
                  height: `${Math.max(8, (7 - i) * 15)}px`,
                  opacity: 0.3 + i * 0.1,
                }}
              />
              <span className="text-xs text-muted-foreground text-center leading-tight">
                {stage.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Queue */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Action Queue</h2>
        <div className="flex flex-col gap-3">
          <div className="text-center py-8 text-muted-foreground text-sm">
            <p>No actions yet. Activate sponsors to start the sprint.</p>
            <p className="mt-2 text-xs">
              Once invitees engage, urgent actions will appear here prioritized
              by heat score.
            </p>
          </div>
        </div>

        {/* Example actions (hidden, for layout reference) */}
        <div className="hidden flex-col gap-3">
          <ActionItem
            type="high"
            title="Respond now: John Smith selected 'Interested'"
            subtitle="Tier A · via Sarah Johnson · 2 min ago"
          />
          <ActionItem
            type="medium"
            title="Follow up: Alex Chen viewed deal room, no CTA"
            subtitle="Tier B · viewed 4h ago · scroll depth 85%"
          />
          <ActionItem
            type="low"
            title="Nudge sponsor: Mark Davis has 0 invitees submitted"
            subtitle="Activated 2 days ago"
          />
        </div>
      </div>
    </div>
  );
}
