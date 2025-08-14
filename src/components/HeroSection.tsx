import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-52 mt-20 pb-40 mx-4 rounded-3xl relative  bg-[url('/hero.svg')]">
      <div className="container mx-auto px-4 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="section-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              AI Powered HR Build for the
              <span className="gradient-text"> Future</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              Your journey matters. Our tailored software streamlines operations, supports your team, and fuels growth. Together, let’s build a brighter tomorrow.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="btn-cta h-[44px] py-[22px] group">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="https://www.youtube.com/watch?v=Tposa0O5s_k">
                <Button
                  variant="outline"
                  className="btn-cta text-black h-[44px] px-6 group"
                >                  <Play className="mr-2 h-4 w-4" />
                  Watch Overview
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center space-x-8">
              <div className="text-base text-muted-foreground">
                <span className="block font-bold text-foreground text-3xl">25+</span>
                Worldwide countries
              </div>
              <div className="text-base text-muted-foreground">
                <span className="block font-bold text-foreground text-3xl">100K+</span>
                Total users
              </div>
              <div className="text-base text-muted-foreground">
                <span className="block font-bold text-foreground text-3xl">20+</span>
                Industries covered
              </div>
            </div>
          </div>
          <div>
            <img className=" absolute right-0 bottom-0 rounded-br-3xl h-[700px] w-auto" src="/public/hero-main.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;