import { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";

export default function Landing() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const whatsappRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      headingRef.current,
      { y: 60, autoAlpha: 0, rotationX: -90 },
      {
        y: 0,
        autoAlpha: 1,
        rotationX: 0,
        duration: 1.6,
        ease: "expo.out",
      }
    )
      .fromTo(
        paragraphRef.current,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.4,
          ease: "expo.out",
        },
        "-=1.2"
      )
      .fromTo(
        buttonsRef.current.children,
        { y: 30, autoAlpha: 0, scale: 0.9 },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          stagger: 0.1,
          duration: 1.2,
          ease: "expo.out",
        },
        "-=1"
      )
      .fromTo(
        whatsappRef.current,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "expo.out",
        },
        "-=0.8"
      );
  }, []);

  return (
    <main className="relative min-h-screen flex items-center bg-black">
      {/* Desktop Background Video */}
      <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/DESKTOP.mp4"
          type="video/mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none"></div>
      </div>

      {/* Mobile Background Video */}
      <div className="md:hidden absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/mobile.mp4"
          type="video/mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none"></div>
      </div>

      {/* Content */}
      <section className="relative z-10 w-full min-h-screen flex flex-col  justify-end py-4 px-4 md:px-20">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end">
          {/* Text content */}
          <div className="md:max-w-xl">
            <h1
              ref={headingRef}
              className="text-white text-3xl md:text-5xl font-semibold mb-5 leading-tight opacity-0"
            >
              Arrive In Comfort.<br />Every Time.
            </h1>
            <p
              ref={paragraphRef}
              className="text-white text-xs md:text-base mb-10 opacity-0"
            >
              Discreet, Dependable And Impeccably Maintained Vehicles With Professional Chauffeurs.<br />
              Available 24/7 Across Doha.
            </p>

            {/* Action buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col md:flex-row gap-3 md:gap-4 mb-8"
            >
              <a
                href="#book"
                className="text-black px-5 py-3 font-medium rounded-md shadow-sm transition duration-150 text-sm opacity-0 relative overflow-hidden group"
                style={{ backgroundColor: "#CDAF8C" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#bfa271")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#CDAF8C")
                }
              >
                <span className="relative z-10">Book Your Ride</span>
              </a>
              <a
                href="tel:+97400000000"
                className="flex items-center justify-center bg-black/60 text-white px-5 py-3 rounded-md border border-[#cdaf8c] text-sm font-medium opacity-0 relative overflow-hidden group"
              >
                <span className="relative z-10">Our Fleet</span>
                <span className="absolute inset-0 bg-white/5 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
              </a>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
