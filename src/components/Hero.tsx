import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      image: '/hero-bg.png',
      title: (
        <>
          Business Process Automation and<br />
          Document Management Solution
        </>
      ),
    },
    {
      image: '/home-hosting-slider-1.jpg',
      title: (
        <>
          Information Technology<br />
          Solutions Delivery
        </>
      ),
    },
    {
      image: '/education.jpg',
      title: (
        <>
          Educational Administration and<br />
          Learning Management Solution
        </>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-slate-900">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 mix-blend-screen ${index === currentSlide ? 'opacity-60 z-0' : 'opacity-0 -z-10'
            }`}
          style={{ backgroundImage: `url("${slide.image}")` }}
        ></div>
      ))}

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

      <div className="container mx-auto px-4 h-full relative flex items-center">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-20 w-10 h-10 bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 z-20 w-10 h-10 bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>

        {/* Hero Content */}
        <div className="max-w-3xl ml-12 lg:ml-24 z-10">
          {slides.map((slide, index) => (
            <h1
              key={index}
              className={`text-4xl md:text-5xl font-semibold text-white leading-tight drop-shadow-md absolute top-1/2 -translate-y-1/2 transition-all duration-700 ${index === currentSlide
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8 pointer-events-none'
                }`}
            >
              {slide.title}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

