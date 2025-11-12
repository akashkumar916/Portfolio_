// @flow strict

import ScrollReveal from "../../helper/scroll-reveal";

const stats = [
  {
    id: 1,
    number: "5M+",
    label: "Daily Requests Handled",
    icon: "🚀",
    description: "At ServiceNow"
  },
  {
    id: 2,
    number: "40%",
    label: "Performance Improvement",
    icon: "⚡",
    description: "Average optimization"
  },
  {
    id: 3,
    number: "1730+",
    label: "LeetCode Rating",
    icon: "💻",
    description: "Global ranking"
  },
  {
    id: 4,
    number: "6",
    label: "Years Experience",
    icon: "🎯",
    description: "Software Engineering"
  }
];

function Stats() {
  return (
    <div id="stats" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#2F2F2F]"></span>
          <span className="bg-[#2F2F2F] w-fit text-white p-2 px-5 text-xl rounded-md">
            Achievements & Stats
          </span>
          <span className="w-24 h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 my-12">
        {stats.map((stat, index) => (
          <ScrollReveal key={stat.id} delay={index * 100}>
            <div className="bg-[#2F2F2F] border border-[#1b2c68a0] rounded-lg p-6 text-center glow-effect hover:border-violet-500 transition-all duration-300 card-3d">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 mb-2">
                {stat.number}
              </div>
              <div className="text-white text-sm lg:text-base font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-gray-400 text-xs">
                {stat.description}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default Stats;

