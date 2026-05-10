export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          For Engineering Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-summarize your team&apos;s daily standups from Slack
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          StandupSummarizer connects to your Slack workspace, monitors standup channels, and delivers clean AI-generated executive summaries every morning — no more reading 40 messages before your first coffee.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "Slack OAuth",
            "OpenAI Summaries",
            "Daily Email Digest",
            "Multi-channel",
            "Instant Setup"
          ].map((f) => (
            <span
              key={f}
              className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-sm text-[#6e7681] mb-6">Per workspace · unlimited channels</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect unlimited Slack channels",
              "AI summaries via OpenAI GPT-4o",
              "Daily email digest for managers",
              "7-day searchable summary history",
              "Slack DM delivery option",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does it connect to Slack?</h3>
            <p className="text-sm text-[#8b949e]">
              You authorize StandupSummarizer via Slack OAuth. We request read-only access to the channels you designate — we never post or modify anything without your permission.
            </p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which standup formats are supported?</h3>
            <p className="text-sm text-[#8b949e]">
              Any text-based standup in a Slack channel or thread works — Yesterday / Today / Blockers, free-form updates, or custom formats. Our AI adapts to your team&apos;s style automatically.
            </p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">
              Yes. Cancel from your billing dashboard at any time. You keep access until the end of your billing period with no questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} StandupSummarizer. Built for remote-first engineering teams.
      </footer>
    </main>
  );
}
