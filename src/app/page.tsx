import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-background">
      <main className="flex flex-col items-center gap-8 max-w-lg px-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
            V
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Vento
          </h1>
          <p className="text-muted-foreground text-lg">
            The Revenue Logic Brain
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 w-full shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Private Investor Portal</h2>
          <p className="text-muted-foreground text-sm mb-6">
            This is a private, invitation-only platform. Access is limited to
            current investors and invited prospects.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Founder Login
            </Link>
            <p className="text-xs text-muted-foreground">
              Sponsors and invitees: use the private link you received.
            </p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground max-w-sm">
          Confidential. This platform and all materials within are for intended
          recipients only. Do not forward or share without permission.
        </p>
      </main>
    </div>
  );
}
