export default function PipelinePage() {
  return (
    <div className="p-6 md:p-8 max-w-6xl">
      <h1 className="text-2xl font-bold mb-2">Pipeline & Triage</h1>
      <p className="text-muted-foreground text-sm mb-8">
        All invitees ranked by heat score. Tier A gets immediate attention.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["All", "Tier A", "Tier B", "Tier C", "Needs Action", "Quiet Extension"].map(
          (filter) => (
            <button
              key={filter}
              className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                filter === "All"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              {filter}
            </button>
          )
        )}
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">
                Name
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">
                Sponsor
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">
                Tier
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">
                Heat Score
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">
                Status
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">
                Recommendation
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={6}
                className="px-4 py-12 text-center text-sm text-muted-foreground"
              >
                No invitees yet. Activate sponsors to start receiving names.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
