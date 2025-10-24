'use client';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Kotlin', level: 95 },
      { name: 'Java', level: 90 },
      { name: 'XML', level: 85 },
      { name: 'SQL', level: 80 }
    ]
  },
  {
    title: 'Android Framework',
    skills: [
      { name: 'Jetpack Compose', level: 90 },
      { name: 'MVVM Architecture', level: 95 },
      { name: 'Material Design', level: 90 },
      { name: 'Android SDK', level: 95 }
    ]
  },
  {
    title: 'Libraries & Tools',
    skills: [
      { name: 'Retrofit', level: 90 },
      { name: 'Room Database', level: 85 },
      { name: 'Coroutines & Flow', level: 90 },
      { name: 'Hilt/Dagger', level: 85 },
      { name: 'Firebase', level: 80 },
      { name: 'Git & GitHub', level: 90 }
    ]
  },
  {
    title: 'Concepts',
    skills: [
      { name: 'Clean Architecture', level: 90 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'Offline-First', level: 85 },
      { name: 'UI/UX Design', level: 80 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Expertise in modern Android development with a focus on clean architecture and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-emerald-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-slate-700">
                        {skill.name}
                      </span>
                      <span className="text-emerald-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Continuous Learning
          </h3>
          <p className="text-lg max-w-3xl mx-auto">
            Constantly exploring new Android technologies and best practices. Active participant in the Android development community through open source contributions and knowledge sharing.
          </p>
        </div>
      </div>
    </section>
  );
}
