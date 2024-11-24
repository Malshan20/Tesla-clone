'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import { Globe, HelpCircle, User } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export function TeslaHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1549822701-09dcb3dd5ef2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=1080&width=1920',
      title: '0% APR Available',
      buttons: [
        { text: 'Order Model Y', href: '#' },
        { text: 'Order Model 3', href: '#' }
      ]
    },
    {
      image: 'https://hips.hearstapps.com/hmg-prod/images/2020-tesla-model-y-long-range-101-1592842279.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*?height=1080&width=1920',
      title: 'Redefining Mobility',
      buttons: [
        
      ]
    }
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })

    // Header animation
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    }

    // Hero text animation
    const heroAnimation = gsap.timeline()
    if (heroRef.current) {
      heroAnimation
        .from(heroRef.current.querySelector('h1'), {
          y: 50,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        })
        .from(heroRef.current.querySelector('.buttons-container'), {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.5')
    }

    // Automatic slide change
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => {
      clearInterval(slideInterval)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-white">
      {/* Header */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-4"
      >
        <Link href="/" className="text-black">
          <svg className="h-3" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h24v27.9h11.3V7h24.2a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8v14.1h11.3V20.8h24.2v14.1h11.3V20.8h24.2V7H78.3a9.6 9.6 0 0 0 7 7z" fill="currentColor"/>
          </svg>
        </Link>

        <nav className="hidden md:flex space-x-4">
          <Link href="#" className="px-4 py-1 text-sm font-medium text-[#171a20] hover:bg-black/5 rounded">
            Vehicles
          </Link>
          <Link href="#" className="px-4 py-1 text-sm font-medium text-[#171a20] hover:bg-black/5 rounded">
            Energy
          </Link>
          <Link href="#" className="px-4 py-1 text-sm font-medium text-[#171a20] hover:bg-black/5 rounded">
            Charging
          </Link>
          <Link href="#" className="px-4 py-1 text-sm font-medium text-[#171a20] hover:bg-black/5 rounded">
            Discover
          </Link>
          <Link href="#" className="px-4 py-1 text-sm font-medium text-[#171a20] hover:bg-black/5 rounded">
            Shop
          </Link>
          <Link href="#" className="px-4 py-1 text-sm font-medium text-[#171a20] hover:bg-black/5 rounded">
            We, Robot
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-1 hover:bg-black/5 rounded">
            <HelpCircle className="w-6 h-6 text-[#171a20]" />
          </button>
          <button className="p-1 hover:bg-black/5 rounded">
            <Globe className="w-6 h-6 text-[#171a20]" />
          </button>
          <button className="p-1 hover:bg-black/5 rounded">
            <User className="w-6 h-6 text-[#171a20]" />
          </button>
          <button
            className="md:hidden p-1 hover:bg-black/5 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div className="p-4">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="mt-8">
              <div className="flex flex-col space-y-4">
                <Link href="#" className="px-4 py-2 text-sm font-medium text-[#171a20] hover:bg-black/5 rounded">
                  Vehicles
                </Link>
                <Link href="#" className="px-4 py-2 text-sm font-medium text-[#171a20] hover:bg-black/5 rounded">
                  Energy
                </Link>
                <Link href="#" className="px-4 py-2 text-sm font-medium text-[#171a20] hover:bg-black/5 rounded">
                  Charging
                </Link>
                <Link href="#" className="px-4 py-2 text-sm font-medium text-[#171a20] hover:bg-black/5 rounded">
                  Discover
                </Link>
                <Link href="#" className="px-4 py-2 text-sm font-medium text-[#171a20] hover:bg-black/5 rounded">
                  Shop
                </Link>
                <Link href="#" className="px-4 py-2 text-sm font-medium text-[#171a20] hover:bg-black/5 rounded">
                  We, Robot
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main ref={heroRef} className="relative h-screen">
        <div className="relative h-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-between pt-32 pb-20">
                <h1 className="text-5xl font-medium text-[#171a20]">
                  {slide.title}
                </h1>
                <div className="buttons-container flex flex-col sm:flex-row gap-4">
                  {slide.buttons.map((button, buttonIndex) => (
                    <Link
                      key={buttonIndex}
                      href={button.href}
                      className="min-w-[264px] bg-[#171a20]/60 backdrop-blur-md text-white rounded px-6 py-2 text-sm font-medium text-center hover:bg-[#171a20]/70 transition-colors"
                    >
                      {button.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-[#171a20]' : 'bg-[#171a20]/30'
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}