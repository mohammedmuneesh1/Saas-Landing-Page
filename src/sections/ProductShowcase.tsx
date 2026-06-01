import ProductImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png"
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className="py-16 md:py-24  bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-hidden">
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

<Image
 src={pyramidImage}
alt="Product Image"
loading="eager"
height={200}
className="hidden md:block absolute -right-36 -top-32"  

/>


<Image
 src={tubeImage}
alt="tube Image"
loading="eager"
height={200}
className="hidden md:block absolute bottom-24 -left-36"  

/>
        </div>


      </div>
    </section>
  )
};
export default ProductShowcase;