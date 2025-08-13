import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";

type Props = {}

function MobileApp({ }: Props) {
    return (
        <section className="py-20  h-[1140px] bg-[#01004f]">
            <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-32">
                    <Badge className="bg-transparent font-normal py-2 text-white mb-4 border border-[#ededed] hover:bg-transparent"  >
                        Mobile App
                    </Badge>
                    <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 lg:leading-[1.2]">
                        Your Workplace in Your Pocket <br /> with OfficeKit Mobile App.
                    </h2>
                    
                    <p className="text-xl text-white" >Unleash your creativity and build exceptional sites effortlessly, supported by <br /> real-time customer assistance every step of the way.</p>
                </div>

                <div className="flex justify-between items-center" >
                    <div>
                        <img className="transform duration-500 ease-out hover:translate-y-2" src="public/mobile-app-keypoints/01.svg" alt="" />
                        <img className="my-6 transform duration-500 ease-out hover:translate-y-2" src="public/mobile-app-keypoints/02.svg" alt="" />
                        <img className="transform duration-500 ease-out hover:translate-y-2" src="public/mobile-app-keypoints/03.svg" alt="" />
                    </div>
                    <div>
                        <img className="transform duration-500 ease-out hover:translate-y-2" src="public/mobile-app-keypoints/04.svg" alt="" />
                        <img className="my-6 transform duration-500 ease-out hover:translate-y-2" src="public/mobile-app-keypoints/05.svg" alt="" />
                        <img className="transform duration-500 ease-out hover:translate-y-2" src="public/mobile-app-keypoints/06.svg" alt="" />
                    </div>
                </div>
                <div className="absolute top-[76%] w-[320px] h-auto left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img src="public/Free_Iphone_15_Mockup_4 copy.png" alt="" />
                    <div className="flex gap-4 mt-10" >
                        <Link to="https://apps.apple.com/in/app/officekit-app/id1382735899" >
                            <img className="transform hover:scale-105 ease-out duration-300" src="public/apple.svg" alt="" />
                        </Link>
                        <Link to='https://play.google.com/store/search?q=officekit&c=apps&hl=en_IN' >
                            <img className="transform hover:scale-105 ease-out duration-300" src="public/play.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default MobileApp;