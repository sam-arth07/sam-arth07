'use client';

export default function ContactMobile() {
  return (
    <div className="px-6 py-8">
      <div className="bg-[#313335] rounded-lg border border-[#323232] overflow-hidden shadow-lg mb-6">
        {/* File header */}
        <div className="bg-[#3C3F41] px-4 py-2 border-b border-[#323232] font-mono text-xs text-[#787878]">
          Contact.xml
        </div>

        {/* XML editor content */}
        <div className="p-5 font-mono text-[11px]">
          {/* XML Declaration */}
          <div className="mb-4">
            <p className="text-[#808080]">
              &lt;?<span className="text-[#E8BF6A]">xml</span> <span className="text-[#BABABA]">version</span>=<span className="text-[#6A8759]">"1.0"</span>?&gt;
            </p>
          </div>

          {/* Comment */}
          <div className="mb-4">
            <p className="text-[#808080]">&lt;!-- Get in touch! --&gt;</p>
          </div>

          {/* LinearLayout */}
          <div>
            <p className="mb-2">
              <span className="text-[#E8BF6A]">&lt;LinearLayout</span>
            </p>
            <div className="pl-3 mb-2">
              <p><span className="text-[#BABABA]">android:orientation</span>=<span className="text-[#6A8759]">"vertical"</span></p>
              <p><span className="text-[#BABABA]">android:padding</span>=<span className="text-[#6A8759]">"16dp"</span><span className="text-[#E8BF6A]">&gt;</span></p>
            </div>

            {/* TextView - Title */}
            <div className="pl-3 mb-3">
              <p className="text-[#808080] mb-2">&lt;!-- Title --&gt;</p>
              <p><span className="text-[#E8BF6A]">&lt;TextView</span></p>
              <div className="pl-3">
                <p><span className="text-[#BABABA]">android:text</span>=<span className="text-[#6A8759]">"Let's Connect"</span></p>
                <p><span className="text-[#BABABA]">android:textColor</span>=<span className="text-[#6A8759]">"#3DDC84"</span> <span className="text-[#E8BF6A]">/&gt;</span></p>
              </div>
            </div>

            <p className="pl-3"><span className="text-[#E8BF6A]">&lt;/LinearLayout&gt;</span></p>
          </div>
        </div>
      </div>

      {/* Contact Title */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-[#3DDC84] mb-2">Let's Connect!</h2>
        <p className="text-[#A9B7C6] text-sm">Feel free to reach out for collaborations or just a friendly chat</p>
      </div>

      {/* Interactive contact buttons */}
      <div className="space-y-4">
        <a
          href="mailto:samarthchaplot123@gmail.com"
          className="block w-full px-5 py-4 bg-gradient-to-r from-[#3DDC84] to-[#2BAF66] hover:from-[#45E68E] hover:to-[#3DDC84] text-[#2B2B2B] text-center font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg text-base"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">📧</span>
            <span>Email Me</span>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/samarth-chaplot-130b88256"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-5 py-4 bg-[#313335] hover:bg-[#3C3F41] border-2 border-[#3DDC84] text-[#3DDC84] text-center font-bold rounded-lg transition-all transform hover:scale-105 text-base"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">💼</span>
            <span>LinkedIn</span>
          </div>
        </a>
        <a
          href="https://github.com/sam-arth07"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-5 py-4 bg-[#313335] hover:bg-[#3C3F41] border-2 border-[#3DDC84] text-[#3DDC84] text-center font-bold rounded-lg transition-all transform hover:scale-105 text-base"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">🚀</span>
            <span>GitHub</span>
          </div>
        </a>
      </div>
    </div>
  );
}
