'use client';

export default function SkillsMobile() {
  return (
    <div className="px-6 py-8">
      <div className="bg-[#313335] rounded border border-[#323232] overflow-hidden">
        {/* File header */}
        <div className="bg-[#3C3F41] px-3 py-2 border-b border-[#323232] font-mono text-xs text-[#787878]">
          AboutMe.kt
        </div>

        {/* Code editor content */}
        <div className="p-4 font-mono text-xs">
          {/* Package and imports */}
          <div className="mb-4">
            <p className="text-[#CC7832]">
              <span>package</span> <span className="text-[#A9B7C6]">com.portfolio.about</span>
            </p>
            <p className="text-[#808080] mt-1">// About Me - Student & Android Developer</p>
          </div>

          {/* Education */}
          <div className="mb-4">
            <p className="text-[#808080] mb-2">// Education:</p>
            <p className="pl-0 text-xs">
              <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">university</span> <span className="text-[#CC7832]">=</span> <span className="text-[#6A8759]">"VIT"</span>
            </p>
            <p className="pl-0 text-xs">
              <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">degree</span> <span className="text-[#CC7832]">=</span> <span className="text-[#6A8759]">"B.Tech CSE"</span>
            </p>
            <p className="pl-0 text-xs">
              <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">year</span> <span className="text-[#CC7832]">=</span> <span className="text-[#6897BB]">2026</span>
            </p>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <p className="text-[#808080] mb-2">// Skills:</p>
            
            <p className="mb-1 text-xs">
              <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">languages</span> <span className="text-[#CC7832]">=</span> <span className="text-[#A9B7C6]">listOf(</span>
            </p>
            <div className="pl-3 mb-1 text-xs">
              <p><span className="text-[#6A8759]">"Kotlin"</span><span className="text-[#CC7832]">,</span> <span className="text-[#6A8759]">"Java"</span></p>
            </div>
            <p className="mb-3 text-xs"><span className="text-[#A9B7C6]">)</span></p>

            <p className="mb-1 text-xs">
              <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">frameworks</span> <span className="text-[#CC7832]">=</span> <span className="text-[#A9B7C6]">listOf(</span>
            </p>
            <div className="pl-3 mb-1 text-xs">
              <p><span className="text-[#6A8759]">"Jetpack Compose"</span><span className="text-[#CC7832]">,</span></p>
              <p><span className="text-[#6A8759]">"Room"</span><span className="text-[#CC7832]">,</span> <span className="text-[#6A8759]">"Retrofit"</span><span className="text-[#CC7832]">,</span></p>
              <p><span className="text-[#6A8759]">"Hilt"</span><span className="text-[#CC7832]">,</span> <span className="text-[#6A8759]">"MVVM"</span></p>
            </div>
            <p className="text-xs"><span className="text-[#A9B7C6]">)</span></p>
          </div>

          {/* Passion Statement */}
          <div>
            <p className="text-[#808080] mb-2">// Passion:</p>
            <p className="mb-1 text-xs">
              <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">passion</span> <span className="text-[#CC7832]">=</span> <span className="text-[#6A8759]">"""</span>
            </p>
            <div className="pl-3 text-[#6A8759] leading-relaxed text-xs">
              <p>Creating intuitive Android</p>
              <p>apps that solve real-world</p>
              <p>problems with modern</p>
              <p>architecture patterns.</p>
            </div>
            <p className="text-xs"><span className="text-[#6A8759]">"""</span><span className="text-[#A9B7C6]">.trimIndent()</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
