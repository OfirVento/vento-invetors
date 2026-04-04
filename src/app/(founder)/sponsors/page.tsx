export default function SponsorsPage() {
  return (
    <div className="p-6 md:p-8 max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Sponsors</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Current investors activated for the sprint
          </p>
        </div>
        <button className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          + Add Sponsor
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">
                Name
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">
                Status
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">
                Invitees
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">
                Engaged
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">
                Committed
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">
                Portal Link
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={6}
                className="px-4 py-12 text-center text-sm text-muted-foreground"
              >
                No sponsors added yet. Add your first sponsor to get started.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
