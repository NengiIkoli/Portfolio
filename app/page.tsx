"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
  Palette,
  Code,
  PenTool,
  Cloud,
  Sun,
  CloudRain,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  Briefcase,
} from "lucide-react"

export default function Home() {
  console.log("Page component rendering")
  const [activeSection, setActiveSection] = useState("home")
  const [weatherIcon, setWeatherIcon] = useState<"sun" | "cloud" | "rain">("sun")
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    education: false,
    services: false,
    projects: false,
    contact: false,
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }))
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = ["education", "services", "projects", "contact"]
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  // Weather icon animation
  useEffect(() => {
    const interval = setInterval(() => {
      setWeatherIcon((prev) => {
        if (prev === "sun") return "cloud"
        if (prev === "cloud") return "rain"
        return "sun"
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Typewriter effect state
  const rotatingTexts = ["UI/UX Designer", "Front End Developer", "Web Developer"]
  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  // Typewriter effect
  useEffect(() => {
    const currentText = rotatingTexts[textIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentText.substring(0, displayText.length + 1))

        // If we've typed the full word
        if (displayText.length === currentText.length) {
          // Pause at the end of the word
          setTypingSpeed(2000) // Pause for 2 seconds
          setIsDeleting(true)
        } else {
          // Normal typing speed
          setTypingSpeed(100 - Math.random() * 50)
        }
      } else {
        // Deleting
        setDisplayText(currentText.substring(0, displayText.length - 1))

        // If we've deleted the whole word
        if (displayText.length === 0) {
          setIsDeleting(false)
          setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
          setTypingSpeed(500) // Pause before typing the next word
        } else {
          // Faster when deleting
          setTypingSpeed(50)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, textIndex, rotatingTexts, typingSpeed])

  // Track scroll position for active navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "education", "services", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#051428] via-[#0a2547] to-[#0f3166] text-gray-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#051428]/90 to-[#0a2547]/90 backdrop-blur-md border-b border-gray-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xl md:text-2xl cursor-pointer group transition-all duration-300 hover:scale-105">
            <span className="text-gray-300 font-bold group-hover:text-white transition-colors duration-300">nengi</span>
            <span className="text-[#4d8bf5] font-bold relative transition-all duration-300">
              {/* Blue glow effect that intensifies on hover */}
              <span className="absolute inset-0 text-[#4d8bf5] blur-[1px] opacity-50 group-hover:blur-[2px] group-hover:opacity-70 transition-all duration-300">
                ikoli
              </span>
              <span className="absolute inset-0 text-[#4d8bf5] blur-[3px] opacity-0 group-hover:opacity-40 transition-all duration-300">
                ikoli
              </span>
              <span className="relative z-10 group-hover:text-[#5d9bff] transition-colors duration-300">ikoli</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-sm font-bold hover:text-[#a8c5ff] transition-colors relative ${activeSection === "home" ? "text-[#a8c5ff]" : "text-gray-400"}`}
            >
              Home
              {activeSection === "home" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#a8c5ff] rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className={`text-sm font-bold hover:text-[#a8c5ff] transition-colors relative ${activeSection === "education" ? "text-[#a8c5ff]" : "text-gray-400"}`}
            >
              Education
              {activeSection === "education" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#a8c5ff] rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`text-sm font-bold hover:text-[#a8c5ff] transition-colors relative ${activeSection === "services" ? "text-[#a8c5ff]" : "text-gray-400"}`}
            >
              Services
              {activeSection === "services" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#a8c5ff] rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-sm font-bold hover:text-[#a8c5ff] transition-colors relative ${activeSection === "projects" ? "text-[#a8c5ff]" : "text-gray-400"}`}
            >
              Projects
              {activeSection === "projects" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#a8c5ff] rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-bold hover:text-[#a8c5ff] transition-colors relative ${activeSection === "contact" ? "text-[#a8c5ff]" : "text-gray-400"}`}
            >
              Contact
              {activeSection === "contact" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#a8c5ff] rounded-full"></span>
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-[#051428] to-[#0a2547] border-b border-gray-500/20 py-4 px-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  scrollToSection("home")
                  setMobileMenuOpen(false)
                }}
                className={`text-sm font-bold py-2 px-4 rounded-md ${activeSection === "home" ? "bg-[#4d8bf5]/20 text-[#a8c5ff]" : "text-gray-400"}`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  scrollToSection("education")
                  setMobileMenuOpen(false)
                }}
                className={`text-sm font-bold py-2 px-4 rounded-md ${activeSection === "education" ? "bg-[#4d8bf5]/20 text-[#a8c5ff]" : "text-gray-400"}`}
              >
                Education
              </button>
              <button
                onClick={() => {
                  scrollToSection("services")
                  setMobileMenuOpen(false)
                }}
                className={`text-sm font-bold py-2 px-4 rounded-md ${activeSection === "services" ? "bg-[#4d8bf5]/20 text-[#a8c5ff]" : "text-gray-400"}`}
              >
                Services
              </button>
              <button
                onClick={() => {
                  scrollToSection("projects")
                  setMobileMenuOpen(false)
                }}
                className={`text-sm font-bold py-2 px-4 rounded-md ${activeSection === "projects" ? "bg-[#4d8bf5]/20 text-[#a8c5ff]" : "text-gray-400"}`}
              >
                Projects
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact")
                  setMobileMenuOpen(false)
                }}
                className={`text-sm font-bold py-2 px-4 rounded-md ${activeSection === "contact" ? "bg-[#4d8bf5]/20 text-[#a8c5ff]" : "text-gray-400"}`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1 pt-16">
        <section id="home" className="container mx-auto px-4 py-20 md:py-32 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating particles */}
            <div className="absolute w-4 h-4 rounded-full bg-[#4d8bf5]/20 top-1/4 left-1/4 animate-pulse-slow"></div>
            <div
              className="absolute w-6 h-6 rounded-full bg-[#4d8bf5]/10 top-3/4 left-1/3 animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute w-3 h-3 rounded-full bg-[#4d8bf5]/15 top-1/2 left-2/3 animate-pulse-slow"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute w-5 h-5 rounded-full bg-[#4d8bf5]/10 top-1/3 left-3/4 animate-pulse-slow"
              style={{ animationDelay: "1.5s" }}
            ></div>

            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-[#4d8bf5]/20 to-transparent blur-3xl animate-pulse-slow"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-[#a8c5ff]/10 to-transparent blur-3xl animate-pulse-slow"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
              {/* Animated greeting */}
              <div className="overflow-hidden">
                <h2
                  className="text-lg md:text-xl text-[#8ba9e0] transform translate-y-0 opacity-100 transition-all duration-700 ease-out"
                  style={{ animation: "slideInUp 0.7s ease-out" }}
                >
                  Welcome to my portfolio
                </h2>
              </div>

              <div className="font-bold space-y-2">
                <div className="overflow-hidden">
                  <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#a8c5ff] transform translate-y-0 opacity-100 transition-all duration-700 delay-300 ease-out pb-2"
                    style={{ animation: "slideInUp 0.7s ease-out 0.3s both" }}
                  >
                    Hi, it's Nengi
                  </h1>
                </div>

                <div className="mt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start h-20 sm:h-16 md:h-auto">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#8ba9e0]">I'm a</span>
                  <div className="relative ml-0 sm:ml-3 inline-block min-w-[200px]">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-200">{displayText}</span>
                    <span className="inline-block w-1 h-6 sm:h-8 bg-gray-300 animate-blink ml-1 align-middle"></span>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden">
                <p
                  className="text-sm md:text-base text-gray-300 max-w-md mx-auto md:mx-0 transform translate-y-0 opacity-100 transition-all duration-700 delay-600 ease-out"
                  style={{ animation: "slideInUp 0.7s ease-out 0.6s both" }}
                >
                  Based in Washington DC, I create engaging digital experiences with a focus on user-centered design. My
                  passion lies in crafting intuitive interfaces and building responsive web applications that deliver
                  exceptional user experiences.
                </p>
              </div>

              <div
                className="flex justify-center md:justify-start gap-6 items-center -mt-1 overflow-hidden transform translate-y-0 opacity-100 transition-all duration-700 delay-900 ease-out"
                style={{ animation: "slideInUp 0.7s ease-out 0.9s both" }}
              >
                <Link
                  href="https://github.com/NengiIkoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700/50 rounded-full flex items-center justify-center relative overflow-hidden">
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#4d8bf5]/0 group-hover:border-[#4d8bf5]/50 transition-all duration-500"></div>

                    {/* Ripple effect on hover */}
                    <div className="absolute inset-0 scale-0 rounded-full bg-[#4d8bf5]/10 group-hover:scale-150 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100"></div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-[#4d8bf5]/0 group-hover:bg-[#4d8bf5]/20 blur-md transition-all duration-500"></div>

                    <Github className="w-5 h-5 md:w-6 md:h-6 text-gray-300 relative z-10 group-hover:text-white transition-colors duration-300" />
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ayebanengiyefaikoli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700/50 rounded-full flex items-center justify-center relative overflow-hidden">
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#4d8bf5]/0 group-hover:border-[#4d8bf5]/50 transition-all duration-500"></div>

                    {/* Ripple effect on hover */}
                    <div className="absolute inset-0 scale-0 rounded-full bg-[#4d8bf5]/10 group-hover:scale-150 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100"></div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-[#4d8bf5]/0 group-hover:bg-[#4d8bf5]/20 blur-md transition-all duration-500"></div>

                    <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-gray-300 relative z-10 group-hover:text-white transition-colors duration-300" />
                  </div>
                </Link>
                <Link href="mailto:ikolinengi@gmail.com" className="transition-all duration-300 hover:scale-110 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700/50 rounded-full flex items-center justify-center relative overflow-hidden">
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#4d8bf5]/0 group-hover:border-[#4d8bf5]/50 transition-all duration-500"></div>

                    {/* Ripple effect on hover */}
                    <div className="absolute inset-0 scale-0 rounded-full bg-[#4d8bf5]/10 group-hover:scale-150 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100"></div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-[#4d8bf5]/0 group-hover:bg-[#4d8bf5]/20 blur-md transition-all duration-500"></div>

                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-gray-300 relative z-10 group-hover:text-white transition-colors duration-300" />
                  </div>
                </Link>
              </div>

              <div
                className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6 pt-2 overflow-hidden transform translate-y-0 opacity-100 transition-all duration-700 delay-1200 ease-out"
                style={{ animation: "slideInUp 0.7s ease-out 1.2s both" }}
              >
                <button
                  className="relative overflow-hidden bg-[#4d8bf5] text-white px-6 sm:px-8 py-3 rounded-md transition-all duration-500 hover:bg-[#3a78e0] group"
                  onClick={() => scrollToSection("contact")}
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>

                  <span className="relative z-10 font-medium">Hire Me</span>
                </button>
                <a
                  href="https://docs.google.com/document/d/1ZsqmOXsUweQ3zUFR_glKfU9Kz3k5Md4B/edit?usp=sharing&ouid=108781881912085245396&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden border-2 border-[#4d8bf5] text-gray-200 px-6 sm:px-8 py-3 rounded-md transition-all duration-500 hover:border-[#3a78e0] group inline-block text-center"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>

                  <span className="relative z-10 font-medium">View Resume</span>
                </a>
              </div>
            </div>

            <div
              className="md:w-1/2 flex justify-center mt-12 md:mt-0 transform translate-y-0 opacity-100 transition-all duration-700 delay-1500 ease-out"
              style={{ animation: "fadeIn 1s ease-out 1.5s both" }}
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
                {/* Animated orbital rings */}
                <div
                  className="absolute inset-0 -m-6 sm:-m-8 md:-m-10 rounded-full border-2 border-[#4d8bf5]/20 animate-spin-slow"
                  style={{ animationDuration: "20s" }}
                ></div>
                <div
                  className="absolute inset-0 -m-4 sm:-m-5 md:-m-6 rounded-full border-2 border-[#4d8bf5]/10 animate-spin-slow"
                  style={{ animationDuration: "15s", animationDirection: "reverse" }}
                ></div>

                {/* Glowing aura */}
                <div className="absolute inset-0 rounded-full bg-[#4d8bf5]/10 blur-2xl animate-pulse-slow"></div>

                {/* Glowing border effect */}
                <div className="absolute inset-0 -m-1 rounded-full bg-gradient-to-r from-[#4d8bf5]/60 to-[#a8c5ff]/60 blur-md animate-pulse-slow"></div>

                {/* Profile image */}
                <div className="absolute inset-0 m-3 rounded-full overflow-hidden border-4 border-[#4d8bf5]/70 z-10">
                  <img
                    src="/images/profile.png"
                    alt="Nengi portrait"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator - Fixed positioning to avoid overlapping with profile pic */}
          <div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            onClick={() => scrollToSection("education")}
          >
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce-slow mt-1"></div>
            </div>
          </div>
        </section>

        <section id="education" className="py-20 bg-[#051428]/50 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#4d8bf5]/5 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#4d8bf5]/5 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div
              className={`transition-all duration-1000 transform ${visibleSections.education ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="text-center mb-16 relative">
                <h2 className="text-5xl font-bold text-gray-200 inline-block relative">
                  Education
                  <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a8c5ff] to-transparent"></div>
                </h2>
                <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                  My academic journey has equipped me with a diverse skill set, combining creative design principles
                  with technical expertise.
                </p>
              </div>

              {/* Mobile-optimized timeline */}
              <div className="max-w-4xl mx-auto relative">
                {/* Timeline vertical line with animated gradient */}
                <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4d8bf5] via-[#a8c5ff] to-[#4d8bf5] animate-pulse-slow z-10"></div>

                {/* Timeline items - Mobile optimized */}
                <div className="space-y-20 sm:space-y-24 relative">
                  {/* 2022 - Bachelors */}
                  <div className="flex flex-col sm:flex-row sm:items-center relative group pl-12 sm:pl-0">
                    {/* Timeline dot and year marker - Mobile optimized */}
                    <div className="absolute left-0 sm:left-1/2 top-0 sm:transform sm:-translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-[#a8c5ff] z-20 shadow-[0_0_15px_rgba(168,197,255,0.7)] flex items-center justify-center border-4 border-[#051428] group-hover:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
                      </div>
                      <div className="absolute left-10 sm:-right-16 top-0 sm:top-0 text-white font-bold text-xl whitespace-nowrap">
                        2022
                      </div>
                    </div>

                    {/* Content box - Mobile optimized */}
                    <div className="w-full sm:w-[45%] relative mt-2 sm:mt-0">
                      <div className="relative bg-[#051428]/80 backdrop-blur-sm rounded-[30px] p-6 sm:p-8 border border-[#a8c5ff] shadow-[0_0_15px_rgba(168,197,255,0.3)] z-10 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(168,197,255,0.5)] group-hover:translate-x-2">
                        <div className="absolute top-4 right-4 text-[#a8c5ff] opacity-20">
                          <Award className="w-10 h-10 sm:w-12 sm:h-12" />
                        </div>
                        <div className="flex items-start mb-4">
                          <Calendar className="w-5 h-5 text-[#a8c5ff] mr-2 mt-1" />
                          <span className="text-[#a8c5ff] font-medium">2018 - 2022</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                          Bachelors of Arts in Interior Architecture
                        </h3>
                        <div className="flex items-start mb-4">
                          <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-1" />
                          <span className="text-gray-300">The George Washington University</span>
                        </div>
                        <p className="text-gray-400 text-sm sm:text-base">
                          Developed a strong foundation in design principles, spatial awareness, and creative
                          problem-solving.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2025 - Path2TECH */}
                  <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center relative group pl-12 sm:pl-0">
                    {/* Timeline dot and year marker - Mobile optimized */}
                    <div className="absolute left-0 sm:left-1/2 top-0 sm:transform sm:-translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-[#a8c5ff] z-20 shadow-[0_0_15px_rgba(168,197,255,0.7)] flex items-center justify-center border-4 border-[#051428] group-hover:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
                      </div>
                      <div className="absolute left-10 sm:-left-16 top-0 sm:top-0 text-white font-bold text-xl whitespace-nowrap">
                        2025
                      </div>
                    </div>

                    {/* Content box - Mobile optimized */}
                    <div className="w-full sm:w-[45%] relative mt-2 sm:mt-0">
                      <div className="relative bg-[#051428]/80 backdrop-blur-sm rounded-[30px] p-6 sm:p-8 border border-[#a8c5ff] shadow-[0_0_15px_rgba(168,197,255,0.3)] z-10 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(168,197,255,0.5)] group-hover:-translate-x-2">
                        <div className="absolute top-4 right-4 text-[#a8c5ff] opacity-20">
                          <Code className="w-10 h-10 sm:w-12 sm:h-12" />
                        </div>
                        <div className="flex items-start mb-4">
                          <Calendar className="w-5 h-5 text-[#a8c5ff] mr-2 mt-1" />
                          <span className="text-[#a8c5ff] font-medium">2024 - 2025</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                          Path2TECH Full Stack Developer Program
                        </h3>
                        <div className="flex items-start mb-4">
                          <Briefcase className="w-5 h-5 text-gray-400 mr-2 mt-1" />
                          <span className="text-gray-300">NPower | Professional Certification</span>
                        </div>
                        <p className="text-gray-400 text-sm sm:text-base">
                          Comprehensive training in modern web development technologies including React, JavaScript,
                          HTML/CSS, and backend technologies.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2026 - Masters */}
                  <div className="flex flex-col sm:flex-row sm:items-center relative group pl-12 sm:pl-0">
                    {/* Timeline dot and year marker - Mobile optimized */}
                    <div className="absolute left-0 sm:left-1/2 top-0 sm:transform sm:-translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-[#a8c5ff] z-20 shadow-[0_0_15px_rgba(168,197,255,0.7)] flex items-center justify-center border-4 border-[#051428] group-hover:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
                      </div>
                      <div className="absolute left-10 sm:-right-16 top-0 sm:top-0 text-white font-bold text-xl whitespace-nowrap">
                        2026
                      </div>
                    </div>

                    {/* Content box - Mobile optimized */}
                    <div className="w-full sm:w-[45%] relative mt-2 sm:mt-0">
                      <div className="relative bg-[#051428]/80 backdrop-blur-sm rounded-[30px] p-6 sm:p-8 border border-[#a8c5ff] shadow-[0_0_15px_rgba(168,197,255,0.3)] z-10 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(168,197,255,0.5)] group-hover:translate-x-2">
                        <div className="absolute top-4 right-4 text-[#a8c5ff] opacity-20">
                          <Award className="w-10 h-10 sm:w-12 sm:h-12" />
                        </div>
                        <div className="flex items-start mb-4">
                          <Calendar className="w-5 h-5 text-[#a8c5ff] mr-2 mt-1" />
                          <span className="text-[#a8c5ff] font-medium">2024 - 2026</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                          Masters of Science in Engineering
                        </h3>
                        <div className="flex items-start mb-4">
                          <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-1" />
                          <span className="text-gray-300">Grand Canyon University</span>
                        </div>
                        <p className="text-gray-400 text-sm sm:text-base">
                          Advanced studies focusing on engineering principles and technical innovation in digital
                          systems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-black relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0a2547]/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#0a2547]/20 to-transparent"></div>

            {/* Animated dots */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#a8c5ff]/30 animate-pulse-slow"></div>
              <div
                className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-[#a8c5ff]/30 animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-[#a8c5ff]/30 animate-pulse-slow"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-[#a8c5ff]/30 animate-pulse-slow"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div
              className={`transition-all duration-1000 transform ${visibleSections.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="text-center mb-16 relative">
                <h2 className="text-5xl font-bold text-white inline-block relative">
                  Services
                  <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a8c5ff] to-transparent"></div>
                </h2>
                <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                  I offer a range of specialized services to help bring your digital vision to life with creativity and
                  technical excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {/* UI/UX Design */}
                <div className="relative group perspective">
                  <div className="relative bg-gradient-to-br from-[#051428] to-[#0a2547] rounded-xl overflow-hidden transition-all duration-500 transform group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_rgba(168,197,255,0.3)]">
                    {/* Glowing border */}
                    <div className="absolute inset-0 border-2 border-[#a8c5ff]/0 group-hover:border-[#a8c5ff]/50 rounded-xl transition-all duration-500"></div>

                    {/* Animated background */}
                    <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

                    <div className="p-8 relative z-10">
                      {/* Icon container with glow */}
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#051428] to-[#0a2547] border-2 border-[#a8c5ff]/50 flex items-center justify-center mb-6 mx-auto relative group-hover:shadow-[0_0_20px_rgba(168,197,255,0.4)] transition-all duration-500">
                        <Palette className="w-10 h-10 text-[#a8c5ff]" />
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-white text-center">UI/UX Design</h3>

                      {/* Skills/Tools list */}
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        <span className="px-3 py-1 bg-[#0a2547] text-[#a8c5ff] rounded-full text-xs font-medium group-hover:bg-[#051428] transition-colors duration-300">
                          Figma
                        </span>
                        <span className="px-3 py-1 bg-[#0a2547] text-[#a8c5ff] rounded-full text-xs font-medium group-hover:bg-[#051428] transition-colors duration-300">
                          Adobe XD
                        </span>
                        <span className="px-3 py-1 bg-[#0a2547] text-[#a8c5ff] rounded-full text-xs font-medium group-hover:bg-[#051428] transition-colors duration-300">
                          Sketch
                        </span>
                        <span className="px-3 py-1 bg-[#0a2547] text-[#a8c5ff] rounded-full text-xs font-medium group-hover:bg-[#051428] transition-colors duration-300">
                          Wireframing
                        </span>
                        <span className="px-3 py-1 bg-[#0a2547] text-[#a8c5ff] rounded-full text-xs font-medium group-hover:bg-[#051428] transition-colors duration-300">
                          Prototyping
                        </span>
                      </div>

                      <p className="text-gray-400 text-center mb-6">
                        Creating intuitive and engaging user interfaces with a focus on user experience and
                        accessibility. Designing responsive layouts that work seamlessly across all devices.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Front-End Development */}
                <div className="relative group perspective">
                  <div className="relative bg-gradient-to-br from-[#051428] to-[#0a2547] rounded-xl overflow-hidden transition-all duration-500 transform group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_rgba(168,197,255,0.3)]">
                    {/* Glowing border */}
                    <div className="absolute inset-0 border-2 border-[#a8c5ff]/0 group-hover:border-[#a8c5ff]/50 rounded-xl transition-all duration-500"></div>

                    {/* Animated background */}
                    <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

                    <div className="p-8 relative z-10">
                      {/* Icon container with glow */}
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#051428] to-[#0a2547] border-2 border-[#a8c5ff]/50 flex items-center justify-center mb-6 mx-auto relative group-hover:shadow-[0_0_20px_rgba(168,197,255,0.4)] transition-all duration-500">
                        <Code className="w-10 h-10 text-[#a8c5ff]" />
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-white text-center">Front-End Development</h3>

                      {/* Skills/Tools list */}
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        <span className="px-3 py-1 bg-[#0a2547] text-[#a8c5ff] rounded-full text-xs font-medium group-hover:bg-[#051428] transition-colors duration-300">
                          React
                        </span>
                        <span className="px-3 py-1 bg-[#0a2547] text-[#a8c5ff] rounded-full text-xs font-medium group-hover:bg-[#051428] transition-colors duration-300">
                          Next.js
                        </span>
                        <span className="px-3 py-1 bg-[#0a2547] text-[#a8c5ff] rounded-full text-xs font-medium group-hover:bg-[#051428] transition-colors duration-300">
                          JavaScript
                        </span>
                        <span className="px-3 py-1 bg-[#0a2547] text-[#a8c5ff] rounded-full text-xs font-medium group-hover:bg-[#051428] transition-colors duration-300">
                          TypeScript
                        </span>
                        <span className="px-3 py-1 bg-[#0a2547] text-[#a8c5ff] rounded-full text-xs font-medium group-hover:bg-[#051428] transition-colors duration-300">
                          Tailwind CSS
                        </span>
                      </div>

                      <p className="text-gray-400 text-center mb-6">
                        Building responsive and performant websites using modern frameworks and best practices.
                        Implementing pixel-perfect designs with clean, maintainable code.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Graphic Design */}
                <div className="relative group perspective">
                  <div className="relative bg-gradient-to-br from-[#051428] to-[#0a2547] rounded-xl overflow-hidden transition-all duration-500 transform group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_rgba(168,197,255,0.3)]">
                    {/* Glowing border */}
                    <div className="absolute inset-0 border-2 border-[#a8c5ff]/0 group-hover:border-[#a8c5ff]/50 rounded-xl transition-all duration-500"></div>

                    {/* Animated background */}
                    <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

                    <div className="p-8 relative z-10">
                      {/* Icon container with glow */}
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#051428] to-[#0a2547] border-2 border-[#a8c5ff]/50 flex items-center justify-center mb-6 mx-auto relative group-hover:shadow-[0_0_20px_rgba(168,197,255,0.4)] transition-all duration-500">
                        <PenTool className="w-10 h-10 text-[#a8c5ff]" />
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-white text-center">Graphic Design</h3>

                      {/* Skills/Tools list */}
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        <span className="px-3 py-1 bg-[#0a2547] text-[#a8c5ff] rounded-full text-xs font-medium group-hover:bg-[#051428] transition-colors duration-300">
                          Photoshop
                        </span>
                        <span className="px-3 py-1 bg-[#0a2547] text-[#a8c5ff] rounded-full text-xs font-medium group-hover:bg-[#051428] transition-colors duration-300">
                          Illustrator
                        </span>
                        <span className="px-3 py-1 bg-[#0a2547] text-[#a8c5ff] rounded-full text-xs font-medium group-hover:bg-[#051428] transition-colors duration-300">
                          InDesign
                        </span>
                        <span className="px-3 py-1 bg-[#0a2547] text-[#a8c5ff] rounded-full text-xs font-medium group-hover:bg-[#051428] transition-colors duration-300">
                          Branding
                        </span>
                        <span className="px-3 py-1 bg-[#0a2547] text-[#a8c5ff] rounded-full text-xs font-medium group-hover:bg-[#051428] transition-colors duration-300">
                          Typography
                        </span>
                      </div>

                      <p className="text-gray-400 text-center mb-6">
                        Creating visually stunning graphics, logos, and marketing materials that capture your brand's
                        essence. Designing cohesive visual identities that communicate effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-[#051428]/50 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>
            <div className="absolute top-1/3 right-0 w-1/2 h-full bg-gradient-to-l from-[#4d8bf5]/5 to-transparent blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#4d8bf5]/5 to-transparent blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div
              className={`transition-all duration-1000 transform ${visibleSections.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="text-center mb-12 relative">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-200 inline-block relative">
                  My Projects
                  <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a8c5ff] to-transparent"></div>
                </h2>
                <p className="text-gray-400 mt-6 max-w-2xl mx-auto px-4">
                  Explore my portfolio of projects showcasing my skills in web development, design, and problem-solving.
                </p>
              </div>

              {/* Project Categories - Mobile optimized */}
              <div className="flex justify-center gap-2 sm:gap-3 mb-10 flex-wrap px-2">
                <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#0a2547]/80 text-[#a8c5ff] rounded-full text-xs sm:text-sm font-medium border border-[#4d8bf5]/30 hover:bg-[#0a2547] hover:border-[#4d8bf5]/60 transition-all">
                  All Projects
                </button>
                <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-transparent text-gray-400 rounded-full text-xs sm:text-sm font-medium border border-gray-500/30 hover:bg-[#0a2547]/50 hover:text-[#a8c5ff] hover:border-[#4d8bf5]/30 transition-all">
                  React
                </button>
                <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-transparent text-gray-400 rounded-full text-xs sm:text-sm font-medium border border-gray-500/30 hover:bg-[#0a2547]/50 hover:text-[#a8c5ff] hover:border-[#4d8bf5]/30 transition-all">
                  JavaScript
                </button>
                <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-transparent text-gray-400 rounded-full text-xs sm:text-sm font-medium border border-gray-500/30 hover:bg-[#0a2547]/50 hover:text-[#a8c5ff] hover:border-[#4d8bf5]/30 transition-all">
                  HTML/CSS
                </button>
              </div>

              {/* Featured Project - Mobile optimized */}
              <div className="mb-12 perspective">
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0c2c5a] to-[#051428]/90 border border-[#4d8bf5]/30 shadow-lg shadow-[#4d8bf5]/5 transition-all duration-500 hover:shadow-xl hover:shadow-[#4d8bf5]/10 hover:border-[#4d8bf5]/50">
                  <div className="absolute top-4 left-4 bg-[#4d8bf5] text-white px-3 py-1 rounded-full text-xs font-medium z-20">
                    Featured Project
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 p-6 sm:p-8">
                    <div className="overflow-hidden rounded-lg group-hover:shadow-lg transition-all duration-500 h-[250px] sm:h-[300px] md:h-auto">
                      {/* Weather App Preview with animated weather elements */}
                      <div className="relative w-full h-full bg-gradient-to-b from-[#0c2c5a] to-[#051428] overflow-hidden border border-[#4d8bf5]/20 rounded-lg">
                        {/* Animated weather elements */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                          <div className="absolute top-2 right-2 z-20">
                            {weatherIcon === "sun" && (
                              <Sun className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300 animate-pulse-slow" />
                            )}
                            {weatherIcon === "cloud" && (
                              <Cloud className="w-8 h-8 sm:w-10 sm:h-10 text-gray-300 animate-pulse-slow" />
                            )}
                            {weatherIcon === "rain" && (
                              <CloudRain className="w-8 h-8 sm:w-10 sm:h-10 text-blue-300 animate-pulse-slow" />
                            )}
                          </div>

                          {/* Animated clouds */}
                          <div className="absolute top-4 left-4 opacity-20 animate-pulse-slow">
                            <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div
                            className="absolute top-10 right-10 opacity-30 animate-pulse-slow"
                            style={{ animationDelay: "1s" }}
                          >
                            <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                        </div>

                        {/* Mock weather app interface */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[220px] sm:max-w-[280px] bg-[#051428]/80 rounded-lg p-4 sm:p-5 border border-[#4d8bf5]/30 shadow-lg">
                          <div className="text-center mb-2 sm:mb-3">
                            <p className="text-[#a8c5ff] text-xs sm:text-sm">React Weather Application</p>
                          </div>
                          <div className="flex justify-center mb-3 sm:mb-4">
                            <div className="relative w-full">
                              <input
                                type="text"
                                className="w-full bg-[#0a2547] border border-[#4d8bf5]/50 rounded-md py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm text-gray-200 focus:outline-none focus:border-[#4d8bf5]/70 transition-colors"
                                placeholder="Enter city, zip, or landmark..."
                                readOnly
                              />
                              <button className="absolute right-1 top-1 bg-[#FF9500] text-black px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs">
                                Search
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center bg-[#0a2547]/80 rounded-lg p-2 sm:p-3 mb-2 sm:mb-3">
                            <div>
                              <p className="text-white text-lg sm:text-xl font-bold">74°F</p>
                              <p className="text-gray-400 text-[10px] sm:text-xs">Washington DC</p>
                            </div>
                            <Sun className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
                          </div>
                          <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center">
                            <div className="bg-[#0a2547]/60 p-1 sm:p-2 rounded">
                              <p className="text-white text-[10px] sm:text-xs">Mon</p>
                              <Cloud className="w-4 h-4 sm:w-5 sm:h-5 mx-auto my-1 text-gray-300" />
                              <p className="text-white text-[10px] sm:text-xs">68°</p>
                            </div>
                            <div className="bg-[#0a2547]/60 p-1 sm:p-2 rounded">
                              <p className="text-white text-[10px] sm:text-xs">Tue</p>
                              <Sun className="w-4 h-4 sm:w-5 sm:h-5 mx-auto my-1 text-yellow-300" />
                              <p className="text-white text-[10px] sm:text-xs">72°</p>
                            </div>
                            <div className="bg-[#0a2547]/60 p-1 sm:p-2 rounded">
                              <p className="text-white text-[10px] sm:text-xs">Wed</p>
                              <CloudRain className="w-4 h-4 sm:w-5 sm:h-5 mx-auto my-1 text-blue-300" />
                              <p className="text-white text-[10px] sm:text-xs">65°</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-[#4d8bf5]/20 text-[#a8c5ff] rounded text-xs">React</span>
                        <span className="px-2 py-1 bg-[#4d8bf5]/20 text-[#a8c5ff] rounded text-xs">
                          API Integration
                        </span>
                        <span className="px-2 py-1 bg-[#4d8bf5]/20 text-[#a8c5ff] rounded text-xs">
                          Responsive Design
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Weather Application</h3>

                      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                        A React-based weather application that provides real-time weather information with a sleek,
                        intuitive interface. Users can search for locations, view current conditions, and check the
                        5-day forecast. The app features dynamic themes that change based on weather conditions.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3 mt-2">
                        <a
                          href="https://nengiikoli.github.io/Weather-React-Project/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative overflow-hidden group flex items-center justify-center gap-2 bg-[#4d8bf5] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-xs sm:text-sm transition-all duration-300 hover:bg-[#3a78e0]"
                        >
                          <span>View Live Demo</span>
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                          {/* Button shine effect */}
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
                        </a>

                        <a
                          href="https://github.com/NengiIkoli/Weather-React-Project"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 border border-[#4d8bf5]/50 text-gray-200 px-4 sm:px-6 py-2 sm:py-3 rounded-md text-xs sm:text-sm transition-all duration-300 hover:bg-[#0a2547] hover:text-white group"
                        >
                          <span>View Source Code</span>
                          <Github className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* UI/UX Portfolio Case Studies - Mobile optimized */}
              <div className="mb-12 perspective">
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0c2c5a] to-[#051428]/90 border border-[#4d8bf5]/30 shadow-lg shadow-[#4d8bf5]/5 transition-all duration-500 hover:shadow-xl hover:shadow-[#4d8bf5]/10 hover:border-[#4d8bf5]/50">
                  <div className="absolute top-4 left-4 bg-[#4d8bf5] text-white px-3 py-1 rounded-full text-xs font-medium z-20">
                    UI/UX Case Studies
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 p-6 sm:p-8">
                    <div className="overflow-hidden rounded-lg group-hover:shadow-lg transition-all duration-500 h-[250px] sm:h-[300px] md:h-auto">
                      {/* UI/UX Portfolio Preview */}
                      <div className="relative w-full h-full bg-gradient-to-b from-[#0c2c5a] to-[#051428] overflow-hidden border border-[#4d8bf5]/20 rounded-lg">
                        {/* Design elements background */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-5 left-5 w-16 sm:w-20 h-16 sm:h-20 border-2 border-[#4d8bf5]/30 rounded-lg transform rotate-12"></div>
                          <div className="absolute bottom-10 right-10 w-12 sm:w-16 h-12 sm:h-16 border-2 border-[#4d8bf5]/30 rounded-full"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-24 sm:h-32 border-2 border-[#4d8bf5]/30 rounded-lg transform -rotate-12"></div>
                        </div>

                        {/* Portfolio mockup */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[220px] sm:max-w-[280px] bg-white rounded-lg overflow-hidden shadow-xl">
                          {/* Header */}
                          <div className="bg-gray-800 p-1.5 sm:p-2 flex justify-between items-center">
                            <div className="flex space-x-1">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"></div>
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500"></div>
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-white text-[10px] sm:text-xs">UI/UX Portfolio</div>
                            <div className="w-3 sm:w-4"></div>
                          </div>

                          {/* Content */}
                          <div className="p-2 sm:p-3">
                            {/* Navigation */}
                            <div className="flex justify-between text-[8px] sm:text-xs text-gray-600 mb-2 sm:mb-3 border-b pb-1 sm:pb-2">
                              <span className="font-medium">Home</span>
                              <span>Projects</span>
                              <span>About</span>
                              <span>Contact</span>
                            </div>

                            {/* Project preview */}
                            <div className="mb-2 sm:mb-3">
                              <div className="text-[10px] sm:text-sm font-bold text-gray-800 mb-1">Case Studies</div>
                              <div className="bg-gray-100 rounded-lg p-1.5 sm:p-2 mb-1.5 sm:mb-2">
                                <div className="h-8 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md mb-1"></div>
                                <div className="text-[8px] sm:text-xs font-medium">Groove Media App</div>
                                <div className="text-[6px] sm:text-[10px] text-gray-500">Music Streaming UX Design</div>
                              </div>
                              <div className="bg-gray-100 rounded-lg p-1.5 sm:p-2">
                                <div className="h-8 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-md mb-1"></div>
                                <div className="text-[8px] sm:text-xs font-medium">Savr Recipe App</div>
                                <div className="text-[6px] sm:text-[10px] text-gray-500">Food App Redesign</div>
                              </div>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between items-center text-[6px] sm:text-[10px] text-gray-500 pt-1 border-t">
                              <span>© 2024 Nengi Ikoli</span>
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300"></div>
                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300"></div>
                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-[#4d8bf5]/20 text-[#a8c5ff] rounded text-xs">UI/UX Design</span>
                        <span className="px-2 py-1 bg-[#4d8bf5]/20 text-[#a8c5ff] rounded text-xs">Figma</span>
                        <span className="px-2 py-1 bg-[#4d8bf5]/20 text-[#a8c5ff] rounded text-xs">User Research</span>
                        <span className="px-2 py-1 bg-[#4d8bf5]/20 text-[#a8c5ff] rounded text-xs">Prototyping</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                        UI/UX Portfolio Case Studies
                      </h3>

                      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                        A collection of in-depth UI/UX case studies showcasing my design process, problem-solving
                        approach, and user-centered design methodology. These projects demonstrate my ability to create
                        intuitive, engaging, and accessible digital experiences.
                      </p>

                      <div className="space-y-3 mb-4 sm:mb-6">
                        <div className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-[#4d8bf5] flex items-center justify-center mt-0.5 mr-3">
                            <span className="text-xs text-white font-bold">1</span>
                          </div>
                          <p className="text-gray-300 flex-1 text-sm sm:text-base">
                            <span className="font-medium text-white">Groove Media App:</span> A music streaming
                            application designed to enhance user engagement through personalized playlists and social
                            sharing features
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-[#4d8bf5] flex items-center justify-center mt-0.5 mr-3">
                            <span className="text-xs text-white font-bold">2</span>
                          </div>
                          <p className="text-gray-300 flex-1 text-sm sm:text-base">
                            <span className="font-medium text-white">Savr Recipe App:</span> A redesign of a startup
                            cooking application to address user feedback and improve usability
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-[#4d8bf5] flex items-center justify-center mt-0.5 mr-3">
                            <span className="text-xs text-white font-bold">3</span>
                          </div>
                          <p className="text-gray-300 flex-1 text-sm sm:text-base">
                            <span className="font-medium text-white">Flip & Floss Industry Design Project:</span> A
                            user-centric reward system interface designed for a financial literacy application targeting
                            young users with gamified elements
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-2">
                        <a
                          href="https://ikolinengi.wixsite.com/porfolio"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative overflow-hidden group flex items-center justify-center gap-2 bg-[#4d8bf5] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-xs sm:text-sm transition-all duration-300 hover:bg-[#3a78e0]"
                        >
                          <span>View Case Studies</span>
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                          {/* Button shine effect */}
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects Grid - Mobile optimized */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* IT Team Members HTML Project */}
                <div className="group perspective transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="relative bg-gradient-to-br from-[#0a2547] to-[#0f3166] rounded-xl overflow-hidden border border-gray-500/20 h-full shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-[#4d8bf5]/10 hover:border-[#4d8bf5]/30">
                    {/* HTML-themed background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0c2c5a] to-[#051428] opacity-80"></div>

                    {/* Card top accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4d8bf5]/0 via-[#4d8bf5] to-[#4d8bf5]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                    {/* Content */}
                    <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-3 sm:mb-4">
                        <div className="bg-[#4d8bf5]/20 text-[#a8c5ff] px-2 sm:px-3 py-1 rounded text-xs font-medium">
                          HTML/CSS
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href="https://github.com/NengiIkoli/IT-Members-Webpage-HTML-"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-200 transition-colors" />
                          </a>
                          <a
                            href="https://nengiikoli.github.io/IT-Members-Webpage-HTML-/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-200 transition-colors" />
                          </a>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">IT Team Members</h3>

                      {/* Project preview */}
                      <div className="mt-2 mb-3 sm:mb-4 overflow-hidden rounded-md border border-[#4d8bf5]/20 group-hover:border-[#4d8bf5]/40 transition-colors">
                        <div className="bg-[#051428] px-2 py-1 border-b border-[#4d8bf5]/20 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></div>
                          <div className="text-gray-400 text-[10px] sm:text-xs ml-2">index.html</div>
                        </div>
                        <div className="p-2 sm:p-3 bg-white text-black text-[10px] sm:text-xs">
                          <div className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">IT Team Members</div>
                          <div className="mb-2 sm:mb-3">
                            <div className="font-medium mb-1">Add New Member</div>
                            <div className="grid grid-cols-2 gap-1 mb-1 sm:mb-2">
                              <div>First Name:</div>
                              <div className="h-3 sm:h-4 bg-gray-100 border border-gray-300 rounded"></div>
                              <div>Last Name:</div>
                              <div className="h-3 sm:h-4 bg-gray-100 border border-gray-300 rounded"></div>
                              <div>Role:</div>
                              <div className="h-3 sm:h-4 bg-gray-100 border border-gray-300 rounded"></div>
                              <div>Email:</div>
                              <div className="h-3 sm:h-4 bg-gray-100 border border-gray-300 rounded"></div>
                            </div>
                            <button className="bg-gray-200 border border-gray-400 text-[8px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded">
                              Add Member
                            </button>
                          </div>
                          <div>
                            <div className="font-medium mb-1">Team Members</div>
                            <table className="w-full border-collapse border border-gray-300 text-[8px] sm:text-[10px]">
                              <thead className="bg-gray-100">
                                <tr>
                                  <th className="border border-gray-300 p-0.5">First Name</th>
                                  <th className="border border-gray-300 p-0.5">Last Name</th>
                                  <th className="border border-gray-300 p-0.5">Role</th>
                                  <th className="border border-gray-300 p-0.5">Email</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-gray-300 p-0.5">John</td>
                                  <td className="border border-gray-300 p-0.5">Doe</td>
                                  <td className="border border-gray-300 p-0.5">Developer</td>
                                  <td className="border border-gray-300 p-0.5">john.doe@example.com</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 p-0.5">Jane</td>
                                  <td className="border border-gray-300 p-0.5">Doe</td>
                                  <td className="border border-gray-300 p-0.5">Designer</td>
                                  <td className="border border-gray-300 p-0.5">jane.doe@example.com</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-4 flex-grow text-xs sm:text-sm">
                        A straightforward HTML webpage for managing IT team members with a form for adding new members
                        and a structured table displaying team information.
                      </p>

                      <div className="mt-auto flex gap-3 sm:gap-4">
                        <a
                          href="https://nengiikoli.github.io/IT-Members-Webpage-HTML-/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 sm:gap-2 border border-gray-500/30 text-gray-300 hover:border-[#4d8bf5]/50 hover:text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs transition-all duration-300 group-hover:bg-[#051428]/80"
                        >
                          <span>Demo</span>
                          <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                          href="https://github.com/NengiIkoli/IT-Members-Webpage-HTML-"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 sm:gap-2 bg-[#4d8bf5]/20 text-[#a8c5ff] hover:bg-[#4d8bf5]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs transition-all duration-300"
                        >
                          <span>Source</span>
                          <Github className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:scale-110 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DOM Manipulation Project */}
                {/* Bookstore DOM Manipulation Project */}
                <div className="group perspective transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="relative bg-gradient-to-br from-[#0a2547] to-[#0f3166] rounded-xl overflow-hidden border border-gray-500/20 h-full shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-[#4d8bf5]/10 hover:border-[#4d8bf5]/30">
                    {/* DOM-themed background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0c2c5a] to-[#051428] opacity-80"></div>

                    {/* Card top accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4d8bf5]/0 via-[#4d8bf5] to-[#4d8bf5]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                    {/* Content */}
                    <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-3 sm:mb-4">
                        <div className="bg-[#4d8bf5]/20 text-[#a8c5ff] px-2 sm:px-3 py-1 rounded text-xs font-medium">
                          JavaScript
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href="https://github.com/NengiIkoli/Bookstore-DOM-Project"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-200 transition-colors" />
                          </a>
                          <a
                            href="https://nengiikoli.github.io/Bookstore-DOM-Project/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-200 transition-colors" />
                          </a>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Bookstore Manager</h3>

                      {/* Project preview */}
                      <div className="mt-2 mb-3 sm:mb-4 rounded-md border border-[#4d8bf5]/20 overflow-hidden group-hover:border-[#4d8bf5]/40 transition-colors">
                        <div className="bg-[#051428] px-2 py-1 border-b border-[#4d8bf5]/20 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></div>
                          <div className="text-gray-400 text-[10px] sm:text-xs ml-2">bookstore.js</div>
                        </div>
                        <div className="bg-white p-2 sm:p-3">
                          <div className="text-center text-gray-800 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">
                            Welcome to the Book Store!
                          </div>
                          <div className="bg-gray-100 p-1.5 sm:p-2 rounded mb-1.5 sm:mb-2">
                            <div className="text-[8px] sm:text-xs text-gray-600 mb-1">Add a Book to the Store</div>
                            <div className="h-4 sm:h-5 bg-white rounded border border-gray-300 mb-1"></div>
                            <div className="h-4 sm:h-5 bg-white rounded border border-gray-300 mb-1"></div>
                            <div className="h-4 sm:h-5 bg-white rounded border border-gray-300 mb-1"></div>
                            <div className="h-5 sm:h-6 bg-blue-500 rounded text-center">
                              <span className="text-white text-[8px] sm:text-xs">Add Book</span>
                            </div>
                          </div>
                          <div className="text-[8px] sm:text-xs text-gray-600">Books in Stock</div>
                          <div className="h-16 sm:h-20 bg-gray-50 rounded border border-gray-200"></div>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-4 flex-grow text-xs sm:text-sm">
                        A JavaScript bookstore application that demonstrates DOM manipulation by allowing users to add,
                        display, and remove books with persistent local storage.
                      </p>

                      <div className="mt-auto flex gap-3 sm:gap-4">
                        <a
                          href="https://nengiikoli.github.io/Bookstore-DOM-Project/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 sm:gap-2 border border-gray-500/30 text-gray-300 hover:border-[#4d8bf5]/50 hover:text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs transition-all duration-300 group-hover:bg-[#051428]/80"
                        >
                          <span>Demo</span>
                          <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                          href="https://github.com/NengiIkoli/Bookstore-DOM-Project"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 sm:gap-2 bg-[#4d8bf5]/20 text-[#a8c5ff] hover:bg-[#4d8bf5]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs transition-all duration-300"
                        >
                          <span>Source</span>
                          <Github className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:scale-110 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Template Webpage Project */}
                <div className="group perspective transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="relative bg-gradient-to-br from-[#0a2547] to-[#0f3166] rounded-xl overflow-hidden border border-gray-500/20 h-full shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-[#4d8bf5]/10 hover:border-[#4d8bf5]/30">
                    {/* Email template themed background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0c2c5a] to-[#051428] opacity-80"></div>

                    {/* Card top accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4d8bf5]/0 via-[#4d8bf5] to-[#4d8bf5]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                    {/* Content */}
                    <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-3 sm:mb-4">
                        <div className="bg-[#4d8bf5]/20 text-[#a8c5ff] px-2 sm:px-3 py-1 rounded text-xs font-medium">
                          HTML/CSS
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href="https://github.com/NengiIkoli/Email-Webpage"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-200 transition-colors" />
                          </a>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Email Template Webpage</h3>

                      {/* Project preview */}
                      <div className="mt-2 mb-3 sm:mb-4 rounded-md border border-[#4d8bf5]/20 overflow-hidden group-hover:border-[#4d8bf5]/40 transition-colors">
                        <div className="bg-[#051428] px-2 py-1 border-b border-[#4d8bf5]/20 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></div>
                          <div className="text-gray-400 text-[10px] sm:text-xs ml-2">Email Client</div>
                        </div>
                        <div className="flex">
                          {/* Left sidebar */}
                          <div className="bg-gray-800 p-1.5 sm:p-2 w-1/4">
                            <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500"></div>
                              <div className="text-white text-[8px] sm:text-xs">Welcome, Brock!</div>
                            </div>
                            <div className="bg-orange-500 text-white text-[8px] sm:text-xs py-0.5 sm:py-1 px-1.5 sm:px-2 rounded text-center mb-1 sm:mb-2">
                              Compose
                            </div>
                            <div className="text-gray-300 text-[8px] sm:text-xs mb-0.5 sm:mb-1">Inbox (1)</div>
                            <div className="text-gray-400 text-[8px] sm:text-xs mb-0.5 sm:mb-1">Tagged</div>
                            <div className="text-gray-400 text-[8px] sm:text-xs mb-0.5 sm:mb-1">Important</div>
                            <div className="text-gray-400 text-[8px] sm:text-xs">Sent Mail</div>
                          </div>

                          {/* Middle section */}
                          <div className="bg-gray-200 p-1.5 sm:p-2 w-1/3">
                            <div className="bg-white rounded mb-1 sm:mb-2 h-4 sm:h-5"></div>
                            <div className="text-[8px] sm:text-xs font-medium mb-0.5 sm:mb-1">LinkedIn</div>
                            <div className="bg-gray-300 rounded p-0.5 sm:p-1 mb-0.5 sm:mb-1">
                              <div className="text-[8px] sm:text-xs truncate">New connection request</div>
                            </div>
                            <div className="text-[8px] sm:text-xs font-medium">Michael Scott Daily Quote</div>
                            <div className="bg-gray-300 rounded p-0.5 sm:p-1">
                              <div className="text-[8px] sm:text-xs truncate">I'm optimistic because...</div>
                            </div>
                          </div>

                          {/* Right section - email content */}
                          <div className="bg-white p-1.5 sm:p-2 w-5/12">
                            <div className="text-[8px] sm:text-xs mb-0.5 sm:mb-1">
                              <span className="font-medium">To:</span> taylor@example.com
                            </div>
                            <div className="text-[8px] sm:text-xs mb-1 sm:mb-2">
                              <span className="font-medium">From:</span> michael@quotes.com
                            </div>
                            <div className="font-medium text-[8px] sm:text-xs mb-0.5 sm:mb-1">
                              Michael Scott Daily Quotes
                            </div>
                            <div className="text-[8px] sm:text-xs mb-0.5 sm:mb-1">
                              "Friends joke with one another..."
                            </div>
                            <div className="text-[8px] sm:text-xs mb-0.5 sm:mb-1">"It's a good thing Russia..."</div>
                            <div className="bg-gray-100 rounded h-4 sm:h-6 mt-1 sm:mt-2"></div>
                            <div className="bg-orange-500 w-12 sm:w-16 h-3 sm:h-4 rounded mt-0.5 sm:mt-1 ml-auto"></div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-4 flex-grow text-xs sm:text-sm">
                        A meticulously designed email client interface with sidebar navigation, message list, and email
                        content view. Features user welcome, compose button, and organized folder structure.
                      </p>

                      <div className="mt-auto flex gap-3 sm:gap-4">
                        <a
                          href="https://nengiikoli.github.io/Email-Webpage/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 sm:gap-2 border border-gray-500/30 text-gray-300 hover:border-[#4d8bf5]/50 hover:text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs transition-all duration-300 group-hover:bg-[#051428]/80"
                        >
                          <span>Demo</span>
                          <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                          href="https://github.com/NengiIkoli/Email-Webpage"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 sm:gap-2 bg-[#4d8bf5]/20 text-[#a8c5ff] hover:bg-[#4d8bf5]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs transition-all duration-300"
                        >
                          <span>Source</span>
                          <Github className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:scale-110 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* View More Projects Button */}
              <div className="mt-10 sm:mt-12 text-center">
                <a
                  href="https://github.com/NengiIkoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#051428] border border-[#4d8bf5]/50 text-gray-200 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md transition-all duration-300 hover:bg-[#0a2547] hover:text-white group text-sm sm:text-base"
                >
                  <span>View More Projects</span>
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-20 bg-black relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0a2547]/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#0a2547]/20 to-transparent"></div>

            {/* Subtle animated dots */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#a8c5ff]/30 animate-pulse-slow"></div>
              <div
                className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-[#a8c5ff]/30 animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-[#a8c5ff]/30 animate-pulse-slow"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-[#a8c5ff]/30 animate-pulse-slow"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div
              className={`transition-all duration-1000 transform ${visibleSections.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="text-center mb-10 md:mb-14 relative">
                <h2 className="text-4xl md:text-5xl font-bold text-white inline-block relative">
                  Get In Touch
                  <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a8c5ff] to-transparent"></div>
                </h2>
                <p className="text-gray-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base">
                  Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-[#051428] to-[#0a2547] rounded-2xl border border-[#4d8bf5]/20 shadow-lg shadow-[#4d8bf5]/5 overflow-hidden">
                  {/* Contact card with refined design */}
                  <div className="p-6 md:p-10">
                    {/* Email section */}
                    <div className="flex flex-col items-center text-center mb-10">
                      <div className="w-16 h-16 rounded-full bg-[#0a2547] border border-[#4d8bf5]/40 flex items-center justify-center mb-4 shadow-lg shadow-[#4d8bf5]/10">
                        <Mail className="w-8 h-8 text-[#4d8bf5]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Email Me</h3>
                      <p className="text-gray-300 text-sm mb-5 max-w-md">
                        The quickest way to reach me is through my email. I typically respond within 24-48 hours.
                      </p>
                      <a
                        href="mailto:ikolinengi@gmail.com"
                        className="inline-flex items-center justify-center gap-2 bg-[#4d8bf5] text-white px-6 py-3 rounded-md transition-all duration-300 hover:bg-[#3a78e0] hover:scale-105 text-sm md:text-base"
                      >
                        <Mail className="w-4 h-4" />
                        <span>ikolinengi@gmail.com</span>
                      </a>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4d8bf5]/30 to-transparent my-8"></div>

                    {/* Social connections */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-3">Connect With Me</h3>
                      <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
                        Follow me on social media to see my latest projects and updates.
                      </p>

                      <div className="flex justify-center gap-6">
                        <a
                          href="https://www.linkedin.com/in/ayebanengiyefaikoli/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group"
                        >
                          <div className="w-14 h-14 bg-[#0a2547] rounded-full flex items-center justify-center border border-[#4d8bf5]/30 transition-all duration-300 group-hover:border-[#4d8bf5]/70 group-hover:shadow-lg group-hover:shadow-[#4d8bf5]/20 group-hover:scale-110">
                            <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-[#4d8bf5] transition-colors duration-300" />
                          </div>
                          <p className="mt-2 text-xs text-gray-400 group-hover:text-[#a8c5ff] transition-colors duration-300">
                            LinkedIn
                          </p>
                        </a>

                        <a
                          href="https://github.com/NengiIkoli"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group"
                        >
                          <div className="w-14 h-14 bg-[#0a2547] rounded-full flex items-center justify-center border border-[#4d8bf5]/30 transition-all duration-300 group-hover:border-[#4d8bf5]/70 group-hover:shadow-lg group-hover:shadow-[#4d8bf5]/20 group-hover:scale-110">
                            <Github className="w-6 h-6 text-gray-300 group-hover:text-[#4d8bf5] transition-colors duration-300" />
                          </div>
                          <p className="mt-2 text-xs text-gray-400 group-hover:text-[#a8c5ff] transition-colors duration-300">
                            GitHub
                          </p>
                        </a>

                        <a
                          href="https://ikolinengi.wixsite.com/porfolio"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group"
                        >
                          <div className="w-14 h-14 bg-[#0a2547] rounded-full flex items-center justify-center border border-[#4d8bf5]/30 transition-all duration-300 group-hover:border-[#4d8bf5]/70 group-hover:shadow-lg group-hover:shadow-[#4d8bf5]/20 group-hover:scale-110">
                            <Palette className="w-6 h-6 text-gray-300 group-hover:text-[#4d8bf5] transition-colors duration-300" />
                          </div>
                          <p className="mt-2 text-xs text-gray-400 group-hover:text-[#a8c5ff] transition-colors duration-300">
                            Portfolio
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional contact info */}
                <div className="mt-8 text-center">
                  <p className="text-gray-400 text-sm">
                    Based in <span className="text-[#a8c5ff]">Washington DC</span> • Available for remote work worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#051428] border-t border-gray-500/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center justify-center md:justify-start gap-1 text-xl cursor-pointer">
                <span className="text-gray-300 font-bold">nengi</span>
                <span className="text-[#4d8bf5] font-bold">ikoli</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">UI/UX Designer & Front-End Developer</p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Nengi Ikoli. All rights reserved.</p>
              <p className="text-gray-500 text-xs mt-1">Designed and built with passion</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
