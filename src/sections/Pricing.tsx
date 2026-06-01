"use client"
import CheckIcon from "@/assets/check.svg";
import Image from "next/image";
import {twMerge} from "tailwind-merge";
import {motion} from "framer-motion"


const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];




 const Pricing = () => {
  return (
    <section 
    className="custom-layout py-18 sm:py-24 bg-white"
    >

      <div
      id="text-container"
      className="section-heading-width"
      >
      <h2 className="section-title">
      pricing section
      </h2>

      <p className="section-description mt-5">
      Free Forever. Upgrade for unlimited tasks, better security, 
      and exclusive features. 
      </p>
      </div>

{/* card section  */}

<div className="flex  md:flex-row  md:items-end md:justify-center flex-col max-md:items-center mt-12 gap-6   max-w-full w-full">
  {
    pricingTiers?.map((item,index:number)=>(
      <div key={item.title} 
      className={twMerge( "w-full p-10 border border-[#F1F1F1] rounded-3xl  shadow-[0_7px_14px_#EAEAEA]",  index % 2 == 1 && "border-black bg-black text-white/60 " )}
      // className={`pricing-card ${item.popular ? "popular" : ""} ${item.inverse ? "inverse" : ""}`}
      >
        <div className="flex justify-between">

        <h3 className={twMerge("text-lg font-bold text-black/50", index % 2 == 1 && "text-white/50")}>
          {item.title} 
          </h3>

          {
            item.popular && (
          <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
   <motion.span 
   animate={{
    backgroundPositionX:"-100%",
   }}
   transition={{
    repeat:Infinity,
    ease:'linear',
    duration:1,
    repeatType:'loop',
   }}
   
   className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] 
   [background-size:200%] text-transparent bg-clip-text font-medium"> 
          Popular
   </motion.span>
          </div>
            )
          }



        </div>

          <div className="flex items-baseline gap-1 mt-[30px]">
            <span>${item.monthlyPrice.toFixed(2)}</span>
            <span 
            className="tracking-tight font-bold capitalize text-black/50">/month</span>
          </div>
          <button className={twMerge("btn btn-primary w-full  mt-[30px]" , index % 2 == 1 && " bg-white text-black")}>{item.buttonText}</button>

          <ul className="flex flex-col  gap-5 mt-8">
            {
              item.features?.map((feature, index)=>(

                <li key={index} className="text-sm flex items-center gap-4">
                  <Image src={CheckIcon} alt="check icon" width={16} height={16} />
                  <span>
                  {feature}
                  </span>
                </li>
              ))
            }
          </ul>


        </div>
    ))
  }
</div>




      </section>
  )
};

export default Pricing;



