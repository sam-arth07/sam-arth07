'use client';

export default function ExperienceMobile() {
  return (
    <div className="px-6 py-8">
      <div className="bg-[#313335] rounded-lg border border-[#323232] overflow-hidden shadow-lg">
        {/* File header */}
        <div className="bg-[#3C3F41] px-4 py-2 border-b border-[#323232] font-mono text-xs text-[#787878]">
          Experience.kt
        </div>

        {/* Code editor content */}
        <div className="p-5 font-mono text-xs">
          {/* Package */}
          <div className="mb-6">
            <p className="text-[#CC7832]">
              <span>package</span> <span className="text-[#A9B7C6]">com.portfolio.exp</span>
            </p>
            <p className="text-[#808080] mt-2">// Open Source Contributions</p>
          </div>

          {/* Open Source Contributions */}
          <div className="mb-6 bg-[#2B2B2B] p-5 rounded-lg border border-[#323232]">
            <p className="text-[#808080] mb-3 text-sm">// Contribution:</p>
            
            <p className="mb-2">
              <span className="text-[#CC7832]">data class</span> <span className="text-[#A9B7C6]">OSS(</span>
            </p>
            <div className="pl-4 text-xs">
              <p className="mb-2"><span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">project</span><span className="text-[#CC7832]">:</span> <span className="text-[#A9B7C6]">String</span> <span className="text-[#CC7832]">=</span></p>
              <p className="pl-4 mb-3"><span className="text-[#6A8759]">"MifosX Android"</span><span className="text-[#CC7832]">,</span></p>
              
              <p className="mb-2"><span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">org</span><span className="text-[#CC7832]">:</span> <span className="text-[#A9B7C6]">String</span> <span className="text-[#CC7832]">=</span></p>
              <p className="pl-4 mb-3"><span className="text-[#6A8759]">"Mifos Initiative"</span><span className="text-[#CC7832]">,</span></p>
              
              <p className="mb-2"><span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">work</span><span className="text-[#CC7832]">:</span> <span className="text-[#A9B7C6]">List&lt;String&gt;</span> <span className="text-[#CC7832]">=</span></p>
              <p className="pl-4"><span className="text-[#A9B7C6]">listOf(</span></p>
              <div className="pl-8 space-y-1">
                <p><span className="text-[#6A8759]">"Core banking features"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"50K+ active users"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Loan management"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Offline-first arch"</span></p>
              </div>
              <p className="pl-4"><span className="text-[#A9B7C6]">)</span></p>
            </div>
            <p><span className="text-[#A9B7C6]">)</span></p>
          </div>

          {/* Technical Focus */}
          <div className="mb-6 bg-[#2B2B2B] p-5 rounded-lg border border-[#323232]">
            <p className="text-[#808080] mb-3 text-sm">// Tech Stack:</p>
            <p className="mb-2">
              <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">stack</span> <span className="text-[#CC7832]">=</span> <span className="text-[#A9B7C6]">listOf(</span>
            </p>
            <div className="pl-4 space-y-1">
              <p><span className="text-[#6A8759]">"MVVM"</span><span className="text-[#CC7832]">,</span> <span className="text-[#6A8759]">"Room"</span><span className="text-[#CC7832]">,</span></p>
              <p><span className="text-[#6A8759]">"Retrofit"</span><span className="text-[#CC7832]">,</span> <span className="text-[#6A8759]">"Hilt"</span></p>
            </div>
            <p><span className="text-[#A9B7C6]">)</span></p>
          </div>

          {/* GitHub Link */}
          <div className="pt-4 border-t border-[#323232]">
            <a 
              href="https://github.com/openMF/android-client"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-[#3DDC84] hover:bg-[#45E68E] text-[#2B2B2B] rounded-lg transition-all text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="font-mono">View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
