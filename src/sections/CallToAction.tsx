import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";

export const CallToAction = () => {
  return (
    <section className="custom-layout 
    bg-gradient-to-b
     from white to-[#D2DCFF]  
     py-18 sm:py-24 overflow-x-clip
     ">
      <div 
      id="text-section"
       className="section-heading-width relative">
        <h2 className="section-title">Sign up for free today</h2>

        <p className="section-description mt-5">
          Celeberate the joy of accomplishment with an app designed to track
          your progress and motivate your efforts
        </p>

        <Image
         src={starImage}
          alt="spring image"
          width={300}
          className="hidden md:block  absolute -left-[350px] -top-[137px]"
        />
        <Image
         src={springImage}
          alt="spring image"
          width={300}
          className="hidden md:block absolute -right-[331px] -top-[19px]"
        />


        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn More</span>
            <Image src={ArrowRight} alt="arrow image" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
