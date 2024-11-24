'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import { ChevronRight, Github, Linkedin, Twitter } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export function CareersPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const textRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })

    // Initial animation sequence
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
    }).from(buttonRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, '-=0.5')

    // Parallax effect for video
    gsap.to(videoRef.current, {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: videoRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/robotaxi-75-6708a359abdb6.jpg?crop=1xw:1xh;center,top&resize=980:*?height=1080&width=1920"
          alt="Tesla Careers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 p-4">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <svg className="h-6 text-white" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h24v27.9h11.3V7h24.2a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8v14.1h11.3V20.8h24.2v14.1h11.3V20.8h24.2V7H78.3a9.6 9.6 0 0 0 7 7z"
                fill="currentColor"
              />
            </svg>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center items-start px-8 max-w-7xl mx-auto w-full">
          <div ref={textRef} className="max-w-xl">
            <h1 className="text-6xl font-medium text-white mb-8">We Are Tesla</h1>
            <p className="text-xl text-white/80 mb-8">
              Join us in accelerating the world's transition to sustainable energy.
            </p>
            <button
              ref={buttonRef}
              className="bg-white/10 backdrop-blur-md text-white px-8 py-2 rounded-md
                       hover:bg-white/20 transition-all duration-300
                       flex items-center group"
            >
              Join Tesla
              <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <footer>
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm text-center">
              Tesla © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    </div>
  )
}