'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

export function Model_3Page() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const car1Ref = useRef<HTMLDivElement>(null)
  const car2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })

    // Initial page load animation
    const pageLoad = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    pageLoad
      .from(heroRef.current, {
        opacity: 0,
        duration: 1.5,
      })
      .from(car1Ref.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
      }, '-=0.8')
      .from(car2Ref.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
      }, '-=1.2')
      .from(textRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      }, '-=0.8')
      .from(buttonsRef.current?.children || [], {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      }, '-=0.4')

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

    // Subtle floating animation for cars
    gsap.to([car1Ref.current, car2Ref.current], {
      y: '+=10',
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    })

    // Clean up animations
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen w-full"
      >
        {/* Background with Parallax */}
        <div 
          className="parallax-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://media.ed.edmunds-media.com/tesla/model-3/2018/oem/2018_tesla_model-3_sedan_performance_fq_oem_2_1280x855.jpg?height=1080&width=1920')",
            backgroundSize: 'cover',
            transform: 'scale(1.2)', // Slightly larger to prevent white edges during parallax
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
        
        {/* Cars */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div ref={car1Ref} className="relative -left-20 transform -translate-x-1/4">
            <img
              src="https://media.ed.edmunds-media.com/tesla/model-3/2018/oem/2018_tesla_model-3_sedan_performance_rq_oem_3_1280x855.jpg?height=400&width=800&text=Model+3+Gray"
              alt=""
              className="w-[600px] object-contain"
            />
          </div>
          <div ref={car2Ref} className="relative left-20 transform translate-x-1/4">
            <img
              src="https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_7_1280x855.jpg?height=400&width=800&text=Model+3+Red"
              alt=""
              className="w-[600px] object-contain"
            />
          </div>
        </div>

        {/* Text Content */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-start pt-[15vh] text-white"
        >
          <h1 className="text-7xl font-medium tracking-wide mb-2">Model 3</h1>
          <p className="text-4xl font-medium mb-2">0% APR Available</p>
          <p className="text-xl font-medium text-white/90">
            Lease Starting at $299/mo<sup className="text-sm">†</sup>
          </p>
        </div>

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 w-full max-w-[600px] flex flex-col sm:flex-row gap-4 px-6"
        >
          <button
            className="w-full sm:w-1/2 bg-[#3E6AE1] text-white rounded py-2 px-8 text-sm font-medium 
                     hover:bg-[#3457B1] transition-colors duration-300 
                     hover:scale-[1.02] active:scale-[0.98] transform"
          >
            Order Now
          </button>
          <button
            className="w-full sm:w-1/2 bg-white/70 backdrop-blur-md text-gray-900 rounded py-2 px-8 
                     text-sm font-medium hover:bg-white/80 transition-colors duration-300
                     hover:scale-[1.02] active:scale-[0.98] transform"
          >
            Demo Drive
          </button>
        </div>

        
      </div>


    </div>
  )
}