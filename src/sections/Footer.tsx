import logo from "@/assets/logosaas.png";
import Image from "next/image";
import socialX from "@/assets/social-x.svg";
import socialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";


const Footer = () => {
  return (
    <section className="custom-layout py-10 bg-black text-[#BCBCBC] text-sm text-center">


<div
//  className="inline-flex relative before:content-['']
// before:bottom-0 before:top-2  before:blur
// before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C3F0B1,#2FD8FE)] before:absolute"

  className="
    inline-flex
    relative
    before:content-['']
    before:absolute
    before:inset-0
    before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C3F0B1,#2FD8FE)]
    before:blur-md
    before:opacity-50
  "
>
      <Image
      src={logo}
      height={40}
      alt="saas logo"
      />
</div>

      <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6 ">
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Customers</a>
        <a href="#">Help</a>
        <a href="#">Careers</a>
      </nav>


<div className="flex justify-center gap-6 mt-6">
  <Image src={socialX} alt="social x" className="w-5 h-5 invert" />
  <Image src={socialInsta} alt="social insta" className="w-5 h-5 invert" />
  <Image src={SocialLinkedIn} alt="social linkedin" className="w-5 h-5 invert" />
  <Image src={SocialPin} alt="social pin" className="w-5 h-5 invert" />
  <Image src={SocialYoutube} alt="social youtube" className="w-5 h-5 invert" />
</div>

<p className="mt-10 ">&copy; 2024 Your Company, Inc. All rights reserved.</p>



    </section>

  )

};

export default Footer;
