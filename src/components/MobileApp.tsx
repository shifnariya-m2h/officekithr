import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import MobileMockUp from './.././../public/mobile-mockup.webp'
type Props = {}

function MobileApp({ }: Props) {
    const phoneRef = useRef<HTMLImageElement | null>(null);


    return (
        <section className="pt-12 sm:pt-16 lg:pt-p-tursioury pb-20 sm:pb-24 lg:pb-mb-common bg-[#01004f] min-h-screen lg:h-[1140px]">
            <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-20 lg:mb-32">
                    <Badge className="bg-transparent font-normal py-2 text-white mb-4 border-2 border-[#f1f1f1] hover:bg-transparent">
                        Mobile App
                    </Badge>

                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 lg:leading-[1.2]">
                        Your Workplace in Your Pocket <br className="hidden sm:block" /> with OfficeKit Mobile App.
                    </h2>

                    <p className="text-base sm:text-lg lg:text-xl text-white">
                        Unleash your creativity and build exceptional sites effortlessly, supported by <br className="hidden sm:block" /> real-time customer assistance every step of the way.
                    </p>
                </div>

                {/* Mobile Layout: 3 Cards → Image → 3 Cards */}
                <div className="lg:hidden">
                    {/* First 3 Cards */}
                    <div className="space-y-4 sm:space-y-6 max-w-md mx-auto mb-8 sm:mb-12">
                        <img
                            className="w-full transform duration-500 ease-out hover:translate-y-2"
                            src="/mobile-app-keypoints/01.svg"
                            alt="mobileapp"
                            loading="lazy"
                        />
                        <img
                            className="w-full transform duration-500 ease-out hover:translate-y-2"
                            src="/mobile-app-keypoints/02.svg"
                            alt="mobileapp"
                            loading="lazy"
                        />
                        <img
                            className="w-full transform duration-500 ease-out hover:translate-y-2"
                            src="/mobile-app-keypoints/03.svg"
                            alt="mobileapp"
                            loading="lazy"
                        />
                    </div>

                    {/* Phone Mockup - Middle */}
                    <div className="flex justify-center mb-8 sm:mb-12">
                        <div className="w-full max-w-[240px] sm:max-w-[280px]">
                            <img
                                ref={phoneRef}
                                src={MobileMockUp}
                                alt="Phone Mockup"
                                className="w-full h-auto"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Last 3 Cards */}
                    <div className="space-y-4 sm:space-y-6 max-w-md mx-auto mb-8">
                        <img
                            className="w-full transform duration-500 ease-out hover:translate-y-2"
                            src="/mobile-app-keypoints/04.svg"
                            alt="mobileapp"
                            loading="lazy"
                        />
                        <img
                            className="w-full transform duration-500 ease-out hover:translate-y-2"
                            src="/mobile-app-keypoints/05.svg"
                            alt="mobileapp"
                            loading="lazy"
                        />
                        <img
                            className="w-full transform duration-500 ease-out hover:translate-y-2"
                            src="/mobile-app-keypoints/06.svg"
                            alt="mobileapp"
                            loading="lazy"
                        />
                    </div>

                    {/* App Store Links - Mobile */}
                    <div className="flex justify-center gap-4 mt-8">
                        <Link to="https://apps.apple.com/in/app/officekit-app/id1382735899">
                            <img
                                className="w-28 sm:w-32 h-auto transform hover:scale-105 ease-out duration-300"
                                src="/apple.svg"
                                alt=""
                                loading="lazy"
                            />
                        </Link>
                        <Link to='https://play.google.com/store/search?q=officekit&c=apps&hl=en_IN'>
                            <img
                                className="w-28 sm:w-32 h-auto transform hover:scale-105 ease-out duration-300"
                                src="/play.svg"
                                alt=""
                                loading="lazy"
                            />
                        </Link>
                    </div>
                </div>

                {/* Desktop Layout: Original Design */}
                <div className="hidden lg:block">
                    <div className="flex justify-between items-center">
                        <div>
                            <img
                                className="transform duration-500 ease-out hover:translate-y-2"
                                src="/mobile-app-keypoints/01.svg"
                                alt="mobileapp"
                                loading="lazy"
                            />
                            <img
                                className="my-6 transform duration-500 ease-out hover:translate-y-2"
                                src="/mobile-app-keypoints/02.svg"
                                alt="mobileapp"
                                loading="lazy"
                            />
                            <img
                                className="transform duration-500 ease-out hover:translate-y-2"
                                src="/mobile-app-keypoints/03.svg"
                                alt="mobileapp"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <img
                                className="transform duration-500 ease-out hover:translate-y-2"
                                src="/mobile-app-keypoints/04.svg"
                                alt="mobileapp"
                                loading="lazy"
                            />
                            <img
                                className="my-6 transform duration-500 ease-out hover:translate-y-2"
                                src="/mobile-app-keypoints/05.svg"
                                alt="mobileapp"
                                loading="lazy"
                            />
                            <img
                                className="transform duration-500 ease-out hover:translate-y-2"
                                src="/mobile-app-keypoints/06.svg"
                                alt="mobileapp"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="absolute top-[76%] w-[320px] h-auto left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <img
                            ref={phoneRef}
                            src={MobileMockUp}
                            alt="Phone Mockup"
                            loading="lazy"
                        />

                        <div className="flex gap-4 mt-10">
                            <Link to="https://apps.apple.com/in/app/officekit-app/id1382735899">
                                <img
                                    className="transform hover:scale-105 ease-out duration-300"
                                    src="/apple.svg"
                                    alt=""
                                    loading="lazy"
                                />
                            </Link>
                            <Link to='https://play.google.com/store/search?q=officekit&c=apps&hl=en_IN'>
                                <img
                                    className="transform hover:scale-105 ease-out duration-300"
                                    src="/play.svg"
                                    alt=""
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default MobileApp;