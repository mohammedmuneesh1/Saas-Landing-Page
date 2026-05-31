import ArrowIcon from "@/assets/arrow-right.svg"
import Image from "next/image";
import cogImage from "@/assets/cog.png"
import cylinderImage from "@/assets/cylinder.png"
import noodleImage from "@/assets/noodle.png"

export const Hero = () => {
  return (
    <section className=" 
    md:pt-2 md:pb-10 pt-8 pb-20
     bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]   overflow-x-clip"
// Width  = 200% of the element
// Height = 100% of the element
     >


      <div className="custom-layout   capitalize">
      <div
      //  className="md:flex md:items-center md:justify-between gap-10"
       className="md:flex md:items-center md:gap-10 "
       >

{/*VERSION + TEXT + BUTTON START */}
<div className="md:max-w-[598px] w-full shrink">
  <h3 className=' text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight'>Version 2.0 is here </h3>
  <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[84px]  xl:text-8xl   font-bold tracking-tighter
  bg-gradient-to-b from-black to-blue-600 text-transparent bg-clip-text mt-6
  ">Pathway to Productivity</h1>

  <p className="text-xl text-[#010D3E] tracking-tight mt-6   max-w-full font-medium" >
    Celebrate the joy of accomplishment with an app designed to track your progress,
     motivate your efforts, and celebrate your successes. 
  </p>

  <div className="flex gap-1 items-center mt-[30px]">
    <button className="btn btn-primary">Get for free</button>
    <button  className="btn btn-text gap-1">
      <span>
      Learn More
      </span>
      <Image
      src={ArrowIcon}
      alt="arrow right"
      loading="eager"
      width={20}
      height={20}
      />
      </button>
  </div>
</div>
{/*VERSION + TEXT + BUTTON END */}


{/*THE MAIN IMAGE START */}
<div className="relative  mt-20 md:mt-0  md:h-[578px]  md:flex-1 ">
  <Image
  src={cogImage}
  alt="cog"
  // className="md:absolute md:h-full md:w-auto md:max-w-none max-xl:-left-0 xl:right-6 "
  className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 "
  // -left-6
  loading="eager"
  />


  {/* CYLINDER IMAGE */}

  <Image
  src={cylinderImage}
  width={200}
  height={200}
  alt="cylinder image"
  loading="eager"
  // className="hidden md:block md:max-w-none md:absolute md:-top-8 max-xl:-left-32 xl:left-2  "
  className="hidden md:block md:absolute -top-8 -left-32 "
  //-left-32 -top-8
/>

  <Image
  src={noodleImage}
  width={150}
  // height={100}
  alt="cylinder image"
  loading="eager"
  // className="hidden lg:block   max-w-none absolute -bottom-14   max-xl:left-[80%] xl:-right-5 rotate-[30deg]"
  className="hidden lg:block absolute max-w-none top-[504px] left-[588px]  rotate-[30deg]"
  // className="hidden lg:block absolute top-[532px] left-[448px]"
  //-left-32 -top-8
/>

</div>
{/*THE MAIN IMAGE END */}


</div>
 </div>





      
    </section>

  );
};



//  <div className="relative mt-20 md:mt-0 md:h-[648px] xl:h-[800px] flex-1 overflow-hidden">
//     <Image
//       src={cogImage}
//       alt="cog"
//       className="absolute md:h-full md:w-auto md:max-w-none max-md:-left-6 md:right-0"
//       loading="eager"
//     />

//     {/* CYLINDER IMAGE */}
//     <Image
//       src={cylinderImage}
//       width={220}
//       height={220}
//       alt="cylinder image"
//       loading="eager"
//       className="hidden md:block md:absolute md:-top-8 md:-left-32"
//     />
//   </div>