'use client';

export default function MifosContributions() {
  return (
    <section id="experience" className="min-h-screen bg-[#2B2B2B] text-[#A9B7C6] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-[#313335] rounded border border-[#323232] overflow-hidden">
          {/* File header */}
          <div className="bg-[#3C3F41] px-4 py-2 border-b border-[#323232] font-mono text-xs text-[#787878]">
            Experience.kt
          </div>

          {/* Code editor content */}
          <div className="p-8 font-mono text-sm md:text-base">
            {/* Package */}
            <div className="mb-8">
              <p className="text-[#CC7832]">
                <span>package</span> <span className="text-[#A9B7C6]">com.portfolio.experience</span>
              </p>
              <p className="text-[#808080] mt-2">// Open Source & Professional Experience</p>
            </div>

            {/* Open Source Contributions */}
            <div className="mb-12">
              <p className="text-[#808080] mb-4">// Open Source Contributions:</p>
              
              {/* Mifos Mobile */}
              <div className="mb-8 pl-0">
                <p className="mb-2">
                  <span className="text-[#CC7832]">data class</span> <span className="text-[#A9B7C6]">Contribution(</span>
                </p>
                <div className="pl-4">
                  <p><span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">project</span><span className="text-[#CC7832]">:</span> <span className="text-[#A9B7C6]">String</span> <span className="text-[#CC7832]">=</span> <span className="text-[#6A8759]">"Mifos Mobile"</span><span className="text-[#CC7832]">,</span></p>
                  <p><span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">organization</span><span className="text-[#CC7832]">:</span> <span className="text-[#A9B7C6]">String</span> <span className="text-[#CC7832]">=</span> <span className="text-[#6A8759]">"Mifos Initiative"</span><span className="text-[#CC7832]">,</span></p>
                  <p><span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">role</span><span className="text-[#CC7832]">:</span> <span className="text-[#A9B7C6]">String</span> <span className="text-[#CC7832]">=</span> <span className="text-[#6A8759]">"Core Contributor"</span><span className="text-[#CC7832]">,</span></p>
                  <p><span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">impact</span><span className="text-[#CC7832]">:</span> <span className="text-[#A9B7C6]">String</span> <span className="text-[#CC7832]">=</span> <span className="text-[#6A8759]">"50K+ active users"</span><span className="text-[#CC7832]">,</span></p>
                  <p className="mb-2"><span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">achievements</span><span className="text-[#CC7832]">:</span> <span className="text-[#A9B7C6]">List&lt;String&gt;</span> <span className="text-[#CC7832]">=</span> <span className="text-[#A9B7C6]">listOf(</span></p>
                  <div className="pl-4">
                    <p><span className="text-[#6A8759]">"Implemented features for loan management and account operations"</span><span className="text-[#CC7832]">,</span></p>
                    <p><span className="text-[#6A8759]">"Refactored legacy code to modern Android architecture patterns"</span><span className="text-[#CC7832]">,</span></p>
                    <p><span className="text-[#6A8759]">"Improved app performance and reduced crash rates by 40%"</span><span className="text-[#CC7832]">,</span></p>
                    <p><span className="text-[#6A8759]">"Enhanced UI/UX following Material Design guidelines"</span></p>
                  </div>
                  <p><span className="text-[#A9B7C6]">)</span><span className="text-[#CC7832]">,</span></p>
                  <p className="mb-2"><span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">stats</span><span className="text-[#CC7832]">:</span> <span className="text-[#A9B7C6]">Map&lt;String, String&gt;</span> <span className="text-[#CC7832]">=</span> <span className="text-[#A9B7C6]">mapOf(</span></p>
                  <div className="pl-4">
                    <p><span className="text-[#6A8759]">"Commits"</span> <span className="text-[#CC7832]">to</span> <span className="text-[#6A8759]">"150+"</span><span className="text-[#CC7832]">,</span></p>
                    <p><span className="text-[#6A8759]">"PRs Merged"</span> <span className="text-[#CC7832]">to</span> <span className="text-[#6A8759]">"45+"</span><span className="text-[#CC7832]">,</span></p>
                    <p><span className="text-[#6A8759]">"Issues Resolved"</span> <span className="text-[#CC7832]">to</span> <span className="text-[#6A8759]">"30+"</span></p>
                  </div>
                  <p><span className="text-[#A9B7C6]">)</span></p>
                </div>
                <p><span className="text-[#A9B7C6]">)</span></p>
              </div>
            </div>

            {/* Technical Focus */}
            <div className="mb-8">
              <p className="text-[#808080] mb-4">// Technical Focus:</p>
              <p className="mb-2">
                <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">technicalExpertise</span> <span className="text-[#CC7832]">=</span> <span className="text-[#A9B7C6]">listOf(</span>
              </p>
              <div className="pl-4">
                <p><span className="text-[#6A8759]">"Clean Architecture & MVVM"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Offline-First Architecture with Room"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"RESTful API Integration with Retrofit"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Dependency Injection with Hilt"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Reactive Programming with Coroutines & Flow"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Unit & Integration Testing"</span></p>
              </div>
              <p><span className="text-[#A9B7C6]">)</span></p>
            </div>

            {/* GitHub Link */}
            <div className="mt-8 pt-8 border-t border-[#323232]">
              <p className="text-[#808080] mb-3">// View Contributions:</p>
              <a 
                href="https://github.com/openMF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#3DDC84] hover:text-[#45E68E] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="font-mono">github.com/openMF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
