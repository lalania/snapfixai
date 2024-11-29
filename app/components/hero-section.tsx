import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center justify-center">
        <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
          <div className="space-y-2">
            <h1
              className={cn(
                "text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500",
                "mb-4",
              )}
            >
              Perfect Photos, Every Time
            </h1>
            <p
              className={cn(
                "max-w-[600px] text-gray-800 md:text-xl mx-auto lg:mx-0",
                "opacity-90",
              )}
            >
              Instantly fix blinking eyes, remove red-eye, and enhance your
              photos with just one tap.
            </p>
          </div>
          <div className="w-full space-y-2 mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <Button
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
                size="lg"
              >
                <svg
                  viewBox="0 0 384 512"
                  className="w-5 h-5 mr-2 fill-current"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                Download for iOS
              </Button>
              <Button
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
                size="lg"
              >
                <svg
                  viewBox="0 0 505.145 505.145"
                  className="w-5 h-5 mr-2 fill-current"
                >
                  <g>
                    <path d="m68.541 164.715h-1.294c-16.588 0-30.113 13.568-30.113 30.113v131.107c0 16.61 13.525 30.134 30.113 30.134h1.316c16.588 0 30.113-13.568 30.113-30.134v-131.108c-0.022-16.544-13.568-30.112-30.135-30.112z" />
                    <path d="m113.085 376.54c0 15.229 12.446 27.632 27.675 27.632h29.574v70.817c0 16.631 13.568 30.156 30.113 30.156h1.294c16.61 0 30.156-13.546 30.156-30.156v-70.817h41.33v70.817c0 16.631 13.611 30.156 30.156 30.156h1.273c16.609 0 30.134-13.546 30.134-30.156v-70.817h29.595c15.207 0 27.654-12.403 27.654-27.632v-207.979h-278.954z" />
                    <path d="m322.041 43.983l23.491-36.26c1.51-2.287 0.841-5.414-1.467-6.903-2.286-1.51-5.414-0.884-6.903 1.467l-24.353 37.512c-18.27-7.485-38.676-11.691-60.226-11.691-21.571 0-41.934 4.206-60.247 11.691l-24.31-37.512c-1.489-2.351-4.638-2.977-6.946-1.467-2.308 1.488-2.977 4.616-1.467 6.903l23.512 36.26c-42.387 20.773-70.968 59.924-70.968 104.834 0 2.761 0.173 5.479 0.41 8.175h280.053c0.237-2.696 0.388-5.414 0.388-8.175 0.001-44.91-28.602-84.061-70.967-104.834zm-134.386 64.928c-7.442 0-13.482-5.997-13.482-13.46s6.04-13.439 13.482-13.439c7.485 0 13.482 5.975 13.482 13.439s-6.04 13.46-13.482 13.46zm129.835 0c-7.442 0-13.482-5.997-13.482-13.46s6.04-13.439 13.482-13.439c7.463 0 13.46 5.975 13.46 13.439 0 7.463-5.997 13.46-13.46 13.46z" />
                    <path d="m437.876 164.715h-1.251c-16.588 0-30.156 13.568-30.156 30.113v131.107c0 16.61 13.59 30.134 30.156 30.134h1.273c16.609 0 30.113-13.568 30.113-30.134v-131.108c0-16.544-13.547-30.112-30.135-30.112z" />
                  </g>
                </svg>
                Download for Android
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-[300px] h-[650px]">
            <div className="absolute inset-0 bg-black rounded-[3rem] shadow-xl overflow-hidden  border-8 border-black">
              <div className="absolute top-0 inset-x-0 h-[32px] bg-black rounded-t-[3rem]"></div>
              <div className="absolute top-[32px] inset-x-0 bottom-0 bg-white rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/hero.jpg"
                  alt="Before and after comparison of eye-fixing feature"
                  fill={true}
                  className="rounded-b-[2.5rem] object-cover heigth-full"
                  priority
                />
              </div>
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
