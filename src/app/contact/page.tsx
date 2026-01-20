"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/counseling', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            alert("Failed to submit. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact & Counseling</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Get in touch with us for expert counseling or visit our office in Kathmandu.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Form Section */}
                    <div>
                        <Card className="border-slate-200 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl">Book Free Counseling</CardTitle>
                                <CardDescription>
                                    Fill out the details below and our manager will contact you shortly.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {submitted ? (
                                    <div className="text-center py-12 space-y-4">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                            <Send className="h-8 w-8 text-green-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800">Request Submitted!</h3>
                                        <p className="text-slate-600">Thank you for successful submission. We will get back to you immediately.</p>
                                        <Button variant="outline" onClick={() => setSubmitted(false)}>Submit Another</Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input id="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address</Label>
                                                <Input id="email" type="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input id="phone" type="tel" required placeholder="98XXXXXXXX" value={formData.phone} onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="interest">Interested In</Label>
                                            <select
                                                id="interest"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                                value={formData.interest}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select an option</option>
                                                <option value="IELTS">IELTS Preparation</option>
                                                <option value="PTE">PTE Preparation</option>
                                                <option value="Japanese">Japanese Language</option>
                                                <option value="Korean">Korean Language</option>
                                                <option value="Study Abroad">Study Abroad (Visa)</option>
                                                <option value="Other">Other Inquiry</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message (Optional)</Label>
                                            <Textarea id="message" placeholder="Tell us more about your requirements..." value={formData.message} onChange={handleChange} />
                                        </div>

                                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
                                            {loading ? "Submitting..." : "Submit Request"}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Info Section */}
                    <div className="space-y-8">
                        <div className="grid gap-6">
                            <Card className="border-slate-200">
                                <CardContent className="flex items-start p-6 space-x-4">
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <MapPin className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                                        <p className="text-slate-600 text-sm">
                                            Putalisadak, Kathmandu<br />
                                            (Opposite into Kumari Bank), Nepal
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-slate-200">
                                <CardContent className="flex items-start p-6 space-x-4">
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <Phone className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                                        <p className="text-slate-600 text-sm">
                                            +977-1-4XXXXXX<br />
                                            +977-98XXXXXXXX
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-slate-200">
                                <CardContent className="flex items-start p-6 space-x-4">
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <Mail className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                                        <p className="text-slate-600 text-sm">
                                            info@geniuseducation.com<br />
                                            support@geniuseducation.com
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-slate-200">
                                <CardContent className="flex items-start p-6 space-x-4">
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <Clock className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Opening Hours</h3>
                                        <p className="text-slate-600 text-sm">
                                            Sunday - Friday: 7:00 AM - 6:00 PM<br />
                                            Saturday: Closed
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
