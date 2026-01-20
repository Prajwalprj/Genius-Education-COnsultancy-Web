"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, Clock, CheckCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const courses = [
    {
        id: "ielts",
        title: "IELTS Preparation",
        description: "Comprehensive training for Academic and General Training modules.",
        duration: "6 Weeks",
        schedule: "Morning / Day / Evening",
        features: ["Mock Tests", "Speaking Practice", "Material Provided"],
        color: "bg-red-50 text-red-600"
    },
    {
        id: "pte",
        title: "PTE Academic",
        description: "Computer-based English test preparation with AI scoring insights.",
        duration: "4 Weeks",
        schedule: "Flexible Batches",
        features: ["Computer Lab Access", "Scored Mock Tests", "Tips & Tricks"],
        color: "bg-blue-50 text-blue-600"
    },
    {
        id: "japanese",
        title: "Japanese Language",
        description: "NAT/JLPT preparation N5 to N3 levels for students and workers.",
        duration: "3-6 Months",
        schedule: "Daily Classes",
        features: ["Native Instructors", "Cultural Orientation", "Visa Support"],
        color: "bg-pink-50 text-pink-600"
    },
    {
        id: "korean",
        title: "Korean Language",
        description: "EPS-TOPIK preparation for employment and study in Korea.",
        duration: "3-6 Months",
        schedule: "Daily Classes",
        features: ["Exam Focus", "Listening Practice", "Skill Test Prep"],
        color: "bg-indigo-50 text-indigo-600"
    }
];

export default function CoursesPage() {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Courses</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Achieve your language goals with our expert instructors and proven teaching methodologies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {courses.map((course) => (
                        <Card key={course.id} className="border-slate-200 hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${course.color}`}>
                                    <BookOpen className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-2xl">{course.title}</CardTitle>
                                <CardDescription className="text-base mt-2">{course.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center text-slate-600">
                                    <Clock className="h-5 w-5 mr-3 text-slate-400" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center text-slate-600">
                                    <Calendar className="h-5 w-5 mr-3 text-slate-400" />
                                    <span>{course.schedule}</span>
                                </div>
                                <div className="pt-4 border-t border-slate-100">
                                    <h4 className="font-semibold mb-2 text-sm text-slate-900">Key Features:</h4>
                                    <ul className="space-y-2">
                                        {course.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-slate-600">
                                                <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button
                                            className="w-full bg-blue-600 hover:bg-blue-700"
                                            onClick={() => setSelectedCourse(course.title)}
                                        >
                                            Book Now
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Book {course.title}</DialogTitle>
                                            <DialogDescription>
                                                Fill out the form below to reserve your seat. We will contact you shortly to confirm.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <form className="grid gap-4 py-4" onSubmit={(e) => { e.preventDefault(); alert("Booking submitted!"); }}>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="name" className="text-right">Name</Label>
                                                <Input id="name" className="col-span-3" required />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="email" className="text-right">Email</Label>
                                                <Input id="email" type="email" className="col-span-3" required />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="phone" className="text-right">Phone</Label>
                                                <Input id="phone" type="tel" className="col-span-3" required />
                                            </div>
                                            <div className="flex justify-end pt-4">
                                                <Button type="submit">Confirm Booking</Button>
                                            </div>
                                        </form>
                                    </DialogContent>
                                </Dialog>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
