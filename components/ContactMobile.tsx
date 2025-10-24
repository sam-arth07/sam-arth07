'use client';

export default function ContactMobile() {
  return (
    <div className="px-6 py-8">
      <div className="bg-[#313335] rounded border border-[#323232] overflow-hidden">
        {/* File header */}
        <div className="bg-[#3C3F41] px-3 py-2 border-b border-[#323232] font-mono text-xs text-[#787878]">
          Contact.xml
        </div>

        {/* XML editor content */}
        <div className="p-4 font-mono text-[10px]">
          {/* XML Declaration */}
          <div className="mb-3">
            <p className="text-[#808080]">
              &lt;?<span className="text-[#E8BF6A]">xml</span> <span className="text-[#BABABA]">version</span>=<span className="text-[#6A8759]">"1.0"</span>?&gt;
            </p>
          </div>

          {/* Comment */}
          <div className="mb-3">
            <p className="text-[#808080]">&lt;!-- Get in touch! --&gt;</p>
          </div>

          {/* LinearLayout */}
          <div>
            <p className="mb-1">
              <span className="text-[#E8BF6A]">&lt;LinearLayout</span>
            </p>
            <div className="pl-2 mb-1">
              <p><span className="text-[#BABABA]">android:orientation</span>=<span className="text-[#6A8759]">"vertical"</span></p>
              <p><span className="text-[#BABABA]">android:padding</span>=<span className="text-[#6A8759]">"16dp"</span><span className="text-[#E8BF6A]">&gt;</span></p>
            </div>

            {/* TextView - Title */}
            <div className="pl-2 mb-2">
              <p className="text-[#808080] mb-1">&lt;!-- Title --&gt;</p>
              <p><span className="text-[#E8BF6A]">&lt;TextView</span></p>
              <div className="pl-2">
                <p><span className="text-[#BABABA]">android:text</span>=<span className="text-[#6A8759]">"Let's Connect"</span></p>
                <p><span className="text-[#BABABA]">android:textColor</span>=<span className="text-[#6A8759]">"#3DDC84"</span> <span className="text-[#E8BF6A]">/&gt;</span></p>
              </div>
            </div>

            <p className="pl-2"><span className="text-[#E8BF6A]">&lt;/LinearLayout&gt;</span></p>
          </div>
        </div>
      </div>

      {/* Actual interactive buttons */}
      <div className="mt-6 space-y-3">
        <a
          href="mailto:samarthchaplot123@gmail.com"
          className="block w-full px-4 py-3 bg-[#3DDC84] hover:bg-[#45E68E] text-[#2B2B2B] text-center font-semibold rounded transition-all text-sm"
        >
          📧 Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/samarth-chaplot-130b88256"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-4 py-3 bg-[#3DDC84] hover:bg-[#45E68E] text-[#2B2B2B] text-center font-semibold rounded transition-all text-sm"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com/sam-arth07"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-4 py-3 bg-[#3DDC84] hover:bg-[#45E68E] text-[#2B2B2B] text-center font-semibold rounded transition-all text-sm"
        >
          🚀 GitHub
        </a>
      </div>
    </div>
  );
}
