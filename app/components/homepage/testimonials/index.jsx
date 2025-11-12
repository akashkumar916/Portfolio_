import { recommendations } from '@/utils/data/testimonials';
import RecommendationCard from './testimonial-card';

const Recommendations = () => {

  return (
    <div id='recommendations' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#2F2F2F] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            RECOMMENDATIONS
          </span>
          <span className="w-full h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      <div className="pt-24 flex overflow-x-auto no-scrollbar">
        <div className="flex flex-col gap-6">
        <div className="flex justify-center">
        <div className="flex overflow-x-auto space-x-4 px-4 no-scrollbar">
          {recommendations.map((recommendation) => (
            <RecommendationCard key={recommendation.id} testimonial={recommendation} />
          ))}
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Recommendations;