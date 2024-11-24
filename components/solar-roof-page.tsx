'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Sun, Battery, Home, ChevronDown } from 'lucide-react'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

export function SolarRoofPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const solarAnimationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })

    // Initial page load animation sequence
    const pageLoad = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    pageLoad
      .from(heroRef.current, {
        opacity: 0,
        duration: 1.5,
      })
      .from(textRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
      }, '-=0.8')
      .from(buttonsRef.current?.children || [], {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      }, '-=0.4')

    // Solar animation
    const solarAnimation = gsap.timeline({
      repeat: -1,
      defaults: { ease: 'power1.inOut' }
    })

    solarAnimation
      .to('.sun-ray', {
        scale: 1.2,
        opacity: 0.8,
        duration: 1,
        stagger: 0.1
      })
      .to('.sun-ray', {
        scale: 1,
        opacity: 0.3,
        duration: 1,
        stagger: 0.1
      })

    // Parallax effect for the background
    gsap.to('.parallax-bg', {
      y: '30%',
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      solarAnimation.kill()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#85A5C4] overflow-hidden">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen w-full"
      >
        {/* Background with Parallax */}
        <div 
          className=" absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://www.notateslaapp.com/images/news/2022/solar-roof-2.jpg?height=1080&width=1920')",
            backgroundSize: 'cover',
            transform: 'scale(1.2)',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />

        {/* Solar Animation */}
        <div
          ref={solarAnimationRef}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="sun-ray absolute top-0 left-1/2 w-1 h-20 bg-yellow-400/30 transform -translate-x-1/2"
              style={{
                rotate: `${i * 45}deg`,
                transformOrigin: 'bottom',
              }}
            />
          ))}
        </div>

        {/* Text Content */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-start pt-[15vh] text-white"
        >
          <h1 className="text-7xl font-medium tracking-wide mb-4">Solar Roof</h1>
          <p className="text-2xl font-medium mb-2">
            Produce Clean Energy From Your Roof
          </p>
        </div>

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 w-full max-w-[600px] flex flex-col sm:flex-row gap-4 px-6"
        >
          <button
            className="w-full sm:w-1/2 bg-[#3E6AE1] text-white rounded py-2 px-8 text-sm font-medium 
                     hover:bg-[#3457B1] transition-all duration-300 
                     hover:scale-[1.02] active:scale-[0.98] transform"
          >
            Order Now
          </button>
          <button
            className="w-full sm:w-1/2 bg-white/70 backdrop-blur-md text-gray-900 rounded py-2 px-8 
                     text-sm font-medium hover:bg-white/80 transition-all duration-300
                     hover:scale-[1.02] active:scale-[0.98] transform"
          >
            Learn More
          </button>
        </div>

      </div>
    </div>
  )
}