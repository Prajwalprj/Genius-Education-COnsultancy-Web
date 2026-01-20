"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

interface TeamCarouselProps {
    members: TeamMember[];
}

export default function TeamCarousel({ members }: TeamCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const delay = 3000;
    const transitionDuration = 700;

    // Number of items visible on largest screen
    const visibleItems = 4;
    // Clone items to the end to creates the illusion of infinite scroll
    const extendedMembers = [...members, ...members.slice(0, visibleItems)];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => prev + 1);
        }, delay);

        return () => clearInterval(timer);
    }, [activeIndex]);

    useEffect(() => {
        // If we've reached the start of the cloned items
        if (activeIndex === members.length) {
            // Wait for the transition to finish
            const timeout = setTimeout(() => {
                // Disable transition to snap back instantly
                setIsTransitioning(false);
                // Reset to 0 (which looks exactly like members.length)
                setActiveIndex(0);

                // Re-enable transition for the next slide
                // We use requestAnimationFrame to ensure the DOM has updated with the "none" transition
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setIsTransitioning(true);
                    });
                });
            }, transitionDuration);

            return () => clearTimeout(timeout);
        }
    }, [activeIndex, members.length]);

    return (
        <div className="w-full relative overflow-hidden py-8">
            <div
                className="flex"
                style={{
                    transform: `translateX(calc(-${activeIndex} * var(--slide-width, 100%)))`,
                    transition: isTransitioning ? `transform ${transitionDuration}ms ease-in-out` : 'none'
                }}
            >
                {extendedMembers.map((member, idx) => (
                    <div
                        key={idx}
                        className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-4"
                    >
                        <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 flex flex-col items-center text-center h-full hover:shadow-lg transition-shadow">
                            <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-50">
                                <Image
                                    src={member.image || "/cbs.jpg"}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-bold text-lg text-slate-900">{member.name}</h3>
                            <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
        div {
          --slide-width: 100%;
        }
        @media (min-width: 768px) {
          div {
            --slide-width: 50%;
          }
        }
        @media (min-width: 1024px) {
          div {
            --slide-width: 25%;
          }
        }
      `}</style>
        </div>
    );
}
