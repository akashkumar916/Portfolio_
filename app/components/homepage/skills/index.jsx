// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import ScrollReveal from "../../helper/scroll-reveal";

const expertiseStats = [
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

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#2F2F2F]"></span>
          <span className="bg-[#2F2F2F] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills & Technical Expertise
          </span>
          <span className="w-24 h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      {/* Technical Expertise Progress Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 my-12 max-w-4xl mx-auto">
        {expertiseStats.map((stat, index) => (
          <ScrollReveal key={stat.id} delay={index * 100}>
            <div className="bg-[#2F2F2F] border border-[#1b2c68a0] rounded-lg p-6 glow-effect hover:border-violet-500 transition-all duration-300 card-3d">
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

      {/* Skills Marquee */}
      <div className="w-full my-12">
        <ScrollReveal>
          <h3 className="text-center text-white text-xl font-semibold mb-8 gradient-text">Technologies & Tools</h3>
        </ScrollReveal>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#2F2F2F] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500 glow-effect hover:glow-effect">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    {skillsImage(skill)?.src ? (
                      <Image
                        src={skillsImage(skill).src}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto rounded-lg"
                      />
                    ) : (
                      <div className="h-full w-10 flex items-center justify-center bg-gray-700 rounded-lg">
                        <span className="text-white text-xs">{skill.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;