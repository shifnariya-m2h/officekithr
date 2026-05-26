import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { HERO_IMAGES } from "@/lib/seo/assets";

const KEYPOINT = { width: 360, height: 120 };

function MobileApp() {

  const keypointImg = (src: string, label: string) => (
    <img
      className="w-full transform duration-500 ease-out hover:translate-y-2"
      src={src}
      alt={label}
      width={KEYPOINT.width}
      height={KEYPOINT.height}
      loading="lazy"
      decoding="async"
    />
  );

  return (
    <section className="pt-12 sm:pt-16 lg:pt-p-tursioury pb-20 sm:pb-24 lg:pb-mb-common bg-[#01004f] min-h-screen lg:h-[1140px]">
      <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20 lg:mb-32">
          <Badge className="bg-transparent font-normal py-2 text-white mb-4 border-2 border-[#f1f1f1] hover:bg-transparent">
            Mobile App
          </Badge>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 lg:leading-[1.2]">
            Your Workplace in Your Pocket <br className="hidden sm:block" /> with
            OfficeKit Mobile App.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-white">
            Unleash your creativity and build exceptional sites effortlessly,
            supported by <br className="hidden sm:block" /> real-time customer
            assistance every step of the way.
          </p>
        </div>

        <div className="lg:hidden">
          <div className="space-y-4 sm:space-y-6 max-w-md mx-auto mb-8 sm:mb-12">
            {keypointImg("/mobile-app-keypoints/01.svg", "Mobile app feature: attendance")}
            {keypointImg("/mobile-app-keypoints/02.svg", "Mobile app feature: leave requests")}
            {keypointImg("/mobile-app-keypoints/03.svg", "Mobile app feature: payslips")}
          </div>

          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="w-full max-w-[240px] sm:max-w-[280px]">
              <OptimizedImage
                src={HERO_IMAGES.mobile.src}
                srcSet={HERO_IMAGES.mobile.srcSet}
                sizes="(max-width: 640px) 240px, 280px"
                alt={HERO_IMAGES.mobile.alt}
                className="w-full h-auto"
                width={HERO_IMAGES.mobile.width}
                height={HERO_IMAGES.mobile.height}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 max-w-md mx-auto mb-8">
            {keypointImg("/mobile-app-keypoints/04.svg", "Mobile app feature: approvals")}
            {keypointImg("/mobile-app-keypoints/05.svg", "Mobile app feature: notifications")}
            {keypointImg("/mobile-app-keypoints/06.svg", "Mobile app feature: self-service")}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Link
              to="https://apps.apple.com/in/app/officekit-app/id1382735899"
              aria-label="Download OfficeKit HR on the App Store"
            >
              <img
                className="w-28 sm:w-32 h-auto transform hover:scale-105 ease-out duration-300"
                src="/apple.svg"
                alt=""
                width={120}
                height={40}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <Link
              to="https://play.google.com/store/search?q=officekit&c=apps&hl=en_IN"
              aria-label="Download OfficeKit HR on Google Play"
            >
              <img
                className="w-28 sm:w-32 h-auto transform hover:scale-105 ease-out duration-300"
                src="/play.svg"
                alt=""
                width={135}
                height={40}
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex justify-between items-center">
            <div>
              {keypointImg("/mobile-app-keypoints/01.svg", "Mobile app feature: attendance")}
              <div className="my-6">
                {keypointImg("/mobile-app-keypoints/02.svg", "Mobile app feature: leave requests")}
              </div>
              {keypointImg("/mobile-app-keypoints/03.svg", "Mobile app feature: payslips")}
            </div>
            <div>
              {keypointImg("/mobile-app-keypoints/04.svg", "Mobile app feature: approvals")}
              <div className="my-6">
                {keypointImg("/mobile-app-keypoints/05.svg", "Mobile app feature: notifications")}
              </div>
              {keypointImg("/mobile-app-keypoints/06.svg", "Mobile app feature: self-service")}
            </div>
          </div>
          <div className="absolute top-[76%] w-[320px] h-auto left-1/2 -translate-x-1/2 -translate-y-1/2">
            <OptimizedImage
              src={HERO_IMAGES.mobile.src}
              srcSet={HERO_IMAGES.mobile.srcSet}
              sizes="320px"
              alt={HERO_IMAGES.mobile.alt}
              width={HERO_IMAGES.mobile.width}
              height={HERO_IMAGES.mobile.height}
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />

            <div className="flex gap-4 mt-10">
              <Link
                to="https://apps.apple.com/in/app/officekit-app/id1382735899"
                aria-label="Download OfficeKit HR on the App Store"
              >
                <img
                  className="transform hover:scale-105 ease-out duration-300"
                  src="/apple.svg"
                  alt=""
                  width={120}
                  height={40}
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <Link
                to="https://play.google.com/store/search?q=officekit&c=apps&hl=en_IN"
                aria-label="Download OfficeKit HR on Google Play"
              >
                <img
                  className="transform hover:scale-105 ease-out duration-300"
                  src="/play.svg"
                  alt=""
                  width={135}
                  height={40}
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileApp;
