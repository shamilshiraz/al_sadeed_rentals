import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VisionSection() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      subheadingRef.current,
      { y: 40, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        ease: "expo.out",
      }
    ).fromTo(
      headingRef.current,
      { y: 60, autoAlpha: 0, rotationX: -90 },
      {
        y: 0,
        autoAlpha: 1,
        rotationX: 0,
        duration: 1.6,
        ease: "expo.out",
      },
      "-=0.8"
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] w-full flex items-end  justify-start bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/VISION.png')" }} // background stays fixed
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-20 w-full px-4 md:px-20 pb-8 md:pb-16">
        <div
          ref={subheadingRef}
<<<<<<< HEAD
          className="text-[#CDAF8C] text-xs md:text-sm mb-2 md:mb-4 font-semibold tracking-wide opacity-0"
=======
          className="text-[#CDAF8C] text-xl md:text-2xl mb-2 md:mb-4 font-semibold tracking-wide opacity-0"
>>>>>>> 80db274 (Initial commit)
        >
          OUR VISION
        </div>
        <h2
          ref={headingRef}
<<<<<<< HEAD
          className="text-white text-2xl md:text-5xl font-semibold leading-snug md:leading-tight max-w-xl opacity-0"
=======
          className="text-white text-4xl md:text-5xl font-semibold leading-snug md:leading-tight max-w-xl opacity-0"
>>>>>>> 80db274 (Initial commit)
        >
          The Gold Standard
          <br className="hidden md:inline" /> in Chauffeur Service
        </h2>
      </div>
    </section>
  );
}
