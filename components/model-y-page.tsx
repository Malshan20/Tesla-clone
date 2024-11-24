'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export function ModelYPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })

    // Parallax effect for the hero image
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })
    }

    // Text animation timeline
    const textAnimation = gsap.timeline({ delay: 0.5 })
    if (textRef.current) {
      textAnimation
        .from(textRef.current.querySelector<HTMLElement>('.model'), {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        })
        .from(textRef.current.querySelector<HTMLElement>('.apr'), {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        }, '-=0.7')
        .from(textRef.current.querySelector<HTMLElement>('.lease'), {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        }, '-=0.7')
    }

    // Buttons animation
    if (buttonsRef.current) {
      gsap.from(buttonsRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 1.5
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-black">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://media.ed.edmunds-media.com/tesla/model-y/2022/oem/2022_tesla_model-y_4dr-suv_performance_rq_oem_2_1280x855.jpg?height=1080&width=1920')",
          backgroundColor: '#85A5C4'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />

        {/* Text Content */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-start pt-[15vh] text-white"
        >
          <h1 className="model text-7xl font-medium mb-2">Model Y</h1>
          <p className="apr text-4xl font-medium mb-2">0% APR Available</p>
          <p className="lease text-xl font-medium text-white/90">
            Lease Starting at $349/mo<sup>†</sup>
          </p>
        </div>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 w-full max-w-[600px] flex flex-col sm:flex-row gap-4 px-6"
        >
          
          <button 
            className="w-full sm:w-1/2 bg-[#3E6AE1] text-white rounded py-2 px-8 text-sm font-medium hover:bg-[#3457B1] transition-colors duration-300"
          >
            Order Now
          
          </button>
          <button
            className="w-full sm:w-1/2 bg-white/70 backdrop-blur-md text-gray-900 rounded py-2 px-8 text-sm font-medium hover:bg-white/80 transition-colors duration-300"
          >
            Demo Drive
          </button>
        </div>
      </div>
    </div>
  )
}