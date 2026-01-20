"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Send, Phone, Mail, CheckCircle, Smartphone } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useState } from "react";

export default function ConsultationSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        branch: "",
        destination: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/counseling', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.error) {
                alert("Failed to send message. Please try again.");
            } else {
                alert("Message sent successfully! We will contact you soon.");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    branch: "",
                    destination: "",
                    message: ""
                });
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Side - Form */}
                    <ScrollReveal animation="slide-right" duration={0.8}>
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Name */}
                                <div className="relative">
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                        className="pl-4 pr-10 py-6 rounded-full border-slate-200 bg-white"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                        <User className="h-5 w-5" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Email */}
                                    <div className="relative">
                                        <Input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            required
                                            className="pl-4 pr-10 py-6 rounded-full border-slate-200 bg-white"
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                            <Send className="h-4 w-4" />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="relative">
                                        <Input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Your Phone"
                                            required
                                            className="pl-4 pr-10 py-6 rounded-full border-slate-200 bg-white"
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                            <Phone className="h-4 w-4" />
                                        </div>
                                    </div>
                                </div>

                                {/* Branch Select */}
                                <div className="relative">
                                    <select
                                        name="branch"
                                        value={formData.branch}
                                        onChange={handleChange}
                                        className="w-full pl-4 pr-10 py-4 appearance-none rounded-full border border-slate-200 bg-white text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="" disabled>Select Our Nearest Branch</option>
                                        <option value="kathmandu">Kathmandu</option>
                                        <option value="pokhara">Butwal</option>
                                        <option value="chitwan">Australia</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>

                                {/* Destination Select */}
                                <div className="relative">
                                    <select
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleChange}
                                        className="w-full pl-4 pr-10 py-4 appearance-none rounded-full border border-slate-200 bg-white text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="" disabled>Preferred Study Destination</option>
                                        <option value="australia">Australia</option>
                                        <option value="usa">USA</option>
                                        <option value="uk">UK</option>
                                        <option value="canada">Canada</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write Message.."
                                        required
                                        className="min-h-[120px] pl-4 pr-10 py-4 rounded-3xl border-slate-200 bg-white resize-none"
                                    />
                                    <div className="absolute right-4 top-6 text-slate-400">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-6 rounded-full bg-gradient-to-br from-black to-primary text-white text-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-70"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </Button>

                                <p className="text-xs text-slate-500 text-center">
                                    By submitting this form, you agree to our <a href="#" className="underline">privacy policy</a> and <a href="#" className="underline">terms of service</a>.
                                </p>
                            </form>
                        </div>
                    </ScrollReveal>

                    {/* Right Side - Info */}
                    <ScrollReveal animation="slide-left" duration={0.8} delay={0.2}>
                        <div className="space-y-8 pt-4">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-sm font-bold tracking-wider text-slate-900 uppercase">Book Your Free Consultation</span>
                                    <svg className="w-12 h-2 text-red-500" viewBox="0 0 100 20" preserveAspectRatio="none">
                                        <path d="M0 10 Q 25 20 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                    Free Expert Guidance to Plan Your <span className="text-blue-900">Abroad Studies</span>
                                </h2>
                            </div>

                            <p className="text-slate-600 text-lg">
                                From choosing the right country to finding scholarships and housing — our counselors will guide you at every step.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Choose the right country based on your goals",
                                    "Find courses that match your career plan",
                                    "Get guidance on colleges and universities",
                                    "Plan your finances, scholarships & part-time jobs",
                                    "Plan your abroad stay & post-study plan"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="bg-blue-600 rounded-full p-1 shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Card */}
                            <div className="mt-8 bg-gradient-to-br from-black to-primary p-6 rounded-2xl text-white flex flex-col sm:flex-row items-center gap-6 shadow-xl">
                                <div className="relative w-24 h-24 shrink-0 rounded-full overflow-hidden border-4 border-white/20">
                                    {/* Placeholder for person image - using a generic avatar if no specific image */}
                                    <Image
                                        src="/cbs.jpg"
                                        alt="Chandra Baibhav Shah"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-xl font-bold">Chandra Baibhav Shah</h3>
                                    <p className="text-white/80 text-sm mb-4">Managing Director</p>
                                    <p className="text-xs text-white/70 mb-4 line-clamp-2">
                                        Schedule a free consultation with our expert counselors to discuss your study
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <a href="tel:9851273832" className="flex items-center justify-center sm:justify-start gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                            <Smartphone className="w-4 h-4" />
                                            <span>9866589819</span>
                                        </a>
                                        <a href="prajwal8308@gmail.com" className="flex items-center justify-center sm:justify-start gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                                            <Mail className="w-4 h-4" />
                                            <span>Email Us</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
