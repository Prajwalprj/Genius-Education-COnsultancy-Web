import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Globe, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import TeamCarousel from "@/components/home/TeamCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ConsultationSection from "@/components/home/ConsultationSection";

const TEAM_MEMBERS = [
  { name: "John Doe", role: "Founder & CEO", image: "/cbs.jpg" },
  { name: "Jane Smith", role: "Senior Consultant", image: "/student smiling.png" },
  { name: "Robert Johnson", role: "Visa Expert", image: "/student smiling.png" },
  { name: "Emily Davis", role: "Language Instructor", image: "/student smiling.png" },
  { name: "Michael Wilson", role: "Admission Counselor", image: "/student smiling.png" },
  { name: "Sarah Brown", role: "Student Relations", image: "/student smiling.png" },
  { name: "David Miller", role: "Operations Manager", image: "/student smiling.png" }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Using the generated hero background */}
          <Image
            src="/13418.jpg"
            alt="Students on university campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <ScrollReveal animation="fade-in" duration={0.8}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Your Gateway to <span className="text-blue-300">Global Education</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={0.2} duration={0.8}>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Expert guidance for studying abroad in Australia, USA, UK, Canada, and more.
              Master IELTS, PTE, Japanese, and Korean languages with us.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="zoom-in" delay={0.4} duration={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-lg px-8">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white text-lg px-8">
                View Courses
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Students Placed", value: "1000+" },
              { label: "Countries", value: "8+" },
              { label: "Visa Success", value: "98%" },
              { label: "Years Experience", value: "10+" },
            ].map((stat, index) => (
              <ScrollReveal key={index} animation="zoom-in" delay={index * 0.1} width="100%">
                <div className="p-4">
                  <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-blue-600 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="slide-up" width="100%">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Comprehensive support from language preparation to visa processing and post-arrival assistance.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal animation="slide-left" delay={0.1} width="100%" className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Study Abroad</h3>
                <p className="text-slate-600 mb-6">
                  Expert counseling for Australia, Canada, USA, UK, New Zealand, Europe, Korea, and Japan.
                </p>
                <Link href="/study-abroad" className="text-blue-600 font-medium flex items-center hover:underline">
                  Explore Destinations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-up" delay={0.2} width="100%" className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Test Preparation</h3>
                <p className="text-slate-600 mb-6">
                  Comprehensive classes for IELTS, PTE, and language courses for Japanese and Korean.
                </p>
                <Link href="/courses" className="text-blue-600 font-medium flex items-center hover:underline">
                  View Classes <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" delay={0.3} width="100%" className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Visa Assistance</h3>
                <p className="text-slate-600 mb-6">
                  Guidance through the entire visa application process to ensure high success rates.
                </p>
                <Link href="/contact" className="text-blue-600 font-medium flex items-center hover:underline">
                  Get Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Consultation Section */}


      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-in" delay={0.2} width="100%">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                {/* Fallback image/color if no image available yet */}
                <Image src="/student smiling.png" alt="Student Smiling" fill className="object-contain"
                />
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal animation="slide-up" delay={0.1}>
                <h2 className="text-3xl font-bold text-slate-900">Why Choose Genius Education?</h2>
              </ScrollReveal>

              <div className="space-y-6">
                {[
                  "Experienced Counselors with deep industry knowledge",
                  "Proven track record of visa success",
                  "Direct partnerships with top global universities",
                  "Personalized attention to every student's profile",
                  "Post-arrival support and community"
                ].map((item, idx) => (
                  <ScrollReveal key={idx} animation="slide-left" delay={idx * 0.1} width="100%">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                      <span className="text-slate-700 text-lg">{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal animation="zoom-in" delay={0.6}>
                <Button size="lg" className="bg-gradient-to-br from-black to-primary text-white">
                  Book Free Counseling
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="slide-up" width="100%">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Team</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Meet our experienced professionals dedicated to your success.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in" delay={0.2} width="100%">
            <TeamCarousel members={TEAM_MEMBERS} />
          </ScrollReveal>
        </div>
      </section>
      <ConsultationSection />
    </div >
  );
}
