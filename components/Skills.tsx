'use client';

export default function Skills() {
  return (
    <section id="about" className="min-h-screen bg-[#2B2B2B] text-[#A9B7C6] py-20 px-6 md:px-20">
      {/* Line numbers sidebar */}
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-[#313335] rounded border border-[#323232] overflow-hidden">
          {/* File header */}
          <div className="bg-[#3C3F41] px-4 py-2 border-b border-[#323232] font-mono text-xs text-[#787878]">
            AboutMe.kt
          </div>

          {/* Code editor content */}
          <div className="p-8 font-mono text-sm md:text-base">
            {/* Package and imports */}
            <div className="mb-8">
              <p className="text-[#CC7832]">
                <span>package</span> <span className="text-[#A9B7C6]">com.portfolio.about</span>
              </p>
              <p className="text-[#808080] mt-2">// About Me - Student & Android Developer</p>
            </div>

            {/* Education */}
            <div className="mb-8">
              <p className="text-[#808080] mb-3">// Education:</p>
              <p className="pl-0">
                <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">university</span> <span className="text-[#CC7832]">=</span> <span className="text-[#6A8759]">"Vellore Institute of Technology"</span>
              </p>
              <p className="pl-0">
                <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">degree</span> <span className="text-[#CC7832]">=</span> <span className="text-[#6A8759]">"B.Tech in Computer Science"</span>
              </p>
              <p className="pl-0">
                <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">expectedGraduation</span> <span className="text-[#CC7832]">=</span> <span className="text-[#6897BB]">2026</span>
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <p className="text-[#808080] mb-3">// Skills:</p>
              
              <p className="mb-2">
                <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">languages</span> <span className="text-[#CC7832]">=</span> <span className="text-[#A9B7C6]">listOf(</span>
              </p>
              <div className="pl-4 mb-2">
                <p><span className="text-[#6A8759]">"Kotlin"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Java"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Python"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"JavaScript"</span></p>
              </div>
              <p className="mb-4"><span className="text-[#A9B7C6]">)</span></p>

              <p className="mb-2">
                <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">frameworks</span> <span className="text-[#CC7832]">=</span> <span className="text-[#A9B7C6]">listOf(</span>
              </p>
              <div className="pl-4 mb-2">
                <p><span className="text-[#6A8759]">"Android SDK"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Jetpack Compose"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Retrofit"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Room Database"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Coroutines & Flow"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Hilt/Dagger"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"MVVM Architecture"</span></p>
              </div>
              <p className="mb-4"><span className="text-[#A9B7C6]">)</span></p>

              <p className="mb-2">
                <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">tools</span> <span className="text-[#CC7832]">=</span> <span className="text-[#A9B7C6]">listOf(</span>
              </p>
              <div className="pl-4 mb-2">
                <p><span className="text-[#6A8759]">"Android Studio"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Git & GitHub"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Firebase"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Postman"</span><span className="text-[#CC7832]">,</span></p>
                <p><span className="text-[#6A8759]">"Figma"</span></p>
              </div>
              <p><span className="text-[#A9B7C6]">)</span></p>
            </div>

            {/* Passion Statement */}
            <div>
              <p className="text-[#808080] mb-3">// Passion Statement:</p>
              <p className="mb-2">
                <span className="text-[#CC7832]">val</span> <span className="text-[#9876AA]">passion</span> <span className="text-[#CC7832]">=</span> <span className="text-[#6A8759]">"""</span>
              </p>
              <div className="pl-4 text-[#6A8759] leading-relaxed">
                <p>I'm passionate about creating intuitive and performant Android</p>
                <p>applications that solve real-world problems. My journey in mobile</p>
                <p>development started with a curiosity about how apps work, and it</p>
                <p>has evolved into a dedication to mastering modern Android</p>
                <p>development practices and contributing to open-source projects.</p>
              </div>
              <p><span className="text-[#6A8759]">"""</span><span className="text-[#A9B7C6]">.trimIndent()</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
