interface DonationsTabProps {
  orgId: number;
  onNavigateToSettings?: () => void;
}

export default function DonationsTab({ orgId: _orgId, onNavigateToSettings }: DonationsTabProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full max-w-[480px] bg-white border border-warm-brown/30 rounded-2xl shadow-sm p-5 flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-deep-taupe text-sm">Connect Stripe to start accepting donations</p>
          <p className="text-xs text-gray-500 mt-0.5">Set up your publishable key in Settings → Payments.</p>
        </div>
        <button
          onClick={onNavigateToSettings}
          className="flex-shrink-0 px-4 py-2 text-sm font-semibold bg-warm-brown text-white rounded-xl hover:opacity-90 transition"
        >
          Go to Settings
        </button>
      </div>

      <div className="w-full max-w-[480px] bg-cloud rounded-2xl border border-silver-gray shadow-sm">
        <div className="flex flex-col items-center justify-center py-16 text-center px-8">
          <div className="text-6xl mb-6">💝</div>
          <h2 className="text-2xl font-bold text-deep-taupe mb-3">Donation Tracking — Coming Soon</h2>
          <p className="text-gray-500 mb-8">
            Accept donations online and track your fundraising campaigns in one place.
          </p>
          <ul className="text-left text-sm text-gray-600 mb-8 space-y-2">
            <li>✓ Accept one-time and recurring donations</li>
            <li>✓ Track donor history and giving patterns</li>
            <li>✓ Generate tax receipts automatically</li>
            <li>✓ Run targeted fundraising campaigns</li>
          </ul>
          <a
            href="mailto:hello@barkhaus.io?subject=Donations Feature Request"
            className="bg-[#804e3f] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition font-semibold"
          >
            Request Early Access
          </a>
        </div>
      </div>
    </div>
  );
}
