// @flow strict

import ScrollReveal from "../../helper/scroll-reveal";

const funFacts = [
  {
    id: 1,
    icon: "🏆",
    title: "ACM ICPC Regionalist",
    description: "Competed in the Olympics of Programming in 2019"
  },
  {
    id: 2,
    icon: "📊",
    title: "Top 99.89 Percentile",
    description: "HackerEarth competitive programming"
  },
  {
    id: 3,
    icon: "🎯",
    title: "Google Codejam Qualifier",
    description: "Advanced to competitive rounds"
  },
  {
    id: 4,
    icon: "⚡",
    title: "Performance Optimizer",
    description: "Reduced system latency by up to 40%"
  },
  {
    id: 5,
    icon: "🌐",
    title: "Scalable Systems",
    description: "Built systems handling 5M+ daily requests"
  },
  {
    id: 6,
    icon: "🔧",
    title: "Problem Solver",
    description: "Love tackling complex technical challenges"
  }
];

function FunFacts() {
  return (
    <div id="fun-facts" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#2F2F2F]"></span>
          <span className="bg-[#2F2F2F] w-fit text-white p-2 px-5 text-xl rounded-md">
            Fun Facts & Highlights
          </span>
          <span className="w-24 h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 my-12">
        {funFacts.map((fact, index) => (
          <ScrollReveal key={fact.id} delay={index * 100}>
            <div className="bg-[#2F2F2F] border border-[#1b2c68a0] rounded-lg p-6 text-center glow-effect hover:border-violet-500 transition-all duration-300 card-3d group">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {fact.icon}
              </div>
              <h3 className="text-white text-lg font-semibold mb-2 gradient-text">
                {fact.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {fact.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default FunFacts;

