
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echologo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";


export const LogoTicker = () => {
  return (
<section className="custom-layout py-8 md:py-12 bg-white  ">

  <div className="flex justify-center  overflow-hidden 
 [mask-image:linear-gradient(to_right,_transparent,_black,_transparent)]"
 //It's like placing a stencil over your element — where the mask is black = fully visible, where it's transparent = invisible.

  >

  <div className="flex gap-14 flex-none"
  // Yes. flex-none has a very specific purpose in ticker, carousel, and scrolling layouts.
  //which is equivalent to:
  //flex-grow: 0; flex-shrink: 0; flex-basis: auto;
  >
    <Image src={acmeLogo} alt="Acme Logo"loading="eager"  className="logo-ticker-image"/>
    <Image src={quantumLogo} alt="Quantum Logo" loading="eager" className="logo-ticker-image" />
    <Image src={echologo} alt="Echo Logo" loading="eager" className="logo-ticker-image" />
    <Image src={celestialLogo} alt="Celestial Logo" loading="eager" className="logo-ticker-image" />
    <Image src={pulseLogo} alt="Pulse Logo" loading="eager" className="logo-ticker-image" />
    <Image src={apexLogo} alt="Apex Logo" loading="eager" className="logo-ticker-image" />
  </div>

  </div>

</section>
  );
};
