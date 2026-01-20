import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Globe, Plane, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

const destinations = [
    {
        country: "Australia",
        description: "Top choice for international students with world-class universities and post-study work opportunities.",
        image: "/aus.jpg",
        features: ["PR Pathways", "Work Rights", "Quality Education"]
    },
    {
        country: "Canada",
        description: "Known for its welcoming environment, high quality of life, and student-friendly immigration policies.",
        image: "/canada.jpg", // Placeholder
        features: ["Co-op Programs", "PGWP Available", "Affordable Fees"]
    },
    {
        country: "USA",
        description: "Home to the world's leading Ivy League universities and limitless career opportunities.",
        image: "", // Placeholder
        features: ["stem OPT", "Scholarships", "Global Recognition"]
    },
    {
        country: "UK",
        description: "Experience a rich academic heritage with shorter duration courses and graduate route visa.",
        image: "", // Placeholder
        features: ["1 Year Masters", "PSW Visa", "Cultural Hub"]
    },
    {
        country: "New Zealand",
        description: "Safe, scenic, and supportive environment for students focusing on research and innovation.",
        image: "", // Placeholder
        features: ["3 Years PSW", "Lifestyle", "Research Focus"]
    },
    {
        country: "Japan",
        description: "Unique cultural experience combined with advanced technology and career prospects.",
        image: "", // Placeholder
        features: ["Learn & Earn", "Technology", "High Safety"]
    },
    {
        country: "Korea",
        description: "Emerging education hub with cutting-edge technology and vibrant pop culture.",
        image: "", // Placeholder
        features: ["Scholarships", "Tech Industry", "Dynamic Life"]
    },
    {
        country: "Europe",
        description: "Affordable education options with rich history and travel opportunities across Schengen.",
        image: "", // Placeholder
        features: ["Low/No Tuition", "Travel Access", "Diverse Culture"]
    }
];

export default function StudyAbroadPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Study Abroad Destinations</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Explore diverse educational opportunities in the world's top study destinations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest) => (
                        <Card key={dest.country} className="overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 w-full bg-slate-200">
                                <Image
                                    src={dest.image}
                                    alt={`${dest.country} cityscape`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white tracking-wide">{dest.country}</h3>
                            </div>

                            <CardContent className="pt-6">
                                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                    {dest.description}
                                </p>

                                <div className="space-y-3">
                                    <h4 className="font-semibold text-sm text-slate-900 flex items-center">
                                        <GraduationCap className="h-4 w-4 mr-2 text-blue-500" />
                                        Highlights
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {dest.features.map((feature, idx) => (
                                            <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
