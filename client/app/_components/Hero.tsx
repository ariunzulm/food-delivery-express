import { Plus } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5ede0] max-h-105">
      <div className="relative w-full h-105 bg-cover bg-center bg-no-repeat bg-[url(/hero-bg.svg)]">
        <div className="absolute top-1/4 left-0 w-7/8 h-55 bg-[#181818] rounded-r-full z-2" />
        <div className="absolute top-2/7 left-0 w-8/9 h-55 bg-[#FD543F] rounded-r-full z-1" />

        <div className="absolute top-1/2 flex items-center w-full h-full z-20">
          <div className="flex flex-col justify-center gap-4 pl-8 sm:pl-14 pt-10 pb-10 flex-1 min-w-0">
            <h2 className="text-white text-8xl font-extrabold leading-3 tracking-tighter uppercase absolute z-10 -top-3 left-7 w-75 h-18 -translate-y-[20%]">
              TODAY'S
            </h2>
            <h2 className="text-white text-8xl font-extrabold leading-3 tracking-tighter uppercase absolute z-30 top-10 right-40 w-75 h-18 -translate-y-[20%]">
              Offer!
            </h2>

            <div className="inline-flex items-center absolute z-20 top-25 left-20 w-fit px-6 py-4 -translate-y-[20%] rounded-full bg-[#FD543F]">
              <span className="text-white text-3xl font-bold uppercase tracking-wide">
                STEAK SOCIETY
              </span>
            </div>
            <div className="absolute z-10 top-28 left-20 w-75 h-18 -translate-y-[20%] rounded-full bg-white"></div>
          </div>
          <div className="absolute z-20 -top-30 right-26 w-80 -translate-y-[20%]">
            <img
              src="/hero-plate.png"
              alt="Today's featured dish"
              className="w-full object-contain drop-shadow-2xl"
            />
          </div>

          <div className="absolute z-20 -top-40 right-46 w-40 -translate-y-[20%]">
            <img
              src="/hero-cake.png"
              alt="cake"
              aria-hidden="true"
              className="w-full object-contain drop-shadow-xl"
            />
          </div>
          <div className="absolute z-30 -top-1/5 right-1/4 -translate-y-[20%]">
            <Plus className="text-red-500 font-extrabold size-17" />
          </div>
          <div className="absolute z-20 -top-1/3 right-1/5  w-170 -translate-y-[20%]">
            <img
              src="/hero-dish.png"
              alt="hero-dish"
              aria-hidden="true"
              className="w-full object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
