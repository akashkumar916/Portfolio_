// @flow strict

import ScrollReveal from "../../helper/scroll-reveal";

const codingStats = [
  {
    id: 1,
    skill: "Java",
    percentage: 90,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 2,
    skill: "Python",
    percentage: 85,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    skill: "System Design",
    percentage: 88,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    skill: "Database Optimization",
    percentage: 92,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 5,
    skill: "Microservices",
    percentage: 87,
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 6,
    skill: "Distributed Systems",
    percentage: 85,
    color: "from-indigo-500 to-purple-500"
  }
];

function CodingStats() {
  return (
    <div id="coding-stats" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#2F2F2F]"></span>
          <span className="bg-[#2F2F2F] w-fit text-white p-2 px-5 text-xl rounded-md">
            Technical Expertise
          </span>
          <span className="w-24 h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 my-12 max-w-4xl mx-auto">
        {codingStats.map((stat, index) => (
          <ScrollReveal key={stat.id} delay={index * 100}>
            <div className="bg-[#2F2F2F] border border-[#1b2c68a0] rounded-lg p-6 glow-effect hover:border-violet-500 transition-all duration-300">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium text-lg">{stat.skill}</span>
                <span className="text-gray-400 text-sm">{stat.percentage}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default CodingStats;

