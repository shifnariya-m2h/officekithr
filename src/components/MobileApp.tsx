import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import gsap from "gsap";
import { useEffect, useRef } from "react";

type Props = {}

function MobileApp({ }: Props) {
       const phoneRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (phoneRef.current) {
            // Initial fade + scale in
            gsap.fromTo(
                phoneRef.current,
                { opacity: 0, y: 50, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
            );

            // Floating animation loop
            gsap.to(phoneRef.current, {
                y: -15,
                duration: 2,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
                delay: 1.2,
            });
        }
    }, []);
    return (
        <section className="pt-p-tursioury mb-mb-common h-[1140px] bg-[#01004f]">
            <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-32">
                    <Badge className="bg-transparent font-normal py-2 text-white mb-4 border-2 border-[#f1f1f1] hover:bg-transparent">
                        Mobile App
                    </Badge>

                    <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 lg:leading-[1.2]">
                        Your Workplace in Your Pocket <br /> with OfficeKit Mobile App.
                    </h2>

                    <p className="text-xl text-white" >Unleash your creativity and build exceptional sites effortlessly, supported by <br /> real-time customer assistance every step of the way.</p>
                </div>

                <div className="flex justify-between items-center" >
                    <div>
                        <img className="transform duration-500 ease-out hover:translate-y-2" src="/mobile-app-keypoints/01.svg" alt="" />
                        <img className="my-6 transform duration-500 ease-out hover:translate-y-2" src="/mobile-app-keypoints/02.svg" alt="" />
                        <img className="transform duration-500 ease-out hover:translate-y-2" src="/mobile-app-keypoints/03.svg" alt="" />
                    </div>
                    <div>
                        <img className="transform duration-500 ease-out hover:translate-y-2" src="/mobile-app-keypoints/04.svg" alt="" />
                        <img className="my-6 transform duration-500 ease-out hover:translate-y-2" src="/mobile-app-keypoints/05.svg" alt="" />
                        <img className="transform duration-500 ease-out hover:translate-y-2" src="/mobile-app-keypoints/06.svg" alt="" />
                    </div>
                </div>
                <div className="absolute top-[76%] w-[320px] h-auto left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {/* <img src="/Free_Iphone_15_Mockup_4 copy.png" alt="" /> */}
                                        <img ref={phoneRef} src="/Free_Iphone_15_Mockup_4 copy.png" alt="Phone Mockup" />

                    <div className="flex gap-4 mt-10" >
                        <Link to="https://apps.apple.com/in/app/officekit-app/id1382735899" >
                            <img className="transform hover:scale-105 ease-out duration-300" src="/apple.svg" alt="" />
                        </Link>
                        <Link to='https://play.google.com/store/search?q=officekit&c=apps&hl=en_IN' >
                            <img className="transform hover:scale-105 ease-out duration-300" src="/play.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default MobileApp;