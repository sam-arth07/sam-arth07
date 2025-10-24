'use client';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-[#2B2B2B] text-[#A9B7C6] py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-[#313335] rounded border border-[#323232] overflow-hidden">
          {/* File header */}
          <div className="bg-[#3C3F41] px-4 py-2 border-b border-[#323232] font-mono text-xs text-[#787878]">
            Contact.xml
          </div>

          {/* XML editor content */}
          <div className="p-8 font-mono text-sm md:text-base">
            {/* XML Declaration */}
            <div className="mb-6">
              <p className="text-[#808080]">
                &lt;?<span className="text-[#E8BF6A]">xml</span> <span className="text-[#BABABA]">version</span>=<span className="text-[#6A8759]">"1.0"</span> <span className="text-[#BABABA]">encoding</span>=<span className="text-[#6A8759]">"utf-8"</span>?&gt;
              </p>
            </div>

            {/* Comment */}
            <div className="mb-6">
              <p className="text-[#808080]">&lt;!-- Get in touch! --&gt;</p>
            </div>

            {/* LinearLayout */}
            <div>
              <p className="mb-2">
                <span className="text-[#E8BF6A]">&lt;LinearLayout</span>
              </p>
              <div className="pl-4 mb-2">
                <p><span className="text-[#BABABA]">xmlns:android</span>=<span className="text-[#6A8759]">"http://schemas.android.com/apk/res/android"</span></p>
                <p><span className="text-[#BABABA]">android:layout_width</span>=<span className="text-[#6A8759]">"match_parent"</span></p>
                <p><span className="text-[#BABABA]">android:layout_height</span>=<span className="text-[#6A8759]">"match_parent"</span></p>
                <p><span className="text-[#BABABA]">android:orientation</span>=<span className="text-[#6A8759]">"vertical"</span></p>
                <p><span className="text-[#BABABA]">android:padding</span>=<span className="text-[#6A8759]">"16dp"</span></p>
                <p><span className="text-[#BABABA]">android:gravity</span>=<span className="text-[#6A8759]">"center"</span><span className="text-[#E8BF6A]">&gt;</span></p>
              </div>

              {/* TextView - Title */}
              <div className="pl-4 mb-4">
                <p className="text-[#808080] mb-2">&lt;!-- Contact Title --&gt;</p>
                <p><span className="text-[#E8BF6A]">&lt;TextView</span></p>
                <div className="pl-4">
                  <p><span className="text-[#BABABA]">android:id</span>=<span className="text-[#6A8759]">"@+id/contact_title"</span></p>
                  <p><span className="text-[#BABABA]">android:layout_width</span>=<span className="text-[#6A8759]">"wrap_content"</span></p>
                  <p><span className="text-[#BABABA]">android:layout_height</span>=<span className="text-[#6A8759]">"wrap_content"</span></p>
                  <p><span className="text-[#BABABA]">android:text</span>=<span className="text-[#6A8759]">"Let's Connect"</span></p>
                  <p><span className="text-[#BABABA]">android:textSize</span>=<span className="text-[#6A8759]">"32sp"</span></p>
                  <p><span className="text-[#BABABA]">android:textColor</span>=<span className="text-[#6A8759]">"#3DDC84"</span></p>
                  <p><span className="text-[#BABABA]">android:layout_marginBottom</span>=<span className="text-[#6A8759]">"24dp"</span> <span className="text-[#E8BF6A]">/&gt;</span></p>
                </div>
              </div>

              {/* Email Button */}
              <div className="pl-4 mb-4">
                <p className="text-[#808080] mb-2">&lt;!-- Email Contact --&gt;</p>
                <p><span className="text-[#E8BF6A]">&lt;Button</span></p>
                <div className="pl-4">
                  <p><span className="text-[#BABABA]">android:id</span>=<span className="text-[#6A8759]">"@+id/email_button"</span></p>
                  <p><span className="text-[#BABABA]">android:layout_width</span>=<span className="text-[#6A8759]">"match_parent"</span></p>
                  <p><span className="text-[#BABABA]">android:layout_height</span>=<span className="text-[#6A8759]">"wrap_content"</span></p>
                  <p><span className="text-[#BABABA]">android:text</span>=<span className="text-[#6A8759]">"📧 samarthchaplot123@gmail.com"</span></p>
                  <p><span className="text-[#BABABA]">android:backgroundTint</span>=<span className="text-[#6A8759]">"#3DDC84"</span></p>
                  <p><span className="text-[#BABABA]">android:textColor</span>=<span className="text-[#6A8759]">"#2B2B2B"</span></p>
                  <p><span className="text-[#BABABA]">android:layout_margin</span>=<span className="text-[#6A8759]">"8dp"</span></p>
                  <p><span className="text-[#BABABA]">android:onClick</span>=<span className="text-[#6A8759]">"openEmail"</span> <span className="text-[#E8BF6A]">/&gt;</span></p>
                </div>
              </div>

              {/* LinkedIn Button */}
              <div className="pl-4 mb-4">
                <p className="text-[#808080] mb-2">&lt;!-- LinkedIn Profile --&gt;</p>
                <p><span className="text-[#E8BF6A]">&lt;Button</span></p>
                <div className="pl-4">
                  <p><span className="text-[#BABABA]">android:id</span>=<span className="text-[#6A8759]">"@+id/linkedin_button"</span></p>
                  <p><span className="text-[#BABABA]">android:layout_width</span>=<span className="text-[#6A8759]">"match_parent"</span></p>
                  <p><span className="text-[#BABABA]">android:layout_height</span>=<span className="text-[#6A8759]">"wrap_content"</span></p>
                  <p><span className="text-[#BABABA]">android:text</span>=<span className="text-[#6A8759]">"💼 LinkedIn Profile"</span></p>
                  <p><span className="text-[#BABABA]">android:backgroundTint</span>=<span className="text-[#6A8759]">"#3DDC84"</span></p>
                  <p><span className="text-[#BABABA]">android:textColor</span>=<span className="text-[#6A8759]">"#2B2B2B"</span></p>
                  <p><span className="text-[#BABABA]">android:layout_margin</span>=<span className="text-[#6A8759]">"8dp"</span></p>
                  <p><span className="text-[#BABABA]">android:onClick</span>=<span className="text-[#6A8759]">"openLinkedIn"</span> <span className="text-[#E8BF6A]">/&gt;</span></p>
                </div>
              </div>

              {/* GitHub Button */}
              <div className="pl-4 mb-4">
                <p className="text-[#808080] mb-2">&lt;!-- GitHub Profile --&gt;</p>
                <p><span className="text-[#E8BF6A]">&lt;Button</span></p>
                <div className="pl-4">
                  <p><span className="text-[#BABABA]">android:id</span>=<span className="text-[#6A8759]">"@+id/github_button"</span></p>
                  <p><span className="text-[#BABABA]">android:layout_width</span>=<span className="text-[#6A8759]">"match_parent"</span></p>
                  <p><span className="text-[#BABABA]">android:layout_height</span>=<span className="text-[#6A8759]">"wrap_content"</span></p>
                  <p><span className="text-[#BABABA]">android:text</span>=<span className="text-[#6A8759]">"🚀 GitHub: @sam-arth07"</span></p>
                  <p><span className="text-[#BABABA]">android:backgroundTint</span>=<span className="text-[#6A8759]">"#3DDC84"</span></p>
                  <p><span className="text-[#BABABA]">android:textColor</span>=<span className="text-[#6A8759]">"#2B2B2B"</span></p>
                  <p><span className="text-[#BABABA]">android:layout_margin</span>=<span className="text-[#6A8759]">"8dp"</span></p>
                  <p><span className="text-[#BABABA]">android:onClick</span>=<span className="text-[#6A8759]">"openGitHub"</span> <span className="text-[#E8BF6A]">/&gt;</span></p>
                </div>
              </div>

              <p><span className="text-[#E8BF6A]">&lt;/LinearLayout&gt;</span></p>
            </div>
          </div>
        </div>

        {/* Actual interactive buttons */}
        <div className="mt-12 space-y-4">
          <a
            href="mailto:samarthchaplot123@gmail.com"
            className="block w-full px-6 py-4 bg-[#3DDC84] hover:bg-[#45E68E] text-[#2B2B2B] text-center font-semibold rounded transition-all duration-300 transform hover:scale-105"
          >
            📧 Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/samarth-chaplot-130b88256"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-4 bg-[#3DDC84] hover:bg-[#45E68E] text-[#2B2B2B] text-center font-semibold rounded transition-all duration-300 transform hover:scale-105"
          >
            💼 Connect on LinkedIn
          </a>
          <a
            href="https://github.com/sam-arth07"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-4 bg-[#3DDC84] hover:bg-[#45E68E] text-[#2B2B2B] text-center font-semibold rounded transition-all duration-300 transform hover:scale-105"
          >
            🚀 View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
