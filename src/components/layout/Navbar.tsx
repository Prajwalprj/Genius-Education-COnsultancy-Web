"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Courses", href: "/courses" },
        { name: "Study Abroad", href: "/study-abroad" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="relative h-20 w-20">
                            <Image
                                src="/Genius_logo.png"
                                alt="Genius Education Logo"
                                fill

                                className="object-contain"
                            />
                        </div>

                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-primary font-medium transition-colors text-sm"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button size="sm" className="bg-gradient-to-br from-black to-primary hover:bg-primary/90 text-primary-foreground">
                            Apply Now
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-2">
                            <Button className="w-full bg-gradient-to-br from-black to-primary hover:bg-primary/90 text-primary-foreground">
                                Apply Now
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
