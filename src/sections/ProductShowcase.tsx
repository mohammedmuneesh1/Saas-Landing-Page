"use client"
import ProductImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png"
import Image from "next/image";
import {motion,useScroll, useTransform} from "framer-motion"
import { useRef } from "react";


const ProductShowcase = () => {


const sectionRef = useRef<null | HTMLDivElement>(null);
const {scrollYProgress} = useScroll({
  target:sectionRef,
  offset:["start end","end start"] 
})

 const translateY = useTransform(scrollYProgress,[0,1],[150,-150])


  

  return (


    <section 
    ref={sectionRef}
    className="py-16 md:py-24  bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-hidden">
      <div className="custom-layout ">

        <div
        id="text-container"
        className="section-heading-width"
        >


        <div className="flex justify-center">
          <h3 className="tag">Boost your productivity</h3>
        </div>
        <h2 className="mt-5 section-title">A more effective way  to <br/> track progress</h2>

        <p className="section-description mt-5">Effortlessly turn your ideas into a fully functional, responsive, Saas Website in just minutes with this temmplates </p>
        </div>

        <div className="relative mt-10 ">
<Image src={ProductImage}
alt="Product Image"
loading="eager"
className=""  
// className="w-full h-auto mt-10 rounded-lg shadow-lg"
/>

<motion.img
 src={pyramidImage?.src}
alt="Product Image"
loading="eager"
height={268}
width={268}
className="hidden md:block absolute -right-36 -top-32"  
  style={{
    translateY:translateY,
  }}
/>


<motion.img
 src={tubeImage?.src}
alt="tube Image"
loading="eager"
height={248}
width={248}
className="hidden md:block absolute bottom-24 -left-36"  
  style={{
    translateY:translateY,
  }}
/>
        </div>


      </div>
    </section>
  )
};
export default ProductShowcase;