'use client';

const contributions = [
  {
    title: 'Mifos Mobile',
    role: 'Core Contributor',
    description: 'Mobile banking application enabling financial inclusion for underserved communities worldwide.',
    contributions: [
      'Implemented new features for loan management and account operations',
      'Refactored legacy code to modern Android architecture patterns',
      'Improved app performance and reduced crash rates by 40%',
      'Contributed to UI/UX improvements following Material Design guidelines'
    ],
    impact: '50K+ active users',
    stats: [
      { label: 'Commits', value: '150+' },
      { label: 'PRs Merged', value: '45+' },
      { label: 'Issues Resolved', value: '30+' }
    ]
  },
  {
    title: 'Mifos Android Client',
    role: 'Contributor',
    description: 'Field officer app for managing loan officers and client operations in microfinance institutions.',
    contributions: [
      'Added offline-first capabilities for field operations',
      'Implemented data synchronization with conflict resolution',
      'Enhanced security features and authentication flow',
      'Created comprehensive unit and integration tests'
    ],
    impact: '10K+ downloads',
    stats: [
      { label: 'Commits', value: '80+' },
      { label: 'PRs Merged', value: '25+' },
      { label: 'Issues Resolved', value: '15+' }
    ]
  }
];

export default function MifosContributions() {
  return (
    <section id="mifos" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-500/20 rounded-full mb-4">
            <span className="text-emerald-400 font-semibold">Open Source</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mifos Initiative Contributions
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Proud contributor to the Mifos Initiative, building financial inclusion technology that empowers billions worldwide
          </p>
        </div>

        <div className="space-y-12">
          {contributions.map((contribution, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-emerald-400 mb-2">
                    {contribution.title}
                  </h3>
                  <p className="text-slate-300 font-semibold mb-2">{contribution.role}</p>
                  <p className="text-slate-400">{contribution.description}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg font-semibold">
                    {contribution.impact}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4 text-slate-200">Key Contributions:</h4>
                <ul className="space-y-3">
                  {contribution.contributions.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700">
                {contribution.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/openMF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View Mifos on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
