import PropTypes from "prop-types";
import { HeroComponent } from "@/Components/HeroComponent";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

export default function Page() {
  return (
    <>
      <HeroComponent />
      <V0Hero />
      <CtaCardLightblue />
    </>
  );
}

export const CtaCardLightblue = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center gap-2.5 p-[50px] relative bg-white rounded-[25px] border border-solid border-slate-200 [background:linear-gradient(180deg,rgb(255,255,255)_0%,rgb(191,219,254)_100%)]">
      <img
        className="h-[250px] top-[69px] left-[1030px] absolute w-[250px] object-cover"
        alt="Holo diamond"
        src="holo-diamond.png"
      />
      <img
        className="h-[219px] top-32 left-[22px] absolute w-[250px] object-cover"
        alt="Holo star"
        src="holo-star.png"
      />
      <div className="flex flex-col items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'HK_Grotesk-SemiBold',Helvetica] font-semibold text-[#020713] text-[64px] tracking-[0] leading-[64px] whitespace-nowrap">
            Start your free trial
          </div>
          <p className="relative w-[919px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#020713] text-2xl text-center tracking-[0] leading-9">
            Harness the Power of Product Analytics for Enhanced Career
            Conversion, Acquisition, and Retention.
          </p>
        </div>
        <div className="inline-flex gap-[17px] items-center relative flex-[0_0_auto]">
          <Input placeholder="Your email address" type="email" />
          <Button className="!flex-[0_0_auto] !bg-[#020713]">
            Get started
          </Button>
        </div>
        <div className="flex justify-center gap-[50px] px-0 py-2.5 self-stretch w-full items-center relative flex-[0_0_auto]">
          <div className="inline-flex justify-center gap-2.5 items-center relative flex-[0_0_auto]">
            <CheckCircle
              className="!relative !left-[unset] !top-[unset]"
              size="twenty-four"
            />
            <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#020713] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Free trial
            </div>
          </div>
          <div className="inline-flex justify-center gap-2.5 items-center relative flex-[0_0_auto]">
            <CheckCircle
              className="!relative !left-[unset] !top-[unset]"
              size="twenty-four"
            />
            <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#020713] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              No credit card required
            </div>
          </div>
          <div className="inline-flex justify-center gap-2.5 items-center relative flex-[0_0_auto]">
            <CheckCircle
              className="!relative !left-[unset] !top-[unset]"
              size="twenty-four"
            />
            <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#020713] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Upgrade anytime
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  size: "twenty-four";
  className: any;
}

export const CheckCircle = ({ size, className }: Props): JSX.Element => {
  return (
    <img className={`absolute w-6 h-6 top-0 left-0 ${className}`} alt="Size" />
  );
};

CheckCircle.propTypes = {
  size: PropTypes.oneOf(["twenty-four"]),
};

import Image from "next/image";
import Link from "next/link";

export function V0Hero() {
  return (
    <div className="bg-[#e6f0ff] min-h-screen">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg"
            alt="SkilledScore Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-gray-800">SkilledScore</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link className="text-gray-600 hover:text-gray-800" href="#">
            How it Works
          </Link>
          <Link className="text-gray-600 hover:text-gray-800" href="#">
            Blogs
          </Link>
          <Link className="text-gray-600 hover:text-gray-800" href="#">
            Pricing
          </Link>
          <Link className="text-gray-600 hover:text-gray-800" href="#">
            Sign In
          </Link>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Sign Up
        </Button>
      </header>
      <main className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            How skilled are you? Let&apos;s find out your score!
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            SkilledScore - A smarter way to find right skills and jobs. Unlock
            your potential with SkilledScore - Transform your skills today!
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Input
              className="flex-grow"
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
            />
            <Button className="bg-gray-800 hover:bg-gray-900 text-white">
              Find your score
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Skilled Score Graphic"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </main>
    </div>
  );
}
