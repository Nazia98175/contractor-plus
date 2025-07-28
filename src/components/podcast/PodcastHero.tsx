import Image from "next/image";
import { YouTubeIcon } from "../common/AppIcons";
import Copy from "../common/Copy";

const PodcastHero = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1312px] px-2">
      <Copy delay={0.2}>
        <h4 className="sm:bg-darkKnight text-secondary sm:text-wallStreet mx-auto w-fit rounded-md px-3 py-1 text-sm font-semibold tracking-[-0.24px] backdrop-blur-lg sm:text-xs">
          Contractor+ Podcasts
        </h4>
      </Copy>
      <Copy delay={0}>
        <h2 className="main-heading gradient-white mb-4 text-center !font-medium text-transparent">
          Voices of the Trade
        </h2>
      </Copy>
      <Copy delay={0.4}>
        <p className="hero-description !text-trolleyGrey my-[26px] text-center">
          Unfiltered. Unapologetic. Unmissable.
        </p>
      </Copy>
      <button
        className="bg-red-linear primary-btn mx-auto flex h-10 !w-full max-w-[265px] items-center gap-1.5"
        type="button"
      >
        Subscribe on YouTube <YouTubeIcon />
      </button>
      <div className="relative mx-auto mb-[-100px] hidden w-full max-w-[1316px] sm:-mb-[160px] sm:block lg:-mb-[200px]">
        {/* <div className="relative translate-x-[200px] text-center">
          <Image
            src="/images/webp/you-could-be-man.webp"
            alt="You could be our next guest!"
            height={513}
            width={410}
            className="h-fit max-h-[513px] object-contain"
          />
          <BlurIcon classNames="absolute left-[30%] top-[-4%]" />
          <b className="podcast-hero-user text-base leading-[120%] font-semibold">
            You could be our next guest!
          </b>
        </div>

        <div className="translate-x-[100px] text-center">
          <Image
            src="/images/webp/gerritt-bake-podcast.webp"
            alt="Gerritt Bake"
            height={513}
            width={410}
            className="h-fit max-h-[513px] object-contain"
          />
          <b className="podcast-hero-user text-base leading-[120%] font-semibold">
            Gerritt Bake
          </b>
          <p className="text-rgba6 mt-1 text-base leading-[120%] font-medium">
            Founder, American Contractor Network
          </p>
        </div>

        <div className="mt-[33px] text-center">
          <Image
            src="/images/webp/podcast-jistin-smith.webp"
            alt="Justin Smith"
            height={513}
            width={410}
            className="h-fit max-h-[513px] object-contain"
          />
          <b className="podcast-hero-user text-base leading-[120%] font-semibold">
            Justin Smith
          </b>
          <p className="text-rgba6 mt-1 text-base leading-[120%] font-medium">
            CEO, Contractor+
          </p>
        </div>

        <div className="mt-[40px] translate-x-[-100px] text-center">
          <Image
            src="/images/webp/roshan-podcast.webp"
            alt="Roshan Sethia"
            height={513}
            width={410}
            className="h-fit max-h-[513px] object-contain"
          />
          <b className="podcast-hero-user text-base leading-[120%] font-semibold">
            Roshan Sethia
          </b>
          <p className="text-rgba6 mt-1 text-base leading-[120%] font-medium">
            CTO, Contractor+
          </p>
        </div>

        <div className="relative translate-x-[-200px] text-center">
          <Image
            src="/images/webp/you-could-be-woman.webp"
            alt="You could be our next guest!"
            height={513}
            width={410}
            className="h-fit max-h-[513px] object-contain"
          />
          <BlurIcon classNames="absolute left-[30%] top-[-4%]" />
          <b className="podcast-hero-user text-base leading-[120%] font-semibold">
            You could be our next guest!
          </b>
        </div> */}

        <Image
          src={"/images/webp/trader-group.webp"}
          width={1050}
          height={579}
          alt="trader-group"
          className="relative mx-auto max-h-[831px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default PodcastHero;
