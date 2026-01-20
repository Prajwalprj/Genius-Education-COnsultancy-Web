import Link from "next/link";
import { GraduationCap, Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="bg-blue-600 p-1.5 rounded-lg">
                                <GraduationCap className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl leading-none">Genius</span>
                                <span className="text-[10px] font-medium text-blue-400 tracking-wider">
                                    EDUCATION & VISA
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Your trusted partner for global education and visa services in Kathmandu.
                            We help you achieve your dreams of studying abroad.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'Courses', 'Study Abroad', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Study Destinations */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Destinations</h3>
                        <ul className="space-y-2">
                            {['Australia', 'Canada', 'USA', 'UK', 'New Zealand', 'Japan', 'Korea', 'Europe'].map((item) => (
                                <li key={item}>
                                    <Link href="/study-abroad" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-slate-400 text-sm">
                                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                                <span>Kathmandu, Nepal</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400 text-sm">
                                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                                <span>+977-1-4XXXXXX</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400 text-sm">
                                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                                <span>info@geniuseducation.com</span>
                            </li>
                        </ul>

                        <div className="flex space-x-4 mt-6">
                            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                                <a key={idx} href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Genius Education and Visa Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
